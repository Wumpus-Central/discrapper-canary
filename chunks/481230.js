n.d(t, {
    R$: function () {
        return p;
    },
    ZP: function () {
        return m;
    }
});
var i = n(913527),
    r = n.n(i),
    s = n(990547),
    l = n(570140),
    o = n(479531),
    a = n(771308),
    c = n(314897),
    d = n(626135),
    u = n(573261),
    h = n(959776),
    f = n(981631),
    g = n(723359);
function m(e) {
    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
    return p({
        ...i,
        invite: t,
        giftCodeSKUId: n
    });
}
function p(e) {
    let { email: t, phoneToken: n, username: i, globalName: m, consent: p, password: x, guildTemplateCode: _, birthday: E, invite: I = null, giftCodeSKUId: v = null, multiStep: N = !1, promoEmailConsent: C = null, usedUsernameSuggestion: b = null } = e;
    return (
        l.Z.dispatch({
            type: 'REGISTER',
            birthday: N ? E : null
        }),
        null != E &&
            ((0, h.Z)(E, f.jXE.REGISTER),
            d.default.track(f.rMx.AGE_GATE_ACTION, {
                source: g.L0.REGISTER,
                action: g.Al.AGE_GATE_SUBMITTED
            }),
            !(function (e) {
                let t;
                let n = r()().diff(e, 'years');
                !(n < 13) && ((t = n >= 13 && n <= 17 ? '13-17' : n >= 18 && n <= 22 ? '18-22' : '23+'), d.default.track(f.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
            })(E)),
        u.Z.post({
            url: f.ANM.REGISTER,
            body: {
                fingerprint: c.default.getFingerprint(),
                email: t,
                username: i,
                global_name: m,
                password: x,
                invite: I,
                consent: p,
                phone_token: n,
                date_of_birth: null == E ? void 0 : E.format('YYYY-MM-DD'),
                gift_code_sku_id: v,
                guild_template_code: _,
                promotional_email_opt_in: null == C ? void 0 : C.checked
            },
            trackedActionData: {
                event: s.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: I,
                    used_username_suggestion: b,
                    promotional_email_opt_in: null == C ? void 0 : C.checked,
                    promotional_email_pre_checked: null == C ? void 0 : C.preChecked,
                    was_unique_username: !0
                }
            },
            rejectWithError: !1
        }).then(
            (e) => {
                l.Z.dispatch({
                    type: 'REGISTER_SUCCESS',
                    token: e.body.token
                }),
                    d.default.track(f.rMx.AGE_GATE_ACTION, {
                        source: g.L0.REGISTER,
                        action: g.Al.AGE_GATE_SUCCESS
                    });
            },
            (e) => {
                let t = new o.Z(e);
                throw (
                    (l.Z.dispatch({
                        type: 'REGISTER_FAILURE',
                        error: t
                    }),
                    null != t.getFieldErrors('date_of_birth') && a.wE(g.L0.REGISTER),
                    d.default.track(f.rMx.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: !0,
                        email_error_reason: t.getFirstFieldErrorMessage('email'),
                        phone_error_reason: t.getFirstFieldErrorMessage('phone'),
                        password_error_reason: t.getFirstFieldErrorMessage('password'),
                        username_error_reason: t.getFirstFieldErrorMessage('username'),
                        global_name_error_reason: t.getFirstFieldErrorMessage('global_name'),
                        date_of_birth_error_reason: t.getFirstFieldErrorMessage('date_of_birth')
                    }),
                    e)
                );
            }
        )
    );
}

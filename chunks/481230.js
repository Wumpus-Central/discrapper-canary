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
    g = n(981631),
    f = n(723359);
function m(e) {
    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
    return p({
        ...i,
        invite: t,
        giftCodeSKUId: n
    });
}
function p(e) {
    let { email: t, phoneToken: n, username: i, globalName: m, consent: p, password: x, guildTemplateCode: _, birthday: E, invite: I = null, giftCodeSKUId: N = null, promoEmailConsent: v = null, usedUsernameSuggestion: C = null } = e;
    return (
        l.Z.dispatch({ type: 'REGISTER' }),
        null != E &&
            ((0, h.Z)(E, g.jXE.REGISTER),
            d.default.track(g.rMx.AGE_GATE_ACTION, {
                source: f.L0.REGISTER,
                action: f.Al.AGE_GATE_SUBMITTED
            }),
            !(function (e) {
                let t;
                let n = r()().diff(e, 'years');
                !(n < 13) && ((t = n >= 13 && n <= 17 ? '13-17' : n >= 18 && n <= 22 ? '18-22' : '23+'), d.default.track(g.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
            })(E)),
        u.Z.post({
            url: g.ANM.REGISTER,
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
                gift_code_sku_id: N,
                guild_template_code: _,
                promotional_email_opt_in: null == v ? void 0 : v.checked
            },
            trackedActionData: {
                event: s.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: I,
                    used_username_suggestion: C,
                    promotional_email_opt_in: null == v ? void 0 : v.checked,
                    promotional_email_pre_checked: null == v ? void 0 : v.preChecked,
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
                    d.default.track(g.rMx.AGE_GATE_ACTION, {
                        source: f.L0.REGISTER,
                        action: f.Al.AGE_GATE_SUCCESS
                    });
            },
            (e) => {
                let t = new o.Z(e);
                throw (
                    (l.Z.dispatch({
                        type: 'REGISTER_FAILURE',
                        error: t
                    }),
                    null != t.getFieldErrors('date_of_birth') && a.wE(f.L0.REGISTER),
                    d.default.track(g.rMx.REGISTER_SUBMIT_ERRORED, {
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

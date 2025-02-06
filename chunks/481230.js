n.d(t, {
    R$: () => m,
    ZP: () => p
});
var i = n(913527),
    r = n.n(i),
    l = n(990547),
    a = n(570140),
    o = n(479531),
    s = n(771308),
    c = n(314897),
    d = n(626135),
    u = n(573261),
    h = n(959776),
    _ = n(981631),
    g = n(723359);
function p(e) {
    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
    return m({
        ...i,
        invite: t,
        giftCodeSKUId: n
    });
}
function m(e) {
    let { email: t, phoneToken: n, username: i, globalName: p, consent: m, password: f, guildTemplateCode: x, birthday: E, invite: I = null, giftCodeSKUId: v = null, promoEmailConsent: N = null, usedUsernameSuggestion: b = null } = e;
    return (
        a.Z.dispatch({ type: 'REGISTER' }),
        null != E &&
            ((0, h.Z)(E, _.jXE.REGISTER),
            d.default.track(_.rMx.AGE_GATE_ACTION, {
                source: g.L0.REGISTER,
                action: g.Al.AGE_GATE_SUBMITTED
            }),
            (function (e) {
                let t;
                let n = r()().diff(e, 'years');
                n < 13 || ((t = n >= 13 && n <= 17 ? '13-17' : n >= 18 && n <= 22 ? '18-22' : '23+'), d.default.track(_.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
            })(E)),
        u.Z.post({
            url: _.ANM.REGISTER,
            body: {
                fingerprint: c.default.getFingerprint(),
                email: t,
                username: i,
                global_name: p,
                password: f,
                invite: I,
                consent: m,
                phone_token: n,
                date_of_birth: null == E ? void 0 : E.format('YYYY-MM-DD'),
                gift_code_sku_id: v,
                guild_template_code: x,
                promotional_email_opt_in: null == N ? void 0 : N.checked
            },
            trackedActionData: {
                event: l.NetworkActionNames.USER_REGISTER,
                properties: {
                    invite_code: I,
                    used_username_suggestion: b,
                    promotional_email_opt_in: null == N ? void 0 : N.checked,
                    promotional_email_pre_checked: null == N ? void 0 : N.preChecked,
                    was_unique_username: !0
                }
            },
            rejectWithError: !1
        }).then(
            (e) => {
                a.Z.dispatch({
                    type: 'REGISTER_SUCCESS',
                    token: e.body.token
                }),
                    d.default.track(_.rMx.AGE_GATE_ACTION, {
                        source: g.L0.REGISTER,
                        action: g.Al.AGE_GATE_SUCCESS
                    });
            },
            (e) => {
                let t = new o.Z(e);
                throw (
                    (null != t.getFieldErrors('date_of_birth') && s.wE(g.L0.REGISTER),
                    d.default.track(_.rMx.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: !0,
                        email_error_reason: t.getFirstFieldErrorMessage('email'),
                        phone_error_reason: t.getFirstFieldErrorMessage('phone'),
                        password_error_reason: t.getFirstFieldErrorMessage('password'),
                        username_error_reason: t.getFirstFieldErrorMessage('username'),
                        global_name_error_reason: t.getFirstFieldErrorMessage('global_name'),
                        date_of_birth_error_reason: t.getFirstFieldErrorMessage('date_of_birth')
                    }),
                    t)
                );
            }
        )
    );
}

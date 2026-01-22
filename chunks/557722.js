n.d(t, {
    A: () => d,
    d: () => u,
});
var r = n(110259),
    i = n(562465),
    a = n(73153),
    s = n(961350),
    o = n(499785),
    l = n(53516),
    c = n(652215),
    u = (function (e) {
        return (
            (e.USER_ACTION_REQUIRED = "user_action_required"),
            (e.USER_SETTINGS_UPDATE = "user_settings_update"),
            (e.GUILD_PHONE_REQUIRED = "guild_phone_required"),
            (e.MFA_PHONE_UPDATE = "mfa_phone_update"),
            (e.CONTACT_SYNC = "contact_sync"),
            e
        );
    })({});
let d = {
    setCountryCode(e) {
        a.h.dispatch({
            type: "PHONE_SET_COUNTRY_CODE",
            countryCode: e,
        });
    },
    removePhone: (e, t) =>
        i.Bo.del({
            url: c.Rsh.PHONE,
            body: {
                password: e,
                change_phone_reason: t,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    resendCode(e) {
        let t = {},
            n = s.default.getFingerprint();
        return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            i.Bo.post({
                url: c.Rsh.RESEND_PHONE,
                headers: t,
                body: {
                    phone: e,
                },
                rejectWithError: !1,
            })
        );
    },
    beginAddPhone: (e, t) =>
        i.Bo.post({
            url: c.Rsh.PHONE,
            body: {
                phone: e,
                change_phone_reason: t,
            },
            rejectWithError: !1,
        }),
    addPhone: (e, t, n) =>
        i.Bo.post({
            url: c.Rsh.PHONE,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    addPhoneWithoutPassword: (e) =>
        i.Bo.post({
            url: c.Rsh.PHONE_VERIFY_NO_PASSWORD,
            body: {
                code: e,
            },
            rejectWithError: !1,
        }),
    beginReverifyPhone: (e, t) =>
        i.Bo.post({
            url: c.Rsh.PHONE_REVERIFY,
            body: {
                phone: e,
                change_phone_reason: t,
            },
            rejectWithError: !1,
        }),
    reverifyPhone: (e, t, n) =>
        i.Bo.post({
            url: c.Rsh.PHONE_REVERIFY,
            body: {
                phone_token: e,
                password: t,
                change_phone_reason: n,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    validatePhoneForSupport: (e) =>
        i.Bo.post({
            url: c.Rsh.VERIFY_PHONE_FOR_TICKET,
            body: {
                token: e,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async verifyPhone(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = {},
            d = s.default.getFingerprint();
        null != d && "" !== d && (u["X-Fingerprint"] = d), i && (u.authorization = "");
        let f = await o.A.post({
            url: c.Rsh.VERIFY_PHONE,
            headers: u,
            body: {
                phone: e,
                code: t,
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_VERIFY_PHONE,
            },
            rejectWithError: !1,
        });
        return (
            n &&
                a.h.dispatch({
                    type: "MODAL_POP",
                    key: l.V,
                }),
            f.body
        );
    },
};

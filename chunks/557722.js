l.d(t, { A: () => E, d: () => h });
var n,
    i = l(110259),
    r = l(636537),
    a = l(228366),
    o = l(495544),
    s = l(499785),
    c = l(53516),
    d = l(652215),
    h =
        (((n = {}).USER_ACTION_REQUIRED = "user_action_required"),
        (n.USER_SETTINGS_UPDATE = "user_settings_update"),
        (n.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (n.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (n.CONTACT_SYNC = "contact_sync"),
        n);
let E = {
    setCountryCode(e) {
        a.h.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
    },
    removePhone: (e, t) =>
        r.Bo.del({
            url: d.Rsh.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    resendCode(e) {
        let t = {},
            l = o.default.getFingerprint();
        return (
            null != l && "" !== l && (t["X-Fingerprint"] = l),
            r.Bo.post({ url: d.Rsh.RESEND_PHONE, headers: t, body: { phone: e }, rejectWithError: !1 })
        );
    },
    beginAddPhone: (e, t) =>
        r.Bo.post({ url: d.Rsh.PHONE, body: { phone: e, change_phone_reason: t }, rejectWithError: !1 }),
    addPhone: (e, t, l) =>
        r.Bo.post({
            url: d.Rsh.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    addPhoneWithoutPassword: (e) =>
        r.Bo.post({ url: d.Rsh.PHONE_VERIFY_NO_PASSWORD, body: { code: e }, rejectWithError: !1 }),
    beginReverifyPhone: (e, t) =>
        r.Bo.post({ url: d.Rsh.PHONE_REVERIFY, body: { phone: e, change_phone_reason: t }, rejectWithError: !1 }),
    reverifyPhone: (e, t, l) =>
        r.Bo.post({
            url: d.Rsh.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    validatePhoneForSupport: (e) =>
        r.Bo.post({ url: d.Rsh.VERIFY_PHONE_FOR_TICKET, body: { token: e }, oldFormErrors: !0, rejectWithError: !1 }),
    async verifyPhone(e, t) {
        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = {},
            h = o.default.getFingerprint();
        null != h && "" !== h && (r["X-Fingerprint"] = h), n && (r.authorization = "");
        let E = await s.A.post({
            url: d.Rsh.VERIFY_PHONE,
            headers: r,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_VERIFY_PHONE },
            rejectWithError: !1,
        });
        return l && a.h.dispatch({ type: "MODAL_POP", key: c.V }), E.body;
    },
};

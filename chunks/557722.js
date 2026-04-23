n.d(t, { A: () => h, d: () => u });
var i,
    l = n(110259),
    a = n(562465),
    s = n(73153),
    r = n(961350),
    o = n(499785),
    c = n(53516),
    d = n(652215),
    u =
        (((i = {}).USER_ACTION_REQUIRED = "user_action_required"),
        (i.USER_SETTINGS_UPDATE = "user_settings_update"),
        (i.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (i.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (i.CONTACT_SYNC = "contact_sync"),
        i);
let h = {
    setCountryCode(e) {
        s.h.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
    },
    removePhone: (e, t) =>
        a.Bo.del({
            url: d.Rsh.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    resendCode(e) {
        let t = {},
            n = r.default.getFingerprint();
        return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            a.Bo.post({ url: d.Rsh.RESEND_PHONE, headers: t, body: { phone: e }, rejectWithError: !1 })
        );
    },
    beginAddPhone: (e, t) =>
        a.Bo.post({ url: d.Rsh.PHONE, body: { phone: e, change_phone_reason: t }, rejectWithError: !1 }),
    addPhone: (e, t, n) =>
        a.Bo.post({
            url: d.Rsh.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    addPhoneWithoutPassword: (e) =>
        a.Bo.post({ url: d.Rsh.PHONE_VERIFY_NO_PASSWORD, body: { code: e }, rejectWithError: !1 }),
    beginReverifyPhone: (e, t) =>
        a.Bo.post({ url: d.Rsh.PHONE_REVERIFY, body: { phone: e, change_phone_reason: t }, rejectWithError: !1 }),
    reverifyPhone: (e, t, n) =>
        a.Bo.post({
            url: d.Rsh.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    validatePhoneForSupport: (e) =>
        a.Bo.post({ url: d.Rsh.VERIFY_PHONE_FOR_TICKET, body: { token: e }, oldFormErrors: !0, rejectWithError: !1 }),
    async verifyPhone(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = {},
            u = r.default.getFingerprint();
        null != u && "" !== u && (a["X-Fingerprint"] = u), i && (a.authorization = "");
        let h = await o.A.post({
            url: d.Rsh.VERIFY_PHONE,
            headers: a,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: { event: l.NetworkActionNames.USER_VERIFY_PHONE },
            rejectWithError: !1,
        });
        return n && s.h.dispatch({ type: "MODAL_POP", key: c.V }), h.body;
    },
};

"use strict";
n.d(t, { A: () => _, d: () => d });
var i,
    r = n(562708),
    s = n(636537),
    a = n(228366),
    o = n(495544),
    l = n(499785),
    u = n(53516),
    c = n(652215),
    d =
        (((i = {}).USER_ACTION_REQUIRED = "user_action_required"),
        (i.USER_SETTINGS_UPDATE = "user_settings_update"),
        (i.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (i.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (i.CONTACT_SYNC = "contact_sync"),
        i);
let _ = {
    setCountryCode(e) {
        a.h.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
    },
    removePhone: (e, t) =>
        s.Bo.del({
            url: c.Rsh.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    resendCode(e) {
        let t = {},
            n = o.default.getFingerprint();
        return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            s.Bo.post({ url: c.Rsh.RESEND_PHONE, headers: t, body: { phone: e }, rejectWithError: !1 })
        );
    },
    beginAddPhone: (e, t) =>
        s.Bo.post({ url: c.Rsh.PHONE, body: { phone: e, change_phone_reason: t }, rejectWithError: !1 }),
    addPhone: (e, t, n) =>
        s.Bo.post({
            url: c.Rsh.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    addPhoneWithoutPassword: (e) =>
        s.Bo.post({ url: c.Rsh.PHONE_VERIFY_NO_PASSWORD, body: { code: e }, rejectWithError: !1 }),
    beginReverifyPhone: (e, t) =>
        s.Bo.post({ url: c.Rsh.PHONE_REVERIFY, body: { phone: e, change_phone_reason: t }, rejectWithError: !1 }),
    reverifyPhone: (e, t, n) =>
        s.Bo.post({
            url: c.Rsh.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    validatePhoneForSupport: (e) =>
        s.Bo.post({ url: c.Rsh.VERIFY_PHONE_FOR_TICKET, body: { token: e }, oldFormErrors: !0, rejectWithError: !1 }),
    async verifyPhone(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = {},
            d = o.default.getFingerprint();
        null != d && "" !== d && (s["X-Fingerprint"] = d), i && (s.authorization = "");
        let _ = await l.A.post({
            url: c.Rsh.VERIFY_PHONE,
            headers: s,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: { event: r.NetworkActionNames.USER_VERIFY_PHONE },
            rejectWithError: !1,
        });
        return n && a.h.dispatch({ type: "MODAL_POP", key: u.V }), _.body;
    },
};

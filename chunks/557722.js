"use strict";
n.d(t, { A: () => _, d: () => u });
var i,
    r = n(562708),
    a = n(562465),
    s = n(228366),
    l = n(280450),
    o = n(499785),
    d = n(53516),
    c = n(652215),
    u =
        (((i = {}).USER_ACTION_REQUIRED = "user_action_required"),
        (i.USER_SETTINGS_UPDATE = "user_settings_update"),
        (i.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (i.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (i.CONTACT_SYNC = "contact_sync"),
        i);
let _ = {
    setCountryCode(e) {
        s.h.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
    },
    removePhone: (e, t) =>
        a.Bo.del({
            url: c.Rsh.PHONE,
            body: { password: e, change_phone_reason: t },
            oldFormErrors: !0,
            rejectWithError: (0, a.fT)(),
        }),
    resendCode(e) {
        let t = {},
            n = l.default.getFingerprint();
        return (
            null != n && "" !== n && (t["X-Fingerprint"] = n),
            a.Bo.post({ url: c.Rsh.RESEND_PHONE, headers: t, body: { phone: e }, rejectWithError: (0, a.fT)() })
        );
    },
    beginAddPhone: (e, t) =>
        a.Bo.post({ url: c.Rsh.PHONE, body: { phone: e, change_phone_reason: t }, rejectWithError: (0, a.fT)() }),
    addPhone: (e, t, n) =>
        a.Bo.post({
            url: c.Rsh.PHONE,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
            rejectWithError: (0, a.fT)(),
        }),
    addPhoneWithoutPassword: (e) =>
        a.Bo.post({ url: c.Rsh.PHONE_VERIFY_NO_PASSWORD, body: { code: e }, rejectWithError: (0, a.fT)() }),
    beginReverifyPhone: (e, t) =>
        a.Bo.post({
            url: c.Rsh.PHONE_REVERIFY,
            body: { phone: e, change_phone_reason: t },
            rejectWithError: (0, a.fT)(),
        }),
    reverifyPhone: (e, t, n) =>
        a.Bo.post({
            url: c.Rsh.PHONE_REVERIFY,
            body: { phone_token: e, password: t, change_phone_reason: n },
            oldFormErrors: !0,
            rejectWithError: (0, a.fT)(),
        }),
    validatePhoneForSupport: (e) =>
        a.Bo.post({
            url: c.Rsh.VERIFY_PHONE_FOR_TICKET,
            body: { token: e },
            oldFormErrors: !0,
            rejectWithError: (0, a.fT)(),
        }),
    async verifyPhone(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = {},
            _ = l.default.getFingerprint();
        null != _ && "" !== _ && (u["X-Fingerprint"] = _), i && (u.authorization = "");
        let E = await o.A.post({
            url: c.Rsh.VERIFY_PHONE,
            headers: u,
            body: { phone: e, code: t },
            oldFormErrors: !0,
            trackedActionData: { event: r.NetworkActionNames.USER_VERIFY_PHONE },
            rejectWithError: (0, a.fT)(),
        });
        return n && s.h.dispatch({ type: "MODAL_POP", key: d.V }), E.body;
    },
};

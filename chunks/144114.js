t.d(n, {
    L: function () {
        return r;
    }
});
var o,
    r,
    i = t(990547),
    a = t(544891),
    s = t(570140),
    l = t(314897),
    d = t(573261),
    c = t(815660),
    u = t(981631);
((o = r || (r = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (o.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (o.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (o.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (o.CONTACT_SYNC = 'contact_sync'),
    (n.Z = {
        setCountryCode(e) {
            s.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, n) =>
            a.tn.del({
                url: u.ANM.PHONE,
                body: {
                    password: e,
                    change_phone_reason: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        resendCode(e) {
            let n = {},
                t = l.default.getFingerprint();
            return (
                null != t && '' !== t && (n['X-Fingerprint'] = t),
                a.tn.post({
                    url: u.ANM.RESEND_PHONE,
                    headers: n,
                    body: { phone: e },
                    rejectWithError: !1
                })
            );
        },
        beginAddPhone: (e, n) =>
            a.tn.post({
                url: u.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: n
                },
                rejectWithError: !1
            }),
        addPhone: (e, n, t) =>
            a.tn.post({
                url: u.ANM.PHONE,
                body: {
                    phone_token: e,
                    password: n,
                    change_phone_reason: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        addPhoneWithoutPassword: (e) =>
            a.tn.post({
                url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
                body: { code: e },
                rejectWithError: !1
            }),
        beginReverifyPhone: (e, n) =>
            a.tn.post({
                url: u.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: n
                },
                rejectWithError: !1
            }),
        reverifyPhone: (e, n, t) =>
            a.tn.post({
                url: u.ANM.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: n,
                    change_phone_reason: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        validatePhoneForSupport: (e) =>
            a.tn.post({
                url: u.ANM.VERIFY_PHONE_FOR_TICKET,
                body: { token: e },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        async verifyPhone(e, n) {
            let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = {},
                a = l.default.getFingerprint();
            null != a && '' !== a && (r['X-Fingerprint'] = a), o && (r.authorization = '');
            let m = await d.Z.post({
                url: u.ANM.VERIFY_PHONE,
                headers: r,
                body: {
                    phone: e,
                    code: n
                },
                oldFormErrors: !0,
                trackedActionData: { event: i.NetworkActionNames.USER_VERIFY_PHONE },
                rejectWithError: !1
            });
            return (
                t &&
                    s.Z.dispatch({
                        type: 'MODAL_POP',
                        key: c.M
                    }),
                m.body
            );
        }
    });

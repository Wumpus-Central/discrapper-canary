n.d(t, {
    L: function () {
        return i;
    }
});
var o,
    i,
    r = n(990547),
    a = n(544891),
    c = n(570140),
    s = n(314897),
    l = n(573261),
    d = n(815660),
    u = n(981631);
((o = i || (i = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (o.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (o.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (o.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (o.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            c.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, t) =>
            a.tn.del({
                url: u.ANM.PHONE,
                body: {
                    password: e,
                    change_phone_reason: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        resendCode(e) {
            let t = {},
                n = s.default.getFingerprint();
            return (
                null != n && '' !== n && (t['X-Fingerprint'] = n),
                a.tn.post({
                    url: u.ANM.RESEND_PHONE,
                    headers: t,
                    body: { phone: e },
                    rejectWithError: !1
                })
            );
        },
        beginAddPhone: (e, t) =>
            a.tn.post({
                url: u.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                },
                rejectWithError: !1
            }),
        addPhone: (e, t, n) =>
            a.tn.post({
                url: u.ANM.PHONE,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
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
        beginReverifyPhone: (e, t) =>
            a.tn.post({
                url: u.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                },
                rejectWithError: !1
            }),
        reverifyPhone: (e, t, n) =>
            a.tn.post({
                url: u.ANM.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
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
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = {},
                a = s.default.getFingerprint();
            null != a && '' !== a && (i['X-Fingerprint'] = a), o && (i.authorization = '');
            let m = await l.Z.post({
                url: u.ANM.VERIFY_PHONE,
                headers: i,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: r.NetworkActionNames.USER_VERIFY_PHONE },
                rejectWithError: !1
            });
            return (
                n &&
                    c.Z.dispatch({
                        type: 'MODAL_POP',
                        key: d.M
                    }),
                m.body
            );
        }
    });

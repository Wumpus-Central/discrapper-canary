n.d(t, {
    L: function () {
        return o;
    }
});
var r,
    o,
    i = n(990547),
    a = n(544891),
    s = n(570140),
    l = n(314897),
    c = n(573261),
    d = n(815660),
    u = n(981631);
((r = o || (o = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (r.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (r.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (r.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (r.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            s.Z.dispatch({
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
                n = l.default.getFingerprint();
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
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                o = {},
                a = l.default.getFingerprint();
            null != a && '' !== a && (o['X-Fingerprint'] = a), r && (o.authorization = '');
            let E = await c.Z.post({
                url: u.ANM.VERIFY_PHONE,
                headers: o,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: i.NetworkActionNames.USER_VERIFY_PHONE },
                rejectWithError: !1
            });
            return (
                n &&
                    s.Z.dispatch({
                        type: 'MODAL_POP',
                        key: d.M
                    }),
                E.body
            );
        }
    });

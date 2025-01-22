n.d(t, {
    L: function () {
        return r;
    }
});
var i,
    r,
    l = n(990547),
    a = n(544891),
    o = n(570140),
    s = n(314897),
    c = n(573261),
    u = n(815660),
    d = n(981631);
((i = r || (r = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (i.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (i.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (i.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (i.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            o.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, t) =>
            a.tn.del({
                url: d.ANM.PHONE,
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
                    url: d.ANM.RESEND_PHONE,
                    headers: t,
                    body: { phone: e },
                    rejectWithError: !1
                })
            );
        },
        beginAddPhone: (e, t) =>
            a.tn.post({
                url: d.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                },
                rejectWithError: !1
            }),
        addPhone: (e, t, n) =>
            a.tn.post({
                url: d.ANM.PHONE,
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
                url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
                body: { code: e },
                rejectWithError: !1
            }),
        beginReverifyPhone: (e, t) =>
            a.tn.post({
                url: d.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                },
                rejectWithError: !1
            }),
        reverifyPhone: (e, t, n) =>
            a.tn.post({
                url: d.ANM.PHONE_REVERIFY,
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
                url: d.ANM.VERIFY_PHONE_FOR_TICKET,
                body: { token: e },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                r = {},
                a = s.default.getFingerprint();
            null != a && '' !== a && (r['X-Fingerprint'] = a), i && (r.authorization = '');
            let m = await c.Z.post({
                url: d.ANM.VERIFY_PHONE,
                headers: r,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: l.NetworkActionNames.USER_VERIFY_PHONE },
                rejectWithError: !1
            });
            return (
                n &&
                    o.Z.dispatch({
                        type: 'MODAL_POP',
                        key: u.M
                    }),
                m.body
            );
        }
    });

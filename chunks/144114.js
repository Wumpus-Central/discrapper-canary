n.d(t, {
    L: function () {
        return s;
    }
});
var r,
    s,
    o = n(990547),
    i = n(544891),
    c = n(570140),
    a = n(314897),
    d = n(573261),
    u = n(815660),
    l = n(981631);
((r = s || (s = {})).USER_ACTION_REQUIRED = 'user_action_required'),
    (r.USER_SETTINGS_UPDATE = 'user_settings_update'),
    (r.GUILD_PHONE_REQUIRED = 'guild_phone_required'),
    (r.MFA_PHONE_UPDATE = 'mfa_phone_update'),
    (r.CONTACT_SYNC = 'contact_sync'),
    (t.Z = {
        setCountryCode(e) {
            c.Z.dispatch({
                type: 'PHONE_SET_COUNTRY_CODE',
                countryCode: e
            });
        },
        removePhone: (e, t) =>
            i.tn.del({
                url: l.ANM.PHONE,
                body: {
                    password: e,
                    change_phone_reason: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        resendCode(e) {
            let t = {},
                n = a.default.getFingerprint();
            return (
                null != n && '' !== n && (t['X-Fingerprint'] = n),
                i.tn.post({
                    url: l.ANM.RESEND_PHONE,
                    headers: t,
                    body: { phone: e },
                    rejectWithError: !1
                })
            );
        },
        beginAddPhone: (e, t) =>
            i.tn.post({
                url: l.ANM.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                },
                rejectWithError: !1
            }),
        addPhone: (e, t, n) =>
            i.tn.post({
                url: l.ANM.PHONE,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        addPhoneWithoutPassword: (e) =>
            i.tn.post({
                url: l.ANM.PHONE_VERIFY_NO_PASSWORD,
                body: { code: e },
                rejectWithError: !1
            }),
        beginReverifyPhone: (e, t) =>
            i.tn.post({
                url: l.ANM.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                },
                rejectWithError: !1
            }),
        reverifyPhone: (e, t, n) =>
            i.tn.post({
                url: l.ANM.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        validatePhoneForSupport: (e) =>
            i.tn.post({
                url: l.ANM.VERIFY_PHONE_FOR_TICKET,
                body: { token: e },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        async verifyPhone(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                s = {},
                i = a.default.getFingerprint();
            null != i && '' !== i && (s['X-Fingerprint'] = i), r && (s.authorization = '');
            let f = await d.Z.post({
                url: l.ANM.VERIFY_PHONE,
                headers: s,
                body: {
                    phone: e,
                    code: t
                },
                oldFormErrors: !0,
                trackedActionData: { event: o.NetworkActionNames.USER_VERIFY_PHONE },
                rejectWithError: !1
            });
            return (
                n &&
                    c.Z.dispatch({
                        type: 'MODAL_POP',
                        key: u.M
                    }),
                f.body
            );
        }
    });

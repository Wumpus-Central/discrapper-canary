var i,
    s,
    r,
    a,
    l = n(392711),
    o = n.n(l),
    c = n(213919),
    d = n(442837),
    u = n(570140);
let m = !1,
    g = [],
    h = '',
    p = '',
    x = !1,
    f = {
        viewNonce: '',
        regenerateNonce: ''
    };
class _ extends (a = d.ZP.Store) {
    getVerificationKey() {
        return h;
    }
    getBackupCodes() {
        return g;
    }
    get togglingSMS() {
        return m;
    }
    getNonces() {
        return f;
    }
    get emailToken() {
        return p;
    }
    get hasSeenBackupPrompt() {
        return x;
    }
}
(r = 'MFAStore'),
    (s = 'displayName') in (i = _)
        ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = r),
    (t.Z = new _(u.Z, {
        MFA_ENABLE_SUCCESS: function (e) {
            let { token: t, codes: n } = e;
            void 0 !== t && c.setToken(t), (g = n);
        },
        MFA_ENABLE_EMAIL_TOKEN: function (e) {
            let { token: t } = e;
            p = t;
        },
        MFA_DISABLE_SUCCESS: function (e) {
            let { token: t } = e;
            c.setToken(t);
        },
        MFA_SMS_TOGGLE: function () {
            m = !0;
        },
        MFA_SMS_TOGGLE_COMPLETE: function () {
            m = !1;
        },
        MFA_CLEAR_BACKUP_CODES: function () {
            g = [];
        },
        MFA_VIEW_BACKUP_CODES: function (e) {
            let { codes: t, key: n } = e;
            (g = o().sortBy(t, 'code')), (h = n);
        },
        MFA_SEND_VERIFICATION_KEY: function (e) {
            let { nonces: t } = e;
            f = t;
        },
        MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            x = !0;
        }
    }));

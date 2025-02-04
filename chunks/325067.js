n.d(t, { Z: () => E });
var i,
    s,
    r,
    l = n(392711),
    a = n.n(l),
    o = n(213919),
    c = n(442837),
    d = n(570140);
let u = !1,
    m = [],
    h = '',
    g = '',
    _ = !1,
    x = {
        viewNonce: '',
        regenerateNonce: ''
    };
class p extends (r = c.ZP.Store) {
    getVerificationKey() {
        return h;
    }
    getBackupCodes() {
        return m;
    }
    get togglingSMS() {
        return u;
    }
    getNonces() {
        return x;
    }
    get emailToken() {
        return g;
    }
    get hasSeenBackupPrompt() {
        return _;
    }
}
(s = 'MFAStore'),
    (i = 'displayName') in p
        ? Object.defineProperty(p, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[i] = s);
let E = new p(d.Z, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && o.setToken(t), (m = n);
    },
    MFA_ENABLE_EMAIL_TOKEN: function (e) {
        let { token: t } = e;
        g = t;
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        o.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        u = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        u = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        m = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: n } = e;
        (m = a().sortBy(t, 'code')), (h = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        x = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        _ = !0;
    }
});

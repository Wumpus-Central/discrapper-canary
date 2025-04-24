n.d(t, { Z: () => b });
var i,
    r,
    s,
    l = n(392711),
    a = n.n(l),
    o = n(213919),
    c = n(442837),
    d = n(570140);
let u = !1,
    m = [],
    p = '',
    g = !1,
    h = {
        viewNonce: '',
        regenerateNonce: ''
    };
class f extends (s = c.ZP.Store) {
    getVerificationKey() {
        return p;
    }
    getBackupCodes() {
        return m;
    }
    get togglingSMS() {
        return u;
    }
    getNonces() {
        return h;
    }
    get hasSeenBackupPrompt() {
        return g;
    }
}
(r = 'MFAStore'),
    (i = 'displayName') in f
        ? Object.defineProperty(f, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = r);
let b = new f(d.Z, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && o.setToken(t), (m = n);
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
        (m = a().sortBy(t, 'code')), (p = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        h = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        g = !0;
    }
});

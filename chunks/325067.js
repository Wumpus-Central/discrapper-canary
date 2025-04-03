n.d(t, { Z: () => b });
var r,
    i,
    s,
    a = n(392711),
    l = n.n(a),
    o = n(213919),
    c = n(442837),
    d = n(570140);
let u = !1,
    m = [],
    g = '',
    p = !1,
    h = {
        viewNonce: '',
        regenerateNonce: ''
    };
class f extends (s = c.ZP.Store) {
    getVerificationKey() {
        return g;
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
        return p;
    }
}
(i = 'MFAStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = i);
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
        (m = l().sortBy(t, 'code')), (g = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        h = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        p = !0;
    }
});

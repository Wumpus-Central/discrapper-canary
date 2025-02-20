r.d(t, { Z: () => g });
var n,
    i,
    o,
    l = r(392711),
    c = r.n(l),
    a = r(213919),
    s = r(442837),
    d = r(570140);
let u = !1,
    b = [],
    y = '',
    p = !1,
    _ = {
        viewNonce: '',
        regenerateNonce: ''
    };
class f extends (o = s.ZP.Store) {
    getVerificationKey() {
        return y;
    }
    getBackupCodes() {
        return b;
    }
    get togglingSMS() {
        return u;
    }
    getNonces() {
        return _;
    }
    get hasSeenBackupPrompt() {
        return p;
    }
}
(i = 'MFAStore'),
    (n = 'displayName') in f
        ? Object.defineProperty(f, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[n] = i);
let g = new f(d.Z, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: r } = e;
        void 0 !== t && a.setToken(t), (b = r);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        a.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        u = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        u = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        b = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: r } = e;
        (b = c().sortBy(t, 'code')), (y = r);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        _ = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        p = !0;
    }
});

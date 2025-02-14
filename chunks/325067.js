i.d(t, { Z: () => M });
var n,
    r,
    l,
    o = i(392711),
    a = i.n(o),
    s = i(213919),
    c = i(442837),
    d = i(570140);
let _ = !1,
    u = [],
    h = '',
    E = !1,
    b = {
        viewNonce: '',
        regenerateNonce: ''
    };
class A extends (l = c.ZP.Store) {
    getVerificationKey() {
        return h;
    }
    getBackupCodes() {
        return u;
    }
    get togglingSMS() {
        return _;
    }
    getNonces() {
        return b;
    }
    get hasSeenBackupPrompt() {
        return E;
    }
}
(r = 'MFAStore'),
    (n = 'displayName') in A
        ? Object.defineProperty(A, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (A[n] = r);
let M = new A(d.Z, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: i } = e;
        void 0 !== t && s.setToken(t), (u = i);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        s.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        _ = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        _ = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        u = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: i } = e;
        (u = a().sortBy(t, 'code')), (h = i);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        b = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        E = !0;
    }
});

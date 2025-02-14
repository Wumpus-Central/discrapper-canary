i.d(t, { Z: () => g });
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
    E = '',
    h = '',
    b = !1,
    A = {
        viewNonce: '',
        regenerateNonce: ''
    };
class M extends (l = c.ZP.Store) {
    getVerificationKey() {
        return E;
    }
    getBackupCodes() {
        return u;
    }
    get togglingSMS() {
        return _;
    }
    getNonces() {
        return A;
    }
    get emailToken() {
        return h;
    }
    get hasSeenBackupPrompt() {
        return b;
    }
}
(r = 'MFAStore'),
    (n = 'displayName') in M
        ? Object.defineProperty(M, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (M[n] = r);
let g = new M(d.Z, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: i } = e;
        void 0 !== t && s.setToken(t), (u = i);
    },
    MFA_ENABLE_EMAIL_TOKEN: function (e) {
        let { token: t } = e;
        h = t;
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
        (u = a().sortBy(t, 'code')), (E = i);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        A = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        b = !0;
    }
});

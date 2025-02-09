n.d(t, { Z: () => E });
var i,
    s,
    l,
    r = n(392711),
    a = n.n(r),
    o = n(213919),
    c = n(442837),
    d = n(570140);
let u = !1,
    h = [],
    m = '',
    g = '',
    x = !1,
    _ = {
        viewNonce: '',
        regenerateNonce: ''
    };
class p extends (l = c.ZP.Store) {
    getVerificationKey() {
        return m;
    }
    getBackupCodes() {
        return h;
    }
    get togglingSMS() {
        return u;
    }
    getNonces() {
        return _;
    }
    get emailToken() {
        return g;
    }
    get hasSeenBackupPrompt() {
        return x;
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
        void 0 !== t && o.setToken(t), (h = n);
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
        h = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: n } = e;
        (h = a().sortBy(t, 'code')), (m = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        _ = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        x = !0;
    }
});

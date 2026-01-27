n.d(t, {
    A: () => A,
});
var r,
    i,
    l = n(735438),
    s = n.n(l),
    a = n(247775),
    o = n(311907),
    c = n(73153);
let d = !1,
    u = [],
    _ = "",
    p = !1,
    m = {
        viewNonce: "",
        regenerateNonce: "",
    };
class g extends (i = o.Ay.Store) {
    getVerificationKey() {
        return _;
    }
    getBackupCodes() {
        return u;
    }
    get togglingSMS() {
        return d;
    }
    getNonces() {
        return m;
    }
    get hasSeenBackupPrompt() {
        return p;
    }
}
(r = "displayName") in g
    ? Object.defineProperty(g, r, {
          value: "MFAStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[r] = "MFAStore");
let A = new g(c.h, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && a.setToken(t), (u = n);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        a.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        d = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        d = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        u = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: n } = e;
        (u = s().sortBy(t, "code")), (_ = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        m = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        p = !0;
    },
    CONNECTION_OPEN: () => {},
});

n.d(t, { Z: () => f });
var i,
    r,
    s = n(392711),
    a = n.n(s),
    l = n(213919),
    o = n(442837),
    c = n(570140);
let d = !1,
    u = [],
    m = "",
    p = !1,
    g = {
        viewNonce: "",
        regenerateNonce: "",
    };
class h extends (r = o.ZP.Store) {
    getVerificationKey() {
        return m;
    }
    getBackupCodes() {
        return u;
    }
    get togglingSMS() {
        return d;
    }
    getNonces() {
        return g;
    }
    get hasSeenBackupPrompt() {
        return p;
    }
}
(i = "displayName") in h
    ? Object.defineProperty(h, i, {
          value: "MFAStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[i] = "MFAStore");
let f = new h(c.Z, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && l.setToken(t), (u = n);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        l.setToken(t);
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
        (u = a().sortBy(t, "code")), (m = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        g = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        p = !0;
    },
    CONNECTION_OPEN: () => {},
});

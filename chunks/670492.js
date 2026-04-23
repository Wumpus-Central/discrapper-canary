n.d(t, { A: () => R });
var i = n(735438),
    E = n.n(i),
    l = n(247775),
    a = n(311907),
    s = n(73153);
let r = !1,
    o = [],
    c = "",
    u = !1,
    _ = { viewNonce: "", regenerateNonce: "" };
class I extends a.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return c;
    }
    getBackupCodes() {
        return o;
    }
    get togglingSMS() {
        return r;
    }
    getNonces() {
        return _;
    }
    get hasSeenBackupPrompt() {
        return u;
    }
}
let R = new I(s.h, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && l.setToken(t), (o = n);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        l.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        r = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        r = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        o = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: n } = e;
        (o = E().sortBy(t, "code")), (c = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        _ = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        u = !0;
    },
    CONNECTION_OPEN: () => {},
});

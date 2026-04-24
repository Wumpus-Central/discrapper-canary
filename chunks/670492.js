n.d(t, { A: () => _ });
var i = n(735438),
    a = n.n(i),
    l = n(247775),
    r = n(17928),
    s = n(228366);
let E = !1,
    o = [],
    u = "",
    c = !1,
    d = { viewNonce: "", regenerateNonce: "" };
class I extends r.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return u;
    }
    getBackupCodes() {
        return o;
    }
    get togglingSMS() {
        return E;
    }
    getNonces() {
        return d;
    }
    get hasSeenBackupPrompt() {
        return c;
    }
}
let _ = new I(s.h, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && l.setToken(t), (o = n);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        l.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        E = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        E = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        o = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: n } = e;
        (o = a().sortBy(t, "code")), (u = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        d = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        c = !0;
    },
    CONNECTION_OPEN: () => {},
});

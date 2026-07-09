"use strict";
n.d(t, { A: () => A });
var i = n(735438),
    r = n.n(i),
    a = n(247775),
    s = n(17928),
    l = n(228366);
let o = !1,
    d = [],
    c = "",
    u = !1,
    _ = { viewNonce: "", regenerateNonce: "" };
class E extends s.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return c;
    }
    getBackupCodes() {
        return d;
    }
    get togglingSMS() {
        return o;
    }
    getNonces() {
        return _;
    }
    get hasSeenBackupPrompt() {
        return u;
    }
}
let A = new E(l.h, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && a.setToken(t), (d = n);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        a.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        o = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        o = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        d = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: n } = e;
        (d = r().sortBy(t, "code")), (c = n);
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

"use strict";
n.d(t, { A: () => h });
var i = n(735438),
    r = n.n(i),
    s = n(247775),
    a = n(17928),
    o = n(228366);
let l = !1,
    u = [],
    c = "",
    d = !1,
    _ = { viewNonce: "", regenerateNonce: "" };
class f extends a.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return c;
    }
    getBackupCodes() {
        return u;
    }
    get togglingSMS() {
        return l;
    }
    getNonces() {
        return _;
    }
    get hasSeenBackupPrompt() {
        return d;
    }
}
let h = new f(o.h, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: n } = e;
        void 0 !== t && s.setToken(t), (u = n);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        s.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        l = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        l = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        u = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: n } = e;
        (u = r().sortBy(t, "code")), (c = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        _ = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        d = !0;
    },
    CONNECTION_OPEN: () => {},
});

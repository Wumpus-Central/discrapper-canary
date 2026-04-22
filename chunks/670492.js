"use strict";
n.d(e, { A: () => h });
var r = n(735438),
    i = n.n(r),
    o = n(247775),
    a = n(311907),
    s = n(73153);
let l = !1,
    c = [],
    d = "",
    u = !1,
    f = { viewNonce: "", regenerateNonce: "" };
class p extends a.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return d;
    }
    getBackupCodes() {
        return c;
    }
    get togglingSMS() {
        return l;
    }
    getNonces() {
        return f;
    }
    get hasSeenBackupPrompt() {
        return u;
    }
}
let h = new p(s.h, {
    MFA_ENABLE_SUCCESS: function (t) {
        let { token: e, codes: n } = t;
        void 0 !== e && o.setToken(e), (c = n);
    },
    MFA_DISABLE_SUCCESS: function (t) {
        let { token: e } = t;
        o.setToken(e);
    },
    MFA_SMS_TOGGLE: function () {
        l = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        l = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        c = [];
    },
    MFA_VIEW_BACKUP_CODES: function (t) {
        let { codes: e, key: n } = t;
        (c = i().sortBy(e, "code")), (d = n);
    },
    MFA_SEND_VERIFICATION_KEY: function (t) {
        let { nonces: e } = t;
        f = e;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        u = !0;
    },
    CONNECTION_OPEN: () => {},
});

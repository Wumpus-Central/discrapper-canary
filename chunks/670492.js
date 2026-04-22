"use strict";
s.d(t, { A: () => u });
var r = s(735438),
    n = s.n(r),
    o = s(247775),
    i = s(311907),
    a = s(73153);
let c = !1,
    l = [],
    d = "",
    h = !1,
    _ = { viewNonce: "", regenerateNonce: "" };
class p extends i.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return d;
    }
    getBackupCodes() {
        return l;
    }
    get togglingSMS() {
        return c;
    }
    getNonces() {
        return _;
    }
    get hasSeenBackupPrompt() {
        return h;
    }
}
let u = new p(a.h, {
    MFA_ENABLE_SUCCESS: function (e) {
        let { token: t, codes: s } = e;
        void 0 !== t && o.setToken(t), (l = s);
    },
    MFA_DISABLE_SUCCESS: function (e) {
        let { token: t } = e;
        o.setToken(t);
    },
    MFA_SMS_TOGGLE: function () {
        c = !0;
    },
    MFA_SMS_TOGGLE_COMPLETE: function () {
        c = !1;
    },
    MFA_CLEAR_BACKUP_CODES: function () {
        l = [];
    },
    MFA_VIEW_BACKUP_CODES: function (e) {
        let { codes: t, key: s } = e;
        (l = n().sortBy(t, "code")), (d = s);
    },
    MFA_SEND_VERIFICATION_KEY: function (e) {
        let { nonces: t } = e;
        _ = t;
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function () {
        h = !0;
    },
    CONNECTION_OPEN: () => {},
});

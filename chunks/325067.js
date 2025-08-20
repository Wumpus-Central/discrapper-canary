n.d(t, { Z: () => T });
var r,
    i = n(392711),
    a = n.n(i),
    o = n(213919),
    s = n(442837),
    l = n(570140);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = !1,
    d = [],
    f = "",
    _ = !1,
    p = {
        viewNonce: "",
        regenerateNonce: "",
    };
function h() {
    _ = !0;
}
function m(e) {
    let { token: t, codes: n } = e;
    void 0 !== t && o.setToken(t), (d = n);
}
function g(e) {
    let { token: t } = e;
    o.setToken(t);
}
function E() {
    u = !0;
}
function b() {
    u = !1;
}
function y(e) {
    let { nonces: t } = e;
    p = t;
}
function O(e) {
    let { codes: t, key: n } = e;
    (d = a().sortBy(t, "code")), (f = n);
}
function v() {
    d = [];
}
class I extends (r = s.ZP.Store) {
    getVerificationKey() {
        return f;
    }
    getBackupCodes() {
        return d;
    }
    get togglingSMS() {
        return u;
    }
    getNonces() {
        return p;
    }
    get hasSeenBackupPrompt() {
        return _;
    }
}
c(I, "displayName", "MFAStore");
let T = new I(l.Z, {
    MFA_ENABLE_SUCCESS: m,
    MFA_DISABLE_SUCCESS: g,
    MFA_SMS_TOGGLE: E,
    MFA_SMS_TOGGLE_COMPLETE: b,
    MFA_CLEAR_BACKUP_CODES: v,
    MFA_VIEW_BACKUP_CODES: O,
    MFA_SEND_VERIFICATION_KEY: y,
    MFA_SEEN_BACKUP_CODE_PROMPT: h,
    CONNECTION_OPEN: () => {},
});

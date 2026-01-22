n.d(t, {
    A: () => S,
});
var r,
    i = n(735438),
    a = n.n(i),
    s = n(247775),
    o = n(311907),
    l = n(73153);

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
    p = !1,
    _ = {
        viewNonce: "",
        regenerateNonce: "",
    };

function h() {
    p = !0;
}

function m(e) {
    let { token: t, codes: n } = e;
    void 0 !== t && s.setToken(t), (d = n);
}

function g(e) {
    let { token: t } = e;
    s.setToken(t);
}

function E() {
    u = !0;
}

function b() {
    u = !1;
}

function y(e) {
    let { nonces: t } = e;
    _ = t;
}

function O(e) {
    let { codes: t, key: n } = e;
    (d = a().sortBy(t, "code")), (f = n);
}

function A() {
    d = [];
}
class v extends (r = o.Ay.Store) {
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
        return _;
    }
    get hasSeenBackupPrompt() {
        return p;
    }
}
c(v, "displayName", "MFAStore");
let S = new v(l.h, {
    MFA_ENABLE_SUCCESS: m,
    MFA_DISABLE_SUCCESS: g,
    MFA_SMS_TOGGLE: E,
    MFA_SMS_TOGGLE_COMPLETE: b,
    MFA_CLEAR_BACKUP_CODES: A,
    MFA_VIEW_BACKUP_CODES: O,
    MFA_SEND_VERIFICATION_KEY: y,
    MFA_SEEN_BACKUP_CODE_PROMPT: h,
    CONNECTION_OPEN: () => {},
});

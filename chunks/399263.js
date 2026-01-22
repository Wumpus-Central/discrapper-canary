n.d(t, {
    A: () => x,
}),
    n(747238),
    n(896048),
    n(142703);
var r,
    i = n(311907),
    a = n(73153),
    s = n(320501);

function o(e, t, n) {
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

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = Object.freeze([]),
    f = {},
    p = {},
    _ = {},
    h = {},
    m = {};

function g(e, t) {}

function E() {
    m = {};
}

function b(e, t) {
    let n = f[e];
    return null != n && ((f[e] = n.filter((e) => e.id !== t)), delete p[t], delete _[t], n.length !== f[e].length);
}

function y() {
    E();
}

function O() {
    E();
}

function A(e) {
    var t, n;
    let { channelId: r, file: i, uploader: a, message: s } = e;
    if (a._aborted || a._errored) return;
    let o = null != (t = f[r]) ? t : d;
    if (((p[i.id] = a), (f[r] = [...o, i]), null == s)) return;
    _[i.id] = s;
    let { items: c } = i;
    null != c &&
        (h[s.id] = u(l({}, i), {
            items: c,
        })),
        null != (n = s.nonce) || s.id;
}

function v(e) {
    let { channelId: t, file: n } = e;
    I(t, n);
}

function S(e) {
    let { channelId: t, file: n } = e;
    I(t, n);
}

function I(e, t) {
    let n = f[e];
    if (null == n) return !1;
    f[e] = n.map((e) => (e.id === t.id ? l({}, e, t) : e));
    let r = _[t.id];
    null != r && null != h[r.id] && (h[r.id] = l({}, h[r.id], t));
}

function T(e) {
    let { channelId: t, file: n } = e;
    return b(t, n.id);
}

function C(e) {
    let { channelId: t, file: n } = e;
    return b(t, n.id);
}

function N(e) {
    let { file: t } = e,
        n = p[t.id];
    if (null == n) return !1;
    setImmediate(() => {
        var e;
        return null == (e = n.cancel) ? void 0 : e.call(n);
    });
}

function R(e) {
    let { file: t, itemId: n } = e,
        r = p[t.id];
    if (null == r) return !1;
    setImmediate(() => r.cancelItem(n));
}

function w(e) {
    let { channelId: t, file: n } = e,
        r = _[n.id];
    if (null != r) {
        var i;
        null != (i = r.nonce) || r.id;
    }
    I(t, n);
}

function P(e) {
    let { file: t, messageId: n } = e;
    h[n] = t;
}
class D extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A);
    }
    getFiles(e) {
        var t;
        return null != (t = f[e]) ? t : d;
    }
    getMessageForFile(e) {
        return _[e];
    }
    getUploaderFileForMessageId(e) {
        return h[e];
    }
    getUploadAttachments(e) {
        if (null != e) return m[e];
    }
}
o(D, "displayName", "UploadStore");
let x = new D(a.h, {
    CONNECTION_OPEN: y,
    LOGOUT: O,
    UPLOAD_START: A,
    UPLOAD_COMPRESSION_PROGRESS: S,
    UPLOAD_PROGRESS: v,
    UPLOAD_COMPLETE: T,
    UPLOAD_FAIL: C,
    UPLOAD_CANCEL_REQUEST: N,
    UPLOAD_ITEM_CANCEL_REQUEST: R,
    UPLOAD_FILE_UPDATE: w,
    UPLOAD_RESTORE_FAILED_UPLOAD: P,
});

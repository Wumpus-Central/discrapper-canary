n.d(t, { Z: () => x }), n(35282), n(388685), n(358797);
var r,
    i = n(442837),
    a = n(570140),
    o = n(375954);
function s(e, t, n) {
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
                s(e, t, n[t]);
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
    m = {},
    h = {};
function g(e, t) {}
function E() {
    h = {};
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
function v(e) {
    var t, n;
    let { channelId: r, file: i, uploader: a, message: o } = e;
    if (a._aborted || a._errored) return;
    let s = null != (t = f[r]) ? t : d;
    if (((p[i.id] = a), (f[r] = [...s, i]), null == o)) return;
    _[i.id] = o;
    let { items: c } = i;
    null != c && (m[o.id] = u(l({}, i), { items: c })), null != (n = o.nonce) || o.id;
}
function S(e) {
    let { channelId: t, file: n } = e;
    T(t, n);
}
function I(e) {
    let { channelId: t, file: n } = e;
    T(t, n);
}
function T(e, t) {
    let n = f[e];
    if (null == n) return !1;
    f[e] = n.map((e) => (e.id === t.id ? l({}, e, t) : e));
    let r = _[t.id];
    null != r && null != m[r.id] && (m[r.id] = l({}, m[r.id], t));
}
function C(e) {
    let { channelId: t, file: n } = e;
    return b(t, n.id);
}
function A(e) {
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
function P(e) {
    let { file: t, itemId: n } = e,
        r = p[t.id];
    if (null == r) return !1;
    setImmediate(() => r.cancelItem(n));
}
function R(e) {
    let { channelId: t, file: n } = e,
        r = _[n.id];
    if (null != r) {
        var i;
        null != (i = r.nonce) || r.id;
    }
    T(t, n);
}
function D(e) {
    let { file: t, messageId: n } = e;
    m[n] = t;
}
class w extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getFiles(e) {
        var t;
        return null != (t = f[e]) ? t : d;
    }
    getMessageForFile(e) {
        return _[e];
    }
    getUploaderFileForMessageId(e) {
        return m[e];
    }
    getUploadAttachments(e) {
        if (null != e) return h[e];
    }
}
s(w, "displayName", "UploadStore");
let x = new w(a.Z, {
    CONNECTION_OPEN: y,
    LOGOUT: O,
    UPLOAD_START: v,
    UPLOAD_COMPRESSION_PROGRESS: I,
    UPLOAD_PROGRESS: S,
    UPLOAD_COMPLETE: C,
    UPLOAD_FAIL: A,
    UPLOAD_CANCEL_REQUEST: N,
    UPLOAD_ITEM_CANCEL_REQUEST: P,
    UPLOAD_FILE_UPDATE: R,
    UPLOAD_RESTORE_FAILED_UPLOAD: D,
});

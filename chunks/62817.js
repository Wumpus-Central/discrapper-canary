n.d(t, { Z: () => L }), n(35282), n(388685), n(358797);
var r,
    i = n(442837),
    o = n(570140),
    a = n(375954);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    _ = {},
    p = {},
    h = {},
    m = {};
function g(e, t) {}
function E() {
    m = {};
}
function b(e, t) {
    let n = f[e];
    return null != n && ((f[e] = n.filter((e) => e.id !== t)), delete _[t], delete p[t], n.length !== f[e].length);
}
function y() {
    E();
}
function v() {
    E();
}
function O(e) {
    var t;
    let { channelId: n, file: r, uploader: i, message: o } = e;
    if (i._aborted || i._errored) return;
    let a = null != (t = f[n]) ? t : d;
    (_[r.id] = i), (f[n] = [...a, r]), (p[r.id] = o);
    let { items: s } = r;
    null != s && (h[o.id] = u(l({}, r), { items: s })), o.nonce;
}
function I(e) {
    let { channelId: t, file: n } = e;
    T(t, n);
}
function S(e) {
    let { channelId: t, file: n } = e;
    T(t, n);
}
function T(e, t) {
    let n = f[e];
    if (null == n) return !1;
    f[e] = n.map((e) => (e.id === t.id ? l({}, e, t) : e));
    let r = p[t.id];
    null != r && null != h[r.id] && (h[r.id] = l({}, h[r.id], t));
}
function N(e) {
    let { channelId: t, file: n } = e;
    return b(t, n.id);
}
function A(e) {
    let { channelId: t, file: n } = e;
    return b(t, n.id);
}
function C(e) {
    let { file: t } = e,
        n = _[t.id];
    if (null == n) return !1;
    setImmediate(() => {
        var e;
        return null == (e = n.cancel) ? void 0 : e.call(n);
    });
}
function P(e) {
    let { file: t, itemId: n } = e,
        r = _[t.id];
    if (null == r) return !1;
    setImmediate(() => r.cancelItem(n));
}
function R(e) {
    let { channelId: t, file: n } = e,
        r = p[n.id];
    null != r && r.nonce, T(t, n);
}
function w(e) {
    let { file: t, messageId: n } = e;
    h[n] = t;
}
class D extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z);
    }
    getFiles(e) {
        var t;
        return null != (t = f[e]) ? t : d;
    }
    getMessageForFile(e) {
        return p[e];
    }
    getUploaderFileForMessageId(e) {
        return h[e];
    }
    getUploadAttachments(e) {
        if (null != e) return m[e];
    }
}
s(D, 'displayName', 'UploadStore');
let L = new D(o.Z, {
    CONNECTION_OPEN: y,
    LOGOUT: v,
    UPLOAD_START: O,
    UPLOAD_COMPRESSION_PROGRESS: S,
    UPLOAD_PROGRESS: I,
    UPLOAD_COMPLETE: N,
    UPLOAD_FAIL: A,
    UPLOAD_CANCEL_REQUEST: C,
    UPLOAD_ITEM_CANCEL_REQUEST: P,
    UPLOAD_FILE_UPDATE: R,
    UPLOAD_RESTORE_FAILED_UPLOAD: w
});

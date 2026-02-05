"use strict";
n.d(t, { A: () => R }), n(142703);
var r = n(311907),
    i = n(73153),
    a = n(320501);
let s = Object.freeze([]),
    o = {},
    l = {},
    u = {},
    c = {},
    d = {};
function _(e, t) {}
function f() {
    d = {};
}
function p(e, t) {
    let n = o[e];
    return null != n && ((o[e] = n.filter((e) => e.id !== t)), delete l[t], delete u[t], n.length !== o[e].length);
}
function h() {
    f();
}
function m() {
    f();
}
function g(e) {
    let { channelId: t, file: n, uploader: r, message: i } = e;
    if (r._aborted || r._errored) return;
    let a = o[t] ?? s;
    if (((l[n.id] = r), (o[t] = [...a, n]), null == i)) return;
    u[n.id] = i;
    let { items: d } = n;
    null != d && (c[i.id] = { ...n, items: d }), i.nonce ?? i.id;
}
function E(e) {
    let { channelId: t, file: n } = e;
    I(t, n);
}
function A(e) {
    let { channelId: t, file: n } = e;
    I(t, n);
}
function I(e, t) {
    let n = o[e];
    if (null == n) return !1;
    o[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let r = u[t.id];
    null != r && null != c[r.id] && (c[r.id] = { ...c[r.id], ...t });
}
function T(e) {
    let { channelId: t, file: n } = e;
    return p(t, n.id);
}
function y(e) {
    let { channelId: t, file: n } = e;
    return p(t, n.id);
}
function S(e) {
    let { file: t } = e,
        n = l[t.id];
    if (null == n) return !1;
    setImmediate(() => n.cancel?.());
}
function v(e) {
    let { file: t, itemId: n } = e,
        r = l[t.id];
    if (null == r) return !1;
    setImmediate(() => r.cancelItem(n));
}
function C(e) {
    let { channelId: t, file: n } = e,
        r = u[n.id];
    null != r && (r.nonce ?? r.id), I(t, n);
}
function b(e) {
    let { file: t, messageId: n } = e;
    c[n] = t;
}
class N extends r.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(a.A);
    }
    getFiles(e) {
        return o[e] ?? s;
    }
    getMessageForFile(e) {
        return u[e];
    }
    getUploaderFileForMessageId(e) {
        return c[e];
    }
    getUploadAttachments(e) {
        if (null != e) return d[e];
    }
}
let R = new N(i.h, {
    CONNECTION_OPEN: h,
    LOGOUT: m,
    UPLOAD_START: g,
    UPLOAD_COMPRESSION_PROGRESS: A,
    UPLOAD_PROGRESS: E,
    UPLOAD_COMPLETE: T,
    UPLOAD_FAIL: y,
    UPLOAD_CANCEL_REQUEST: S,
    UPLOAD_ITEM_CANCEL_REQUEST: v,
    UPLOAD_FILE_UPDATE: C,
    UPLOAD_RESTORE_FAILED_UPLOAD: b,
});

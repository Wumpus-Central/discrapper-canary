"use strict";
n.d(t, { A: () => f }), n(142703);
var i = n(311907),
    l = n(73153),
    s = n(320501);
let r = Object.freeze([]),
    a = {},
    o = {},
    c = {},
    u = {},
    d = {};
function h(e, t) {
    let n = a[e];
    return null != n && ((a[e] = n.filter((e) => e.id !== t)), delete o[t], delete c[t], n.length !== a[e].length);
}
function m(e, t) {
    let n = a[e];
    if (null == n) return !1;
    a[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let i = c[t.id];
    null != i && null != u[i.id] && (u[i.id] = { ...u[i.id], ...t });
}
class p extends i.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(s.A);
    }
    getFiles(e) {
        return a[e] ?? r;
    }
    getMessageForFile(e) {
        return c[e];
    }
    getUploaderFileForMessageId(e) {
        return u[e];
    }
    getUploadAttachments(e) {
        if (null != e) return d[e];
    }
}
let f = new p(l.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    LOGOUT: function () {
        d = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: i, message: l } = e;
        if (i._aborted || i._errored) return;
        let s = a[t] ?? r;
        if (((o[n.id] = i), (a[t] = [...s, n]), null == l)) return;
        c[n.id] = l;
        let { items: d } = n;
        null != d && (u[l.id] = { ...n, items: d }), l.nonce ?? l.id;
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        m(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        m(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: n } = e;
        return h(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return h(t, n.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
        let { file: t } = e,
            n = o[t.id];
        if (null == n) return !1;
        setImmediate(() => n.cancel?.());
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
        let { file: t, itemId: n } = e,
            i = o[t.id];
        if (null == i) return !1;
        setImmediate(() => i.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            i = c[n.id];
        null != i && (i.nonce ?? i.id), m(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        u[n] = t;
    },
});

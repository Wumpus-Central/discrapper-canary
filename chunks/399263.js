"use strict";
n.d(t, { A: () => p }), n(142703);
var l = n(17928),
    i = n(228366),
    s = n(232835);
let r = Object.freeze([]),
    a = {},
    o = {},
    u = {},
    c = {},
    d = {};
function h(e, t) {
    let n = a[e];
    return null != n && ((a[e] = n.filter((e) => e.id !== t)), delete o[t], delete u[t], n.length !== a[e].length);
}
function m(e, t) {
    let n = a[e];
    if (null == n) return !1;
    a[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let l = u[t.id];
    null != l && null != c[l.id] && (c[l.id] = { ...c[l.id], ...t });
}
class f extends l.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(s.A);
    }
    getFiles(e) {
        return a[e] ?? r;
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
let p = new f(i.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    LOGOUT: function () {
        d = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: l, message: i } = e;
        if (l._aborted || l._errored) return;
        let s = a[t] ?? r;
        if (((o[n.id] = l), (a[t] = [...s, n]), null == i)) return;
        u[n.id] = i;
        let { items: d } = n;
        null != d && (c[i.id] = { ...n, items: d }), i.nonce ?? i.id;
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
            l = o[t.id];
        if (null == l) return !1;
        setImmediate(() => l.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            l = u[n.id];
        null != l && (l.nonce ?? l.id), m(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        c[n] = t;
    },
});

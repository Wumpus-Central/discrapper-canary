"use strict";
n.d(t, { A: () => f }), n(142703);
var l = n(17928),
    i = n(228366),
    s = n(232835);
let a = Object.freeze([]),
    r = {},
    o = {},
    c = {},
    u = {},
    d = {};
function h(e, t) {
    let n = r[e];
    return null != n && ((r[e] = n.filter((e) => e.id !== t)), delete o[t], delete c[t], n.length !== r[e].length);
}
function m(e, t) {
    let n = r[e];
    if (null == n) return !1;
    r[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let l = c[t.id];
    null != l && null != u[l.id] && (u[l.id] = { ...u[l.id], ...t });
}
class p extends l.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(s.A);
    }
    getFiles(e) {
        return r[e] ?? a;
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
let f = new p(i.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    LOGOUT: function () {
        d = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: l, message: i } = e;
        if (l._aborted || l._errored) return;
        let s = r[t] ?? a;
        if (((o[n.id] = l), (r[t] = [...s, n]), null == i)) return;
        c[n.id] = i;
        let { items: d } = n;
        null != d && (u[i.id] = { ...n, items: d }), i.nonce ?? i.id;
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
            l = c[n.id];
        null != l && (l.nonce ?? l.id), m(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        u[n] = t;
    },
});

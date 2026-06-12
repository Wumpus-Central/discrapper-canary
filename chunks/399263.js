"use strict";
n.d(t, { A: () => p }), n(142703);
var i = n(17928),
    r = n(228366),
    s = n(232835);
let a = Object.freeze([]),
    o = {},
    l = {},
    u = {},
    c = {},
    d = {};
function _(e, t) {
    let n = o[e];
    return null != n && ((o[e] = n.filter((e) => e.id !== t)), delete l[t], delete u[t], n.length !== o[e].length);
}
function h(e, t) {
    let n = o[e];
    if (null == n) return !1;
    o[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let i = u[t.id];
    null != i && null != c[i.id] && (c[i.id] = { ...c[i.id], ...t });
}
class f extends i.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(s.A);
    }
    getFiles(e) {
        return o[e] ?? a;
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
let p = new f(r.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    LOGOUT: function () {
        d = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: i, message: r } = e;
        if (i._aborted || i._errored) return;
        let s = o[t] ?? a;
        if (((l[n.id] = i), (o[t] = [...s, n]), null == r)) return;
        u[n.id] = r;
        let { items: d } = n;
        null != d && (c[r.id] = { ...n, items: d }), r.nonce ?? r.id;
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        h(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        h(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: n } = e;
        return _(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return _(t, n.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
        let { file: t } = e,
            n = l[t.id];
        if (null == n) return !1;
        setImmediate(() => n.cancel?.());
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
        let { file: t, itemId: n } = e,
            i = l[t.id];
        if (null == i) return !1;
        setImmediate(() => i.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            i = u[n.id];
        null != i && (i.nonce ?? i.id), h(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        c[n] = t;
    },
});

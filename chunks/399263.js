"use strict";
n.d(t, { A: () => m }), n(142703);
var i = n(17928),
    r = n(228366),
    s = n(232835);
let a = Object.freeze([]),
    o = {},
    l = {},
    d = {},
    _ = {},
    u = {};
function c(e, t) {
    let n = o[e];
    return null != n && ((o[e] = n.filter((e) => e.id !== t)), delete l[t], delete d[t], n.length !== o[e].length);
}
function E(e, t) {
    let n = o[e];
    if (null == n) return !1;
    o[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let i = d[t.id];
    null != i && null != _[i.id] && (_[i.id] = { ..._[i.id], ...t });
}
class h extends i.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(s.A);
    }
    getFiles(e) {
        return o[e] ?? a;
    }
    getMessageForFile(e) {
        return d[e];
    }
    getUploaderFileForMessageId(e) {
        return _[e];
    }
    getUploadAttachments(e) {
        if (null != e) return u[e];
    }
}
let m = new h(r.h, {
    CONNECTION_OPEN: function () {
        u = {};
    },
    LOGOUT: function () {
        u = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: i, message: r } = e;
        if (i._aborted || i._errored) return;
        let s = o[t] ?? a;
        if (((l[n.id] = i), (o[t] = [...s, n]), null == r)) return;
        d[n.id] = r;
        let { items: u } = n;
        null != u && (_[r.id] = { ...n, items: u }), r.nonce ?? r.id;
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        E(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        E(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: n } = e;
        return c(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return c(t, n.id);
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
            i = d[n.id];
        null != i && (i.nonce ?? i.id), E(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        _[n] = t;
    },
});

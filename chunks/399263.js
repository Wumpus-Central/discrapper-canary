"use strict";
n.d(t, { A: () => h }), n(142703);
var r = n(311907),
    i = n(73153),
    s = n(320501);
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
function f(e, t) {
    let n = o[e];
    if (null == n) return !1;
    o[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let r = u[t.id];
    null != r && null != c[r.id] && (c[r.id] = { ...c[r.id], ...t });
}
class p extends r.Ay.Store {
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
let h = new p(i.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    LOGOUT: function () {
        d = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: r, message: i } = e;
        if (r._aborted || r._errored) return;
        let s = o[t] ?? a;
        if (((l[n.id] = r), (o[t] = [...s, n]), null == i)) return;
        u[n.id] = i;
        let { items: d } = n;
        null != d && (c[i.id] = { ...n, items: d }), i.nonce ?? i.id;
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        f(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        f(t, n);
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
            r = l[t.id];
        if (null == r) return !1;
        setImmediate(() => r.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            r = u[n.id];
        null != r && (r.nonce ?? r.id), f(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        c[n] = t;
    },
});

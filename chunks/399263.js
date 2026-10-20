(n.d(t, { A: () => p }), n(142703));
var l = n(17928),
    s = n(73153),
    a = n(232835);
let i = Object.freeze([]),
    r = {},
    c = {},
    o = {},
    u = {},
    d = {};
function m(e, t) {
    let n = r[e];
    return null != n && ((r[e] = n.filter((e) => e.id !== t)), delete c[t], delete o[t], n.length !== r[e].length);
}
function h(e, t) {
    let n = r[e];
    if (null == n) return !1;
    r[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let l = o[t.id];
    null != l && null != u[l.id] && (u[l.id] = { ...u[l.id], ...t });
}
class f extends l.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(a.A);
    }
    getFiles(e) {
        return r[e] ?? i;
    }
    getMessageForFile(e) {
        return o[e];
    }
    getUploaderFileForMessageId(e) {
        return u[e];
    }
    getUploadAttachments(e) {
        if (null != e) return d[e];
    }
}
let p = new f(s.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    LOGOUT: function () {
        d = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: l, message: s } = e;
        if (l._aborted || l._errored) return;
        let a = r[t] ?? i;
        if (((c[n.id] = l), (r[t] = [...a, n]), null == s)) return;
        o[n.id] = s;
        let { items: d } = n;
        (null != d && (u[s.id] = { ...n, items: d }), s.nonce ?? s.id);
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
        return m(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return m(t, n.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
        let { file: t } = e,
            n = c[t.id];
        if (null == n) return !1;
        setImmediate(() => n.cancel?.());
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
        let { file: t, itemId: n } = e,
            l = c[t.id];
        if (null == l) return !1;
        setImmediate(() => l.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            l = o[n.id];
        (null != l && (l.nonce ?? l.id), h(t, n));
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        u[n] = t;
    },
});

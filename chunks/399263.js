(s.d(t, { A: () => f }), s(142703));
var n = s(17928),
    a = s(73153),
    l = s(232835);
let i = Object.freeze([]),
    r = {},
    o = {},
    u = {},
    d = {},
    c = {};
function h(e, t) {
    let s = r[e];
    return null != s && ((r[e] = s.filter((e) => e.id !== t)), delete o[t], delete u[t], s.length !== r[e].length);
}
function m(e, t) {
    let s = r[e];
    if (null == s) return !1;
    r[e] = s.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let n = u[t.id];
    null != n && null != d[n.id] && (d[n.id] = { ...d[n.id], ...t });
}
class p extends n.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(l.A);
    }
    getFiles(e) {
        return r[e] ?? i;
    }
    getMessageForFile(e) {
        return u[e];
    }
    getUploaderFileForMessageId(e) {
        return d[e];
    }
    getUploadAttachments(e) {
        if (null != e) return c[e];
    }
}
let f = new p(a.h, {
    CONNECTION_OPEN: function () {
        c = {};
    },
    LOGOUT: function () {
        c = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: s, uploader: n, message: a } = e;
        if (n._aborted || n._errored) return;
        let l = r[t] ?? i;
        if (((o[s.id] = n), (r[t] = [...l, s]), null == a)) return;
        u[s.id] = a;
        let { items: c } = s;
        (null != c && (d[a.id] = { ...s, items: c }), a.nonce ?? a.id);
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: s } = e;
        m(t, s);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: s } = e;
        m(t, s);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: s } = e;
        return h(t, s.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: s } = e;
        return h(t, s.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
        let { file: t } = e,
            s = o[t.id];
        if (null == s) return !1;
        setImmediate(() => s.cancel?.());
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
        let { file: t, itemId: s } = e,
            n = o[t.id];
        if (null == n) return !1;
        setImmediate(() => n.cancelItem(s));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: s } = e,
            n = u[s.id];
        (null != n && (n.nonce ?? n.id), m(t, s));
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: s } = e;
        d[s] = t;
    },
});

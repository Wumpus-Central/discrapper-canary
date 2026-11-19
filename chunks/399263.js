n(142703);
var i = n(855986),
    l = n(73153),
    r = n(596344);
let u = Object.freeze([]),
    d = {},
    c = {},
    o = {},
    f = {},
    a = {};
function O(e, t) {
    let n = d[e];
    return null != n && ((d[e] = n.filter((e) => e.id !== t)), delete c[t], delete o[t], n.length !== d[e].length);
}
function s(e, t) {
    let n = d[e];
    if (null == n) return !1;
    d[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
    let i = o[t.id];
    null != i && null != f[i.id] && (f[i.id] = { ...f[i.id], ...t });
}
class _ extends i.Ay.Store {
    static displayName = "UploadStore";
    initialize() {
        this.waitFor(r.A);
    }
    getFiles(e) {
        return d[e] ?? u;
    }
    getMessageForFile(e) {
        return o[e];
    }
    getUploaderFileForMessageId(e) {
        return f[e];
    }
    getUploadAttachments(e) {
        if (null != e) return a[e];
    }
}
let A = new _(l.h, {
    CONNECTION_OPEN: function () {
        a = {};
    },
    LOGOUT: function () {
        a = {};
    },
    UPLOAD_START: function (e) {
        let { channelId: t, file: n, uploader: i, message: l } = e;
        if (i._aborted || i._errored) return;
        let r = d[t] ?? u;
        if (((c[n.id] = i), (d[t] = [...r.filter((e) => e.id !== n.id), n]), null == l)) return;
        o[n.id] = l;
        let { items: a } = n;
        (null != a && (f[l.id] = { ...n, items: a }), l.nonce ?? l.id);
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        s(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        s(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: n } = e;
        return O(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return O(t, n.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
        let { file: t } = e,
            n = c[t.id];
        if (null == n) return !1;
        setImmediate(() => n.cancel?.());
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
        let { file: t, itemId: n } = e,
            i = c[t.id];
        if (null == i) return !1;
        setImmediate(() => i.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            i = o[n.id];
        (null != i && (i.nonce ?? i.id), s(t, n));
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        f[n] = t;
    },
});
n.d(t, {}, { A: A });

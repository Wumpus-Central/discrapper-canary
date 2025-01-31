n.d(t, { Z: () => E }), n(47120), n(177593);
var l,
    i,
    r,
    a = n(442837),
    o = n(570140),
    s = n(375954);
let u = Object.freeze([]),
    c = {},
    d = {},
    f = {},
    m = {},
    p = {};
function h(e, t) {}
function v(e, t) {
    let n = c[e];
    return null != n && ((c[e] = n.filter((e) => e.id !== t)), delete d[t], delete f[t], n.length !== c[e].length);
}
function g(e, t) {
    let n = c[e];
    if (null == n) return !1;
    c[e] = n.map((e) =>
        e.id === t.id
            ? {
                  ...e,
                  ...t
              }
            : e
    );
    let l = f[t.id];
    null != l &&
        null != m[l.id] &&
        (m[l.id] = {
            ...m[l.id],
            ...t
        });
}
class x extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getFiles(e) {
        var t;
        return null !== (t = c[e]) && void 0 !== t ? t : u;
    }
    getMessageForFile(e) {
        return f[e];
    }
    getUploaderFileForMessageId(e) {
        return m[e];
    }
    getUploadAttachments(e) {
        if (null != e) return p[e];
    }
}
(r = 'UploadStore'),
    (i = 'displayName') in x
        ? Object.defineProperty(x, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[i] = r);
let E = new x(o.Z, {
    CONNECTION_OPEN: function () {
        p = {};
    },
    LOGOUT: function () {
        p = {};
    },
    UPLOAD_START: function (e) {
        var t;
        let { channelId: n, file: l, uploader: i, message: r } = e;
        if (i._aborted || i._errored) return;
        let a = null !== (t = c[n]) && void 0 !== t ? t : u;
        (d[l.id] = i), (c[n] = [...a, l]), (f[l.id] = r);
        let { items: o } = l;
        null != o &&
            (m[r.id] = {
                ...l,
                items: o
            }),
            r.nonce;
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        g(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        g(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: n } = e;
        return v(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return v(t, n.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
        let { file: t } = e,
            n = d[t.id];
        if (null == n) return !1;
        setImmediate(() => {
            var e;
            return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n);
        });
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
        let { file: t, itemId: n } = e,
            l = d[t.id];
        if (null == l) return !1;
        setImmediate(() => l.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            l = f[n.id];
        null != l && l.nonce, g(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        m[n] = t;
    }
});

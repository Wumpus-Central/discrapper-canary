n(47120), n(177593);
var r,
    i,
    l,
    o,
    a = n(442837),
    u = n(570140),
    s = n(375954);
let c = Object.freeze([]),
    d = {},
    f = {},
    p = {},
    m = {},
    h = {};
function v(e, t) {}
function g() {
    h = {};
}
function x(e, t) {
    let n = d[e];
    return null != n && ((d[e] = n.filter((e) => e.id !== t)), delete f[t], delete p[t], n.length !== d[e].length);
}
function P(e, t) {
    let n = d[e];
    if (null == n) return !1;
    d[e] = n.map((e) =>
        e.id === t.id
            ? {
                  ...e,
                  ...t
              }
            : e
    );
    let r = p[t.id];
    null != r &&
        null != m[r.id] &&
        (m[r.id] = {
            ...m[r.id],
            ...t
        });
}
class E extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getFiles(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : c;
    }
    getMessageForFile(e) {
        return p[e];
    }
    getUploaderFileForMessageId(e) {
        return m[e];
    }
    getUploadAttachments(e) {
        if (null != e) return h[e];
    }
}
(o = 'UploadStore'),
    (l = 'displayName') in (i = E)
        ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = o),
    (t.Z = new E(u.Z, {
        CONNECTION_OPEN: function () {
            h = {};
        },
        LOGOUT: function () {
            h = {};
        },
        UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: r, uploader: i, message: l } = e;
            if (i._aborted || i._errored) return;
            let o = null !== (t = d[n]) && void 0 !== t ? t : c;
            (f[r.id] = i), (d[n] = [...o, r]), (p[r.id] = l);
            let { items: a } = r;
            null != a &&
                (m[l.id] = {
                    ...r,
                    items: a
                }),
                v(l.nonce, r);
        },
        UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            P(t, n);
        },
        UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            P(t, n);
        },
        UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return x(t, n.id);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return x(t, n.id);
        },
        UPLOAD_CANCEL_REQUEST: function (e) {
            let { file: t } = e,
                n = f[t.id];
            if (null == n) return !1;
            setImmediate(() => {
                var e;
                return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n);
            });
        },
        UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
            let { file: t, itemId: n } = e,
                r = f[t.id];
            if (null == r) return !1;
            setImmediate(() => r.cancelItem(n));
        },
        UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
                r = p[n.id];
            null != r && v(r.nonce, n), P(t, n);
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            m[n] = t;
        }
    }));

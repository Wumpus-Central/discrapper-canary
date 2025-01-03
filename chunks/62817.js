t(47120), t(177593);
var l,
    i,
    r,
    o,
    a = t(442837),
    u = t(570140),
    s = t(375954);
let d = Object.freeze([]),
    c = {},
    p = {},
    f = {},
    v = {},
    m = {};
function h(e, n) {}
function g() {
    m = {};
}
function Z(e, n) {
    let t = c[e];
    return null != t && ((c[e] = t.filter((e) => e.id !== n)), delete p[n], delete f[n], t.length !== c[e].length);
}
function x(e, n) {
    let t = c[e];
    if (null == t) return !1;
    c[e] = t.map((e) =>
        e.id === n.id
            ? {
                  ...e,
                  ...n
              }
            : e
    );
    let l = f[n.id];
    null != l &&
        null != v[l.id] &&
        (v[l.id] = {
            ...v[l.id],
            ...n
        });
}
class P extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getFiles(e) {
        var n;
        return null !== (n = c[e]) && void 0 !== n ? n : d;
    }
    getMessageForFile(e) {
        return f[e];
    }
    getUploaderFileForMessageId(e) {
        return v[e];
    }
    getUploadAttachments(e) {
        if (null != e) return m[e];
    }
}
(o = 'UploadStore'),
    (r = 'displayName') in (i = P)
        ? Object.defineProperty(i, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = o),
    (n.Z = new P(u.Z, {
        CONNECTION_OPEN: function () {
            m = {};
        },
        LOGOUT: function () {
            m = {};
        },
        UPLOAD_START: function (e) {
            var n;
            let { channelId: t, file: l, uploader: i, message: r } = e;
            if (i._aborted || i._errored) return;
            let o = null !== (n = c[t]) && void 0 !== n ? n : d;
            (p[l.id] = i), (c[t] = [...o, l]), (f[l.id] = r);
            let { items: a } = l;
            null != a &&
                (v[r.id] = {
                    ...l,
                    items: a
                }),
                h(r.nonce, l);
        },
        UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: n, file: t } = e;
            x(n, t);
        },
        UPLOAD_PROGRESS: function (e) {
            let { channelId: n, file: t } = e;
            x(n, t);
        },
        UPLOAD_COMPLETE: function (e) {
            let { channelId: n, file: t } = e;
            return Z(n, t.id);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: n, file: t } = e;
            return Z(n, t.id);
        },
        UPLOAD_CANCEL_REQUEST: function (e) {
            let { file: n } = e,
                t = p[n.id];
            if (null == t) return !1;
            setImmediate(() => {
                var e;
                return null === (e = t.cancel) || void 0 === e ? void 0 : e.call(t);
            });
        },
        UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
            let { file: n, itemId: t } = e,
                l = p[n.id];
            if (null == l) return !1;
            setImmediate(() => l.cancelItem(t));
        },
        UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: n, file: t } = e,
                l = f[t.id];
            null != l && h(l.nonce, t), x(n, t);
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: n, messageId: t } = e;
            v[t] = n;
        }
    }));

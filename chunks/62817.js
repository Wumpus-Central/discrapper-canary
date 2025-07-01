(n.d(t, { Z: () => y }), n(35282), n(388685), n(358797));
var r,
    i = n(442837),
    l = n(570140),
    o = n(375954);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            }));
    }
    return e;
}
let c = Object.freeze([]),
    u = {},
    d = {},
    p = {},
    h = {},
    f = {};
function m(e, t) {}
function g(e, t) {
    let n = u[e];
    return null != n && ((u[e] = n.filter((e) => e.id !== t)), delete d[t], delete p[t], n.length !== u[e].length);
}
function b(e, t) {
    let n = u[e];
    if (null == n) return !1;
    u[e] = n.map((e) => (e.id === t.id ? s({}, e, t) : e));
    let r = p[t.id];
    null != r && null != h[r.id] && (h[r.id] = s({}, h[r.id], t));
}
class _ extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getFiles(e) {
        var t;
        return null != (t = u[e]) ? t : c;
    }
    getMessageForFile(e) {
        return p[e];
    }
    getUploaderFileForMessageId(e) {
        return h[e];
    }
    getUploadAttachments(e) {
        if (null != e) return f[e];
    }
}
a(_, 'displayName', 'UploadStore');
let y = new _(l.Z, {
    CONNECTION_OPEN: function () {
        f = {};
    },
    LOGOUT: function () {
        f = {};
    },
    UPLOAD_START: function (e) {
        var t, n, r, i;
        let { channelId: l, file: o, uploader: a, message: f } = e;
        if (a._aborted || a._errored) return;
        let m = null != (t = u[l]) ? t : c;
        if (((d[o.id] = a), (u[l] = [...m, o]), null == f)) return;
        p[o.id] = f;
        let { items: g } = o;
        (null != g &&
            (h[f.id] =
                ((r = s({}, o)),
                (i = i = { items: g }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                r)),
            null != (n = f.nonce) || f.id);
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        b(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        b(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: n } = e;
        return g(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return g(t, n.id);
    },
    UPLOAD_CANCEL_REQUEST: function (e) {
        let { file: t } = e,
            n = d[t.id];
        if (null == n) return !1;
        setImmediate(() => {
            var e;
            return null == (e = n.cancel) ? void 0 : e.call(n);
        });
    },
    UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
        let { file: t, itemId: n } = e,
            r = d[t.id];
        if (null == r) return !1;
        setImmediate(() => r.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            r = p[n.id];
        if (null != r) {
            var i;
            null != (i = r.nonce) || r.id;
        }
        b(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        h[n] = t;
    }
});

n.d(t, { Z: () => j }), n(35282), n(388685), n(358797);
var i,
    r = n(442837),
    o = n(570140),
    l = n(375954);
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let c = Object.freeze([]),
    u = {},
    d = {},
    h = {},
    p = {},
    m = {};
function f(e, t) {}
function g(e, t) {
    let n = u[e];
    return null != n && ((u[e] = n.filter((e) => e.id !== t)), delete d[t], delete h[t], n.length !== u[e].length);
}
function b(e, t) {
    let n = u[e];
    if (null == n) return !1;
    u[e] = n.map((e) => (e.id === t.id ? s({}, e, t) : e));
    let i = h[t.id];
    null != i && null != p[i.id] && (p[i.id] = s({}, p[i.id], t));
}
class O extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    getFiles(e) {
        var t;
        return null != (t = u[e]) ? t : c;
    }
    getMessageForFile(e) {
        return h[e];
    }
    getUploaderFileForMessageId(e) {
        return p[e];
    }
    getUploadAttachments(e) {
        if (null != e) return m[e];
    }
}
a(O, 'displayName', 'UploadStore');
let j = new O(o.Z, {
    CONNECTION_OPEN: function () {
        m = {};
    },
    LOGOUT: function () {
        m = {};
    },
    UPLOAD_START: function (e) {
        var t, n, i, r;
        let { channelId: o, file: l, uploader: a, message: m } = e;
        if (a._aborted || a._errored) return;
        let f = null != (t = u[o]) ? t : c;
        if (((d[l.id] = a), (u[o] = [...f, l]), null == m)) return;
        h[l.id] = m;
        let { items: g } = l;
        null != g &&
            (p[m.id] =
                ((i = s({}, l)),
                (r = r = { items: g }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                i)),
            null != (n = m.nonce) || m.id;
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
            i = d[t.id];
        if (null == i) return !1;
        setImmediate(() => i.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            i = h[n.id];
        if (null != i) {
            var r;
            null != (r = i.nonce) || i.id;
        }
        b(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        p[n] = t;
    }
});

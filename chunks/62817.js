n.d(t, { Z: () => y }), n(301563), n(47120), n(177593);
var r,
    a = n(442837),
    l = n(570140),
    i = n(375954);
function o(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
let c = Object.freeze([]),
    u = {},
    d = {},
    m = {},
    p = {},
    h = {};
function f(e, t) {}
function g(e, t) {
    let n = u[e];
    return null != n && ((u[e] = n.filter((e) => e.id !== t)), delete d[t], delete m[t], n.length !== u[e].length);
}
function x(e, t) {
    let n = u[e];
    if (null == n) return !1;
    u[e] = n.map((e) => (e.id === t.id ? s({}, e, t) : e));
    let r = m[t.id];
    null != r && null != p[r.id] && (p[r.id] = s({}, p[r.id], t));
}
class v extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(i.Z);
    }
    getFiles(e) {
        var t;
        return null != (t = u[e]) ? t : c;
    }
    getMessageForFile(e) {
        return m[e];
    }
    getUploaderFileForMessageId(e) {
        return p[e];
    }
    getUploadAttachments(e) {
        if (null != e) return h[e];
    }
}
o(v, 'displayName', 'UploadStore');
let y = new v(l.Z, {
    CONNECTION_OPEN: function () {
        h = {};
    },
    LOGOUT: function () {
        h = {};
    },
    UPLOAD_START: function (e) {
        var t, n, r;
        let { channelId: a, file: l, uploader: i, message: o } = e;
        if (i._aborted || i._errored) return;
        let h = null != (t = u[a]) ? t : c;
        (d[l.id] = i), (u[a] = [...h, l]), (m[l.id] = o);
        let { items: f } = l;
        null != f &&
            (p[o.id] =
                ((n = s({}, l)),
                (r = r = { items: f }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n)),
            o.nonce;
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        x(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        x(t, n);
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
            r = m[n.id];
        null != r && r.nonce, x(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        p[n] = t;
    }
});

n.d(t, { Z: () => v }), n(301563), n(47120), n(177593);
var r,
    l = n(442837),
    o = n(570140),
    i = n(375954);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let c = Object.freeze([]),
    u = {},
    d = {},
    p = {},
    f = {},
    O = {};
function y(e, t) {}
function b(e, t) {
    let n = u[e];
    return null != n && ((u[e] = n.filter((e) => e.id !== t)), delete d[t], delete p[t], n.length !== u[e].length);
}
function m(e, t) {
    let n = u[e];
    if (null == n) return !1;
    u[e] = n.map((e) => (e.id === t.id ? s({}, e, t) : e));
    let r = p[t.id];
    null != r && null != f[r.id] && (f[r.id] = s({}, f[r.id], t));
}
class g extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(i.Z);
    }
    getFiles(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : c;
    }
    getMessageForFile(e) {
        return p[e];
    }
    getUploaderFileForMessageId(e) {
        return f[e];
    }
    getUploadAttachments(e) {
        if (null != e) return O[e];
    }
}
a(g, 'displayName', 'UploadStore');
let v = new g(o.Z, {
    CONNECTION_OPEN: function () {
        O = {};
    },
    LOGOUT: function () {
        O = {};
    },
    UPLOAD_START: function (e) {
        var t, n, r;
        let { channelId: l, file: o, uploader: i, message: a } = e;
        if (i._aborted || i._errored) return;
        let O = null !== (t = u[l]) && void 0 !== t ? t : c;
        (d[o.id] = i), (u[l] = [...O, o]), (p[o.id] = a);
        let { items: y } = o;
        null != y &&
            (f[a.id] =
                ((n = s({}, o)),
                (r = r = { items: y }),
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
            a.nonce;
    },
    UPLOAD_COMPRESSION_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        m(t, n);
    },
    UPLOAD_PROGRESS: function (e) {
        let { channelId: t, file: n } = e;
        m(t, n);
    },
    UPLOAD_COMPLETE: function (e) {
        let { channelId: t, file: n } = e;
        return b(t, n.id);
    },
    UPLOAD_FAIL: function (e) {
        let { channelId: t, file: n } = e;
        return b(t, n.id);
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
            r = d[t.id];
        if (null == r) return !1;
        setImmediate(() => r.cancelItem(n));
    },
    UPLOAD_FILE_UPDATE: function (e) {
        let { channelId: t, file: n } = e,
            r = p[n.id];
        null != r && r.nonce, m(t, n);
    },
    UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
        let { file: t, messageId: n } = e;
        f[n] = t;
    }
});

n.d(t, { N: () => c }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(15729),
    a = n(731965);
function l(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function i(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function o(e) {
    var t = (function (e, t) {
        if ('object' !== s(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== s(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === s(t) ? t : String(t);
}
function s(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let c = (0, r.U)((e, t) => ({
    assets: {},
    previewEnabled: !1,
    setPreviewEnabled: (t) => e({ previewEnabled: t }),
    getPreviewableAssetSrc: (e) => {
        var n;
        let r = t();
        return r.previewEnabled && null !== (n = r.assets[e]) && void 0 !== n ? n : null;
    },
    upsertAsset: (t, n) =>
        (0, a.j)(() => {
            e((e) => {
                let r = e.assets[t];
                null != r && URL.revokeObjectURL(r.src);
                let a = URL.createObjectURL(n),
                    o = l({}, e.assets);
                return (
                    (o[t] = {
                        name: n.name,
                        src: a
                    }),
                    i(l({}, e), { assets: o })
                );
            });
        }),
    deleteAsset: (t) =>
        (0, a.j)(() => {
            e((e) => {
                let n = e.assets[t];
                if (null == n) return e;
                URL.revokeObjectURL(n.src);
                let r = e.assets,
                    { [t]: a } = r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                        }
                        return a;
                    })(r, [t].map(o));
                return i(l({}, e), { assets: s });
            });
        }),
    clearAssets: () =>
        (0, a.j)(() => {
            e((e) => (Object.values(e.assets).forEach((e) => URL.revokeObjectURL(e.src)), { assets: {} }));
        })
}));

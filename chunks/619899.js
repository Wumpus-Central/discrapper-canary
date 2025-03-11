n.d(t, {
    N: () => p,
    z: () => h
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(15729),
    i = n(731965);
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
function a(e) {
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
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e, t) {
    if ('object' !== _(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== _(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function f(e) {
    var t = d(e, 'string');
    return 'symbol' === _(t) ? t : String(t);
}
function _(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let p = (0, r.U)((e) => ({
        assets: {},
        previewEnabled: !1,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        upsertAsset: (t, n) =>
            (0, i.j)(() => {
                e((e) => {
                    let r = e.assets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        o = a({}, e.assets);
                    return (
                        (o[t] = {
                            type: t,
                            name: n.name,
                            src: i
                        }),
                        l(a({}, e), { assets: o })
                    );
                });
            }),
        deleteAsset: (t) =>
            (0, i.j)(() => {
                e((e) => {
                    let n = e.assets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let r = e.assets,
                        { [t]: i } = r,
                        o = c(r, [t].map(f));
                    return l(a({}, e), { assets: o });
                });
            }),
        clearAssets: () =>
            (0, i.j)(() => {
                e((e) => (Object.values(e.assets).forEach((e) => URL.revokeObjectURL(e.src)), { assets: {} }));
            })
    })),
    h = (e) =>
        p((t) => {
            var n;
            return t.previewEnabled ? (null === (n = t.assets[e]) || void 0 === n ? void 0 : n.src) : null;
        });

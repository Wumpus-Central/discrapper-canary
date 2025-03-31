n.d(t, {
    N9: () => g,
    ex: () => b,
    zL: () => E
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(192379),
    i = n(392711),
    o = n(230383),
    a = n(731965),
    s = n(451593);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e, t) {
    if ('object' !== m(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== m(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function h(e) {
    var t = p(e, 'string');
    return 'symbol' === m(t) ? t : String(t);
}
function m(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let g = (0, o.U)((e) => ({
        previewEnabled: !1,
        assets: {},
        previewProfileEffectId: null,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        upsertAsset: (t, n) =>
            (0, a.j)(() => {
                e((e) => {
                    let r = e.assets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        o = c({}, e.assets);
                    return (
                        (o[t] = {
                            type: t,
                            name: n.name,
                            src: i
                        }),
                        d(c({}, e), { assets: o })
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
                        { [t]: i } = r,
                        o = f(r, [t].map(h));
                    return d(c({}, e), {
                        assets: o,
                        previewEnabled: Object.keys(o).length > 0
                    });
                });
            }),
        clearAssets: () =>
            (0, a.j)(() => {
                e(
                    (e) => (
                        Object.values(e.assets).forEach((e) => URL.revokeObjectURL(e.src)),
                        {
                            assets: {},
                            previewEnabled: !1,
                            previewProfileEffectId: null
                        }
                    )
                );
            }),
        setPreviewProfileEffectId: (t) =>
            (0, a.j)(() =>
                e({
                    previewProfileEffectId: t,
                    previewEnabled: null != t
                })
            )
    })),
    E = (e) =>
        g((t) => {
            var n;
            return t.previewEnabled ? (null === (n = t.assets[e]) || void 0 === n ? void 0 : n.src) : null;
        }),
    b = (e) => {
        let { previewEnabled: t, previewProfileEffectId: n } = g(),
            o = t ? n : null,
            a = (0, s.m)(o);
        return r.useMemo(() => {
            if (null == a || null == e) return null;
            let t = (0, i.cloneDeep)(e);
            return (
                (t.title = a.name),
                (t.effects = a.config.effects.map((e) => {
                    let { base64: t } = e;
                    return f(e, ['base64']);
                })),
                t
            );
        }, [a, e]);
    };

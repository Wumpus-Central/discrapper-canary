n.d(t, {
    Cr: () => N,
    N9: () => y,
    O1: () => P,
    St: () => A,
    ex: () => S,
    xq: () => O,
    zL: () => v,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(642613),
    n(704826),
    n(35282);
var r = n(473749),
    i = n(392711),
    a = n(663042),
    o = n(979554),
    s = n(731965),
    l = n(373071),
    c = n(489495),
    u = n(281598);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e, t) {
    if ("object" !== b(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" !== b(r)) return r;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}
function E(e) {
    var t = g(e, "string");
    return "symbol" === b(t) ? t : String(t);
}
function b(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let y = (0, a.U)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewProfileEffectSkuId: null,
        previewAvatarDecorationSkuId: null,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        upsertCollectionAsset: (t, n) =>
            (0, s.j)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        a = f({}, e.collectionAssets);
                    return (
                        (a[t] = {
                            type: t,
                            name: n.name,
                            src: i,
                        }),
                        _(f({}, e), {
                            collectionAssets: a,
                            previewEnabled: !0,
                        })
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, s.j)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let r = e.collectionAssets,
                        { [t]: i } = r,
                        a = m(r, [t].map(E)),
                        o = Object.keys(a).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return _(f({}, e), {
                        collectionAssets: a,
                        previewEnabled: o,
                    });
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, s.j)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let r = URL.createObjectURL(t),
                        i = f({}, e.avatarDecorationAssets);
                    return (
                        (i[t.name] = {
                            type: u.aB.AVATAR_DECORATION,
                            name: t.name,
                            src: r,
                        }),
                        _(f({}, e), {
                            avatarDecorationAssets: i,
                            previewEnabled: !0,
                        })
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, s.j)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let r = e.avatarDecorationAssets,
                        { [t]: i } = r,
                        a = m(r, [t].map(E)),
                        o = Object.keys(a).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return _(f({}, e), {
                        avatarDecorationAssets: a,
                        previewEnabled: o,
                    });
                });
            }),
        clearAssets: () =>
            (0, s.j)(() => {
                e(
                    (e) => (
                        Object.values(e.collectionAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                        Object.values(e.avatarDecorationAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                        {
                            collectionAssets: {},
                            avatarDecorationAssets: {},
                            previewEnabled: !1,
                            previewProfileEffectSkuId: null,
                            previewAvatarDecorationSkuId: null,
                        }
                    ),
                );
            }),
        setPreviewProfileEffectSkuId: (t) =>
            (0, s.j)(() =>
                e({
                    previewProfileEffectSkuId: t,
                    previewEnabled: null != t,
                }),
            ),
        setPreviewAvatarDecorationSkuId: (t) =>
            (0, s.j)(() =>
                e({
                    previewAvatarDecorationSkuId: t,
                    previewEnabled: null != t,
                }),
            ),
    })),
    O = () => {
        let e = y((e) => e.collectionAssets),
            t = y((e) => e.avatarDecorationAssets);
        return r.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    v = (e) =>
        y((t) => {
            var n;
            return t.previewEnabled ? (null == (n = t.collectionAssets[e]) ? void 0 : n.src) : null;
        }),
    S = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: n } = y(),
            a = t ? n : null,
            o = (0, l.mr)(a);
        return r.useMemo(() => {
            if (null == o || null == e) return null;
            let { effects: t, stillFrames: n } = o.config,
                r = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !r) return null;
            let a = (0, i.cloneDeep)(e);
            if (
                ((a.title = o.name),
                (a.effects = t.map((e) => {
                    let { base64: t } = e;
                    return m(e, ["base64"]);
                })),
                r)
            ) {
                var s, l, u, d, f, p;
                (a.reducedMotionSrc = null != (d = null == (s = n[c.cq.REDUCED_MOTION]) ? void 0 : s.src) ? d : ""),
                    (a.staticFrameSrc = null != (f = null == (l = n[c.cq.STATIC]) ? void 0 : l.src) ? f : ""),
                    (a.thumbnailPreviewSrc = null != (p = null == (u = n[c.cq.THUMBNAIL]) ? void 0 : u.src) ? p : "");
            }
            return a;
        }, [o, e]);
    },
    I = (e, t) => _(f({}, e), { asset: t.src }),
    T = (e, t) => {
        if (e.type !== o.Z.AVATAR_DECORATION) return e;
        let n = (0, i.cloneDeep)(e);
        if (n.items.length > 0) {
            let r = n.items[0];
            (e.name = t.name.replace(".png", "")), (n.items[0] = I(r, t));
        }
        return n;
    },
    C = (e, t, n) => {
        let r = Object.values(t);
        return e && 0 !== r.length ? (null != n ? t[n] : r[0]) : null;
    },
    A = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = y(),
            i = y((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            let r = Object.values(i);
            if (!t || 0 === r.length || 0 === e.length) return e;
            if (null != n) {
                let t = i[n];
                return null == t ? e : e.map((e) => T(e, t));
            }
            return e.map((e, t) => {
                let n = t % r.length;
                return T(e, r[n]);
            });
        }, [e, t, n, i]);
    },
    N = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = y(),
            i = y((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            if (null == e || e.type !== o.Z.AVATAR_DECORATION || 0 === e.items.length) return e;
            let r = C(t, i, n);
            return null == r ? e : T(e, r);
        }, [e, t, n, i]);
    },
    P = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = y(),
            i = y((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            if (null == e) return null;
            let r = C(t, i, n);
            return null == r ? e : I(e, r);
        }, [e, t, n, i]);
    };

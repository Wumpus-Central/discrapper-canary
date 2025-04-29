n.d(t, {
    N9: () => y,
    O1: () => C,
    St: () => N,
    ex: () => I,
    xq: () => O,
    zL: () => v
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
var r = n(192379),
    i = n(392711),
    o = n(290486),
    a = n(979554),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e, t) {
    if ('object' !== b(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== b(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function E(e) {
    var t = g(e, 'string');
    return 'symbol' === b(t) ? t : String(t);
}
function b(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let y = (0, o.U)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewProfileEffectId: null,
        previewAvatarDecorationId: null,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        upsertCollectionAsset: (t, n) =>
            (0, s.j)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        o = f({}, e.collectionAssets);
                    return (
                        (o[t] = {
                            type: t,
                            name: n.name,
                            src: i
                        }),
                        p(f({}, e), {
                            collectionAssets: o,
                            previewEnabled: !0
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
                        o = h(r, [t].map(E)),
                        a = Object.keys(o).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return p(f({}, e), {
                        collectionAssets: o,
                        previewEnabled: a
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
                            src: r
                        }),
                        p(f({}, e), {
                            avatarDecorationAssets: i,
                            previewEnabled: !0
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
                        o = h(r, [t].map(E)),
                        a = Object.keys(o).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return p(f({}, e), {
                        avatarDecorationAssets: o,
                        previewEnabled: a
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
                            previewProfileEffectId: null,
                            previewAvatarDecorationId: null
                        }
                    )
                );
            }),
        setPreviewProfileEffectId: (t) =>
            (0, s.j)(() =>
                e({
                    previewProfileEffectId: t,
                    previewEnabled: null != t
                })
            ),
        setPreviewAvatarDecorationId: (t) =>
            (0, s.j)(() =>
                e({
                    previewAvatarDecorationId: t,
                    previewEnabled: !0
                })
            )
    })),
    O = () => {
        let e = y((e) => e.collectionAssets),
            t = y((e) => e.avatarDecorationAssets);
        return r.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name))
            }),
            [e, t]
        );
    },
    v = (e) =>
        y((t) => {
            var n;
            return t.previewEnabled ? (null == (n = t.collectionAssets[e]) ? void 0 : n.src) : null;
        }),
    I = (e) => {
        let { previewEnabled: t, previewProfileEffectId: n } = y(),
            o = t ? n : null,
            a = (0, l.mr)(o);
        return r.useMemo(() => {
            if (null == a || null == e) return null;
            let { effects: t, stillFrames: n } = a.config,
                r = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !r) return null;
            let o = (0, i.cloneDeep)(e);
            if (
                ((o.title = a.name),
                (o.effects = t.map((e) => {
                    let { base64: t } = e;
                    return h(e, ['base64']);
                })),
                r)
            ) {
                var s, l, u, d, f, _;
                (o.reducedMotionSrc = null != (d = null == (s = n[c.cq.REDUCED_MOTION]) ? void 0 : s.src) ? d : ''), (o.staticFrameSrc = null != (f = null == (l = n[c.cq.STATIC]) ? void 0 : l.src) ? f : ''), (o.thumbnailPreviewSrc = null != (_ = null == (u = n[c.cq.THUMBNAIL]) ? void 0 : u.src) ? _ : '');
            }
            return o;
        }, [a, e]);
    },
    S = (e, t) => p(f({}, e), { asset: t.src }),
    T = (e, t) => {
        if (e.type !== a.Z.AVATAR_DECORATION) return e;
        let n = (0, i.cloneDeep)(e);
        if (n.items.length > 0) {
            let r = n.items[0];
            (e.name = t.name.replace('.png', '')), (n.items[0] = S(r, t));
        }
        return n;
    },
    A = (e, t, n) => {
        let r = Object.values(t);
        return e && 0 !== r.length ? (null != n ? t[n] : r[0]) : null;
    },
    N = (e) => {
        let { previewEnabled: t, previewAvatarDecorationId: n } = y(),
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
    C = (e) => {
        let { previewEnabled: t, previewAvatarDecorationId: n } = y(),
            i = y((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            if (null == e) return null;
            let r = A(t, i, n);
            return null == r ? e : S(e, r);
        }, [e, t, n, i]);
    };

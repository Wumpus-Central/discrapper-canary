n.d(t, {
    N9: () => b,
    ex: () => O,
    xq: () => y,
    zL: () => v
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(642613);
var r = n(192379),
    i = n(392711),
    o = n(290486),
    a = n(731965),
    s = n(373071),
    l = n(489495),
    c = n(281598);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e, t) {
    if ('object' !== E(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== E(r)) return r;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
function g(e) {
    var t = m(e, 'string');
    return 'symbol' === E(t) ? t : String(t);
}
function E(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let b = (0, o.U)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewProfileEffectId: null,
        previewAvatarDecorationId: null,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        upsertCollectionAsset: (t, n) =>
            (0, a.j)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        o = d({}, e.collectionAssets);
                    return (
                        (o[t] = {
                            type: t,
                            name: n.name,
                            src: i
                        }),
                        _(d({}, e), {
                            collectionAssets: o,
                            previewEnabled: !0
                        })
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, a.j)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let r = e.collectionAssets,
                        { [t]: i } = r,
                        o = p(r, [t].map(g)),
                        a = Object.keys(o).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return _(d({}, e), {
                        collectionAssets: o,
                        previewEnabled: a
                    });
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, a.j)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let r = URL.createObjectURL(t),
                        i = d({}, e.avatarDecorationAssets);
                    return (
                        (i[t.name] = {
                            type: c.Fr.AVATAR_DECORATION,
                            name: t.name,
                            src: r
                        }),
                        _(d({}, e), {
                            avatarDecorationAssets: i,
                            previewEnabled: !0
                        })
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, a.j)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let r = e.avatarDecorationAssets,
                        { [t]: i } = r,
                        o = p(r, [t].map(g)),
                        a = Object.keys(o).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return _(d({}, e), {
                        avatarDecorationAssets: o,
                        previewEnabled: a
                    });
                });
            }),
        clearAssets: () =>
            (0, a.j)(() => {
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
            (0, a.j)(() =>
                e({
                    previewProfileEffectId: t,
                    previewEnabled: null != t
                })
            ),
        setPreviewAvatarDecorationId: (t) =>
            (0, a.j)(() =>
                e({
                    previewAvatarDecorationId: t,
                    previewEnabled: !0
                })
            )
    })),
    y = () => {
        let e = b((e) => e.collectionAssets),
            t = b((e) => e.avatarDecorationAssets);
        return r.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name))
            }),
            [e, t]
        );
    },
    v = (e) =>
        b((t) => {
            var n;
            return t.previewEnabled ? (null == (n = t.collectionAssets[e]) ? void 0 : n.src) : null;
        }),
    O = (e) => {
        let { previewEnabled: t, previewProfileEffectId: n } = b(),
            o = t ? n : null,
            a = (0, s.mr)(o);
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
                    return p(e, ['base64']);
                })),
                r)
            ) {
                var s, c, u, d, f, _;
                (o.reducedMotionSrc = null != (d = null == (s = n[l.cq.REDUCED_MOTION]) ? void 0 : s.src) ? d : ''), (o.staticFrameSrc = null != (f = null == (c = n[l.cq.STATIC]) ? void 0 : c.src) ? f : ''), (o.thumbnailPreviewSrc = null != (_ = null == (u = n[l.cq.THUMBNAIL]) ? void 0 : u.src) ? _ : '');
            }
            return o;
        }, [a, e]);
    };

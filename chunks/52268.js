r.d(t, { Z: () => I }), r(627341);
var n = r(200651),
    i = r(192379),
    o = r(120356),
    l = r.n(o),
    s = r(278074),
    c = r(831209),
    a = r(399606),
    u = r(481060),
    d = r(37234),
    f = r(597688),
    p = r(884697),
    m = r(222062),
    g = r(74538),
    h = r(731896),
    b = r(528439),
    j = r(981631),
    x = r(388032),
    P = r(299050),
    v = r(223223);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let N = () => 80,
    E = (e) => {
        var { children: t, className: r, isSelected: i = !1 } = e,
            o = _(e, ['children', 'className', 'isSelected']);
        return (0, n.jsx)(
            u.P3F,
            O(y({ className: l()(P.effectGridItem, r, { [P.selected]: i }) }, o), {
                onClick: o.onSelect,
                children: t
            })
        );
    },
    C = (e) => {
        var t,
            { user: r, profileEffect: o, innerRef: l, section: s, isSelected: d } = e,
            j = _(e, ['user', 'profileEffect', 'innerRef', 'section', 'isSelected']);
        let N = (0, h.V)(o.id),
            C = (0, a.e7)([f.Z], () => {
                let e = f.Z.getProduct(o.skuId);
                return (0, p.G1)(e);
            }),
            I = (0, p.Yq)(o.skuId),
            S = i.useRef(null),
            { accessibilityLabel: w, thumbnailPreviewSrc: Z, title: k } = null !== (t = null == N ? void 0 : N.config) && void 0 !== t ? t : {},
            D = g.ZP.canUseCollectibles(r),
            T = s === b.$0.PREMIUM_PURCHASE && !D,
            A = (0, m.M)();
        return (0, n.jsxs)(
            E,
            O(
                y(
                    {
                        className: !T || d || A ? void 0 : P.decorationGridItemChurned,
                        innerRef: null != l ? l : S,
                        isSelected: d
                    },
                    j
                ),
                {
                    children: [
                        (0, n.jsx)('img', {
                            src: v,
                            alt: w,
                            className: P.presetEffectBackground
                        }),
                        (0, n.jsx)('img', {
                            className: P.presetEffectImg,
                            src: Z,
                            alt: k
                        }),
                        s === b.$0.PURCHASE || (s === b.$0.PREMIUM_PURCHASE && D)
                            ? null
                            : I
                              ? (0, n.jsx)(u.lBU, {
                                    className: P.newBadge,
                                    text: (0, n.jsxs)('div', {
                                        className: P.newBadgeText,
                                        children: [
                                            (0, n.jsx)(u.mBM, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            x.NW.string(x.t.y2b7CA)
                                        ]
                                    })
                                })
                              : (0, n.jsx)(u.G2e, {
                                    icon: C
                                        ? () =>
                                              (0, n.jsx)(u.SrA, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 14,
                                                  height: 14
                                              })
                                        : () =>
                                              (0, n.jsx)(u.mBM, {
                                                  size: 'xxs',
                                                  color: 'currentColor'
                                              }),
                                    color: c.Z.BACKGROUND_ACCENT,
                                    className: P.lockBadge
                                })
                    ]
                }
            )
        );
    },
    I = (e) => {
        let { user: t, guild: r, pendingProfileEffect: i, selectedProfileEffectRef: o, onSelect: l, onClose: c } = e,
            a = () => {
                c(), (0, d.jN)(j.S9g.COLLECTIBLES_SHOP);
            },
            f = (0, b.ZP)(),
            p = null != i;
        return (0, n.jsx)('section', {
            className: P.section,
            children: (0, n.jsx)(u.GMG, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: P.list,
                columns: 3,
                sections: f.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, c, d, m) => {
                    let { section: g, items: h } = f[e];
                    return (0, s.EQ)(h[c])
                        .with(b.Tm, () =>
                            (0, n.jsxs)(
                                E,
                                {
                                    style: y({}, d),
                                    isSelected: !p,
                                    onSelect: () => l(null),
                                    children: [
                                        (0, n.jsx)(u.t6m, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: P.notAllowedIcon
                                        }),
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-primary',
                                            children: null != r ? x.NW.string(x.t.GJ3Fcn) : x.NW.string(x.t.PoWNfX)
                                        })
                                    ]
                                },
                                m
                            )
                        )
                        .with(b.oT, () =>
                            (0, n.jsxs)(
                                E,
                                {
                                    style: d,
                                    onSelect: a,
                                    children: [
                                        (0, n.jsx)(u.EOn, {
                                            size: 'custom',
                                            width: 23,
                                            height: 23,
                                            color: 'currentColor',
                                            className: P.shopIcon
                                        }),
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-primary',
                                            children: x.NW.string(x.t.pWG4zc)
                                        })
                                    ]
                                },
                                m
                            )
                        )
                        .otherwise((e) => {
                            let r = i === e.id;
                            return (0, n.jsx)(
                                C,
                                {
                                    user: t,
                                    style: y({}, d),
                                    section: g,
                                    profileEffect: e,
                                    innerRef: r ? o : void 0,
                                    isSelected: r,
                                    onSelect: () => l(e.id)
                                },
                                m
                            );
                        });
                },
                renderSection: (e, t) => {
                    let { header: r } = f[e];
                    return (0, n.jsx)('div', {
                        style: O(y({}, t), {
                            height: ''.concat(16, 'px'),
                            position: 'absolute'
                        }),
                        children: (0, n.jsx)(u.vwX, { children: r })
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => {
                    var r, n;
                    return null !== (n = null === (r = f[e].items[t]) || void 0 === r ? void 0 : r.id) && void 0 !== n ? n : null;
                },
                getItemHeight: N,
                removeEdgeItemGutters: !0
            })
        });
    };

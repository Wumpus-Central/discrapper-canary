r.d(t, { Z: () => C }), r(314940);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    s = r(278074),
    c = r(831209),
    a = r(399606),
    u = r(481060),
    d = r(597688),
    f = r(884697),
    p = r(222062),
    m = r(74538),
    g = r(731896),
    h = r(528439),
    b = r(388032),
    j = r(233966),
    x = r(223223);
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
function P(e, t) {
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
function O(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let v = () => 80,
    _ = (e) => {
        var { children: t, className: r, isSelected: i = !1 } = e,
            l = O(e, ['children', 'className', 'isSelected']);
        return (0, n.jsx)(
            u.P3F,
            P(y({ className: o()(j.effectGridItem, r, { [j.selected]: i }) }, l), {
                onClick: l.onSelect,
                children: t
            })
        );
    },
    E = (e) => {
        var t,
            { user: r, profileEffect: l, innerRef: o, section: s, isSelected: v } = e,
            E = O(e, ['user', 'profileEffect', 'innerRef', 'section', 'isSelected']);
        let C = (0, g.V)(l.id),
            I = (0, a.e7)([d.Z], () => {
                let e = d.Z.getProduct(l.skuId);
                return (0, f.G1)(e);
            }),
            S = (0, f.Yq)(l.skuId),
            w = i.useRef(null),
            { accessibilityLabel: N, thumbnailPreviewSrc: Z, title: k } = null != (t = null == C ? void 0 : C.config) ? t : {},
            D = m.ZP.canUseCollectibles(r),
            A = s === h.$0.PREMIUM_PURCHASE && !D,
            T = (0, p.M)();
        return (0, n.jsxs)(
            _,
            P(
                y(
                    {
                        className: !A || v || T ? void 0 : j.decorationGridItemChurned,
                        innerRef: null != o ? o : w,
                        isSelected: v
                    },
                    E
                ),
                {
                    children: [
                        (0, n.jsx)('img', {
                            src: x,
                            alt: N,
                            className: j.presetEffectBackground
                        }),
                        (0, n.jsx)('img', {
                            className: j.presetEffectImg,
                            src: Z,
                            alt: k
                        }),
                        s === h.$0.PURCHASE || (s === h.$0.PREMIUM_PURCHASE && D)
                            ? null
                            : S
                              ? (0, n.jsx)(u.lBU, {
                                    className: j.newBadge,
                                    text: (0, n.jsxs)('div', {
                                        className: j.newBadgeText,
                                        children: [
                                            (0, n.jsx)(u.mBM, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            b.intl.string(b.t.y2b7CA)
                                        ]
                                    })
                                })
                              : (0, n.jsx)(u.G2e, {
                                    icon: I
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
                                    className: j.lockBadge
                                })
                    ]
                }
            )
        );
    },
    C = (e) => {
        let { user: t, guild: r, pendingProfileEffect: i, selectedProfileEffectRef: l, onSelect: o, onOpenShop: c } = e,
            a = (0, h.ZP)(),
            d = null != i;
        return (0, n.jsx)('section', {
            className: j.section,
            children: (0, n.jsx)(u.GMG, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: j.list,
                columns: 3,
                sections: a.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, f, p, m) => {
                    let { section: g, items: x } = a[e];
                    return (0, s.EQ)(x[f])
                        .with(h.Tm, () =>
                            (0, n.jsxs)(
                                _,
                                {
                                    style: y({}, p),
                                    isSelected: !d,
                                    onSelect: () => o(null),
                                    children: [
                                        (0, n.jsx)(u.t6m, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: j.notAllowedIcon
                                        }),
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-primary',
                                            children: null != r ? b.intl.string(b.t.GJ3Fcn) : b.intl.string(b.t.PoWNfX)
                                        })
                                    ]
                                },
                                m
                            )
                        )
                        .with(h.oT, () =>
                            (0, n.jsxs)(
                                _,
                                {
                                    style: p,
                                    onSelect: c,
                                    children: [
                                        (0, n.jsx)(u.EOn, {
                                            size: 'custom',
                                            width: 23,
                                            height: 23,
                                            color: 'currentColor',
                                            className: j.shopIcon
                                        }),
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-primary',
                                            children: b.intl.string(b.t.pWG4zc)
                                        })
                                    ]
                                },
                                m
                            )
                        )
                        .otherwise((e) => {
                            let r = i === e.id;
                            return (0, n.jsx)(
                                E,
                                {
                                    user: t,
                                    style: y({}, p),
                                    section: g,
                                    profileEffect: e,
                                    innerRef: r ? l : void 0,
                                    isSelected: r,
                                    onSelect: () => o(e.id)
                                },
                                m
                            );
                        });
                },
                renderSection: (e, t) => {
                    let { header: r } = a[e];
                    return (0, n.jsx)('div', {
                        style: P(y({}, t), {
                            height: ''.concat(16, 'px'),
                            position: 'absolute'
                        }),
                        children: (0, n.jsx)(u.vwX, { children: r })
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => {
                    var r, n;
                    return null != (n = null == (r = a[e].items[t]) ? void 0 : r.id) ? n : null;
                },
                getItemHeight: v,
                removeEdgeItemGutters: !0
            })
        });
    };

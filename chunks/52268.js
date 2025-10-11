n.d(t, { Z: () => v }), n(314940);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(278074),
    c = n(481060),
    a = n(171019),
    u = n(74538),
    d = n(731896),
    f = n(528439),
    p = n(388032),
    m = n(364705),
    g = n(223223);
function h(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let y = () => 80,
    j = (e) => {
        var { children: t, className: n, isSelected: i = !1 } = e,
            l = b(e, ["children", "className", "isSelected"]);
        return (0, r.jsx)(
            c.P3F,
            x(h({ className: o()(m.effectGridItem, n, { [m.selected]: i }) }, l), {
                onClick: l.onSelect,
                children: t,
            }),
        );
    },
    P = (e) => {
        var t,
            { profileEffect: n, innerRef: l, section: o, isSelected: s, canUsePremiumCollectibles: c } = e,
            u = b(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]);
        let p = (0, d.V)(n.skuId),
            y = i.useRef(null),
            {
                accessibilityLabel: P,
                thumbnailPreviewSrc: v,
                title: O,
            } = null != (t = null == p ? void 0 : p.config) ? t : {};
        return (0, r.jsxs)(
            j,
            x(
                h(
                    {
                        innerRef: null != l ? l : y,
                        isSelected: s,
                    },
                    u,
                ),
                {
                    children: [
                        (0, r.jsx)("img", {
                            src: g,
                            alt: P,
                            className: m.presetEffectBackground,
                        }),
                        (0, r.jsx)("img", {
                            className: m.presetEffectImg,
                            src: v,
                            alt: O,
                        }),
                        (0, r.jsx)(a.Z, {
                            isPurchaseSection: o === f.$0.PURCHASE,
                            isPremiumSection: o === f.$0.PREMIUM_PURCHASE,
                            canUsePremiumCollectibles: c,
                            skuId: n.skuId,
                        }),
                    ],
                },
            ),
        );
    },
    v = (e) => {
        let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: l, onSelect: o, onOpenShop: a } = e,
            d = (0, f.ZP)(),
            g = null != i,
            b = u.ZP.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: m.section,
            children: (0, r.jsx)(c.GMG, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: m.list,
                columns: 3,
                sections: d.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, u, x) => {
                    let { section: y, items: v } = d[e];
                    return (0, s.EQ)(v[t])
                        .with(f.Tm, () =>
                            (0, r.jsxs)(
                                j,
                                {
                                    style: h({}, u),
                                    isSelected: !g,
                                    onSelect: () => o(null),
                                    children: [
                                        (0, r.jsx)(c.t6m, {
                                            size: "md",
                                            color: "currentColor",
                                            className: m.notAllowedIcon,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-primary",
                                            children: null != n ? p.intl.string(p.t.CHf9iI) : p.intl.string(p.t.PoWNfX),
                                        }),
                                    ],
                                },
                                x,
                            ),
                        )
                        .with(f.oT, () =>
                            (0, r.jsxs)(
                                j,
                                {
                                    style: u,
                                    onSelect: a,
                                    children: [
                                        (0, r.jsx)(c.EOn, {
                                            size: "custom",
                                            width: 23,
                                            height: 23,
                                            color: "currentColor",
                                            className: m.shopIcon,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-primary",
                                            children: p.intl.string(p.t.pWG4zc),
                                        }),
                                    ],
                                },
                                x,
                            ),
                        )
                        .otherwise((e) => {
                            let t = (null == i ? void 0 : i.skuId) === e.skuId;
                            return (0, r.jsx)(
                                P,
                                {
                                    style: h({}, u),
                                    section: y,
                                    profileEffect: e,
                                    innerRef: t ? l : void 0,
                                    isSelected: t,
                                    onSelect: () => o(e),
                                    canUsePremiumCollectibles: b,
                                },
                                x,
                            );
                        });
                },
                renderSection: (e, t) => {
                    let { header: n } = d[e];
                    return (0, r.jsx)("div", {
                        style: x(h({}, t), {
                            height: "".concat(16, "px"),
                            position: "absolute",
                        }),
                        children: (0, r.jsx)(c.Heading, {
                            variant: "heading-md/medium",
                            children: n,
                        }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => d[e].items[t].skuId,
                getItemHeight: y,
                removeEdgeItemGutters: !0,
            }),
        });
    };

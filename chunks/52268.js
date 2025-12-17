n.d(t, { Z: () => O }), n(314940);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    s = n(278074),
    c = n(481060),
    a = n(578976),
    u = n(171019),
    d = n(74538),
    f = n(731896),
    p = n(528439),
    m = n(388032),
    g = n(176404),
    b = n(223223);
function x(e) {
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
function h(e, t) {
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
function j(e, t) {
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
    P = (e) => {
        var { children: t, className: n, isSelected: i = !1 } = e,
            l = j(e, ["children", "className", "isSelected"]);
        return (0, r.jsx)(
            c.P3F,
            h(x({ className: o()(g.effectGridItem, n, { [g.selected]: i }) }, l), {
                onClick: l.onSelect,
                children: t,
            }),
        );
    },
    v = (e) => {
        var t,
            { profileEffect: n, innerRef: l, section: o, isSelected: s, canUsePremiumCollectibles: c } = e,
            d = j(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]);
        let m = (0, f.V)(n.skuId),
            y = i.useRef(null),
            {
                accessibilityLabel: v,
                thumbnailPreviewSrc: O,
                title: E,
            } = null != (t = null == m ? void 0 : m.config) ? t : {},
            C = i.useMemo(() => (0, a.JE)(O), [O]);
        return (0, r.jsxs)(
            P,
            h(
                x(
                    {
                        innerRef: null != l ? l : y,
                        isSelected: s,
                    },
                    d,
                ),
                {
                    children: [
                        (0, r.jsx)("img", {
                            src: b,
                            alt: v,
                            className: g.presetEffectBackground,
                        }),
                        (0, r.jsx)("img", {
                            className: g.presetEffectImg,
                            src: C,
                            alt: E,
                        }),
                        (0, r.jsx)(u.Z, {
                            skuId: n.skuId,
                            canUsePremiumCollectibles: c,
                            isPurchaseSection: o === p.$0.PURCHASE,
                            isPremiumSection: o === p.$0.PREMIUM_PURCHASE,
                        }),
                    ],
                },
            ),
        );
    },
    O = (e) => {
        let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: l, onSelect: o, onOpenShop: a } = e,
            u = (0, p.ZP)(),
            f = null != i,
            b = d.ZP.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: g.section,
            children: (0, r.jsx)(c.GMG, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: g.list,
                columns: 3,
                sections: u.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, d, h) => {
                    let { section: j, items: y } = u[e];
                    return (0, s.EQ)(y[t])
                        .with(p.Tm, () =>
                            (0, r.jsxs)(
                                P,
                                {
                                    style: x({}, d),
                                    isSelected: !f,
                                    onSelect: () => o(null),
                                    children: [
                                        (0, r.jsx)(c.t6m, {
                                            size: "md",
                                            color: "currentColor",
                                            className: g.notAllowedIcon,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-strong",
                                            children: null != n ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.PoWNfe),
                                        }),
                                    ],
                                },
                                h,
                            ),
                        )
                        .with(p.oT, () =>
                            (0, r.jsxs)(
                                P,
                                {
                                    style: d,
                                    onSelect: a,
                                    children: [
                                        (0, r.jsx)(c.EOn, {
                                            size: "custom",
                                            width: 23,
                                            height: 23,
                                            color: "currentColor",
                                            className: g.shopIcon,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-strong",
                                            children: m.intl.string(m.t.pWG4ze),
                                        }),
                                    ],
                                },
                                h,
                            ),
                        )
                        .otherwise((e) => {
                            let t = (null == i ? void 0 : i.skuId) === e.skuId;
                            return (0, r.jsx)(
                                v,
                                {
                                    style: x({}, d),
                                    section: j,
                                    profileEffect: e,
                                    innerRef: t ? l : void 0,
                                    isSelected: t,
                                    onSelect: () => o(e),
                                    canUsePremiumCollectibles: b,
                                },
                                h,
                            );
                        });
                },
                renderSection: (e, t) => {
                    let { header: n } = u[e];
                    return (0, r.jsx)("div", {
                        style: h(x({}, t), {
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
                getItemKey: (e, t) => u[e].items[t].skuId,
                getItemHeight: y,
                removeEdgeItemGutters: !0,
            }),
        });
    };

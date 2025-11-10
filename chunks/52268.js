n.d(t, { Z: () => v }), n(314940);
var r = n(951288),
    i = n(647438),
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
    g = n(364705),
    h = n(223223);
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
function y(e, t) {
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
let j = () => 80,
    O = (e) => {
        var { children: t, className: n, isSelected: i = !1 } = e,
            l = b(e, ["children", "className", "isSelected"]);
        return (0, r.jsx)(
            c.P3F,
            y(x({ className: o()(g.effectGridItem, n, { [g.selected]: i }) }, l), {
                onClick: l.onSelect,
                children: t,
            }),
        );
    },
    P = (e) => {
        var t,
            {
                profileEffect: n,
                innerRef: l,
                section: o,
                isSelected: s,
                canUsePremiumCollectibles: c,
                isTryItOut: d,
            } = e,
            m = b(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles", "isTryItOut"]);
        let j = (0, f.V)(n.skuId),
            P = i.useRef(null),
            {
                accessibilityLabel: v,
                thumbnailPreviewSrc: _,
                title: E,
            } = null != (t = null == j ? void 0 : j.config) ? t : {},
            C = i.useMemo(() => (0, a.JE)(_), [_]);
        return (0, r.jsxs)(
            O,
            y(
                x(
                    {
                        innerRef: null != l ? l : P,
                        isSelected: s,
                    },
                    m,
                ),
                {
                    children: [
                        (0, r.jsx)("img", {
                            src: h,
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
                            isTryItOut: d,
                            isPurchaseSection: o === p.$0.PURCHASE,
                            isPremiumSection: o === p.$0.PREMIUM_PURCHASE,
                        }),
                    ],
                },
            ),
        );
    },
    v = (e) => {
        let {
                user: t,
                guild: n,
                pendingProfileEffect: i,
                selectedProfileEffectRef: l,
                isTryItOut: o = !1,
                onSelect: a,
                onOpenShop: u,
            } = e,
            f = (0, p.ZP)(),
            h = null != i,
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
                sections: f.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, d, y) => {
                    let { section: j, items: v } = f[e];
                    return (0, s.EQ)(v[t])
                        .with(p.Tm, () =>
                            (0, r.jsxs)(
                                O,
                                {
                                    style: x({}, d),
                                    isSelected: !h,
                                    onSelect: () => a(null),
                                    children: [
                                        (0, r.jsx)(c.t6m, {
                                            size: "md",
                                            color: "currentColor",
                                            className: g.notAllowedIcon,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-primary",
                                            children: null != n ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.PoWNfe),
                                        }),
                                    ],
                                },
                                y,
                            ),
                        )
                        .with(p.oT, () =>
                            (0, r.jsxs)(
                                O,
                                {
                                    style: d,
                                    onSelect: u,
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
                                            color: "header-primary",
                                            children: m.intl.string(m.t.pWG4ze),
                                        }),
                                    ],
                                },
                                y,
                            ),
                        )
                        .otherwise((e) => {
                            let t = (null == i ? void 0 : i.skuId) === e.skuId;
                            return (0, r.jsx)(
                                P,
                                {
                                    style: x({}, d),
                                    section: j,
                                    profileEffect: e,
                                    innerRef: t ? l : void 0,
                                    isSelected: t,
                                    onSelect: () => a(e),
                                    canUsePremiumCollectibles: b,
                                    isTryItOut: o,
                                },
                                y,
                            );
                        });
                },
                renderSection: (e, t) => {
                    let { header: n } = f[e];
                    return (0, r.jsx)("div", {
                        style: y(x({}, t), {
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
                getItemKey: (e, t) => f[e].items[t].skuId,
                getItemHeight: j,
                removeEdgeItemGutters: !0,
            }),
        });
    };

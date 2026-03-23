"use strict";
n.d(t, { R: () => m, _: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(435371),
    u = n(397927),
    c = n(661492),
    d = n(961350),
    _ = n(841e3),
    f = n(985018),
    p = n(394236);
let h = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    m = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                location: i,
                onError: s,
                isCardHovered: a = !0,
                showIfWishlisted: l = !0,
                hideIfPurchased: u = !0,
                ...f
            } = e,
            p = (0, o.bG)([d.default], () => d.default.getId()),
            {
                isWishlisted: h,
                isBusy: m,
                isFirstTimeWishlister: g,
                handleToggle: A,
                specificProductOrVariant: I,
                isPurchased: T,
            } = (0, _.z)({ userId: p, product: t, selectedVariantIndex: n, location: i, onError: s }),
            S = a || (h && l);
        return (T && u) || !S
            ? null
            : (0, r.jsx)(E, {
                  skuId: I.skuId,
                  productName: I.name,
                  disabled: !(0, c.q)(I),
                  isWishlisted: h,
                  isBusy: m,
                  isFirstTimeWishlister: g,
                  onClick: A,
                  ...f,
              });
    };
function E(e) {
    let {
            skuId: t,
            productName: n,
            className: s,
            disabled: o,
            variant: c = "default",
            size: d = "md",
            isWishlisted: _,
            isBusy: m,
            isFirstTimeWishlister: E,
            onClick: g,
        } = e,
        A = h[d],
        { reducedMotion: I } = i.useContext(u.CZY),
        T = i.useRef(null),
        [S, y] = i.useState(!1),
        v = _ && !S,
        N = v ? u.C3E : u.yhu,
        C = a()(p.normalIconColor, v && p.wishlistedOrAnimating);
    i.useEffect(() => {
        y(!1);
    }, [t]);
    let R = i.useCallback(
            (e) => {
                e.stopPropagation(), o || (_ || I.enabled ? _ && S && y(!1) : y(!0), g());
            },
            [o, _, I.enabled, S, g],
        ),
        O = _ ? f.intl.string(f.t.yr9TTf) : f.intl.string(f.t["8DkMEQ"]),
        b = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: n }),
        D = !o && !_ && !S,
        L = i.useCallback(
            (e) => {
                e.target === e.currentTarget && S && requestAnimationFrame(() => y(!1));
            },
            [S],
        ),
        w = (e) =>
            I.enabled
                ? (0, r.jsx)(N, { colorClass: e ?? C, size: A })
                : (0, r.jsxs)("div", {
                      className: a()(p.iconContainer, D && p.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: a()(p.iconWrapper, D && p.canHover),
                              children: (0, r.jsx)(N, { colorClass: e ?? C, size: A }),
                          }),
                          (0, r.jsx)("span", {
                              className: a()(p.animationOverlay, S && p.clickAnimation),
                              onAnimationEnd: L,
                              children: (0, r.jsx)(u.C3E, { size: A }),
                          }),
                      ],
                  }),
        M = () =>
            (0, r.jsx)(u.DUT, {
                className: a()(
                    p.wishlistButton,
                    p[d],
                    {
                        [p.variantDefault]: "default" === c,
                        [p.variantSecondaryOverlay]: "overlay-secondary" === c,
                        [p.disabled]: o,
                    },
                    s,
                ),
                innerRef: T,
                onClick: R,
                "aria-label": b,
                "aria-pressed": _,
                "aria-busy": m,
                "aria-disabled": o,
                children: w(),
            });
    return E && !o
        ? (0, r.jsx)(l.un, { title: f.intl.string(f.t["47Rhc3"]), body: f.intl.string(f.t.PXjA0b), children: M() })
        : (0, r.jsx)(l.m_, { text: o ? f.intl.string(f.t["50TX9k"]) : O, ariaHidden: !o, children: M() });
}

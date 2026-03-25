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
        let { product: t, selectedVariantIndex: n, location: i, onError: s, isCardHovered: a = !0, ...l } = e,
            u = (0, o.bG)([d.default], () => d.default.getId()),
            {
                isWishlisted: f,
                isBusy: p,
                isFirstTimeWishlister: h,
                handleToggle: m,
                specificProductOrVariant: g,
                isPurchased: A,
            } = (0, _.z)({ userId: u, product: t, selectedVariantIndex: n, location: i, onError: s }),
            I = a || f;
        return A || !I
            ? null
            : (0, r.jsx)(E, {
                  skuId: g.skuId,
                  productName: g.name,
                  disabled: !(0, c.qq)(g),
                  isWishlisted: f,
                  isBusy: p,
                  isFirstTimeWishlister: h,
                  onClick: m,
                  ...l,
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
            tooltipConfig: A = {},
        } = e,
        I = h[d],
        { reducedMotion: T } = i.useContext(u.CZY),
        S = i.useRef(null),
        [y, v] = i.useState(!1),
        N = _ && !y,
        C = N ? u.C3E : u.yhu,
        R = a()(p.normalIconColor, N && p.wishlistedOrAnimating);
    i.useEffect(() => {
        v(!1);
    }, [t]);
    let O = i.useCallback(
            (e) => {
                e.stopPropagation(), o || (_ || T.enabled ? _ && y && v(!1) : v(!0), g());
            },
            [o, _, T.enabled, y, g],
        ),
        b = !o && !_ && !y,
        D = i.useCallback(
            (e) => {
                e.target === e.currentTarget && y && requestAnimationFrame(() => v(!1));
            },
            [y],
        ),
        L = (e) =>
            T.enabled
                ? (0, r.jsx)(C, { colorClass: e ?? R, size: I })
                : (0, r.jsxs)("div", {
                      className: a()(p.iconContainer, b && p.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: a()(p.iconWrapper, b && p.canHover),
                              children: (0, r.jsx)(C, { colorClass: e ?? R, size: I }),
                          }),
                          (0, r.jsx)("span", {
                              className: a()(p.animationOverlay, y && p.clickAnimation),
                              onAnimationEnd: D,
                              children: (0, r.jsx)(u.C3E, { size: I }),
                          }),
                      ],
                  }),
        w = () => {
            let e = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: n });
            return (0, r.jsx)(u.DUT, {
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
                innerRef: S,
                onClick: O,
                "aria-label": e,
                "aria-pressed": _,
                "aria-busy": m,
                "aria-disabled": o,
                children: L(),
            });
        };
    if (E && !o) {
        let e = A.firstTimeTitle ?? f.intl.string(f.t["47Rhc3"]),
            t = A.firstTimeBody ?? f.intl.string(f.t.PXjA0b);
        return (0, r.jsx)(l.un, { title: e, body: t, children: w() });
    }
    let M = o
        ? (A.disabled ?? f.intl.string(f.t["50TX9k"]))
        : _
          ? (A.remove ?? f.intl.string(f.t.yr9TTf))
          : (A.add ?? f.intl.string(f.t["8DkMEQ"]));
    return (0, r.jsx)(l.m_, { text: M, ariaHidden: !o, children: w() });
}

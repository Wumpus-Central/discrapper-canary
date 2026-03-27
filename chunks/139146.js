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
    p = n(606625);
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
            shouldShowTooltip: A,
            tooltipConfig: I = {},
        } = e,
        T = h[d],
        { reducedMotion: S } = i.useContext(u.CZY),
        y = i.useRef(null),
        [v, N] = i.useState(!1),
        C = _ && !v,
        R = C ? u.C3E : u.yhu,
        O = a()(p.normalIconColor, C && p.wishlistedOrAnimating);
    i.useEffect(() => {
        N(!1);
    }, [t]);
    let b = i.useCallback(
            (e) => {
                e.stopPropagation(), o || (_ || S.enabled ? _ && v && N(!1) : N(!0), g());
            },
            [o, _, S.enabled, v, g],
        ),
        D = !o && !_ && !v,
        L = i.useCallback(
            (e) => {
                e.target === e.currentTarget && v && requestAnimationFrame(() => N(!1));
            },
            [v],
        ),
        w = (e) =>
            S.enabled
                ? (0, r.jsx)(R, { colorClass: e ?? O, size: T })
                : (0, r.jsxs)("div", {
                      className: a()(p.iconContainer, D && p.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: a()(p.iconWrapper, D && p.canHover),
                              children: (0, r.jsx)(R, { colorClass: e ?? O, size: T }),
                          }),
                          (0, r.jsx)("span", {
                              className: a()(p.animationOverlay, v && p.clickAnimation),
                              onAnimationEnd: L,
                              children: (0, r.jsx)(u.C3E, { size: T }),
                          }),
                      ],
                  }),
        M = () => {
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
                innerRef: y,
                onClick: b,
                "aria-label": e,
                "aria-pressed": _,
                "aria-busy": m,
                "aria-disabled": o,
                children: w(),
            });
        };
    if (E && !o) {
        let e = I.firstTimeTitle ?? f.intl.string(f.t["47Rhc3"]),
            t = I.firstTimeBody ?? f.intl.string(f.t.PXjA0b);
        return (0, r.jsx)(l.un, { title: e, body: t, shouldShow: A, children: M() });
    }
    let P = o
        ? (I.disabled ?? f.intl.string(f.t["50TX9k"]))
        : _
          ? (I.remove ?? f.intl.string(f.t.yr9TTf))
          : (I.add ?? f.intl.string(f.t["8DkMEQ"]));
    return (0, r.jsx)(l.m_, { text: P, ariaHidden: !o, shouldShow: A, children: M() });
}

"use strict";
n.d(t, { R: () => E, _: () => g });
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
    f = n(758836),
    p = n(985018),
    h = n(606625);
let m = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    E = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                location: s,
                onError: a,
                isCardHovered: l = !0,
                onTrackClick: u,
                ...p
            } = e,
            h = (0, o.bG)([d.default], () => d.default.getId()),
            {
                isWishlisted: m,
                isBusy: E,
                isFirstTimeWishlister: A,
                handleToggle: I,
                specificProductOrVariant: T,
                isPurchased: S,
            } = (0, _.z)({ userId: h, product: t, selectedVariantIndex: n, location: s, onError: a }),
            y = i.useCallback(() => {
                u?.(m ? f.sH.REMOVE_FROM_WISHLIST : f.sH.ADD_TO_WISHLIST), I();
            }, [m, I, u]),
            v = l || m;
        return S || !v
            ? null
            : (0, r.jsx)(g, {
                  skuId: T.skuId,
                  productName: T.name,
                  disabled: !(0, c.qq)(T),
                  isWishlisted: m,
                  isBusy: E,
                  isFirstTimeWishlister: A,
                  onClick: y,
                  ...p,
              });
    };
function g(e) {
    let {
            skuId: t,
            productName: n,
            className: s,
            disabled: o,
            variant: c = "default",
            size: d = "md",
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: E,
            onClick: g,
            shouldShowTooltip: A,
            tooltipConfig: I = {},
        } = e,
        T = m[d],
        { reducedMotion: S } = i.useContext(u.CZY),
        y = i.useRef(null),
        [v, N] = i.useState(!1),
        C = _ && !v,
        R = C ? u.C3E : u.yhu,
        O = a()(h.normalIconColor, C && h.wishlistedOrAnimating);
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
                      className: a()(h.iconContainer, D && h.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: a()(h.iconWrapper, D && h.canHover),
                              children: (0, r.jsx)(R, { colorClass: e ?? O, size: T }),
                          }),
                          (0, r.jsx)("span", {
                              className: a()(h.animationOverlay, v && h.clickAnimation),
                              onAnimationEnd: L,
                              children: (0, r.jsx)(u.C3E, { size: T }),
                          }),
                      ],
                  }),
        M = () => {
            let e = p.intl.formatToPlainString(p.t["7kFjeK"], { productName: n });
            return (0, r.jsx)(u.DUT, {
                className: a()(
                    h.wishlistButton,
                    h[d],
                    {
                        [h.variantDefault]: "default" === c,
                        [h.variantSecondary]: "secondary" === c,
                        [h.variantSecondaryOverlay]: "overlay-secondary" === c,
                        [h.disabled]: o,
                    },
                    s,
                ),
                innerRef: y,
                onClick: b,
                "aria-label": e,
                "aria-pressed": _,
                "aria-busy": f,
                "aria-disabled": o,
                children: w(),
            });
        };
    if (E && !o) {
        let e = I.firstTimeTitle ?? p.intl.string(p.t["47Rhc3"]),
            t = I.firstTimeBody ?? p.intl.string(p.t.PXjA0b);
        return (0, r.jsx)(l.un, { title: e, body: t, shouldShow: A, children: M() });
    }
    let P = o
        ? (I.disabled ?? p.intl.string(p.t["50TX9k"]))
        : _
          ? (I.remove ?? p.intl.string(p.t.yr9TTf))
          : (I.add ?? p.intl.string(p.t["8DkMEQ"]));
    return (0, r.jsx)(l.m_, { text: P, ariaHidden: !o, shouldShow: A, children: M() });
}

"use strict";
n.d(t, { R: () => I, _: () => y });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(844222),
    u = n(926268),
    c = n(559758),
    d = n(939249),
    h = n(459192),
    m = n(866665),
    f = n(661492),
    p = n(280450),
    g = n(113265),
    x = n(758836),
    A = n(375708),
    E = n(255417);
let C = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function I(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            location: s,
            onError: r,
            isCardHovered: o = !0,
            onTrackClick: u,
            ...c
        } = e,
        d = (0, a.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: h,
            isBusy: m,
            isFirstTimeWishlister: A,
            handleToggle: E,
            specificProductOrVariant: C,
            isPurchased: I,
        } = (0, g.z)({ userId: d, product: t, selectedVariantIndex: n, location: s, onError: r }),
        S = i.useCallback(() => {
            u?.(h ? x.sH.REMOVE_FROM_WISHLIST : x.sH.ADD_TO_WISHLIST), E();
        }, [h, E, u]);
    return I
        ? null
        : (0, l.jsx)(y, {
              skuId: C.skuId,
              productName: C.name,
              disabled: !(0, f.q)(C),
              isWishlisted: h,
              isBusy: m,
              isFirstTimeWishlister: A,
              isVisuallyHidden: !o && !h,
              onClick: S,
              ...c,
          });
}
function y(e) {
    let {
            skuId: t,
            productName: n,
            className: s,
            disabled: a,
            variant: f = "default",
            size: p = "md",
            isWishlisted: g,
            isBusy: x,
            isFirstTimeWishlister: I,
            isVisuallyHidden: y,
            onClick: S,
            shouldShowTooltip: v,
            tooltipConfig: _ = {},
        } = e,
        N = C[p],
        { reducedMotion: T } = i.useContext(o.C),
        j = i.useRef(null),
        [b, R] = i.useState(!1),
        L = g && !b,
        O = L ? u.HeartIcon : c.y,
        M = r()(E.normalIconColor, L && E.wishlistedOrAnimating);
    i.useEffect(() => {
        R(!1);
    }, [t]);
    let w = i.useCallback(
            (e) => {
                e.stopPropagation(), a || (g || T.enabled ? g && b && R(!1) : R(!0), S());
            },
            [a, g, T.enabled, b, S],
        ),
        k = !a && !g && !b,
        P = i.useCallback(
            (e) => {
                e.target === e.currentTarget && b && requestAnimationFrame(() => R(!1));
            },
            [b],
        );
    function D() {
        let e = A.intl.formatToPlainString(A.t["7kFjeK"], { productName: n });
        return (0, l.jsx)(d.D, {
            className: r()(
                E.wishlistButton,
                E[p],
                {
                    [E.variantDefault]: "default" === f,
                    [E.variantSecondary]: "secondary" === f,
                    [E.variantSecondaryOverlay]: "overlay-secondary" === f,
                    [E.disabled]: a,
                    [E.visuallyHidden]: y,
                },
                s,
            ),
            innerRef: j,
            onClick: w,
            "aria-label": e,
            "aria-pressed": g,
            "aria-busy": x,
            "aria-disabled": a,
            children: T.enabled
                ? (0, l.jsx)(O, { colorClass: void 0 ?? M, size: N })
                : (0, l.jsxs)("div", {
                      className: r()(E.iconContainer, k && E.canAnimate),
                      children: [
                          (0, l.jsx)("span", {
                              className: r()(E.iconWrapper, k && E.canHover),
                              children: (0, l.jsx)(O, { colorClass: void 0 ?? M, size: N }),
                          }),
                          (0, l.jsx)("span", {
                              className: r()(E.animationOverlay, b && E.clickAnimation),
                              onAnimationEnd: P,
                              children: (0, l.jsx)(u.HeartIcon, { size: N }),
                          }),
                      ],
                  }),
        });
    }
    if (I && !a) {
        let e = _.firstTimeTitle ?? A.intl.string(A.t["47Rhc3"]),
            t = _.firstTimeBody ?? A.intl.string(A.t.PXjA0b);
        return (0, l.jsx)(h.u, { title: e, body: t, shouldShow: v, children: D() });
    }
    let U = a
        ? (_.disabled ?? A.intl.string(A.t["50TX9k"]))
        : g
          ? (_.remove ?? A.intl.string(A.t.yr9TTf))
          : (_.add ?? A.intl.string(A.t["8DkMEQ"]));
    return (0, l.jsx)(m.m, { text: U, ariaHidden: !a, shouldShow: v, children: D() });
}

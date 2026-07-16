"use strict";
n.d(t, { R: () => g, _: () => S });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(844222),
    d = n(926268),
    c = n(559758),
    u = n(939249),
    _ = n(459192),
    E = n(866665),
    A = n(661492),
    h = n(280450),
    I = n(113265),
    f = n(758836),
    p = n(375708),
    T = n(859633);
let m = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function g(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            location: a,
            onError: s,
            isCardHovered: o = !0,
            onTrackClick: d,
            ...c
        } = e,
        u = (0, l.bG)([h.default], () => h.default.getId()),
        {
            isWishlisted: _,
            isBusy: E,
            isFirstTimeWishlister: p,
            handleToggle: T,
            specificProductOrVariant: m,
            isPurchased: g,
        } = (0, I.z)({ userId: u, product: t, selectedVariantIndex: n, location: a, onError: s }),
        N = r.useCallback(() => {
            d?.(_ ? f.sH.REMOVE_FROM_WISHLIST : f.sH.ADD_TO_WISHLIST), T();
        }, [_, T, d]);
    return g
        ? null
        : (0, i.jsx)(S, {
              skuId: m.skuId,
              productName: m.name,
              disabled: !(0, A.q)(m),
              isWishlisted: _,
              isBusy: E,
              isFirstTimeWishlister: p,
              isVisuallyHidden: !o && !_,
              onClick: N,
              ...c,
          });
}
function S(e) {
    let {
            skuId: t,
            productName: n,
            className: a,
            disabled: l,
            variant: A = "default",
            size: h = "md",
            isWishlisted: I,
            isBusy: f,
            isFirstTimeWishlister: g,
            isVisuallyHidden: S,
            onClick: N,
            shouldShowTooltip: C,
            tooltipConfig: R = {},
        } = e,
        O = m[h],
        { reducedMotion: L } = r.useContext(o.C),
        D = r.useRef(null),
        [y, v] = r.useState(!1),
        b = I && !y,
        M = b ? d.C : c.y,
        P = s()(T.normalIconColor, b && T.wishlistedOrAnimating);
    r.useEffect(() => {
        v(!1);
    }, [t]);
    let U = r.useCallback(
            (e) => {
                e.stopPropagation(), l || (I || L.enabled ? I && y && v(!1) : v(!0), N());
            },
            [l, I, L.enabled, y, N],
        ),
        w = !l && !I && !y,
        G = r.useCallback(
            (e) => {
                e.target === e.currentTarget && y && requestAnimationFrame(() => v(!1));
            },
            [y],
        );
    function x() {
        let e = p.intl.formatToPlainString(p.t["7kFjeK"], { productName: n });
        return (0, i.jsx)(u.D, {
            className: s()(
                T.wishlistButton,
                T[h],
                {
                    [T.variantDefault]: "default" === A,
                    [T.variantSecondary]: "secondary" === A,
                    [T.variantSecondaryOverlay]: "overlay-secondary" === A,
                    [T.disabled]: l,
                    [T.visuallyHidden]: S,
                },
                a,
            ),
            innerRef: D,
            onClick: U,
            "aria-label": e,
            "aria-pressed": I,
            "aria-busy": f,
            "aria-disabled": l,
            children: L.enabled
                ? (0, i.jsx)(M, { colorClass: void 0 ?? P, size: O })
                : (0, i.jsxs)("div", {
                      className: s()(T.iconContainer, w && T.canAnimate),
                      children: [
                          (0, i.jsx)("span", {
                              className: s()(T.iconWrapper, w && T.canHover),
                              children: (0, i.jsx)(M, { colorClass: void 0 ?? P, size: O }),
                          }),
                          (0, i.jsx)("span", {
                              className: s()(T.animationOverlay, y && T.clickAnimation),
                              onAnimationEnd: G,
                              children: (0, i.jsx)(d.C, { size: O }),
                          }),
                      ],
                  }),
        });
    }
    if (g && !l) {
        let e = R.firstTimeTitle ?? p.intl.string(p.t["47Rhc3"]),
            t = R.firstTimeBody ?? p.intl.string(p.t.PXjA0b);
        return (0, i.jsx)(_.u, { title: e, body: t, shouldShow: C, children: x() });
    }
    let k = l
        ? (R.disabled ?? p.intl.string(p.t["50TX9k"]))
        : I
          ? (R.remove ?? p.intl.string(p.t.yr9TTf))
          : (R.add ?? p.intl.string(p.t["8DkMEQ"]));
    return (0, i.jsx)(E.m, { text: k, ariaHidden: !l, shouldShow: C, children: x() });
}

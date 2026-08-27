n.d(t, { R: () => x, _: () => C });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(17928),
    u = n(844222),
    o = n(926268),
    c = n(559758),
    d = n(939249),
    f = n(683063),
    h = n(866665),
    m = n(661492),
    p = n(280450),
    g = n(113265),
    y = n(758836),
    v = n(375708),
    A = n(715838);
let E = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function x(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            location: i,
            onError: s,
            isCardHovered: u = !0,
            onTrackClick: o,
            ...c
        } = e,
        d = (0, a.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: f,
            isBusy: h,
            isFirstTimeWishlister: v,
            handleToggle: A,
            specificProductOrVariant: E,
            isPurchased: x,
        } = (0, g.z)({ userId: d, product: t, selectedVariantIndex: n, location: i, onError: s }),
        S = r.useCallback(() => {
            o?.(f ? y.sH.REMOVE_FROM_WISHLIST : y.sH.ADD_TO_WISHLIST), A();
        }, [f, A, o]);
    return x
        ? null
        : (0, l.jsx)(C, {
              skuId: E.skuId,
              productName: E.name,
              disabled: !(0, m.q)(E),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: v,
              isVisuallyHidden: !u && !f,
              onClick: S,
              ...c,
          });
}
function C(e) {
    let {
            skuId: t,
            productName: n,
            className: i,
            disabled: a,
            variant: m = "default",
            size: p = "md",
            isWishlisted: g,
            isBusy: y,
            isFirstTimeWishlister: x,
            isVisuallyHidden: C,
            onClick: S,
            shouldShowTooltip: I,
            tooltipConfig: T = {},
        } = e,
        R = E[p],
        { reducedMotion: b } = r.useContext(u.C),
        w = r.useRef(null),
        [N, _] = r.useState(!1),
        k = g && !N,
        j = k ? o.HeartIcon : c.y,
        L = s()(A.normalIconColor, k && A.wishlistedOrAnimating);
    r.useEffect(() => {
        _(!1);
    }, [t]);
    let O = r.useCallback(
            (e) => {
                e.stopPropagation(), a || (g || b.enabled ? g && N && _(!1) : _(!0), S());
            },
            [a, g, b.enabled, N, S],
        ),
        D = !a && !g && !N,
        P = r.useCallback(
            (e) => {
                e.target === e.currentTarget && N && requestAnimationFrame(() => _(!1));
            },
            [N],
        );
    function W() {
        let e = v.intl.formatToPlainString(v.t["7kFjeK"], { productName: n });
        return (0, l.jsx)(d.D, {
            className: s()(
                A.wishlistButton,
                A[p],
                {
                    [A.variantDefault]: "default" === m,
                    [A.variantSecondary]: "secondary" === m,
                    [A.variantSecondaryOverlay]: "overlay-secondary" === m,
                    [A.disabled]: a,
                    [A.visuallyHidden]: C,
                },
                i,
            ),
            innerRef: w,
            onClick: O,
            "aria-label": e,
            "aria-pressed": g,
            "aria-busy": y,
            "aria-disabled": a,
            children: b.enabled
                ? (0, l.jsx)(j, { colorClass: void 0 ?? L, size: R })
                : (0, l.jsxs)("div", {
                      className: s()(A.iconContainer, D && A.canAnimate),
                      children: [
                          (0, l.jsx)("span", {
                              className: s()(A.iconWrapper, D && A.canHover),
                              children: (0, l.jsx)(j, { colorClass: void 0 ?? L, size: R }),
                          }),
                          (0, l.jsx)("span", {
                              className: s()(A.animationOverlay, N && A.clickAnimation),
                              onAnimationEnd: P,
                              children: (0, l.jsx)(o.HeartIcon, { size: R }),
                          }),
                      ],
                  }),
        });
    }
    if (x && !a) {
        let e = T.firstTimeTitle ?? v.intl.string(v.t["47Rhc3"]),
            t = T.firstTimeBody ?? v.intl.string(v.t.PXjA0b);
        return (0, l.jsx)(f.u, { title: e, body: t, shouldShow: I, children: W() });
    }
    let M = a
        ? (T.disabled ?? v.intl.string(v.t["50TX9k"]))
        : g
          ? (T.remove ?? v.intl.string(v.t.yr9TTf))
          : (T.add ?? v.intl.string(v.t["8DkMEQ"]));
    return (0, l.jsx)(h.m, { text: M, ariaHidden: !a, shouldShow: I, children: W() });
}

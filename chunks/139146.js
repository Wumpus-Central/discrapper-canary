n.d(t, { R: () => S, _: () => A });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(17928),
    o = n(844222),
    u = n(926268),
    c = n(559758),
    d = n(939249),
    f = n(683063),
    h = n(866665),
    m = n(661492),
    p = n(280450),
    g = n(536572),
    y = n(113265),
    v = n(758836),
    C = n(375708),
    E = n(715838);
let x = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function S(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            location: i,
            onError: a,
            isCardHovered: o = !0,
            onTrackClick: u,
            ...c
        } = e,
        d = (0, s.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: f,
            isBusy: h,
            isFirstTimeWishlister: C,
            handleToggle: E,
            specificProductOrVariant: x,
            isPurchased: S,
        } = (0, y.z)({ userId: d, product: t, selectedVariantIndex: n, location: i, onError: a }),
        I = (0, g.s7)(x),
        T = r.useCallback(() => {
            u?.(f ? v.sH.REMOVE_FROM_WISHLIST : v.sH.ADD_TO_WISHLIST), E();
        }, [f, E, u]);
    return S
        ? null
        : (0, l.jsx)(A, {
              skuId: x.skuId,
              productName: I,
              disabled: !(0, m.q)(x),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: C,
              isVisuallyHidden: !o && !f,
              onClick: T,
              ...c,
          });
}
function A(e) {
    let {
            skuId: t,
            productName: n,
            className: i,
            disabled: s,
            variant: m = "default",
            size: p = "md",
            isWishlisted: g,
            isBusy: y,
            isFirstTimeWishlister: v,
            isVisuallyHidden: S,
            onClick: A,
            shouldShowTooltip: I,
            tooltipConfig: T = {},
        } = e,
        R = x[p],
        { reducedMotion: N } = r.useContext(o.C),
        w = r.useRef(null),
        [b, _] = r.useState(!1),
        k = g && !b,
        L = k ? u.HeartIcon : c.y,
        j = a()(E.normalIconColor, k && E.wishlistedOrAnimating);
    r.useEffect(() => {
        _(!1);
    }, [t]);
    let O = r.useCallback(
            (e) => {
                e.stopPropagation(), s || (g || N.enabled ? g && b && _(!1) : _(!0), A());
            },
            [s, g, N.enabled, b, A],
        ),
        D = !s && !g && !b,
        P = r.useCallback(
            (e) => {
                e.target === e.currentTarget && b && requestAnimationFrame(() => _(!1));
            },
            [b],
        );
    function W() {
        let e = C.intl.formatToPlainString(C.t["7kFjeK"], { productName: n });
        return (0, l.jsx)(d.D, {
            className: a()(
                E.wishlistButton,
                E[p],
                {
                    [E.variantDefault]: "default" === m,
                    [E.variantSecondary]: "secondary" === m,
                    [E.variantSecondaryOverlay]: "overlay-secondary" === m,
                    [E.disabled]: s,
                    [E.visuallyHidden]: S,
                },
                i,
            ),
            innerRef: w,
            onClick: O,
            "aria-label": e,
            "aria-pressed": g,
            "aria-busy": y,
            "aria-disabled": s,
            children: N.enabled
                ? (0, l.jsx)(L, { colorClass: void 0 ?? j, size: R })
                : (0, l.jsxs)("div", {
                      className: a()(E.iconContainer, D && E.canAnimate),
                      children: [
                          (0, l.jsx)("span", {
                              className: a()(E.iconWrapper, D && E.canHover),
                              children: (0, l.jsx)(L, { colorClass: void 0 ?? j, size: R }),
                          }),
                          (0, l.jsx)("span", {
                              className: a()(E.animationOverlay, b && E.clickAnimation),
                              onAnimationEnd: P,
                              children: (0, l.jsx)(u.HeartIcon, { size: R }),
                          }),
                      ],
                  }),
        });
    }
    if (v && !s) {
        let e = T.firstTimeTitle ?? C.intl.string(C.t["47Rhc3"]),
            t = T.firstTimeBody ?? C.intl.string(C.t.PXjA0b);
        return (0, l.jsx)(f.u, { title: e, body: t, shouldShow: I, children: W() });
    }
    let M = s
        ? (T.disabled ?? C.intl.string(C.t["50TX9k"]))
        : g
          ? (T.remove ?? C.intl.string(C.t.yr9TTf))
          : (T.add ?? C.intl.string(C.t["8DkMEQ"]));
    return (0, l.jsx)(h.m, { text: M, ariaHidden: !s, shouldShow: I, children: W() });
}

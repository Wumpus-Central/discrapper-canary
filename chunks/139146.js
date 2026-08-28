n.d(t, { R: () => C, _: () => x });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(17928),
    u = n(844222),
    o = n(926268),
    c = n(559758),
    d = n(939249),
    f = n(683063),
    h = n(866665),
    p = n(661492),
    m = n(280450),
    g = n(113265),
    y = n(758836),
    v = n(375708),
    E = n(715838);
let A = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function C(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            location: i,
            onError: a,
            isCardHovered: u = !0,
            onTrackClick: o,
            ...c
        } = e,
        d = (0, s.bG)([m.default], () => m.default.getId()),
        {
            isWishlisted: f,
            isBusy: h,
            isFirstTimeWishlister: v,
            handleToggle: E,
            specificProductOrVariant: A,
            isPurchased: C,
        } = (0, g.z)({ userId: d, product: t, selectedVariantIndex: n, location: i, onError: a }),
        S = r.useCallback(() => {
            o?.(f ? y.sH.REMOVE_FROM_WISHLIST : y.sH.ADD_TO_WISHLIST), E();
        }, [f, E, o]);
    return C
        ? null
        : (0, l.jsx)(x, {
              skuId: A.skuId,
              productName: A.name,
              disabled: !(0, p.q)(A),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: v,
              isVisuallyHidden: !u && !f,
              onClick: S,
              ...c,
          });
}
function x(e) {
    let {
            skuId: t,
            productName: n,
            className: i,
            disabled: s,
            variant: p = "default",
            size: m = "md",
            isWishlisted: g,
            isBusy: y,
            isFirstTimeWishlister: C,
            isVisuallyHidden: x,
            onClick: S,
            shouldShowTooltip: I,
            tooltipConfig: T = {},
        } = e,
        R = A[m],
        { reducedMotion: w } = r.useContext(u.C),
        b = r.useRef(null),
        [N, _] = r.useState(!1),
        L = g && !N,
        k = L ? o.HeartIcon : c.y,
        j = a()(E.normalIconColor, L && E.wishlistedOrAnimating);
    r.useEffect(() => {
        _(!1);
    }, [t]);
    let O = r.useCallback(
            (e) => {
                e.stopPropagation(), s || (g || w.enabled ? g && N && _(!1) : _(!0), S());
            },
            [s, g, w.enabled, N, S],
        ),
        W = !s && !g && !N,
        D = r.useCallback(
            (e) => {
                e.target === e.currentTarget && N && requestAnimationFrame(() => _(!1));
            },
            [N],
        );
    function P() {
        let e = v.intl.formatToPlainString(v.t["7kFjeK"], { productName: n });
        return (0, l.jsx)(d.D, {
            className: a()(
                E.wishlistButton,
                E[m],
                {
                    [E.variantDefault]: "default" === p,
                    [E.variantSecondary]: "secondary" === p,
                    [E.variantSecondaryOverlay]: "overlay-secondary" === p,
                    [E.disabled]: s,
                    [E.visuallyHidden]: x,
                },
                i,
            ),
            innerRef: b,
            onClick: O,
            "aria-label": e,
            "aria-pressed": g,
            "aria-busy": y,
            "aria-disabled": s,
            children: w.enabled
                ? (0, l.jsx)(k, { colorClass: void 0 ?? j, size: R })
                : (0, l.jsxs)("div", {
                      className: a()(E.iconContainer, W && E.canAnimate),
                      children: [
                          (0, l.jsx)("span", {
                              className: a()(E.iconWrapper, W && E.canHover),
                              children: (0, l.jsx)(k, { colorClass: void 0 ?? j, size: R }),
                          }),
                          (0, l.jsx)("span", {
                              className: a()(E.animationOverlay, N && E.clickAnimation),
                              onAnimationEnd: D,
                              children: (0, l.jsx)(o.HeartIcon, { size: R }),
                          }),
                      ],
                  }),
        });
    }
    if (C && !s) {
        let e = T.firstTimeTitle ?? v.intl.string(v.t["47Rhc3"]),
            t = T.firstTimeBody ?? v.intl.string(v.t.PXjA0b);
        return (0, l.jsx)(f.u, { title: e, body: t, shouldShow: I, children: P() });
    }
    let M = s
        ? (T.disabled ?? v.intl.string(v.t["50TX9k"]))
        : g
          ? (T.remove ?? v.intl.string(v.t.yr9TTf))
          : (T.add ?? v.intl.string(v.t["8DkMEQ"]));
    return (0, l.jsx)(h.m, { text: M, ariaHidden: !s, shouldShow: I, children: P() });
}

n.d(t, { R: () => x, _: () => S });
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
    g = n(536572),
    y = n(113265),
    v = n(758836),
    E = n(375708),
    A = n(715838);
let C = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function x(e) {
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
            isFirstTimeWishlister: E,
            handleToggle: A,
            specificProductOrVariant: C,
            isPurchased: x,
        } = (0, y.z)({ userId: d, product: t, selectedVariantIndex: n, location: i, onError: a }),
        I = (0, g.s7)(C),
        T = r.useCallback(() => {
            o?.(f ? v.sH.REMOVE_FROM_WISHLIST : v.sH.ADD_TO_WISHLIST), A();
        }, [f, A, o]);
    return x
        ? null
        : (0, l.jsx)(S, {
              skuId: C.skuId,
              productName: I,
              disabled: !(0, p.q)(C),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: E,
              isVisuallyHidden: !u && !f,
              onClick: T,
              ...c,
          });
}
function S(e) {
    let {
            skuId: t,
            productName: n,
            className: i,
            disabled: s,
            variant: p = "default",
            size: m = "md",
            isWishlisted: g,
            isBusy: y,
            isFirstTimeWishlister: v,
            isVisuallyHidden: x,
            onClick: S,
            shouldShowTooltip: I,
            tooltipConfig: T = {},
        } = e,
        R = C[m],
        { reducedMotion: w } = r.useContext(u.C),
        b = r.useRef(null),
        [N, _] = r.useState(!1),
        L = g && !N,
        k = L ? o.HeartIcon : c.y,
        j = a()(A.normalIconColor, L && A.wishlistedOrAnimating);
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
        let e = E.intl.formatToPlainString(E.t["7kFjeK"], { productName: n });
        return (0, l.jsx)(d.D, {
            className: a()(
                A.wishlistButton,
                A[m],
                {
                    [A.variantDefault]: "default" === p,
                    [A.variantSecondary]: "secondary" === p,
                    [A.variantSecondaryOverlay]: "overlay-secondary" === p,
                    [A.disabled]: s,
                    [A.visuallyHidden]: x,
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
                      className: a()(A.iconContainer, W && A.canAnimate),
                      children: [
                          (0, l.jsx)("span", {
                              className: a()(A.iconWrapper, W && A.canHover),
                              children: (0, l.jsx)(k, { colorClass: void 0 ?? j, size: R }),
                          }),
                          (0, l.jsx)("span", {
                              className: a()(A.animationOverlay, N && A.clickAnimation),
                              onAnimationEnd: D,
                              children: (0, l.jsx)(o.HeartIcon, { size: R }),
                          }),
                      ],
                  }),
        });
    }
    if (v && !s) {
        let e = T.firstTimeTitle ?? E.intl.string(E.t["47Rhc3"]),
            t = T.firstTimeBody ?? E.intl.string(E.t.PXjA0b);
        return (0, l.jsx)(f.u, { title: e, body: t, shouldShow: I, children: P() });
    }
    let M = s
        ? (T.disabled ?? E.intl.string(E.t["50TX9k"]))
        : g
          ? (T.remove ?? E.intl.string(E.t.yr9TTf))
          : (T.add ?? E.intl.string(E.t["8DkMEQ"]));
    return (0, l.jsx)(h.m, { text: M, ariaHidden: !s, shouldShow: I, children: P() });
}

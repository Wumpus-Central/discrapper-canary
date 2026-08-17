n.d(t, { R: () => I, _: () => y });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    i = n.n(s),
    a = n(17928),
    u = n(844222),
    c = n(926268),
    o = n(559758),
    d = n(939249),
    f = n(459192),
    h = n(866665),
    m = n(661492),
    p = n(280450),
    g = n(113265),
    A = n(758836),
    v = n(375708),
    C = n(255417);
let E = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function I(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            location: s,
            onError: i,
            isCardHovered: u = !0,
            onTrackClick: c,
            ...o
        } = e,
        d = (0, a.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: f,
            isBusy: h,
            isFirstTimeWishlister: v,
            handleToggle: C,
            specificProductOrVariant: E,
            isPurchased: I,
        } = (0, g.z)({ userId: d, product: t, selectedVariantIndex: n, location: s, onError: i }),
        x = r.useCallback(() => {
            c?.(f ? A.sH.REMOVE_FROM_WISHLIST : A.sH.ADD_TO_WISHLIST), C();
        }, [f, C, c]);
    return I
        ? null
        : (0, l.jsx)(y, {
              skuId: E.skuId,
              productName: E.name,
              disabled: !(0, m.q)(E),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: v,
              isVisuallyHidden: !u && !f,
              onClick: x,
              ...o,
          });
}
function y(e) {
    let {
            skuId: t,
            productName: n,
            className: s,
            disabled: a,
            variant: m = "default",
            size: p = "md",
            isWishlisted: g,
            isBusy: A,
            isFirstTimeWishlister: I,
            isVisuallyHidden: y,
            onClick: x,
            shouldShowTooltip: S,
            tooltipConfig: T = {},
        } = e,
        R = E[p],
        { reducedMotion: _ } = r.useContext(u.C),
        b = r.useRef(null),
        [w, N] = r.useState(!1),
        j = g && !w,
        k = j ? c.HeartIcon : o.y,
        L = i()(C.normalIconColor, j && C.wishlistedOrAnimating);
    r.useEffect(() => {
        N(!1);
    }, [t]);
    let D = r.useCallback(
            (e) => {
                e.stopPropagation(), a || (g || _.enabled ? g && w && N(!1) : N(!0), x());
            },
            [a, g, _.enabled, w, x],
        ),
        P = !a && !g && !w,
        O = r.useCallback(
            (e) => {
                e.target === e.currentTarget && w && requestAnimationFrame(() => N(!1));
            },
            [w],
        );
    function M() {
        let e = v.intl.formatToPlainString(v.t["7kFjeK"], { productName: n });
        return (0, l.jsx)(d.D, {
            className: i()(
                C.wishlistButton,
                C[p],
                {
                    [C.variantDefault]: "default" === m,
                    [C.variantSecondary]: "secondary" === m,
                    [C.variantSecondaryOverlay]: "overlay-secondary" === m,
                    [C.disabled]: a,
                    [C.visuallyHidden]: y,
                },
                s,
            ),
            innerRef: b,
            onClick: D,
            "aria-label": e,
            "aria-pressed": g,
            "aria-busy": A,
            "aria-disabled": a,
            children: _.enabled
                ? (0, l.jsx)(k, { colorClass: void 0 ?? L, size: R })
                : (0, l.jsxs)("div", {
                      className: i()(C.iconContainer, P && C.canAnimate),
                      children: [
                          (0, l.jsx)("span", {
                              className: i()(C.iconWrapper, P && C.canHover),
                              children: (0, l.jsx)(k, { colorClass: void 0 ?? L, size: R }),
                          }),
                          (0, l.jsx)("span", {
                              className: i()(C.animationOverlay, w && C.clickAnimation),
                              onAnimationEnd: O,
                              children: (0, l.jsx)(c.HeartIcon, { size: R }),
                          }),
                      ],
                  }),
        });
    }
    if (I && !a) {
        let e = T.firstTimeTitle ?? v.intl.string(v.t["47Rhc3"]),
            t = T.firstTimeBody ?? v.intl.string(v.t.PXjA0b);
        return (0, l.jsx)(f.u, { title: e, body: t, shouldShow: S, children: M() });
    }
    let F = a
        ? (T.disabled ?? v.intl.string(v.t["50TX9k"]))
        : g
          ? (T.remove ?? v.intl.string(v.t.yr9TTf))
          : (T.add ?? v.intl.string(v.t["8DkMEQ"]));
    return (0, l.jsx)(h.m, { text: F, ariaHidden: !a, shouldShow: S, children: M() });
}

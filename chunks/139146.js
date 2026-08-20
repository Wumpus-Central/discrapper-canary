l.d(t, { R: () => S, _: () => x });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    u = l(17928),
    a = l(844222),
    d = l(926268),
    o = l(559758),
    c = l(939249),
    f = l(459192),
    h = l(866665),
    A = l(661492),
    g = l(280450),
    m = l(113265),
    I = l(758836),
    p = l(375708),
    b = l(715838);
let v = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function S(e) {
    let {
            product: t,
            selectedVariantIndex: l,
            location: s,
            onError: r,
            isCardHovered: a = !0,
            onTrackClick: d,
            ...o
        } = e,
        c = (0, u.bG)([g.default], () => g.default.getId()),
        {
            isWishlisted: f,
            isBusy: h,
            isFirstTimeWishlister: p,
            handleToggle: b,
            specificProductOrVariant: v,
            isPurchased: S,
        } = (0, m.z)({ userId: c, product: t, selectedVariantIndex: l, location: s, onError: r }),
        T = i.useCallback(() => {
            d?.(f ? I.sH.REMOVE_FROM_WISHLIST : I.sH.ADD_TO_WISHLIST), b();
        }, [f, b, d]);
    return S
        ? null
        : (0, n.jsx)(x, {
              skuId: v.skuId,
              productName: v.name,
              disabled: !(0, A.q)(v),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: p,
              isVisuallyHidden: !a && !f,
              onClick: T,
              ...o,
          });
}
function x(e) {
    let {
            skuId: t,
            productName: l,
            className: s,
            disabled: u,
            variant: A = "default",
            size: g = "md",
            isWishlisted: m,
            isBusy: I,
            isFirstTimeWishlister: S,
            isVisuallyHidden: x,
            onClick: T,
            shouldShowTooltip: k,
            tooltipConfig: C = {},
        } = e,
        E = v[g],
        { reducedMotion: y } = i.useContext(a.C),
        j = i.useRef(null),
        [_, W] = i.useState(!1),
        R = m && !_,
        H = R ? d.HeartIcon : o.y,
        w = r()(b.normalIconColor, R && b.wishlistedOrAnimating);
    i.useEffect(() => {
        W(!1);
    }, [t]);
    let F = i.useCallback(
            (e) => {
                e.stopPropagation(), u || (m || y.enabled ? m && _ && W(!1) : W(!0), T());
            },
            [u, m, y.enabled, _, T],
        ),
        O = !u && !m && !_,
        M = i.useCallback(
            (e) => {
                e.target === e.currentTarget && _ && requestAnimationFrame(() => W(!1));
            },
            [_],
        );
    function P() {
        let e = p.intl.formatToPlainString(p.t["7kFjeK"], { productName: l });
        return (0, n.jsx)(c.D, {
            className: r()(
                b.wishlistButton,
                b[g],
                {
                    [b.variantDefault]: "default" === A,
                    [b.variantSecondary]: "secondary" === A,
                    [b.variantSecondaryOverlay]: "overlay-secondary" === A,
                    [b.disabled]: u,
                    [b.visuallyHidden]: x,
                },
                s,
            ),
            innerRef: j,
            onClick: F,
            "aria-label": e,
            "aria-pressed": m,
            "aria-busy": I,
            "aria-disabled": u,
            children: y.enabled
                ? (0, n.jsx)(H, { colorClass: void 0 ?? w, size: E })
                : (0, n.jsxs)("div", {
                      className: r()(b.iconContainer, O && b.canAnimate),
                      children: [
                          (0, n.jsx)("span", {
                              className: r()(b.iconWrapper, O && b.canHover),
                              children: (0, n.jsx)(H, { colorClass: void 0 ?? w, size: E }),
                          }),
                          (0, n.jsx)("span", {
                              className: r()(b.animationOverlay, _ && b.clickAnimation),
                              onAnimationEnd: M,
                              children: (0, n.jsx)(d.HeartIcon, { size: E }),
                          }),
                      ],
                  }),
        });
    }
    if (S && !u) {
        let e = C.firstTimeTitle ?? p.intl.string(p.t["47Rhc3"]),
            t = C.firstTimeBody ?? p.intl.string(p.t.PXjA0b);
        return (0, n.jsx)(f.u, { title: e, body: t, shouldShow: k, children: P() });
    }
    let U = u
        ? (C.disabled ?? p.intl.string(p.t["50TX9k"]))
        : m
          ? (C.remove ?? p.intl.string(p.t.yr9TTf))
          : (C.add ?? p.intl.string(p.t["8DkMEQ"]));
    return (0, n.jsx)(h.m, { text: U, ariaHidden: !u, shouldShow: k, children: P() });
}

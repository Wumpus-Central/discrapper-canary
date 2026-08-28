l.d(t, { R: () => x, _: () => S });
var n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    u = l(17928),
    a = l(844222),
    d = l(926268),
    o = l(559758),
    c = l(939249),
    f = l(683063),
    h = l(866665),
    A = l(661492),
    g = l(280450),
    m = l(113265),
    p = l(758836),
    I = l(375708),
    b = l(715838);
let v = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function x(e) {
    let {
            product: t,
            selectedVariantIndex: l,
            location: i,
            onError: r,
            isCardHovered: a = !0,
            onTrackClick: d,
            ...o
        } = e,
        c = (0, u.bG)([g.default], () => g.default.getId()),
        {
            isWishlisted: f,
            isBusy: h,
            isFirstTimeWishlister: I,
            handleToggle: b,
            specificProductOrVariant: v,
            isPurchased: x,
        } = (0, m.z)({ userId: c, product: t, selectedVariantIndex: l, location: i, onError: r }),
        k = s.useCallback(() => {
            d?.(f ? p.sH.REMOVE_FROM_WISHLIST : p.sH.ADD_TO_WISHLIST), b();
        }, [f, b, d]);
    return x
        ? null
        : (0, n.jsx)(S, {
              skuId: v.skuId,
              productName: v.name,
              disabled: !(0, A.q)(v),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: I,
              isVisuallyHidden: !a && !f,
              onClick: k,
              ...o,
          });
}
function S(e) {
    let {
            skuId: t,
            productName: l,
            className: i,
            disabled: u,
            variant: A = "default",
            size: g = "md",
            isWishlisted: m,
            isBusy: p,
            isFirstTimeWishlister: x,
            isVisuallyHidden: S,
            onClick: k,
            shouldShowTooltip: y,
            tooltipConfig: j = {},
        } = e,
        E = v[g],
        { reducedMotion: T } = s.useContext(a.C),
        C = s.useRef(null),
        [W, _] = s.useState(!1),
        F = m && !W,
        w = F ? d.HeartIcon : o.y,
        H = r()(b.normalIconColor, F && b.wishlistedOrAnimating);
    s.useEffect(() => {
        _(!1);
    }, [t]);
    let R = s.useCallback(
            (e) => {
                e.stopPropagation(), u || (m || T.enabled ? m && W && _(!1) : _(!0), k());
            },
            [u, m, T.enabled, W, k],
        ),
        O = !u && !m && !W,
        P = s.useCallback(
            (e) => {
                e.target === e.currentTarget && W && requestAnimationFrame(() => _(!1));
            },
            [W],
        );
    function U() {
        let e = I.intl.formatToPlainString(I.t["7kFjeK"], { productName: l });
        return (0, n.jsx)(c.D, {
            className: r()(
                b.wishlistButton,
                b[g],
                {
                    [b.variantDefault]: "default" === A,
                    [b.variantSecondary]: "secondary" === A,
                    [b.variantSecondaryOverlay]: "overlay-secondary" === A,
                    [b.disabled]: u,
                    [b.visuallyHidden]: S,
                },
                i,
            ),
            innerRef: C,
            onClick: R,
            "aria-label": e,
            "aria-pressed": m,
            "aria-busy": p,
            "aria-disabled": u,
            children: T.enabled
                ? (0, n.jsx)(w, { colorClass: void 0 ?? H, size: E })
                : (0, n.jsxs)("div", {
                      className: r()(b.iconContainer, O && b.canAnimate),
                      children: [
                          (0, n.jsx)("span", {
                              className: r()(b.iconWrapper, O && b.canHover),
                              children: (0, n.jsx)(w, { colorClass: void 0 ?? H, size: E }),
                          }),
                          (0, n.jsx)("span", {
                              className: r()(b.animationOverlay, W && b.clickAnimation),
                              onAnimationEnd: P,
                              children: (0, n.jsx)(d.HeartIcon, { size: E }),
                          }),
                      ],
                  }),
        });
    }
    if (x && !u) {
        let e = j.firstTimeTitle ?? I.intl.string(I.t["47Rhc3"]),
            t = j.firstTimeBody ?? I.intl.string(I.t.PXjA0b);
        return (0, n.jsx)(f.u, { title: e, body: t, shouldShow: y, children: U() });
    }
    let L = u
        ? (j.disabled ?? I.intl.string(I.t["50TX9k"]))
        : m
          ? (j.remove ?? I.intl.string(I.t.yr9TTf))
          : (j.add ?? I.intl.string(I.t["8DkMEQ"]));
    return (0, n.jsx)(h.m, { text: L, ariaHidden: !u, shouldShow: y, children: U() });
}

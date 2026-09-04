i.d(s, { R: () => C, _: () => y });
var t = i(477900),
    n = i(582128),
    a = i(503698),
    r = i.n(a),
    l = i(17928),
    o = i(844222),
    d = i(926268),
    c = i(559758),
    u = i(939249),
    m = i(683063),
    h = i(866665),
    x = i(661492),
    f = i(280450),
    b = i(536572),
    k = i(113265),
    j = i(758836),
    T = i(375708),
    p = i(715838);
let v = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function C(e) {
    let {
            product: s,
            selectedVariantIndex: i,
            location: a,
            onError: r,
            isCardHovered: o = !0,
            onTrackClick: d,
            ...c
        } = e,
        u = (0, l.bG)([f.default], () => f.default.getId()),
        {
            isWishlisted: m,
            isBusy: h,
            isFirstTimeWishlister: T,
            handleToggle: p,
            specificProductOrVariant: v,
            isPurchased: C,
        } = (0, k.z)({ userId: u, product: s, selectedVariantIndex: i, location: a, onError: r }),
        g = (0, b.s7)(v),
        I = n.useCallback(() => {
            d?.(m ? j.sH.REMOVE_FROM_WISHLIST : j.sH.ADD_TO_WISHLIST), p();
        }, [m, p, d]);
    return C
        ? null
        : (0, t.jsx)(y, {
              skuId: v.skuId,
              productName: g,
              disabled: !(0, x.q)(v),
              isWishlisted: m,
              isBusy: h,
              isFirstTimeWishlister: T,
              isVisuallyHidden: !o && !m,
              onClick: I,
              ...c,
          });
}
function y(e) {
    let {
            skuId: s,
            productName: i,
            className: a,
            disabled: l,
            variant: x = "default",
            size: f = "md",
            isWishlisted: b,
            isBusy: k,
            isFirstTimeWishlister: j,
            isVisuallyHidden: C,
            onClick: y,
            shouldShowTooltip: g,
            tooltipConfig: I = {},
        } = e,
        S = v[f],
        { reducedMotion: H } = n.useContext(o.C),
        A = n.useRef(null),
        [_, O] = n.useState(!1),
        E = b && !_,
        N = E ? d.HeartIcon : c.y,
        R = r()(p.normalIconColor, E && p.wishlistedOrAnimating);
    n.useEffect(() => {
        O(!1);
    }, [s]);
    let w = n.useCallback(
            (e) => {
                e.stopPropagation(), l || (b || H.enabled ? b && _ && O(!1) : O(!0), y());
            },
            [l, b, H.enabled, _, y],
        ),
        D = !l && !b && !_,
        z = n.useCallback(
            (e) => {
                e.target === e.currentTarget && _ && requestAnimationFrame(() => O(!1));
            },
            [_],
        );
    function P() {
        let e = T.intl.formatToPlainString(T.t["7kFjeK"], { productName: i });
        return (0, t.jsx)(u.D, {
            className: r()(
                p.wishlistButton,
                p[f],
                {
                    [p.variantDefault]: "default" === x,
                    [p.variantSecondary]: "secondary" === x,
                    [p.variantSecondaryOverlay]: "overlay-secondary" === x,
                    [p.disabled]: l,
                    [p.visuallyHidden]: C,
                },
                a,
            ),
            innerRef: A,
            onClick: w,
            "aria-label": e,
            "aria-pressed": b,
            "aria-busy": k,
            "aria-disabled": l,
            children: H.enabled
                ? (0, t.jsx)(N, { colorClass: void 0 ?? R, size: S })
                : (0, t.jsxs)("div", {
                      className: r()(p.iconContainer, D && p.canAnimate),
                      children: [
                          (0, t.jsx)("span", {
                              className: r()(p.iconWrapper, D && p.canHover),
                              children: (0, t.jsx)(N, { colorClass: void 0 ?? R, size: S }),
                          }),
                          (0, t.jsx)("span", {
                              className: r()(p.animationOverlay, _ && p.clickAnimation),
                              onAnimationEnd: z,
                              children: (0, t.jsx)(d.HeartIcon, { size: S }),
                          }),
                      ],
                  }),
        });
    }
    if (j && !l) {
        let e = I.firstTimeTitle ?? T.intl.string(T.t["47Rhc3"]),
            s = I.firstTimeBody ?? T.intl.string(T.t.PXjA0b);
        return (0, t.jsx)(m.u, { title: e, body: s, shouldShow: g, children: P() });
    }
    let W = l
        ? (I.disabled ?? T.intl.string(T.t["50TX9k"]))
        : b
          ? (I.remove ?? T.intl.string(T.t.yr9TTf))
          : (I.add ?? T.intl.string(T.t["8DkMEQ"]));
    return (0, t.jsx)(h.m, { text: W, ariaHidden: !l, shouldShow: g, children: P() });
}

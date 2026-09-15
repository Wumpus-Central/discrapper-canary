r.d(e, { R: () => T, _: () => R });
var i = r(477900),
    n = r(582128),
    s = r(503698),
    l = r.n(s),
    a = r(17928),
    u = r(844222),
    o = r(926268),
    d = r(559758),
    c = r(939249),
    S = r(683063),
    I = r(866665),
    h = r(661492),
    p = r(280450),
    _ = r(536572),
    f = r(113265),
    A = r(758836),
    E = r(375708),
    m = r(715838);
let y = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function T(t) {
    let {
            product: e,
            selectedVariantIndex: r,
            location: s,
            onError: l,
            isCardHovered: u = !0,
            onTrackClick: o,
            ...d
        } = t,
        c = (0, a.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: S,
            isBusy: I,
            isFirstTimeWishlister: E,
            handleToggle: m,
            specificProductOrVariant: y,
            isPurchased: T,
        } = (0, f.z)({ userId: c, product: e, selectedVariantIndex: r, location: s, onError: l }),
        L = (0, _.s7)(y),
        g = n.useCallback(() => {
            (o?.(S ? A.sH.REMOVE_FROM_WISHLIST : A.sH.ADD_TO_WISHLIST), m());
        }, [S, m, o]);
    return T
        ? null
        : (0, i.jsx)(R, {
              skuId: y.skuId,
              productName: L,
              disabled: !(0, h.q)(y),
              isWishlisted: S,
              isBusy: I,
              isFirstTimeWishlister: E,
              isVisuallyHidden: !u && !S,
              onClick: g,
              ...d,
          });
}
function R(t) {
    let {
            skuId: e,
            productName: r,
            className: s,
            disabled: a,
            variant: h = "default",
            size: p = "md",
            isWishlisted: _,
            isBusy: f,
            isFirstTimeWishlister: A,
            isVisuallyHidden: T,
            onClick: R,
            shouldShowTooltip: L,
            tooltipConfig: g = {},
            tabIndex: k = 0,
        } = t,
        v = y[p],
        { reducedMotion: C } = n.useContext(u.C),
        w = n.useRef(null),
        [U, F] = n.useState(!1),
        O = _ && !U,
        b = O ? o.HeartIcon : d.y,
        W = l()(m.normalIconColor, O && m.wishlistedOrAnimating);
    n.useEffect(() => {
        F(!1);
    }, [e]);
    let H = n.useCallback(
            (t) => {
                (t.stopPropagation(), a || (_ || C.enabled ? _ && U && F(!1) : F(!0), R()));
            },
            [a, _, C.enabled, U, R],
        ),
        P = !a && !_ && !U,
        D = n.useCallback(
            (t) => {
                t.target === t.currentTarget && U && requestAnimationFrame(() => F(!1));
            },
            [U],
        );
    function M() {
        let t = E.intl.formatToPlainString(E.t["7kFjeK"], { productName: r });
        return (0, i.jsx)(c.D, {
            className: l()(
                m.wishlistButton,
                m[p],
                {
                    [m.variantDefault]: "default" === h,
                    [m.variantSecondary]: "secondary" === h,
                    [m.variantSecondaryOverlay]: "overlay-secondary" === h,
                    [m.disabled]: a,
                    [m.visuallyHidden]: T,
                },
                s,
            ),
            innerRef: w,
            onClick: H,
            tabIndex: k,
            "aria-label": t,
            "aria-pressed": _,
            "aria-busy": f,
            "aria-disabled": a,
            children: C.enabled
                ? (0, i.jsx)(b, { colorClass: void 0 ?? W, size: v })
                : (0, i.jsxs)("div", {
                      className: l()(m.iconContainer, P && m.canAnimate),
                      children: [
                          (0, i.jsx)("span", {
                              className: l()(m.iconWrapper, P && m.canHover),
                              children: (0, i.jsx)(b, { colorClass: void 0 ?? W, size: v }),
                          }),
                          (0, i.jsx)("span", {
                              className: l()(m.animationOverlay, U && m.clickAnimation),
                              onAnimationEnd: D,
                              children: (0, i.jsx)(o.HeartIcon, { size: v }),
                          }),
                      ],
                  }),
        });
    }
    if (A && !a) {
        let t = g.firstTimeTitle ?? E.intl.string(E.t["47Rhc3"]),
            e = g.firstTimeBody ?? E.intl.string(E.t.PXjA0b);
        return (0, i.jsx)(S.u, { title: t, body: e, shouldShow: L, children: M() });
    }
    let x = a
        ? (g.disabled ?? E.intl.string(E.t["50TX9k"]))
        : _
          ? (g.remove ?? E.intl.string(E.t.yr9TTf))
          : (g.add ?? E.intl.string(E.t["8DkMEQ"]));
    return (0, i.jsx)(I.m, { text: x, ariaHidden: !a, shouldShow: L, children: M() });
}

r.d(e, { R: () => g, _: () => k });
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
    p = r(609093),
    _ = r(280450),
    f = r(536572),
    A = r(113265),
    E = r(758836),
    m = r(375708),
    y = r(715838),
    T = r(891044);
let R = !1,
    L = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function g(t) {
    let {
            product: e,
            selectedVariantIndex: r,
            location: s,
            onError: l,
            isCardHovered: u = !0,
            onTrackClick: o,
            ...d
        } = t,
        c = (0, a.bG)([_.default], () => _.default.getId()),
        {
            isWishlisted: S,
            isBusy: I,
            isFirstTimeWishlister: p,
            handleToggle: m,
            specificProductOrVariant: y,
            isPurchased: T,
        } = (0, A.z)({ userId: c, product: e, selectedVariantIndex: r, location: s, onError: l }),
        R = (0, f.s7)(y),
        L = n.useCallback(() => {
            (o?.(S ? E.sH.REMOVE_FROM_WISHLIST : E.sH.ADD_TO_WISHLIST), m());
        }, [S, m, o]);
    return T
        ? null
        : (0, i.jsx)(k, {
              skuId: y.skuId,
              productName: R,
              disabled: !(0, h.q)(y),
              isWishlisted: S,
              isBusy: I,
              isFirstTimeWishlister: p,
              isVisuallyHidden: !u && !S,
              onClick: L,
              ...d,
          });
}
function k(t) {
    let {
            skuId: e,
            productName: r,
            className: s,
            disabled: a,
            variant: h = "default",
            size: _ = "md",
            isWishlisted: f,
            isBusy: A,
            isFirstTimeWishlister: E,
            isVisuallyHidden: g,
            onClick: k,
            shouldShowTooltip: v,
            tooltipConfig: w = {},
            tabIndex: C = 0,
        } = t,
        b = L[_],
        { reducedMotion: O } = n.useContext(u.C),
        U = (0, p.J)("WishlistButton"),
        F = n.useRef(null),
        [W, H] = n.useState(!1),
        P = U ? f || W : f && !W,
        D = P ? o.HeartIcon : d.y,
        M = l()(y.normalIconColor, P && y.wishlistedOrAnimating);
    (n.useEffect(() => {
        U && !O.enabled && (R || ((R = !0), (new Image().src = T.A)));
    }, [U, O.enabled]),
        n.useEffect(() => {
            H(!1);
        }, [e]),
        n.useEffect(() => {
            W && O.enabled && H(!1);
        }, [W, O.enabled]),
        n.useEffect(() => {
            if (!U || !W || O.enabled) return;
            let t = window.setTimeout(() => {
                H(!1);
            }, 2042);
            return () => window.clearTimeout(t);
        }, [W, U, O.enabled]));
    let x = n.useCallback(
            (t) => {
                (t.stopPropagation(), a || (f || O.enabled ? f && W && H(!1) : H(!0), k()));
            },
            [a, f, O.enabled, W, k],
        ),
        N = !a && !f && !W,
        G = n.useCallback(
            (t) => {
                t.target === t.currentTarget && W && requestAnimationFrame(() => H(!1));
            },
            [W],
        );
    function j() {
        let t = m.intl.formatToPlainString(m.t["7kFjeK"], { productName: r });
        return (0, i.jsx)(c.D, {
            className: l()(
                y.wishlistButton,
                y[_],
                {
                    [y.variantDefault]: "default" === h,
                    [y.variantSecondary]: "secondary" === h,
                    [y.variantSecondaryOverlay]: "overlay-secondary" === h,
                    [y.disabled]: a,
                    [y.visuallyHidden]: g,
                },
                s,
            ),
            innerRef: F,
            onClick: x,
            tabIndex: C,
            "aria-label": t,
            "aria-pressed": f,
            "aria-busy": A,
            "aria-disabled": a,
            children: O.enabled
                ? (0, i.jsx)(D, { colorClass: void 0 ?? M, size: b })
                : (0, i.jsxs)("div", {
                      className: l()(y.iconContainer, N && y.canAnimate),
                      children: [
                          (0, i.jsx)("span", {
                              className: l()(y.iconWrapper, N && y.canHover),
                              children: (0, i.jsx)(D, { colorClass: void 0 ?? M, size: b }),
                          }),
                          U
                              ? W
                                  ? (0, i.jsx)("img", {
                                        className: y.halloweenAnimationOverlay,
                                        src: T.A,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, i.jsx)("span", {
                                    className: l()(y.animationOverlay, W && y.clickAnimation),
                                    onAnimationEnd: G,
                                    children: (0, i.jsx)(o.HeartIcon, { size: b }),
                                }),
                      ],
                  }),
        });
    }
    if (E && !a) {
        let t = w.firstTimeTitle ?? m.intl.string(m.t["47Rhc3"]),
            e = w.firstTimeBody ?? m.intl.string(m.t.PXjA0b);
        return (0, i.jsx)(S.u, { title: t, body: e, shouldShow: v, children: j() });
    }
    let B = a
        ? (w.disabled ?? m.intl.string(m.t["50TX9k"]))
        : f
          ? (w.remove ?? m.intl.string(m.t.yr9TTf))
          : (w.add ?? m.intl.string(m.t["8DkMEQ"]));
    return (0, i.jsx)(I.m, { text: B, ariaHidden: !a, shouldShow: v, children: j() });
}

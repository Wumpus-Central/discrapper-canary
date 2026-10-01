n.d(t, { R: () => w, _: () => O });
var a = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    r = n(17928),
    d = n(844222),
    c = n(926268),
    u = n(559758),
    o = n(939249),
    h = n(683063),
    f = n(866665),
    m = n(661492),
    p = n(609093),
    A = n(280450),
    g = n(536572),
    y = n(113265),
    I = n(758836),
    T = n(375708),
    v = n(715838),
    b = n(891044);
let R = !1,
    E = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function w(e) {
    let {
            product: t,
            selectedVariantIndex: n,
            location: l,
            onError: s,
            isCardHovered: d = !0,
            onTrackClick: c,
            ...u
        } = e,
        o = (0, r.bG)([A.default], () => A.default.getId()),
        {
            isWishlisted: h,
            isBusy: f,
            isFirstTimeWishlister: p,
            handleToggle: T,
            specificProductOrVariant: v,
            isPurchased: b,
        } = (0, y.z)({ userId: o, product: t, selectedVariantIndex: n, location: l, onError: s }),
        R = (0, g.s7)(v),
        E = i.useCallback(() => {
            (c?.(h ? I.sH.REMOVE_FROM_WISHLIST : I.sH.ADD_TO_WISHLIST), T());
        }, [h, T, c]);
    return b
        ? null
        : (0, a.jsx)(O, {
              skuId: v.skuId,
              productName: R,
              disabled: !(0, m.q)(v),
              isWishlisted: h,
              isBusy: f,
              isFirstTimeWishlister: p,
              isVisuallyHidden: !d && !h,
              onClick: E,
              ...u,
          });
}
function O(e) {
    let {
            skuId: t,
            productName: n,
            className: l,
            disabled: r,
            variant: m = "default",
            size: A = "md",
            isWishlisted: g,
            isBusy: y,
            isFirstTimeWishlister: I,
            isVisuallyHidden: w,
            onClick: O,
            shouldShowTooltip: P,
            tooltipConfig: S = {},
            tabIndex: k = 0,
        } = e,
        x = E[A],
        { reducedMotion: C } = i.useContext(d.C),
        _ = (0, p.J)("WishlistButton"),
        N = i.useRef(null),
        [L, j] = i.useState(!1),
        F = _ ? g || L : g && !L,
        D = F ? c.HeartIcon : u.y,
        M = s()(v.normalIconColor, F && v.wishlistedOrAnimating);
    (i.useEffect(() => {
        _ && !C.enabled && (R || ((R = !0), (new Image().src = b.A)));
    }, [_, C.enabled]),
        i.useEffect(() => {
            j(!1);
        }, [t]),
        i.useEffect(() => {
            L && C.enabled && j(!1);
        }, [L, C.enabled]),
        i.useEffect(() => {
            if (!_ || !L || C.enabled) return;
            let e = window.setTimeout(() => {
                j(!1);
            }, 2042);
            return () => window.clearTimeout(e);
        }, [L, _, C.enabled]));
    let W = i.useCallback(
            (e) => {
                (e.stopPropagation(), r || (g || C.enabled ? g && L && j(!1) : j(!0), O()));
            },
            [r, g, C.enabled, L, O],
        ),
        B = !r && !g && !L,
        G = i.useCallback(
            (e) => {
                e.target === e.currentTarget && L && requestAnimationFrame(() => j(!1));
            },
            [L],
        );
    function H() {
        let e = T.intl.formatToPlainString(T.t["7kFjeK"], { productName: n });
        return (0, a.jsx)(o.D, {
            className: s()(
                v.wishlistButton,
                v[A],
                {
                    [v.variantDefault]: "default" === m,
                    [v.variantSecondary]: "secondary" === m,
                    [v.variantSecondaryOverlay]: "overlay-secondary" === m,
                    [v.disabled]: r,
                    [v.visuallyHidden]: w,
                },
                l,
            ),
            innerRef: N,
            onClick: W,
            tabIndex: k,
            "aria-label": e,
            "aria-pressed": g,
            "aria-busy": y,
            "aria-disabled": r,
            children: C.enabled
                ? (0, a.jsx)(D, { colorClass: void 0 ?? M, size: x })
                : (0, a.jsxs)("div", {
                      className: s()(v.iconContainer, B && v.canAnimate),
                      children: [
                          (0, a.jsx)("span", {
                              className: s()(v.iconWrapper, B && v.canHover),
                              children: (0, a.jsx)(D, { colorClass: void 0 ?? M, size: x }),
                          }),
                          _
                              ? L
                                  ? (0, a.jsx)("img", {
                                        className: v.halloweenAnimationOverlay,
                                        src: b.A,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, a.jsx)("span", {
                                    className: s()(v.animationOverlay, L && v.clickAnimation),
                                    onAnimationEnd: G,
                                    children: (0, a.jsx)(c.HeartIcon, { size: x }),
                                }),
                      ],
                  }),
        });
    }
    if (I && !r) {
        let e = S.firstTimeTitle ?? T.intl.string(T.t["47Rhc3"]),
            t = S.firstTimeBody ?? T.intl.string(T.t.PXjA0b);
        return (0, a.jsx)(h.u, { title: e, body: t, shouldShow: P, children: H() });
    }
    let U = r
        ? (S.disabled ?? T.intl.string(T.t["50TX9k"]))
        : g
          ? (S.remove ?? T.intl.string(T.t.yr9TTf))
          : (S.add ?? T.intl.string(T.t["8DkMEQ"]));
    return (0, a.jsx)(f.m, { text: U, ariaHidden: !r, shouldShow: P, children: H() });
}

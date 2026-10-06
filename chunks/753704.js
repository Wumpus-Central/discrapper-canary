t.d(n, { R: () => y, _: () => I });
var s = t(477900),
    a = t(582128),
    i = t(503698),
    r = t.n(i),
    l = t(17928),
    d = t(844222),
    o = t(926268),
    c = t(559758),
    u = t(939249),
    m = t(683063),
    f = t(866665),
    b = t(661492);
let h = (0, t(945810).mj)({
    name: "2026-09-halloween-wishlisting-animation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var x = t(280450),
    g = t(536572),
    v = t(113265),
    T = t(758836),
    j = t(375708),
    p = t(715838);
let k =
        "https://cdn.discordapp.com/assets/content/7f66bcf14a6000b54874d74ee5a72fbbaec3d5944edfd7d6e9b3d597d3dbbaf2.png",
    C = !1,
    w = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function y(e) {
    let {
            product: n,
            selectedVariantIndex: t,
            location: i,
            onError: r,
            isCardHovered: d = !0,
            onTrackClick: o,
            ...c
        } = e,
        u = (0, l.bG)([x.default], () => x.default.getId()),
        {
            isWishlisted: m,
            isBusy: f,
            isFirstTimeWishlister: h,
            handleToggle: j,
            specificProductOrVariant: p,
            isPurchased: k,
        } = (0, v.z)({ userId: u, product: n, selectedVariantIndex: t, location: i, onError: r }),
        C = (0, g.s7)(p),
        w = a.useCallback(() => {
            (o?.(m ? T.sH.REMOVE_FROM_WISHLIST : T.sH.ADD_TO_WISHLIST), j());
        }, [m, j, o]);
    return k
        ? null
        : (0, s.jsx)(I, {
              skuId: p.skuId,
              productName: C,
              disabled: !(0, b.q)(p),
              isWishlisted: m,
              isBusy: f,
              isFirstTimeWishlister: h,
              isVisuallyHidden: !d && !m,
              onClick: w,
              ...c,
          });
}
function I(e) {
    let {
            skuId: n,
            productName: t,
            className: i,
            disabled: l,
            variant: b = "default",
            size: x = "md",
            isWishlisted: g,
            isBusy: v,
            isFirstTimeWishlister: T,
            isVisuallyHidden: y,
            onClick: I,
            shouldShowTooltip: S,
            tooltipConfig: E = {},
            tabIndex: A = 0,
        } = e,
        H = w[x],
        { reducedMotion: N } = a.useContext(d.C),
        O = h.useConfig({ location: "WishlistButton" }).enabled,
        _ = a.useRef(null),
        [R, W] = a.useState(!1),
        D = O ? g || R : g && !R,
        P = D ? o.HeartIcon : c.y,
        z = r()(p.normalIconColor, D && p.wishlistedOrAnimating);
    (a.useEffect(() => {
        O && !N.enabled && (C || ((C = !0), (new Image().src = k)));
    }, [O, N.enabled]),
        a.useEffect(() => {
            W(!1);
        }, [n]),
        a.useEffect(() => {
            R && N.enabled && W(!1);
        }, [R, N.enabled]),
        a.useEffect(() => {
            if (!O || !R || N.enabled) return;
            let e = window.setTimeout(() => {
                W(!1);
            }, 2042);
            return () => window.clearTimeout(e);
        }, [R, O, N.enabled]));
    let L = a.useCallback(
            (e) => {
                (e.stopPropagation(), l || (g || N.enabled ? g && R && W(!1) : W(!0), I()));
            },
            [l, g, N.enabled, R, I],
        ),
        B = !l && !g && !R,
        F = a.useCallback(
            (e) => {
                e.target === e.currentTarget && R && requestAnimationFrame(() => W(!1));
            },
            [R],
        );
    function M() {
        let e = j.intl.formatToPlainString(j.t["7kFjeK"], { productName: t });
        return (0, s.jsx)(u.D, {
            className: r()(
                p.wishlistButton,
                p[x],
                {
                    [p.variantDefault]: "default" === b,
                    [p.variantSecondary]: "secondary" === b,
                    [p.variantSecondaryOverlay]: "overlay-secondary" === b,
                    [p.disabled]: l,
                    [p.visuallyHidden]: y,
                },
                i,
            ),
            innerRef: _,
            onClick: L,
            tabIndex: A,
            "aria-label": e,
            "aria-pressed": g,
            "aria-busy": v,
            "aria-disabled": l,
            children: N.enabled
                ? (0, s.jsx)(P, { colorClass: void 0 ?? z, size: H })
                : (0, s.jsxs)("div", {
                      className: r()(p.iconContainer, B && p.canAnimate),
                      children: [
                          (0, s.jsx)("span", {
                              className: r()(p.iconWrapper, B && p.canHover),
                              children: (0, s.jsx)(P, { colorClass: void 0 ?? z, size: H }),
                          }),
                          O
                              ? R
                                  ? (0, s.jsx)("img", {
                                        className: p.halloweenAnimationOverlay,
                                        src: k,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, s.jsx)("span", {
                                    className: r()(p.animationOverlay, R && p.clickAnimation),
                                    onAnimationEnd: F,
                                    children: (0, s.jsx)(o.HeartIcon, { size: H }),
                                }),
                      ],
                  }),
        });
    }
    if (T && !l) {
        let e = E.firstTimeTitle ?? j.intl.string(j.t["47Rhc3"]),
            n = E.firstTimeBody ?? j.intl.string(j.t.PXjA0b);
        return (0, s.jsx)(m.u, { title: e, body: n, shouldShow: S, children: M() });
    }
    let V = l
        ? (E.disabled ?? j.intl.string(j.t["50TX9k"]))
        : g
          ? (E.remove ?? j.intl.string(j.t.yr9TTf))
          : (E.add ?? j.intl.string(j.t["8DkMEQ"]));
    return (0, s.jsx)(f.m, { text: V, ariaHidden: !l, shouldShow: S, children: M() });
}

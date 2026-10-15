l.d(t, { R: () => y, _: () => S });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    a = l(17928),
    u = l(844222),
    d = l(926268),
    o = l(559758),
    c = l(939249),
    f = l(683063),
    h = l(866665),
    g = l(661492);
let b = (0, l(945810).mj)({
    name: "2026-09-halloween-wishlisting-animation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var m = l(280450),
    A = l(536572),
    p = l(113265),
    v = l(758836),
    T = l(105292),
    I = l(715838);
let E =
        "https://cdn.discordapp.com/assets/content/7f66bcf14a6000b54874d74ee5a72fbbaec3d5944edfd7d6e9b3d597d3dbbaf2.png",
    k = !1,
    x = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function y(e) {
    let {
            product: t,
            selectedVariantIndex: l,
            location: s,
            onError: r,
            isCardHovered: u = !0,
            onTrackClick: d,
            ...o
        } = e,
        c = (0, a.bG)([m.default], () => m.default.getId()),
        {
            isWishlisted: f,
            isBusy: h,
            isFirstTimeWishlister: b,
            handleToggle: T,
            specificProductOrVariant: I,
            isPurchased: E,
        } = (0, p.z)({ userId: c, product: t, selectedVariantIndex: l, location: s, onError: r }),
        k = (0, A.s7)(I),
        x = i.useCallback(() => {
            (d?.(f ? v.sH.REMOVE_FROM_WISHLIST : v.sH.ADD_TO_WISHLIST), T());
        }, [f, T, d]);
    return E
        ? null
        : (0, n.jsx)(S, {
              skuId: I.skuId,
              productName: k,
              disabled: !(0, g.q)(I),
              isWishlisted: f,
              isBusy: h,
              isFirstTimeWishlister: b,
              isVisuallyHidden: !u && !f,
              onClick: x,
              ...o,
          });
}
function S(e) {
    let {
            skuId: t,
            productName: l,
            className: s,
            disabled: a,
            variant: g = "default",
            size: m = "md",
            isWishlisted: A,
            isBusy: p,
            isFirstTimeWishlister: v,
            isVisuallyHidden: y,
            onClick: S,
            shouldShowTooltip: C,
            tooltipConfig: w = {},
            tabIndex: R = 0,
        } = e,
        j = x[m],
        { reducedMotion: W } = i.useContext(u.C),
        _ = b.useConfig({ location: "WishlistButton" }).enabled,
        F = i.useRef(null),
        [P, H] = i.useState(!1),
        O = _ ? A || P : A && !P,
        U = O ? d.HeartIcon : o.y,
        G = r()(I.normalIconColor, O && I.wishlistedOrAnimating);
    (i.useEffect(() => {
        _ && !W.enabled && (k || ((k = !0), (new Image().src = E)));
    }, [_, W.enabled]),
        i.useEffect(() => {
            H(!1);
        }, [t]),
        i.useEffect(() => {
            P && W.enabled && H(!1);
        }, [P, W.enabled]),
        i.useEffect(() => {
            if (!_ || !P || W.enabled) return;
            let e = window.setTimeout(() => {
                H(!1);
            }, 2042);
            return () => window.clearTimeout(e);
        }, [P, _, W.enabled]));
    let L = i.useCallback(
            (e) => {
                (e.stopPropagation(), a || (A || W.enabled ? A && P && H(!1) : H(!0), S()));
            },
            [a, A, W.enabled, P, S],
        ),
        B = !a && !A && !P,
        D = i.useCallback(
            (e) => {
                e.target === e.currentTarget && P && requestAnimationFrame(() => H(!1));
            },
            [P],
        );
    function M() {
        let e = T.intl.formatToPlainString(T.t["7kFjeK"], { productName: l });
        return (0, n.jsx)(c.D, {
            className: r()(
                I.wishlistButton,
                I[m],
                {
                    [I.variantDefault]: "default" === g,
                    [I.variantSecondary]: "secondary" === g,
                    [I.variantSecondaryOverlay]: "overlay-secondary" === g,
                    [I.disabled]: a,
                    [I.visuallyHidden]: y,
                },
                s,
            ),
            innerRef: F,
            onClick: L,
            tabIndex: R,
            "aria-label": e,
            "aria-pressed": A,
            "aria-busy": p,
            "aria-disabled": a,
            children: W.enabled
                ? (0, n.jsx)(U, { colorClass: void 0 ?? G, size: j })
                : (0, n.jsxs)("div", {
                      className: r()(I.iconContainer, B && I.canAnimate),
                      children: [
                          (0, n.jsx)("span", {
                              className: r()(I.iconWrapper, B && I.canHover),
                              children: (0, n.jsx)(U, { colorClass: void 0 ?? G, size: j }),
                          }),
                          _
                              ? P
                                  ? (0, n.jsx)("img", {
                                        className: I.halloweenAnimationOverlay,
                                        src: E,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, n.jsx)("span", {
                                    className: r()(I.animationOverlay, P && I.clickAnimation),
                                    onAnimationEnd: D,
                                    children: (0, n.jsx)(d.HeartIcon, { size: j }),
                                }),
                      ],
                  }),
        });
    }
    if (v && !a) {
        let e = w.firstTimeTitle ?? T.intl.string(T.t["47Rhc3"]),
            t = w.firstTimeBody ?? T.intl.string(T.t.PXjA0b);
        return (0, n.jsx)(f.u, { title: e, body: t, shouldShow: C, children: M() });
    }
    let N = a
        ? (w.disabled ?? T.intl.string(T.t["50TX9k"]))
        : A
          ? (w.remove ?? T.intl.string(T.t.yr9TTf))
          : (w.add ?? T.intl.string(T.t["8DkMEQ"]));
    return (0, n.jsx)(h.m, { text: N, ariaHidden: !a, shouldShow: C, children: M() });
}

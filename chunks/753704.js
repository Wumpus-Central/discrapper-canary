t.d(n, { R: () => T, _: () => I });
var a = t(477900),
    i = t(582128),
    s = t(503698),
    l = t.n(s),
    r = t(17928),
    d = t(844222),
    o = t(926268),
    c = t(559758),
    u = t(939249),
    f = t(683063),
    m = t(866665),
    b = t(661492);
let h = (0, t(945810).mj)({
    name: "2026-09-halloween-wishlisting-animation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var g = t(280450),
    v = t(536572),
    p = t(113265),
    x = t(758836),
    k = t(105292),
    w = t(715838);
let y =
        "https://cdn.discordapp.com/assets/content/7f66bcf14a6000b54874d74ee5a72fbbaec3d5944edfd7d6e9b3d597d3dbbaf2.png",
    j = !1,
    C = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function T(e) {
    let {
            product: n,
            selectedVariantIndex: t,
            location: s,
            onError: l,
            isCardHovered: d = !0,
            onTrackClick: o,
            ...c
        } = e,
        u = (0, r.bG)([g.default], () => g.default.getId()),
        {
            isWishlisted: f,
            isBusy: m,
            isFirstTimeWishlister: h,
            handleToggle: k,
            specificProductOrVariant: w,
            isPurchased: y,
        } = (0, p.z)({ userId: u, product: n, selectedVariantIndex: t, location: s, onError: l }),
        j = (0, v.s7)(w),
        C = i.useCallback(() => {
            (o?.(f ? x.sH.REMOVE_FROM_WISHLIST : x.sH.ADD_TO_WISHLIST), k());
        }, [f, k, o]);
    return y
        ? null
        : (0, a.jsx)(I, {
              skuId: w.skuId,
              productName: j,
              disabled: !(0, b.q)(w),
              isWishlisted: f,
              isBusy: m,
              isFirstTimeWishlister: h,
              isVisuallyHidden: !d && !f,
              onClick: C,
              ...c,
          });
}
function I(e) {
    let {
            skuId: n,
            productName: t,
            className: s,
            disabled: r,
            variant: b = "default",
            size: g = "md",
            isWishlisted: v,
            isBusy: p,
            isFirstTimeWishlister: x,
            isVisuallyHidden: T,
            onClick: I,
            shouldShowTooltip: E,
            tooltipConfig: H = {},
            tabIndex: S = 0,
        } = e,
        A = C[g],
        { reducedMotion: _ } = i.useContext(d.C),
        O = h.useConfig({ location: "WishlistButton" }).enabled,
        R = i.useRef(null),
        [D, N] = i.useState(!1),
        W = O ? v || D : v && !D,
        z = W ? o.HeartIcon : c.y,
        B = l()(w.normalIconColor, W && w.wishlistedOrAnimating);
    (i.useEffect(() => {
        O && !_.enabled && (j || ((j = !0), (new Image().src = y)));
    }, [O, _.enabled]),
        i.useEffect(() => {
            N(!1);
        }, [n]),
        i.useEffect(() => {
            D && _.enabled && N(!1);
        }, [D, _.enabled]),
        i.useEffect(() => {
            if (!O || !D || _.enabled) return;
            let e = window.setTimeout(() => {
                N(!1);
            }, 2042);
            return () => window.clearTimeout(e);
        }, [D, O, _.enabled]));
    let F = i.useCallback(
            (e) => {
                (e.stopPropagation(), r || (v || _.enabled ? v && D && N(!1) : N(!0), I()));
            },
            [r, v, _.enabled, D, I],
        ),
        L = !r && !v && !D,
        P = i.useCallback(
            (e) => {
                e.target === e.currentTarget && D && requestAnimationFrame(() => N(!1));
            },
            [D],
        );
    function M() {
        let e = k.intl.formatToPlainString(k.t["7kFjeK"], { productName: t });
        return (0, a.jsx)(u.D, {
            className: l()(
                w.wishlistButton,
                w[g],
                {
                    [w.variantDefault]: "default" === b,
                    [w.variantSecondary]: "secondary" === b,
                    [w.variantSecondaryOverlay]: "overlay-secondary" === b,
                    [w.disabled]: r,
                    [w.visuallyHidden]: T,
                },
                s,
            ),
            innerRef: R,
            onClick: F,
            tabIndex: S,
            "aria-label": e,
            "aria-pressed": v,
            "aria-busy": p,
            "aria-disabled": r,
            children: _.enabled
                ? (0, a.jsx)(z, { colorClass: void 0 ?? B, size: A })
                : (0, a.jsxs)("div", {
                      className: l()(w.iconContainer, L && w.canAnimate),
                      children: [
                          (0, a.jsx)("span", {
                              className: l()(w.iconWrapper, L && w.canHover),
                              children: (0, a.jsx)(z, { colorClass: void 0 ?? B, size: A }),
                          }),
                          O
                              ? D
                                  ? (0, a.jsx)("img", {
                                        className: w.halloweenAnimationOverlay,
                                        src: y,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, a.jsx)("span", {
                                    className: l()(w.animationOverlay, D && w.clickAnimation),
                                    onAnimationEnd: P,
                                    children: (0, a.jsx)(o.HeartIcon, { size: A }),
                                }),
                      ],
                  }),
        });
    }
    if (x && !r) {
        let e = H.firstTimeTitle ?? k.intl.string(k.t["47Rhc3"]),
            n = H.firstTimeBody ?? k.intl.string(k.t.PXjA0b);
        return (0, a.jsx)(f.u, { title: e, body: n, shouldShow: E, children: M() });
    }
    let q = r
        ? (H.disabled ?? k.intl.string(k.t["50TX9k"]))
        : v
          ? (H.remove ?? k.intl.string(k.t.yr9TTf))
          : (H.add ?? k.intl.string(k.t["8DkMEQ"]));
    return (0, a.jsx)(m.m, { text: q, ariaHidden: !r, shouldShow: E, children: M() });
}

t.d(n, { R: () => j, _: () => w });
var i = t(477900),
    a = t(582128),
    s = t(503698),
    l = t.n(s),
    r = t(855986),
    d = t(844222),
    o = t(926268),
    u = t(559758),
    c = t(939249),
    b = t(683063),
    f = t(866665),
    m = t(661492);
let T = (0, t(945810).mj)({
    name: "2026-09-halloween-wishlisting-animation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = t(46653),
    v = t(536572),
    h = t(349031),
    g = t(758836),
    x = t(792996),
    k = t(715838);
let C =
        "https://cdn.discordapp.com/assets/content/7f66bcf14a6000b54874d74ee5a72fbbaec3d5944edfd7d6e9b3d597d3dbbaf2.png",
    I = !1,
    y = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function j(e) {
    let {
            product: n,
            selectedVariantIndex: t,
            location: s,
            onError: l,
            isCardHovered: d = !0,
            onTrackClick: o,
            ...u
        } = e,
        c = (0, r.bG)([p.default], () => p.default.getId()),
        {
            isWishlisted: b,
            isBusy: f,
            isFirstTimeWishlister: T,
            handleToggle: x,
            specificProductOrVariant: k,
            isPurchased: C,
        } = (0, h.z)({ userId: c, product: n, selectedVariantIndex: t, location: s, onError: l }),
        I = (0, v.s7)(k),
        y = a.useCallback(() => {
            (o?.(b ? g.sH.REMOVE_FROM_WISHLIST : g.sH.ADD_TO_WISHLIST), x());
        }, [b, x, o]);
    return C
        ? null
        : (0, i.jsx)(w, {
              skuId: k.skuId,
              productName: I,
              disabled: !(0, m.q)(k),
              isWishlisted: b,
              isBusy: f,
              isFirstTimeWishlister: T,
              isVisuallyHidden: !d && !b,
              onClick: y,
              ...u,
          });
}
function w(e) {
    let {
            skuId: n,
            productName: t,
            className: s,
            disabled: r,
            variant: m = "default",
            size: p = "md",
            isWishlisted: v,
            isBusy: h,
            isFirstTimeWishlister: g,
            isVisuallyHidden: j,
            onClick: w,
            shouldShowTooltip: E,
            tooltipConfig: S = {},
            tabIndex: _ = 0,
        } = e,
        H = y[p],
        { reducedMotion: O } = a.useContext(d.C),
        R = T.useConfig({ location: "WishlistButton" }).enabled,
        A = a.useRef(null),
        [N, P] = a.useState(!1),
        D = R ? v || N : v && !N,
        W = D ? o.HeartIcon : u.y,
        B = l()(k.normalIconColor, D && k.wishlistedOrAnimating);
    (a.useEffect(() => {
        R && !O.enabled && (I || ((I = !0), (new Image().src = C)));
    }, [R, O.enabled]),
        a.useEffect(() => {
            P(!1);
        }, [n]),
        a.useEffect(() => {
            N && O.enabled && P(!1);
        }, [N, O.enabled]),
        a.useEffect(() => {
            if (!R || !N || O.enabled) return;
            let e = window.setTimeout(() => {
                P(!1);
            }, 2042);
            return () => window.clearTimeout(e);
        }, [N, R, O.enabled]));
    let F = a.useCallback(
            (e) => {
                (e.stopPropagation(), r || (v || O.enabled ? v && N && P(!1) : P(!0), w()));
            },
            [r, v, O.enabled, N, w],
        ),
        z = !r && !v && !N,
        M = a.useCallback(
            (e) => {
                e.target === e.currentTarget && N && requestAnimationFrame(() => P(!1));
            },
            [N],
        );
    function V() {
        let e = x.intl.formatToPlainString(x.t["7kFjeK"], { productName: t });
        return (0, i.jsx)(c.D, {
            className: l()(
                k.wishlistButton,
                k[p],
                {
                    [k.variantDefault]: "default" === m,
                    [k.variantSecondary]: "secondary" === m,
                    [k.variantSecondaryOverlay]: "overlay-secondary" === m,
                    [k.disabled]: r,
                    [k.visuallyHidden]: j,
                },
                s,
            ),
            innerRef: A,
            onClick: F,
            tabIndex: _,
            "aria-label": e,
            "aria-pressed": v,
            "aria-busy": h,
            "aria-disabled": r,
            children: O.enabled
                ? (0, i.jsx)(W, { colorClass: void 0 ?? B, size: H })
                : (0, i.jsxs)("div", {
                      className: l()(k.iconContainer, z && k.canAnimate),
                      children: [
                          (0, i.jsx)("span", {
                              className: l()(k.iconWrapper, z && k.canHover),
                              children: (0, i.jsx)(W, { colorClass: void 0 ?? B, size: H }),
                          }),
                          R
                              ? N
                                  ? (0, i.jsx)("img", {
                                        className: k.halloweenAnimationOverlay,
                                        src: C,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, i.jsx)("span", {
                                    className: l()(k.animationOverlay, N && k.clickAnimation),
                                    onAnimationEnd: M,
                                    children: (0, i.jsx)(o.HeartIcon, { size: H }),
                                }),
                      ],
                  }),
        });
    }
    if (g && !r) {
        let e = S.firstTimeTitle ?? x.intl.string(x.t["47Rhc3"]),
            n = S.firstTimeBody ?? x.intl.string(x.t.PXjA0b);
        return (0, i.jsx)(b.u, { title: e, body: n, shouldShow: E, children: V() });
    }
    let X = r
        ? (S.disabled ?? x.intl.string(x.t["50TX9k"]))
        : v
          ? (S.remove ?? x.intl.string(x.t.yr9TTf))
          : (S.add ?? x.intl.string(x.t["8DkMEQ"]));
    return (0, i.jsx)(f.m, { text: X, ariaHidden: !r, shouldShow: E, children: V() });
}

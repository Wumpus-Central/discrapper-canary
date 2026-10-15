n.d(a, { R: () => w, _: () => I });
var i = n(477900),
    s = n(582128),
    t = n(503698),
    l = n.n(t),
    r = n(17928),
    d = n(844222),
    o = n(926268),
    c = n(559758),
    u = n(939249),
    b = n(683063),
    f = n(866665),
    m = n(661492);
let h = (0, n(945810).mj)({
    name: "2026-09-halloween-wishlisting-animation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var g = n(280450),
    p = n(536572),
    x = n(113265),
    v = n(758836),
    k = n(105292),
    y = n(715838);
let j =
        "https://cdn.discordapp.com/assets/content/7f66bcf14a6000b54874d74ee5a72fbbaec3d5944edfd7d6e9b3d597d3dbbaf2.png",
    C = !1,
    T = { xs: "xxs", sm: "xs", md: "refresh_sm" };
function w(e) {
    let {
            product: a,
            selectedVariantIndex: n,
            location: t,
            onError: l,
            isCardHovered: d = !0,
            onTrackClick: o,
            ...c
        } = e,
        u = (0, r.bG)([g.default], () => g.default.getId()),
        {
            isWishlisted: b,
            isBusy: f,
            isFirstTimeWishlister: h,
            handleToggle: k,
            specificProductOrVariant: y,
            isPurchased: j,
        } = (0, x.z)({ userId: u, product: a, selectedVariantIndex: n, location: t, onError: l }),
        C = (0, p.s7)(y),
        T = s.useCallback(() => {
            (o?.(b ? v.sH.REMOVE_FROM_WISHLIST : v.sH.ADD_TO_WISHLIST), k());
        }, [b, k, o]);
    return j
        ? null
        : (0, i.jsx)(I, {
              skuId: y.skuId,
              productName: C,
              disabled: !(0, m.q)(y),
              isWishlisted: b,
              isBusy: f,
              isFirstTimeWishlister: h,
              isVisuallyHidden: !d && !b,
              onClick: T,
              ...c,
          });
}
function I(e) {
    let {
            skuId: a,
            productName: n,
            className: t,
            disabled: r,
            variant: m = "default",
            size: g = "md",
            isWishlisted: p,
            isBusy: x,
            isFirstTimeWishlister: v,
            isVisuallyHidden: w,
            onClick: I,
            shouldShowTooltip: H,
            tooltipConfig: S = {},
            tabIndex: A = 0,
        } = e,
        E = T[g],
        { reducedMotion: _ } = s.useContext(d.C),
        O = h.useConfig({ location: "WishlistButton" }).enabled,
        D = s.useRef(null),
        [N, R] = s.useState(!1),
        W = O ? p || N : p && !N,
        z = W ? o.HeartIcon : c.y,
        B = l()(y.normalIconColor, W && y.wishlistedOrAnimating);
    (s.useEffect(() => {
        O && !_.enabled && (C || ((C = !0), (new Image().src = j)));
    }, [O, _.enabled]),
        s.useEffect(() => {
            R(!1);
        }, [a]),
        s.useEffect(() => {
            N && _.enabled && R(!1);
        }, [N, _.enabled]),
        s.useEffect(() => {
            if (!O || !N || _.enabled) return;
            let e = window.setTimeout(() => {
                R(!1);
            }, 2042);
            return () => window.clearTimeout(e);
        }, [N, O, _.enabled]));
    let F = s.useCallback(
            (e) => {
                (e.stopPropagation(), r || (p || _.enabled ? p && N && R(!1) : R(!0), I()));
            },
            [r, p, _.enabled, N, I],
        ),
        P = !r && !p && !N,
        M = s.useCallback(
            (e) => {
                e.target === e.currentTarget && N && requestAnimationFrame(() => R(!1));
            },
            [N],
        );
    function q() {
        let e = k.intl.formatToPlainString(k.t["7kFjeK"], { productName: n });
        return (0, i.jsx)(u.D, {
            className: l()(
                y.wishlistButton,
                y[g],
                {
                    [y.variantDefault]: "default" === m,
                    [y.variantSecondary]: "secondary" === m,
                    [y.variantSecondaryOverlay]: "overlay-secondary" === m,
                    [y.disabled]: r,
                    [y.visuallyHidden]: w,
                },
                t,
            ),
            innerRef: D,
            onClick: F,
            tabIndex: A,
            "aria-label": e,
            "aria-pressed": p,
            "aria-busy": x,
            "aria-disabled": r,
            children: _.enabled
                ? (0, i.jsx)(z, { colorClass: void 0 ?? B, size: E })
                : (0, i.jsxs)("div", {
                      className: l()(y.iconContainer, P && y.canAnimate),
                      children: [
                          (0, i.jsx)("span", {
                              className: l()(y.iconWrapper, P && y.canHover),
                              children: (0, i.jsx)(z, { colorClass: void 0 ?? B, size: E }),
                          }),
                          O
                              ? N
                                  ? (0, i.jsx)("img", {
                                        className: y.halloweenAnimationOverlay,
                                        src: j,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, i.jsx)("span", {
                                    className: l()(y.animationOverlay, N && y.clickAnimation),
                                    onAnimationEnd: M,
                                    children: (0, i.jsx)(o.HeartIcon, { size: E }),
                                }),
                      ],
                  }),
        });
    }
    if (v && !r) {
        let e = S.firstTimeTitle ?? k.intl.string(k.t["47Rhc3"]),
            a = S.firstTimeBody ?? k.intl.string(k.t.PXjA0b);
        return (0, i.jsx)(b.u, { title: e, body: a, shouldShow: H, children: q() });
    }
    let L = r
        ? (S.disabled ?? k.intl.string(k.t["50TX9k"]))
        : p
          ? (S.remove ?? k.intl.string(k.t.yr9TTf))
          : (S.add ?? k.intl.string(k.t["8DkMEQ"]));
    return (0, i.jsx)(f.m, { text: L, ariaHidden: !r, shouldShow: H, children: q() });
}

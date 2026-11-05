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
    I = t(715838);
let k =
        "https://cdn.discordapp.com/assets/content/7f66bcf14a6000b54874d74ee5a72fbbaec3d5944edfd7d6e9b3d597d3dbbaf2.png",
    C = !1,
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
            specificProductOrVariant: I,
            isPurchased: k,
        } = (0, h.z)({ userId: c, product: n, selectedVariantIndex: t, location: s, onError: l }),
        C = (0, v.s7)(I),
        y = a.useCallback(() => {
            (o?.(b ? g.sH.REMOVE_FROM_WISHLIST : g.sH.ADD_TO_WISHLIST), x());
        }, [b, x, o]);
    return k
        ? null
        : (0, i.jsx)(w, {
              skuId: I.skuId,
              productName: C,
              disabled: !(0, m.q)(I),
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
            tabIndex: H = 0,
        } = e,
        O = y[p],
        { reducedMotion: _ } = a.useContext(d.C),
        R = T.useConfig({ location: "WishlistButton" }).enabled,
        A = a.useRef(null),
        [N, P] = a.useState(!1),
        D = R ? v || N : v && !N,
        W = D ? o.HeartIcon : u.HeartOutlineIcon,
        B = l()(I.normalIconColor, D && I.wishlistedOrAnimating);
    (a.useEffect(() => {
        R && !_.enabled && (C || ((C = !0), (new Image().src = k)));
    }, [R, _.enabled]),
        a.useEffect(() => {
            P(!1);
        }, [n]),
        a.useEffect(() => {
            N && _.enabled && P(!1);
        }, [N, _.enabled]),
        a.useEffect(() => {
            if (!R || !N || _.enabled) return;
            let e = window.setTimeout(() => {
                P(!1);
            }, 2042);
            return () => window.clearTimeout(e);
        }, [N, R, _.enabled]));
    let F = a.useCallback(
            (e) => {
                (e.stopPropagation(), r || (v || _.enabled ? v && N && P(!1) : P(!0), w()));
            },
            [r, v, _.enabled, N, w],
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
                I.wishlistButton,
                I[p],
                {
                    [I.variantDefault]: "default" === m,
                    [I.variantSecondary]: "secondary" === m,
                    [I.variantSecondaryOverlay]: "overlay-secondary" === m,
                    [I.disabled]: r,
                    [I.visuallyHidden]: j,
                },
                s,
            ),
            innerRef: A,
            onClick: F,
            tabIndex: H,
            "aria-label": e,
            "aria-pressed": v,
            "aria-busy": h,
            "aria-disabled": r,
            children: _.enabled
                ? (0, i.jsx)(W, { colorClass: void 0 ?? B, size: O })
                : (0, i.jsxs)("div", {
                      className: l()(I.iconContainer, z && I.canAnimate),
                      children: [
                          (0, i.jsx)("span", {
                              className: l()(I.iconWrapper, z && I.canHover),
                              children: (0, i.jsx)(W, { colorClass: void 0 ?? B, size: O }),
                          }),
                          R
                              ? N
                                  ? (0, i.jsx)("img", {
                                        className: I.halloweenAnimationOverlay,
                                        src: k,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    })
                                  : null
                              : (0, i.jsx)("span", {
                                    className: l()(I.animationOverlay, N && I.clickAnimation),
                                    onAnimationEnd: M,
                                    children: (0, i.jsx)(o.HeartIcon, { size: O }),
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

n.d(t, { R: () => R, _: () => S });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    l = n(575593),
    o = n(311907),
    u = n(554146),
    d = n(435371),
    c = n(397927),
    _ = n(932001),
    h = n(661492),
    m = n(287809),
    T = n(466459),
    p = n(620434),
    A = n(49999),
    O = n(985018),
    f = n(394236);
let E = { sm: "xs", md: "refresh_sm" },
    R = (e) => {
        let { product: t, selectedVariantIndex: n, ...i } = e,
            r = s.useMemo(
                () => (t.type === l.R.VARIANTS_GROUP && null != n && t.variants?.[n] != null ? t.variants[n] : t),
                [t, n],
            ),
            o = r.skuId,
            { isPurchased: u } = (0, T.h)(r),
            d = s.useMemo(() => {
                let e = "6/4";
                switch (t.type) {
                    case l.R.NAMEPLATE:
                    case l.R.AVATAR_DECORATION:
                        e = "16/9";
                        break;
                    case l.R.BUNDLE:
                    case l.R.PROFILE_EFFECT:
                    default:
                        e = "6/4";
                }
                return {
                    type: "dynamic",
                    component: c.Oz7.COLLECTIBLES_PREVIEW,
                    aspectRatio: e,
                    props: { product: t, forCollectedModal: !0 },
                };
            }, [t]);
        return u
            ? null
            : (0, h.q)(r)
              ? (0, a.jsx)(S, { skuId: o, productName: r.name, nuxGraphic: d, ...i })
              : (0, a.jsx)(S, { skuId: o, productName: r.name, nuxGraphic: d, disabled: !0, ...i });
    };
function S(e) {
    let {
            skuId: t,
            productName: i,
            className: l,
            disabled: h,
            isCardHovered: T = !0,
            nuxGraphic: R,
            onClick: S,
            variant: v = "default",
            size: I = "md",
        } = e,
        g = E[I],
        [b, y] = (0, _.kn)([u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        C = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        N = b === u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: U } = s.useContext(c.CZY),
        {
            isWishlisted: k,
            isBusy: D,
            handleToggle: w,
        } = (0, p.c)({
            currentUser: C,
            skuId: t,
            onAddSuccess: () => {
                N &&
                    null != R &&
                    ((0, c.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, a.jsx)(e, { ...t, graphic: R });
                    }),
                    y(A.i.USER_DISMISS));
            },
            onError: () => {
                (0, c.showToast)((0, c.createToast)(O.intl.string(O.t.F8FvUy), c.ToastType.FAILURE)),
                    c.ORC.announce(O.intl.string(O.t.F8FvUy));
            },
        }),
        L = s.useRef(null),
        [M, x] = s.useState(!1),
        F = k && !M,
        P = F ? c.C3E : c.yhu,
        B = r()(f.normalIconColor, F && f.wishlistedOrAnimating);
    s.useEffect(() => {
        x(!1);
    }, [t]);
    let H = s.useCallback(
            (e) => {
                e.stopPropagation(), h || (S?.(), k || U.enabled ? k && M && x(!1) : x(!0), w());
            },
            [h, S, k, U.enabled, M, w],
        ),
        W = k ? O.intl.string(O.t.yr9TTf) : O.intl.string(O.t["8DkMEQ"]),
        j = O.intl.formatToPlainString(O.t["7kFjeK"], { productName: i }),
        G = !h && !k && !M,
        q = s.useCallback(
            (e) => {
                e.target === e.currentTarget && M && requestAnimationFrame(() => x(!1));
            },
            [M],
        ),
        V = () =>
            (0, a.jsx)(c.DUT, {
                className: r()(
                    f.wishlistButton,
                    f[I],
                    {
                        [f.variantDefault]: "default" === v,
                        [f.variantSecondaryOverlay]: "overlay-secondary" === v,
                        [f.disabled]: h,
                    },
                    l,
                ),
                innerRef: L,
                onClick: H,
                "aria-label": j,
                "aria-pressed": k,
                "aria-busy": D,
                "aria-disabled": h,
                children: U.enabled
                    ? (0, a.jsx)(P, { colorClass: void 0 ?? B, size: g })
                    : (0, a.jsxs)("div", {
                          className: r()(f.iconContainer, G && f.canAnimate),
                          children: [
                              (0, a.jsx)("span", {
                                  className: r()(f.iconWrapper, G && f.canHover),
                                  children: (0, a.jsx)(P, { colorClass: void 0 ?? B, size: g }),
                              }),
                              (0, a.jsx)("span", {
                                  className: r()(f.animationOverlay, M && f.clickAnimation),
                                  onAnimationEnd: q,
                                  children: (0, a.jsx)(c.C3E, { size: g }),
                              }),
                          ],
                      }),
            });
    return (T || k) && null != C
        ? N && !h
            ? (0, a.jsx)(d.un, { title: O.intl.string(O.t["47Rhc3"]), body: O.intl.string(O.t.PXjA0b), children: V() })
            : (0, a.jsx)(d.m_, { text: h ? O.intl.string(O.t["50TX9k"]) : W, ariaHidden: !h, children: V() })
        : null;
}

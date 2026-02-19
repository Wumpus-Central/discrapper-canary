n.d(t, { R: () => b, _: () => C });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(575593),
    o = n(311907),
    c = n(554146),
    d = n(435371),
    u = n(397927),
    m = n(379848),
    _ = n(661492),
    p = n(287809),
    g = n(466459),
    h = n(620434),
    A = n(49999),
    x = n(985018),
    f = n(394236);
let v = { sm: "xs", md: "refresh_sm" },
    b = (e) => {
        let { product: t, selectedVariantIndex: n, ...i } = e,
            l = r.useMemo(
                () => (t.type === s.R.VARIANTS_GROUP && null != n && t.variants?.[n] != null ? t.variants[n] : t),
                [t, n],
            ),
            o = l.skuId,
            { isPurchased: c } = (0, g.h)(l),
            d = r.useMemo(() => {
                let e = "6/4";
                switch (t.type) {
                    case s.R.NAMEPLATE:
                    case s.R.AVATAR_DECORATION:
                        e = "16/9";
                        break;
                    case s.R.BUNDLE:
                    case s.R.PROFILE_EFFECT:
                    default:
                        e = "6/4";
                }
                return {
                    type: "dynamic",
                    component: u.Oz7.COLLECTIBLES_PREVIEW,
                    aspectRatio: e,
                    props: { product: t, forCollectedModal: !0 },
                };
            }, [t]);
        return c
            ? null
            : (0, _.q)(l)
              ? (0, a.jsx)(C, { skuId: o, productName: l.name, nuxGraphic: d, ...i })
              : (0, a.jsx)(C, { skuId: o, productName: l.name, nuxGraphic: d, disabled: !0, ...i });
    };
function C(e) {
    let {
            skuId: t,
            productName: i,
            className: s,
            disabled: _,
            isCardHovered: g = !0,
            nuxGraphic: b,
            onClick: C,
            variant: I = "default",
            size: T = "md",
        } = e,
        N = v[T],
        [y, j] = (0, m.kn)([c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        R = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        S = y === c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: E } = r.useContext(u.CZY),
        {
            isWishlisted: k,
            isBusy: P,
            handleToggle: O,
        } = (0, h.c)({
            currentUser: R,
            skuId: t,
            onAddSuccess: () => {
                S &&
                    null != b &&
                    ((0, u.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, a.jsx)(e, { ...t, graphic: b });
                    }),
                    j(A.i.USER_DISMISS));
            },
            onError: () => {
                (0, u.showToast)((0, u.createToast)(x.intl.string(x.t.F8FvUy), u.ToastType.FAILURE)),
                    u.ORC.announce(x.intl.string(x.t.F8FvUy));
            },
        }),
        w = r.useRef(null),
        [L, B] = r.useState(!1),
        M = k && !L,
        D = M ? u.C3E : u.yhu,
        U = l()(f.normalIconColor, M && f.wishlistedOrAnimating);
    r.useEffect(() => {
        B(!1);
    }, [t]);
    let G = r.useCallback(
            (e) => {
                e.stopPropagation(), _ || (C?.(), k || E.enabled ? k && L && B(!1) : B(!0), O());
            },
            [_, C, k, E.enabled, L, O],
        ),
        V = k ? x.intl.string(x.t.yr9TTf) : x.intl.string(x.t["8DkMEQ"]),
        H = x.intl.formatToPlainString(x.t["7kFjeK"], { productName: i }),
        F = !_ && !k && !L,
        z = r.useCallback(
            (e) => {
                e.target === e.currentTarget && L && requestAnimationFrame(() => B(!1));
            },
            [L],
        ),
        W = () => {
            var e;
            return (0, a.jsx)(u.DUT, {
                className: l()(
                    f.wishlistButton,
                    f[T],
                    {
                        [f.variantDefault]: "default" === I,
                        [f.variantSecondaryOverlay]: "overlay-secondary" === I,
                        [f.disabled]: _,
                    },
                    s,
                ),
                innerRef: w,
                onClick: G,
                "aria-label": H,
                "aria-pressed": k,
                "aria-busy": P,
                "aria-disabled": _,
                children: E.enabled
                    ? (0, a.jsx)(D, { colorClass: e ?? U, size: N })
                    : (0, a.jsxs)("div", {
                          className: l()(f.iconContainer, F && f.canAnimate),
                          children: [
                              (0, a.jsx)("span", {
                                  className: l()(f.iconWrapper, F && f.canHover),
                                  children: (0, a.jsx)(D, { colorClass: e ?? U, size: N }),
                              }),
                              (0, a.jsx)("span", {
                                  className: l()(f.animationOverlay, L && f.clickAnimation),
                                  onAnimationEnd: z,
                                  children: (0, a.jsx)(u.C3E, { size: N }),
                              }),
                          ],
                      }),
            });
        };
    return (g || k) && null != R
        ? S && !_
            ? (0, a.jsx)(d.un, { title: x.intl.string(x.t["47Rhc3"]), body: x.intl.string(x.t.PXjA0b), children: W() })
            : (0, a.jsx)(d.m_, { text: _ ? x.intl.string(x.t["50TX9k"]) : V, ariaHidden: !_, children: W() })
        : null;
}

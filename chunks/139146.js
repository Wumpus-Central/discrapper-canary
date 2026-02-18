n.d(t, { R: () => b, _: () => I });
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
    f = n(985018),
    v = n(394236);
let x = { sm: "xs", md: "refresh_sm" },
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
              ? (0, a.jsx)(I, { skuId: o, productName: l.name, nuxGraphic: d, ...i })
              : (0, a.jsx)(I, { skuId: o, productName: l.name, nuxGraphic: d, disabled: !0, ...i });
    };
function I(e) {
    let {
            skuId: t,
            productName: i,
            className: s,
            disabled: _,
            isCardHovered: g = !0,
            nuxGraphic: b,
            onClick: I,
            variant: C = "default",
            size: y = "md",
        } = e,
        T = x[y],
        [N, j] = (0, m.kn)([c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        S = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        R = N === c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: E } = r.useContext(u.CZY),
        {
            isWishlisted: k,
            isBusy: w,
            handleToggle: P,
        } = (0, h.c)({
            currentUser: S,
            skuId: t,
            onAddSuccess: () => {
                R &&
                    null != b &&
                    ((0, u.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, a.jsx)(e, { ...t, graphic: b });
                    }),
                    j(A.i.USER_DISMISS));
            },
            onError: () => {
                (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.F8FvUy), u.ToastType.FAILURE)),
                    u.ORC.announce(f.intl.string(f.t.F8FvUy));
            },
        }),
        O = r.useRef(null),
        [L, M] = r.useState(!1),
        B = k && !L,
        D = B ? u.C3E : u.yhu,
        U = l()(v.normalIconColor, B && v.wishlistedOrAnimating);
    r.useEffect(() => {
        M(!1);
    }, [t]);
    let G = r.useCallback(
            (e) => {
                e.stopPropagation(), _ || (I?.(), k || E.enabled ? k && L && M(!1) : M(!0), P());
            },
            [_, I, k, E.enabled, L, P],
        ),
        V = k ? f.intl.string(f.t.yr9TTf) : f.intl.string(f.t["8DkMEQ"]),
        H = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: i }),
        F = !_ && !k && !L,
        z = r.useCallback(
            (e) => {
                e.target === e.currentTarget && L && requestAnimationFrame(() => M(!1));
            },
            [L],
        ),
        W = () => {
            var e;
            return (0, a.jsx)(u.DUT, {
                className: l()(
                    v.wishlistButton,
                    v[y],
                    {
                        [v.variantDefault]: "default" === C,
                        [v.variantSecondaryOverlay]: "overlay-secondary" === C,
                        [v.disabled]: _,
                    },
                    s,
                ),
                innerRef: O,
                onClick: G,
                "aria-label": H,
                "aria-pressed": k,
                "aria-busy": w,
                "aria-disabled": _,
                children: E.enabled
                    ? (0, a.jsx)(D, { colorClass: e ?? U, size: T })
                    : (0, a.jsxs)("div", {
                          className: l()(v.iconContainer, F && v.canAnimate),
                          children: [
                              (0, a.jsx)("span", {
                                  className: l()(v.iconWrapper, F && v.canHover),
                                  children: (0, a.jsx)(D, { colorClass: e ?? U, size: T }),
                              }),
                              (0, a.jsx)("span", {
                                  className: l()(v.animationOverlay, L && v.clickAnimation),
                                  onAnimationEnd: z,
                                  children: (0, a.jsx)(u.C3E, { size: T }),
                              }),
                          ],
                      }),
            });
        };
    return (g || k) && null != S
        ? R && !_
            ? (0, a.jsx)(d.un, { title: f.intl.string(f.t["47Rhc3"]), body: f.intl.string(f.t.PXjA0b), children: W() })
            : (0, a.jsx)(d.m_, { text: _ ? f.intl.string(f.t["50TX9k"]) : V, ariaHidden: !_, children: W() })
        : null;
}

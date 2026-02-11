"use strict";
n.d(t, { R: () => y, _: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(575593),
    l = n(311907),
    u = n(554146),
    c = n(435371),
    d = n(397927),
    _ = n(379848),
    f = n(661492),
    h = n(287809),
    p = n(466459),
    g = n(620434),
    E = n(49999),
    A = n(985018),
    I = n(60386);
let T = { sm: "xs", md: "refresh_sm" },
    y = (e) => {
        let { product: t, selectedVariantIndex: n, ...a } = e,
            s = i.useMemo(
                () => (t.type === o.R.VARIANTS_GROUP && null != n && t.variants?.[n] != null ? t.variants[n] : t),
                [t, n],
            ),
            l = s.skuId,
            { isPurchased: u } = (0, p.h)(s),
            c = i.useMemo(() => {
                let e = "6/4";
                switch (t.type) {
                    case o.R.NAMEPLATE:
                    case o.R.AVATAR_DECORATION:
                        e = "16/9";
                        break;
                    case o.R.BUNDLE:
                    case o.R.PROFILE_EFFECT:
                    default:
                        e = "6/4";
                }
                return {
                    type: "dynamic",
                    component: d.Oz7.COLLECTIBLES_PREVIEW,
                    aspectRatio: e,
                    props: { product: t, forCollectedModal: !0 },
                };
            }, [t]);
        return u
            ? null
            : (0, f.q)(s)
              ? (0, r.jsx)(S, { skuId: l, nuxGraphic: c, ...a })
              : (0, r.jsx)(S, { skuId: l, nuxGraphic: c, disabled: !0, ...a });
    };
function S(e) {
    let {
            skuId: t,
            className: a,
            disabled: o,
            isCardHovered: f = !0,
            nuxGraphic: p,
            onClick: y,
            variant: S = "default",
            size: v = "md",
        } = e,
        C = T[v],
        [b, N] = (0, _.kn)([u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        R = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        O = b === u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: D } = i.useContext(d.CZY),
        {
            isWishlisted: L,
            isBusy: w,
            handleToggle: x,
        } = (0, g.c)({
            currentUser: R,
            skuId: t,
            onAddSuccess: () => {
                O &&
                    null != p &&
                    ((0, d.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, r.jsx)(e, { ...t, graphic: p });
                    }),
                    N(E.i.USER_DISMISS));
            },
            onError: () => {
                (0, d.showToast)((0, d.createToast)(A.intl.string(A.t.F8FvUy), d.ToastType.FAILURE)),
                    d.ORC.announce(A.intl.string(A.t.F8FvUy));
            },
        }),
        P = i.useRef(null),
        [M, k] = i.useState(!1),
        U = L && !M,
        G = U ? d.C3E : d.yhu,
        F = s()(I.normalIconColor, U && I.wishlistedOrAnimating);
    i.useEffect(() => {
        k(!1);
    }, [t]);
    let V = i.useCallback(
            (e) => {
                e.stopPropagation(), o || (y?.(), L || D.enabled ? L && M && k(!1) : k(!0), x());
            },
            [o, y, L, D.enabled, M, x],
        ),
        B = L ? A.intl.string(A.t.yr9TTf) : A.intl.string(A.t["8DkMEQ"]),
        j = !o && !L && !M,
        H = i.useCallback(
            (e) => {
                e.target === e.currentTarget && M && requestAnimationFrame(() => k(!1));
            },
            [M],
        ),
        Y = (e) =>
            D.enabled
                ? (0, r.jsx)(G, { colorClass: e ?? F, size: C })
                : (0, r.jsxs)("div", {
                      className: s()(I.iconContainer, j && I.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: s()(I.iconWrapper, j && I.canHover),
                              children: (0, r.jsx)(G, { colorClass: e ?? F, size: C }),
                          }),
                          (0, r.jsx)("span", {
                              className: s()(I.animationOverlay, M && I.clickAnimation),
                              onAnimationEnd: H,
                              children: (0, r.jsx)(d.C3E, { size: C }),
                          }),
                      ],
                  }),
        W = () =>
            (0, r.jsx)(d.DUT, {
                className: s()(
                    I.wishlistButton,
                    I[v],
                    {
                        [I.variantDefault]: "default" === S,
                        [I.variantSecondaryOverlay]: "overlay-secondary" === S,
                        [I.disabled]: o,
                    },
                    a,
                ),
                innerRef: P,
                onClick: V,
                "aria-label": B,
                "aria-busy": w,
                "aria-disabled": o,
                children: Y(),
            });
    return (f || L) && null != R
        ? O && !o
            ? (0, r.jsx)(c.un, { title: A.intl.string(A.t["47Rhc3"]), body: A.intl.string(A.t.PXjA0b), children: W() })
            : (0, r.jsx)(c.m_, { text: o ? A.intl.string(A.t["50TX9k"]) : B, ariaHidden: !o, children: W() })
        : null;
}

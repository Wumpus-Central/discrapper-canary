"use strict";
n.d(t, { R: () => T, _: () => S });
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
    p = n(287809),
    h = n(466459),
    m = n(620434),
    g = n(49999),
    E = n(985018),
    A = n(394236);
let I = { sm: "xs", md: "refresh_sm" },
    T = (e) => {
        let { product: t, selectedVariantIndex: n, ...a } = e,
            s = i.useMemo(
                () => (t.type === o.R.VARIANTS_GROUP && null != n && t.variants?.[n] != null ? t.variants[n] : t),
                [t, n],
            ),
            l = s.skuId,
            { isPurchased: u } = (0, h.h)(s),
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
            nuxGraphic: h,
            onClick: T,
            variant: S = "default",
            size: y = "md",
        } = e,
        v = I[y],
        [C, N] = (0, _.kn)([u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        b = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        R = C === u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: O } = i.useContext(d.CZY),
        {
            isWishlisted: D,
            isBusy: L,
            handleToggle: w,
        } = (0, m.c)({
            currentUser: b,
            skuId: t,
            onAddSuccess: () => {
                R &&
                    null != h &&
                    ((0, d.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, r.jsx)(e, { ...t, graphic: h });
                    }),
                    N(g.i.USER_DISMISS));
            },
            onError: () => {
                (0, d.showToast)((0, d.createToast)(E.intl.string(E.t.F8FvUy), d.ToastType.FAILURE)),
                    d.ORC.announce(E.intl.string(E.t.F8FvUy));
            },
        }),
        x = i.useRef(null),
        [M, P] = i.useState(!1),
        k = D && !M,
        U = k ? d.C3E : d.yhu,
        G = s()(A.normalIconColor, k && A.wishlistedOrAnimating);
    i.useEffect(() => {
        P(!1);
    }, [t]);
    let F = i.useCallback(
            (e) => {
                e.stopPropagation(), o || (T?.(), D || O.enabled ? D && M && P(!1) : P(!0), w());
            },
            [o, T, D, O.enabled, M, w],
        ),
        V = D ? E.intl.string(E.t.yr9TTf) : E.intl.string(E.t["8DkMEQ"]),
        B = !o && !D && !M,
        j = i.useCallback(
            (e) => {
                e.target === e.currentTarget && M && requestAnimationFrame(() => P(!1));
            },
            [M],
        ),
        H = (e) =>
            O.enabled
                ? (0, r.jsx)(U, { colorClass: e ?? G, size: v })
                : (0, r.jsxs)("div", {
                      className: s()(A.iconContainer, B && A.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: s()(A.iconWrapper, B && A.canHover),
                              children: (0, r.jsx)(U, { colorClass: e ?? G, size: v }),
                          }),
                          (0, r.jsx)("span", {
                              className: s()(A.animationOverlay, M && A.clickAnimation),
                              onAnimationEnd: j,
                              children: (0, r.jsx)(d.C3E, { size: v }),
                          }),
                      ],
                  }),
        Y = () =>
            (0, r.jsx)(d.DUT, {
                className: s()(
                    A.wishlistButton,
                    A[y],
                    {
                        [A.variantDefault]: "default" === S,
                        [A.variantSecondaryOverlay]: "overlay-secondary" === S,
                        [A.disabled]: o,
                    },
                    a,
                ),
                innerRef: x,
                onClick: F,
                "aria-label": V,
                "aria-busy": L,
                "aria-disabled": o,
                children: H(),
            });
    return (f || D) && null != b
        ? R && !o
            ? (0, r.jsx)(c.un, { title: E.intl.string(E.t["47Rhc3"]), body: E.intl.string(E.t.PXjA0b), children: Y() })
            : (0, r.jsx)(c.m_, { text: o ? E.intl.string(E.t["50TX9k"]) : V, ariaHidden: !o, children: Y() })
        : null;
}

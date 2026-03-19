"use strict";
n.d(t, { R: () => T, _: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(311907),
    u = n(554146),
    c = n(435371),
    d = n(397927),
    _ = n(932001),
    f = n(661492),
    p = n(287809),
    h = n(466459),
    m = n(620434),
    E = n(49999),
    g = n(985018),
    A = n(60386);
let I = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    T = (e) => {
        let { product: t, selectedVariantIndex: n, hideIfPurchased: s = !0, ...a } = e,
            l = i.useMemo(
                () => (t.type === o.R.VARIANTS_GROUP && null != n && t.variants?.[n] != null ? t.variants[n] : t),
                [t, n],
            ),
            u = l.skuId,
            { isPurchased: c } = (0, h.h)(l),
            _ = i.useMemo(() => {
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
        return c && s
            ? null
            : (0, r.jsx)(S, { skuId: u, productName: l.name, nuxGraphic: _, disabled: !(0, f.q)(l), ...a });
    };
function S(e) {
    let {
            skuId: t,
            productName: s,
            className: o,
            disabled: f,
            isCardHovered: h = !0,
            nuxGraphic: T,
            trackButtonClick: S,
            variant: y = "default",
            size: v = "md",
            showIfWishlisted: N = !0,
            onError: C,
            location: R,
        } = e,
        O = I[v],
        [b, D] = (0, _.kn)([u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        L = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        w = b === u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: M } = i.useContext(d.CZY),
        {
            isWishlisted: x,
            isBusy: P,
            handleToggle: k,
        } = (0, m.c)({
            currentUser: L,
            skuId: t,
            location: R,
            onAddSuccess: () => {
                w &&
                    null != T &&
                    ((0, d.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, r.jsx)(e, { ...t, graphic: T });
                    }),
                    D(E.i.USER_DISMISS));
            },
            onError:
                C ??
                (() => {
                    (0, d.showToast)((0, d.createToast)(g.intl.string(g.t.F8FvUy), d.ToastType.FAILURE)),
                        d.ORC.announce(g.intl.string(g.t.F8FvUy));
                }),
        }),
        U = i.useRef(null),
        [G, F] = i.useState(!1),
        V = x && !G,
        B = V ? d.C3E : d.yhu,
        H = a()(A.normalIconColor, V && A.wishlistedOrAnimating);
    i.useEffect(() => {
        F(!1);
    }, [t]);
    let j = i.useCallback(
            (e) => {
                e.stopPropagation(), f || (S?.(), x || M.enabled ? x && G && F(!1) : F(!0), k());
            },
            [f, S, x, M.enabled, G, k],
        ),
        Y = x ? g.intl.string(g.t.yr9TTf) : g.intl.string(g.t["8DkMEQ"]),
        W = g.intl.formatToPlainString(g.t["7kFjeK"], { productName: s }),
        K = !f && !x && !G,
        $ = i.useCallback(
            (e) => {
                e.target === e.currentTarget && G && requestAnimationFrame(() => F(!1));
            },
            [G],
        ),
        z = (e) =>
            M.enabled
                ? (0, r.jsx)(B, { colorClass: e ?? H, size: O })
                : (0, r.jsxs)("div", {
                      className: a()(A.iconContainer, K && A.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: a()(A.iconWrapper, K && A.canHover),
                              children: (0, r.jsx)(B, { colorClass: e ?? H, size: O }),
                          }),
                          (0, r.jsx)("span", {
                              className: a()(A.animationOverlay, G && A.clickAnimation),
                              onAnimationEnd: $,
                              children: (0, r.jsx)(d.C3E, { size: O }),
                          }),
                      ],
                  }),
        q = () =>
            (0, r.jsx)(d.DUT, {
                className: a()(
                    A.wishlistButton,
                    A[v],
                    {
                        [A.variantDefault]: "default" === y,
                        [A.variantSecondaryOverlay]: "overlay-secondary" === y,
                        [A.disabled]: f,
                    },
                    o,
                ),
                innerRef: U,
                onClick: j,
                "aria-label": W,
                "aria-pressed": x,
                "aria-busy": P,
                "aria-disabled": f,
                children: z(),
            });
    return (h || (x && N)) && null != L
        ? w && !f
            ? (0, r.jsx)(c.un, { title: g.intl.string(g.t["47Rhc3"]), body: g.intl.string(g.t.PXjA0b), children: q() })
            : (0, r.jsx)(c.m_, { text: f ? g.intl.string(g.t["50TX9k"]) : Y, ariaHidden: !f, children: q() })
        : null;
}

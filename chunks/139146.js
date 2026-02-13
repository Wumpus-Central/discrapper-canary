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
    I = n(394236);
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
              ? (0, r.jsx)(S, { skuId: l, productName: s.name, nuxGraphic: c, ...a })
              : (0, r.jsx)(S, { skuId: l, productName: s.name, nuxGraphic: c, disabled: !0, ...a });
    };
function S(e) {
    let {
            skuId: t,
            productName: a,
            className: o,
            disabled: f,
            isCardHovered: p = !0,
            nuxGraphic: y,
            onClick: S,
            variant: v = "default",
            size: C = "md",
        } = e,
        b = T[C],
        [N, R] = (0, _.kn)([u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        O = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        D = N === u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: L } = i.useContext(d.CZY),
        {
            isWishlisted: w,
            isBusy: x,
            handleToggle: P,
        } = (0, g.c)({
            currentUser: O,
            skuId: t,
            onAddSuccess: () => {
                D &&
                    null != y &&
                    ((0, d.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, r.jsx)(e, { ...t, graphic: y });
                    }),
                    R(E.i.USER_DISMISS));
            },
            onError: () => {
                (0, d.showToast)((0, d.createToast)(A.intl.string(A.t.F8FvUy), d.ToastType.FAILURE)),
                    d.ORC.announce(A.intl.string(A.t.F8FvUy));
            },
        }),
        M = i.useRef(null),
        [k, U] = i.useState(!1),
        G = w && !k,
        F = G ? d.C3E : d.yhu,
        V = s()(I.normalIconColor, G && I.wishlistedOrAnimating);
    i.useEffect(() => {
        U(!1);
    }, [t]);
    let B = i.useCallback(
            (e) => {
                e.stopPropagation(), f || (S?.(), w || L.enabled ? w && k && U(!1) : U(!0), P());
            },
            [f, S, w, L.enabled, k, P],
        ),
        j = w ? A.intl.string(A.t.yr9TTf) : A.intl.string(A.t["8DkMEQ"]),
        H = A.intl.formatToPlainString(A.t["7kFjeK"], { productName: a }),
        Y = !f && !w && !k,
        W = i.useCallback(
            (e) => {
                e.target === e.currentTarget && k && requestAnimationFrame(() => U(!1));
            },
            [k],
        ),
        K = (e) =>
            L.enabled
                ? (0, r.jsx)(F, { colorClass: e ?? V, size: b })
                : (0, r.jsxs)("div", {
                      className: s()(I.iconContainer, Y && I.canAnimate),
                      children: [
                          (0, r.jsx)("span", {
                              className: s()(I.iconWrapper, Y && I.canHover),
                              children: (0, r.jsx)(F, { colorClass: e ?? V, size: b }),
                          }),
                          (0, r.jsx)("span", {
                              className: s()(I.animationOverlay, k && I.clickAnimation),
                              onAnimationEnd: W,
                              children: (0, r.jsx)(d.C3E, { size: b }),
                          }),
                      ],
                  }),
        $ = () =>
            (0, r.jsx)(d.DUT, {
                className: s()(
                    I.wishlistButton,
                    I[C],
                    {
                        [I.variantDefault]: "default" === v,
                        [I.variantSecondaryOverlay]: "overlay-secondary" === v,
                        [I.disabled]: f,
                    },
                    o,
                ),
                innerRef: M,
                onClick: B,
                "aria-label": H,
                "aria-pressed": w,
                "aria-busy": x,
                "aria-disabled": f,
                children: K(),
            });
    return (p || w) && null != O
        ? D && !f
            ? (0, r.jsx)(c.un, { title: A.intl.string(A.t["47Rhc3"]), body: A.intl.string(A.t.PXjA0b), children: $() })
            : (0, r.jsx)(c.m_, { text: f ? A.intl.string(A.t["50TX9k"]) : j, ariaHidden: !f, children: $() })
        : null;
}

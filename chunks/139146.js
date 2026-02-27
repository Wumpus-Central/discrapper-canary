"use strict";
l.d(t, { R: () => _, _: () => y });
var r = l(627968),
    a = l(64700),
    n = l(503698),
    i = l.n(n),
    s = l(575593),
    o = l(311907),
    d = l(554146),
    c = l(435371),
    u = l(397927),
    h = l(932001),
    m = l(661492),
    x = l(287809),
    p = l(466459),
    b = l(620434),
    g = l(49999),
    f = l(985018),
    v = l(394236);
let j = { sm: "xs", md: "refresh_sm" },
    _ = (e) => {
        let { product: t, selectedVariantIndex: l, ...n } = e,
            i = a.useMemo(
                () => (t.type === s.R.VARIANTS_GROUP && null != l && t.variants?.[l] != null ? t.variants[l] : t),
                [t, l],
            ),
            o = i.skuId,
            { isPurchased: d } = (0, p.h)(i),
            c = a.useMemo(() => {
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
        return d
            ? null
            : (0, m.q)(i)
              ? (0, r.jsx)(y, { skuId: o, productName: i.name, nuxGraphic: c, ...n })
              : (0, r.jsx)(y, { skuId: o, productName: i.name, nuxGraphic: c, disabled: !0, ...n });
    };
function y(e) {
    let {
            skuId: t,
            productName: n,
            className: s,
            disabled: m,
            isCardHovered: p = !0,
            nuxGraphic: _,
            onClick: y,
            variant: A = "default",
            size: k = "md",
        } = e,
        C = j[k],
        [I, S] = (0, h.kn)([d.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        T = (0, o.bG)([x.default], () => x.default.getCurrentUser()),
        w = I === d.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: B } = a.useContext(u.CZY),
        {
            isWishlisted: U,
            isBusy: L,
            handleToggle: E,
        } = (0, b.c)({
            currentUser: T,
            skuId: t,
            onAddSuccess: () => {
                w &&
                    null != _ &&
                    ((0, u.mMO)(async () => {
                        let { default: e } = await l.e("64581").then(l.bind(l, 38884));
                        return (t) => (0, r.jsx)(e, { ...t, graphic: _ });
                    }),
                    S(g.i.USER_DISMISS));
            },
            onError: () => {
                (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.F8FvUy), u.ToastType.FAILURE)),
                    u.ORC.announce(f.intl.string(f.t.F8FvUy));
            },
        }),
        V = a.useRef(null),
        [O, R] = a.useState(!1),
        P = U && !O,
        F = P ? u.C3E : u.yhu,
        H = i()(v.normalIconColor, P && v.wishlistedOrAnimating);
    a.useEffect(() => {
        R(!1);
    }, [t]);
    let M = a.useCallback(
            (e) => {
                e.stopPropagation(), m || (y?.(), U || B.enabled ? U && O && R(!1) : R(!0), E());
            },
            [m, y, U, B.enabled, O, E],
        ),
        D = U ? f.intl.string(f.t.yr9TTf) : f.intl.string(f.t["8DkMEQ"]),
        N = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: n }),
        G = !m && !U && !O,
        K = a.useCallback(
            (e) => {
                e.target === e.currentTarget && O && requestAnimationFrame(() => R(!1));
            },
            [O],
        ),
        W = () =>
            (0, r.jsx)(u.DUT, {
                className: i()(
                    v.wishlistButton,
                    v[k],
                    {
                        [v.variantDefault]: "default" === A,
                        [v.variantSecondaryOverlay]: "overlay-secondary" === A,
                        [v.disabled]: m,
                    },
                    s,
                ),
                innerRef: V,
                onClick: M,
                "aria-label": N,
                "aria-pressed": U,
                "aria-busy": L,
                "aria-disabled": m,
                children: B.enabled
                    ? (0, r.jsx)(F, { colorClass: void 0 ?? H, size: C })
                    : (0, r.jsxs)("div", {
                          className: i()(v.iconContainer, G && v.canAnimate),
                          children: [
                              (0, r.jsx)("span", {
                                  className: i()(v.iconWrapper, G && v.canHover),
                                  children: (0, r.jsx)(F, { colorClass: void 0 ?? H, size: C }),
                              }),
                              (0, r.jsx)("span", {
                                  className: i()(v.animationOverlay, O && v.clickAnimation),
                                  onAnimationEnd: K,
                                  children: (0, r.jsx)(u.C3E, { size: C }),
                              }),
                          ],
                      }),
            });
    return (p || U) && null != T
        ? w && !m
            ? (0, r.jsx)(c.un, { title: f.intl.string(f.t["47Rhc3"]), body: f.intl.string(f.t.PXjA0b), children: W() })
            : (0, r.jsx)(c.m_, { text: m ? f.intl.string(f.t["50TX9k"]) : D, ariaHidden: !m, children: W() })
        : null;
}

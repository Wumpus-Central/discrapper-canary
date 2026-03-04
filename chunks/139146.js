"use strict";
a.d(t, { R: () => y, _: () => _ });
var l = a(627968),
    r = a(64700),
    n = a(503698),
    s = a.n(n),
    i = a(575593),
    o = a(311907),
    d = a(554146),
    c = a(435371),
    u = a(397927),
    x = a(932001),
    h = a(661492),
    m = a(287809),
    b = a(466459),
    p = a(620434),
    g = a(49999),
    f = a(985018),
    v = a(394236);
let j = { sm: "xs", md: "refresh_sm" },
    y = (e) => {
        let { product: t, selectedVariantIndex: a, ...n } = e,
            s = r.useMemo(
                () => (t.type === i.R.VARIANTS_GROUP && null != a && t.variants?.[a] != null ? t.variants[a] : t),
                [t, a],
            ),
            o = s.skuId,
            { isPurchased: d } = (0, b.h)(s),
            c = r.useMemo(() => {
                let e = "6/4";
                switch (t.type) {
                    case i.R.NAMEPLATE:
                    case i.R.AVATAR_DECORATION:
                        e = "16/9";
                        break;
                    case i.R.BUNDLE:
                    case i.R.PROFILE_EFFECT:
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
            : (0, h.q)(s)
              ? (0, l.jsx)(_, { skuId: o, productName: s.name, nuxGraphic: c, ...n })
              : (0, l.jsx)(_, { skuId: o, productName: s.name, nuxGraphic: c, disabled: !0, ...n });
    };
function _(e) {
    let {
            skuId: t,
            productName: n,
            className: i,
            disabled: h,
            isCardHovered: b = !0,
            nuxGraphic: y,
            onClick: _,
            variant: k = "default",
            size: A = "md",
        } = e,
        C = j[A],
        [S, I] = (0, x.kn)([d.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        T = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        w = S === d.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: V } = r.useContext(u.CZY),
        {
            isWishlisted: P,
            isBusy: E,
            handleToggle: O,
        } = (0, p.c)({
            currentUser: T,
            skuId: t,
            onAddSuccess: () => {
                w &&
                    null != y &&
                    ((0, u.mMO)(async () => {
                        let { default: e } = await a.e("64581").then(a.bind(a, 38884));
                        return (t) => (0, l.jsx)(e, { ...t, graphic: y });
                    }),
                    I(g.i.USER_DISMISS));
            },
            onError: () => {
                (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.F8FvUy), u.ToastType.FAILURE)),
                    u.ORC.announce(f.intl.string(f.t.F8FvUy));
            },
        }),
        L = r.useRef(null),
        [R, B] = r.useState(!1),
        M = P && !R,
        N = M ? u.C3E : u.yhu,
        F = s()(v.normalIconColor, M && v.wishlistedOrAnimating);
    r.useEffect(() => {
        B(!1);
    }, [t]);
    let H = r.useCallback(
            (e) => {
                e.stopPropagation(), h || (_?.(), P || V.enabled ? P && R && B(!1) : B(!0), O());
            },
            [h, _, P, V.enabled, R, O],
        ),
        D = P ? f.intl.string(f.t.yr9TTf) : f.intl.string(f.t["8DkMEQ"]),
        G = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: n }),
        U = !h && !P && !R,
        z = r.useCallback(
            (e) => {
                e.target === e.currentTarget && R && requestAnimationFrame(() => B(!1));
            },
            [R],
        ),
        W = () =>
            (0, l.jsx)(u.DUT, {
                className: s()(
                    v.wishlistButton,
                    v[A],
                    {
                        [v.variantDefault]: "default" === k,
                        [v.variantSecondaryOverlay]: "overlay-secondary" === k,
                        [v.disabled]: h,
                    },
                    i,
                ),
                innerRef: L,
                onClick: H,
                "aria-label": G,
                "aria-pressed": P,
                "aria-busy": E,
                "aria-disabled": h,
                children: V.enabled
                    ? (0, l.jsx)(N, { colorClass: void 0 ?? F, size: C })
                    : (0, l.jsxs)("div", {
                          className: s()(v.iconContainer, U && v.canAnimate),
                          children: [
                              (0, l.jsx)("span", {
                                  className: s()(v.iconWrapper, U && v.canHover),
                                  children: (0, l.jsx)(N, { colorClass: void 0 ?? F, size: C }),
                              }),
                              (0, l.jsx)("span", {
                                  className: s()(v.animationOverlay, R && v.clickAnimation),
                                  onAnimationEnd: z,
                                  children: (0, l.jsx)(u.C3E, { size: C }),
                              }),
                          ],
                      }),
            });
    return (b || P) && null != T
        ? w && !h
            ? (0, l.jsx)(c.un, { title: f.intl.string(f.t["47Rhc3"]), body: f.intl.string(f.t.PXjA0b), children: W() })
            : (0, l.jsx)(c.m_, { text: h ? f.intl.string(f.t["50TX9k"]) : D, ariaHidden: !h, children: W() })
        : null;
}

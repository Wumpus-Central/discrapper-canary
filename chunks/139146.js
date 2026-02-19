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
    x = a(379848),
    h = a(661492),
    m = a(287809),
    b = a(466459),
    p = a(620434),
    g = a(49999),
    f = a(985018),
    j = a(394236);
let v = { sm: "xs", md: "refresh_sm" },
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
            variant: A = "default",
            size: k = "md",
        } = e,
        C = v[k],
        [I, S] = (0, x.kn)([d.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        T = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        w = I === d.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: V } = r.useContext(u.CZY),
        {
            isWishlisted: P,
            isBusy: O,
            handleToggle: E,
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
                    S(g.i.USER_DISMISS));
            },
            onError: () => {
                (0, u.showToast)((0, u.createToast)(f.intl.string(f.t.F8FvUy), u.ToastType.FAILURE)),
                    u.ORC.announce(f.intl.string(f.t.F8FvUy));
            },
        }),
        L = r.useRef(null),
        [R, M] = r.useState(!1),
        B = P && !R,
        F = B ? u.C3E : u.yhu,
        N = s()(j.normalIconColor, B && j.wishlistedOrAnimating);
    r.useEffect(() => {
        M(!1);
    }, [t]);
    let D = r.useCallback(
            (e) => {
                e.stopPropagation(), h || (_?.(), P || V.enabled ? P && R && M(!1) : M(!0), E());
            },
            [h, _, P, V.enabled, R, E],
        ),
        H = P ? f.intl.string(f.t.yr9TTf) : f.intl.string(f.t["8DkMEQ"]),
        G = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: n }),
        U = !h && !P && !R,
        z = r.useCallback(
            (e) => {
                e.target === e.currentTarget && R && requestAnimationFrame(() => M(!1));
            },
            [R],
        ),
        W = () =>
            (0, l.jsx)(u.DUT, {
                className: s()(
                    j.wishlistButton,
                    j[k],
                    {
                        [j.variantDefault]: "default" === A,
                        [j.variantSecondaryOverlay]: "overlay-secondary" === A,
                        [j.disabled]: h,
                    },
                    i,
                ),
                innerRef: L,
                onClick: D,
                "aria-label": G,
                "aria-pressed": P,
                "aria-busy": O,
                "aria-disabled": h,
                children: V.enabled
                    ? (0, l.jsx)(F, { colorClass: void 0 ?? N, size: C })
                    : (0, l.jsxs)("div", {
                          className: s()(j.iconContainer, U && j.canAnimate),
                          children: [
                              (0, l.jsx)("span", {
                                  className: s()(j.iconWrapper, U && j.canHover),
                                  children: (0, l.jsx)(F, { colorClass: void 0 ?? N, size: C }),
                              }),
                              (0, l.jsx)("span", {
                                  className: s()(j.animationOverlay, R && j.clickAnimation),
                                  onAnimationEnd: z,
                                  children: (0, l.jsx)(u.C3E, { size: C }),
                              }),
                          ],
                      }),
            });
    return (b || P) && null != T
        ? w && !h
            ? (0, l.jsx)(c.un, { title: f.intl.string(f.t["47Rhc3"]), body: f.intl.string(f.t.PXjA0b), children: W() })
            : (0, l.jsx)(c.m_, { text: h ? f.intl.string(f.t["50TX9k"]) : H, ariaHidden: !h, children: W() })
        : null;
}

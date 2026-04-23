"use strict";
n.d(t, { R: () => v, _: () => E });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    d = n(459192),
    o = n(990078),
    c = n(844222),
    u = n(926268),
    _ = n(559758),
    m = n(939249),
    p = n(661492),
    h = n(961350),
    g = n(841e3),
    f = n(758836),
    b = n(985018),
    A = n(672625);
let x = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    v = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                location: r,
                onError: l,
                isCardHovered: d = !0,
                onTrackClick: o,
                ...c
            } = e,
            u = (0, s.bG)([h.default], () => h.default.getId()),
            {
                isWishlisted: _,
                isBusy: m,
                isFirstTimeWishlister: b,
                handleToggle: A,
                specificProductOrVariant: x,
                isPurchased: v,
            } = (0, g.z)({ userId: u, product: t, selectedVariantIndex: n, location: r, onError: l }),
            I = i.useCallback(() => {
                o?.(_ ? f.sH.REMOVE_FROM_WISHLIST : f.sH.ADD_TO_WISHLIST), A();
            }, [_, A, o]),
            T = d || _;
        return v || !T
            ? null
            : (0, a.jsx)(E, {
                  skuId: x.skuId,
                  productName: x.name,
                  disabled: !(0, p.qq)(x),
                  isWishlisted: _,
                  isBusy: m,
                  isFirstTimeWishlister: b,
                  onClick: I,
                  ...c,
              });
    };
function E(e) {
    let {
            skuId: t,
            productName: n,
            className: r,
            disabled: s,
            variant: p = "default",
            size: h = "md",
            isWishlisted: g,
            isBusy: f,
            isFirstTimeWishlister: v,
            onClick: E,
            shouldShowTooltip: I,
            tooltipConfig: T = {},
        } = e,
        S = x[h],
        { reducedMotion: N } = i.useContext(c.C),
        C = i.useRef(null),
        [y, j] = i.useState(!1),
        w = g && !y,
        R = w ? u.C : _.y,
        L = l()(A.normalIconColor, w && A.wishlistedOrAnimating);
    i.useEffect(() => {
        j(!1);
    }, [t]);
    let M = i.useCallback(
            (e) => {
                e.stopPropagation(), s || (g || N.enabled ? g && y && j(!1) : j(!0), E());
            },
            [s, g, N.enabled, y, E],
        ),
        O = !s && !g && !y,
        P = i.useCallback(
            (e) => {
                e.target === e.currentTarget && y && requestAnimationFrame(() => j(!1));
            },
            [y],
        ),
        k = () => {
            var e;
            let t = b.intl.formatToPlainString(b.t["7kFjeK"], { productName: n });
            return (0, a.jsx)(m.D, {
                className: l()(
                    A.wishlistButton,
                    A[h],
                    {
                        [A.variantDefault]: "default" === p,
                        [A.variantSecondary]: "secondary" === p,
                        [A.variantSecondaryOverlay]: "overlay-secondary" === p,
                        [A.disabled]: s,
                    },
                    r,
                ),
                innerRef: C,
                onClick: M,
                "aria-label": t,
                "aria-pressed": g,
                "aria-busy": f,
                "aria-disabled": s,
                children: N.enabled
                    ? (0, a.jsx)(R, { colorClass: e ?? L, size: S })
                    : (0, a.jsxs)("div", {
                          className: l()(A.iconContainer, O && A.canAnimate),
                          children: [
                              (0, a.jsx)("span", {
                                  className: l()(A.iconWrapper, O && A.canHover),
                                  children: (0, a.jsx)(R, { colorClass: e ?? L, size: S }),
                              }),
                              (0, a.jsx)("span", {
                                  className: l()(A.animationOverlay, y && A.clickAnimation),
                                  onAnimationEnd: P,
                                  children: (0, a.jsx)(u.C, { size: S }),
                              }),
                          ],
                      }),
            });
        };
    if (v && !s) {
        let e = T.firstTimeTitle ?? b.intl.string(b.t["47Rhc3"]),
            t = T.firstTimeBody ?? b.intl.string(b.t.PXjA0b);
        return (0, a.jsx)(d.u, { title: e, body: t, shouldShow: I, children: k() });
    }
    let D = s
        ? (T.disabled ?? b.intl.string(b.t["50TX9k"]))
        : g
          ? (T.remove ?? b.intl.string(b.t.yr9TTf))
          : (T.add ?? b.intl.string(b.t["8DkMEQ"]));
    return (0, a.jsx)(o.m, { text: D, ariaHidden: !s, shouldShow: I, children: k() });
}

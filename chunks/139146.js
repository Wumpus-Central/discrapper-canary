"use strict";
n.d(t, { R: () => T, _: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(459192),
    u = n(990078),
    c = n(844222),
    d = n(926268),
    _ = n(559758),
    f = n(939249),
    h = n(661492),
    p = n(495544),
    E = n(113265),
    m = n(758836),
    g = n(375708),
    A = n(859633);
let I = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    T = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                location: s,
                onError: a,
                isCardHovered: l = !0,
                onTrackClick: u,
                ...c
            } = e,
            d = (0, o.bG)([p.default], () => p.default.getId()),
            {
                isWishlisted: _,
                isBusy: f,
                isFirstTimeWishlister: g,
                handleToggle: A,
                specificProductOrVariant: I,
                isPurchased: T,
            } = (0, E.z)({ userId: d, product: t, selectedVariantIndex: n, location: s, onError: a }),
            N = r.useCallback(() => {
                u?.(_ ? m.sH.REMOVE_FROM_WISHLIST : m.sH.ADD_TO_WISHLIST), A();
            }, [_, A, u]);
        return T
            ? null
            : (0, i.jsx)(S, {
                  skuId: I.skuId,
                  productName: I.name,
                  disabled: !(0, h.qq)(I),
                  isWishlisted: _,
                  isBusy: f,
                  isFirstTimeWishlister: g,
                  isVisuallyHidden: !l && !_,
                  onClick: N,
                  ...c,
              });
    };
function S(e) {
    let {
            skuId: t,
            productName: n,
            className: s,
            disabled: o,
            variant: h = "default",
            size: p = "md",
            isWishlisted: E,
            isBusy: m,
            isFirstTimeWishlister: T,
            isVisuallyHidden: S,
            onClick: N,
            shouldShowTooltip: y,
            tooltipConfig: C = {},
        } = e,
        v = I[p],
        { reducedMotion: O } = r.useContext(c.C),
        R = r.useRef(null),
        [b, D] = r.useState(!1),
        L = E && !b,
        w = L ? d.C : _.y,
        M = a()(A.normalIconColor, L && A.wishlistedOrAnimating);
    r.useEffect(() => {
        D(!1);
    }, [t]);
    let P = r.useCallback(
            (e) => {
                e.stopPropagation(), o || (E || O.enabled ? E && b && D(!1) : D(!0), N());
            },
            [o, E, O.enabled, b, N],
        ),
        x = !o && !E && !b,
        U = r.useCallback(
            (e) => {
                e.target === e.currentTarget && b && requestAnimationFrame(() => D(!1));
            },
            [b],
        ),
        k = () => {
            var e;
            let t = g.intl.formatToPlainString(g.t["7kFjeK"], { productName: n });
            return (0, i.jsx)(f.D, {
                className: a()(
                    A.wishlistButton,
                    A[p],
                    {
                        [A.variantDefault]: "default" === h,
                        [A.variantSecondary]: "secondary" === h,
                        [A.variantSecondaryOverlay]: "overlay-secondary" === h,
                        [A.disabled]: o,
                        [A.visuallyHidden]: S,
                    },
                    s,
                ),
                innerRef: R,
                onClick: P,
                "aria-label": t,
                "aria-pressed": E,
                "aria-busy": m,
                "aria-disabled": o,
                children: O.enabled
                    ? (0, i.jsx)(w, { colorClass: e ?? M, size: v })
                    : (0, i.jsxs)("div", {
                          className: a()(A.iconContainer, x && A.canAnimate),
                          children: [
                              (0, i.jsx)("span", {
                                  className: a()(A.iconWrapper, x && A.canHover),
                                  children: (0, i.jsx)(w, { colorClass: e ?? M, size: v }),
                              }),
                              (0, i.jsx)("span", {
                                  className: a()(A.animationOverlay, b && A.clickAnimation),
                                  onAnimationEnd: U,
                                  children: (0, i.jsx)(d.C, { size: v }),
                              }),
                          ],
                      }),
            });
        };
    if (T && !o) {
        let e = C.firstTimeTitle ?? g.intl.string(g.t["47Rhc3"]),
            t = C.firstTimeBody ?? g.intl.string(g.t.PXjA0b);
        return (0, i.jsx)(l.u, { title: e, body: t, shouldShow: y, children: k() });
    }
    let G = o
        ? (C.disabled ?? g.intl.string(g.t["50TX9k"]))
        : E
          ? (C.remove ?? g.intl.string(g.t.yr9TTf))
          : (C.add ?? g.intl.string(g.t["8DkMEQ"]));
    return (0, i.jsx)(u.m, { text: G, ariaHidden: !o, shouldShow: y, children: k() });
}

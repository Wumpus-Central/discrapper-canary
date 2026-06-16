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
    h = n(939249),
    f = n(661492),
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
                isBusy: h,
                isFirstTimeWishlister: g,
                handleToggle: A,
                specificProductOrVariant: I,
                isPurchased: T,
            } = (0, E.z)({ userId: d, product: t, selectedVariantIndex: n, location: s, onError: a }),
            y = r.useCallback(() => {
                u?.(_ ? m.sH.REMOVE_FROM_WISHLIST : m.sH.ADD_TO_WISHLIST), A();
            }, [_, A, u]);
        return T
            ? null
            : (0, i.jsx)(S, {
                  skuId: I.skuId,
                  productName: I.name,
                  disabled: !(0, f.qq)(I),
                  isWishlisted: _,
                  isBusy: h,
                  isFirstTimeWishlister: g,
                  isVisuallyHidden: !l && !_,
                  onClick: y,
                  ...c,
              });
    };
function S(e) {
    let {
            skuId: t,
            productName: n,
            className: s,
            disabled: o,
            variant: f = "default",
            size: p = "md",
            isWishlisted: E,
            isBusy: m,
            isFirstTimeWishlister: T,
            isVisuallyHidden: S,
            onClick: y,
            shouldShowTooltip: C,
            tooltipConfig: N = {},
        } = e,
        v = I[p],
        { reducedMotion: R } = r.useContext(c.C),
        O = r.useRef(null),
        [b, D] = r.useState(!1),
        L = E && !b,
        w = L ? d.C : _.y,
        M = a()(A.normalIconColor, L && A.wishlistedOrAnimating);
    r.useEffect(() => {
        D(!1);
    }, [t]);
    let P = r.useCallback(
            (e) => {
                e.stopPropagation(), o || (E || R.enabled ? E && b && D(!1) : D(!0), y());
            },
            [o, E, R.enabled, b, y],
        ),
        x = !o && !E && !b,
        k = r.useCallback(
            (e) => {
                e.target === e.currentTarget && b && requestAnimationFrame(() => D(!1));
            },
            [b],
        ),
        U = () => {
            var e;
            let t = g.intl.formatToPlainString(g.t["7kFjeK"], { productName: n });
            return (0, i.jsx)(h.D, {
                className: a()(
                    A.wishlistButton,
                    A[p],
                    {
                        [A.variantDefault]: "default" === f,
                        [A.variantSecondary]: "secondary" === f,
                        [A.variantSecondaryOverlay]: "overlay-secondary" === f,
                        [A.disabled]: o,
                        [A.visuallyHidden]: S,
                    },
                    s,
                ),
                innerRef: O,
                onClick: P,
                "aria-label": t,
                "aria-pressed": E,
                "aria-busy": m,
                "aria-disabled": o,
                children: R.enabled
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
                                  onAnimationEnd: k,
                                  children: (0, i.jsx)(d.C, { size: v }),
                              }),
                          ],
                      }),
            });
        };
    if (T && !o) {
        let e = N.firstTimeTitle ?? g.intl.string(g.t["47Rhc3"]),
            t = N.firstTimeBody ?? g.intl.string(g.t.PXjA0b);
        return (0, i.jsx)(l.u, { title: e, body: t, shouldShow: C, children: U() });
    }
    let G = o
        ? (N.disabled ?? g.intl.string(g.t["50TX9k"]))
        : E
          ? (N.remove ?? g.intl.string(g.t.yr9TTf))
          : (N.add ?? g.intl.string(g.t["8DkMEQ"]));
    return (0, i.jsx)(u.m, { text: G, ariaHidden: !o, shouldShow: C, children: U() });
}

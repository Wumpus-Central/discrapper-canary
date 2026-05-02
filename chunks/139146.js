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
            }, [_, A, u]),
            y = l || _;
        return T || !y
            ? null
            : (0, i.jsx)(S, {
                  skuId: I.skuId,
                  productName: I.name,
                  disabled: !(0, h.qq)(I),
                  isWishlisted: _,
                  isBusy: f,
                  isFirstTimeWishlister: g,
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
            onClick: S,
            shouldShowTooltip: N,
            tooltipConfig: y = {},
        } = e,
        C = I[p],
        { reducedMotion: v } = r.useContext(c.C),
        O = r.useRef(null),
        [R, b] = r.useState(!1),
        D = E && !R,
        L = D ? d.C : _.y,
        w = a()(A.normalIconColor, D && A.wishlistedOrAnimating);
    r.useEffect(() => {
        b(!1);
    }, [t]);
    let M = r.useCallback(
            (e) => {
                e.stopPropagation(), o || (E || v.enabled ? E && R && b(!1) : b(!0), S());
            },
            [o, E, v.enabled, R, S],
        ),
        P = !o && !E && !R,
        x = r.useCallback(
            (e) => {
                e.target === e.currentTarget && R && requestAnimationFrame(() => b(!1));
            },
            [R],
        ),
        U = () => {
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
                    },
                    s,
                ),
                innerRef: O,
                onClick: M,
                "aria-label": t,
                "aria-pressed": E,
                "aria-busy": m,
                "aria-disabled": o,
                children: v.enabled
                    ? (0, i.jsx)(L, { colorClass: e ?? w, size: C })
                    : (0, i.jsxs)("div", {
                          className: a()(A.iconContainer, P && A.canAnimate),
                          children: [
                              (0, i.jsx)("span", {
                                  className: a()(A.iconWrapper, P && A.canHover),
                                  children: (0, i.jsx)(L, { colorClass: e ?? w, size: C }),
                              }),
                              (0, i.jsx)("span", {
                                  className: a()(A.animationOverlay, R && A.clickAnimation),
                                  onAnimationEnd: x,
                                  children: (0, i.jsx)(d.C, { size: C }),
                              }),
                          ],
                      }),
            });
        };
    if (T && !o) {
        let e = y.firstTimeTitle ?? g.intl.string(g.t["47Rhc3"]),
            t = y.firstTimeBody ?? g.intl.string(g.t.PXjA0b);
        return (0, i.jsx)(l.u, { title: e, body: t, shouldShow: N, children: U() });
    }
    let k = o
        ? (y.disabled ?? g.intl.string(g.t["50TX9k"]))
        : E
          ? (y.remove ?? g.intl.string(g.t.yr9TTf))
          : (y.add ?? g.intl.string(g.t["8DkMEQ"]));
    return (0, i.jsx)(u.m, { text: k, ariaHidden: !o, shouldShow: N, children: U() });
}

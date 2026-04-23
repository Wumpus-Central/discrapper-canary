"use strict";
n.d(t, { R: () => T, _: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(459192),
    u = n(990078),
    c = n(844222),
    d = n(926268),
    _ = n(559758),
    f = n(939249),
    p = n(661492),
    h = n(961350),
    E = n(841e3),
    m = n(758836),
    g = n(985018),
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
            d = (0, o.bG)([h.default], () => h.default.getId()),
            {
                isWishlisted: _,
                isBusy: f,
                isFirstTimeWishlister: g,
                handleToggle: A,
                specificProductOrVariant: I,
                isPurchased: T,
            } = (0, E.z)({ userId: d, product: t, selectedVariantIndex: n, location: s, onError: a }),
            y = i.useCallback(() => {
                u?.(_ ? m.sH.REMOVE_FROM_WISHLIST : m.sH.ADD_TO_WISHLIST), A();
            }, [_, A, u]),
            N = l || _;
        return T || !N
            ? null
            : (0, r.jsx)(S, {
                  skuId: I.skuId,
                  productName: I.name,
                  disabled: !(0, p.qq)(I),
                  isWishlisted: _,
                  isBusy: f,
                  isFirstTimeWishlister: g,
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
            variant: p = "default",
            size: h = "md",
            isWishlisted: E,
            isBusy: m,
            isFirstTimeWishlister: T,
            onClick: S,
            shouldShowTooltip: y,
            tooltipConfig: N = {},
        } = e,
        v = I[h],
        { reducedMotion: C } = i.useContext(c.C),
        O = i.useRef(null),
        [R, b] = i.useState(!1),
        D = E && !R,
        L = D ? d.C : _.y,
        w = a()(A.normalIconColor, D && A.wishlistedOrAnimating);
    i.useEffect(() => {
        b(!1);
    }, [t]);
    let M = i.useCallback(
            (e) => {
                e.stopPropagation(), o || (E || C.enabled ? E && R && b(!1) : b(!0), S());
            },
            [o, E, C.enabled, R, S],
        ),
        P = !o && !E && !R,
        x = i.useCallback(
            (e) => {
                e.target === e.currentTarget && R && requestAnimationFrame(() => b(!1));
            },
            [R],
        ),
        k = () => {
            var e;
            let t = g.intl.formatToPlainString(g.t["7kFjeK"], { productName: n });
            return (0, r.jsx)(f.D, {
                className: a()(
                    A.wishlistButton,
                    A[h],
                    {
                        [A.variantDefault]: "default" === p,
                        [A.variantSecondary]: "secondary" === p,
                        [A.variantSecondaryOverlay]: "overlay-secondary" === p,
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
                children: C.enabled
                    ? (0, r.jsx)(L, { colorClass: e ?? w, size: v })
                    : (0, r.jsxs)("div", {
                          className: a()(A.iconContainer, P && A.canAnimate),
                          children: [
                              (0, r.jsx)("span", {
                                  className: a()(A.iconWrapper, P && A.canHover),
                                  children: (0, r.jsx)(L, { colorClass: e ?? w, size: v }),
                              }),
                              (0, r.jsx)("span", {
                                  className: a()(A.animationOverlay, R && A.clickAnimation),
                                  onAnimationEnd: x,
                                  children: (0, r.jsx)(d.C, { size: v }),
                              }),
                          ],
                      }),
            });
        };
    if (T && !o) {
        let e = N.firstTimeTitle ?? g.intl.string(g.t["47Rhc3"]),
            t = N.firstTimeBody ?? g.intl.string(g.t.PXjA0b);
        return (0, r.jsx)(l.u, { title: e, body: t, shouldShow: y, children: k() });
    }
    let U = o
        ? (N.disabled ?? g.intl.string(g.t["50TX9k"]))
        : E
          ? (N.remove ?? g.intl.string(g.t.yr9TTf))
          : (N.add ?? g.intl.string(g.t["8DkMEQ"]));
    return (0, r.jsx)(u.m, { text: U, ariaHidden: !o, shouldShow: y, children: k() });
}

n.d(t, { R: () => h, _: () => C });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    u = n(459192),
    o = n(990078),
    c = n(844222),
    d = n(926268),
    E = n(559758),
    _ = n(939249),
    A = n(661492),
    p = n(495544),
    I = n(113265),
    f = n(758836),
    S = n(985018),
    T = n(859633);
let m = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    h = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                location: r,
                onError: a,
                isCardHovered: u = !0,
                onTrackClick: o,
                ...c
            } = e,
            d = (0, s.bG)([p.default], () => p.default.getId()),
            {
                isWishlisted: E,
                isBusy: _,
                isFirstTimeWishlister: S,
                handleToggle: T,
                specificProductOrVariant: m,
                isPurchased: h,
            } = (0, I.z)({ userId: d, product: t, selectedVariantIndex: n, location: r, onError: a }),
            L = l.useCallback(() => {
                o?.(E ? f.sH.REMOVE_FROM_WISHLIST : f.sH.ADD_TO_WISHLIST), T();
            }, [E, T, o]),
            g = u || E;
        return h || !g
            ? null
            : (0, i.jsx)(C, {
                  skuId: m.skuId,
                  productName: m.name,
                  disabled: !(0, A.qq)(m),
                  isWishlisted: E,
                  isBusy: _,
                  isFirstTimeWishlister: S,
                  onClick: L,
                  ...c,
              });
    };
function C(e) {
    let {
            skuId: t,
            productName: n,
            className: r,
            disabled: s,
            variant: A = "default",
            size: p = "md",
            isWishlisted: I,
            isBusy: f,
            isFirstTimeWishlister: h,
            onClick: C,
            shouldShowTooltip: L,
            tooltipConfig: g = {},
        } = e,
        R = m[p],
        { reducedMotion: b } = l.useContext(c.C),
        O = l.useRef(null),
        [N, y] = l.useState(!1),
        D = I && !N,
        P = D ? d.C : E.y,
        G = a()(T.normalIconColor, D && T.wishlistedOrAnimating);
    l.useEffect(() => {
        y(!1);
    }, [t]);
    let U = l.useCallback(
            (e) => {
                e.stopPropagation(), s || (I || b.enabled ? I && N && y(!1) : y(!0), C());
            },
            [s, I, b.enabled, N, C],
        ),
        F = !s && !I && !N,
        v = l.useCallback(
            (e) => {
                e.target === e.currentTarget && N && requestAnimationFrame(() => y(!1));
            },
            [N],
        ),
        M = () => {
            var e;
            let t = S.intl.formatToPlainString(S.t["7kFjeK"], { productName: n });
            return (0, i.jsx)(_.D, {
                className: a()(
                    T.wishlistButton,
                    T[p],
                    {
                        [T.variantDefault]: "default" === A,
                        [T.variantSecondary]: "secondary" === A,
                        [T.variantSecondaryOverlay]: "overlay-secondary" === A,
                        [T.disabled]: s,
                    },
                    r,
                ),
                innerRef: O,
                onClick: U,
                "aria-label": t,
                "aria-pressed": I,
                "aria-busy": f,
                "aria-disabled": s,
                children: b.enabled
                    ? (0, i.jsx)(P, { colorClass: e ?? G, size: R })
                    : (0, i.jsxs)("div", {
                          className: a()(T.iconContainer, F && T.canAnimate),
                          children: [
                              (0, i.jsx)("span", {
                                  className: a()(T.iconWrapper, F && T.canHover),
                                  children: (0, i.jsx)(P, { colorClass: e ?? G, size: R }),
                              }),
                              (0, i.jsx)("span", {
                                  className: a()(T.animationOverlay, N && T.clickAnimation),
                                  onAnimationEnd: v,
                                  children: (0, i.jsx)(d.C, { size: R }),
                              }),
                          ],
                      }),
            });
        };
    if (h && !s) {
        let e = g.firstTimeTitle ?? S.intl.string(S.t["47Rhc3"]),
            t = g.firstTimeBody ?? S.intl.string(S.t.PXjA0b);
        return (0, i.jsx)(u.u, { title: e, body: t, shouldShow: L, children: M() });
    }
    let B = s
        ? (g.disabled ?? S.intl.string(S.t["50TX9k"]))
        : I
          ? (g.remove ?? S.intl.string(S.t.yr9TTf))
          : (g.add ?? S.intl.string(S.t["8DkMEQ"]));
    return (0, i.jsx)(o.m, { text: B, ariaHidden: !s, shouldShow: L, children: M() });
}

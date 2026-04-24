"use strict";
l.d(e, { R: () => F, _: () => v });
var i = l(627968),
    n = l(64700),
    r = l(503698),
    u = l.n(r),
    s = l(17928),
    a = l(459192),
    o = l(990078),
    d = l(844222),
    c = l(926268),
    f = l(559758),
    p = l(939249),
    A = l(661492),
    h = l(495544),
    I = l(113265),
    g = l(758836),
    y = l(985018),
    S = l(859633);
let m = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    F = (t) => {
        let {
                product: e,
                selectedVariantIndex: l,
                location: r,
                onError: u,
                isCardHovered: a = !0,
                onTrackClick: o,
                ...d
            } = t,
            c = (0, s.bG)([h.default], () => h.default.getId()),
            {
                isWishlisted: f,
                isBusy: p,
                isFirstTimeWishlister: y,
                handleToggle: S,
                specificProductOrVariant: m,
                isPurchased: F,
            } = (0, I.z)({ userId: c, product: e, selectedVariantIndex: l, location: r, onError: u }),
            _ = n.useCallback(() => {
                o?.(f ? g.sH.REMOVE_FROM_WISHLIST : g.sH.ADD_TO_WISHLIST), S();
            }, [f, S, o]),
            b = a || f;
        return F || !b
            ? null
            : (0, i.jsx)(v, {
                  skuId: m.skuId,
                  productName: m.name,
                  disabled: !(0, A.qq)(m),
                  isWishlisted: f,
                  isBusy: p,
                  isFirstTimeWishlister: y,
                  onClick: _,
                  ...d,
              });
    };
function v(t) {
    let {
            skuId: e,
            productName: l,
            className: r,
            disabled: s,
            variant: A = "default",
            size: h = "md",
            isWishlisted: I,
            isBusy: g,
            isFirstTimeWishlister: F,
            onClick: v,
            shouldShowTooltip: _,
            tooltipConfig: b = {},
        } = t,
        k = m[h],
        { reducedMotion: C } = n.useContext(d.C),
        E = n.useRef(null),
        [T, R] = n.useState(!1),
        x = I && !T,
        W = x ? c.C : f.y,
        w = u()(S.normalIconColor, x && S.wishlistedOrAnimating);
    n.useEffect(() => {
        R(!1);
    }, [e]);
    let G = n.useCallback(
            (t) => {
                t.stopPropagation(), s || (I || C.enabled ? I && T && R(!1) : R(!0), v());
            },
            [s, I, C.enabled, T, v],
        ),
        j = !s && !I && !T,
        O = n.useCallback(
            (t) => {
                t.target === t.currentTarget && T && requestAnimationFrame(() => R(!1));
            },
            [T],
        ),
        D = () => {
            let t = y.intl.formatToPlainString(y.t["7kFjeK"], { productName: l });
            return (0, i.jsx)(p.D, {
                className: u()(
                    S.wishlistButton,
                    S[h],
                    {
                        [S.variantDefault]: "default" === A,
                        [S.variantSecondary]: "secondary" === A,
                        [S.variantSecondaryOverlay]: "overlay-secondary" === A,
                        [S.disabled]: s,
                    },
                    r,
                ),
                innerRef: E,
                onClick: G,
                "aria-label": t,
                "aria-pressed": I,
                "aria-busy": g,
                "aria-disabled": s,
                children: C.enabled
                    ? (0, i.jsx)(W, { colorClass: void 0 ?? w, size: k })
                    : (0, i.jsxs)("div", {
                          className: u()(S.iconContainer, j && S.canAnimate),
                          children: [
                              (0, i.jsx)("span", {
                                  className: u()(S.iconWrapper, j && S.canHover),
                                  children: (0, i.jsx)(W, { colorClass: void 0 ?? w, size: k }),
                              }),
                              (0, i.jsx)("span", {
                                  className: u()(S.animationOverlay, T && S.clickAnimation),
                                  onAnimationEnd: O,
                                  children: (0, i.jsx)(c.C, { size: k }),
                              }),
                          ],
                      }),
            });
        };
    if (F && !s) {
        let t = b.firstTimeTitle ?? y.intl.string(y.t["47Rhc3"]),
            e = b.firstTimeBody ?? y.intl.string(y.t.PXjA0b);
        return (0, i.jsx)(a.u, { title: t, body: e, shouldShow: _, children: D() });
    }
    let K = s
        ? (b.disabled ?? y.intl.string(y.t["50TX9k"]))
        : I
          ? (b.remove ?? y.intl.string(y.t.yr9TTf))
          : (b.add ?? y.intl.string(y.t["8DkMEQ"]));
    return (0, i.jsx)(o.m, { text: K, ariaHidden: !s, shouldShow: _, children: D() });
}

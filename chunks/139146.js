"use strict";
n.d(t, { R: () => C, _: () => v });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    c = n(459192),
    o = n(990078),
    u = n(844222),
    d = n(926268),
    _ = n(559758),
    E = n(939249),
    m = n(661492),
    T = n(961350),
    f = n(841e3),
    A = n(758836),
    h = n(985018),
    S = n(672625);
let p = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    C = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                location: r,
                onError: s,
                isCardHovered: c = !0,
                onTrackClick: o,
                ...u
            } = e,
            d = (0, a.bG)([T.default], () => T.default.getId()),
            {
                isWishlisted: _,
                isBusy: E,
                isFirstTimeWishlister: h,
                handleToggle: S,
                specificProductOrVariant: p,
                isPurchased: C,
            } = (0, f.z)({ userId: d, product: t, selectedVariantIndex: n, location: r, onError: s }),
            x = l.useCallback(() => {
                o?.(_ ? A.sH.REMOVE_FROM_WISHLIST : A.sH.ADD_TO_WISHLIST), S();
            }, [_, S, o]),
            b = c || _;
        return C || !b
            ? null
            : (0, i.jsx)(v, {
                  skuId: p.skuId,
                  productName: p.name,
                  disabled: !(0, m.qq)(p),
                  isWishlisted: _,
                  isBusy: E,
                  isFirstTimeWishlister: h,
                  onClick: x,
                  ...u,
              });
    };
function v(e) {
    let {
            skuId: t,
            productName: n,
            className: r,
            disabled: a,
            variant: m = "default",
            size: T = "md",
            isWishlisted: f,
            isBusy: A,
            isFirstTimeWishlister: C,
            onClick: v,
            shouldShowTooltip: x,
            tooltipConfig: b = {},
        } = e,
        I = p[T],
        { reducedMotion: g } = l.useContext(u.C),
        H = l.useRef(null),
        [O, R] = l.useState(!1),
        N = f && !O,
        k = N ? d.C : _.y,
        M = s()(S.normalIconColor, N && S.wishlistedOrAnimating);
    l.useEffect(() => {
        R(!1);
    }, [t]);
    let y = l.useCallback(
            (e) => {
                e.stopPropagation(), a || (f || g.enabled ? f && O && R(!1) : R(!0), v());
            },
            [a, f, g.enabled, O, v],
        ),
        j = !a && !f && !O,
        D = l.useCallback(
            (e) => {
                e.target === e.currentTarget && O && requestAnimationFrame(() => R(!1));
            },
            [O],
        ),
        P = () => {
            let e = h.intl.formatToPlainString(h.t["7kFjeK"], { productName: n });
            return (0, i.jsx)(E.D, {
                className: s()(
                    S.wishlistButton,
                    S[T],
                    {
                        [S.variantDefault]: "default" === m,
                        [S.variantSecondary]: "secondary" === m,
                        [S.variantSecondaryOverlay]: "overlay-secondary" === m,
                        [S.disabled]: a,
                    },
                    r,
                ),
                innerRef: H,
                onClick: y,
                "aria-label": e,
                "aria-pressed": f,
                "aria-busy": A,
                "aria-disabled": a,
                children: g.enabled
                    ? (0, i.jsx)(k, { colorClass: void 0 ?? M, size: I })
                    : (0, i.jsxs)("div", {
                          className: s()(S.iconContainer, j && S.canAnimate),
                          children: [
                              (0, i.jsx)("span", {
                                  className: s()(S.iconWrapper, j && S.canHover),
                                  children: (0, i.jsx)(k, { colorClass: void 0 ?? M, size: I }),
                              }),
                              (0, i.jsx)("span", {
                                  className: s()(S.animationOverlay, O && S.clickAnimation),
                                  onAnimationEnd: D,
                                  children: (0, i.jsx)(d.C, { size: I }),
                              }),
                          ],
                      }),
            });
        };
    if (C && !a) {
        let e = b.firstTimeTitle ?? h.intl.string(h.t["47Rhc3"]),
            t = b.firstTimeBody ?? h.intl.string(h.t.PXjA0b);
        return (0, i.jsx)(c.u, { title: e, body: t, shouldShow: x, children: P() });
    }
    let w = a
        ? (b.disabled ?? h.intl.string(h.t["50TX9k"]))
        : f
          ? (b.remove ?? h.intl.string(h.t.yr9TTf))
          : (b.add ?? h.intl.string(h.t["8DkMEQ"]));
    return (0, i.jsx)(o.m, { text: w, ariaHidden: !a, shouldShow: x, children: P() });
}

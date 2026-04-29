l.d(t, { R: () => S, _: () => C });
var i = l(627968),
    n = l(64700),
    s = l(503698),
    r = l.n(s),
    u = l(17928),
    a = l(459192),
    d = l(990078),
    o = l(844222),
    c = l(926268),
    f = l(559758),
    h = l(939249),
    A = l(661492),
    g = l(495544),
    m = l(113265),
    p = l(758836),
    I = l(985018),
    b = l(859633);
let v = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    S = (e) => {
        let {
                product: t,
                selectedVariantIndex: l,
                location: s,
                onError: r,
                isCardHovered: a = !0,
                onTrackClick: d,
                ...o
            } = e,
            c = (0, u.bG)([g.default], () => g.default.getId()),
            {
                isWishlisted: f,
                isBusy: h,
                isFirstTimeWishlister: I,
                handleToggle: b,
                specificProductOrVariant: v,
                isPurchased: S,
            } = (0, m.z)({ userId: c, product: t, selectedVariantIndex: l, location: s, onError: r }),
            k = n.useCallback(() => {
                d?.(f ? p.sH.REMOVE_FROM_WISHLIST : p.sH.ADD_TO_WISHLIST), b();
            }, [f, b, d]),
            y = a || f;
        return S || !y
            ? null
            : (0, i.jsx)(C, {
                  skuId: v.skuId,
                  productName: v.name,
                  disabled: !(0, A.qq)(v),
                  isWishlisted: f,
                  isBusy: h,
                  isFirstTimeWishlister: I,
                  onClick: k,
                  ...o,
              });
    };
function C(e) {
    let {
            skuId: t,
            productName: l,
            className: s,
            disabled: u,
            variant: A = "default",
            size: g = "md",
            isWishlisted: m,
            isBusy: p,
            isFirstTimeWishlister: S,
            onClick: C,
            shouldShowTooltip: k,
            tooltipConfig: y = {},
        } = e,
        E = v[g],
        { reducedMotion: T } = n.useContext(o.C),
        W = n.useRef(null),
        [_, x] = n.useState(!1),
        j = m && !_,
        F = j ? c.C : f.y,
        R = r()(b.normalIconColor, j && b.wishlistedOrAnimating);
    n.useEffect(() => {
        x(!1);
    }, [t]);
    let w = n.useCallback(
            (e) => {
                e.stopPropagation(), u || (m || T.enabled ? m && _ && x(!1) : x(!0), C());
            },
            [u, m, T.enabled, _, C],
        ),
        M = !u && !m && !_,
        O = n.useCallback(
            (e) => {
                e.target === e.currentTarget && _ && requestAnimationFrame(() => x(!1));
            },
            [_],
        ),
        H = () => {
            let e = I.intl.formatToPlainString(I.t["7kFjeK"], { productName: l });
            return (0, i.jsx)(h.D, {
                className: r()(
                    b.wishlistButton,
                    b[g],
                    {
                        [b.variantDefault]: "default" === A,
                        [b.variantSecondary]: "secondary" === A,
                        [b.variantSecondaryOverlay]: "overlay-secondary" === A,
                        [b.disabled]: u,
                    },
                    s,
                ),
                innerRef: W,
                onClick: w,
                "aria-label": e,
                "aria-pressed": m,
                "aria-busy": p,
                "aria-disabled": u,
                children: T.enabled
                    ? (0, i.jsx)(F, { colorClass: void 0 ?? R, size: E })
                    : (0, i.jsxs)("div", {
                          className: r()(b.iconContainer, M && b.canAnimate),
                          children: [
                              (0, i.jsx)("span", {
                                  className: r()(b.iconWrapper, M && b.canHover),
                                  children: (0, i.jsx)(F, { colorClass: void 0 ?? R, size: E }),
                              }),
                              (0, i.jsx)("span", {
                                  className: r()(b.animationOverlay, _ && b.clickAnimation),
                                  onAnimationEnd: O,
                                  children: (0, i.jsx)(c.C, { size: E }),
                              }),
                          ],
                      }),
            });
        };
    if (S && !u) {
        let e = y.firstTimeTitle ?? I.intl.string(I.t["47Rhc3"]),
            t = y.firstTimeBody ?? I.intl.string(I.t.PXjA0b);
        return (0, i.jsx)(a.u, { title: e, body: t, shouldShow: k, children: H() });
    }
    let P = u
        ? (y.disabled ?? I.intl.string(I.t["50TX9k"]))
        : m
          ? (y.remove ?? I.intl.string(I.t.yr9TTf))
          : (y.add ?? I.intl.string(I.t["8DkMEQ"]));
    return (0, i.jsx)(d.m, { text: P, ariaHidden: !u, shouldShow: k, children: H() });
}

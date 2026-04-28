i.d(t, { R: () => _, _: () => v });
var l = i(627968),
    s = i(64700),
    n = i(503698),
    r = i.n(n),
    u = i(17928),
    a = i(459192),
    o = i(990078),
    d = i(844222),
    c = i(926268),
    h = i(559758),
    p = i(939249),
    f = i(661492),
    A = i(495544),
    b = i(113265),
    I = i(758836),
    g = i(985018),
    m = i(859633);
let E = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    _ = (e) => {
        let {
                product: t,
                selectedVariantIndex: i,
                location: n,
                onError: r,
                isCardHovered: a = !0,
                onTrackClick: o,
                ...d
            } = e,
            c = (0, u.bG)([A.default], () => A.default.getId()),
            {
                isWishlisted: h,
                isBusy: p,
                isFirstTimeWishlister: g,
                handleToggle: m,
                specificProductOrVariant: E,
                isPurchased: _,
            } = (0, b.z)({ userId: c, product: t, selectedVariantIndex: i, location: n, onError: r }),
            C = s.useCallback(() => {
                o?.(h ? I.sH.REMOVE_FROM_WISHLIST : I.sH.ADD_TO_WISHLIST), m();
            }, [h, m, o]),
            O = a || h;
        return _ || !O
            ? null
            : (0, l.jsx)(v, {
                  skuId: E.skuId,
                  productName: E.name,
                  disabled: !(0, f.qq)(E),
                  isWishlisted: h,
                  isBusy: p,
                  isFirstTimeWishlister: g,
                  onClick: C,
                  ...d,
              });
    };
function v(e) {
    let {
            skuId: t,
            productName: i,
            className: n,
            disabled: u,
            variant: f = "default",
            size: A = "md",
            isWishlisted: b,
            isBusy: I,
            isFirstTimeWishlister: _,
            onClick: v,
            shouldShowTooltip: C,
            tooltipConfig: O = {},
        } = e,
        T = E[A],
        { reducedMotion: S } = s.useContext(d.C),
        y = s.useRef(null),
        [L, M] = s.useState(!1),
        F = b && !L,
        N = F ? c.C : h.y,
        D = r()(m.normalIconColor, F && m.wishlistedOrAnimating);
    s.useEffect(() => {
        M(!1);
    }, [t]);
    let P = s.useCallback(
            (e) => {
                e.stopPropagation(), u || (b || S.enabled ? b && L && M(!1) : M(!0), v());
            },
            [u, b, S.enabled, L, v],
        ),
        R = !u && !b && !L,
        V = s.useCallback(
            (e) => {
                e.target === e.currentTarget && L && requestAnimationFrame(() => M(!1));
            },
            [L],
        ),
        j = () => {
            let e = g.intl.formatToPlainString(g.t["7kFjeK"], { productName: i });
            return (0, l.jsx)(p.D, {
                className: r()(
                    m.wishlistButton,
                    m[A],
                    {
                        [m.variantDefault]: "default" === f,
                        [m.variantSecondary]: "secondary" === f,
                        [m.variantSecondaryOverlay]: "overlay-secondary" === f,
                        [m.disabled]: u,
                    },
                    n,
                ),
                innerRef: y,
                onClick: P,
                "aria-label": e,
                "aria-pressed": b,
                "aria-busy": I,
                "aria-disabled": u,
                children: S.enabled
                    ? (0, l.jsx)(N, { colorClass: void 0 ?? D, size: T })
                    : (0, l.jsxs)("div", {
                          className: r()(m.iconContainer, R && m.canAnimate),
                          children: [
                              (0, l.jsx)("span", {
                                  className: r()(m.iconWrapper, R && m.canHover),
                                  children: (0, l.jsx)(N, { colorClass: void 0 ?? D, size: T }),
                              }),
                              (0, l.jsx)("span", {
                                  className: r()(m.animationOverlay, L && m.clickAnimation),
                                  onAnimationEnd: V,
                                  children: (0, l.jsx)(c.C, { size: T }),
                              }),
                          ],
                      }),
            });
        };
    if (_ && !u) {
        let e = O.firstTimeTitle ?? g.intl.string(g.t["47Rhc3"]),
            t = O.firstTimeBody ?? g.intl.string(g.t.PXjA0b);
        return (0, l.jsx)(a.u, { title: e, body: t, shouldShow: C, children: j() });
    }
    let k = u
        ? (O.disabled ?? g.intl.string(g.t["50TX9k"]))
        : b
          ? (O.remove ?? g.intl.string(g.t.yr9TTf))
          : (O.add ?? g.intl.string(g.t["8DkMEQ"]));
    return (0, l.jsx)(o.m, { text: k, ariaHidden: !u, shouldShow: C, children: j() });
}

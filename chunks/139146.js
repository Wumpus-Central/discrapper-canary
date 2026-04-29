i.d(t, { R: () => b, _: () => S });
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(17928),
    u = i(459192),
    o = i(990078),
    d = i(844222),
    c = i(926268),
    p = i(559758),
    A = i(939249),
    h = i(661492),
    E = i(495544),
    _ = i(113265),
    m = i(758836),
    f = i(985018),
    I = i(859633);
let g = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    b = (e) => {
        let {
                product: t,
                selectedVariantIndex: i,
                location: r,
                onError: s,
                isCardHovered: u = !0,
                onTrackClick: o,
                ...d
            } = e,
            c = (0, a.bG)([E.default], () => E.default.getId()),
            {
                isWishlisted: p,
                isBusy: A,
                isFirstTimeWishlister: f,
                handleToggle: I,
                specificProductOrVariant: g,
                isPurchased: b,
            } = (0, _.z)({ userId: c, product: t, selectedVariantIndex: i, location: r, onError: s }),
            C = l.useCallback(() => {
                o?.(p ? m.sH.REMOVE_FROM_WISHLIST : m.sH.ADD_TO_WISHLIST), I();
            }, [p, I, o]),
            T = u || p;
        return b || !T
            ? null
            : (0, n.jsx)(S, {
                  skuId: g.skuId,
                  productName: g.name,
                  disabled: !(0, h.qq)(g),
                  isWishlisted: p,
                  isBusy: A,
                  isFirstTimeWishlister: f,
                  onClick: C,
                  ...d,
              });
    };
function S(e) {
    let {
            skuId: t,
            productName: i,
            className: r,
            disabled: a,
            variant: h = "default",
            size: E = "md",
            isWishlisted: _,
            isBusy: m,
            isFirstTimeWishlister: b,
            onClick: S,
            shouldShowTooltip: C,
            tooltipConfig: T = {},
        } = e,
        y = g[E],
        { reducedMotion: N } = l.useContext(d.C),
        v = l.useRef(null),
        [L, R] = l.useState(!1),
        O = _ && !L,
        P = O ? c.C : p.y,
        M = s()(I.normalIconColor, O && I.wishlistedOrAnimating);
    l.useEffect(() => {
        R(!1);
    }, [t]);
    let x = l.useCallback(
            (e) => {
                e.stopPropagation(), a || (_ || N.enabled ? _ && L && R(!1) : R(!0), S());
            },
            [a, _, N.enabled, L, S],
        ),
        j = !a && !_ && !L,
        D = l.useCallback(
            (e) => {
                e.target === e.currentTarget && L && requestAnimationFrame(() => R(!1));
            },
            [L],
        ),
        B = () => {
            var e;
            let t = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: i });
            return (0, n.jsx)(A.D, {
                className: s()(
                    I.wishlistButton,
                    I[E],
                    {
                        [I.variantDefault]: "default" === h,
                        [I.variantSecondary]: "secondary" === h,
                        [I.variantSecondaryOverlay]: "overlay-secondary" === h,
                        [I.disabled]: a,
                    },
                    r,
                ),
                innerRef: v,
                onClick: x,
                "aria-label": t,
                "aria-pressed": _,
                "aria-busy": m,
                "aria-disabled": a,
                children: N.enabled
                    ? (0, n.jsx)(P, { colorClass: e ?? M, size: y })
                    : (0, n.jsxs)("div", {
                          className: s()(I.iconContainer, j && I.canAnimate),
                          children: [
                              (0, n.jsx)("span", {
                                  className: s()(I.iconWrapper, j && I.canHover),
                                  children: (0, n.jsx)(P, { colorClass: e ?? M, size: y }),
                              }),
                              (0, n.jsx)("span", {
                                  className: s()(I.animationOverlay, L && I.clickAnimation),
                                  onAnimationEnd: D,
                                  children: (0, n.jsx)(c.C, { size: y }),
                              }),
                          ],
                      }),
            });
        };
    if (b && !a) {
        let e = T.firstTimeTitle ?? f.intl.string(f.t["47Rhc3"]),
            t = T.firstTimeBody ?? f.intl.string(f.t.PXjA0b);
        return (0, n.jsx)(u.u, { title: e, body: t, shouldShow: C, children: B() });
    }
    let w = a
        ? (T.disabled ?? f.intl.string(f.t["50TX9k"]))
        : _
          ? (T.remove ?? f.intl.string(f.t.yr9TTf))
          : (T.add ?? f.intl.string(f.t["8DkMEQ"]));
    return (0, n.jsx)(o.m, { text: w, ariaHidden: !a, shouldShow: C, children: B() });
}

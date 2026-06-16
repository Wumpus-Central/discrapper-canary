i.d(e, { R: () => T, _: () => y });
var r = i(627968),
    s = i(64700),
    l = i(503698),
    n = i.n(l),
    a = i(17928),
    u = i(459192),
    o = i(990078),
    d = i(844222),
    c = i(926268),
    p = i(559758),
    S = i(939249),
    h = i(661492),
    I = i(495544),
    f = i(113265),
    A = i(758836),
    _ = i(375708),
    E = i(859633);
let m = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    T = (t) => {
        let {
                product: e,
                selectedVariantIndex: i,
                location: l,
                onError: n,
                isCardHovered: u = !0,
                onTrackClick: o,
                ...d
            } = t,
            c = (0, a.bG)([I.default], () => I.default.getId()),
            {
                isWishlisted: p,
                isBusy: S,
                isFirstTimeWishlister: _,
                handleToggle: E,
                specificProductOrVariant: m,
                isPurchased: T,
            } = (0, f.z)({ userId: c, product: e, selectedVariantIndex: i, location: l, onError: n }),
            g = s.useCallback(() => {
                o?.(p ? A.sH.REMOVE_FROM_WISHLIST : A.sH.ADD_TO_WISHLIST), E();
            }, [p, E, o]);
        return T
            ? null
            : (0, r.jsx)(y, {
                  skuId: m.skuId,
                  productName: m.name,
                  disabled: !(0, h.qq)(m),
                  isWishlisted: p,
                  isBusy: S,
                  isFirstTimeWishlister: _,
                  isVisuallyHidden: !u && !p,
                  onClick: g,
                  ...d,
              });
    };
function y(t) {
    let {
            skuId: e,
            productName: i,
            className: l,
            disabled: a,
            variant: h = "default",
            size: I = "md",
            isWishlisted: f,
            isBusy: A,
            isFirstTimeWishlister: T,
            isVisuallyHidden: y,
            onClick: g,
            shouldShowTooltip: R,
            tooltipConfig: k = {},
        } = t,
        C = m[I],
        { reducedMotion: v } = s.useContext(d.C),
        w = s.useRef(null),
        [L, F] = s.useState(!1),
        O = f && !L,
        U = O ? c.C : p.y,
        b = n()(E.normalIconColor, O && E.wishlistedOrAnimating);
    s.useEffect(() => {
        F(!1);
    }, [e]);
    let W = s.useCallback(
            (t) => {
                t.stopPropagation(), a || (f || v.enabled ? f && L && F(!1) : F(!0), g());
            },
            [a, f, v.enabled, L, g],
        ),
        H = !a && !f && !L,
        P = s.useCallback(
            (t) => {
                t.target === t.currentTarget && L && requestAnimationFrame(() => F(!1));
            },
            [L],
        ),
        D = () => {
            var t;
            let e = _.intl.formatToPlainString(_.t["7kFjeK"], { productName: i });
            return (0, r.jsx)(S.D, {
                className: n()(
                    E.wishlistButton,
                    E[I],
                    {
                        [E.variantDefault]: "default" === h,
                        [E.variantSecondary]: "secondary" === h,
                        [E.variantSecondaryOverlay]: "overlay-secondary" === h,
                        [E.disabled]: a,
                        [E.visuallyHidden]: y,
                    },
                    l,
                ),
                innerRef: w,
                onClick: W,
                "aria-label": e,
                "aria-pressed": f,
                "aria-busy": A,
                "aria-disabled": a,
                children: v.enabled
                    ? (0, r.jsx)(U, { colorClass: t ?? b, size: C })
                    : (0, r.jsxs)("div", {
                          className: n()(E.iconContainer, H && E.canAnimate),
                          children: [
                              (0, r.jsx)("span", {
                                  className: n()(E.iconWrapper, H && E.canHover),
                                  children: (0, r.jsx)(U, { colorClass: t ?? b, size: C }),
                              }),
                              (0, r.jsx)("span", {
                                  className: n()(E.animationOverlay, L && E.clickAnimation),
                                  onAnimationEnd: P,
                                  children: (0, r.jsx)(c.C, { size: C }),
                              }),
                          ],
                      }),
            });
        };
    if (T && !a) {
        let t = k.firstTimeTitle ?? _.intl.string(_.t["47Rhc3"]),
            e = k.firstTimeBody ?? _.intl.string(_.t.PXjA0b);
        return (0, r.jsx)(u.u, { title: t, body: e, shouldShow: R, children: D() });
    }
    let M = a
        ? (k.disabled ?? _.intl.string(_.t["50TX9k"]))
        : f
          ? (k.remove ?? _.intl.string(_.t.yr9TTf))
          : (k.add ?? _.intl.string(_.t["8DkMEQ"]));
    return (0, r.jsx)(o.m, { text: M, ariaHidden: !a, shouldShow: R, children: D() });
}

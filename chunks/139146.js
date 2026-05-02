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
    h = i(939249),
    S = i(661492),
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
                isBusy: h,
                isFirstTimeWishlister: _,
                handleToggle: E,
                specificProductOrVariant: m,
                isPurchased: T,
            } = (0, f.z)({ userId: c, product: e, selectedVariantIndex: i, location: l, onError: n }),
            g = s.useCallback(() => {
                o?.(p ? A.sH.REMOVE_FROM_WISHLIST : A.sH.ADD_TO_WISHLIST), E();
            }, [p, E, o]),
            R = u || p;
        return T || !R
            ? null
            : (0, r.jsx)(y, {
                  skuId: m.skuId,
                  productName: m.name,
                  disabled: !(0, S.qq)(m),
                  isWishlisted: p,
                  isBusy: h,
                  isFirstTimeWishlister: _,
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
            variant: S = "default",
            size: I = "md",
            isWishlisted: f,
            isBusy: A,
            isFirstTimeWishlister: T,
            onClick: y,
            shouldShowTooltip: g,
            tooltipConfig: R = {},
        } = t,
        k = m[I],
        { reducedMotion: C } = s.useContext(d.C),
        v = s.useRef(null),
        [w, L] = s.useState(!1),
        F = f && !w,
        U = F ? c.C : p.y,
        b = n()(E.normalIconColor, F && E.wishlistedOrAnimating);
    s.useEffect(() => {
        L(!1);
    }, [e]);
    let O = s.useCallback(
            (t) => {
                t.stopPropagation(), a || (f || C.enabled ? f && w && L(!1) : L(!0), y());
            },
            [a, f, C.enabled, w, y],
        ),
        M = !a && !f && !w,
        W = s.useCallback(
            (t) => {
                t.target === t.currentTarget && w && requestAnimationFrame(() => L(!1));
            },
            [w],
        ),
        H = () => {
            var t;
            let e = _.intl.formatToPlainString(_.t["7kFjeK"], { productName: i });
            return (0, r.jsx)(h.D, {
                className: n()(
                    E.wishlistButton,
                    E[I],
                    {
                        [E.variantDefault]: "default" === S,
                        [E.variantSecondary]: "secondary" === S,
                        [E.variantSecondaryOverlay]: "overlay-secondary" === S,
                        [E.disabled]: a,
                    },
                    l,
                ),
                innerRef: v,
                onClick: O,
                "aria-label": e,
                "aria-pressed": f,
                "aria-busy": A,
                "aria-disabled": a,
                children: C.enabled
                    ? (0, r.jsx)(U, { colorClass: t ?? b, size: k })
                    : (0, r.jsxs)("div", {
                          className: n()(E.iconContainer, M && E.canAnimate),
                          children: [
                              (0, r.jsx)("span", {
                                  className: n()(E.iconWrapper, M && E.canHover),
                                  children: (0, r.jsx)(U, { colorClass: t ?? b, size: k }),
                              }),
                              (0, r.jsx)("span", {
                                  className: n()(E.animationOverlay, w && E.clickAnimation),
                                  onAnimationEnd: W,
                                  children: (0, r.jsx)(c.C, { size: k }),
                              }),
                          ],
                      }),
            });
        };
    if (T && !a) {
        let t = R.firstTimeTitle ?? _.intl.string(_.t["47Rhc3"]),
            e = R.firstTimeBody ?? _.intl.string(_.t.PXjA0b);
        return (0, r.jsx)(u.u, { title: t, body: e, shouldShow: g, children: H() });
    }
    let P = a
        ? (R.disabled ?? _.intl.string(_.t["50TX9k"]))
        : f
          ? (R.remove ?? _.intl.string(_.t.yr9TTf))
          : (R.add ?? _.intl.string(_.t["8DkMEQ"]));
    return (0, r.jsx)(o.m, { text: P, ariaHidden: !a, shouldShow: g, children: H() });
}

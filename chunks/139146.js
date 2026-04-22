"use strict";
a.d(t, { R: () => A, _: () => E });
var r = a(627968),
    l = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(311907),
    o = a(459192),
    d = a(990078),
    c = a(844222),
    u = a(926268),
    h = a(559758),
    p = a(939249),
    _ = a(661492),
    m = a(961350),
    b = a(841e3),
    g = a(758836),
    f = a(985018),
    x = a(859633);
let v = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    A = (e) => {
        let {
                product: t,
                selectedVariantIndex: a,
                location: n,
                onError: i,
                isCardHovered: o = !0,
                onTrackClick: d,
                ...c
            } = e,
            u = (0, s.bG)([m.default], () => m.default.getId()),
            {
                isWishlisted: h,
                isBusy: p,
                isFirstTimeWishlister: f,
                handleToggle: x,
                specificProductOrVariant: v,
                isPurchased: A,
            } = (0, b.z)({ userId: u, product: t, selectedVariantIndex: a, location: n, onError: i }),
            y = l.useCallback(() => {
                d?.(h ? g.sH.REMOVE_FROM_WISHLIST : g.sH.ADD_TO_WISHLIST), x();
            }, [h, x, d]),
            j = o || h;
        return A || !j
            ? null
            : (0, r.jsx)(E, {
                  skuId: v.skuId,
                  productName: v.name,
                  disabled: !(0, _.qq)(v),
                  isWishlisted: h,
                  isBusy: p,
                  isFirstTimeWishlister: f,
                  onClick: y,
                  ...c,
              });
    };
function E(e) {
    let {
            skuId: t,
            productName: a,
            className: n,
            disabled: s,
            variant: _ = "default",
            size: m = "md",
            isWishlisted: b,
            isBusy: g,
            isFirstTimeWishlister: A,
            onClick: E,
            shouldShowTooltip: y,
            tooltipConfig: j = {},
        } = e,
        I = v[m],
        { reducedMotion: S } = l.useContext(c.C),
        C = l.useRef(null),
        [T, w] = l.useState(!1),
        R = b && !T,
        k = R ? u.C : h.y,
        N = i()(x.normalIconColor, R && x.wishlistedOrAnimating);
    l.useEffect(() => {
        w(!1);
    }, [t]);
    let L = l.useCallback(
            (e) => {
                e.stopPropagation(), s || (b || S.enabled ? b && T && w(!1) : w(!0), E());
            },
            [s, b, S.enabled, T, E],
        ),
        O = !s && !b && !T,
        P = l.useCallback(
            (e) => {
                e.target === e.currentTarget && T && requestAnimationFrame(() => w(!1));
            },
            [T],
        ),
        M = () => {
            var e;
            let t = f.intl.formatToPlainString(f.t["7kFjeK"], { productName: a });
            return (0, r.jsx)(p.D, {
                className: i()(
                    x.wishlistButton,
                    x[m],
                    {
                        [x.variantDefault]: "default" === _,
                        [x.variantSecondary]: "secondary" === _,
                        [x.variantSecondaryOverlay]: "overlay-secondary" === _,
                        [x.disabled]: s,
                    },
                    n,
                ),
                innerRef: C,
                onClick: L,
                "aria-label": t,
                "aria-pressed": b,
                "aria-busy": g,
                "aria-disabled": s,
                children: S.enabled
                    ? (0, r.jsx)(k, { colorClass: e ?? N, size: I })
                    : (0, r.jsxs)("div", {
                          className: i()(x.iconContainer, O && x.canAnimate),
                          children: [
                              (0, r.jsx)("span", {
                                  className: i()(x.iconWrapper, O && x.canHover),
                                  children: (0, r.jsx)(k, { colorClass: e ?? N, size: I }),
                              }),
                              (0, r.jsx)("span", {
                                  className: i()(x.animationOverlay, T && x.clickAnimation),
                                  onAnimationEnd: P,
                                  children: (0, r.jsx)(u.C, { size: I }),
                              }),
                          ],
                      }),
            });
        };
    if (A && !s) {
        let e = j.firstTimeTitle ?? f.intl.string(f.t["47Rhc3"]),
            t = j.firstTimeBody ?? f.intl.string(f.t.PXjA0b);
        return (0, r.jsx)(o.u, { title: e, body: t, shouldShow: y, children: M() });
    }
    let V = s
        ? (j.disabled ?? f.intl.string(f.t["50TX9k"]))
        : b
          ? (j.remove ?? f.intl.string(f.t.yr9TTf))
          : (j.add ?? f.intl.string(f.t["8DkMEQ"]));
    return (0, r.jsx)(d.m, { text: V, ariaHidden: !s, shouldShow: y, children: M() });
}

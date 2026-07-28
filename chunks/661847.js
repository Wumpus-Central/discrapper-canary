n.d(t, { A: () => j });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(939249),
    c = n(820081),
    d = n(307301),
    C = n(661531),
    p = n(866665),
    I = n(260762),
    x = n(298072),
    g = n(317097),
    f = n(466459),
    A = n(623373),
    k = n(561769),
    m = n(758836),
    v = n(375708),
    _ = n(778697);
function h(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: u,
            wrap: c,
            overflowProps: d,
            onTrackClick: C,
        } = e,
        p = (0, x.Q)(t),
        {
            shownVariants: g,
            totalVariants: f,
            hasOverflow: k,
        } = i.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, A.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, d?.maxVariantsToShow]),
        m = i.useCallback(
            (e, n) => {
                e.stopPropagation(), (0, x.n)(t, n);
            },
            [t],
        ),
        v = i.useId(),
        h = (0, I.A)(`shop-variants-group-${t.storeListingId}-${v}`, o.Gl.HORIZONTAL);
    return 0 === g.length
        ? null
        : (0, r.jsx)(a.hD, {
              navigator: h,
              children: (0, r.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsxs)("div", {
                          className: l()({ [_.yZ]: u, [_.sz]: !u, [_.LV]: c }, _.lO),
                          ref: i,
                          ...a,
                          children: [
                              g.map((e, t) =>
                                  (0, r.jsx)(
                                      E,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === p,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: f - Math.abs(p - t),
                                          onVariantClick: m,
                                          onTrackClick: C,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != d &&
                                  k &&
                                  (0, r.jsx)(y, {
                                      zIndex: p >= d.maxVariantsToShow - 1 ? f + 1 : 0,
                                      isSelected: p >= d.maxVariantsToShow - 1,
                                      onOverflowClick: d.onClick,
                                      onTrackClick: C,
                                      storeListingId: t.storeListingId,
                                  }),
                          ],
                      });
                  },
              }),
          });
}
function E(e) {
    let {
            variant: t,
            variantIndex: n,
            isSelected: s,
            onVariantClick: o,
            onVariantEnter: c,
            onVariantExit: d,
            zIndex: C,
            onTrackClick: I,
        } = e,
        { onFocus: x, ...g } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: A } = (0, f.h)(t),
        k = i.useCallback(
            (e) => {
                I?.(m.sH.VARIANT_CLICK, n), o(e, n), x();
            },
            [o, x, n, I],
        ),
        h = A ? `${t.variantLabel}, ${v.intl.string(v.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(p.m, {
        text: v.intl.string(v.t["6cfuDj"]),
        shouldShow: A,
        ariaHidden: !0,
        children: (0, r.jsx)(u.D, {
            "aria-label": h,
            onClick: k,
            onMouseEnter: c,
            onMouseLeave: d,
            className: l()(_.bP, { [_.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: C },
            ...g,
            children: A && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, g.qt)(t.variantValue) && 0.3 > (0, g.OK)((0, g.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(c.B, { className: _.U, color: n ? C.A.colors.BLACK.css : C.A.colors.WHITE.css });
}
function y(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: o, onTrackClick: c } = e,
        { onFocus: C, ...p } = (0, a.rm)(`shop-variants-group-${o}-overflow`),
        I = i.useCallback(
            (e) => {
                e.stopPropagation(), c?.(m.sH.VARIANT_CLICK_MORE), s(e), C();
            },
            [s, C, c],
        );
    return (0, r.jsx)(u.D, {
        "aria-label": v.intl.string(v.t["+0zcgs"]),
        onClick: I,
        className: l()(_.bP, _.V3, { [_.wH]: n }),
        style: { zIndex: t },
        ...p,
        children: (0, r.jsx)(d.j, { className: _.ab, color: "white" }),
    });
}
let j = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: l,
            overflowProps: a,
            onTrackClick: o,
        } = e,
        u = (0, k.Vm)(t);
    return null != u && (0, A.B1)(u)
        ? (0, r.jsx)(h, {
              product: u,
              onVariantEnter: s,
              onVariantExit: l,
              isCollapsed: n,
              wrap: i,
              overflowProps: a,
              onTrackClick: o,
          })
        : null;
};

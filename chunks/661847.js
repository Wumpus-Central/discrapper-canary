r.d(t, { A: () => y });
var n = r(477900),
    i = r(582128),
    s = r(503698),
    l = r.n(s),
    a = r(837381),
    o = r(741918),
    u = r(939249),
    c = r(820081),
    d = r(307301),
    p = r(661531),
    g = r(866665),
    f = r(260762),
    I = r(298072),
    _ = r(317097),
    A = r(466459),
    C = r(623373),
    m = r(561769),
    v = r(758836),
    E = r(375708),
    h = r(699704);
function x(e) {
    let {
            product: t,
            onVariantEnter: r,
            onVariantExit: s,
            isCollapsed: u,
            wrap: c,
            overflowProps: d,
            onTrackClick: p,
        } = e,
        g = (0, I.Q)(t),
        {
            shownVariants: _,
            totalVariants: A,
            hasOverflow: m,
        } = i.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, C.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, d?.maxVariantsToShow]),
        v = i.useCallback(
            (e, r) => {
                e.stopPropagation(), (0, I.n)(t, r);
            },
            [t],
        ),
        E = i.useId(),
        x = (0, f.A)(`shop-variants-group-${t.storeListingId}-${E}`, o.Gl.HORIZONTAL);
    return 0 === _.length
        ? null
        : (0, n.jsx)(a.hD, {
              navigator: x,
              children: (0, n.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, n.jsxs)("div", {
                          className: l()({ [h.yZ]: u, [h.sz]: !u, [h.LV]: c }, h.lO),
                          ref: i,
                          ...a,
                          children: [
                              _.map((e, t) =>
                                  (0, n.jsx)(
                                      R,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === g,
                                          onVariantEnter: () => r(t),
                                          onVariantExit: s,
                                          zIndex: A - Math.abs(g - t),
                                          onVariantClick: v,
                                          onTrackClick: p,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != d &&
                                  m &&
                                  (0, n.jsx)(b, {
                                      zIndex: g >= d.maxVariantsToShow - 1 ? A + 1 : 0,
                                      isSelected: g >= d.maxVariantsToShow - 1,
                                      onOverflowClick: d.onClick,
                                      onTrackClick: p,
                                      storeListingId: t.storeListingId,
                                  }),
                          ],
                      });
                  },
              }),
          });
}
function R(e) {
    let {
            variant: t,
            variantIndex: r,
            isSelected: s,
            onVariantClick: o,
            onVariantEnter: c,
            onVariantExit: d,
            zIndex: p,
            onTrackClick: f,
        } = e,
        { onFocus: I, ..._ } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: C } = (0, A.h)(t),
        m = i.useCallback(
            (e) => {
                f?.(v.sH.VARIANT_CLICK, r), o(e, r), I();
            },
            [o, I, r, f],
        ),
        x = C ? `${t.variantLabel}, ${E.intl.string(E.t["6cfuDj"])}` : t.variantLabel;
    return (0, n.jsx)(g.m, {
        text: E.intl.string(E.t["6cfuDj"]),
        shouldShow: C,
        ariaHidden: !0,
        children: (0, n.jsx)(u.D, {
            "aria-label": x,
            onClick: m,
            onMouseEnter: c,
            onMouseLeave: d,
            className: l()(h.bP, { [h.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: p },
            ..._,
            children: C && (0, n.jsx)(k, { variant: t }),
        }),
    });
}
function k(e) {
    let { variant: t } = e,
        r = i.useMemo(() => (0, _.qt)(t.variantValue) && 0.3 > (0, _.OK)((0, _.LX)(t.variantValue)), [t.variantValue]);
    return (0, n.jsx)(c.B, { className: h.U, color: r ? p.A.colors.BLACK.css : p.A.colors.WHITE.css });
}
function b(e) {
    let { zIndex: t, isSelected: r, onOverflowClick: s, storeListingId: o, onTrackClick: c } = e,
        { onFocus: p, ...g } = (0, a.rm)(`shop-variants-group-${o}-overflow`),
        f = i.useCallback(
            (e) => {
                e.stopPropagation(), c?.(v.sH.VARIANT_CLICK_MORE), s(e), p();
            },
            [s, p, c],
        );
    return (0, n.jsx)(u.D, {
        "aria-label": E.intl.string(E.t["+0zcgs"]),
        onClick: f,
        className: l()(h.bP, h.V3, { [h.wH]: r }),
        style: { zIndex: t },
        ...g,
        children: (0, n.jsx)(d.j, { className: h.ab, color: "white" }),
    });
}
let y = function (e) {
    let {
            skuId: t,
            isCollapsed: r = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: l,
            overflowProps: a,
            onTrackClick: o,
        } = e,
        u = (0, m.Vm)(t);
    return null != u && (0, C.B1)(u)
        ? (0, n.jsx)(x, {
              product: u,
              onVariantEnter: s,
              onVariantExit: l,
              isCollapsed: r,
              wrap: i,
              overflowProps: a,
              onTrackClick: o,
          })
        : null;
};

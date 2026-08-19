n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(939249),
    c = n(820081),
    d = n(307301),
    p = n(661531),
    g = n(866665),
    I = n(260762),
    _ = n(298072),
    C = n(317097),
    A = n(466459),
    f = n(623373),
    m = n(561769),
    E = n(758836),
    h = n(375708),
    v = n(778697);
function x(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: u,
            wrap: c,
            overflowProps: d,
            onTrackClick: p,
        } = e,
        g = (0, _.Q)(t),
        {
            shownVariants: C,
            totalVariants: A,
            hasOverflow: m,
        } = i.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, f.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, d?.maxVariantsToShow]),
        E = i.useCallback(
            (e, n) => {
                e.stopPropagation(), (0, _.n)(t, n);
            },
            [t],
        ),
        h = i.useId(),
        x = (0, I.A)(`shop-variants-group-${t.storeListingId}-${h}`, o.Gl.HORIZONTAL);
    return 0 === C.length
        ? null
        : (0, r.jsx)(a.hD, {
              navigator: x,
              children: (0, r.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsxs)("div", {
                          className: l()({ [v.yZ]: u, [v.sz]: !u, [v.LV]: c }, v.lO),
                          ref: i,
                          ...a,
                          children: [
                              C.map((e, t) =>
                                  (0, r.jsx)(
                                      R,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === g,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: A - Math.abs(g - t),
                                          onVariantClick: E,
                                          onTrackClick: p,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != d &&
                                  m &&
                                  (0, r.jsx)(b, {
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
            variantIndex: n,
            isSelected: s,
            onVariantClick: o,
            onVariantEnter: c,
            onVariantExit: d,
            zIndex: p,
            onTrackClick: I,
        } = e,
        { onFocus: _, ...C } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: f } = (0, A.h)(t),
        m = i.useCallback(
            (e) => {
                I?.(E.sH.VARIANT_CLICK, n), o(e, n), _();
            },
            [o, _, n, I],
        ),
        x = f ? `${t.variantLabel}, ${h.intl.string(h.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(g.m, {
        text: h.intl.string(h.t["6cfuDj"]),
        shouldShow: f,
        ariaHidden: !0,
        children: (0, r.jsx)(u.D, {
            "aria-label": x,
            onClick: m,
            onMouseEnter: c,
            onMouseLeave: d,
            className: l()(v.bP, { [v.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: p },
            ...C,
            children: f && (0, r.jsx)(k, { variant: t }),
        }),
    });
}
function k(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, C.qt)(t.variantValue) && 0.3 > (0, C.OK)((0, C.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(c.B, { className: v.U, color: n ? p.A.colors.BLACK.css : p.A.colors.WHITE.css });
}
function b(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: o, onTrackClick: c } = e,
        { onFocus: p, ...g } = (0, a.rm)(`shop-variants-group-${o}-overflow`),
        I = i.useCallback(
            (e) => {
                e.stopPropagation(), c?.(E.sH.VARIANT_CLICK_MORE), s(e), p();
            },
            [s, p, c],
        );
    return (0, r.jsx)(u.D, {
        "aria-label": h.intl.string(h.t["+0zcgs"]),
        onClick: I,
        className: l()(v.bP, v.V3, { [v.wH]: n }),
        style: { zIndex: t },
        ...g,
        children: (0, r.jsx)(d.j, { className: v.ab, color: "white" }),
    });
}
let y = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: l,
            overflowProps: a,
            onTrackClick: o,
        } = e,
        u = (0, m.Vm)(t);
    return null != u && (0, f.B1)(u)
        ? (0, r.jsx)(x, {
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

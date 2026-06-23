n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(741918),
    u = n(939249),
    c = n(820081),
    d = n(307301),
    p = n(661531),
    g = n(990078),
    C = n(260762),
    A = n(298072),
    f = n(317097),
    I = n(466459),
    v = n(623373),
    E = n(561769),
    h = n(758836),
    _ = n(375708),
    b = n(952769);
function R(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: a,
            isCollapsed: u,
            wrap: c,
            overflowProps: d,
            onTrackClick: p,
        } = e,
        g = (0, A.Q)(t),
        {
            shownVariants: f,
            totalVariants: I,
            hasOverflow: E,
        } = i.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, v.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, d?.maxVariantsToShow]),
        h = i.useCallback(
            (e, n) => {
                e.stopPropagation(), (0, A.n)(t, n);
            },
            [t],
        ),
        _ = i.useId(),
        R = (0, C.A)(`shop-variants-group-${t.storeListingId}-${_}`, o.Gl.HORIZONTAL);
    return 0 === f.length
        ? null
        : (0, r.jsx)(s.hD, {
              navigator: R,
              children: (0, r.jsx)(s.PR, {
                  children: (e) => {
                      let { ref: i, ...s } = e;
                      return (0, r.jsxs)("div", {
                          className: l()({ [b.yZ]: u, [b.sz]: !u, [b.LV]: c }, b.lO),
                          ref: i,
                          ...s,
                          children: [
                              f.map((e, t) =>
                                  (0, r.jsx)(
                                      S,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === g,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: a,
                                          zIndex: I - Math.abs(g - t),
                                          onVariantClick: h,
                                          onTrackClick: p,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != d &&
                                  E &&
                                  (0, r.jsx)(k, {
                                      zIndex: g >= d.maxVariantsToShow - 1 ? I + 1 : 0,
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
function S(e) {
    let {
            variant: t,
            variantIndex: n,
            isSelected: a,
            onVariantClick: o,
            onVariantEnter: c,
            onVariantExit: d,
            zIndex: p,
            onTrackClick: C,
        } = e,
        { onFocus: A, ...f } = (0, s.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: v } = (0, I.h)(t),
        E = i.useCallback(
            (e) => {
                C?.(h.sH.VARIANT_CLICK, n), o(e, n), A();
            },
            [o, A, n, C],
        ),
        R = v ? `${t.variantLabel}, ${_.intl.string(_.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(g.m, {
        text: _.intl.string(_.t["6cfuDj"]),
        shouldShow: v,
        ariaHidden: !0,
        children: (0, r.jsx)(u.D, {
            "aria-label": R,
            onClick: E,
            onMouseEnter: c,
            onMouseLeave: d,
            className: l()(b.bP, { [b.wH]: a }),
            style: { backgroundColor: t.variantValue, zIndex: p },
            ...f,
            children: v && (0, r.jsx)(y, { variant: t }),
        }),
    });
}
function y(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, f.qt)(t.variantValue) && 0.3 > (0, f.OK)((0, f.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(c.B, { className: b.U, color: n ? p.A.colors.BLACK.css : p.A.colors.WHITE.css });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: a, storeListingId: o, onTrackClick: c } = e,
        { onFocus: p, ...g } = (0, s.rm)(`shop-variants-group-${o}-overflow`),
        C = i.useCallback(
            (e) => {
                e.stopPropagation(), c?.(h.sH.VARIANT_CLICK_MORE), a(e), p();
            },
            [a, p, c],
        );
    return (0, r.jsx)(u.D, {
        "aria-label": _.intl.string(_.t["+0zcgs"]),
        onClick: C,
        className: l()(b.bP, b.V3, { [b.wH]: n }),
        style: { zIndex: t },
        ...g,
        children: (0, r.jsx)(d.j, { className: b.ab, color: "white" }),
    });
}
let L = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: a,
            onVariantExit: l,
            overflowProps: s,
            onTrackClick: o,
        } = e,
        u = (0, E.Vm)(t);
    return null != u && (0, v.B1)(u)
        ? (0, r.jsx)(R, {
              product: u,
              onVariantEnter: a,
              onVariantExit: l,
              isCollapsed: n,
              wrap: i,
              overflowProps: s,
              onTrackClick: o,
          })
        : null;
};

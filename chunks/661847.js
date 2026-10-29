n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    l = n(837381),
    u = n(741918),
    o = n(661531),
    d = n(866665),
    c = n(939249),
    I = n(820081),
    f = n(307301),
    v = n(260762),
    p = n(298072),
    g = n(317097),
    x = n(466459),
    A = n(623373),
    m = n(561769),
    _ = n(758836),
    h = n(105292),
    E = n(699704);
function C(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: o,
            wrap: d,
            overflowProps: c,
            onTrackClick: I,
            parentTabIndex: f,
        } = e,
        g = (0, p.Q)(t),
        {
            shownVariants: x,
            totalVariants: m,
            hasOverflow: _,
        } = i.useMemo(() => {
            let e = c?.maxVariantsToShow;
            return (0, A.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, c?.maxVariantsToShow]),
        h = i.useCallback(
            (e, n) => {
                (e.stopPropagation(), (0, p.n)(t, n));
            },
            [t],
        ),
        C = i.useId(),
        R = (0, v.A)(`shop-variants-group-${t.storeListingId}-${C}`, u.Gl.HORIZONTAL);
    return 0 === x.length
        ? null
        : (0, r.jsx)(l.hD, {
              navigator: R,
              children: (0, r.jsx)(l.PR, {
                  children: (e) => {
                      let { ref: i, ...l } = e;
                      return (0, r.jsxs)("div", {
                          className: a()({ [E.yZ]: o, [E.sz]: !o, [E.LV]: d }, E.lO),
                          ref: i,
                          ...l,
                          tabIndex: -1 === f ? -1 : l.tabIndex,
                          children: [
                              x.map((e, t) =>
                                  (0, r.jsx)(
                                      b,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === g,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: m - Math.abs(g - t),
                                          onVariantClick: h,
                                          onTrackClick: I,
                                          parentTabIndex: f,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != c &&
                                  _ &&
                                  (0, r.jsx)(k, {
                                      zIndex: g >= c.maxVariantsToShow - 1 ? m + 1 : 0,
                                      isSelected: g >= c.maxVariantsToShow - 1,
                                      onOverflowClick: c.onClick,
                                      onTrackClick: I,
                                      storeListingId: t.storeListingId,
                                      parentTabIndex: f,
                                  }),
                          ],
                      });
                  },
              }),
          });
}
function b(e) {
    let {
            variant: t,
            variantIndex: n,
            isSelected: s,
            onVariantClick: u,
            onVariantEnter: o,
            onVariantExit: I,
            zIndex: f,
            onTrackClick: v,
            parentTabIndex: p,
        } = e,
        { onFocus: g, ...A } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: m } = (0, x.h)(t),
        C = i.useCallback(
            (e) => {
                (v?.(_.sH.VARIANT_CLICK, n), u(e, n), g());
            },
            [u, g, n, v],
        ),
        b = m ? `${t.variantLabel}, ${h.intl.string(h.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(d.m, {
        text: h.intl.string(h.t["6cfuDj"]),
        shouldShow: m,
        ariaHidden: !0,
        children: (0, r.jsx)(c.D, {
            "aria-label": b,
            onClick: C,
            onMouseEnter: o,
            onMouseLeave: I,
            className: a()(E.bP, { [E.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: f },
            ...A,
            tabIndex: -1 === p ? -1 : A.tabIndex,
            children: m && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, g.qt)(t.variantValue) && 0.3 > (0, g.OK)((0, g.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(I.B, { className: E.U, color: n ? o.A.colors.BLACK.css : o.A.colors.WHITE.css });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: u, onTrackClick: o, parentTabIndex: d } = e,
        { onFocus: I, ...v } = (0, l.rm)(`shop-variants-group-${u}-overflow`),
        p = i.useCallback(
            (e) => {
                (e.stopPropagation(), o?.(_.sH.VARIANT_CLICK_MORE), s(e), I());
            },
            [s, I, o],
        );
    return (0, r.jsx)(c.D, {
        "aria-label": h.intl.string(h.t["+0zcgs"]),
        onClick: p,
        className: a()(E.bP, E.V3, { [E.wH]: n }),
        style: { zIndex: t },
        ...v,
        tabIndex: -1 === d ? -1 : v.tabIndex,
        children: (0, r.jsx)(f.j, { className: E.ab, color: "white" }),
    });
}
let y = function (e) {
    let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: s,
            onVariantExit: a,
            overflowProps: l,
            onTrackClick: u,
            parentTabIndex: o,
        } = e,
        d = (0, m.Vm)(t);
    return null != d && (0, A.B1)(d)
        ? (0, r.jsx)(C, {
              product: d,
              onVariantEnter: s,
              onVariantExit: a,
              isCollapsed: n,
              wrap: i,
              overflowProps: l,
              onTrackClick: u,
              parentTabIndex: o,
          })
        : null;
};

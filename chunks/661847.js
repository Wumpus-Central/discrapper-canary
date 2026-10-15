n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(661531),
    d = n(866665),
    c = n(939249),
    I = n(820081),
    f = n(307301),
    p = n(260762),
    g = n(298072),
    v = n(317097),
    x = n(466459),
    A = n(623373),
    m = n(561769),
    C = n(758836),
    _ = n(105292),
    h = n(699704);
function E(e) {
    let {
            product: t,
            onVariantEnter: n,
            onVariantExit: s,
            isCollapsed: u,
            wrap: d,
            overflowProps: c,
            onTrackClick: I,
            parentTabIndex: f,
        } = e,
        v = (0, g.Q)(t),
        {
            shownVariants: x,
            totalVariants: m,
            hasOverflow: C,
        } = i.useMemo(() => {
            let e = c?.maxVariantsToShow;
            return (0, A.B1)(t)
                ? null == e || e >= t.variants.length
                    ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                    : { shownVariants: t.variants.slice(0, e - 1), totalVariants: t.variants.length, hasOverflow: !0 }
                : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
        }, [t, c?.maxVariantsToShow]),
        _ = i.useCallback(
            (e, n) => {
                (e.stopPropagation(), (0, g.n)(t, n));
            },
            [t],
        ),
        E = i.useId(),
        R = (0, p.A)(`shop-variants-group-${t.storeListingId}-${E}`, o.Gl.HORIZONTAL);
    return 0 === x.length
        ? null
        : (0, r.jsx)(a.hD, {
              navigator: R,
              children: (0, r.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...a } = e;
                      return (0, r.jsxs)("div", {
                          className: l()({ [h.yZ]: u, [h.sz]: !u, [h.LV]: d }, h.lO),
                          ref: i,
                          ...a,
                          tabIndex: -1 === f ? -1 : a.tabIndex,
                          children: [
                              x.map((e, t) =>
                                  (0, r.jsx)(
                                      b,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === v,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: m - Math.abs(v - t),
                                          onVariantClick: _,
                                          onTrackClick: I,
                                          parentTabIndex: f,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != c &&
                                  C &&
                                  (0, r.jsx)(k, {
                                      zIndex: v >= c.maxVariantsToShow - 1 ? m + 1 : 0,
                                      isSelected: v >= c.maxVariantsToShow - 1,
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
            onVariantClick: o,
            onVariantEnter: u,
            onVariantExit: I,
            zIndex: f,
            onTrackClick: p,
            parentTabIndex: g,
        } = e,
        { onFocus: v, ...A } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: m } = (0, x.h)(t),
        E = i.useCallback(
            (e) => {
                (p?.(C.sH.VARIANT_CLICK, n), o(e, n), v());
            },
            [o, v, n, p],
        ),
        b = m ? `${t.variantLabel}, ${_.intl.string(_.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(d.m, {
        text: _.intl.string(_.t["6cfuDj"]),
        shouldShow: m,
        ariaHidden: !0,
        children: (0, r.jsx)(c.D, {
            "aria-label": b,
            onClick: E,
            onMouseEnter: u,
            onMouseLeave: I,
            className: l()(h.bP, { [h.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: f },
            ...A,
            tabIndex: -1 === g ? -1 : A.tabIndex,
            children: m && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, v.qt)(t.variantValue) && 0.3 > (0, v.OK)((0, v.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(I.B, { className: h.U, color: n ? u.A.colors.BLACK.css : u.A.colors.WHITE.css });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: o, onTrackClick: u, parentTabIndex: d } = e,
        { onFocus: I, ...p } = (0, a.rm)(`shop-variants-group-${o}-overflow`),
        g = i.useCallback(
            (e) => {
                (e.stopPropagation(), u?.(C.sH.VARIANT_CLICK_MORE), s(e), I());
            },
            [s, I, u],
        );
    return (0, r.jsx)(c.D, {
        "aria-label": _.intl.string(_.t["+0zcgs"]),
        onClick: g,
        className: l()(h.bP, h.V3, { [h.wH]: n }),
        style: { zIndex: t },
        ...p,
        tabIndex: -1 === d ? -1 : p.tabIndex,
        children: (0, r.jsx)(f.j, { className: h.ab, color: "white" }),
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
            parentTabIndex: u,
        } = e,
        d = (0, m.Vm)(t);
    return null != d && (0, A.B1)(d)
        ? (0, r.jsx)(E, {
              product: d,
              onVariantEnter: s,
              onVariantExit: l,
              isCollapsed: n,
              wrap: i,
              overflowProps: a,
              onTrackClick: o,
              parentTabIndex: u,
          })
        : null;
};

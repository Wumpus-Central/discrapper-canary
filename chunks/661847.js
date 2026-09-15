n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(939249),
    d = n(820081),
    c = n(307301),
    I = n(661531),
    f = n(866665),
    p = n(260762),
    g = n(298072),
    A = n(317097),
    v = n(466459),
    x = n(623373),
    C = n(561769),
    m = n(758836),
    _ = n(375708),
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
        A = (0, g.Q)(t),
        {
            shownVariants: v,
            totalVariants: C,
            hasOverflow: m,
        } = i.useMemo(() => {
            let e = c?.maxVariantsToShow;
            return (0, x.B1)(t)
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
    return 0 === v.length
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
                              v.map((e, t) =>
                                  (0, r.jsx)(
                                      b,
                                      {
                                          variant: e,
                                          variantIndex: t,
                                          isSelected: t === A,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: s,
                                          zIndex: C - Math.abs(A - t),
                                          onVariantClick: _,
                                          onTrackClick: I,
                                          parentTabIndex: f,
                                      },
                                      e.variantValue,
                                  ),
                              ),
                              null != c &&
                                  m &&
                                  (0, r.jsx)(k, {
                                      zIndex: A >= c.maxVariantsToShow - 1 ? C + 1 : 0,
                                      isSelected: A >= c.maxVariantsToShow - 1,
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
            onVariantEnter: d,
            onVariantExit: c,
            zIndex: I,
            onTrackClick: p,
            parentTabIndex: g,
        } = e,
        { onFocus: A, ...x } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
        { isPurchased: C } = (0, v.h)(t),
        E = i.useCallback(
            (e) => {
                (p?.(m.sH.VARIANT_CLICK, n), o(e, n), A());
            },
            [o, A, n, p],
        ),
        b = C ? `${t.variantLabel}, ${_.intl.string(_.t["6cfuDj"])}` : t.variantLabel;
    return (0, r.jsx)(f.m, {
        text: _.intl.string(_.t["6cfuDj"]),
        shouldShow: C,
        ariaHidden: !0,
        children: (0, r.jsx)(u.D, {
            "aria-label": b,
            onClick: E,
            onMouseEnter: d,
            onMouseLeave: c,
            className: l()(h.bP, { [h.wH]: s }),
            style: { backgroundColor: t.variantValue, zIndex: I },
            ...x,
            tabIndex: -1 === g ? -1 : x.tabIndex,
            children: C && (0, r.jsx)(R, { variant: t }),
        }),
    });
}
function R(e) {
    let { variant: t } = e,
        n = i.useMemo(() => (0, A.qt)(t.variantValue) && 0.3 > (0, A.OK)((0, A.LX)(t.variantValue)), [t.variantValue]);
    return (0, r.jsx)(d.B, { className: h.U, color: n ? I.A.colors.BLACK.css : I.A.colors.WHITE.css });
}
function k(e) {
    let { zIndex: t, isSelected: n, onOverflowClick: s, storeListingId: o, onTrackClick: d, parentTabIndex: I } = e,
        { onFocus: f, ...p } = (0, a.rm)(`shop-variants-group-${o}-overflow`),
        g = i.useCallback(
            (e) => {
                (e.stopPropagation(), d?.(m.sH.VARIANT_CLICK_MORE), s(e), f());
            },
            [s, f, d],
        );
    return (0, r.jsx)(u.D, {
        "aria-label": _.intl.string(_.t["+0zcgs"]),
        onClick: g,
        className: l()(h.bP, h.V3, { [h.wH]: n }),
        style: { zIndex: t },
        ...p,
        tabIndex: -1 === I ? -1 : p.tabIndex,
        children: (0, r.jsx)(c.j, { className: h.ab, color: "white" }),
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
        d = (0, C.Vm)(t);
    return null != d && (0, x.B1)(d)
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

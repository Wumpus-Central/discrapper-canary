a.d(t, { A: () => b });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(837381),
    o = a(741918),
    c = a(158954),
    d = a(827734),
    u = a(990078),
    m = a(260762),
    p = a(298072),
    _ = a(274590),
    h = a(466459),
    x = a(623373),
    f = a(561769),
    g = a(758836),
    v = a(985018),
    A = a(356529);
let C = (e) => {
        let {
                product: t,
                onVariantEnter: a,
                onVariantExit: i,
                isCollapsed: c,
                wrap: d,
                overflowProps: u,
                onTrackClick: _,
            } = e,
            h = (0, p.Q)(t),
            {
                shownVariants: f,
                totalVariants: g,
                hasOverflow: v,
            } = r.useMemo(() => {
                let e = u?.maxVariantsToShow;
                return (0, x.B1)(t)
                    ? null == e || e >= t.variants.length
                        ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: t.variants.slice(0, e - 1),
                              totalVariants: t.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [t, u?.maxVariantsToShow]),
            C = r.useCallback(
                (e, a) => {
                    e.stopPropagation(), (0, p.n)(t, a);
                },
                [t],
            ),
            j = (0, m.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === f.length
            ? null
            : (0, n.jsx)(l.hD, {
                  navigator: j,
                  children: (0, n.jsx)(l.PR, {
                      children: (e) => {
                          let { ref: r, ...l } = e;
                          return (0, n.jsxs)("div", {
                              className: s()({ [A.yZ]: c, [A.sz]: !c, [A.LV]: d }, A.lO),
                              ref: r,
                              ...l,
                              children: [
                                  f.map((e, t) =>
                                      (0, n.jsx)(
                                          I,
                                          {
                                              variant: e,
                                              variantIndex: t,
                                              isSelected: t === h,
                                              onVariantEnter: () => a(t),
                                              onVariantExit: i,
                                              zIndex: g - Math.abs(h - t),
                                              onVariantClick: C,
                                              onTrackClick: _,
                                          },
                                          e.variantValue,
                                      ),
                                  ),
                                  null != u &&
                                      v &&
                                      (0, n.jsx)(T, {
                                          zIndex: h >= u.maxVariantsToShow - 1 ? g + 1 : 0,
                                          isSelected: h >= u.maxVariantsToShow - 1,
                                          onOverflowClick: u.onClick,
                                          onTrackClick: _,
                                          storeListingId: t.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    I = (e) => {
        let {
                variant: t,
                variantIndex: a,
                isSelected: i,
                onVariantClick: o,
                onVariantEnter: d,
                onVariantExit: m,
                zIndex: p,
                onTrackClick: _,
            } = e,
            { onFocus: x, ...f } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
            { isPurchased: C } = (0, h.h)(t),
            I = r.useCallback(
                (e) => {
                    _?.(g.sH.VARIANT_CLICK, a), o(e, a), x();
                },
                [o, x, a, _],
            );
        return (0, n.jsx)(u.m, {
            text: v.intl.string(v.t["6cfuDj"]),
            shouldShow: C,
            children: (0, n.jsx)(c.DUT, {
                "aria-label": t.variantLabel,
                onClick: I,
                onMouseEnter: d,
                onMouseLeave: m,
                onFocus: d,
                onBlur: m,
                className: s()(A.bP, { [A.wH]: i }),
                style: { backgroundColor: t.variantValue, zIndex: p },
                ...f,
                children: C && (0, n.jsx)(j, { variant: t }),
            }),
        });
    },
    j = (e) => {
        let { variant: t } = e,
            a = (0, _.A)(t);
        return (0, n.jsx)(c.BNr, { className: A.U, color: a ? d.A.colors.BLACK.css : d.A.colors.WHITE.css });
    },
    T = (e) => {
        let { zIndex: t, isSelected: a, onOverflowClick: i, storeListingId: o, onTrackClick: d } = e,
            { onFocus: u, ...m } = (0, l.rm)(`shop-variants-group-${o}-overflow`),
            p = r.useCallback(
                (e) => {
                    e.stopPropagation(), d?.(g.sH.VARIANT_CLICK_MORE), i(e), u();
                },
                [i, u, d],
            );
        return (0, n.jsx)(c.DUT, {
            "aria-label": v.intl.string(v.t["+0zcgs"]),
            onClick: p,
            className: s()(A.bP, A.V3, { [A.wH]: a }),
            style: { zIndex: t },
            ...m,
            children: (0, n.jsx)(c.j96, { className: A.ab, color: "white" }),
        });
    },
    b = (e) => {
        let {
                skuId: t,
                isCollapsed: a = !1,
                wrap: r = !1,
                onVariantEnter: i,
                onVariantExit: s,
                overflowProps: l,
                onTrackClick: o,
            } = e,
            c = (0, f.Vm)(t);
        return null != c && (0, x.B1)(c)
            ? (0, n.jsx)(C, {
                  product: c,
                  onVariantEnter: i,
                  onVariantExit: s,
                  isCollapsed: a,
                  wrap: r,
                  overflowProps: l,
                  onTrackClick: o,
              })
            : null;
    };

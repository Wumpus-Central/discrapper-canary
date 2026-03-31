n.d(t, { A: () => I });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(837381),
    o = n(741918),
    c = n(158954),
    d = n(827734),
    u = n(990078),
    m = n(260762),
    p = n(298072),
    h = n(274590),
    x = n(466459),
    f = n(623373),
    v = n(561769),
    g = n(985018),
    _ = n(356529);
let A = (e) => {
        let { product: t, onVariantEnter: n, onVariantExit: i, isCollapsed: c, wrap: d, overflowProps: u } = e,
            h = (0, p.Q)(t),
            {
                shownVariants: x,
                totalVariants: v,
                hasOverflow: g,
            } = a.useMemo(() => {
                let e = u?.maxVariantsToShow;
                return (0, f.B1)(t)
                    ? null == e || e >= t.variants.length
                        ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: t.variants.slice(0, e - 1),
                              totalVariants: t.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [t, u?.maxVariantsToShow]),
            A = a.useCallback(
                (e, n) => {
                    e.stopPropagation(), (0, p.n)(t, n);
                },
                [t],
            ),
            C = (0, m.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === x.length
            ? null
            : (0, r.jsx)(l.hD, {
                  navigator: C,
                  children: (0, r.jsx)(l.PR, {
                      children: (e) => {
                          let { ref: a, ...l } = e;
                          return (0, r.jsxs)("div", {
                              className: s()({ [_.yZ]: c, [_.sz]: !c, [_.LV]: d }, _.lO),
                              ref: a,
                              ...l,
                              children: [
                                  x.map((e, t) =>
                                      (0, r.jsx)(
                                          j,
                                          {
                                              variant: e,
                                              variantIndex: t,
                                              isSelected: t === h,
                                              onVariantEnter: () => n(t),
                                              onVariantExit: i,
                                              zIndex: v - Math.abs(h - t),
                                              onVariantClick: A,
                                          },
                                          e.variantValue,
                                      ),
                                  ),
                                  null != u &&
                                      g &&
                                      (0, r.jsx)(N, {
                                          zIndex: h >= u.maxVariantsToShow - 1 ? v + 1 : 0,
                                          isSelected: h >= u.maxVariantsToShow - 1,
                                          onOverflowClick: u.onClick,
                                          storeListingId: t.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    j = (e) => {
        let {
                variant: t,
                variantIndex: n,
                isSelected: i,
                onVariantClick: o,
                onVariantEnter: d,
                onVariantExit: m,
                zIndex: p,
            } = e,
            { onFocus: h, ...f } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
            { isPurchased: v } = (0, x.h)(t),
            A = a.useCallback(
                (e) => {
                    o(e, n), h();
                },
                [o, h, n],
            );
        return (0, r.jsx)(u.m, {
            text: g.intl.string(g.t["6cfuDj"]),
            shouldShow: v,
            children: (0, r.jsx)(c.DUT, {
                "aria-label": t.variantLabel,
                onClick: A,
                onMouseEnter: d,
                onMouseLeave: m,
                onFocus: d,
                onBlur: m,
                className: s()(_.bP, { [_.wH]: i }),
                style: { backgroundColor: t.variantValue, zIndex: p },
                ...f,
                children: v && (0, r.jsx)(C, { variant: t }),
            }),
        });
    },
    C = (e) => {
        let { variant: t } = e,
            n = (0, h.A)(t);
        return (0, r.jsx)(c.BNr, { className: _.U, color: n ? d.A.colors.BLACK.css : d.A.colors.WHITE.css });
    },
    N = (e) => {
        let { zIndex: t, isSelected: n, onOverflowClick: i, storeListingId: o } = e,
            { onFocus: d, ...u } = (0, l.rm)(`shop-variants-group-${o}-overflow`),
            m = a.useCallback(
                (e) => {
                    e.stopPropagation(), i(e), d();
                },
                [i, d],
            );
        return (0, r.jsx)(c.DUT, {
            "aria-label": g.intl.string(g.t["+0zcgs"]),
            onClick: m,
            className: s()(_.bP, _.V3, { [_.wH]: n }),
            style: { zIndex: t },
            ...u,
            children: (0, r.jsx)(c.j96, { className: _.ab, color: "white" }),
        });
    },
    I = (e) => {
        let { skuId: t, isCollapsed: n = !1, wrap: a = !1, onVariantEnter: i, onVariantExit: s, overflowProps: l } = e,
            o = (0, v.Vm)(t);
        return null != o && (0, f.B1)(o)
            ? (0, r.jsx)(A, {
                  product: o,
                  onVariantEnter: i,
                  onVariantExit: s,
                  isCollapsed: n,
                  wrap: a,
                  overflowProps: l,
              })
            : null;
    };

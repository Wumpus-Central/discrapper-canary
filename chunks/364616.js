"use strict";
r.d(t, { A: () => b });
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(837381),
    o = r(741918),
    c = r(158954),
    d = r(827734),
    u = r(990078),
    m = r(260762),
    p = r(298072),
    h = r(274590),
    x = r(466459),
    f = r(623373),
    v = r(561769),
    g = r(985018),
    _ = r(356529);
let A = (e) => {
        let { product: t, onVariantEnter: r, onVariantExit: s, isCollapsed: c, wrap: d, overflowProps: u } = e,
            h = (0, p.Q)(t),
            {
                shownVariants: x,
                totalVariants: v,
                hasOverflow: g,
            } = i.useMemo(() => {
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
            A = i.useCallback(
                (e, r) => {
                    e.stopPropagation(), (0, p.n)(t, r);
                },
                [t],
            ),
            C = (0, m.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === x.length
            ? null
            : (0, n.jsx)(l.hD, {
                  navigator: C,
                  children: (0, n.jsx)(l.PR, {
                      children: (e) => {
                          let { ref: i, ...l } = e;
                          return (0, n.jsxs)("div", {
                              className: a()({ [_.yZ]: c, [_.sz]: !c, [_.LV]: d }, _.lO),
                              ref: i,
                              ...l,
                              children: [
                                  x.map((e, t) =>
                                      (0, n.jsx)(
                                          j,
                                          {
                                              variant: e,
                                              variantIndex: t,
                                              isSelected: t === h,
                                              onVariantEnter: () => r(t),
                                              onVariantExit: s,
                                              zIndex: v - Math.abs(h - t),
                                              onVariantClick: A,
                                          },
                                          e.variantValue,
                                      ),
                                  ),
                                  null != u &&
                                      g &&
                                      (0, n.jsx)(N, {
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
                variantIndex: r,
                isSelected: s,
                onVariantClick: o,
                onVariantEnter: d,
                onVariantExit: m,
                zIndex: p,
            } = e,
            { onFocus: h, ...f } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
            { isPurchased: v } = (0, x.h)(t),
            A = i.useCallback(
                (e) => {
                    o(e, r), h();
                },
                [o, h, r],
            );
        return (0, n.jsx)(u.m, {
            text: g.intl.string(g.t["6cfuDj"]),
            shouldShow: v,
            children: (0, n.jsx)(c.DUT, {
                "aria-label": t.variantLabel,
                onClick: A,
                onMouseEnter: d,
                onMouseLeave: m,
                onFocus: d,
                onBlur: m,
                className: a()(_.bP, { [_.wH]: s }),
                style: { backgroundColor: t.variantValue, zIndex: p },
                ...f,
                children: v && (0, n.jsx)(C, { variant: t }),
            }),
        });
    },
    C = (e) => {
        let { variant: t } = e,
            r = (0, h.A)(t);
        return (0, n.jsx)(c.BNr, { className: _.U, color: r ? d.A.colors.BLACK.css : d.A.colors.WHITE.css });
    },
    N = (e) => {
        let { zIndex: t, isSelected: r, onOverflowClick: s, storeListingId: o } = e,
            { onFocus: d, ...u } = (0, l.rm)(`shop-variants-group-${o}-overflow`),
            m = i.useCallback(
                (e) => {
                    e.stopPropagation(), s(e), d();
                },
                [s, d],
            );
        return (0, n.jsx)(c.DUT, {
            "aria-label": g.intl.string(g.t["+0zcgs"]),
            onClick: m,
            className: a()(_.bP, _.V3, { [_.wH]: r }),
            style: { zIndex: t },
            ...u,
            children: (0, n.jsx)(c.j96, { className: _.ab, color: "white" }),
        });
    },
    b = (e) => {
        let { skuId: t, isCollapsed: r = !1, wrap: i = !1, onVariantEnter: s, onVariantExit: a, overflowProps: l } = e,
            o = (0, v.Vm)(t);
        return null != o && (0, f.B1)(o)
            ? (0, n.jsx)(A, {
                  product: o,
                  onVariantEnter: s,
                  onVariantExit: a,
                  isCollapsed: r,
                  wrap: i,
                  overflowProps: l,
              })
            : null;
    };

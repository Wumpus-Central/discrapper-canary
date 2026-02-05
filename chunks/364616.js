"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(741918),
    u = n(158954),
    c = n(827734),
    d = n(990078),
    _ = n(260762),
    f = n(298072),
    p = n(274590),
    h = n(466459),
    m = n(623373),
    g = n(561769),
    E = n(985018),
    A = n(219974);
let I = (e) => {
        let { product: t, onVariantEnter: n, onVariantExit: a, isCollapsed: u, wrap: c, overflowProps: d } = e,
            p = (0, f.Q)(t),
            {
                shownVariants: h,
                totalVariants: g,
                hasOverflow: E,
            } = i.useMemo(() => {
                let e = d?.maxVariantsToShow;
                return (0, m.B1)(t)
                    ? null == e || e >= t.variants.length
                        ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: t.variants.slice(0, e - 1),
                              totalVariants: t.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [t, d?.maxVariantsToShow]),
            I = i.useCallback(
                (e, n) => {
                    e.stopPropagation(), (0, f.n)(t, n);
                },
                [t],
            ),
            y = (0, _.A)(`shop-variants-group-${t.storeListingId}`, l.Gl.HORIZONTAL);
        return 0 === h.length
            ? null
            : (0, r.jsx)(o.hD, {
                  navigator: y,
                  children: (0, r.jsx)(o.PR, {
                      children: (e) => {
                          let { ref: i, ...o } = e;
                          return (0, r.jsxs)("div", {
                              className: s()({ [A.yZ]: u, [A.sz]: !u, [A.LV]: c }, A.lO),
                              ref: i,
                              ...o,
                              children: [
                                  h.map((e, t) =>
                                      (0, r.jsx)(
                                          T,
                                          {
                                              variant: e,
                                              variantIndex: t,
                                              isSelected: t === p,
                                              onVariantEnter: () => n(t),
                                              onVariantExit: a,
                                              zIndex: g - Math.abs(p - t),
                                              onVariantClick: I,
                                          },
                                          e.variantValue,
                                      ),
                                  ),
                                  null != d &&
                                      E &&
                                      (0, r.jsx)(S, {
                                          zIndex: p >= d.maxVariantsToShow - 1 ? g + 1 : 0,
                                          isSelected: p >= d.maxVariantsToShow - 1,
                                          onOverflowClick: d.onClick,
                                          storeListingId: t.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    T = (e) => {
        let {
                variant: t,
                variantIndex: n,
                isSelected: a,
                onVariantClick: l,
                onVariantEnter: c,
                onVariantExit: _,
                zIndex: f,
            } = e,
            { onFocus: p, ...m } = (0, o.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
            { isPurchased: g } = (0, h.h)(t),
            I = i.useCallback(
                (e) => {
                    l(e, n), p();
                },
                [l, p, n],
            );
        return (0, r.jsx)(d.m, {
            text: E.intl.string(E.t["6cfuDj"]),
            shouldShow: g,
            children: (0, r.jsx)(u.DUT, {
                "aria-label": t.variantLabel,
                onClick: I,
                onMouseEnter: c,
                onMouseLeave: _,
                onFocus: c,
                onBlur: _,
                className: s()(A.bP, { [A.wH]: a }),
                style: { backgroundColor: t.variantValue, zIndex: f },
                ...m,
                children: g && (0, r.jsx)(y, { variant: t }),
            }),
        });
    },
    y = (e) => {
        let { variant: t } = e,
            n = (0, p.A)(t);
        return (0, r.jsx)(u.BNr, { className: A.U, color: n ? c.A.colors.BLACK.css : c.A.colors.WHITE.css });
    },
    S = (e) => {
        let { zIndex: t, isSelected: n, onOverflowClick: a, storeListingId: l } = e,
            { onFocus: c, ...d } = (0, o.rm)(`shop-variants-group-${l}-overflow`),
            _ = i.useCallback(
                (e) => {
                    e.stopPropagation(), a(e), c();
                },
                [a, c],
            );
        return (0, r.jsx)(u.DUT, {
            "aria-label": E.intl.string(E.t["+0zcgs"]),
            onClick: _,
            className: s()(A.bP, A.V3, { [A.wH]: n }),
            style: { zIndex: t },
            ...d,
            children: (0, r.jsx)(u.j96, { className: A.ab, color: "white" }),
        });
    },
    v = (e) => {
        let { skuId: t, isCollapsed: n = !1, wrap: i = !1, onVariantEnter: a, onVariantExit: s, overflowProps: o } = e,
            l = (0, g.Vm)(t);
        return null != l && (0, m.B1)(l)
            ? (0, r.jsx)(I, {
                  product: l,
                  onVariantEnter: a,
                  onVariantExit: s,
                  isCollapsed: n,
                  wrap: i,
                  overflowProps: o,
              })
            : null;
    };

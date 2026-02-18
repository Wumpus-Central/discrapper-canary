a.d(e, { A: () => _ });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    s = a.n(r),
    i = a(837381),
    o = a(741918),
    u = a(158954),
    c = a(827734),
    d = a(990078),
    h = a(260762),
    p = a(298072),
    v = a(274590),
    g = a(466459),
    A = a(623373),
    C = a(561769),
    k = a(985018),
    m = a(219974);
let x = (t) => {
        let { product: e, onVariantEnter: a, onVariantExit: r, isCollapsed: u, wrap: c, overflowProps: d } = t,
            v = (0, p.Q)(e),
            {
                shownVariants: g,
                totalVariants: C,
                hasOverflow: k,
            } = l.useMemo(() => {
                let t = d?.maxVariantsToShow;
                return (0, A.B1)(e)
                    ? null == t || t >= e.variants.length
                        ? { shownVariants: e.variants, totalVariants: e.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: e.variants.slice(0, t - 1),
                              totalVariants: e.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [e, d?.maxVariantsToShow]),
            x = l.useCallback(
                (t, a) => {
                    t.stopPropagation(), (0, p.n)(e, a);
                },
                [e],
            ),
            b = (0, h.A)(`shop-variants-group-${e.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === g.length
            ? null
            : (0, n.jsx)(i.hD, {
                  navigator: b,
                  children: (0, n.jsx)(i.PR, {
                      children: (t) => {
                          let { ref: l, ...i } = t;
                          return (0, n.jsxs)("div", {
                              className: s()({ [m.yZ]: u, [m.sz]: !u, [m.LV]: c }, m.lO),
                              ref: l,
                              ...i,
                              children: [
                                  g.map((t, e) =>
                                      (0, n.jsx)(
                                          y,
                                          {
                                              variant: t,
                                              variantIndex: e,
                                              isSelected: e === v,
                                              onVariantEnter: () => a(e),
                                              onVariantExit: r,
                                              zIndex: C - Math.abs(v - e),
                                              onVariantClick: x,
                                          },
                                          t.variantValue,
                                      ),
                                  ),
                                  null != d &&
                                      k &&
                                      (0, n.jsx)(O, {
                                          zIndex: v >= d.maxVariantsToShow - 1 ? C + 1 : 0,
                                          isSelected: v >= d.maxVariantsToShow - 1,
                                          onOverflowClick: d.onClick,
                                          storeListingId: e.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    y = (t) => {
        let {
                variant: e,
                variantIndex: a,
                isSelected: r,
                onVariantClick: o,
                onVariantEnter: c,
                onVariantExit: h,
                zIndex: p,
            } = t,
            { onFocus: v, ...A } = (0, i.rm)(`shop-variants-group-${e.storeListingId}-${e.variantLabel}`),
            { isPurchased: C } = (0, g.h)(e),
            x = l.useCallback(
                (t) => {
                    o(t, a), v();
                },
                [o, v, a],
            );
        return (0, n.jsx)(d.m, {
            text: k.intl.string(k.t["6cfuDj"]),
            shouldShow: C,
            children: (0, n.jsx)(u.DUT, {
                "aria-label": e.variantLabel,
                onClick: x,
                onMouseEnter: c,
                onMouseLeave: h,
                onFocus: c,
                onBlur: h,
                className: s()(m.bP, { [m.wH]: r }),
                style: { backgroundColor: e.variantValue, zIndex: p },
                ...A,
                children: C && (0, n.jsx)(b, { variant: e }),
            }),
        });
    },
    b = (t) => {
        let { variant: e } = t,
            a = (0, v.A)(e);
        return (0, n.jsx)(u.BNr, { className: m.U, color: a ? c.A.colors.BLACK.css : c.A.colors.WHITE.css });
    },
    O = (t) => {
        let { zIndex: e, isSelected: a, onOverflowClick: r, storeListingId: o } = t,
            { onFocus: c, ...d } = (0, i.rm)(`shop-variants-group-${o}-overflow`),
            h = l.useCallback(
                (t) => {
                    t.stopPropagation(), r(t), c();
                },
                [r, c],
            );
        return (0, n.jsx)(u.DUT, {
            "aria-label": k.intl.string(k.t["+0zcgs"]),
            onClick: h,
            className: s()(m.bP, m.V3, { [m.wH]: a }),
            style: { zIndex: e },
            ...d,
            children: (0, n.jsx)(u.j96, { className: m.ab, color: "white" }),
        });
    },
    _ = (t) => {
        let { skuId: e, isCollapsed: a = !1, wrap: l = !1, onVariantEnter: r, onVariantExit: s, overflowProps: i } = t,
            o = (0, C.Vm)(e);
        return null != o && (0, A.B1)(o)
            ? (0, n.jsx)(x, {
                  product: o,
                  onVariantEnter: r,
                  onVariantExit: s,
                  isCollapsed: a,
                  wrap: l,
                  overflowProps: i,
              })
            : null;
    };

n.d(t, { A: () => S });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(837381),
    o = n(741918),
    d = n(939249),
    u = n(820081),
    c = n(307301),
    p = n(661531),
    g = n(990078),
    v = n(260762),
    m = n(298072),
    h = n(317097),
    A = n(466459),
    C = n(623373),
    E = n(561769),
    _ = n(758836),
    k = n(985018),
    y = n(952769);
let R = (e) => {
        let {
                product: t,
                onVariantEnter: n,
                onVariantExit: i,
                isCollapsed: d,
                wrap: u,
                overflowProps: c,
                onTrackClick: p,
            } = e,
            g = (0, m.Q)(t),
            {
                shownVariants: h,
                totalVariants: A,
                hasOverflow: E,
            } = l.useMemo(() => {
                let e = c?.maxVariantsToShow;
                return (0, C.B1)(t)
                    ? null == e || e >= t.variants.length
                        ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: t.variants.slice(0, e - 1),
                              totalVariants: t.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [t, c?.maxVariantsToShow]),
            _ = l.useCallback(
                (e, n) => {
                    e.stopPropagation(), (0, m.n)(t, n);
                },
                [t],
            ),
            k = (0, v.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === h.length
            ? null
            : (0, a.jsx)(s.hD, {
                  navigator: k,
                  children: (0, a.jsx)(s.PR, {
                      children: (e) => {
                          let { ref: l, ...s } = e;
                          return (0, a.jsxs)("div", {
                              className: r()({ [y.yZ]: d, [y.sz]: !d, [y.LV]: u }, y.lO),
                              ref: l,
                              ...s,
                              children: [
                                  h.map((e, t) =>
                                      (0, a.jsx)(
                                          b,
                                          {
                                              variant: e,
                                              variantIndex: t,
                                              isSelected: t === g,
                                              onVariantEnter: () => n(t),
                                              onVariantExit: i,
                                              zIndex: A - Math.abs(g - t),
                                              onVariantClick: _,
                                              onTrackClick: p,
                                          },
                                          e.variantValue,
                                      ),
                                  ),
                                  null != c &&
                                      E &&
                                      (0, a.jsx)(f, {
                                          zIndex: g >= c.maxVariantsToShow - 1 ? A + 1 : 0,
                                          isSelected: g >= c.maxVariantsToShow - 1,
                                          onOverflowClick: c.onClick,
                                          onTrackClick: p,
                                          storeListingId: t.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    b = (e) => {
        let {
                variant: t,
                variantIndex: n,
                isSelected: i,
                onVariantClick: o,
                onVariantEnter: u,
                onVariantExit: c,
                zIndex: p,
                onTrackClick: v,
            } = e,
            { onFocus: m, ...h } = (0, s.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
            { isPurchased: C } = (0, A.h)(t),
            E = l.useCallback(
                (e) => {
                    v?.(_.sH.VARIANT_CLICK, n), o(e, n), m();
                },
                [o, m, n, v],
            );
        return (0, a.jsx)(g.m, {
            text: k.intl.string(k.t["6cfuDj"]),
            shouldShow: C,
            children: (0, a.jsx)(d.D, {
                "aria-label": t.variantLabel,
                onClick: E,
                onMouseEnter: u,
                onMouseLeave: c,
                onFocus: u,
                onBlur: c,
                className: r()(y.bP, { [y.wH]: i }),
                style: { backgroundColor: t.variantValue, zIndex: p },
                ...h,
                children: C && (0, a.jsx)(I, { variant: t }),
            }),
        });
    },
    I = (e) => {
        let { variant: t } = e,
            n = l.useMemo(
                () => (0, h.qt)(t.variantValue) && 0.3 > (0, h.OK)((0, h.LX)(t.variantValue)),
                [t.variantValue],
            );
        return (0, a.jsx)(u.B, { className: y.U, color: n ? p.A.colors.BLACK.css : p.A.colors.WHITE.css });
    },
    f = (e) => {
        let { zIndex: t, isSelected: n, onOverflowClick: i, storeListingId: o, onTrackClick: u } = e,
            { onFocus: p, ...g } = (0, s.rm)(`shop-variants-group-${o}-overflow`),
            v = l.useCallback(
                (e) => {
                    e.stopPropagation(), u?.(_.sH.VARIANT_CLICK_MORE), i(e), p();
                },
                [i, p, u],
            );
        return (0, a.jsx)(d.D, {
            "aria-label": k.intl.string(k.t["+0zcgs"]),
            onClick: v,
            className: r()(y.bP, y.V3, { [y.wH]: n }),
            style: { zIndex: t },
            ...g,
            children: (0, a.jsx)(c.j, { className: y.ab, color: "white" }),
        });
    },
    S = (e) => {
        let {
                skuId: t,
                isCollapsed: n = !1,
                wrap: l = !1,
                onVariantEnter: i,
                onVariantExit: r,
                overflowProps: s,
                onTrackClick: o,
            } = e,
            d = (0, E.Vm)(t);
        return null != d && (0, C.B1)(d)
            ? (0, a.jsx)(R, {
                  product: d,
                  onVariantEnter: i,
                  onVariantExit: r,
                  isCollapsed: n,
                  wrap: l,
                  overflowProps: s,
                  onTrackClick: o,
              })
            : null;
    };

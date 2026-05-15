a.d(t, { A: () => f });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(837381),
    o = a(741918),
    u = a(939249),
    c = a(820081),
    d = a(307301),
    h = a(661531),
    p = a(990078),
    v = a(260762),
    g = a(298072),
    C = a(317097),
    m = a(466459),
    A = a(623373),
    x = a(561769),
    R = a(758836),
    k = a(375708),
    I = a(952769);
let b = (e) => {
        let {
                product: t,
                onVariantEnter: a,
                onVariantExit: s,
                isCollapsed: u,
                wrap: c,
                overflowProps: d,
                onTrackClick: h,
            } = e,
            p = (0, g.Q)(t),
            {
                shownVariants: C,
                totalVariants: m,
                hasOverflow: x,
            } = r.useMemo(() => {
                let e = d?.maxVariantsToShow;
                return (0, A.B1)(t)
                    ? null == e || e >= t.variants.length
                        ? { shownVariants: t.variants, totalVariants: t.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: t.variants.slice(0, e - 1),
                              totalVariants: t.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [t, d?.maxVariantsToShow]),
            R = r.useCallback(
                (e, a) => {
                    e.stopPropagation(), (0, g.n)(t, a);
                },
                [t],
            ),
            k = (0, v.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === C.length
            ? null
            : (0, n.jsx)(i.hD, {
                  navigator: k,
                  children: (0, n.jsx)(i.PR, {
                      children: (e) => {
                          let { ref: r, ...i } = e;
                          return (0, n.jsxs)("div", {
                              className: l()({ [I.yZ]: u, [I.sz]: !u, [I.LV]: c }, I.lO),
                              ref: r,
                              ...i,
                              children: [
                                  C.map((e, t) =>
                                      (0, n.jsx)(
                                          V,
                                          {
                                              variant: e,
                                              variantIndex: t,
                                              isSelected: t === p,
                                              onVariantEnter: () => a(t),
                                              onVariantExit: s,
                                              zIndex: m - Math.abs(p - t),
                                              onVariantClick: R,
                                              onTrackClick: h,
                                          },
                                          e.variantValue,
                                      ),
                                  ),
                                  null != d &&
                                      x &&
                                      (0, n.jsx)(S, {
                                          zIndex: p >= d.maxVariantsToShow - 1 ? m + 1 : 0,
                                          isSelected: p >= d.maxVariantsToShow - 1,
                                          onOverflowClick: d.onClick,
                                          onTrackClick: h,
                                          storeListingId: t.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    V = (e) => {
        let {
                variant: t,
                variantIndex: a,
                isSelected: s,
                onVariantClick: o,
                onVariantEnter: c,
                onVariantExit: d,
                zIndex: h,
                onTrackClick: v,
            } = e,
            { onFocus: g, ...C } = (0, i.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
            { isPurchased: A } = (0, m.h)(t),
            x = r.useCallback(
                (e) => {
                    v?.(R.sH.VARIANT_CLICK, a), o(e, a), g();
                },
                [o, g, a, v],
            );
        return (0, n.jsx)(p.m, {
            text: k.intl.string(k.t["6cfuDj"]),
            shouldShow: A,
            children: (0, n.jsx)(u.D, {
                "aria-label": t.variantLabel,
                onClick: x,
                onMouseEnter: c,
                onMouseLeave: d,
                className: l()(I.bP, { [I.wH]: s }),
                style: { backgroundColor: t.variantValue, zIndex: h },
                ...C,
                children: A && (0, n.jsx)(_, { variant: t }),
            }),
        });
    },
    _ = (e) => {
        let { variant: t } = e,
            a = r.useMemo(
                () => (0, C.qt)(t.variantValue) && 0.3 > (0, C.OK)((0, C.LX)(t.variantValue)),
                [t.variantValue],
            );
        return (0, n.jsx)(c.B, { className: I.U, color: a ? h.A.colors.BLACK.css : h.A.colors.WHITE.css });
    },
    S = (e) => {
        let { zIndex: t, isSelected: a, onOverflowClick: s, storeListingId: o, onTrackClick: c } = e,
            { onFocus: h, ...p } = (0, i.rm)(`shop-variants-group-${o}-overflow`),
            v = r.useCallback(
                (e) => {
                    e.stopPropagation(), c?.(R.sH.VARIANT_CLICK_MORE), s(e), h();
                },
                [s, h, c],
            );
        return (0, n.jsx)(u.D, {
            "aria-label": k.intl.string(k.t["+0zcgs"]),
            onClick: v,
            className: l()(I.bP, I.V3, { [I.wH]: a }),
            style: { zIndex: t },
            ...p,
            children: (0, n.jsx)(d.j, { className: I.ab, color: "white" }),
        });
    },
    f = (e) => {
        let {
                skuId: t,
                isCollapsed: a = !1,
                wrap: r = !1,
                onVariantEnter: s,
                onVariantExit: l,
                overflowProps: i,
                onTrackClick: o,
            } = e,
            u = (0, x.Vm)(t);
        return null != u && (0, A.B1)(u)
            ? (0, n.jsx)(b, {
                  product: u,
                  onVariantEnter: s,
                  onVariantExit: l,
                  isCollapsed: a,
                  wrap: r,
                  overflowProps: i,
                  onTrackClick: o,
              })
            : null;
    };

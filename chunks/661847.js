e.d(a, { A: () => y });
var n = e(627968),
    r = e(64700),
    s = e(503698),
    l = e.n(s),
    i = e(837381),
    o = e(741918),
    u = e(939249),
    c = e(820081),
    d = e(307301),
    p = e(661531),
    v = e(990078),
    g = e(260762),
    h = e(298072),
    C = e(317097),
    A = e(466459),
    b = e(623373),
    I = e(561769),
    k = e(758836),
    f = e(375708),
    R = e(209921);
let V = (t) => {
        let {
                product: a,
                onVariantEnter: e,
                onVariantExit: s,
                isCollapsed: u,
                wrap: c,
                overflowProps: d,
                onTrackClick: p,
            } = t,
            v = (0, h.Q)(a),
            {
                shownVariants: C,
                totalVariants: A,
                hasOverflow: I,
            } = r.useMemo(() => {
                let t = d?.maxVariantsToShow;
                return (0, b.B1)(a)
                    ? null == t || t >= a.variants.length
                        ? { shownVariants: a.variants, totalVariants: a.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: a.variants.slice(0, t - 1),
                              totalVariants: a.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [a, d?.maxVariantsToShow]),
            k = r.useCallback(
                (t, e) => {
                    t.stopPropagation(), (0, h.n)(a, e);
                },
                [a],
            ),
            f = r.useId(),
            V = (0, g.A)(`shop-variants-group-${a.storeListingId}-${f}`, o.Gl.HORIZONTAL);
        return 0 === C.length
            ? null
            : (0, n.jsx)(i.hD, {
                  navigator: V,
                  children: (0, n.jsx)(i.PR, {
                      children: (t) => {
                          let { ref: r, ...i } = t;
                          return (0, n.jsxs)("div", {
                              className: l()({ [R.yZ]: u, [R.sz]: !u, [R.LV]: c }, R.lO),
                              ref: r,
                              ...i,
                              children: [
                                  C.map((t, a) =>
                                      (0, n.jsx)(
                                          _,
                                          {
                                              variant: t,
                                              variantIndex: a,
                                              isSelected: a === v,
                                              onVariantEnter: () => e(a),
                                              onVariantExit: s,
                                              zIndex: A - Math.abs(v - a),
                                              onVariantClick: k,
                                              onTrackClick: p,
                                          },
                                          t.variantValue,
                                      ),
                                  ),
                                  null != d &&
                                      I &&
                                      (0, n.jsx)(m, {
                                          zIndex: v >= d.maxVariantsToShow - 1 ? A + 1 : 0,
                                          isSelected: v >= d.maxVariantsToShow - 1,
                                          onOverflowClick: d.onClick,
                                          onTrackClick: p,
                                          storeListingId: a.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    _ = (t) => {
        let {
                variant: a,
                variantIndex: e,
                isSelected: s,
                onVariantClick: o,
                onVariantEnter: c,
                onVariantExit: d,
                zIndex: p,
                onTrackClick: g,
            } = t,
            { onFocus: h, ...C } = (0, i.rm)(`shop-variants-group-${a.storeListingId}-${a.variantLabel}`),
            { isPurchased: b } = (0, A.h)(a),
            I = r.useCallback(
                (t) => {
                    g?.(k.sH.VARIANT_CLICK, e), o(t, e), h();
                },
                [o, h, e, g],
            ),
            V = b ? `${a.variantLabel}, ${f.intl.string(f.t["6cfuDj"])}` : a.variantLabel;
        return (0, n.jsx)(v.m, {
            text: f.intl.string(f.t["6cfuDj"]),
            shouldShow: b,
            ariaHidden: !0,
            children: (0, n.jsx)(u.D, {
                "aria-label": V,
                onClick: I,
                onMouseEnter: c,
                onMouseLeave: d,
                className: l()(R.bP, { [R.wH]: s }),
                style: { backgroundColor: a.variantValue, zIndex: p },
                ...C,
                children: b && (0, n.jsx)(x, { variant: a }),
            }),
        });
    },
    x = (t) => {
        let { variant: a } = t,
            e = r.useMemo(
                () => (0, C.qt)(a.variantValue) && 0.3 > (0, C.OK)((0, C.LX)(a.variantValue)),
                [a.variantValue],
            );
        return (0, n.jsx)(c.B, { className: R.U, color: e ? p.A.colors.BLACK.css : p.A.colors.WHITE.css });
    },
    m = (t) => {
        let { zIndex: a, isSelected: e, onOverflowClick: s, storeListingId: o, onTrackClick: c } = t,
            { onFocus: p, ...v } = (0, i.rm)(`shop-variants-group-${o}-overflow`),
            g = r.useCallback(
                (t) => {
                    t.stopPropagation(), c?.(k.sH.VARIANT_CLICK_MORE), s(t), p();
                },
                [s, p, c],
            );
        return (0, n.jsx)(u.D, {
            "aria-label": f.intl.string(f.t["+0zcgs"]),
            onClick: g,
            className: l()(R.bP, R.V3, { [R.wH]: e }),
            style: { zIndex: a },
            ...v,
            children: (0, n.jsx)(d.j, { className: R.ab, color: "white" }),
        });
    },
    y = (t) => {
        let {
                skuId: a,
                isCollapsed: e = !1,
                wrap: r = !1,
                onVariantEnter: s,
                onVariantExit: l,
                overflowProps: i,
                onTrackClick: o,
            } = t,
            u = (0, I.Vm)(a);
        return null != u && (0, b.B1)(u)
            ? (0, n.jsx)(V, {
                  product: u,
                  onVariantEnter: s,
                  onVariantExit: l,
                  isCollapsed: e,
                  wrap: r,
                  overflowProps: i,
                  onTrackClick: o,
              })
            : null;
    };

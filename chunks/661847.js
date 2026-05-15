a.d(e, { A: () => S });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(837381),
    o = a(741918),
    u = a(939249),
    d = a(820081),
    c = a(307301),
    h = a(661531),
    v = a(990078),
    p = a(260762),
    g = a(298072),
    C = a(317097),
    m = a(466459),
    A = a(623373),
    x = a(561769),
    R = a(758836),
    k = a(375708),
    I = a(952769);
let b = (t) => {
        let {
                product: e,
                onVariantEnter: a,
                onVariantExit: s,
                isCollapsed: u,
                wrap: d,
                overflowProps: c,
                onTrackClick: h,
            } = t,
            v = (0, g.Q)(e),
            {
                shownVariants: C,
                totalVariants: m,
                hasOverflow: x,
            } = r.useMemo(() => {
                let t = c?.maxVariantsToShow;
                return (0, A.B1)(e)
                    ? null == t || t >= e.variants.length
                        ? { shownVariants: e.variants, totalVariants: e.variants.length, hasOverflow: !1 }
                        : {
                              shownVariants: e.variants.slice(0, t - 1),
                              totalVariants: e.variants.length,
                              hasOverflow: !0,
                          }
                    : { shownVariants: [], totalVariants: 0, hasOverflow: !1 };
            }, [e, c?.maxVariantsToShow]),
            R = r.useCallback(
                (t, a) => {
                    t.stopPropagation(), (0, g.n)(e, a);
                },
                [e],
            ),
            k = (0, p.A)(`shop-variants-group-${e.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === C.length
            ? null
            : (0, n.jsx)(i.hD, {
                  navigator: k,
                  children: (0, n.jsx)(i.PR, {
                      children: (t) => {
                          let { ref: r, ...i } = t;
                          return (0, n.jsxs)("div", {
                              className: l()({ [I.yZ]: u, [I.sz]: !u, [I.LV]: d }, I.lO),
                              ref: r,
                              ...i,
                              children: [
                                  C.map((t, e) =>
                                      (0, n.jsx)(
                                          V,
                                          {
                                              variant: t,
                                              variantIndex: e,
                                              isSelected: e === v,
                                              onVariantEnter: () => a(e),
                                              onVariantExit: s,
                                              zIndex: m - Math.abs(v - e),
                                              onVariantClick: R,
                                              onTrackClick: h,
                                          },
                                          t.variantValue,
                                      ),
                                  ),
                                  null != c &&
                                      x &&
                                      (0, n.jsx)(f, {
                                          zIndex: v >= c.maxVariantsToShow - 1 ? m + 1 : 0,
                                          isSelected: v >= c.maxVariantsToShow - 1,
                                          onOverflowClick: c.onClick,
                                          onTrackClick: h,
                                          storeListingId: e.storeListingId,
                                      }),
                              ],
                          });
                      },
                  }),
              });
    },
    V = (t) => {
        let {
                variant: e,
                variantIndex: a,
                isSelected: s,
                onVariantClick: o,
                onVariantEnter: d,
                onVariantExit: c,
                zIndex: h,
                onTrackClick: p,
            } = t,
            { onFocus: g, ...C } = (0, i.rm)(`shop-variants-group-${e.storeListingId}-${e.variantLabel}`),
            { isPurchased: A } = (0, m.h)(e),
            x = r.useCallback(
                (t) => {
                    p?.(R.sH.VARIANT_CLICK, a), o(t, a), g();
                },
                [o, g, a, p],
            ),
            b = A ? `${e.variantLabel}, ${k.intl.string(k.t["6cfuDj"])}` : e.variantLabel;
        return (0, n.jsx)(v.m, {
            text: k.intl.string(k.t["6cfuDj"]),
            shouldShow: A,
            ariaHidden: !0,
            children: (0, n.jsx)(u.D, {
                "aria-label": b,
                onClick: x,
                onMouseEnter: d,
                onMouseLeave: c,
                className: l()(I.bP, { [I.wH]: s }),
                style: { backgroundColor: e.variantValue, zIndex: h },
                ...C,
                children: A && (0, n.jsx)(_, { variant: e }),
            }),
        });
    },
    _ = (t) => {
        let { variant: e } = t,
            a = r.useMemo(
                () => (0, C.qt)(e.variantValue) && 0.3 > (0, C.OK)((0, C.LX)(e.variantValue)),
                [e.variantValue],
            );
        return (0, n.jsx)(d.B, { className: I.U, color: a ? h.A.colors.BLACK.css : h.A.colors.WHITE.css });
    },
    f = (t) => {
        let { zIndex: e, isSelected: a, onOverflowClick: s, storeListingId: o, onTrackClick: d } = t,
            { onFocus: h, ...v } = (0, i.rm)(`shop-variants-group-${o}-overflow`),
            p = r.useCallback(
                (t) => {
                    t.stopPropagation(), d?.(R.sH.VARIANT_CLICK_MORE), s(t), h();
                },
                [s, h, d],
            );
        return (0, n.jsx)(u.D, {
            "aria-label": k.intl.string(k.t["+0zcgs"]),
            onClick: p,
            className: l()(I.bP, I.V3, { [I.wH]: a }),
            style: { zIndex: e },
            ...v,
            children: (0, n.jsx)(c.j, { className: I.ab, color: "white" }),
        });
    },
    S = (t) => {
        let {
                skuId: e,
                isCollapsed: a = !1,
                wrap: r = !1,
                onVariantEnter: s,
                onVariantExit: l,
                overflowProps: i,
                onTrackClick: o,
            } = t,
            u = (0, x.Vm)(e);
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

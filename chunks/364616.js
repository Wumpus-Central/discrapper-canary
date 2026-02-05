"use strict";
n.d(t, { A: () => S });
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
        let { product: t, onVariantEnter: n, onVariantExit: a, isCollapsed: u, wrap: c } = e,
            d = (0, f.Q)(t),
            p = t.variants?.length ?? 0,
            h = i.useCallback(
                (e, n) => {
                    e.stopPropagation(), (0, f.n)(t, n);
                },
                [t],
            ),
            m = (0, _.A)(`shop-variants-group-${t.storeListingId}`, l.Gl.HORIZONTAL);
        return 0 === p
            ? null
            : (0, r.jsx)(o.hD, {
                  navigator: m,
                  children: (0, r.jsx)(o.PR, {
                      children: (e) => {
                          let { ref: i, ...o } = e;
                          return (0, r.jsx)("div", {
                              className: s()({ [A.yZ]: u, [A.sz]: !u, [A.LV]: c }, A.lO),
                              ref: i,
                              ...o,
                              children: t.variants?.map((e, t) =>
                                  (0, r.jsx)(
                                      T,
                                      {
                                          variant: e,
                                          isSelected: t === d,
                                          onVariantEnter: () => n(t),
                                          onVariantExit: a,
                                          zIndex: p - Math.abs(d - t),
                                          onClick: (e) => h(e, t),
                                      },
                                      e.variantValue,
                                  ),
                              ),
                          });
                      },
                  }),
              });
    },
    T = (e) => {
        let { variant: t, isSelected: n, onClick: i, onVariantEnter: a, onVariantExit: l, zIndex: c } = e,
            { onFocus: _, ...f } = (0, o.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`),
            { isPurchased: p } = (0, h.h)(t);
        return (0, r.jsx)(d.m, {
            text: E.intl.string(E.t["6cfuDj"]),
            shouldShow: p,
            children: (0, r.jsx)(u.DUT, {
                "aria-label": t.variantLabel,
                onClick: (e) => {
                    i(e), _();
                },
                onMouseEnter: a,
                onMouseLeave: l,
                onFocus: a,
                onBlur: l,
                className: s()(A.bP, { [A.wH]: n }),
                style: { backgroundColor: t.variantValue, zIndex: c },
                ...f,
                children: p && (0, r.jsx)(y, { variant: t }),
            }),
        });
    },
    y = (e) => {
        let { variant: t } = e,
            n = (0, p.A)(t);
        return (0, r.jsx)(u.BNr, { className: A.U, color: n ? c.A.colors.BLACK.css : c.A.colors.WHITE.css });
    },
    S = (e) => {
        let { skuId: t, isCollapsed: n = !1, wrap: i = !1, onVariantEnter: a, onVariantExit: s } = e,
            o = (0, g.Vm)(t);
        return null != o && (0, m.B1)(o)
            ? (0, r.jsx)(I, { product: o, onVariantEnter: a, onVariantExit: s, isCollapsed: n, wrap: i })
            : null;
    };

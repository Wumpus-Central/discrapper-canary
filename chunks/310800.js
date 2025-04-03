n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(852229),
    s = n(481060),
    a = n(724598),
    l = n(674180),
    o = n(495437),
    c = n(267101),
    d = n(863663),
    u = n(676651),
    m = n(613810),
    g = n(391181),
    p = n(388032),
    h = n(520880);
let f = 'guild-product-listings-header';
function b(e) {
    let { guildId: t, handleCreateOrEditProduct: u } = e,
        b = (0, c.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: x } = (0, l.gX)(t),
        j = (e) => {
            (0, o.Je)(t, e, { published: !1 });
        },
        N = (e, i) => {
            (0, s.ZDy)(async () => {
                let { default: s } = await n.e('95925').then(n.bind(n, 673078));
                return (n) =>
                    (0, r.jsx)(
                        s,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                guildId: t,
                                productId: e,
                                productName: i
                            },
                            n
                        )
                    );
            });
        },
        _ = (e, t) => {
            (0, i.J)((0, d.ar)(e, t));
        },
        v = b.length > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.vwX, {
                className: h.productListingsHeader,
                id: f,
                children: v ? p.NW.string(p.t.RwuStb) : p.NW.string(p.t.WKMcMT)
            }),
            v
                ? (0, r.jsx)('ul', {
                      className: h.productListings,
                      'aria-labelledby': f,
                      children: b.map((e) =>
                          (0, r.jsx)(
                              'li',
                              {
                                  children: (0, r.jsx)(g.Z, {
                                      guildId: t,
                                      product: e,
                                      onEditProduct: () => u(e.id),
                                      onUnpublishProduct: () => j(e.id),
                                      onDeleteProduct: () => N(e.id, e.name),
                                      onCopyProductLink: () => _(t, e.id),
                                      onTestDownload: () =>
                                          m.Z.open({
                                              guildId: t,
                                              productId: e.id
                                          }),
                                      onReportProduct: () => {},
                                      disabled: x
                                  })
                              },
                              e.id
                          )
                      )
                  })
                : (0, r.jsx)(a.Z, {
                      guildId: t,
                      showCTA: !1,
                      responsive: !1
                  })
        ]
    });
}
function x(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, l.gX)(t),
        i = (e) => {
            u.h(t, e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.zxk, {
                className: h.addButton,
                innerClassName: h.addButtonInner,
                onClick: () => i(null),
                disabled: n,
                children: [
                    (0, r.jsx)(s.qJs, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(s.LZC, {
                        size: 6,
                        horizontal: !0
                    }),
                    p.NW.string(p.t.riG6DQ)
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(b, {
                guildId: t,
                handleCreateOrEditProduct: i
            })
        ]
    });
}

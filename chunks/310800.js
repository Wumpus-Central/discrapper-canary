n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(724598),
    s = n(674180),
    a = n(572004),
    o = n(495437),
    c = n(267101),
    u = n(863663),
    d = n(676651),
    m = n(613810),
    g = n(391181),
    p = n(388032),
    h = n(520880);
let f = 'guild-product-listings-header';
function x(e) {
    let { guildId: t, handleCreateOrEditProduct: d } = e,
        x = (0, c.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: b } = (0, s.gX)(t),
        j = (e) => {
            (0, o.Je)(t, e, { published: !1 });
        },
        _ = (e, l) => {
            (0, i.ZDy)(async () => {
                let { default: i } = await n.e('95925').then(n.bind(n, 673078));
                return (n) =>
                    (0, r.jsx)(
                        i,
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
                                productName: l
                            },
                            n
                        )
                    );
            });
        },
        v = (e, t) => {
            (0, a.JG)((0, u.ar)(e, t));
        },
        O = x.length > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.vwX, {
                className: h.productListingsHeader,
                id: f,
                children: O ? p.intl.string(p.t.RwuStb) : p.intl.string(p.t.WKMcMT)
            }),
            O
                ? (0, r.jsx)('ul', {
                      className: h.productListings,
                      'aria-labelledby': f,
                      children: x.map((e) =>
                          (0, r.jsx)(
                              'li',
                              {
                                  children: (0, r.jsx)(g.Z, {
                                      guildId: t,
                                      product: e,
                                      onEditProduct: () => d(e.id),
                                      onUnpublishProduct: () => j(e.id),
                                      onDeleteProduct: () => _(e.id, e.name),
                                      onCopyProductLink: () => v(t, e.id),
                                      onTestDownload: () =>
                                          m.Z.open({
                                              guildId: t,
                                              productId: e.id
                                          }),
                                      onReportProduct: () => {},
                                      disabled: b
                                  })
                              },
                              e.id
                          )
                      )
                  })
                : (0, r.jsx)(l.Z, {
                      guildId: t,
                      showCTA: !1,
                      responsive: !1
                  })
        ]
    });
}
function b(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, s.gX)(t),
        l = (e) => {
            d.h(t, e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.zxk, {
                className: h.addButton,
                innerClassName: h.addButtonInner,
                onClick: () => l(null),
                disabled: n,
                children: [
                    (0, r.jsx)(i.qJs, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(i.LZC, {
                        size: 6,
                        horizontal: !0
                    }),
                    p.intl.string(p.t.riG6DQ)
                ]
            }),
            (0, r.jsx)(i.LZC, { size: 24 }),
            (0, r.jsx)(x, {
                guildId: t,
                handleCreateOrEditProduct: l
            })
        ]
    });
}

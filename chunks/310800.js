n.d(t, { Z: () => j });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(724598),
    s = n(674180),
    o = n(572004),
    c = n(495437),
    d = n(267101),
    u = n(863663),
    m = n(676651),
    g = n(613810),
    p = n(391181),
    h = n(388032),
    f = n(520880);
let x = 'guild-product-listings-header';
function b(e) {
    let { guildId: t, handleCreateOrEditProduct: i } = e,
        m = (0, d.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: b } = (0, s.gX)(t),
        j = (e) => {
            (0, c.Je)(t, e, { published: !1 });
        },
        v = (e, i) => {
            (0, l.ZDy)(async () => {
                let { default: l } = await n.e('95925').then(n.bind(n, 673078));
                return (n) =>
                    (0, r.jsx)(
                        l,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
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
            (0, o.JG)((0, u.ar)(e, t));
        },
        O = m.length > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.vwX, {
                className: f.productListingsHeader,
                id: x,
                children: O ? h.intl.string(h.t.RwuStb) : h.intl.string(h.t.WKMcMT)
            }),
            O
                ? (0, r.jsx)('ul', {
                      className: f.productListings,
                      'aria-labelledby': x,
                      children: m.map((e) =>
                          (0, r.jsx)(
                              'li',
                              {
                                  children: (0, r.jsx)(p.Z, {
                                      guildId: t,
                                      product: e,
                                      onEditProduct: () => i(e.id),
                                      onUnpublishProduct: () => j(e.id),
                                      onDeleteProduct: () => v(e.id, e.name),
                                      onCopyProductLink: () => _(t, e.id),
                                      onTestDownload: () =>
                                          g.Z.open({
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
                : (0, r.jsx)(a.Z, {
                      guildId: t,
                      showCTA: !1,
                      responsive: !1
                  })
        ]
    });
}
function j(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, s.gX)(t),
        a = (e) => {
            m.h(t, e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.zx, {
                className: f.addButton,
                innerClassName: f.addButtonInner,
                onClick: () => a(null),
                disabled: n,
                children: [
                    (0, r.jsx)(l.qJs, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(l.LZC, {
                        size: 6,
                        horizontal: !0
                    }),
                    h.intl.string(h.t.riG6DQ)
                ]
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(b, {
                guildId: t,
                handleCreateOrEditProduct: a
            })
        ]
    });
}

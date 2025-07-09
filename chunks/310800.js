n.d(t, { Z: () => j });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    s = n(724598),
    a = n(674180),
    o = n(572004),
    c = n(495437),
    d = n(267101),
    u = n(863663),
    m = n(676651),
    g = n(613810),
    p = n(391181),
    f = n(388032),
    h = n(520880);
let x = 'guild-product-listings-header';
function b(e) {
    let { guildId: t, handleCreateOrEditProduct: i } = e,
        m = (0, d.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: b } = (0, a.gX)(t),
        j = (e) => {
            (0, c.Je)(t, e, { published: !1 });
        },
        _ = (e, i) => {
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
        v = (e, t) => {
            (0, o.JG)((0, u.ar)(e, t));
        },
        O = m.length > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.vwX, {
                className: h.productListingsHeader,
                id: x,
                children: O ? f.intl.string(f.t.RwuStb) : f.intl.string(f.t.WKMcMT)
            }),
            O
                ? (0, r.jsx)('ul', {
                      className: h.productListings,
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
                                      onDeleteProduct: () => _(e.id, e.name),
                                      onCopyProductLink: () => v(t, e.id),
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
                : (0, r.jsx)(s.Z, {
                      guildId: t,
                      showCTA: !1,
                      responsive: !1
                  })
        ]
    });
}
function j(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, a.gX)(t),
        s = (e) => {
            m.h(t, e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(i.zx, {
                className: h.addButton,
                innerClassName: h.addButtonInner,
                onClick: () => s(null),
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
                    f.intl.string(f.t.riG6DQ)
                ]
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(b, {
                guildId: t,
                handleCreateOrEditProduct: s
            })
        ]
    });
}

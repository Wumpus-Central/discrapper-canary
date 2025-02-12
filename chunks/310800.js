n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var r = n(852229),
    l = n(481060),
    s = n(724598),
    a = n(674180),
    o = n(495437),
    c = n(267101),
    d = n(863663),
    u = n(676651),
    m = n(613810),
    h = n(391181),
    g = n(388032),
    x = n(221520);
let p = 'guild-product-listings-header';
function _(e) {
    let { guildId: t, handleCreateOrEditProduct: u } = e,
        _ = (0, c.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: C } = (0, a.gX)(t),
        f = (e) => {
            (0, o.Je)(t, e, { published: !1 });
        },
        v = (e, r) => {
            (0, l.ZDy)(async () => {
                let { default: l } = await n.e('95925').then(n.bind(n, 673078));
                return (n) =>
                    (0, i.jsx)(l, {
                        guildId: t,
                        productId: e,
                        productName: r,
                        ...n
                    });
            });
        },
        N = (e, t) => {
            (0, r.J)((0, d.ar)(e, t));
        },
        j = _.length > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.vwX, {
                className: x.productListingsHeader,
                id: p,
                children: j ? g.intl.string(g.t.RwuStb) : g.intl.string(g.t.WKMcMT)
            }),
            j
                ? (0, i.jsx)('ul', {
                      className: x.productListings,
                      'aria-labelledby': p,
                      children: _.map((e) =>
                          (0, i.jsx)(
                              'li',
                              {
                                  children: (0, i.jsx)(h.Z, {
                                      guildId: t,
                                      product: e,
                                      onEditProduct: () => u(e.id),
                                      onUnpublishProduct: () => f(e.id),
                                      onDeleteProduct: () => v(e.id, e.name),
                                      onCopyProductLink: () => N(t, e.id),
                                      onTestDownload: () =>
                                          m.Z.open({
                                              guildId: t,
                                              productId: e.id
                                          }),
                                      onReportProduct: () => {},
                                      disabled: C
                                  })
                              },
                              e.id
                          )
                      )
                  })
                : (0, i.jsx)(s.Z, {
                      guildId: t,
                      showCTA: !1,
                      responsive: !1
                  })
        ]
    });
}
function C(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, a.gX)(t),
        r = (e) => {
            u.h(t, e);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.zxk, {
                className: x.addButton,
                innerClassName: x.addButtonInner,
                onClick: () => r(null),
                disabled: n,
                children: [
                    (0, i.jsx)(l.qJs, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(l.LZC, {
                        size: 6,
                        horizontal: !0
                    }),
                    g.intl.string(g.t.riG6DQ)
                ]
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
            (0, i.jsx)(_, {
                guildId: t,
                handleCreateOrEditProduct: r
            })
        ]
    });
}

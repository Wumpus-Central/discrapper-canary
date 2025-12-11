n.d(t, { Z: () => x });
var r = n(54381),
    i = n(159691),
    l = n(481060),
    a = n(724598),
    s = n(674180),
    o = n(572004),
    c = n(495437),
    d = n(267101),
    u = n(863663),
    g = n(676651),
    m = n(613810),
    f = n(391181),
    p = n(388032),
    b = n(973501);
function h(e) {
    let { guildId: t, handleCreateOrEditProduct: i } = e,
        g = (0, d.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: h } = (0, s.gX)(t),
        x = g.length > 0;
    return (0, r.jsx)("div", {
        className: b.productListingsHeader,
        children: (0, r.jsx)(l.gNt, {
            label: x ? p.intl.string(p.t.RwuStQ) : p.intl.string(p.t.WKMcMW),
            children: (e) =>
                x
                    ? (0, r.jsx)("ul", {
                          className: b.productListings,
                          id: e.controlId,
                          children: g.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(f.Z, {
                                          guildId: t,
                                          product: e,
                                          onEditProduct: () => i(e.id),
                                          onUnpublishProduct: () => {
                                              var n;
                                              return (n = e.id), void (0, c.Je)(t, n, { published: !1 });
                                          },
                                          onDeleteProduct: () => {
                                              var i, a;
                                              return (
                                                  (i = e.id),
                                                  (a = e.name),
                                                  void (0, l.ZDy)(async () => {
                                                      let { default: e } = await n.e("95925").then(n.bind(n, 673078));
                                                      return (n) =>
                                                          (0, r.jsx)(
                                                              e,
                                                              (function (e) {
                                                                  for (var t = 1; t < arguments.length; t++) {
                                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                                          r = Object.keys(n);
                                                                      "function" ==
                                                                          typeof Object.getOwnPropertySymbols &&
                                                                          (r = r.concat(
                                                                              Object.getOwnPropertySymbols(n).filter(
                                                                                  function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(
                                                                                          n,
                                                                                          e,
                                                                                      ).enumerable;
                                                                                  },
                                                                              ),
                                                                          )),
                                                                          r.forEach(function (t) {
                                                                              var r;
                                                                              (r = n[t]),
                                                                                  t in e
                                                                                      ? Object.defineProperty(e, t, {
                                                                                            value: r,
                                                                                            enumerable: !0,
                                                                                            configurable: !0,
                                                                                            writable: !0,
                                                                                        })
                                                                                      : (e[t] = r);
                                                                          });
                                                                  }
                                                                  return e;
                                                              })(
                                                                  {
                                                                      guildId: t,
                                                                      productId: i,
                                                                      productName: a,
                                                                  },
                                                                  n,
                                                              ),
                                                          );
                                                  })
                                              );
                                          },
                                          onCopyProductLink: () => {
                                              var n;
                                              return (n = e.id), void (0, o.JG)((0, u.ar)(t, n));
                                          },
                                          onTestDownload: () =>
                                              m.Z.open({
                                                  guildId: t,
                                                  productId: e.id,
                                              }),
                                          onReportProduct: () => {},
                                          disabled: h,
                                      }),
                                  },
                                  e.id,
                              ),
                          ),
                      })
                    : (0, r.jsx)(a.Z, {
                          guildId: t,
                          showCTA: !1,
                          responsive: !1,
                      }),
        }),
    });
}
function x(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, s.gX)(t),
        a = (e) => {
            g.h(t, e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.zxk, {
                text: p.intl.string(p.t.riG6Da),
                icon: l.qJs,
                onClick: () => a(null),
                disabled: n,
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(h, {
                guildId: t,
                handleCreateOrEditProduct: a,
            }),
        ],
    });
}

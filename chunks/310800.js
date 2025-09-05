n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(159691),
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
    f = n(388032),
    h = n(931281);
let b = "guild-product-listings-header";
function x(e) {
    let { guildId: t, handleCreateOrEditProduct: i } = e,
        m = (0, d.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: x } = (0, s.gX)(t),
        j = m.length > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.vwX, {
                className: h.productListingsHeader,
                id: b,
                children: j ? f.intl.string(f.t.RwuStb) : f.intl.string(f.t.WKMcMT),
            }),
            j
                ? (0, r.jsx)("ul", {
                      className: h.productListings,
                      "aria-labelledby": b,
                      children: m.map((e) =>
                          (0, r.jsx)(
                              "li",
                              {
                                  children: (0, r.jsx)(p.Z, {
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
                                                                  "function" == typeof Object.getOwnPropertySymbols &&
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
                                          g.Z.open({
                                              guildId: t,
                                              productId: e.id,
                                          }),
                                      onReportProduct: () => {},
                                      disabled: x,
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
        ],
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
            (0, r.jsx)(i.zx, {
                text: f.intl.string(f.t.riG6DQ),
                icon: l.qJs,
                onClick: () => a(null),
                disabled: n,
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(x, {
                guildId: t,
                handleCreateOrEditProduct: a,
            }),
        ],
    });
}

n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(159691),
    l = n(481060),
    s = n(724598),
    a = n(674180),
    o = n(572004),
    c = n(495437),
    d = n(267101),
    u = n(863663),
    g = n(676651),
    m = n(613810),
    p = n(391181),
    f = n(388032),
    h = n(931281);
let x = "guild-product-listings-header";
function b(e) {
    let { guildId: t, handleCreateOrEditProduct: i } = e,
        g = (0, d.ue)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: b } = (0, a.gX)(t),
        j = g.length > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.vwX, {
                className: h.productListingsHeader,
                id: x,
                children: j ? f.intl.string(f.t.RwuStb) : f.intl.string(f.t.WKMcMT),
            }),
            j
                ? (0, r.jsx)("ul", {
                      className: h.productListings,
                      "aria-labelledby": x,
                      children: g.map((e) =>
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
                                          var i, s;
                                          return (
                                              (i = e.id),
                                              (s = e.name),
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
                                                                  productName: s,
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
                                      disabled: b,
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  })
                : (0, r.jsx)(s.Z, {
                      guildId: t,
                      showCTA: !1,
                      responsive: !1,
                  }),
        ],
    });
}
function j(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, a.gX)(t),
        s = (e) => {
            g.h(t, e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.zxk, {
                text: f.intl.string(f.t.riG6DQ),
                icon: l.qJs,
                onClick: () => s(null),
                disabled: n,
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(b, {
                guildId: t,
                handleCreateOrEditProduct: s,
            }),
        ],
    });
}

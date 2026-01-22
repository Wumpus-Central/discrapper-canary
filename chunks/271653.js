n.d(t, { A: () => h });
var r = n(627968),
    i = n(732955),
    l = n(397927),
    s = n(319664),
    a = n(465932),
    c = n(957565),
    o = n(912702),
    d = n(250627),
    u = n(253141),
    f = n(579970),
    g = n(960427),
    b = n(482711),
    m = n(985018),
    p = n(296217);
function x(e) {
    let { guildId: t, handleCreateOrEditProduct: i } = e,
        f = (0, d.fZ)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: x } = (0, a.nq)(t),
        h = f.length > 0;
    return (0, r.jsx)("div", {
        className: p.aW,
        children: (0, r.jsx)(l.D0$, {
            label: h ? m.intl.string(m.t.RwuStQ) : m.intl.string(m.t.WKMcMW),
            children: (e) =>
                h
                    ? (0, r.jsx)("ul", {
                          className: p.Hn,
                          id: e.controlId,
                          children: f.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(b.A, {
                                          guildId: t,
                                          product: e,
                                          onEditProduct: () => i(e.id),
                                          onUnpublishProduct: () => {
                                              var n;
                                              return (n = e.id), void (0, o.Qm)(t, n, { published: !1 });
                                          },
                                          onDeleteProduct: () => {
                                              var i, s;
                                              return (
                                                  (i = e.id),
                                                  (s = e.name),
                                                  void (0, l.mMO)(async () => {
                                                      let { default: e } = await n.e("37214").then(n.bind(n, 100909));
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
                                              return (n = e.id), void (0, c.C)((0, u.KW)(t, n));
                                          },
                                          onTestDownload: () =>
                                              g.A.open({
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
                    : (0, r.jsx)(s.A, {
                          guildId: t,
                          showCTA: !1,
                          responsive: !1,
                      }),
        }),
    });
}
function h(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, a.nq)(t),
        s = (e) => {
            f.q(t, e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.$nd, {
                text: m.intl.string(m.t.riG6Da),
                icon: l.j96,
                onClick: () => s(null),
                disabled: n,
            }),
            (0, r.jsx)(l.hKd, { size: 24 }),
            (0, r.jsx)(x, {
                guildId: t,
                handleCreateOrEditProduct: s,
            }),
        ],
    });
}

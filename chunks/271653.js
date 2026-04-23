n.d(t, { A: () => j });
var i = n(627968),
    l = n(821609),
    s = n(192308),
    r = n(452027),
    a = n(307301),
    o = n(696986),
    d = n(319664),
    c = n(465932),
    u = n(957565),
    m = n(912702),
    g = n(250627),
    h = n(253141),
    x = n(579970),
    _ = n(960427),
    p = n(482711),
    A = n(985018),
    E = n(433416);
function f(e) {
    let { guildId: t, handleCreateOrEditProduct: l } = e,
        a = (0, g.fZ)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: o } = (0, c.nq)(t),
        x = a.length > 0;
    return (0, i.jsx)("div", {
        className: E.aW,
        children: (0, i.jsx)(r.D, {
            label: x ? A.intl.string(A.t.RwuStQ) : A.intl.string(A.t.WKMcMW),
            children: (e) =>
                x
                    ? (0, i.jsx)("ul", {
                          className: E.Hn,
                          id: e.controlId,
                          children: a.map((e) =>
                              (0, i.jsx)(
                                  "li",
                                  {
                                      children: (0, i.jsx)(p.A, {
                                          guildId: t,
                                          product: e,
                                          onEditProduct: () => l(e.id),
                                          onUnpublishProduct: () => {
                                              var n;
                                              return (n = e.id), void (0, m.Qm)(t, n, { published: !1 });
                                          },
                                          onDeleteProduct: () => {
                                              var l, r;
                                              return (
                                                  (l = e.id),
                                                  (r = e.name),
                                                  void (0, s.openModalLazy)(async () => {
                                                      let { default: e } = await n.e("37214").then(n.bind(n, 100909));
                                                      return (n) =>
                                                          (0, i.jsx)(e, {
                                                              guildId: t,
                                                              productId: l,
                                                              productName: r,
                                                              ...n,
                                                          });
                                                  })
                                              );
                                          },
                                          onCopyProductLink: () => {
                                              var n;
                                              return (n = e.id), void (0, u.C)((0, h.KW)(t, n));
                                          },
                                          onTestDownload: () => _.A.open({ guildId: t, productId: e.id }),
                                          onReportProduct: () => {},
                                          disabled: o,
                                      }),
                                  },
                                  e.id,
                              ),
                          ),
                      })
                    : (0, i.jsx)(d.A, { guildId: t, showCTA: !1, responsive: !1 }),
        }),
    });
}
function j(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, c.nq)(t),
        s = (e) => {
            x.q(t, e);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.$, { text: A.intl.string(A.t.riG6Da), icon: a.j, onClick: () => s(null), disabled: n }),
            (0, i.jsx)(o.h, { size: 24 }),
            (0, i.jsx)(f, { guildId: t, handleCreateOrEditProduct: s }),
        ],
    });
}

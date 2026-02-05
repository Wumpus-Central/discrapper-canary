"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(732955),
    l = n(397927),
    r = n(319664),
    a = n(465932),
    o = n(957565),
    d = n(912702),
    c = n(250627),
    u = n(253141),
    m = n(579970),
    g = n(960427),
    x = n(482711),
    h = n(985018),
    _ = n(296217);
function A(e) {
    let { guildId: t, handleCreateOrEditProduct: s } = e,
        m = (0, c.fZ)(t, { publishedOnly: !1 }),
        { shouldRestrictUpdatingCreatorMonetizationSettings: A } = (0, a.nq)(t),
        p = m.length > 0;
    return (0, i.jsx)("div", {
        className: _.aW,
        children: (0, i.jsx)(l.D0$, {
            label: p ? h.intl.string(h.t.RwuStQ) : h.intl.string(h.t.WKMcMW),
            children: (e) =>
                p
                    ? (0, i.jsx)("ul", {
                          className: _.Hn,
                          id: e.controlId,
                          children: m.map((e) =>
                              (0, i.jsx)(
                                  "li",
                                  {
                                      children: (0, i.jsx)(x.A, {
                                          guildId: t,
                                          product: e,
                                          onEditProduct: () => s(e.id),
                                          onUnpublishProduct: () => {
                                              var n;
                                              return (n = e.id), void (0, d.Qm)(t, n, { published: !1 });
                                          },
                                          onDeleteProduct: () => {
                                              var s, r;
                                              return (
                                                  (s = e.id),
                                                  (r = e.name),
                                                  void (0, l.mMO)(async () => {
                                                      let { default: e } = await n.e("37214").then(n.bind(n, 100909));
                                                      return (n) =>
                                                          (0, i.jsx)(e, {
                                                              guildId: t,
                                                              productId: s,
                                                              productName: r,
                                                              ...n,
                                                          });
                                                  })
                                              );
                                          },
                                          onCopyProductLink: () => {
                                              var n;
                                              return (n = e.id), void (0, o.C)((0, u.KW)(t, n));
                                          },
                                          onTestDownload: () => g.A.open({ guildId: t, productId: e.id }),
                                          onReportProduct: () => {},
                                          disabled: A,
                                      }),
                                  },
                                  e.id,
                              ),
                          ),
                      })
                    : (0, i.jsx)(r.A, { guildId: t, showCTA: !1, responsive: !1 }),
        }),
    });
}
function p(e) {
    let { guildId: t } = e,
        { shouldRestrictUpdatingCreatorMonetizationSettings: n } = (0, a.nq)(t),
        r = (e) => {
            m.q(t, e);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.$nd, { text: h.intl.string(h.t.riG6Da), icon: l.j96, onClick: () => r(null), disabled: n }),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsx)(A, { guildId: t, handleCreateOrEditProduct: r }),
        ],
    });
}

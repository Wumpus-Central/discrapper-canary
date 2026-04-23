"use strict";
n.d(t, { Uf: () => S, XG: () => y, fs: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(939249),
    o = n(789645),
    l = n(534514),
    u = n(834730),
    c = n(241524),
    d = n(166532),
    _ = n(19311),
    f = n(482132),
    p = n(910804),
    h = n(376747),
    E = n(985018),
    m = n(702361),
    g = n(575650),
    A = n(938430),
    I = n(234275);
let T = (e) => {
        let { step: t, onClose: n } = e,
            i = (0, c.A)(h.T);
        return t === d.pn.CONFIRM || t === d.pn.BENEFITS
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: s()(m.N1, g.GI),
                  children: [
                      !i &&
                          (0, r.jsx)("div", {
                              className: m.oZ,
                              "aria-hidden": "true",
                              children: (0, r.jsx)("img", { src: I, alt: "", className: m.F0 }),
                          }),
                      (0, r.jsx)(a.D, {
                          className: m.G3,
                          onClick: () => n(),
                          "aria-label": E.intl.string(E.t.cpT0Cq),
                          children: (0, r.jsx)(o.P, { size: "md", color: "currentColor", className: m.ut }),
                      }),
                  ],
              });
    },
    S = (e) => {
        let {
            icon: t,
            storeListingBenefits: n,
            skuBenefits: i,
            application: s,
            title: a,
            subtitle: o,
            description: l,
        } = e;
        return null == s
            ? null
            : (0, r.jsx)("div", {
                  className: m.RP,
                  children: (0, r.jsxs)(p.$K, {
                      children: [
                          (0, r.jsx)(p.KF, { application: s, asset: t }),
                          (0, r.jsx)(p.kj, { children: a }),
                          (0, r.jsx)(p.ri, {}),
                          (0, r.jsx)(p.Mx, { title: o, description: l }),
                          (0, r.jsx)(p.iH, { applicationId: s.id, storeListingBenefits: n, skuBenefits: i }),
                      ],
                  }),
              });
    };
function y(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: m.NV,
        children: [
            (0, r.jsx)("img", { src: A, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(l.D, {
                className: m.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: E.intl.format(E.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(u.E, {
                className: m.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: E.intl.format(E.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsx)(f.UX, {
                children: (0, r.jsx)(_.Ay, {
                    onPrimary: n,
                    primaryCTA: _.ti.CONTINUE,
                    primaryText: E.intl.string(E.t["JtWl+a"]),
                }),
            }),
        ],
    });
}

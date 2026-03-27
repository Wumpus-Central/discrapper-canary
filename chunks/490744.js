"use strict";
n.d(t, { Uf: () => A, XG: () => I, fs: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(241524),
    l = n(166532),
    u = n(19311),
    c = n(482132),
    d = n(910804),
    _ = n(376747),
    f = n(985018),
    p = n(566396),
    h = n(16571),
    m = n(938430),
    E = n(234275);
let g = (e) => {
        let { step: t, onClose: n } = e,
            i = (0, o.A)(_.T);
        return t === l.pn.CONFIRM || t === l.pn.BENEFITS
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: s()(p.N1, h.GI),
                  children: [
                      !i &&
                          (0, r.jsx)("div", {
                              className: p.oZ,
                              "aria-hidden": "true",
                              children: (0, r.jsx)("img", { src: E, alt: "", className: p.F0 }),
                          }),
                      (0, r.jsx)(a.DUT, {
                          className: p.G3,
                          onClick: () => n(),
                          "aria-label": f.intl.string(f.t.cpT0Cq),
                          children: (0, r.jsx)(a.PGe, { size: "md", color: "currentColor", className: p.ut }),
                      }),
                  ],
              });
    },
    A = (e) => {
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
                  className: p.RP,
                  children: (0, r.jsxs)(d.$K, {
                      children: [
                          (0, r.jsx)(d.KF, { application: s, asset: t }),
                          (0, r.jsx)(d.kj, { children: a }),
                          (0, r.jsx)(d.ri, {}),
                          (0, r.jsx)(d.Mx, { title: o, description: l }),
                          (0, r.jsx)(d.iH, { applicationId: s.id, storeListingBenefits: n, skuBenefits: i }),
                      ],
                  }),
              });
    };
function I(e) {
    let { tierName: t, onConfirm: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: p.NV,
        children: [
            (0, r.jsx)("img", { src: m, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(a.Heading, {
                className: p.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: f.intl.format(f.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(a.Text, {
                className: p.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: f.intl.format(f.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsx)(c.UX, {
                children: (0, r.jsx)(u.Ay, {
                    onPrimary: n,
                    primaryCTA: u.ti.CONTINUE,
                    primaryText: f.intl.string(f.t["JtWl+a"]),
                }),
            }),
        ],
    });
}

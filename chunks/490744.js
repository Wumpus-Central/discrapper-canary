"use strict";
r.d(t, { Uf: () => I, XG: () => x, fs: () => E });
var i = r(627968);
r(64700);
var a = r(503698),
    n = r.n(a),
    s = r(939249),
    l = r(789645),
    o = r(534514),
    c = r(834730),
    d = r(241524),
    u = r(166532),
    _ = r(19311),
    p = r(482132),
    f = r(4126),
    m = r(376747),
    h = r(985018),
    b = r(702361),
    g = r(575650),
    v = r(938430),
    A = r(234275);
let E = (e) => {
        let { step: t, onClose: r } = e,
            a = (0, d.A)(m.T);
        return t === u.pn.CONFIRM || t === u.pn.BENEFITS
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                  className: n()(b.N1, g.GI),
                  children: [
                      !a &&
                          (0, i.jsx)("div", {
                              className: b.oZ,
                              "aria-hidden": "true",
                              children: (0, i.jsx)("img", { src: A, alt: "", className: b.F0 }),
                          }),
                      (0, i.jsx)(s.D, {
                          className: b.G3,
                          onClick: () => r(),
                          "aria-label": h.intl.string(h.t.cpT0Cq),
                          children: (0, i.jsx)(l.P, { size: "md", color: "currentColor", className: b.ut }),
                      }),
                  ],
              });
    },
    I = (e) => {
        let {
            icon: t,
            storeListingBenefits: r,
            skuBenefits: a,
            application: n,
            title: s,
            subtitle: l,
            description: o,
        } = e;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: b.RP,
                  children: (0, i.jsxs)(f.$K, {
                      children: [
                          (0, i.jsx)(f.KF, { application: n, asset: t }),
                          (0, i.jsx)(f.kj, { children: s }),
                          (0, i.jsx)(f.ri, {}),
                          (0, i.jsx)(f.Mx, { title: l, description: o }),
                          (0, i.jsx)(f.iH, { applicationId: n.id, storeListingBenefits: r, skuBenefits: a }),
                      ],
                  }),
              });
    };
function x(e) {
    let { tierName: t, onConfirm: r, subscription: a } = e;
    return (0, i.jsxs)("div", {
        className: b.NV,
        children: [
            (0, i.jsx)("img", { src: v, alt: "", width: 300, height: 126 }),
            (0, i.jsx)(o.D, {
                className: b.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: h.intl.format(h.t.wLFT6z, { tier: t }),
            }),
            (0, i.jsx)(c.E, {
                className: b.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: h.intl.format(h.t.OsAK9h, { timestamp: a?.currentPeriodEnd }),
            }),
            (0, i.jsx)(p.UX, {
                children: (0, i.jsx)(_.Ay, {
                    onPrimary: r,
                    primaryCTA: _.ti.CONTINUE,
                    primaryText: h.intl.string(h.t["JtWl+a"]),
                }),
            }),
        ],
    });
}

"use strict";
n.d(t, { Uf: () => m, XG: () => g, fs: () => h });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(241524),
    s = n(166532),
    o = n(19311),
    l = n(482132),
    u = n(910804),
    c = n(376747),
    d = n(985018),
    _ = n(123346),
    f = n(938430),
    p = n(234275);
let h = (e) => {
        let { step: t, onClose: n } = e,
            o = (0, a.A)(c.T);
        return t === s.pn.CONFIRM || t === s.pn.BENEFITS
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: _.N1,
                  children: [
                      !o &&
                          (0, r.jsx)("div", {
                              className: _.oZ,
                              "aria-hidden": "true",
                              children: (0, r.jsx)("img", { src: p, alt: "", className: _.F0 }),
                          }),
                      (0, r.jsx)(i.DUT, {
                          className: _.G3,
                          onClick: () => n(),
                          "aria-label": d.intl.string(d.t.cpT0Cq),
                          children: (0, r.jsx)(i.PGe, { size: "md", color: "currentColor", className: _.ut }),
                      }),
                  ],
              });
    },
    m = (e) => {
        let {
            icon: t,
            storeListingBenefits: n,
            skuBenefits: i,
            application: a,
            title: s,
            subtitle: o,
            description: l,
        } = e;
        return null == a
            ? null
            : (0, r.jsx)("div", {
                  className: _.RP,
                  children: (0, r.jsxs)(u.$K, {
                      children: [
                          (0, r.jsx)(u.KF, { application: a, asset: t }),
                          (0, r.jsx)(u.kj, { children: s }),
                          (0, r.jsx)(u.ri, {}),
                          (0, r.jsx)(u.Mx, { title: o, description: l }),
                          (0, r.jsx)(u.iH, { applicationId: a.id, storeListingBenefits: n, skuBenefits: i }),
                      ],
                  }),
              });
    };
function g(e) {
    let { tierName: t, onConfirm: n, subscription: a } = e;
    return (0, r.jsxs)("div", {
        className: _.NV,
        children: [
            (0, r.jsx)("img", { src: f, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(i.Heading, {
                className: _.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: d.intl.format(d.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(i.Text, {
                className: _.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: d.intl.format(d.t.OsAK9h, { timestamp: a?.currentPeriodEnd }),
            }),
            (0, r.jsx)(l.UX, {
                children: (0, r.jsx)(o.A, {
                    onPrimary: n,
                    primaryCTA: o.t.CONTINUE,
                    primaryText: d.intl.string(d.t["JtWl+a"]),
                }),
            }),
        ],
    });
}

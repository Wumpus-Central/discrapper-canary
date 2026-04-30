s.d(t, { Uf: () => C, XG: () => T, fs: () => k });
var i = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    a = s(939249),
    n = s(789645),
    c = s(534514),
    d = s(834730),
    x = s(241524),
    o = s(166532),
    u = s(19311),
    m = s(482132),
    h = s(4126),
    j = s(376747),
    p = s(985018),
    N = s(702361),
    v = s(575650),
    f = s(938430),
    g = s(234275);
let k = (e) => {
        let { step: t, onClose: s } = e,
            r = (0, x.A)(j.T);
        return t === o.pn.CONFIRM || t === o.pn.BENEFITS
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                  className: l()(N.N1, v.GI),
                  children: [
                      !r &&
                          (0, i.jsx)("div", {
                              className: N.oZ,
                              "aria-hidden": "true",
                              children: (0, i.jsx)("img", { src: g, alt: "", className: N.F0 }),
                          }),
                      (0, i.jsx)(a.D, {
                          className: N.G3,
                          onClick: () => s(),
                          "aria-label": p.intl.string(p.t.cpT0Cq),
                          children: (0, i.jsx)(n.P, { size: "md", color: "currentColor", className: N.ut }),
                      }),
                  ],
              });
    },
    C = (e) => {
        let {
            icon: t,
            storeListingBenefits: s,
            skuBenefits: r,
            application: l,
            title: a,
            subtitle: n,
            description: c,
        } = e;
        return null == l
            ? null
            : (0, i.jsx)("div", {
                  className: N.RP,
                  children: (0, i.jsxs)(h.$K, {
                      children: [
                          (0, i.jsx)(h.KF, { application: l, asset: t }),
                          (0, i.jsx)(h.kj, { children: a }),
                          (0, i.jsx)(h.ri, {}),
                          (0, i.jsx)(h.Mx, { title: n, description: c }),
                          (0, i.jsx)(h.iH, { applicationId: l.id, storeListingBenefits: s, skuBenefits: r }),
                      ],
                  }),
              });
    };
function T(e) {
    let { tierName: t, onConfirm: s, subscription: r } = e;
    return (0, i.jsxs)("div", {
        className: N.NV,
        children: [
            (0, i.jsx)("img", { src: f, alt: "", width: 300, height: 126 }),
            (0, i.jsx)(c.D, {
                className: N.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: p.intl.format(p.t.wLFT6z, { tier: t }),
            }),
            (0, i.jsx)(d.E, {
                className: N.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: p.intl.format(p.t.OsAK9h, { timestamp: r?.currentPeriodEnd }),
            }),
            (0, i.jsx)(m.UX, {
                children: (0, i.jsx)(u.Ay, {
                    onPrimary: s,
                    primaryCTA: u.ti.CONTINUE,
                    primaryText: p.intl.string(p.t["JtWl+a"]),
                }),
            }),
        ],
    });
}

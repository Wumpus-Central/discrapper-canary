n.d(t, { Uf: () => g, XG: () => S, fs: () => y });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    o = n(939249),
    l = n(789645),
    s = n(534514),
    d = n(834730),
    u = n(241524),
    c = n(166532),
    _ = n(19311),
    p = n(482132),
    C = n(4126),
    h = n(376747),
    E = n(985018),
    m = n(702361),
    A = n(575650),
    I = n(938430),
    T = n(234275);
let y = (e) => {
        let { step: t, onClose: n } = e,
            a = (0, u.A)(h.T);
        return t === c.pn.CONFIRM || t === c.pn.BENEFITS
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: i()(m.N1, A.GI),
                  children: [
                      !a &&
                          (0, r.jsx)("div", {
                              className: m.oZ,
                              "aria-hidden": "true",
                              children: (0, r.jsx)("img", { src: T, alt: "", className: m.F0 }),
                          }),
                      (0, r.jsx)(o.D, {
                          className: m.G3,
                          onClick: () => n(),
                          "aria-label": E.intl.string(E.t.cpT0Cq),
                          children: (0, r.jsx)(l.P, { size: "md", color: "currentColor", className: m.ut }),
                      }),
                  ],
              });
    },
    g = (e) => {
        let {
            icon: t,
            storeListingBenefits: n,
            skuBenefits: a,
            application: i,
            title: o,
            subtitle: l,
            description: s,
        } = e;
        return null == i
            ? null
            : (0, r.jsx)("div", {
                  className: m.RP,
                  children: (0, r.jsxs)(C.$K, {
                      children: [
                          (0, r.jsx)(C.KF, { application: i, asset: t }),
                          (0, r.jsx)(C.kj, { children: o }),
                          (0, r.jsx)(C.ri, {}),
                          (0, r.jsx)(C.Mx, { title: l, description: s }),
                          (0, r.jsx)(C.iH, { applicationId: i.id, storeListingBenefits: n, skuBenefits: a }),
                      ],
                  }),
              });
    };
function S(e) {
    let { tierName: t, onConfirm: n, subscription: a } = e;
    return (0, r.jsxs)("div", {
        className: m.NV,
        children: [
            (0, r.jsx)("img", { src: I, alt: "", width: 300, height: 126 }),
            (0, r.jsx)(s.D, {
                className: m.i1,
                variant: "heading-xl/extrabold",
                color: "text-strong",
                children: E.intl.format(E.t.wLFT6z, { tier: t }),
            }),
            (0, r.jsx)(d.E, {
                className: m.sT,
                variant: "text-md/medium",
                color: "text-default",
                children: E.intl.format(E.t.OsAK9h, { timestamp: a?.currentPeriodEnd }),
            }),
            (0, r.jsx)(p.UX, {
                children: (0, r.jsx)(_.Ay, {
                    onPrimary: n,
                    primaryCTA: _.ti.CONTINUE,
                    primaryText: E.intl.string(E.t["JtWl+a"]),
                }),
            }),
        ],
    });
}

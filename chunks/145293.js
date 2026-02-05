n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(960488),
    a = n(311907),
    l = n(397927),
    s = n(707606),
    o = n(490415),
    d = n(793574),
    c = n(688810),
    u = n(235986),
    A = n(498400),
    h = n(287809),
    _ = n(107834),
    m = n(652215),
    p = n(788868),
    g = n(187585);
let E = a.Ay.connectStores([h.default], () => ({ user: h.default.getCurrentUser() }))(
    (0, o.A)(
        (0, s.A)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: a } = (0, c.Ay)(d.A.HOME_PAGE_PREMIUM_TAB);
            return t
                ? (0, i.jsxs)("div", {
                      className: g.ql,
                      children: [
                          null == n && (0, i.jsx)(_.A, {}),
                          (0, i.jsx)(c.f5, {
                              value: a,
                              children:
                                  null == n
                                      ? (0, i.jsx)(u.A, {
                                            align: u.A.Align.CENTER,
                                            justify: u.A.Justify.CENTER,
                                            children: (0, i.jsx)(l.y$y, { className: g.u1 }),
                                        })
                                      : (0, i.jsx)(A.A, { entrypoint: p.Mf.ApplicationStoreHome }),
                          }),
                      ],
                  })
                : (0, i.jsx)(r.rd, { to: m.BVt.LOGIN });
        }),
    ),
);

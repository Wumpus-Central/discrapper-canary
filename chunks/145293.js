s.d(e, { A: () => E });
var i = s(627968);
s(64700);
var n = s(873263),
    r = s(311907),
    o = s(397927),
    a = s(707606),
    d = s(490415),
    l = s(793574),
    A = s(688810),
    c = s(235986),
    _ = s(498400),
    p = s(287809),
    I = s(107834),
    O = s(652215),
    h = s(788868),
    u = s(50596);
let E = r.Ay.connectStores([p.default], () => ({ user: p.default.getCurrentUser() }))(
    (0, d.A)(
        (0, a.A)((t) => {
            let { isAuthenticated: e, user: s } = t,
                { analyticsLocations: r } = (0, A.Ay)(l.A.HOME_PAGE_PREMIUM_TAB);
            return e
                ? (0, i.jsxs)("div", {
                      className: u.ql,
                      children: [
                          null == s && (0, i.jsx)(I.A, {}),
                          (0, i.jsx)(A.f5, {
                              value: r,
                              children:
                                  null == s
                                      ? (0, i.jsx)(c.A, {
                                            align: c.A.Align.CENTER,
                                            justify: c.A.Justify.CENTER,
                                            children: (0, i.jsx)(o.y$y, { className: u.u1 }),
                                        })
                                      : (0, i.jsx)(_.A, { entrypoint: h.Mf.ApplicationStoreHome }),
                          }),
                      ],
                  })
                : (0, i.jsx)(n.rd, { to: O.BVt.LOGIN });
        }),
    ),
);

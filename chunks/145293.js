s.d(e, { A: () => I });
var n = s(627968);
s(64700);
var r = s(873263),
    i = s(311907),
    o = s(289873),
    a = s(707606),
    l = s(490415),
    d = s(793574),
    A = s(688810),
    c = s(235986),
    u = s(498400),
    _ = s(287809),
    h = s(107834),
    p = s(652215),
    O = s(788868),
    E = s(50596);
let I = i.Ay.connectStores([_.default], () => ({ user: _.default.getCurrentUser() }))(
    (0, l.A)(
        (0, a.A)((t) => {
            let { isAuthenticated: e, user: s } = t,
                { analyticsLocations: i } = (0, A.Ay)(d.A.HOME_PAGE_PREMIUM_TAB);
            return e
                ? (0, n.jsxs)("div", {
                      className: E.ql,
                      children: [
                          null == s && (0, n.jsx)(h.A, {}),
                          (0, n.jsx)(A.f5, {
                              value: i,
                              children:
                                  null == s
                                      ? (0, n.jsx)(c.A, {
                                            align: c.A.Align.CENTER,
                                            justify: c.A.Justify.CENTER,
                                            children: (0, n.jsx)(o.y, { className: E.u1 }),
                                        })
                                      : (0, n.jsx)(u.A, { entrypoint: O.Mf.ApplicationStoreHome }),
                          }),
                      ],
                  })
                : (0, n.jsx)(r.rd, { to: p.BVt.LOGIN });
        }),
    ),
);

n.d(t, {
    A: () => b,
});
var r = n(627968);
n(64700);
var i = n(960488),
    l = n(311907),
    a = n(397927),
    s = n(707606),
    o = n(490415),
    c = n(793574),
    u = n(688810),
    d = n(235986),
    p = n(142201),
    f = n(287809),
    h = n(107834),
    A = n(652215),
    g = n(788868),
    m = n(187585);
let b = l.Ay.connectStores([f.default], () => ({
    user: f.default.getCurrentUser(),
}))(
    (0, o.A)(
        (0, s.A)((e) => {
            let { isAuthenticated: t, user: n } = e,
                { analyticsLocations: l } = (0, u.Ay)(c.A.HOME_PAGE_PREMIUM_TAB);
            return t
                ? (0, r.jsxs)("div", {
                      className: m.ql,
                      children: [
                          null == n && (0, r.jsx)(h.A, {}),
                          (0, r.jsx)(u.f5, {
                              value: l,
                              children:
                                  null == n
                                      ? (0, r.jsx)(d.A, {
                                            align: d.A.Align.CENTER,
                                            justify: d.A.Justify.CENTER,
                                            children: (0, r.jsx)(a.y$y, {
                                                className: m.u1,
                                            }),
                                        })
                                      : (0, r.jsx)(p.A, {
                                            entrypoint: g.tU.ApplicationStoreHome,
                                        }),
                          }),
                      ],
                  })
                : (0, r.jsx)(i.rd, {
                      to: A.BVt.LOGIN,
                  });
        }),
    ),
);

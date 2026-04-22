n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(990078),
    r = n(462887),
    o = n(187322),
    d = n(736653),
    u = n(573648),
    c = n(681819),
    g = n(882997),
    m = n(954571),
    _ = n(652215),
    A = n(475135);
let h = (e) => {
    let { disabled: t = !1, type: n, className: s, innerClassName: h, onConnect: p } = e,
        x = (0, d.Ay)(),
        E = u.A.get((0, c.ML)(n));
    return (0, i.jsx)(a.m, {
        text: E.name,
        children: (0, i.jsx)("div", {
            className: l()(A.iE, s),
            children: (0, i.jsx)(o.vN, {
                children: (0, i.jsx)("button", {
                    className: l()(A.vW, h),
                    type: "button",
                    disabled: t,
                    style: { backgroundImage: `url('${((0, r.M))(x) ? E.icon.darkSVG : E.icon.lightSVG}')` },
                    onClick:
                        null != p
                            ? p
                            : () => {
                                  let e;
                                  return (
                                      (e = u.A.get(n)),
                                      void ((0, g.A)({ platformType: e.type, location: "Friends List" }),
                                      m.default.track(_.HAw.ACCOUNT_LINK_STEP, {
                                          previous_step: "desktop connections",
                                          current_step: "desktop oauth",
                                          platform_type: e.type,
                                      }))
                                  );
                              },
                    "aria-label": E.name,
                }),
            }),
        }),
    });
};

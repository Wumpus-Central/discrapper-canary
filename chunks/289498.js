n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(990078),
    l = n(582754),
    o = n(397927),
    c = n(736653),
    d = n(573648),
    u = n(681819),
    _ = n(882997),
    m = n(954571),
    A = n(652215),
    g = n(277816);
let E = (e) => {
    let { disabled: t = !1, type: n, className: s, innerClassName: E, onConnect: h } = e,
        p = (0, c.Ay)(),
        C = d.A.get((0, u.ML)(n));
    return (0, i.jsx)(a.m, {
        text: C.name,
        children: (0, i.jsx)("div", {
            className: r()(g.iE, s),
            children: (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("button", {
                    className: r()(g.vW, E),
                    type: "button",
                    disabled: t,
                    style: { backgroundImage: `url('${((0, l.Mw))(p) ? C.icon.darkSVG : C.icon.lightSVG}')` },
                    onClick:
                        null != h
                            ? h
                            : () => {
                                  let e;
                                  return (
                                      (e = d.A.get(n)),
                                      void ((0, _.A)({ platformType: e.type, location: "Friends List" }),
                                      m.default.track(A.HAw.ACCOUNT_LINK_STEP, {
                                          previous_step: "desktop connections",
                                          current_step: "desktop oauth",
                                          platform_type: e.type,
                                      }))
                                  );
                              },
                    "aria-label": C.name,
                }),
            }),
        }),
    });
};

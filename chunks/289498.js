a.d(t, { A: () => v });
var n = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    l = a(990078),
    c = a(462887),
    r = a(187322),
    d = a(736653),
    o = a(573648),
    p = a(874490),
    u = a(968309),
    h = a(174459),
    m = a(652215),
    N = a(475135);
let v = function (e) {
    let { disabled: t = !1, type: a, className: i, innerClassName: v, onConnect: A } = e,
        b = (0, d.Ay)(),
        k = o.A.get((0, p.ML)(a));
    return (0, n.jsx)(l.m, {
        text: k.name,
        children: (0, n.jsx)("div", {
            className: s()(N.iE, i),
            children: (0, n.jsx)(r.vN, {
                children: (0, n.jsx)("button", {
                    className: s()(N.vW, v),
                    type: "button",
                    disabled: t,
                    style: { backgroundImage: `url('${((0, c.M))(b) ? k.icon.darkSVG : k.icon.lightSVG}')` },
                    onClick:
                        null != A
                            ? A
                            : () => {
                                  let e;
                                  return (
                                      (e = o.A.get(a)),
                                      void ((0, u.A)({ platformType: e.type, location: "Friends List" }),
                                      h.default.track(m.HAw.ACCOUNT_LINK_STEP, {
                                          previous_step: "desktop connections",
                                          current_step: "desktop oauth",
                                          platform_type: e.type,
                                      }))
                                  );
                              },
                    "aria-label": k.name,
                }),
            }),
        }),
    });
};

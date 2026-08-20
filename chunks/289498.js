n.d(t, { A: () => v });
var a = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    l = n(462887),
    c = n(866665),
    r = n(259678),
    d = n(736653),
    o = n(573648),
    p = n(874490),
    u = n(968309),
    h = n(174459),
    m = n(652215),
    N = n(397270);
let v = function (e) {
    let { disabled: t = !1, type: n, className: i, innerClassName: v, onConnect: A } = e,
        b = (0, d.Ay)(),
        k = o.A.get((0, p.ML)(n));
    return (0, a.jsx)(c.m, {
        text: k.name,
        children: (0, a.jsx)("div", {
            className: s()(N.iE, i),
            children: (0, a.jsx)(r.vN, {
                children: (0, a.jsx)("button", {
                    className: s()(N.vW, v),
                    type: "button",
                    disabled: t,
                    style: { backgroundImage: `url('${((0, l.M))(b) ? k.icon.darkSVG : k.icon.lightSVG}')` },
                    onClick:
                        null != A
                            ? A
                            : () => {
                                  let e;
                                  return (
                                      (e = o.A.get(n)),
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

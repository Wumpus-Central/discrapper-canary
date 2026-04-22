s.d(t, { A: () => h });
var l = s(627968);
s(64700);
var n = s(163328),
    a = s(534514),
    r = s(834730),
    i = s(821609),
    o = s(303727),
    d = s(406704),
    c = s(985018),
    u = s(322264);
function h(e) {
    let { channel: t, header: s, startThread: h } = e,
        g = (0, d.n)(t),
        m = (0, d.Tb)(t);
    return (0, l.jsxs)("div", {
        className: u.kL,
        children: [
            (0, l.jsxs)("div", {
                className: u.zc,
                children: [
                    (0, l.jsx)("div", {
                        className: u.Kk,
                        children: (0, l.jsx)(n.y, { size: "custom", color: "currentColor", width: 36, height: 36 }),
                    }),
                    (0, l.jsx)(o.A, { className: u.uf }),
                ],
            }),
            (0, l.jsx)(a.D, { className: u.wx, variant: "heading-xl/semibold", children: s }),
            (0, l.jsx)(r.E, { color: "text-default", variant: "text-md/normal", children: c.intl.string(c.t.jmq9GC) }),
            g || m
                ? (0, l.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: u.lO,
                      children: (0, l.jsx)(i.$, { variant: "primary", text: c.intl.string(c.t.rBIGBL), onClick: h }),
                  })
                : null,
        ],
    });
}

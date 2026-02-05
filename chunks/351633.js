s.d(t, { A: () => d });
var l = s(627968);
s(64700);
var n = s(397927),
    a = s(303727),
    r = s(406704),
    i = s(985018),
    o = s(993229);
function d(e) {
    let { channel: t, header: s, startThread: d } = e,
        c = (0, r.n)(t),
        u = (0, r.Tb)(t);
    return (0, l.jsxs)("div", {
        className: o.kL,
        children: [
            (0, l.jsxs)("div", {
                className: o.zc,
                children: [
                    (0, l.jsx)("div", {
                        className: o.Kk,
                        children: (0, l.jsx)(n.ysw, { size: "custom", color: "currentColor", width: 36, height: 36 }),
                    }),
                    (0, l.jsx)(a.A, { className: o.uf }),
                ],
            }),
            (0, l.jsx)(n.Heading, { className: o.wx, variant: "heading-xl/semibold", children: s }),
            (0, l.jsx)(n.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: i.intl.string(i.t.jmq9GC),
            }),
            c || u
                ? (0, l.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: o.lO,
                      children: (0, l.jsx)(n.Button, {
                          variant: "primary",
                          text: i.intl.string(i.t.rBIGBL),
                          onClick: d,
                      }),
                  })
                : null,
        ],
    });
}

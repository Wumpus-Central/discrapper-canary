n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(303727),
    s = n(406704),
    o = n(985018),
    i = n(993229);

function c(e) {
    let { channel: t, header: n, startThread: c } = e,
        u = (0, s.n)(t),
        d = (0, s.Tb)(t);
    return (0, r.jsxs)("div", {
        className: i.kL,
        children: [
            (0, r.jsxs)("div", {
                className: i.zc,
                children: [
                    (0, r.jsx)("div", {
                        className: i.Kk,
                        children: (0, r.jsx)(l.ysw, {
                            size: "custom",
                            color: "currentColor",
                            width: 36,
                            height: 36,
                        }),
                    }),
                    (0, r.jsx)(a.A, {
                        className: i.uf,
                    }),
                ],
            }),
            (0, r.jsx)(l.Heading, {
                className: i.wx,
                variant: "heading-xl/semibold",
                children: n,
            }),
            (0, r.jsx)(l.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: o.intl.string(o.t.jmq9GC),
            }),
            u || d
                ? (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: i.lO,
                      children: (0, r.jsx)(l.Button, {
                          variant: "primary",
                          text: o.intl.string(o.t.rBIGBL),
                          onClick: c,
                      }),
                  })
                : null,
        ],
    });
}

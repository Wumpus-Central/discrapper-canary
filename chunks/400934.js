n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(397927),
    s = n(600955),
    a = n(818348),
    c = n(985018),
    o = n(690450);

function d(e) {
    let { title: t, details: n } = e;
    return (0, r.jsxs)("div", {
        className: o.ph,
        children: [
            (0, r.jsxs)("div", {
                className: o.Ly,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    "string" == typeof n
                        ? (0, r.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: n,
                          })
                        : n,
                ],
            }),
            (0, r.jsx)(i.m, {
                text: c.intl.string(c.t.NQ4nCp),
                children: (0, r.jsx)(s.A, {
                    checked: !0,
                    disabled: !0,
                    onChange: a.tE,
                    className: o.R0,
                }),
            }),
        ],
    });
}

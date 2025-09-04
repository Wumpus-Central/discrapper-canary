n.d(t, { Z: () => o }), n(953529);
var i = n(951288);
n(647438);
var l = n(755721),
    r = n(481060),
    s = n(600164),
    a = n(488127);
function o(e) {
    let { description: t, icon: n, id: o, label: c, onChange: d, value: u } = e;
    return (0, i.jsxs)("div", {
        className: a.cardContent,
        children: [
            (0, i.jsxs)(s.Z, {
                justify: s.Z.Justify.BETWEEN,
                align: s.Z.Align.CENTER,
                children: [
                    n,
                    (0, i.jsx)(s.Z.Child, {
                        grow: 1,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            children: c,
                        }),
                    }),
                    null != d &&
                        null != u &&
                        (0, i.jsx)(l.T2, {
                            id: o,
                            checked: u,
                            onChange: d,
                        }),
                ],
            }),
            (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: a.cardDescription,
                children: t,
            }),
        ],
    });
}

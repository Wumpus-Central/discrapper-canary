n.d(t, { Z: () => o }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(259580),
    a = n(388032),
    s = n(788652);
function o(e) {
    let { role: t, onClick: n } = e;
    return (0, r.jsxs)(i.P3F, {
        className: s.container,
        onClick: n,
        children: [
            (0, r.jsx)("div", {
                className: s.icon,
                children: (0, r.jsx)(i.BFJ, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                }),
            }),
            (0, r.jsxs)("div", {
                className: s.description,
                children: [
                    (0, r.jsx)(i.Text, {
                        className: s.label,
                        color: "none",
                        variant: "text-md/bold",
                        children: a.intl.string(a.t.yiaoNr),
                    }),
                    (0, r.jsxs)(i.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: [t.name, " \u2022 ", a.intl.string(a.t.JwYI3O)],
                    }),
                ],
            }),
            (0, r.jsx)(l.Z, {
                className: s.arrow,
                direction: l.Z.Directions.RIGHT,
            }),
        ],
    });
}

n.d(t, { g: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(388032),
    a = n(775916);
function s(e) {
    let { forceFetchGuildProfile: t } = e;
    return (0, r.jsxs)("main", {
        className: a.container,
        children: [
            (0, r.jsxs)("div", {
                className: a.errorHeader,
                children: [
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        children: l.intl.string(l.t["/n9BoR"]),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: l.intl.string(l.t.DwKFKd),
                    }),
                ],
            }),
            (0, r.jsx)(i.Button, {
                variant: "primary",
                text: l.intl.string(l.t.w3ND8L),
                onClick: t,
            }),
        ],
    });
}

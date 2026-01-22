r.d(t, { A: () => l });
var n = r(627968);
r(64700);
var i = r(397927),
    s = r(840065),
    a = r(985018),
    o = r(299043);
function l(e) {
    let { onClose: t } = e;
    return (0, n.jsxs)("div", {
        className: o.op,
        children: [
            (0, n.jsx)(i.Heading, {
                className: o.qQ,
                color: "text-strong",
                variant: "heading-xl/bold",
                children: a.intl.string(a.t["3C+rbC"]),
            }),
            (0, n.jsx)(i.Text, {
                className: o.AC,
                color: "text-default",
                variant: "text-md/medium",
                children: a.intl.string(a.t.TS1L09),
            }),
            (0, n.jsx)(i.Text, {
                className: o.mO,
                color: "text-default",
                variant: "text-md/medium",
                children: a.intl.format(a.t.bWE0ZD, {
                    onClick: () => {
                        t(), (0, s.openUserSettings)();
                    },
                }),
            }),
            (0, n.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: o.x6,
                children: (0, n.jsx)(i.Button, {
                    variant: "primary",
                    size: "sm",
                    text: a.intl.string(a.t["yD/zkn"]),
                    type: "button",
                    onClick: t,
                }),
            }),
        ],
    });
}

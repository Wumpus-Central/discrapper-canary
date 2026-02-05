i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var s = i(397927),
    a = i(840065),
    r = i(985018),
    l = i(299043);
function o(e) {
    let { onClose: t } = e;
    return (0, n.jsxs)("div", {
        className: l.op,
        children: [
            (0, n.jsx)(s.Heading, {
                className: l.qQ,
                color: "text-strong",
                variant: "heading-xl/bold",
                children: r.intl.string(r.t["3C+rbC"]),
            }),
            (0, n.jsx)(s.Text, {
                className: l.AC,
                color: "text-default",
                variant: "text-md/medium",
                children: r.intl.string(r.t.TS1L09),
            }),
            (0, n.jsx)(s.Text, {
                className: l.mO,
                color: "text-default",
                variant: "text-md/medium",
                children: r.intl.format(r.t.bWE0ZD, {
                    onClick: () => {
                        t(), (0, a.openUserSettings)();
                    },
                }),
            }),
            (0, n.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: l.x6,
                children: (0, n.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: r.intl.string(r.t["yD/zkn"]),
                    type: "button",
                    onClick: t,
                }),
            }),
        ],
    });
}

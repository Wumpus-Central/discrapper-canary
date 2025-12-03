n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(518596),
    o = n(388032),
    s = n(631936);
function l(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)("div", {
        className: s.infoContainer,
        children: [
            (0, r.jsx)(i.Heading, {
                className: s.finishTitle,
                color: "header-primary",
                variant: "heading-xl/bold",
                children: o.intl.string(o.t["3C+rbC"]),
            }),
            (0, r.jsx)(i.Text, {
                className: s.subtitleFinish,
                color: "text-default",
                variant: "text-md/medium",
                children: o.intl.string(o.t.TS1L09),
            }),
            (0, r.jsx)(i.Text, {
                className: s.promptFinish,
                color: "text-default",
                variant: "text-md/medium",
                children: o.intl.format(o.t.bWE0ZD, {
                    onClick: () => {
                        t(), (0, a.openUserSettings)();
                    },
                }),
            }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: s.button,
                children: (0, r.jsx)(i.Button, {
                    variant: "primary",
                    size: "sm",
                    text: o.intl.string(o.t["yD/zkn"]),
                    type: "button",
                    onClick: t,
                }),
            }),
        ],
    });
}

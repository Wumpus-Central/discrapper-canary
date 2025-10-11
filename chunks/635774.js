n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(481060),
    o = n(518596),
    a = n(388032),
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
                children: a.intl.string(a.t["3C+rbG"]),
            }),
            (0, r.jsx)(i.Text, {
                className: s.subtitleFinish,
                color: "header-secondary",
                variant: "text-md/medium",
                children: a.intl.string(a.t.TS1L09),
            }),
            (0, r.jsx)(i.Text, {
                className: s.promptFinish,
                color: "header-secondary",
                variant: "text-md/medium",
                children: a.intl.format(a.t.bWE0ZG, {
                    onClick: () => {
                        t(), (0, o.openUserSettings)();
                    },
                }),
            }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: s.button,
                children: (0, r.jsx)(i.Button, {
                    variant: "primary",
                    size: "sm",
                    text: a.intl.string(a.t["yD/zkp"]),
                    type: "button",
                    onClick: t,
                }),
            }),
        ],
    });
}

r.d(t, { Z: () => l });
var n = r(951288);
r(647438);
var i = r(481060),
    o = r(518596),
    a = r(388032),
    s = r(631936);
function l(e) {
    let { onClose: t } = e;
    return (0, n.jsxs)("div", {
        className: s.infoContainer,
        children: [
            (0, n.jsx)(i.X6q, {
                className: s.finishTitle,
                color: "header-primary",
                variant: "heading-xl/bold",
                children: a.intl.string(a.t["3C+rbG"]),
            }),
            (0, n.jsx)(i.Text, {
                className: s.subtitleFinish,
                color: "header-secondary",
                variant: "text-md/medium",
                children: a.intl.string(a.t.TS1L09),
            }),
            (0, n.jsx)(i.Text, {
                className: s.promptFinish,
                color: "header-secondary",
                variant: "text-md/medium",
                children: a.intl.format(a.t.bWE0ZG, {
                    onClick: () => {
                        t(), (0, o.openUserSettings)();
                    },
                }),
            }),
            (0, n.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: s.button,
                children: (0, n.jsx)(i.zxk, {
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

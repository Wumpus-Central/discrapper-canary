n.d(t, { v: () => s }), n(953529);
var a = n(951288);
n(647438);
var r = n(481060),
    i = n(921944),
    l = n(388032),
    o = n(820762);
function s(e) {
    let { markAsDismissed: t, onCTA: n } = e;
    return (0, a.jsx)("div", {
        className: o.popup,
        children: (0, a.jsxs)("div", {
            className: o.content,
            children: [
                (0, a.jsx)(r.P3F, {
                    className: o.closeIcon,
                    onClick: () => t(i.L.USER_DISMISS),
                    children: (0, a.jsx)(r.Dio, { size: "xs" }),
                }),
                (0, a.jsx)(r.Text, {
                    className: o.description,
                    variant: "text-md/normal",
                    children: l.intl.string(l.t["Ny/0ur"]),
                }),
                (0, a.jsx)(r.Button, {
                    variant: "primary",
                    size: "sm",
                    text: l.intl.string(l.t.TYo739),
                    fullWidth: !0,
                    onClick: () => {
                        t(i.L.TAKE_ACTION), n();
                    },
                }),
            ],
        }),
    });
}

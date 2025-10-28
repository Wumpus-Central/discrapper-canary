n.d(t, { v: () => s }), n(953529);
var a = n(951288);
n(647438);
var r = n(481060),
    l = n(921944),
    i = n(388032),
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
                    onClick: () => t(l.L.USER_DISMISS),
                    children: (0, a.jsx)(r.Dio, { size: "xs" }),
                }),
                (0, a.jsx)(r.Text, {
                    className: o.description,
                    variant: "text-md/normal",
                    children: i.intl.string(i.t["Ny/0ui"]),
                }),
                (0, a.jsx)(r.Button, {
                    variant: "primary",
                    size: "sm",
                    text: i.intl.string(i.t.TYo738),
                    fullWidth: !0,
                    onClick: () => {
                        t(l.L.TAKE_ACTION), n();
                    },
                }),
            ],
        }),
    });
}

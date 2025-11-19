n.d(t, { v: () => o }), n(953529);
var a = n(54381);
n(473749);
var l = n(481060),
    i = n(921944),
    r = n(388032),
    s = n(820762);
function o(e) {
    let { markAsDismissed: t, onCTA: n } = e;
    return (0, a.jsx)("div", {
        className: s.popup,
        children: (0, a.jsxs)("div", {
            className: s.content,
            children: [
                (0, a.jsx)(l.P3F, {
                    className: s.closeIcon,
                    onClick: () => t(i.L.USER_DISMISS),
                    children: (0, a.jsx)(l.Dio, { size: "xs" }),
                }),
                (0, a.jsx)(l.Text, {
                    className: s.description,
                    variant: "text-md/normal",
                    children: r.intl.string(r.t["Ny/0ui"]),
                }),
                (0, a.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: r.intl.string(r.t.TYo738),
                    fullWidth: !0,
                    onClick: () => {
                        t(i.L.TAKE_ACTION), n();
                    },
                }),
            ],
        }),
    });
}

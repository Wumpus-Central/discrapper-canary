n.d(t, { v: () => o }), n(953529);
var a = n(951288);
n(647438);
var i = n(481060),
    r = n(921944),
    l = n(388032),
    s = n(820762);
function o(e) {
    let { markAsDismissed: t, onCTA: n } = e;
    return (0, a.jsx)("div", {
        className: s.popup,
        children: (0, a.jsxs)("div", {
            className: s.content,
            children: [
                (0, a.jsx)(i.P3F, {
                    className: s.closeIcon,
                    onClick: () => t(r.L.USER_DISMISS),
                    children: (0, a.jsx)(i.Dio, { size: "xs" }),
                }),
                (0, a.jsx)(i.Text, {
                    className: s.description,
                    variant: "text-md/normal",
                    children: l.intl.string(l.t["Ny/0ui"]),
                }),
                (0, a.jsx)(i.Button, {
                    variant: "primary",
                    size: "sm",
                    text: l.intl.string(l.t.TYo738),
                    fullWidth: !0,
                    onClick: () => {
                        t(r.L.TAKE_ACTION), n();
                    },
                }),
            ],
        }),
    });
}

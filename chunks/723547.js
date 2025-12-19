n.d(t, { v: () => o }), n(953529);
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(921944),
    l = n(388032),
    s = n(899855);
function o(e) {
    let { markAsDismissed: t, onCTA: n } = e;
    return (0, a.jsx)("div", {
        className: s.popup,
        children: (0, a.jsxs)("div", {
            className: s.content,
            children: [
                (0, a.jsx)(r.P3F, {
                    className: s.closeIcon,
                    onClick: () => t(i.L.USER_DISMISS),
                    children: (0, a.jsx)(r.Dio, { size: "xs" }),
                }),
                (0, a.jsx)(r.Text, {
                    className: s.description,
                    variant: "text-md/normal",
                    children: l.intl.string(l.t["Ny/0ui"]),
                }),
                (0, a.jsx)(r.Button, {
                    variant: "primary",
                    size: "sm",
                    text: l.intl.string(l.t.TYo738),
                    fullWidth: !0,
                    onClick: () => {
                        t(i.L.TAKE_ACTION), n();
                    },
                }),
            ],
        }),
    });
}

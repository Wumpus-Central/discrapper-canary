n.d(t, { v: () => l }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(921944),
    o = n(388032),
    s = n(820762);
function l(e) {
    let { markAsDismissed: t, onCTA: n } = e;
    return (0, r.jsx)("div", {
        className: s.popup,
        children: (0, r.jsxs)("div", {
            className: s.content,
            children: [
                (0, r.jsx)(i.P3F, {
                    className: s.closeIcon,
                    onClick: () => t(a.L.USER_DISMISS),
                    children: (0, r.jsx)(i.Dio, { size: "xs" }),
                }),
                (0, r.jsx)(i.Text, {
                    className: s.description,
                    variant: "text-md/normal",
                    children: o.intl.string(o.t["Ny/0ur"]),
                }),
                (0, r.jsx)(i.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: o.intl.string(o.t.TYo739),
                    fullWidth: !0,
                    onClick: () => {
                        t(a.L.TAKE_ACTION), n();
                    },
                }),
            ],
        }),
    });
}

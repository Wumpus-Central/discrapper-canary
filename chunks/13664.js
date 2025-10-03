n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var l = n(28664),
    i = n(755721),
    a = n(481060),
    s = n(388032),
    c = n(788931);
function o(e) {
    let { sendStartNotification: t, setSendStartNotification: n } = e,
        o = t ? s.intl.string(s.t.xAT8lJ) : s.intl.string(s.t["Y+18hY"]);
    return (0, r.jsx)("div", {
        className: c.notificationToggle,
        children: (0, r.jsx)(i.$q, {
            type: i.M0.INVERTED,
            size: 14,
            className: c.__invalid_checkbox,
            value: t,
            onChange: function () {
                n(!t);
            },
            children: (0, r.jsx)(a.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: (0, r.jsx)(l.u, {
                    position: "bottom",
                    text: s.intl.string(s.t["4A/xnZ"]),
                    "aria-label": s.intl.string(s.t["4A/xnZ"]),
                    children: (0, r.jsx)("span", { children: o }),
                }),
            }),
        }),
    });
}

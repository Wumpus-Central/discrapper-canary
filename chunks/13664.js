n.d(t, { Z: () => o });
var l = n(54381);
n(473749);
var r = n(28664),
    i = n(755721),
    a = n(481060),
    s = n(388032),
    c = n(788931);
function o(e) {
    let { sendStartNotification: t, setSendStartNotification: n } = e,
        o = t ? s.intl.string(s.t.xAT8lI) : s.intl.string(s.t["Y+18hV"]);
    return (0, l.jsx)("div", {
        className: c.notificationToggle,
        children: (0, l.jsx)(i.$q, {
            type: i.M0.INVERTED,
            size: 14,
            className: c.__invalid_checkbox,
            value: t,
            onChange: function () {
                n(!t);
            },
            children: (0, l.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: (0, l.jsx)(r.u, {
                    position: "bottom",
                    text: s.intl.string(s.t["4A/xnW"]),
                    "aria-label": s.intl.string(s.t["4A/xnW"]),
                    children: (0, l.jsx)("span", { children: o }),
                }),
            }),
        }),
    });
}

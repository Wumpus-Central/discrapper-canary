n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(28664),
    i = n(755721),
    a = n(481060),
    s = n(388032),
    o = n(628737);
function c(e) {
    let { sendStartNotification: t, setSendStartNotification: n } = e,
        c = t ? s.intl.string(s.t.xAT8lI) : s.intl.string(s.t["Y+18hV"]);
    return (0, r.jsx)("div", {
        className: o.notificationToggle,
        children: (0, r.jsx)(i.$q, {
            type: i.M0.INVERTED,
            size: 14,
            className: o.__invalid_checkbox,
            value: t,
            onChange: function () {
                n(!t);
            },
            children: (0, r.jsx)(a.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: (0, r.jsx)(l.u, {
                    position: "bottom",
                    text: s.intl.string(s.t["4A/xnW"]),
                    "aria-label": s.intl.string(s.t["4A/xnW"]),
                    children: (0, r.jsx)("span", { children: c }),
                }),
            }),
        }),
    });
}

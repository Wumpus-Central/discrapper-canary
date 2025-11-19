n.d(t, {
    b: () => f,
    t: () => d,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(44315),
    o = n(377171),
    s = n(981631),
    l = n(388032),
    c = n(803635);
function u(e) {
    let { label: t, backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: a, iconColor: s } = e;
    return (0, r.jsxs)("div", {
        className: c.badge,
        style: { backgroundColor: n },
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                className: c.__invalid_badgeText,
                children: t,
            }),
            (0, r.jsx)(a, {
                className: c.badgeIcon,
                color: null != s ? s : "currentColor",
                "aria-hidden": !0,
            }),
        ],
    });
}
function d() {
    return (0, r.jsx)(u, {
        label: l.intl.string(l.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: i.T$Z,
    });
}
function f() {
    return (0, r.jsx)(u, {
        label: l.intl.string(l.t.TgsPaP),
        icon: i.vdY,
        iconColor: (0, a.Lq)(s.Ilk.PRIMARY_330),
    });
}

n.d(t, {
    b: () => f,
    t: () => d,
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(44315),
    a = n(377171),
    s = n(981631),
    l = n(388032),
    c = n(28651);
function u(e) {
    let { label: t, backgroundColor: n = a.Z.BUTTON_SECONDARY_BACKGROUND, icon: o, iconColor: s } = e;
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
            (0, r.jsx)(o, {
                className: c.badgeIcon,
                color: null != s ? s : "currentColor",
                "aria-hidden": !0,
            }),
        ],
    });
}
function d() {
    return (0, r.jsx)(u, {
        label: l.intl.string(l.t["I+02Gh"]),
        backgroundColor: "#207B8D",
        icon: i.T$Z,
    });
}
function f() {
    return (0, r.jsx)(u, {
        label: l.intl.string(l.t.TgsPaG),
        icon: i.vdY,
        iconColor: (0, o.Lq)(s.Ilk.PRIMARY_330),
    });
}

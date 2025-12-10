n.d(t, {
    b: () => u,
    t: () => c,
});
var r = n(54381);
n(473749);
var i = n(692547),
    a = n(481060),
    o = n(388032),
    s = n(803635);
function l(e) {
    let {
        label: t,
        backgroundColor: n = i.Z.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: o,
        iconColor: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: s.badge,
        style: { backgroundColor: n },
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                className: s.__invalid_badgeText,
                children: t,
            }),
            (0, r.jsx)(o, {
                className: s.badgeIcon,
                color: null != l ? l : "currentColor",
                "aria-hidden": !0,
            }),
        ],
    });
}
function c() {
    return (0, r.jsx)(l, {
        label: o.intl.string(o.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: a.T$Z,
    });
}
function u() {
    return (0, r.jsx)(l, {
        label: o.intl.string(o.t.TgsPaP),
        icon: a.vdY,
        iconColor: i.Z.unsafe_rawColors.PRIMARY_330.css,
    });
}

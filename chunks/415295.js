n.d(t, {
    $: () => u,
    S: () => c,
});
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(397927),
    s = n(985018),
    o = n(530611);
function l(e) {
    let {
        label: t,
        backgroundColor: n = i.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: s,
        iconColor: l,
    } = e;
    return (0, r.jsxs)("div", {
        className: o.q,
        style: { backgroundColor: n },
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                className: o.__invalid_badgeText,
                children: t,
            }),
            (0, r.jsx)(s, {
                className: o.r,
                color: null != l ? l : "currentColor",
                "aria-hidden": !0,
            }),
        ],
    });
}
function c() {
    return (0, r.jsx)(l, {
        label: s.intl.string(s.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: a.BZI,
    });
}
function u() {
    return (0, r.jsx)(l, {
        label: s.intl.string(s.t.TgsPaP),
        icon: a.R2l,
        iconColor: i.A.unsafe_rawColors.PRIMARY_330.css,
    });
}

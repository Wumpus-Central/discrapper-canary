n.d(t, { $: () => m, S: () => u });
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(834730),
    s = n(175841),
    r = n(22231),
    o = n(985018),
    d = n(871466);
function c(e) {
    let {
        label: t,
        backgroundColor: n = l.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: s,
        iconColor: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: d.q,
        style: { backgroundColor: n },
        children: [
            (0, i.jsx)(a.E, {
                variant: "text-sm/normal",
                color: "always-white",
                className: d.__invalid_badgeText,
                children: t,
            }),
            (0, i.jsx)(s, { className: d.r, color: r ?? "currentColor", "aria-hidden": !0 }),
        ],
    });
}
function u() {
    return (0, i.jsx)(c, { label: o.intl.string(o.t["I+02Gs"]), backgroundColor: "#207B8D", icon: s.B });
}
function m() {
    return (0, i.jsx)(c, {
        label: o.intl.string(o.t.TgsPaP),
        icon: r.R,
        iconColor: l.A.unsafe_rawColors.PRIMARY_330.css,
    });
}

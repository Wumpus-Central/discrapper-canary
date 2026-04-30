n.d(t, { $: () => h, S: () => c });
var s = n(627968);
n(64700);
var i = n(661531),
    r = n(834730),
    l = n(175841),
    a = n(22231),
    d = n(985018),
    o = n(871466);
function u(e) {
    let {
        label: t,
        backgroundColor: n = i.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: l,
        iconColor: a,
    } = e;
    return (0, s.jsxs)("div", {
        className: o.q,
        style: { backgroundColor: n },
        children: [
            (0, s.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "always-white",
                className: o.__invalid_badgeText,
                children: t,
            }),
            (0, s.jsx)(l, { className: o.r, color: a ?? "currentColor", "aria-hidden": !0 }),
        ],
    });
}
function c() {
    return (0, s.jsx)(u, { label: d.intl.string(d.t["I+02Gs"]), backgroundColor: "#207B8D", icon: l.B });
}
function h() {
    return (0, s.jsx)(u, {
        label: d.intl.string(d.t.TgsPaP),
        icon: a.R,
        iconColor: i.A.unsafe_rawColors.PRIMARY_330.css,
    });
}

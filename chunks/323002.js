l.d(t, { default: () => b });
var r = l(627968);
l(64700);
var a = l(861672),
    e = l(477782),
    i = l(442433),
    s = l(793574),
    u = l(688810),
    o = l(585171),
    c = l(374426),
    d = l(985018);
function A(n) {
    let { guildId: t, onSelect: l, onPickerClose: s, onInteraction: u } = n,
        A = (0, c.A)(t, s),
        b = (0, o.A)();
    return (0, r.jsx)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: i.Z_,
        "aria-label": d.intl.string(d.t.liqwPJ),
        onSelect: l,
        onInteraction: u,
        children: (0, r.jsxs)(e.rX, { children: [b, A] }),
    });
}
function b(n) {
    let { analyticsLocations: t } = (0, u.Ay)(n.sourceAnalyticsLocations, s.A.SOUNDBOARD_CONTEXT_MENU);
    return (0, r.jsx)(u.f5, { value: t, children: (0, r.jsx)(A, { ...n }) });
}

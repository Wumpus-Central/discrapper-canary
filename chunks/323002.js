l.d(t, { default: () => A });
var r = l(627968);
l(64700);
var a = l(397927),
    e = l(442433),
    i = l(793574),
    s = l(688810),
    u = l(585171),
    o = l(374426),
    c = l(985018);
function d(n) {
    let { guildId: t, onSelect: l, onPickerClose: i, onInteraction: s } = n,
        d = (0, o.A)(t, i),
        A = (0, u.A)();
    return (0, r.jsx)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: e.Z_,
        "aria-label": c.intl.string(c.t.liqwPJ),
        onSelect: l,
        onInteraction: s,
        children: (0, r.jsxs)(a.rXV, { children: [A, d] }),
    });
}
function A(n) {
    let { analyticsLocations: t } = (0, s.Ay)(n.sourceAnalyticsLocations, i.A.SOUNDBOARD_CONTEXT_MENU);
    return (0, r.jsx)(s.f5, { value: t, children: (0, r.jsx)(d, { ...n }) });
}

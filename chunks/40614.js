n.d(t, { V: () => d });
var r = n(54381),
    i = n(442837),
    l = n(481060),
    a = n(695346),
    o = n(885110),
    s = n(388032),
    c = n(654642);
function u(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(l.P3F, {
        className: c.container,
        onClick: t,
        children: (0, r.jsx)(l.Text, {
            className: c.textContent,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: s.intl.string(s.t.jfrLLb),
        }),
    });
}
function d(e) {
    let { onClick: t } = e,
        n = a.G6.useSetting(),
        s = (0, i.e7)([o.Z], () => o.Z.getStatus());
    return __OVERLAY__ || (n && s !== l.Skl.INVISIBLE) ? null : (0, r.jsx)(u, { onClick: t });
}

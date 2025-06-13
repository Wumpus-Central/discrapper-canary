n.d(t, { V: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(550532),
    a = n(371991),
    c = n(561308),
    u = n(594190),
    d = n(695346),
    h = n(885110),
    p = n(316496),
    f = n(29953),
    g = n(388032),
    m = n(24655);
function b(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(o.P3F, {
        className: m.container,
        onClick: t,
        children: (0, r.jsx)(o.Text, {
            className: m.textContent,
            variant: 'text-xs/medium',
            color: 'text-secondary',
            children: g.intl.string(g.t.jfrLLS)
        })
    });
}
function y(e) {
    var t;
    let { onClick: n } = e,
        h = (0, l.e7)([s.Z], () => s.Z.getFakeGameData()),
        p = (0, l.e7)([u.ZP], () => u.ZP.getVisibleGame()),
        b = null != (t = null == h ? void 0 : h.start) ? t : null == p ? void 0 : p.start,
        y = d.SE.useSetting().length > 0,
        { now: O } = (0, a.tS)(),
        _ = (0, i.useMemo)(() => (null == b ? null : (0, c.T_)({ start: b }, O)), [b, O]);
    if (null == b) return null;
    let v = [...(y ? [g.intl.string(f.default.jfDsyM)] : []), g.intl.string(g.t.BMTj29), _];
    return (0, r.jsx)(o.P3F, {
        className: m.container,
        onClick: n,
        children: (0, r.jsx)(o.Text, {
            className: m.textContent,
            variant: 'text-xs/medium',
            color: 'text-positive',
            lineClamp: 1,
            children: v.join(' \xB7 ')
        })
    });
}
function O(e) {
    let { onClick: t } = e,
        { isEnabled: n, showActivitySharingIndicatorWhenSharing: i } = (0, p.D)('not sharing link'),
        s = d.G6.useSetting(),
        a = (0, l.e7)([h.Z], () => h.Z.getStatus());
    return n ? (s && a !== o.Skl.INVISIBLE ? (i ? (0, r.jsx)(y, { onClick: t }) : null) : (0, r.jsx)(b, { onClick: t })) : null;
}

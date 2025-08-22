n.d(t, { V: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(550532),
    s = n(371991),
    c = n(561308),
    u = n(594190),
    d = n(695346),
    p = n(885110),
    h = n(316496),
    f = n(933554),
    g = n(388032),
    m = n(973543);
function b(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(o.P3F, {
        className: m.container,
        onClick: t,
        children: (0, r.jsx)(o.Text, {
            className: m.textContent,
            variant: "text-xs/medium",
            color: "text-secondary",
            children: g.intl.string(g.t.jfrLLS),
        }),
    });
}
function O(e) {
    var t;
    let { onClick: n } = e,
        p = (0, l.e7)([a.Z], () => a.Z.getFakeGameData()),
        h = (0, l.e7)([u.ZP], () => u.ZP.getVisibleGame()),
        b = null != (t = null == p ? void 0 : p.start) ? t : null == h ? void 0 : h.start,
        O = d.SE.useSetting().length > 0,
        { now: y } = (0, s.tS)(),
        _ = (0, i.useMemo)(() => (null == b ? null : (0, c.T_)({ start: b }, y)), [b, y]);
    if (null == b) return null;
    let j = [...(O ? [g.intl.string(f.default.jfDsyM)] : []), g.intl.string(g.t.BMTj29), _];
    return (0, r.jsx)(o.P3F, {
        className: m.container,
        onClick: n,
        children: (0, r.jsx)(o.Text, {
            className: m.textContent,
            variant: "text-xs/medium",
            color: "text-feedback-positive",
            lineClamp: 1,
            children: j.join(" \xB7 "),
        }),
    });
}
function y(e) {
    let { onClick: t } = e,
        { isEnabled: n, showActivitySharingIndicatorWhenSharing: i } = (0, h.D)("not sharing link"),
        a = d.G6.useSetting(),
        s = (0, l.e7)([p.Z], () => p.Z.getStatus());
    return !n || __OVERLAY__
        ? null
        : a && s !== o.Skl.INVISIBLE
          ? i
              ? (0, r.jsx)(O, { onClick: t })
              : null
          : (0, r.jsx)(b, { onClick: t });
}

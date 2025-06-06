n.d(t, { V: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(550532),
    u = n(371991),
    d = n(561308),
    h = n(594190),
    p = n(695346),
    f = n(885110),
    g = n(316496),
    m = n(622123),
    b = n(388032),
    y = n(24655);
function O() {
    return (0, r.jsx)(a.Text, {
        className: y.textContent,
        variant: 'text-xs/medium',
        color: 'text-secondary',
        children: b.intl.string(b.t.jfrLLS)
    });
}
function v() {
    var e;
    let t = (0, s.e7)([c.Z], () => c.Z.getFakeGameData()),
        n = (0, s.e7)([h.ZP], () => h.ZP.getVisibleGame()),
        l = null != (e = null == t ? void 0 : t.start) ? e : null == n ? void 0 : n.start,
        f = p.SE.useSetting().length > 0;
    o()(null != l, 'Start time should be set for currently running game');
    let { now: g } = (0, u.tS)(),
        O = (0, i.useMemo)(() => (0, d.T_)({ start: l }, g), [l, g]),
        v = [...(f ? [b.intl.string(m.default.jfDsyM)] : []), b.intl.string(b.t.BMTj29), O];
    return (0, r.jsx)(a.Text, {
        className: y.textContent,
        variant: 'text-xs/medium',
        color: 'text-positive',
        lineClamp: 1,
        children: v.join(' \xB7 ')
    });
}
function _(e) {
    let { onClick: t } = e,
        { isEnabled: n, showActivitySharingIndicatorWhenSharing: i } = (0, g.D)('not sharing link'),
        l = p.G6.useSetting(),
        o = (0, s.e7)([f.Z], () => f.Z.getStatus());
    return n
        ? l && o !== a.Skl.INVISIBLE
            ? i
                ? (0, r.jsx)(a.P3F, {
                      className: y.container,
                      onClick: t,
                      children: (0, r.jsx)(v, {})
                  })
                : null
            : (0, r.jsx)(a.P3F, {
                  className: y.container,
                  onClick: t,
                  children: (0, r.jsx)(O, {})
              })
        : null;
}

n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(961675),
    s = n(883429),
    o = n(238349),
    c = n(109434),
    d = n(456269),
    u = n(432771),
    h = n(920303),
    p = n(665149),
    m = n(388032);
function f(e) {
    let { channel: t } = e,
        n = (0, d.r_)(t),
        f = (0, l.e7)([r.Z], () => r.Z.hasHidden(t.id)),
        g = (0, u.c)(t.id),
        { sortOrder: _, tagFilter: C } = (0, c.H)(t.id),
        x = (0, l.e7)([o.Z, h.Z], () => !!(o.Z.getThreadIds(t.id, _, C).length > 0) || !!(h.Z.getThreads(t.id, _, C).length > 0), [t.id, _, C]),
        v = t.isMediaChannel();
    if (!n || g || (v && x)) return null;
    let E = f ? (v ? m.intl.string(m.t['WP/IEx']) : m.intl.string(m.t.zfq9V1)) : v ? m.intl.string(m.t.p60yFx) : m.intl.string(m.t.SNOqYG);
    return (0, i.jsx)(p.JO, {
        tooltip: E,
        icon: a.d3s,
        onClick: () => s.Z.hideAdminOnboarding(t.id, !f),
        selected: !f
    });
}

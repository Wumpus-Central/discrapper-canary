n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(961675),
    a = n(883429),
    s = n(238349),
    c = n(109434),
    u = n(456269),
    d = n(432771),
    p = n(920303),
    h = n(665149),
    f = n(388032);
function m(e) {
    let { channel: t } = e,
        n = (0, u.r_)(t),
        m = (0, i.e7)([o.Z], () => o.Z.hasHidden(t.id)),
        g = (0, d.c)(t.id),
        { sortOrder: b, tagFilter: _ } = (0, c.H)(t.id),
        C = (0, i.e7)([s.Z, p.Z], () => !!(s.Z.getThreadIds(t.id, b, _).length > 0) || !!(p.Z.getThreads(t.id, b, _).length > 0), [t.id, b, _]),
        y = t.isMediaChannel();
    if (!n || g || (y && C)) return null;
    let x = m ? (y ? f.NW.string(f.t['WP/IEx']) : f.NW.string(f.t.zfq9V1)) : y ? f.NW.string(f.t.p60yFx) : f.NW.string(f.t.SNOqYG);
    return (0, r.jsx)(h.JO, {
        tooltip: x,
        icon: l.d3s,
        onClick: () => a.Z.hideAdminOnboarding(t.id, !m),
        selected: !m
    });
}

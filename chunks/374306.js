n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(961675),
    s = n(883429),
    o = n(238349),
    c = n(109434),
    d = n(456269),
    u = n(432771),
    p = n(920303),
    h = n(665149),
    f = n(388032);
function g(e) {
    let { channel: t } = e,
        n = (0, d.r_)(t),
        g = (0, i.e7)([a.Z], () => a.Z.hasHidden(t.id)),
        m = (0, u.c)(t.id),
        { sortOrder: b, tagFilter: y, tagSetting: _ } = (0, c.H)(t.id),
        j = (0, i.e7)(
            [o.Z, p.Z],
            () => !!(o.Z.getThreadIds(t.id, b, y, _).length > 0) || !!(p.Z.getThreads(t.id, b, y, _).length > 0),
            [t.id, b, y, _],
        ),
        x = t.isMediaChannel();
    if (!n || m || (x && j)) return null;
    let O = g
        ? x
            ? f.intl.string(f.t["WP/IEx"])
            : f.intl.string(f.t.zfq9V1)
        : x
          ? f.intl.string(f.t.p60yFx)
          : f.intl.string(f.t.SNOqYG);
    return (0, r.jsx)(h.JO, {
        tooltip: O,
        icon: l.d3s,
        onClick: () => s.Z.hideAdminOnboarding(t.id, !g),
        selected: !g,
    });
}

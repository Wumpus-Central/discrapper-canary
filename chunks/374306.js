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
    h = n(920303),
    p = n(665149),
    f = n(388032);
function g(e) {
    let { channel: t } = e,
        n = (0, d.r_)(t),
        g = (0, i.e7)([a.Z], () => a.Z.hasHidden(t.id)),
        m = (0, u.c)(t.id),
        { sortOrder: b, tagFilter: y, tagSetting: _ } = (0, c.H)(t.id),
        j = (0, i.e7)(
            [o.Z, h.Z],
            () => !!(o.Z.getThreadIds(t.id, b, y, _).length > 0) || !!(h.Z.getThreads(t.id, b, y, _).length > 0),
            [t.id, b, y, _],
        ),
        O = t.isMediaChannel();
    if (!n || m || (O && j)) return null;
    let x = g
        ? O
            ? f.intl.string(f.t["WP/IEx"])
            : f.intl.string(f.t.zfq9V1)
        : O
          ? f.intl.string(f.t.p60yFx)
          : f.intl.string(f.t.SNOqYG);
    return (0, r.jsx)(p.JO, {
        tooltip: x,
        icon: l.d3s,
        onClick: () => s.Z.hideAdminOnboarding(t.id, !g),
        selected: !g,
    });
}

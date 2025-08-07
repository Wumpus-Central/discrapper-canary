n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(961675),
    s = n(883429),
    o = n(238349),
    c = n(109434),
    u = n(456269),
    d = n(432771),
    h = n(920303),
    p = n(665149),
    f = n(388032);
function g(e) {
    let { channel: t } = e,
        n = (0, u.r_)(t),
        g = (0, i.e7)([a.Z], () => a.Z.hasHidden(t.id)),
        m = (0, d.c)(t.id),
        { sortOrder: b, tagFilter: y, tagSetting: x } = (0, c.H)(t.id),
        _ = (0, i.e7)(
            [o.Z, h.Z],
            () => !!(o.Z.getThreadIds(t.id, b, y, x).length > 0) || !!(h.Z.getThreads(t.id, b, y, x).length > 0),
            [t.id, b, y, x],
        ),
        j = t.isMediaChannel();
    if (!n || m || (j && _)) return null;
    let O = g
        ? j
            ? f.intl.string(f.t["WP/IEx"])
            : f.intl.string(f.t.zfq9V1)
        : j
          ? f.intl.string(f.t.p60yFx)
          : f.intl.string(f.t.SNOqYG);
    return (0, r.jsx)(p.JO, {
        tooltip: O,
        icon: l.d3s,
        onClick: () => s.Z.hideAdminOnboarding(t.id, !g),
        selected: !g,
    });
}

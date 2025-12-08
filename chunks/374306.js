n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
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
        { sortOrder: b, tagFilter: _, tagSetting: y } = (0, c.H)(t.id),
        O = (0, i.e7)(
            [o.Z, p.Z],
            () => !!(o.Z.getThreadIds(t.id, b, _, y).length > 0) || !!(p.Z.getThreads(t.id, b, _, y).length > 0),
            [t.id, b, _, y],
        ),
        x = t.isMediaChannel();
    if (!n || m || (x && O)) return null;
    let j = g
        ? x
            ? f.intl.string(f.t["WP/IE1"])
            : f.intl.string(f.t.zfq9V4)
        : x
          ? f.intl.string(f.t.p60yF1)
          : f.intl.string(f.t.SNOqYC);
    return (0, r.jsx)(h.JO, {
        tooltip: j,
        icon: l.d3s,
        onClick: () => s.Z.hideAdminOnboarding(t.id, !g),
        selected: !g,
    });
}

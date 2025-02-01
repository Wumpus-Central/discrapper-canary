e.d(i, { default: () => s });
var n = e(200651);
e(192379);
var a = e(468026),
    l = e(434404),
    r = e(388032);
let s = (t) =>
    (0, n.jsx)(a.default, {
        title: r.intl.string(r.t.aCAiGh),
        body: r.intl.format(r.t['4cJV9f'], { serverName: t.name }),
        cancelText: r.intl.string(r.t.J2TBi4),
        onCancel: () => {
            l.Z.leaveGuild(t.guildId);
        },
        confirmText: r.intl.string(r.t.TyCVIi),
        ...t
    });

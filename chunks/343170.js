n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(366811),
    r = n(71393),
    o = n(531685),
    d = n(263715),
    c = n(131494),
    u = n(330465);
function h(e) {
    let { guildId: t } = e,
        n = l.useMemo(() => (0, d.EL)(t), [t]),
        h = (0, s.bG)([r.A], () => r.A.getGuild(t)),
        A = (0, s.bG)([o.A], () => o.A.isFocused()),
        _ =
            t ===
            (0, a.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        m = (0, c.A)(t);
    return null == h
        ? null
        : (0, i.jsx)(u.A, { guildNode: n, guild: h, animatable: A, selected: _, draggable: !1, mediaState: m });
}

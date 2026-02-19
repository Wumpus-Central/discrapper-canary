"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(366811),
    a = n(71393),
    o = n(531685),
    c = n(263715),
    d = n(131494),
    u = n(330465);
function h(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, c.EL)(t), [t]),
        h = (0, l.bG)([a.A], () => a.A.getGuild(t)),
        A = (0, l.bG)([o.A], () => o.A.isFocused()),
        p =
            t ===
            (0, r.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        g = (0, d.A)(t);
    return null == h
        ? null
        : (0, i.jsx)(u.A, { guildNode: n, guild: h, animatable: A, selected: p, draggable: !1, mediaState: g });
}

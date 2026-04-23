"use strict";
n.d(t, { $7: () => u, ox: () => l, qE: () => c });
var r = n(64700),
    i = n(311907),
    s = n(317525),
    a = n(71393),
    o = n(376304);
function l(e, t) {
    if (null == e) return;
    let { customIconSrc: n, unicodeEmoji: r } = (0, o.sE)(e, t) ?? {};
    if (null != n || null != r) return { src: n, name: e.name, roleId: e.id, size: t, unicodeEmoji: r };
}
function u(e) {
    let { guildId: t, roleId: n, size: u = 20, role: c, guild: d } = e,
        { guild: _, role: f } = (0, i.cf)(
            [a.A, s.A],
            () => ({
                guild: null == d ? a.A.getGuild(t) : void 0,
                role: null == c && null != n ? s.A.getRole(t, n) : void 0,
            }),
            [t, n, c, d],
        ),
        p = d ?? _,
        h = c ?? f;
    return r.useMemo(() => {
        if (null != p && null != h && (0, o.fm)(p, h)) return l(h, u);
    }, [p, h, u]);
}
function c(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e));
    if (null != n && (0, o.fm)(n, t)) return l(t);
}

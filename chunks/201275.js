"use strict";
n.d(t, { $7: () => u, ox: () => l, qE: () => c });
var i = n(64700),
    r = n(17928),
    s = n(317525),
    a = n(71393),
    o = n(376304);
function l(e, t) {
    if (null == e) return;
    let { customIconSrc: n, unicodeEmoji: i } = (0, o.sE)(e, t) ?? {};
    if (null != n || null != i) return { src: n, name: e.name, roleId: e.id, size: t, unicodeEmoji: i };
}
function u(e) {
    let { guildId: t, roleId: n, size: u = 20, role: c, guild: d } = e,
        { guild: _, role: f } = (0, r.cf)(
            [a.A, s.A],
            () => ({
                guild: null == d ? a.A.getGuild(t) : void 0,
                role: null == c && null != n ? s.A.getRole(t, n) : void 0,
            }),
            [t, n, c, d],
        ),
        h = d ?? _,
        p = c ?? f;
    return i.useMemo(() => {
        if (null != h && null != p && (0, o.fm)(h, p)) return l(p, u);
    }, [h, p, u]);
}
function c(e, t) {
    let n = (0, r.bG)([a.A], () => a.A.getGuild(e));
    if (null != n && (0, o.fm)(n, t)) return l(t);
}

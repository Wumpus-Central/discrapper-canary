"use strict";
n.d(t, { $7: () => d, ox: () => o, qE: () => c });
var i = n(582128),
    r = n(17928),
    a = n(317525),
    s = n(71393),
    l = n(376304);
function o(e, t) {
    if (null == e) return;
    let { customIconSrc: n, unicodeEmoji: i } = (0, l.sE)(e, t) ?? {};
    if (null != n || null != i) return { src: n, name: e.name, roleId: e.id, size: t, unicodeEmoji: i };
}
function d(e) {
    let { guildId: t, roleId: n, size: d = 20, role: c, guild: u } = e,
        { guild: _, role: E } = (0, r.cf)(
            [s.A, a.A],
            () => ({
                guild: null == u ? s.A.getGuild(t) : void 0,
                role: null == c && null != n ? a.A.getRole(t, n) : void 0,
            }),
            [t, n, c, u],
        ),
        A = u ?? _,
        h = c ?? E;
    return i.useMemo(() => {
        if (null != A && null != h && (0, l.fm)(A, h)) return o(h, d);
    }, [A, h, d]);
}
function c(e, t) {
    let n = (0, r.bG)([s.A], () => s.A.getGuild(e));
    if (null != n && (0, l.fm)(n, t)) return o(t);
}

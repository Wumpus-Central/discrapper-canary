"use strict";
n.d(t, { $7: () => u, ox: () => o, qE: () => c });
var l = n(582128),
    i = n(17928),
    s = n(317525),
    r = n(71393),
    a = n(376304);
function o(e, t) {
    if (null == e) return;
    let { customIconSrc: n, unicodeEmoji: l } = (0, a.sE)(e, t) ?? {};
    if (null != n || null != l) return { src: n, name: e.name, roleId: e.id, size: t, unicodeEmoji: l };
}
function u(e) {
    let { guildId: t, roleId: n, size: u = 20, role: c, guild: d } = e,
        { guild: h, role: m } = (0, i.cf)(
            [r.A, s.A],
            () => ({
                guild: null == d ? r.A.getGuild(t) : void 0,
                role: null == c && null != n ? s.A.getRole(t, n) : void 0,
            }),
            [t, n, c, d],
        ),
        f = d ?? h,
        p = c ?? m;
    return l.useMemo(() => {
        if (null != f && null != p && (0, a.fm)(f, p)) return o(p, u);
    }, [f, p, u]);
}
function c(e, t) {
    let n = (0, i.bG)([r.A], () => r.A.getGuild(e));
    if (null != n && (0, a.fm)(n, t)) return o(t);
}

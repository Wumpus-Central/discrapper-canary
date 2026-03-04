"use strict";
n.d(t, { A: () => R });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    s = n(793574),
    a = n(688810),
    o = n(206835),
    E = n(961350),
    c = n(696451),
    _ = n(229527),
    d = n(81400),
    A = n(340837),
    u = n(355097),
    T = n(985018);
function I(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [r, s] = (0, d.j8)({ guildId: t, analyticsLocations: n }),
        a = s ? T.intl.string(T.t["6ndMcq"]) : T.intl.string(T.t["0eiu6J"]),
        o = s ? T.intl.string(T.t.S09nw4) : T.intl.string(T.t.tEttXd);
    return (0, i.jsxs)(l.$Td, { color: l.Hv$.DANGER, children: [a, (0, i.jsx)(l.zr9, { onClick: r, children: o })] });
}
function N() {
    let e = (0, o.A)({ scrollPosition: u._F.GUILD_TAG });
    return (0, i.jsxs)(l.$Td, {
        color: l.Hv$.DANGER,
        children: [T.intl.string(T.t.Zqlecb), (0, i.jsx)(l.zr9, { onClick: e, children: T.intl.string(T.t.SJehVW) })],
    });
}
function R(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, a.Ay)(t, s.A.AUTOMOD_NAGBAR_NOTICE),
        o = (0, r.bG)([E.default, c.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = E.default.getId();
            return (0, _.wj)(c.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return o.has(A.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || o.has(A.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(I, { ...n, analyticsLocations: l })
        : o.has(A.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(N, {})
          : (0, i.jsx)(I, { ...n, analyticsLocations: l });
}

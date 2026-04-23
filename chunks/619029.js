"use strict";
n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var r = n(311907);
if (21552 == n.j) var l = n(417098);
var s = n(793574),
    a = n(688810),
    o = n(206835),
    c = n(961350),
    u = n(696451),
    d = n(229527),
    _ = n(81400),
    E = n(340837),
    A = n(355097),
    m = n(985018);
function I(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [r, s] = (0, _.j8)({ guildId: t, analyticsLocations: n }),
        a = s ? m.intl.string(m.t["6ndMcq"]) : m.intl.string(m.t["0eiu6J"]),
        o = s ? m.intl.string(m.t.S09nw4) : m.intl.string(m.t.tEttXd);
    return (0, i.jsxs)(l.$T, { color: l.Hv.DANGER, children: [a, (0, i.jsx)(l.zr, { onClick: r, children: o })] });
}
function T() {
    let e = (0, o.A)({ scrollPosition: A._F.GUILD_TAG });
    return (0, i.jsxs)(l.$T, {
        color: l.Hv.DANGER,
        children: [m.intl.string(m.t.Zqlecb), (0, i.jsx)(l.zr, { onClick: e, children: m.intl.string(m.t.SJehVW) })],
    });
}
function N(e) {
    let { analyticsLocations: t, ...n } = e,
        { analyticsLocations: l } = (0, a.Ay)(t, s.A.AUTOMOD_NAGBAR_NOTICE),
        o = (0, r.bG)([c.default, u.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = c.default.getId();
            return (0, d.wj)(u.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return o.has(E.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || o.has(E.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(I, { ...n, analyticsLocations: l })
        : o.has(E.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(T, {})
          : (0, i.jsx)(I, { ...n, analyticsLocations: l });
}

n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(251794),
    o = n(386696),
    s = n(71619),
    c = n(271383),
    u = n(430824),
    d = n(496675),
    p = n(594174),
    h = n(796263),
    f = n(463959),
    m = n(388032);
function g(e) {
    let { channel: t, user: n, guild: g } = e,
        b = (0, i.e7)([p.default, u.Z, d.Z], () => null != n && null != g && (0, o.F)(g.id, n.id, [p.default, u.Z, d.Z])),
        [_, x] = (0, s.ZP)(null == n ? void 0 : n.id, t.guild_id),
        y = (0, i.e7)([c.ZP], () => null != g && null != n && null != c.ZP.getMember(g.id, n.id));
    if (!b) return null;
    let C = 'timeout-user-'.concat(null == n ? void 0 : n.id);
    return (0, r.jsx)(
        h.Z,
        {
            text: y ? null : x ? m.intl.string(f.default['6uMZbm']) : m.intl.string(f.default['Sgg/uL']),
            icon: l.T39,
            onClick: () => {
                null != n &&
                    (0, a.z)({
                        guildId: t.guild_id,
                        userId: n.id,
                        modReportId: t.id
                    });
            },
            disabled: x || !y
        },
        C
    );
}

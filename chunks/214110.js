n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(251794),
    o = n(386696),
    s = n(71619),
    c = n(430824),
    u = n(496675),
    d = n(594174),
    p = n(796263),
    h = n(463959),
    f = n(388032);
function m(e) {
    let { channel: t, user: n, guild: m } = e,
        g = (0, i.e7)([d.default, c.Z, u.Z], () => null != n && null != m && (0, o.F)(m.id, n.id, [d.default, c.Z, u.Z])),
        [b, _] = (0, s.ZP)(null == n ? void 0 : n.id, t.guild_id);
    if (!g) return null;
    let x = _ ? f.intl.string(h.default['6uMZbm']) : f.intl.string(h.default['Sgg/uL']),
        y = 'timeout-user-'.concat(null == n ? void 0 : n.id);
    return (0, r.jsx)(
        p.Z,
        {
            text: x,
            icon: l.T39,
            onClick: () => {
                null != n &&
                    (0, a.z)({
                        guildId: t.guild_id,
                        userId: n.id,
                        modReportId: t.id
                    });
            },
            disabled: _
        },
        y
    );
}

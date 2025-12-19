n.d(t, { Z: () => g }), n(388685);
var i = n(54381),
    r = n(442837),
    l = n(481060),
    a = n(251794),
    o = n(386696),
    s = n(71619),
    c = n(271383),
    u = n(430824),
    d = n(496675),
    p = n(594174),
    f = n(796263),
    h = n(792389),
    m = n(388032);
function g(e) {
    let { channel: t, user: n, guild: g } = e,
        b = (0, r.e7)(
            [p.default, u.Z, d.Z],
            () => null != n && null != g && (0, o.F)(g.id, n.id, [p.default, u.Z, d.Z]),
        ),
        [y, C] = (0, s.ZP)(null == n ? void 0 : n.id, t.guild_id),
        v = (0, r.e7)([c.ZP], () => null != g && null != n && null != c.ZP.getMember(g.id, n.id));
    if (!b || !v) return null;
    let x = "timeout-user-".concat(null == n ? void 0 : n.id);
    return (0, i.jsx)(
        f.Z,
        {
            text: C ? m.intl.string(h.default["6uMZbv"]) : m.intl.string(h.default["Sgg/uI"]),
            icon: l.T39,
            onClick: () => {
                null != n &&
                    (0, a.z)({
                        guildId: t.guild_id,
                        userId: n.id,
                        modReportId: t.id,
                    });
            },
            disabled: C,
        },
        x,
    );
}

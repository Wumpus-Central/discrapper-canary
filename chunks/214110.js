n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(442837),
    o = n(481060),
    a = n(251794),
    s = n(386696),
    l = n(71619),
    c = n(271383),
    u = n(430824),
    d = n(496675),
    f = n(594174),
    _ = n(796263),
    p = n(130883),
    h = n(388032);
function m(e) {
    let { channel: t, user: n, guild: m } = e,
        g = (0, i.e7)(
            [f.default, u.Z, d.Z],
            () => null != n && null != m && (0, s.F)(m.id, n.id, [f.default, u.Z, d.Z]),
        ),
        [E, b] = (0, l.ZP)(null == n ? void 0 : n.id, t.guild_id),
        y = (0, i.e7)([c.ZP], () => null != m && null != n && null != c.ZP.getMember(m.id, n.id));
    if (!g || !y) return null;
    let O = () => {
        null != n &&
            (0, a.z)({
                guildId: t.guild_id,
                userId: n.id,
                modReportId: t.id,
            });
    };
    function v() {
        return b ? h.intl.string(p.default["6uMZbm"]) : h.intl.string(p.default["Sgg/uL"]);
    }
    let I = "timeout-user-".concat(null == n ? void 0 : n.id);
    return (0, r.jsx)(
        _.Z,
        {
            text: v(),
            icon: o.T39,
            onClick: O,
            disabled: b,
        },
        I,
    );
}

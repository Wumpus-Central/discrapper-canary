n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    l = n(311907),
    i = n(397927),
    a = n(991982),
    s = n(838111),
    o = n(870136),
    c = n(696451),
    u = n(71393),
    d = n(576705),
    f = n(287809),
    p = n(102817),
    h = n(641131),
    b = n(985018);

function g(e) {
    let { channel: t, user: n, guild: g } = e,
        m = (0, l.bG)(
            [f.default, u.A, d.A],
            () => null != n && null != g && (0, s.b)(g.id, n.id, [f.default, u.A, d.A]),
        ),
        [A, y] = (0, o.Ay)(null == n ? void 0 : n.id, t.guild_id),
        O = (0, l.bG)([c.Ay], () => null != g && null != n && null != c.Ay.getMember(g.id, n.id));
    if (!m || !O) return null;
    let j = "timeout-user-".concat(null == n ? void 0 : n.id);
    return (0, r.jsx)(
        p.A,
        {
            text: y ? b.intl.string(h.default["6uMZbv"]) : b.intl.string(h.default["Sgg/uI"]),
            icon: i.O4,
            onClick: () => {
                null != n &&
                    (0, a.R)({
                        guildId: t.guild_id,
                        userId: n.id,
                        modReportId: t.id,
                    });
            },
            disabled: y,
        },
        j,
    );
}

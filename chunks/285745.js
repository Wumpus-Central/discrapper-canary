n.d(t, { A: () => _ });
var i = n(627968),
    l = n(311907),
    a = n(406810),
    s = n(991982),
    r = n(838111),
    o = n(870136),
    c = n(696451),
    d = n(71393),
    u = n(576705),
    h = n(287809),
    m = n(102817),
    A = n(221314),
    g = n(985018);
function _(e) {
    let { channel: t, user: n, guild: _ } = e,
        p = (0, l.bG)(
            [h.default, d.A, u.A],
            () => null != n && null != _ && (0, r.b)(_.id, n.id, [h.default, d.A, u.A]),
        ),
        [f, E] = (0, o.Ay)(n?.id, t.guild_id),
        C = (0, l.bG)([c.Ay], () => null != _ && null != n && null != c.Ay.getMember(_.id, n.id));
    if (!p || !C) return null;
    let x = `timeout-user-${n?.id}`;
    return (0, i.jsx)(
        m.A,
        {
            text: E ? g.intl.string(A.default["6uMZbv"]) : g.intl.string(A.default["Sgg/uI"]),
            icon: a.O,
            onClick: () => {
                null != n && (0, s.R)({ guildId: t.guild_id, userId: n.id, modReportId: t.id });
            },
            disabled: E,
        },
        x,
    );
}

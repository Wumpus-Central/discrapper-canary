n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(862482),
    r = n(192308),
    o = n(215026),
    c = n(686956),
    d = n(964486),
    u = n(351001),
    h = n(576705),
    m = n(400528),
    A = n(102817),
    g = n(221314),
    p = n(985018);
function _(e) {
    let { channel: t, user: _, guild: f } = e,
        E = (0, a.bG)([m.A], () => null != _ && m.A.isUserBanned(_.id)),
        C = null != _ && null == E,
        [x, S] = l.useState(C),
        I = (0, a.bG)([h.A], () => null != _ && null != f && (0, u.fJ)(_, f, [h.A]));
    if (
        ((0, d.Ay)(() => {
            C && c.A.searchGuildBans(t.guild_id, void 0, [_?.id]).finally(() => S(!1));
        }),
        !I)
    )
        return null;
    let N = !0 === E ? p.intl.string(g.default.dpfwQ1) : p.intl.string(g.default.ASv23S),
        v = `ban-user-${_?.id}`;
    return (0, i.jsx)(
        A.A,
        {
            text: N,
            icon: o.w,
            onClick: () => {
                null != _ &&
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("57742").then(n.bind(n, 333179));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t.guild_id, user: _, modReportId: t.id });
                    });
            },
            disabled: !0 === E || x,
            submitting: x,
            color: s.$n.Colors.RED,
        },
        v,
    );
}

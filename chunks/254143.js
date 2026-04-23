n.d(t, { A: () => p });
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
    _ = n(985018);
function p(e) {
    let { channel: t, user: p, guild: f } = e,
        E = (0, a.bG)([m.A], () => null != p && m.A.isUserBanned(p.id)),
        C = null != p && null == E,
        [x, S] = l.useState(C),
        I = (0, a.bG)([h.A], () => null != p && null != f && (0, u.fJ)(p, f, [h.A]));
    if (
        ((0, d.Ay)(() => {
            C && c.A.searchGuildBans(t.guild_id, void 0, [p?.id]).finally(() => S(!1));
        }),
        !I)
    )
        return null;
    let v = !0 === E ? _.intl.string(g.default.dpfwQ1) : _.intl.string(g.default.ASv23S),
        N = `ban-user-${p?.id}`;
    return (0, i.jsx)(
        A.A,
        {
            text: v,
            icon: o.w,
            onClick: () => {
                null != p &&
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("57742").then(n.bind(n, 333179));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t.guild_id, user: p, modReportId: t.id });
                    });
            },
            disabled: !0 === E || x,
            submitting: x,
            color: s.$n.Colors.RED,
        },
        N,
    );
}

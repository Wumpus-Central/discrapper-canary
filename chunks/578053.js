n.d(t, {
    g: () => O,
    u: () => C,
}),
    n(290780),
    n(953529);
var r = n(54381),
    i = n(473749),
    l = n(106351),
    a = n(442837),
    s = n(311047),
    o = n(199849),
    c = n(740504),
    d = n(933557),
    u = n(471445),
    g = n(592125),
    f = n(324067),
    m = n(699516),
    b = n(594174),
    p = n(434404),
    h = n(388032);
let x = "NO_CHANNEL";
function j(e) {
    return {
        value: e.id,
        label: (0, d.F6)(e, b.default, m.Z),
        channel: e,
        category: g.Z.getChannel(e.parent_id),
    };
}
function v(e) {
    let { option: t } = e,
        { label: n, channel: l, category: a } = t,
        o = i.useMemo(() => (0, u.KS)(l), [l]),
        c = (0, d.ZP)(l);
    return (0, r.jsx)(s.Z, {
        title: n,
        icon: o,
        subtitle: null != a ? c : null,
    });
}
function O(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: s, label: o } = e,
        d = (0, a.e7)([f.Z], () => f.Z.getCategories(n)),
        u = i.useMemo(() => {
            let e = (0, c.Z)(d._categories, d)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return j(t);
                });
            return (
                e.unshift({
                    value: x,
                    label: h.intl.string(h.t.wGiHkK),
                }),
                e
            );
        }, [d]),
        g = i.useCallback((e) => {
            let t = e === x ? null : e;
            p.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(y, {
        label: o,
        value: null != s ? s : x,
        options: u,
        canManageGuild: t,
        onChange: g,
    });
}
function C(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: s, label: o, description: d, layout: u } = e,
        g = (0, a.e7)([f.Z], () => f.Z.getCategories(n)),
        m = i.useMemo(() => {
            let e = (0, c.Z)(g._categories, g)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return j(t);
                });
            return (
                e.unshift({
                    value: x,
                    label: h.intl.string(h.t.ibUhoa),
                }),
                e
            );
        }, [g]),
        b = i.useCallback((e) => {
            let t = e === x ? null : e;
            p.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(y, {
        label: o,
        description: d,
        layout: u,
        value: null != s ? s : x,
        options: m,
        canManageGuild: t,
        onChange: b,
    });
}
function y(e) {
    let { value: t, options: n, canManageGuild: l, onChange: a, label: s, description: c, layout: d } = e,
        u = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(v, { option: e });
        }, []),
        g = i.useCallback((e) => u(e[0]), [u]);
    return (0, r.jsx)(o.y6, {
        label: s,
        description: c,
        value: t,
        options: n,
        isDisabled: !l,
        onChange: a,
        renderOptionLabel: u,
        renderOptionValue: g,
        layout: d,
    });
}

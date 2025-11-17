n.d(t, {
    g: () => _,
    u: () => v,
}),
    n(290780),
    n(953529);
var r = n(54381),
    i = n(473749),
    l = n(106351),
    a = n(442837),
    s = n(481060),
    o = n(740504),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    g = n(324067),
    m = n(699516),
    p = n(594174),
    f = n(434404),
    h = n(388032);
let b = "NO_CHANNEL";
function x(e) {
    return {
        value: e.id,
        label: (0, c.F6)(e, p.default, m.Z),
        channel: e,
        category: u.Z.getChannel(e.parent_id),
    };
}
function j(e) {
    let { option: t } = e,
        { label: n, channel: l, category: a } = t,
        o = i.useMemo(() => (0, d.KS)(l), [l]),
        u = (0, c.ZP)(l);
    return (0, r.jsx)(s.ZZ$, {
        title: n,
        icon: o,
        subtitle: null != a ? u : null,
    });
}
function _(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: s, label: c } = e,
        d = (0, a.e7)([g.Z], () => g.Z.getCategories(n)),
        u = i.useMemo(() => {
            let e = (0, o.Z)(d._categories, d)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return x(t);
                });
            return (
                e.unshift({
                    value: b,
                    label: h.intl.string(h.t.wGiHkK),
                }),
                e
            );
        }, [d]),
        m = i.useCallback((e) => {
            let t = e === b ? null : e;
            f.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        label: c,
        value: null != s ? s : b,
        options: u,
        canManageGuild: t,
        onChange: m,
    });
}
function v(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: s, label: c, description: d, layout: u } = e,
        m = (0, a.e7)([g.Z], () => g.Z.getCategories(n)),
        p = i.useMemo(() => {
            let e = (0, o.Z)(m._categories, m)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return x(t);
                });
            return (
                e.unshift({
                    value: b,
                    label: h.intl.string(h.t.ibUhoa),
                }),
                e
            );
        }, [m]),
        j = i.useCallback((e) => {
            let t = e === b ? null : e;
            f.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        label: c,
        description: d,
        layout: u,
        value: null != s ? s : b,
        options: p,
        canManageGuild: t,
        onChange: j,
    });
}
function O(e) {
    let { value: t, options: n, canManageGuild: l, onChange: a, label: o, description: c, layout: d } = e,
        u = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(j, { option: e });
        }, []),
        g = i.useCallback((e) => u(e[0]), [u]);
    return (0, r.jsx)(s.q4e, {
        label: o,
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

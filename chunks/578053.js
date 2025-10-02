n.d(t, {
    g: () => v,
    u: () => _,
}),
    n(290780),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(106351),
    s = n(442837),
    a = n(481060),
    o = n(740504),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    m = n(324067),
    g = n(699516),
    p = n(594174),
    f = n(434404),
    h = n(388032);
let b = "NO_CHANNEL";
function x(e) {
    return {
        value: e.id,
        label: (0, c.F6)(e, p.default, g.Z),
        channel: e,
        category: u.Z.getChannel(e.parent_id),
    };
}
function j(e) {
    let { option: t } = e,
        { label: n, channel: l, category: s } = t,
        o = i.useMemo(() => (0, d.KS)(l), [l]),
        u = (0, c.ZP)(l);
    return (0, r.jsx)(a.ZZ$, {
        title: n,
        icon: o,
        subtitle: null != s ? u : null,
    });
}
function v(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: a } = e,
        c = (0, s.e7)([m.Z], () => m.Z.getCategories(n)),
        d = i.useMemo(() => {
            let e = (0, o.Z)(c._categories, c)
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
                    label: h.intl.string(h.t.wGiHkJ),
                }),
                e
            );
        }, [c]),
        u = i.useCallback((e) => {
            let t = e === b ? null : e;
            f.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        value: null != a ? a : b,
        options: d,
        canManageGuild: t,
        onChange: u,
    });
}
function _(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: a, label: c, description: d, layout: u } = e,
        g = (0, s.e7)([m.Z], () => m.Z.getCategories(n)),
        p = i.useMemo(() => {
            let e = (0, o.Z)(g._categories, g)
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
        }, [g]),
        j = i.useCallback((e) => {
            let t = e === b ? null : e;
            f.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        label: c,
        description: d,
        layout: u,
        value: null != a ? a : b,
        options: p,
        canManageGuild: t,
        onChange: j,
    });
}
function O(e) {
    let { value: t, options: n, canManageGuild: l, onChange: s, label: o, description: c, layout: d } = e,
        u = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(j, { option: e });
        }, []),
        m = i.useCallback((e) => u(e[0]), [u]);
    return (0, r.jsx)(a.q4e, {
        label: o,
        description: c,
        value: t,
        options: n,
        isDisabled: !l,
        onChange: s,
        renderOptionLabel: u,
        renderOptionValue: m,
        layout: d,
    });
}

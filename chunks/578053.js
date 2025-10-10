n.d(t, {
    g: () => _,
    u: () => v,
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
    g = n(324067),
    m = n(699516),
    p = n(594174),
    f = n(434404),
    h = n(388032);
let x = "NO_CHANNEL";
function b(e) {
    return {
        value: e.id,
        label: (0, c.F6)(e, p.default, m.Z),
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
function _(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: a } = e,
        c = (0, s.e7)([g.Z], () => g.Z.getCategories(n)),
        d = i.useMemo(() => {
            let e = (0, o.Z)(c._categories, c)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return b(t);
                });
            return (
                e.unshift({
                    value: x,
                    label: h.intl.string(h.t.wGiHkJ),
                }),
                e
            );
        }, [c]),
        u = i.useCallback((e) => {
            let t = e === x ? null : e;
            f.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(C, {
        value: null != a ? a : x,
        options: d,
        canManageGuild: t,
        onChange: u,
    });
}
function v(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: a, label: c, description: d, layout: u } = e,
        m = (0, s.e7)([g.Z], () => g.Z.getCategories(n)),
        p = i.useMemo(() => {
            let e = (0, o.Z)(m._categories, m)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return b(t);
                });
            return (
                e.unshift({
                    value: x,
                    label: h.intl.string(h.t.ibUhoa),
                }),
                e
            );
        }, [m]),
        j = i.useCallback((e) => {
            let t = e === x ? null : e;
            f.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(C, {
        label: c,
        description: d,
        layout: u,
        value: null != a ? a : x,
        options: p,
        canManageGuild: t,
        onChange: j,
    });
}
function C(e) {
    let { value: t, options: n, canManageGuild: l, onChange: s, label: o, description: c, layout: d } = e,
        u = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(j, { option: e });
        }, []),
        g = i.useCallback((e) => u(e[0]), [u]);
    return (0, r.jsx)(a.q4e, {
        label: o,
        description: c,
        value: t,
        options: n,
        isDisabled: !l,
        onChange: s,
        renderOptionLabel: u,
        renderOptionValue: g,
        layout: d,
    });
}

n.d(t, {
    g: () => N,
    u: () => _
}),
    n(733860);
var r = n(200651),
    i = n(192379),
    s = n(106351),
    a = n(442837),
    l = n(481060),
    o = n(740504),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    m = n(324067),
    g = n(699516),
    p = n(594174),
    h = n(434404),
    f = n(388032);
let b = 'NO_CHANNEL';
function x(e) {
    return {
        value: e.id,
        label: (0, c.F6)(e, p.default, g.Z),
        channel: e,
        category: u.Z.getChannel(e.parent_id)
    };
}
function j(e) {
    let { option: t } = e,
        { label: n, channel: s, category: a } = t,
        o = i.useMemo(() => (0, d.KS)(s), [s]),
        u = (0, c.ZP)(s);
    return (0, r.jsx)(l.ZZ$, {
        title: n,
        icon: o,
        subtitle: null != a ? u : null
    });
}
function N(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: l } = e,
        c = (0, a.e7)([m.Z], () => m.Z.getCategories(n)),
        d = i.useMemo(() => {
            let e = (0, o.Z)(c._categories, c)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === s.d.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return x(t);
                });
            return (
                e.unshift({
                    value: b,
                    label: f.NW.string(f.t.wGiHkJ)
                }),
                e
            );
        }, [c]),
        u = i.useCallback((e) => {
            let t = e === b ? null : e;
            h.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(v, {
        value: null != l ? l : b,
        options: d,
        canManageGuild: t,
        onChange: u
    });
}
function _(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: l } = e,
        c = (0, a.e7)([m.Z], () => m.Z.getCategories(n)),
        d = i.useMemo(() => {
            let e = (0, o.Z)(c._categories, c)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === s.d.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return x(t);
                });
            return (
                e.unshift({
                    value: b,
                    label: f.NW.string(f.t.ibUhoa)
                }),
                e
            );
        }, [c]),
        u = i.useCallback((e) => {
            let t = e === b ? null : e;
            h.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(v, {
        value: null != l ? l : b,
        options: d,
        canManageGuild: t,
        onChange: u
    });
}
function v(e) {
    let { value: t, options: n, canManageGuild: s, onChange: a } = e,
        o = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(j, { option: e });
        }, []),
        c = i.useCallback((e) => o(e[0]), [o]);
    return (0, r.jsx)(l.q4e, {
        value: t,
        options: n,
        isDisabled: !s,
        onChange: a,
        renderOptionLabel: o,
        renderOptionValue: c
    });
}

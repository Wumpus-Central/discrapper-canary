(n.d(t, {
    g: () => v,
    u: () => _
}),
    n(290780));
var r = n(255367),
    i = n(73800),
    l = n(106351),
    a = n(442837),
    s = n(481060),
    o = n(740504),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    m = n(324067),
    g = n(699516),
    p = n(594174),
    h = n(434404),
    f = n(388032);
let x = 'NO_CHANNEL';
function b(e) {
    return {
        value: e.id,
        label: (0, c.F6)(e, p.default, g.Z),
        channel: e,
        category: u.Z.getChannel(e.parent_id)
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
        subtitle: null != a ? u : null
    });
}
function v(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: s } = e,
        c = (0, a.e7)([m.Z], () => m.Z.getCategories(n)),
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
                    label: f.intl.string(f.t.wGiHkJ)
                }),
                e
            );
        }, [c]),
        u = i.useCallback((e) => {
            let t = e === x ? null : e;
            h.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        value: null != s ? s : x,
        options: d,
        canManageGuild: t,
        onChange: u
    });
}
function _(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: s } = e,
        c = (0, a.e7)([m.Z], () => m.Z.getCategories(n)),
        d = i.useMemo(() => {
            let e = (0, o.Z)(c._categories, c)
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
                    label: f.intl.string(f.t.ibUhoa)
                }),
                e
            );
        }, [c]),
        u = i.useCallback((e) => {
            let t = e === x ? null : e;
            h.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        value: null != s ? s : x,
        options: d,
        canManageGuild: t,
        onChange: u
    });
}
function O(e) {
    let { value: t, options: n, canManageGuild: l, onChange: a } = e,
        o = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(j, { option: e });
        }, []),
        c = i.useCallback((e) => o(e[0]), [o]);
    return (0, r.jsx)(s.q4e, {
        value: t,
        options: n,
        isDisabled: !l,
        onChange: a,
        renderOptionLabel: o,
        renderOptionValue: c
    });
}

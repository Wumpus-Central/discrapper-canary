n.d(t, {
    g: () => _,
    u: () => v
}),
    n(290780);
var r = n(255367),
    i = n(73800),
    l = n(106351),
    s = n(442837),
    a = n(481060),
    o = n(740504),
    c = n(933557),
    u = n(471445),
    d = n(592125),
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
        category: d.Z.getChannel(e.parent_id)
    };
}
function j(e) {
    let { option: t } = e,
        { label: n, channel: l, category: s } = t,
        o = i.useMemo(() => (0, u.KS)(l), [l]),
        d = (0, c.ZP)(l);
    return (0, r.jsx)(a.ZZ$, {
        title: n,
        icon: o,
        subtitle: null != s ? d : null
    });
}
function _(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: a } = e,
        c = (0, s.e7)([m.Z], () => m.Z.getCategories(n)),
        u = i.useMemo(() => {
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
        d = i.useCallback((e) => {
            let t = e === x ? null : e;
            h.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        value: null != a ? a : x,
        options: u,
        canManageGuild: t,
        onChange: d
    });
}
function v(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: a } = e,
        c = (0, s.e7)([m.Z], () => m.Z.getCategories(n)),
        u = i.useMemo(() => {
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
        d = i.useCallback((e) => {
            let t = e === x ? null : e;
            h.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(O, {
        value: null != a ? a : x,
        options: u,
        canManageGuild: t,
        onChange: d
    });
}
function O(e) {
    let { value: t, options: n, canManageGuild: l, onChange: s } = e,
        o = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(j, { option: e });
        }, []),
        c = i.useCallback((e) => o(e[0]), [o]);
    return (0, r.jsx)(a.q4e, {
        value: t,
        options: n,
        isDisabled: !l,
        onChange: s,
        renderOptionLabel: o,
        renderOptionValue: c
    });
}

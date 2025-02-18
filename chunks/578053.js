n.d(t, {
    g: () => v,
    u: () => N
}),
    n(733860);
var i = n(200651),
    r = n(192379),
    l = n(106351),
    s = n(442837),
    a = n(481060),
    o = n(740504),
    c = n(933557),
    d = n(471445),
    u = n(592125),
    m = n(324067),
    h = n(699516),
    g = n(594174),
    x = n(434404),
    p = n(388032);
let _ = 'NO_CHANNEL';
function C(e) {
    return {
        value: e.id,
        label: (0, c.F6)(e, g.default, h.Z),
        channel: e,
        category: u.Z.getChannel(e.parent_id)
    };
}
function f(e) {
    let { option: t } = e,
        { label: n, channel: l, category: s } = t,
        o = r.useMemo(() => (0, d.KS)(l), [l]),
        u = (0, c.ZP)(l);
    return (0, i.jsx)(a.ZZ$, {
        title: n,
        icon: o,
        subtitle: null != s ? u : null
    });
}
function v(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: a } = e,
        c = (0, s.e7)([m.Z], () => m.Z.getCategories(n)),
        d = r.useMemo(() => {
            let e = (0, o.Z)(c._categories, c)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return C(t);
                });
            return (
                e.unshift({
                    value: _,
                    label: p.intl.string(p.t.wGiHkJ)
                }),
                e
            );
        }, [c]),
        u = r.useCallback((e) => {
            let t = e === _ ? null : e;
            x.Z.updateGuild({ afkChannelId: t });
        }, []);
    return (0, i.jsx)(j, {
        value: null != a ? a : _,
        options: d,
        canManageGuild: t,
        onChange: u
    });
}
function N(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: a } = e,
        c = (0, s.e7)([m.Z], () => m.Z.getCategories(n)),
        d = r.useMemo(() => {
            let e = (0, o.Z)(c._categories, c)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.d.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return C(t);
                });
            return (
                e.unshift({
                    value: _,
                    label: p.intl.string(p.t.ibUhoa)
                }),
                e
            );
        }, [c]),
        u = r.useCallback((e) => {
            let t = e === _ ? null : e;
            x.Z.updateGuild({ systemChannelId: t });
        }, []);
    return (0, i.jsx)(j, {
        value: null != a ? a : _,
        options: d,
        canManageGuild: t,
        onChange: u
    });
}
function j(e) {
    let { value: t, options: n, canManageGuild: l, onChange: s } = e,
        o = r.useCallback((e) => {
            if (null != e) return (0, i.jsx)(f, { option: e });
        }, []),
        c = r.useCallback((e) => o(e[0]), [o]);
    return (0, i.jsx)(a.q4e, {
        value: t,
        options: n,
        isDisabled: !l,
        onChange: s,
        renderOptionLabel: o,
        renderOptionValue: c
    });
}

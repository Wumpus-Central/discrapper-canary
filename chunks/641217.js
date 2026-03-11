"use strict";
n.d(t, { h: () => E, y: () => N }), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(478437),
    r = n(311907),
    a = n(417048),
    o = n(843282),
    d = n(999903),
    c = n(47167),
    u = n(713654),
    m = n(734057),
    g = n(769765),
    x = n(994500),
    h = n(287809),
    _ = n(997509),
    p = n(985018);
let A = "NO_CHANNEL";
function f(e) {
    return { value: e.id, label: (0, c.m1)(e, h.default, x.A), channel: e, category: m.A.getChannel(e.parent_id) };
}
function j(e) {
    let { option: t } = e,
        { label: n, channel: l, category: r } = t,
        o = s.useMemo(() => (0, u.gU)(l), [l]),
        d = (0, c.Ay)(l);
    return (0, i.jsx)(a.X, { title: n, icon: o, subtitle: null != r ? d : null });
}
function N(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: a, label: o } = e,
        c = (0, r.bG)([g.A], () => g.A.getCategories(n)),
        u = s.useMemo(() => {
            let e = (0, d.A)(c._categories, c)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.r.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return f(t);
                });
            return e.unshift({ value: A, label: p.intl.string(p.t.wGiHkK) }), e;
        }, [c]),
        m = s.useCallback((e) => {
            let t = e === A ? null : e;
            _.A.updateGuild({ afkChannelId: t });
        }, []);
    return (0, i.jsx)(b, { label: o, value: a ?? A, options: u, canManageGuild: t, onChange: m });
}
function E(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: a, label: o, description: c, layout: u } = e,
        m = (0, r.bG)([g.A], () => g.A.getCategories(n)),
        x = s.useMemo(() => {
            let e = (0, d.A)(m._categories, m)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.r.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return f(t);
                });
            return e.unshift({ value: A, label: p.intl.string(p.t.ibUhoa) }), e;
        }, [m]),
        h = s.useCallback((e) => {
            let t = e === A ? null : e;
            _.A.updateGuild({ systemChannelId: t });
        }, []);
    return (0, i.jsx)(b, {
        label: o,
        description: c,
        layout: u,
        value: a ?? A,
        options: x,
        canManageGuild: t,
        onChange: h,
    });
}
function b(e) {
    let { value: t, options: n, canManageGuild: l, onChange: r, label: a, description: d, layout: c } = e,
        u = s.useCallback((e) => {
            if (null != e) return (0, i.jsx)(j, { option: e });
        }, []),
        m = s.useCallback((e) => u(e[0]), [u]);
    return (0, i.jsx)(o.Te, {
        label: a,
        description: d,
        value: t,
        options: n,
        isDisabled: !l,
        onChange: r,
        renderOptionLabel: u,
        renderOptionValue: m,
        layout: c,
        "data-migration-pending": !0,
    });
}

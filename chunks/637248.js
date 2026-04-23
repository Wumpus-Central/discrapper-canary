n.d(t, { DD: () => v, RD: () => F, YC: () => b, vh: () => G, xb: () => y, zH: () => w }), n(667532);
var l = n(64700),
    i = n(91871),
    r = n.n(i),
    E = n(989349),
    a = n.n(E),
    u = n(311907),
    c = n(554146),
    o = n(334738),
    d = n(999903),
    s = n(47167),
    _ = n(826673),
    S = n(473529),
    C = n(32603),
    h = n(101579),
    A = n(976860),
    I = n(734057),
    N = n(769765),
    g = n(222823),
    R = n(994500),
    L = n(287809),
    f = n(661191),
    M = n(652215),
    p = n(746080),
    O = n(281405),
    T = n(790782),
    U = n(985018);
function D(e, t) {
    e.index = t;
}
function G(e, t, n, i) {
    i = i.toLowerCase();
    let E = (0, S.d)(e),
        a = l.useCallback(
            (e, t) =>
                !(E && e.channel.hasFlag(p.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== M.rbe.GUILD_DIRECTORY &&
                (0 === t.length ||
                    r()(t, (0, s.m1)(e.channel, L.default, R.A).toLowerCase()) ||
                    e.channel.topic.toLowerCase().includes(t)),
            [E],
        );
    return l.useMemo(() => {
        let e = { null: [], _categories: [] };
        return (
            n[M.rbe.GUILD_CATEGORY].forEach((n) => {
                let { channel: l } = n;
                "null" === l.id && (e.null = t.null.filter((e) => a(e, i))), (e[l.id] = t[l.id].filter((e) => a(e, i)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0,
            )),
            (0, d.A)(e._categories, e).forEach(D),
            e
        );
    }, [t, n, a, i]);
}
function y(e) {
    let t = e.getSections(!1);
    if (t[C.PU] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case O.n.GUILD_HOME:
                return p.VV.GUILD_HOME;
            case O.n.GUILD_ROLE_SUBSCRIPTIONS:
                return p.VV.ROLE_SUBSCRIPTIONS;
            case O.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                return p.VV.MEMBER_SAFETY;
        }
    for (let n = C.bK; n < e.voiceChannelsSectionNumber; n++)
        if (t[n] > 0) {
            let t = e.getChannelFromSectionRow(n, 0)?.channel;
            if (null != t) return t.id;
        }
    return null;
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, h.y)(e, t),
        (0, o.Uq)(t.map((e) => ({ channelId: e, readStateType: T.P.CHANNEL, messageId: g.Ay.lastMessageId(e) }))),
        null != n && (0, A.pX)(M.BVt.CHANNEL(e, n));
}
function w(e, t, n, l) {
    let i = (0, _.JZ)(c.M.CHANNEL_BROWSER_NUX),
        r = (0, u.cf)([I.A], () => {
            let t = {},
                n = I.A.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let { parent_id: l } = n[e];
                null != l && (t[l] = (t[l] ?? 0) + 1);
            }
            return t;
        }, [e]),
        E = t._categories.map((e) => {
            let l = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === r[e.channel.id] ? 1 : l.length,
                rowHeight: 0 === l.length ? 0 : n,
            };
        });
    return i || null == l || E.unshift({ rowCount: 1, rowHeight: l }), E;
}
function F(e) {
    let t = (0, u.bG)([N.A], () => N.A.getCategories(e)),
        n = t._categories.length,
        l = t._categories[t._categories.length - 1];
    if (null == l) return 0;
    let i = t[l.channel?.id ?? "null"];
    return null == i ? 0 : 0 === i.length ? l.index + 2 - n : i[i.length - 1].index + 2 - n;
}
function b(e) {
    return U.intl.formatToPlainString(U.t["8N0BHR"], {
        timeAgo: a()(f.default.extractTimestamp(g.Ay.lastMessageId(e) ?? e)).fromNow(),
    });
}

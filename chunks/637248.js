n.d(t, { DD: () => x, RD: () => p, YC: () => U, vh: () => D, xb: () => f, zH: () => M }), n(667532);
var l = n(64700),
    r = n(91871),
    a = n.n(r),
    i = n(989349),
    s = n.n(i),
    o = n(311907),
    E = n(554146),
    u = n(334738),
    c = n(999903),
    _ = n(826673),
    d = n(473529),
    g = n(32603),
    A = n(101579),
    T = n(976860),
    I = n(734057),
    N = n(769765),
    h = n(222823),
    m = n(661191),
    S = n(652215),
    G = n(746080),
    O = n(281405),
    C = n(790782),
    R = n(985018);
function L(e, t) {
    e.index = t;
}
function D(e, t, n, r) {
    r = r.toLowerCase();
    let i = (0, d.d)(e),
        s = l.useCallback(
            (e, t) =>
                !(i && e.channel.hasFlag(G.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== S.rbe.GUILD_DIRECTORY &&
                (0 === t.length || a()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)),
            [i],
        );
    return l.useMemo(() => {
        let e = { null: [], _categories: [] };
        return (
            n[S.rbe.GUILD_CATEGORY].forEach((n) => {
                let { channel: l } = n;
                "null" === l.id && (e.null = t.null.filter((e) => s(e, r))), (e[l.id] = t[l.id].filter((e) => s(e, r)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === r.length || e[t.channel.id].length > 0,
            )),
            (0, c.A)(e._categories, e).forEach(L),
            e
        );
    }, [t, n, s, r]);
}
function f(e) {
    let t = e.getSections(!1);
    if (t[g.PU] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case O.n.GUILD_HOME:
                return G.VV.GUILD_HOME;
            case O.n.GUILD_ROLE_SUBSCRIPTIONS:
                return G.VV.ROLE_SUBSCRIPTIONS;
            case O.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                return G.VV.MEMBER_SAFETY;
        }
    for (let n = g.bK; n < e.voiceChannelsSectionNumber; n++)
        if (t[n] > 0) {
            let t = e.getChannelFromSectionRow(n, 0)?.channel;
            if (null != t) return t.id;
        }
    return null;
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, A.y)(e, t),
        (0, u.Uq)(t.map((e) => ({ channelId: e, readStateType: C.P.CHANNEL, messageId: h.Ay.lastMessageId(e) }))),
        null != n && (0, T.pX)(S.BVt.CHANNEL(e, n));
}
function M(e, t, n, l) {
    let r = (0, _.JZ)(E.M.CHANNEL_BROWSER_NUX),
        a = (0, o.cf)([I.A], () => {
            let t = {},
                n = I.A.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let { parent_id: l } = n[e];
                null != l && (t[l] = (t[l] ?? 0) + 1);
            }
            return t;
        }, [e]),
        i = t._categories.map((e) => {
            let l = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
                rowHeight: 0 === l.length ? 0 : n,
            };
        });
    return r || null == l || i.unshift({ rowCount: 1, rowHeight: l }), i;
}
function p(e) {
    let t = (0, o.bG)([N.A], () => N.A.getCategories(e)),
        n = t._categories.length,
        l = t._categories[t._categories.length - 1];
    if (null == l) return 0;
    let r = t[l.channel?.id ?? "null"];
    return null == r ? 0 : 0 === r.length ? l.index + 2 - n : r[r.length - 1].index + 2 - n;
}
function U(e) {
    return R.intl.formatToPlainString(R.t["8N0BHR"], {
        timeAgo: s()(m.default.extractTimestamp(h.Ay.lastMessageId(e) ?? e)).fromNow(),
    });
}

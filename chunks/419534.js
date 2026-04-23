n.d(t, { YC: () => P, zH: () => W, DD: () => m, RD: () => H, xb: () => b, vh: () => F }), n(667532);
var l = n(64700),
    i = n(91871),
    r = n.n(i),
    E = n(989349),
    a = n.n(E),
    u = n(17928),
    c = n(554146),
    o = n(334738),
    s = n(999903),
    d = n(47167),
    _ = n(826673),
    S = n(473529),
    C = n(32603),
    h = n(335871),
    A = n(228366),
    I = n(594061),
    N = n(954571),
    g = n(652215);
async function R(e, t) {
    await (0, I.TG)(
        e,
        (e) => ((e.guildRecentsDismissedAt = h.D.fromDate(new Date())), !0),
        I.Sb.INFREQUENT_USER_ACTION,
    ),
        A.h.dispatch({ type: "BULK_CLEAR_RECENTS", guildId: e, channelIds: t }),
        N.default.track(g.HAw.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}
var L = n(976860),
    f = n(734057),
    M = n(769765),
    p = n(222823),
    O = n(994500),
    T = n(287809),
    U = n(935208),
    D = n(746080),
    G = n(281405),
    y = n(790782),
    v = n(985018);
function w(e, t) {
    e.index = t;
}
function F(e, t, n, i) {
    i = i.toLowerCase();
    let E = (0, S.d)(e),
        a = l.useCallback(
            (e, t) =>
                !(E && e.channel.hasFlag(D.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== g.rbe.GUILD_DIRECTORY &&
                (0 === t.length ||
                    r()(t, (0, d.m1)(e.channel, T.default, O.A).toLowerCase()) ||
                    e.channel.topic.toLowerCase().includes(t)),
            [E],
        );
    return l.useMemo(() => {
        let e = { null: [], _categories: [] };
        return (
            n[g.rbe.GUILD_CATEGORY].forEach((n) => {
                let { channel: l } = n;
                "null" === l.id && (e.null = t.null.filter((e) => a(e, i))), (e[l.id] = t[l.id].filter((e) => a(e, i)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0,
            )),
            (0, s.A)(e._categories, e).forEach(w),
            e
        );
    }, [t, n, a, i]);
}
function b(e) {
    let t = e.getSections(!1);
    if (t[C.PU] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case G.n.GUILD_HOME:
                return D.VV.GUILD_HOME;
            case G.n.GUILD_ROLE_SUBSCRIPTIONS:
                return D.VV.ROLE_SUBSCRIPTIONS;
            case G.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                return D.VV.MEMBER_SAFETY;
        }
    for (let n = C.bK; n < e.voiceChannelsSectionNumber; n++)
        if (t[n] > 0) {
            let t = e.getChannelFromSectionRow(n, 0)?.channel;
            if (null != t) return t.id;
        }
    return null;
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    R(e, t),
        (0, o.Uq)(t.map((e) => ({ channelId: e, readStateType: y.P.CHANNEL, messageId: p.Ay.lastMessageId(e) }))),
        null != n && (0, L.pX)(g.BVt.CHANNEL(e, n));
}
function W(e, t, n, l) {
    let i = (0, _.JZ)(c.M.CHANNEL_BROWSER_NUX),
        r = (0, u.cf)([f.A], () => {
            let t = {},
                n = f.A.getMutableGuildChannelsForGuild(e);
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
function H(e) {
    let t = (0, u.bG)([M.A], () => M.A.getCategories(e)),
        n = t._categories.length,
        l = t._categories[t._categories.length - 1];
    if (null == l) return 0;
    let i = t[l.channel?.id ?? "null"];
    return null == i ? 0 : 0 === i.length ? l.index + 2 - n : i[i.length - 1].index + 2 - n;
}
function P(e) {
    return v.intl.formatToPlainString(v.t["8N0BHR"], {
        timeAgo: a()(U.default.extractTimestamp(p.Ay.lastMessageId(e) ?? e)).fromNow(),
    });
}

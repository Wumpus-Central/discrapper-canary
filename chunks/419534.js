n.d(t, { YC: () => V, zH: () => P, DD: () => M, RD: () => G, xb: () => k, vh: () => w }), n(667532);
var i = n(64700),
    l = n(91871),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    r = n(17928),
    d = n(554146),
    c = n(334738),
    u = n(999903),
    h = n(47167),
    p = n(826673),
    _ = n(473529),
    g = n(285114),
    A = n(335871),
    f = n(228366),
    m = n(594061),
    E = n(954571),
    y = n(652215);
async function S(e, t) {
    await (0, m.TG)(
        e,
        (e) => ((e.guildRecentsDismissedAt = A.D.fromDate(new Date())), !0),
        m.Sb.INFREQUENT_USER_ACTION,
    ),
        f.h.dispatch({ type: "BULK_CLEAR_RECENTS", guildId: e, channelIds: t }),
        E.default.track(y.HAw.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}
var x = n(976860),
    C = n(734057),
    v = n(769765),
    I = n(222823),
    N = n(994500),
    T = n(287809),
    O = n(935208),
    b = n(746080),
    D = n(281405),
    R = n(790782),
    L = n(985018);
function j(e, t) {
    e.index = t;
}
function w(e, t, n, l) {
    l = l.toLowerCase();
    let a = (0, _.d)(e),
        o = i.useCallback(
            (e, t) =>
                !(a && e.channel.hasFlag(b.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== y.rbe.GUILD_DIRECTORY &&
                (0 === t.length ||
                    s()(t, (0, h.m1)(e.channel, T.default, N.A).toLowerCase()) ||
                    e.channel.topic.toLowerCase().includes(t)),
            [a],
        );
    return i.useMemo(() => {
        let e = { null: [], _categories: [] };
        return (
            n[y.rbe.GUILD_CATEGORY].forEach((n) => {
                let { channel: i } = n;
                "null" === i.id && (e.null = t.null.filter((e) => o(e, l))), (e[i.id] = t[i.id].filter((e) => o(e, l)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === l.length || e[t.channel.id].length > 0,
            )),
            (0, u.A)(e._categories, e).forEach(j),
            e
        );
    }, [t, n, o, l]);
}
function k(e) {
    let t = e.getSections(!1);
    if (t[g.PU] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case D.n.GUILD_HOME:
                return b.VV.GUILD_HOME;
            case D.n.GUILD_ROLE_SUBSCRIPTIONS:
                return b.VV.ROLE_SUBSCRIPTIONS;
            case D.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                return b.VV.MEMBER_SAFETY;
        }
    for (let n = g.bK; n < e.voiceChannelsSectionNumber; n++)
        if (t[n] > 0) {
            let t = e.getChannelFromSectionRow(n, 0)?.channel;
            if (null != t) return t.id;
        }
    return null;
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    S(e, t),
        (0, c.Uq)(t.map((e) => ({ channelId: e, readStateType: R.P.CHANNEL, messageId: I.Ay.lastMessageId(e) }))),
        null != n && (0, x.pX)(y.BVt.CHANNEL(e, n));
}
function P(e, t, n, i) {
    let l = (0, p.JZ)(d.M.CHANNEL_BROWSER_NUX),
        s = (0, r.cf)([C.A], () => {
            let t = {},
                n = C.A.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let { parent_id: i } = n[e];
                null != i && (t[i] = (t[i] ?? 0) + 1);
            }
            return t;
        }, [e]),
        a = t._categories.map((e) => {
            let i = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === s[e.channel.id] ? 1 : i.length,
                rowHeight: 0 === i.length ? 0 : n,
            };
        });
    return l || null == i || a.unshift({ rowCount: 1, rowHeight: i }), a;
}
function G(e) {
    let t = (0, r.bG)([v.A], () => v.A.getCategories(e)),
        n = t._categories.length,
        i = t._categories[t._categories.length - 1];
    if (null == i) return 0;
    let l = t[i.channel?.id ?? "null"];
    return null == l ? 0 : 0 === l.length ? i.index + 2 - n : l[l.length - 1].index + 2 - n;
}
function V(e) {
    return L.intl.formatToPlainString(L.t["8N0BHR"], {
        timeAgo: o()(O.default.extractTimestamp(I.Ay.lastMessageId(e) ?? e)).fromNow(),
    });
}

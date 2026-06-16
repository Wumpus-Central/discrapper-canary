t.d(n, { YC: () => x, zH: () => V, DD: () => y, RD: () => k, xb: () => B, vh: () => b }), t(667532);
var l = t(64700),
    i = t(91871),
    a = t.n(i),
    r = t(989349),
    c = t.n(r),
    o = t(17928),
    u = t(554146),
    s = t(334738),
    h = t(999903),
    d = t(47167),
    _ = t(826673),
    g = t(473529),
    E = t(297469),
    f = t(335871),
    C = t(228366),
    A = t(594061),
    R = t(174459),
    S = t(652215);
async function I(e, n) {
    await (0, A.TG)(
        e,
        (e) => ((e.guildRecentsDismissedAt = f.D.fromDate(new Date())), !0),
        A.Sb.INFREQUENT_USER_ACTION,
    ),
        C.h.dispatch({ type: "BULK_CLEAR_RECENTS", guildId: e, channelIds: n }),
        R.default.track(S.HAw.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}
var L = t(976860),
    N = t(734057),
    D = t(769765),
    p = t(222823),
    U = t(994500),
    w = t(287809),
    m = t(935208),
    T = t(746080),
    G = t(281405),
    H = t(790782),
    M = t(375708);
function O(e, n) {
    e.index = n;
}
function b(e, n, t, i) {
    i = i.toLowerCase();
    let r = (0, g.d)(e),
        c = l.useCallback(
            (e, n) =>
                !(r && e.channel.hasFlag(T.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== S.rbe.GUILD_DIRECTORY &&
                (0 === n.length ||
                    a()(n, (0, d.m1)(e.channel, w.default, U.A).toLowerCase()) ||
                    e.channel.topic.toLowerCase().includes(n)),
            [r],
        );
    return l.useMemo(() => {
        let e = { null: [], _categories: [] };
        return (
            t[S.rbe.GUILD_CATEGORY].forEach((t) => {
                let { channel: l } = t;
                "null" === l.id && (e.null = n.null.filter((e) => c(e, i))), (e[l.id] = n[l.id].filter((e) => c(e, i)));
            }),
            (e._categories = n._categories.filter(
                (n) => "null" === n.channel.id || 0 === i.length || e[n.channel.id].length > 0,
            )),
            (0, h.A)(e._categories, e).forEach(O),
            e
        );
    }, [n, t, c, i]);
}
function B(e) {
    let n = e.getSections(!1);
    if (n[E.PU] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case G.n.GUILD_HOME:
                return T.VV.GUILD_HOME;
            case G.n.GUILD_ROLE_SUBSCRIPTIONS:
                return T.VV.ROLE_SUBSCRIPTIONS;
            case G.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                return T.VV.MEMBER_SAFETY;
        }
    for (let t = E.bK; t < e.voiceChannelsSectionNumber; t++)
        if (n[t] > 0) {
            let n = e.getChannelFromSectionRow(t, 0)?.channel;
            if (null != n) return n.id;
        }
    return null;
}
function y(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    I(e, n),
        (0, s.Uq)(n.map((e) => ({ channelId: e, readStateType: H.P.CHANNEL, messageId: p.Ay.lastMessageId(e) }))),
        null != t && (0, L.pX)(S.BVt.CHANNEL(e, t));
}
function V(e, n, t, l) {
    let i = (0, _.JZ)(u.M.CHANNEL_BROWSER_NUX),
        a = (0, o.cf)([N.A], () => {
            let n = {},
                t = N.A.getMutableGuildChannelsForGuild(e);
            for (let e in t) {
                let { parent_id: l } = t[e];
                null != l && (n[l] = (n[l] ?? 0) + 1);
            }
            return n;
        }, [e]),
        r = n._categories.map((e) => {
            let l = n[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
                rowHeight: 0 === l.length ? 0 : t,
            };
        });
    return i || null == l || r.unshift({ rowCount: 1, rowHeight: l }), r;
}
function k(e) {
    let n = (0, o.bG)([D.A], () => D.A.getCategories(e)),
        t = n._categories.length,
        l = n._categories[n._categories.length - 1];
    if (null == l) return 0;
    let i = n[l.channel?.id ?? "null"];
    return null == i ? 0 : 0 === i.length ? l.index + 2 - t : i[i.length - 1].index + 2 - t;
}
function x(e) {
    return M.intl.formatToPlainString(M.t["8N0BHR"], {
        timeAgo: c()(m.default.extractTimestamp(p.Ay.lastMessageId(e) ?? e)).fromNow(),
    });
}

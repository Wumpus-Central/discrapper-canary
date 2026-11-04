(t.d(n, { DD: () => b, YC: () => V, xb: () => O, RD: () => y, zH: () => B, vh: () => M }), t(667532));
var l = t(582128),
    i = t(91871),
    a = t.n(i),
    r = t(536637),
    c = t.n(r),
    o = t(855986),
    u = t(554146),
    s = t(334738),
    h = t(999903),
    d = t(47167),
    _ = t(826673),
    g = t(473529);
t(791513);
var E = t(335871),
    f = t(73153),
    C = t(594061),
    A = t(129230),
    R = t(652215),
    S = t(976860),
    I = t(734057),
    L = t(769765),
    N = t(218461),
    D = t(994500),
    p = t(287809),
    w = t(811091),
    U = t(746080),
    m = t(281405),
    T = t(790782),
    H = t(792996);
function G(e, n) {
    e.index = n;
}
function M(e, n, t, i) {
    i = i.toLowerCase();
    let r = (0, g.d)(e),
        c = l.useCallback(
            (e, n) =>
                !(r && e.channel.hasFlag(U.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== R.rbe.GUILD_DIRECTORY &&
                (0 === n.length ||
                    a()(n, (0, d.m1)(e.channel, p.default, D.A).toLowerCase()) ||
                    e.channel.topic.toLowerCase().includes(n)),
            [r],
        );
    return l.useMemo(() => {
        let e = { null: [], _categories: [] };
        return (
            t[R.rbe.GUILD_CATEGORY].forEach((t) => {
                let { channel: l } = t;
                ("null" === l.id && (e.null = n.null.filter((e) => c(e, i))),
                    (e[l.id] = n[l.id].filter((e) => c(e, i))));
            }),
            (e._categories = n._categories.filter(
                (n) => "null" === n.channel.id || 0 === i.length || e[n.channel.id].length > 0,
            )),
            (0, h.A)(e._categories, e).forEach(G),
            e
        );
    }, [n, t, c, i]);
}
function O(e) {
    let n = e.getSections(!1);
    if (n[1] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case m.n.GUILD_HOME:
                return U.VV.GUILD_HOME;
            case m.n.GUILD_ROLE_SUBSCRIPTIONS:
                return U.VV.ROLE_SUBSCRIPTIONS;
            case m.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                return U.VV.MEMBER_SAFETY;
        }
    for (let t = 4; t < e.voiceChannelsSectionNumber; t++)
        if (n[t] > 0) {
            let n = e.getChannelFromSectionRow(t, 0)?.channel;
            if (null != n) return n.id;
        }
    return null;
}
function b(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (!(async function (e, n) {
        (await (0, C.TG)(
            e,
            (e) => ((e.guildRecentsDismissedAt = E.D.fromDate(new Date())), !0),
            C.Sb.INFREQUENT_USER_ACTION,
        ),
            f.h.dispatch({ type: "BULK_CLEAR_RECENTS", guildId: e, channelIds: n }),
            A.default.track(R.HAw.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" }));
    })(e, n),
        (0, s.Uq)(n.map((e) => ({ channelId: e, readStateType: T.P.CHANNEL, messageId: N.Ay.lastMessageId(e) }))),
        null != t && (0, S.pX)(R.BVt.CHANNEL(e, t)));
}
function B(e, n, t, l) {
    let i = (0, _.HX)(u.M.CHANNEL_BROWSER_NUX),
        a = (0, o.cf)(
            [I.A],
            () => {
                let n = {},
                    t = I.A.getMutableGuildChannelsForGuild(e);
                for (let e in t) {
                    let { parent_id: l } = t[e];
                    null != l && (n[l] = (n[l] ?? 0) + 1);
                }
                return n;
            },
            [e],
        ),
        r = n._categories.map((e) => {
            let l = n[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
                rowHeight: 0 === l.length ? 0 : t,
            };
        });
    return (i || null == l || r.unshift({ rowCount: 1, rowHeight: l }), r);
}
function y(e) {
    let n = (0, o.bG)([L.A], () => L.A.getCategories(e)),
        t = n._categories.length,
        l = n._categories[n._categories.length - 1];
    if (null == l) return 0;
    let i = n[l.channel?.id ?? "null"];
    return null == i ? 0 : 0 === i.length ? l.index + 2 - t : i[i.length - 1].index + 2 - t;
}
function V(e) {
    return H.intl.formatToPlainString(H.t["8N0BHR"], {
        timeAgo: c()(w.default.extractTimestamp(N.Ay.lastMessageId(e) ?? e)).fromNow(),
    });
}

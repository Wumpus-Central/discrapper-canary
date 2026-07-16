"use strict";
n.d(t, {
    $I: () => V,
    An: () => J,
    Ck: () => j,
    Eh: () => F,
    Hv: () => X,
    Mw: () => B,
    O3: () => Q,
    S4: () => z,
    V3: () => ei,
    X5: () => Z,
    cA: () => ee,
    ed: () => en,
    gk: () => $,
    k6: () => W,
    kn: () => Y,
    lQ: () => H,
    o7: () => et,
    tY: () => K,
    yz: () => k,
});
var i = n(64700),
    r = n(435558),
    a = n.n(r),
    s = n(602137),
    l = n(17928),
    o = n(228366),
    d = n(334738),
    c = n(964486),
    u = n(159273),
    _ = n(521981),
    E = n(763754),
    A = n(695633),
    h = n(970278),
    I = n(321045),
    f = n(456874),
    p = n(707539),
    T = n(734057),
    m = n(860071),
    g = n(71393),
    S = n(576705),
    N = n(568548),
    C = n(287809),
    R = n(403362),
    O = n(935208),
    L = n(919577),
    y = n(207777),
    D = n(256265),
    v = n(969043),
    b = n(474399),
    M = n(768953),
    P = n(767581),
    U = n(253913),
    w = n(652215),
    G = n(746080),
    x = n(37411);
function k(e, t, n, r) {
    let a = (0, l.bG)([h.A], () => h.A.hasLoaded(e.guild_id));
    i.useEffect(() => {
        if (!a) return;
        let i = y.A.getThreadIds(e.id, t, n, r),
            s = b.A.getThreadIdsMissingCounts(e.guild_id, i)
                .filter((e) => (0, P.yz)(e, [N.Ay]))
                .slice(0, 180)
                .map((e) => ({ threadId: e, ackMessageId: N.Ay.getTrackedAckMessageId(e) }));
        s.length > 0 &&
            o.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: s });
    }, [e.id, e.guild_id, a, n, t, r]);
}
function F(e) {
    return (0, l.bG)([h.A, T.A], () => {
        let t = a()(h.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => T.A.getChannel(e)?.hasFlag(G.lx.PINNED) === !0)
            .head();
        return T.A.getChannel(t);
    });
}
function V(e, t) {
    let n = (0, l.yK)([C.default], () => t.map((e) => C.default.getUser(e)).filter(R.Vq));
    return (
        (0, c.Ay)(() => {
            n.forEach((t) => {
                m.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.EG.DURATION_AGO,
        r = i.useMemo(() => O.default.extractTimestamp(e.id), [e.id]),
        a = (0, p.JO)(e),
        l = i.useMemo(() => (0, P.mf)(t, n), [t, n]);
    return i.useMemo(() => (t === s.T.CREATION_DATE ? (0, p.aK)(r, l) : (0, p.aK)(a, l)), [a, t, r, l]);
}
function H(e) {
    return i.useMemo(() => {
        let t = e?.reactions ?? [];
        if (0 !== t.length)
            return a().orderBy(t, [(e) => e.count + e.burst_count, (e) => e.burst_count], ["desc", "desc"])[0];
    }, [e?.reactions]);
}
function j(e) {
    let t = e?.defaultReactionEmoji,
        n = (0, l.bG)([u.Ay], () => (t?.emojiId != null ? u.Ay.getUsableCustomEmojiById(t.emojiId) : null));
    return null == t
        ? null
        : null != t.emojiId && null != n
          ? { id: t.emojiId, name: n.name, animated: n.animated }
          : null != t.emojiName
            ? { id: t.emojiId, name: t.emojiName, animated: !1 }
            : null;
}
function W(e) {
    let t = (0, l.bG)([f.A], () => f.A.getCount(e.id) ?? 0),
        n = (0, I.Mw)(t, e.id),
        i = (0, l.bG)([N.Ay], () => (0, P.yz)(e.id, [N.Ay])),
        r = (0, l.bG)([b.A], () => {
            if (!i) return null;
            let n = b.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= x.oR ? `${x.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: r };
}
function Y(e) {
    let t = (0, l.bG)([C.default], () => C.default.getUser(e.ownerId)),
        n = (0, l.bG)([v.A], () => v.A.getMessage(e.id)?.firstMessage),
        r = (0, E.d8)(n?.author ?? t, e);
    return (
        i.useEffect(() => {
            null != e.ownerId && m.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: r }
    );
}
function K(e) {
    let t = C.default.getUser(e.ownerId),
        n = v.A.getMessage(e.id)?.firstMessage,
        i = (0, E.FT)(n?.author ?? t, e);
    return { user: t, author: i };
}
function $(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0, hasUnreads: a = !0 } = e,
        s = a ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: l, content: o } = i.useMemo(
            () =>
                t?.content != null && "" !== t.content
                    ? (0, _.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: r,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          textColor: s,
                          disablePressableChannelMention: !0,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, r, s],
        ),
        d = (0, D.Ky)(t, l),
        c = (0, D.L_)(t, l);
    return { hasSpoilerEmbeds: l, content: o, firstMedia: d, firstMediaIsEmbed: c };
}
function z(e) {
    return (0, l.bG)([S.A], () => S.A.can(w.xBc.MANAGE_CHANNELS, e));
}
let q = { isNew: !1, hasUnreads: !1 };
function Z(e) {
    return (0, l.cf)([g.A, N.Ay], () => {
        let t = g.A.getGuild(e.getGuildId() ?? w.dJq);
        return null == t ? q : (0, P.U1)(e, t, [N.Ay]);
    });
}
function X(e) {
    return i.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function Q(e) {
    return (0, l.bG)([S.A], () => S.A.can(w.xBc.READ_MESSAGE_HISTORY, e));
}
function J(e) {
    return (0, l.bG)([S.A], () => S.A.can(w.xBc.READ_MESSAGE_HISTORY, e));
}
function ee(e) {
    let { channelId: t } = e;
    return (0, l.cf)([M.A], () => ({
        isSearchLoading: M.A.getSearchLoading(t),
        searchQuery: M.A.getSearchQuery(t),
        searchResults: M.A.getSearchResults(t),
    }));
}
function et(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: a, searchQuery: s } = ee({ channelId: e.id }),
        l = Q(e),
        o = i.useRef(null),
        d = i.useRef(new Set());
    i.useEffect(() => {
        if (null == s && null != o.current) {
            L.A.clearForumSearch(e.id), (o.current = null);
            return;
        }
        if (null == s || 0 === s.length || r) return;
        if (!l) return void L.A.clearForumSearch(e.id);
        if ((o.current === s && d.current === t) || a) return;
        let i = setTimeout(async () => {
            (o.current = s), (d.current = t);
            try {
                await L.A.searchForumPosts(e.guild_id, e.id, s, t, n);
            } catch {}
        }, 350);
        return () => clearTimeout(i);
    }, [l, e.guild_id, e.id, r, a, s, t, n]);
}
function en(e, t) {
    return (0, l.bG)([A.A, N.Ay, T.A], () => {
        let n = T.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let i = A.A.getActiveJoinedUnreadThreadsForParent(e, t),
            r = A.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            a = N.Ay.ackMessageId(t),
            s = 0;
        if (null == a) return s;
        for (let e in i) {
            let t = i[e],
                n = N.Ay.lastMessageId(t.channel.id);
            null != n && n > a && s++;
        }
        for (let e in r) {
            let t = r[e],
                n = N.Ay.lastMessageId(t.id);
            null != n && n > a && s++;
        }
        return s;
    });
}
function ei(e) {
    let { channel: t, sortOrder: n, tagFilter: r, tagSetting: a, shouldAutomaticallyAck: s } = e,
        o = (0, l.yK)([y.A], () => y.A.getThreadIds(t.id, n, r, a)),
        c = en(t.guild_id, t.id),
        u = (0, l.bG)([y.A], () => s && (c > 0 || y.A.getCanAckThreads()), [s, c]);
    return (
        i.useEffect(() => {
            u &&
                (0, d.hS)(t, {
                    object: w.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: w.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, u]),
        o
    );
}

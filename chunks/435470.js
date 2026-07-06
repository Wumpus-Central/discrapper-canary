"use strict";
n.d(t, {
    $I: () => F,
    An: () => J,
    Ck: () => j,
    Eh: () => V,
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
    yz: () => G,
});
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(602137),
    o = n(17928),
    l = n(228366),
    u = n(334738),
    c = n(964486),
    d = n(159273),
    _ = n(465364),
    h = n(763754),
    f = n(695633),
    E = n(970278),
    p = n(321045),
    m = n(456874),
    g = n(707539),
    A = n(734057),
    I = n(860071),
    T = n(71393),
    S = n(576705),
    N = n(568548),
    C = n(287809),
    y = n(403362),
    O = n(935208),
    R = n(919577),
    v = n(207777),
    b = n(256265),
    L = n(969043),
    D = n(474399),
    w = n(768953),
    P = n(767581),
    M = n(253913),
    x = n(652215),
    U = n(746080),
    k = n(37411);
function G(e, t, n, r) {
    let s = (0, o.bG)([E.A], () => E.A.hasLoaded(e.guild_id));
    i.useEffect(() => {
        if (!s) return;
        let i = v.A.getThreadIds(e.id, t, n, r),
            a = D.A.getThreadIdsMissingCounts(e.guild_id, i)
                .filter((e) => (0, P.yz)(e, [N.Ay]))
                .slice(0, 180)
                .map((e) => ({ threadId: e, ackMessageId: N.Ay.getTrackedAckMessageId(e) }));
        a.length > 0 &&
            l.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: a });
    }, [e.id, e.guild_id, s, n, t, r]);
}
function V(e) {
    return (0, o.bG)([E.A, A.A], () => {
        let t = s()(E.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => A.A.getChannel(e)?.hasFlag(U.lx.PINNED) === !0)
            .head();
        return A.A.getChannel(t);
    });
}
function F(e, t) {
    let n = (0, o.yK)([C.default], () => t.map((e) => C.default.getUser(e)).filter(y.Vq));
    return (
        (0, c.Ay)(() => {
            n.forEach((t) => {
                I.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : M.EG.DURATION_AGO,
        r = i.useMemo(() => O.default.extractTimestamp(e.id), [e.id]),
        s = (0, g.JO)(e),
        o = i.useMemo(() => (0, P.mf)(t, n), [t, n]);
    return i.useMemo(() => (t === a.T.CREATION_DATE ? (0, g.aK)(r, o) : (0, g.aK)(s, o)), [s, t, r, o]);
}
function H(e) {
    return i.useMemo(() => {
        let t = e?.reactions ?? [];
        if (0 !== t.length)
            return s().orderBy(t, [(e) => e.count + e.burst_count, (e) => e.burst_count], ["desc", "desc"])[0];
    }, [e?.reactions]);
}
function j(e) {
    let t = e?.defaultReactionEmoji,
        n = (0, o.bG)([d.Ay], () => (t?.emojiId != null ? d.Ay.getUsableCustomEmojiById(t.emojiId) : null));
    return null == t
        ? null
        : null != t.emojiId && null != n
          ? { id: t.emojiId, name: n.name, animated: n.animated }
          : null != t.emojiName
            ? { id: t.emojiId, name: t.emojiName, animated: !1 }
            : null;
}
function W(e) {
    let t = (0, o.bG)([m.A], () => m.A.getCount(e.id) ?? 0),
        n = (0, p.Mw)(t, e.id),
        i = (0, o.bG)([N.Ay], () => (0, P.yz)(e.id, [N.Ay])),
        r = (0, o.bG)([D.A], () => {
            if (!i) return null;
            let n = D.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= k.oR ? `${k.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: r };
}
function Y(e) {
    let t = (0, o.bG)([C.default], () => C.default.getUser(e.ownerId)),
        n = (0, o.bG)([L.A], () => L.A.getMessage(e.id)?.firstMessage),
        r = (0, h.d8)(n?.author ?? t, e);
    return (
        i.useEffect(() => {
            null != e.ownerId && I.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: r }
    );
}
function K(e) {
    let t = C.default.getUser(e.ownerId),
        n = L.A.getMessage(e.id)?.firstMessage,
        i = (0, h.FT)(n?.author ?? t, e);
    return { user: t, author: i };
}
function $(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: r = !0, hasUnreads: s = !0 } = e,
        a = s ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: o, content: l } = i.useMemo(
            () =>
                t?.content != null && "" !== t.content
                    ? (0, _.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: r,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          textColor: a,
                          disablePressableChannelMention: !0,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, r, a],
        ),
        u = (0, b.Ky)(t, o),
        c = (0, b.L_)(t, o);
    return { hasSpoilerEmbeds: o, content: l, firstMedia: u, firstMediaIsEmbed: c };
}
function z(e) {
    return (0, o.bG)([S.A], () => S.A.can(x.xBc.MANAGE_CHANNELS, e));
}
let q = { isNew: !1, hasUnreads: !1 };
function Z(e) {
    return (0, o.cf)([T.A, N.Ay], () => {
        let t = T.A.getGuild(e.getGuildId() ?? x.dJq);
        return null == t ? q : (0, P.U1)(e, t, [N.Ay]);
    });
}
function X(e) {
    return i.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function Q(e) {
    return (0, o.bG)([S.A], () => S.A.can(x.xBc.READ_MESSAGE_HISTORY, e));
}
function J(e) {
    return (0, o.bG)([S.A], () => S.A.can(x.xBc.READ_MESSAGE_HISTORY, e));
}
function ee(e) {
    let { channelId: t } = e;
    return (0, o.cf)([w.A], () => ({
        isSearchLoading: w.A.getSearchLoading(t),
        searchQuery: w.A.getSearchQuery(t),
        searchResults: w.A.getSearchResults(t),
    }));
}
function et(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: s, searchQuery: a } = ee({ channelId: e.id }),
        o = Q(e),
        l = i.useRef(null),
        u = i.useRef(new Set());
    i.useEffect(() => {
        if (null == a && null != l.current) {
            R.A.clearForumSearch(e.id), (l.current = null);
            return;
        }
        if (null == a || 0 === a.length || r) return;
        if (!o) return void R.A.clearForumSearch(e.id);
        if ((l.current === a && u.current === t) || s) return;
        let i = setTimeout(async () => {
            (l.current = a), (u.current = t);
            try {
                await R.A.searchForumPosts(e.guild_id, e.id, a, t, n);
            } catch {}
        }, 350);
        return () => clearTimeout(i);
    }, [o, e.guild_id, e.id, r, s, a, t, n]);
}
function en(e, t) {
    return (0, o.bG)([f.A, N.Ay, A.A], () => {
        let n = A.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let i = f.A.getActiveJoinedUnreadThreadsForParent(e, t),
            r = f.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            s = N.Ay.ackMessageId(t),
            a = 0;
        if (null == s) return a;
        for (let e in i) {
            let t = i[e],
                n = N.Ay.lastMessageId(t.channel.id);
            null != n && n > s && a++;
        }
        for (let e in r) {
            let t = r[e],
                n = N.Ay.lastMessageId(t.id);
            null != n && n > s && a++;
        }
        return a;
    });
}
function ei(e) {
    let { channel: t, sortOrder: n, tagFilter: r, tagSetting: s, shouldAutomaticallyAck: a } = e,
        l = (0, o.yK)([v.A], () => v.A.getThreadIds(t.id, n, r, s)),
        c = en(t.guild_id, t.id),
        d = (0, o.bG)([v.A], () => a && (c > 0 || v.A.getCanAckThreads()), [a, c]);
    return (
        i.useEffect(() => {
            d &&
                (0, u.hS)(t, {
                    object: x.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: x.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, d]),
        l
    );
}

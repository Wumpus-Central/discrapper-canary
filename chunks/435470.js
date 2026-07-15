n.d(t, {
    $I: () => H,
    An: () => W,
    Ck: () => B,
    Eh: () => v,
    Hv: () => X,
    Mw: () => K,
    O3: () => Z,
    S4: () => J,
    V3: () => er,
    X5: () => $,
    cA: () => ee,
    ed: () => en,
    gk: () => Y,
    k6: () => Q,
    kn: () => q,
    lQ: () => P,
    o7: () => et,
    tY: () => z,
    yz: () => x,
});
var r = n(64700),
    u = n(435558),
    i = n.n(u),
    l = n(602137),
    a = n(17928),
    d = n(228366),
    s = n(334738),
    o = n(964486),
    c = n(159273),
    A = n(465364),
    f = n(763754),
    g = n(695633),
    h = n(970278),
    m = n(321045),
    E = n(456874),
    _ = n(707539),
    C = n(734057),
    M = n(860071),
    y = n(71393),
    I = n(576705),
    S = n(568548),
    T = n(287809),
    b = n(403362),
    R = n(935208),
    G = n(919577),
    U = n(207777),
    p = n(256265),
    w = n(969043),
    N = n(474399),
    k = n(768953),
    F = n(767581),
    O = n(253913),
    j = n(652215),
    D = n(746080),
    L = n(37411);
function x(e, t, n, u) {
    let i = (0, a.bG)([h.A], () => h.A.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!i) return;
        let r = U.A.getThreadIds(e.id, t, n, u),
            l = N.A.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, F.yz)(e, [S.Ay]))
                .slice(0, 180)
                .map((e) => ({ threadId: e, ackMessageId: S.Ay.getTrackedAckMessageId(e) }));
        l.length > 0 &&
            d.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: l });
    }, [e.id, e.guild_id, i, n, t, u]);
}
function v(e) {
    return (0, a.bG)([h.A, C.A], () => {
        let t = i()(h.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => C.A.getChannel(e)?.hasFlag(D.lx.PINNED) === !0)
            .head();
        return C.A.getChannel(t);
    });
}
function H(e, t) {
    let n = (0, a.yK)([T.default], () => t.map((e) => T.default.getUser(e)).filter(b.Vq));
    return (
        (0, o.Ay)(() => {
            n.forEach((t) => {
                M.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.EG.DURATION_AGO,
        u = r.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
        i = (0, _.JO)(e),
        a = r.useMemo(() => (0, F.mf)(t, n), [t, n]);
    return r.useMemo(() => (t === l.T.CREATION_DATE ? (0, _.aK)(u, a) : (0, _.aK)(i, a)), [i, t, u, a]);
}
function P(e) {
    return r.useMemo(() => {
        let t = e?.reactions ?? [];
        if (0 !== t.length)
            return i().orderBy(t, [(e) => e.count + e.burst_count, (e) => e.burst_count], ["desc", "desc"])[0];
    }, [e?.reactions]);
}
function B(e) {
    let t = e?.defaultReactionEmoji,
        n = (0, a.bG)([c.Ay], () => (t?.emojiId != null ? c.Ay.getUsableCustomEmojiById(t.emojiId) : null));
    return null == t
        ? null
        : null != t.emojiId && null != n
          ? { id: t.emojiId, name: n.name, animated: n.animated }
          : null != t.emojiName
            ? { id: t.emojiId, name: t.emojiName, animated: !1 }
            : null;
}
function Q(e) {
    let t = (0, a.bG)([E.A], () => E.A.getCount(e.id) ?? 0),
        n = (0, m.Mw)(t, e.id),
        r = (0, a.bG)([S.Ay], () => (0, F.yz)(e.id, [S.Ay])),
        u = (0, a.bG)([N.A], () => {
            if (!r) return null;
            let n = N.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= L.oR ? `${L.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: u };
}
function q(e) {
    let t = (0, a.bG)([T.default], () => T.default.getUser(e.ownerId)),
        n = (0, a.bG)([w.A], () => w.A.getMessage(e.id)?.firstMessage),
        u = (0, f.d8)(n?.author ?? t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && M.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: u }
    );
}
function z(e) {
    let t = T.default.getUser(e.ownerId),
        n = w.A.getMessage(e.id)?.firstMessage,
        r = (0, f.FT)(n?.author ?? t, e);
    return { user: t, author: r };
}
function Y(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: u = !0, hasUnreads: i = !0 } = e,
        l = i ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: a, content: d } = r.useMemo(
            () =>
                t?.content != null && "" !== t.content
                    ? (0, A.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: u,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          textColor: l,
                          disablePressableChannelMention: !0,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, u, l],
        ),
        s = (0, p.Ky)(t, a),
        o = (0, p.L_)(t, a);
    return { hasSpoilerEmbeds: a, content: d, firstMedia: s, firstMediaIsEmbed: o };
}
function J(e) {
    return (0, a.bG)([I.A], () => I.A.can(j.xBc.MANAGE_CHANNELS, e));
}
let V = { isNew: !1, hasUnreads: !1 };
function $(e) {
    return (0, a.cf)([y.A, S.Ay], () => {
        let t = y.A.getGuild(e.getGuildId() ?? j.dJq);
        return null == t ? V : (0, F.U1)(e, t, [S.Ay]);
    });
}
function X(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function Z(e) {
    return (0, a.bG)([I.A], () => I.A.can(j.xBc.READ_MESSAGE_HISTORY, e));
}
function W(e) {
    return (0, a.bG)([I.A], () => I.A.can(j.xBc.READ_MESSAGE_HISTORY, e));
}
function ee(e) {
    let { channelId: t } = e;
    return (0, a.cf)([k.A], () => ({
        isSearchLoading: k.A.getSearchLoading(t),
        searchQuery: k.A.getSearchQuery(t),
        searchResults: k.A.getSearchResults(t),
    }));
}
function et(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: i, searchQuery: l } = ee({ channelId: e.id }),
        a = Z(e),
        d = r.useRef(null),
        s = r.useRef(new Set());
    r.useEffect(() => {
        if (null == l && null != d.current) {
            G.A.clearForumSearch(e.id), (d.current = null);
            return;
        }
        if (null == l || 0 === l.length || u) return;
        if (!a) return void G.A.clearForumSearch(e.id);
        if ((d.current === l && s.current === t) || i) return;
        let r = setTimeout(async () => {
            (d.current = l), (s.current = t);
            try {
                await G.A.searchForumPosts(e.guild_id, e.id, l, t, n);
            } catch {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, u, i, l, t, n]);
}
function en(e, t) {
    return (0, a.bG)([g.A, S.Ay, C.A], () => {
        let n = C.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let r = g.A.getActiveJoinedUnreadThreadsForParent(e, t),
            u = g.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            i = S.Ay.ackMessageId(t),
            l = 0;
        if (null == i) return l;
        for (let e in r) {
            let t = r[e],
                n = S.Ay.lastMessageId(t.channel.id);
            null != n && n > i && l++;
        }
        for (let e in u) {
            let t = u[e],
                n = S.Ay.lastMessageId(t.id);
            null != n && n > i && l++;
        }
        return l;
    });
}
function er(e) {
    let { channel: t, sortOrder: n, tagFilter: u, tagSetting: i, shouldAutomaticallyAck: l } = e,
        d = (0, a.yK)([U.A], () => U.A.getThreadIds(t.id, n, u, i)),
        o = en(t.guild_id, t.id),
        c = (0, a.bG)([U.A], () => l && (o > 0 || U.A.getCanAckThreads()), [l, o]);
    return (
        r.useEffect(() => {
            c &&
                (0, s.hS)(t, {
                    object: j.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: j.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, c]),
        d
    );
}

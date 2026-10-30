n.d(t, {
    $I: () => L,
    An: () => $,
    Ck: () => K,
    Eh: () => v,
    Hv: () => J,
    Mw: () => x,
    O3: () => V,
    S4: () => q,
    V3: () => ee,
    X5: () => Y,
    cA: () => X,
    ed: () => W,
    k6: () => P,
    kn: () => B,
    lQ: () => H,
    o7: () => Z,
    tY: () => Q,
    yz: () => D,
});
var r = n(582128),
    u = n(435558),
    i = n.n(u),
    l = n(602137),
    a = n(17928),
    d = n(73153),
    s = n(334738),
    o = n(964486),
    A = n(236285);
n(521981);
var c = n(763754),
    f = n(863005),
    g = n(970278),
    h = n(321045),
    m = n(456874),
    E = n(707539),
    _ = n(734057),
    C = n(860071),
    I = n(71393),
    T = n(576705),
    y = n(573163),
    M = n(287809),
    S = n(403362),
    R = n(935208),
    b = n(919577),
    U = n(207777);
n(256265);
var G = n(969043),
    p = n(474399),
    N = n(768953),
    w = n(767581),
    F = n(253913),
    O = n(652215),
    k = n(746080),
    j = n(37411);
function D(e, t, n, u) {
    let i = (0, a.bG)([g.A], () => g.A.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!i) return;
        let r = U.A.getThreadIds(e.id, t, n, u),
            l = p.A.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, w.yz)(e, [y.Ay]))
                .slice(0, 180)
                .map((e) => ({ threadId: e, ackMessageId: y.Ay.getTrackedAckMessageId(e) }));
        l.length > 0 &&
            d.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: l });
    }, [e.id, e.guild_id, i, n, t, u]);
}
function v(e) {
    return (0, a.bG)([g.A, _.A], () => {
        let t = i()(g.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => _.A.getChannel(e)?.hasFlag(k.lx.PINNED) === !0)
            .head();
        return _.A.getChannel(t);
    });
}
function L(e, t) {
    let n = (0, a.yK)([M.default], () => t.map((e) => M.default.getUser(e)).filter(S.Vq));
    return (
        (0, o.Ay)(() => {
            n.forEach((t) => {
                C.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.EG.DURATION_AGO,
        u = r.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
        i = (0, E.JO)(e),
        a = r.useMemo(() => (0, w.mf)(t, n), [t, n]);
    return r.useMemo(() => (t === l.T.CREATION_DATE ? (0, E.aK)(u, a) : (0, E.aK)(i, a)), [i, t, u, a]);
}
function H(e) {
    return r.useMemo(() => {
        let t = e?.reactions ?? [];
        if (0 !== t.length)
            return i().orderBy(t, [(e) => e.count + e.burst_count, (e) => e.burst_count], ["desc", "desc"])[0];
    }, [e?.reactions]);
}
function K(e) {
    let t = e?.defaultReactionEmoji,
        n = (0, a.bG)([A.Ay], () => (t?.emojiId != null ? A.Ay.getUsableCustomEmojiById(t.emojiId) : null));
    return null == t
        ? null
        : null != t.emojiId && null != n
          ? { id: t.emojiId, name: n.name, animated: n.animated }
          : null != t.emojiName
            ? { id: t.emojiId, name: t.emojiName, animated: !1 }
            : null;
}
function P(e) {
    let t = (0, a.bG)([m.A], () => m.A.getCount(e.id) ?? 0),
        n = (0, h.Mw)(t, e.id),
        r = (0, a.bG)([y.Ay], () => (0, w.yz)(e.id, [y.Ay])),
        u = (0, a.bG)([p.A], () => {
            if (!r) return null;
            let n = p.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= j.oR ? `${j.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: u };
}
function B(e) {
    let t = (0, a.bG)([M.default], () => M.default.getUser(e.ownerId)),
        n = (0, a.bG)([G.A], () => G.A.getMessage(e.id)?.firstMessage),
        u = (0, c.d8)(n?.author ?? t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && C.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: u }
    );
}
function Q(e) {
    let t = M.default.getUser(e.ownerId),
        n = G.A.getMessage(e.id)?.firstMessage,
        r = (0, c.FT)(n?.author ?? t, e);
    return { user: t, author: r };
}
function q(e) {
    return (0, a.bG)([T.A], () => T.A.can(O.xBc.MANAGE_CHANNELS, e));
}
let z = { isNew: !1, hasUnreads: !1 };
function Y(e) {
    return (0, a.cf)([I.A, y.Ay], () => {
        let t = I.A.getGuild(e.getGuildId() ?? O.dJq);
        return null == t ? z : (0, w.U1)(e, t, [y.Ay]);
    });
}
function J(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function V(e) {
    return (0, a.bG)([T.A], () => T.A.can(O.xBc.READ_MESSAGE_HISTORY, e));
}
function $(e) {
    return (0, a.bG)([T.A], () => T.A.can(O.xBc.READ_MESSAGE_HISTORY, e));
}
function X(e) {
    let { channelId: t } = e;
    return (0, a.cf)([N.A], () => ({
        isSearchLoading: N.A.getSearchLoading(t),
        searchQuery: N.A.getSearchQuery(t),
        searchResults: N.A.getSearchResults(t),
    }));
}
function Z(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: i, searchQuery: l } = X({ channelId: e.id }),
        a = V(e),
        d = r.useRef(null),
        s = r.useRef(new Set());
    r.useEffect(() => {
        if (null == l && null != d.current) {
            (b.A.clearForumSearch(e.id), (d.current = null));
            return;
        }
        if (null == l || 0 === l.length || u) return;
        if (!a) return void b.A.clearForumSearch(e.id);
        if ((d.current === l && s.current === t) || i) return;
        let r = setTimeout(async () => {
            ((d.current = l), (s.current = t));
            try {
                await b.A.searchForumPosts(e.guild_id, e.id, l, t, n);
            } catch {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, u, i, l, t, n]);
}
function W(e, t) {
    return (0, a.bG)([f.A, y.Ay, _.A], () => {
        let n = _.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let r = f.A.getActiveJoinedUnreadThreadsForParent(e, t),
            u = f.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            i = y.Ay.ackMessageId(t),
            l = 0;
        if (null == i) return l;
        for (let e in r) {
            let t = r[e],
                n = y.Ay.lastMessageId(t.channel.id);
            null != n && n > i && l++;
        }
        for (let e in u) {
            let t = u[e],
                n = y.Ay.lastMessageId(t.id);
            null != n && n > i && l++;
        }
        return l;
    });
}
function ee(e) {
    let { channel: t, sortOrder: n, tagFilter: u, tagSetting: i, shouldAutomaticallyAck: l } = e,
        d = (0, a.yK)([U.A], () => U.A.getThreadIds(t.id, n, u, i)),
        o = W(t.guild_id, t.id),
        A = (0, a.bG)([U.A], () => l && (o > 0 || U.A.getCanAckThreads()), [l, o]);
    return (
        r.useEffect(() => {
            A &&
                (0, s.hS)(t, {
                    object: O.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: O.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, A]),
        d
    );
}

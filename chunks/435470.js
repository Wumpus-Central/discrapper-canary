var r = n(582128),
    u = n(435558),
    i = n.n(u),
    l = n(602137),
    a = n(855986),
    d = n(73153),
    s = n(334738),
    o = n(964486),
    A = n(121681);
n(354777);
var c = n(763754),
    f = n(863005),
    g = n(970278),
    h = n(321045),
    m = n(456874),
    E = n(707539),
    _ = n(734057),
    C = n(949744),
    I = n(71393),
    M = n(576705),
    S = n(218461),
    T = n(287809),
    y = n(403362),
    R = n(811091),
    b = n(919577),
    U = n(207777);
n(256265);
var G = n(969043),
    N = n(474399),
    p = n(768953),
    w = n(767581),
    F = n(253913),
    k = n(652215),
    O = n(746080);
n(37411);
let j = { isNew: !1, hasUnreads: !1 };
function D(e) {
    return (0, a.bG)([M.A], () => M.A.can(k.xBc.READ_MESSAGE_HISTORY, e));
}
function v(e) {
    let { channelId: t } = e;
    return (0, a.cf)([p.A], () => ({
        isSearchLoading: p.A.getSearchLoading(t),
        searchQuery: p.A.getSearchQuery(t),
        searchResults: p.A.getSearchResults(t),
    }));
}
function L(e, t) {
    return (0, a.bG)([f.A, S.Ay, _.A], () => {
        let n = _.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let r = f.A.getActiveJoinedUnreadThreadsForParent(e, t),
            u = f.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
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
n.d(
    t,
    {},
    {
        $I: function (e, t) {
            let n = (0, a.yK)([T.default], () => t.map((e) => T.default.getUser(e)).filter(y.Vq));
            return (
                (0, o.Ay)(() => {
                    n.forEach((t) => {
                        C.A.requestMember(e.guild_id, t.id);
                    });
                }),
                n
            );
        },
        An: function (e) {
            return (0, a.bG)([M.A], () => M.A.can(k.xBc.READ_MESSAGE_HISTORY, e));
        },
        Ck: function (e) {
            let t = e?.defaultReactionEmoji,
                n = (0, a.bG)([A.Ay], () => (t?.emojiId != null ? A.Ay.getUsableCustomEmojiById(t.emojiId) : null));
            return null == t
                ? null
                : null != t.emojiId && null != n
                  ? { id: t.emojiId, name: n.name, animated: n.animated }
                  : null != t.emojiName
                    ? { id: t.emojiId, name: t.emojiName, animated: !1 }
                    : null;
        },
        Eh: function (e) {
            return (0, a.bG)([g.A, _.A], () => {
                let t = i()(g.A.getThreadsForParent(e.guild_id, e.parent_id))
                    .keys()
                    .filter((e) => _.A.getChannel(e)?.hasFlag(O.lx.PINNED) === !0)
                    .head();
                return _.A.getChannel(t);
            });
        },
        Hv: function (e) {
            return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
        },
        Mw: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.EG.DURATION_AGO,
                u = r.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
                i = (0, E.JO)(e),
                a = r.useMemo(() => (0, w.mf)(t, n), [t, n]);
            return r.useMemo(() => (t === l.T.CREATION_DATE ? (0, E.aK)(u, a) : (0, E.aK)(i, a)), [i, t, u, a]);
        },
        O3: D,
        S4: function (e) {
            return (0, a.bG)([M.A], () => M.A.can(k.xBc.MANAGE_CHANNELS, e));
        },
        V3: function (e) {
            let { channel: t, sortOrder: n, tagFilter: u, tagSetting: i, shouldAutomaticallyAck: l } = e,
                d = (0, a.yK)([U.A], () => U.A.getThreadIds(t.id, n, u, i)),
                o = L(t.guild_id, t.id),
                A = (0, a.bG)([U.A], () => l && (o > 0 || U.A.getCanAckThreads()), [l, o]);
            return (
                r.useEffect(() => {
                    A && (0, s.hS)(t, { object: k.ZSU.ACK_FORUM_ACTIVE_THREADS, objectType: k.btD.ACK_AUTOMATIC });
                }, [t, A]),
                d
            );
        },
        X5: function (e) {
            return (0, a.cf)([I.A, S.Ay], () => {
                let t = I.A.getGuild(e.getGuildId() ?? "");
                return null == t ? j : (0, w.U1)(e, t, [S.Ay]);
            });
        },
        cA: v,
        ed: L,
        k6: function (e) {
            let t = (0, a.bG)([m.A], () => m.A.getCount(e.id) ?? 0),
                n = (0, h.Mw)(t, e.id),
                r = (0, a.bG)([S.Ay], () => (0, w.yz)(e.id, [S.Ay])),
                u = (0, a.bG)([N.A], () => {
                    if (!r) return null;
                    let n = N.A.getCount(e.id);
                    if (null == n || !(n > 0)) return "1+";
                    {
                        let e = Math.min(n, t);
                        return e >= 25 ? "25+" : e;
                    }
                });
            return {
                messageCount: t,
                isMaxMessageCount: null != t && `${t}` !== n,
                messageCountText: n,
                unreadCount: u,
            };
        },
        kn: function (e) {
            let t = (0, a.bG)([T.default], () => T.default.getUser(e.ownerId)),
                n = (0, a.bG)([G.A], () => G.A.getMessage(e.id)?.firstMessage),
                u = (0, c.d8)(n?.author ?? t, e);
            return (
                r.useEffect(() => {
                    null != e.ownerId && C.A.requestMember(e.guild_id, e.ownerId);
                }, [e.guild_id, e.ownerId]),
                { user: t, author: u }
            );
        },
        lQ: function (e) {
            return r.useMemo(() => {
                let t = e?.reactions ?? [];
                if (0 !== t.length)
                    return i().orderBy(t, [(e) => e.count + e.burst_count, (e) => e.burst_count], ["desc", "desc"])[0];
            }, [e?.reactions]);
        },
        o7: function (e, t, n) {
            let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                { isSearchLoading: i, searchQuery: l } = v({ channelId: e.id }),
                a = D(e),
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
        },
        tY: function (e) {
            let t = T.default.getUser(e.ownerId),
                n = G.A.getMessage(e.id)?.firstMessage,
                r = (0, c.FT)(n?.author ?? t, e);
            return { user: t, author: r };
        },
        yz: function (e, t, n, u) {
            let i = (0, a.bG)([g.A], () => g.A.hasLoaded(e.guild_id));
            r.useEffect(() => {
                if (!i) return;
                let r = U.A.getThreadIds(e.id, t, n, u),
                    l = N.A.getThreadIdsMissingCounts(e.guild_id, r)
                        .filter((e) => (0, w.yz)(e, [S.Ay]))
                        .slice(0, 180)
                        .map((e) => ({ threadId: e, ackMessageId: S.Ay.getTrackedAckMessageId(e) }));
                l.length > 0 &&
                    d.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: l });
            }, [e.id, e.guild_id, i, n, t, u]);
        },
    },
);

n.d(t, {
    $I: () => B,
    An: () => eu,
    Ck: () => z,
    Eh: () => H,
    Hv: () => ee,
    Mw: () => Y,
    O3: () => er,
    OT: () => et,
    S4: () => X,
    V3: () => ed,
    X5: () => W,
    cA: () => ei,
    ed: () => ea,
    gk: () => $,
    k6: () => Q,
    kn: () => V,
    kt: () => P,
    lQ: () => q,
    o7: () => el,
    tY: () => J,
    yz: () => L,
    zt: () => en,
});
var r = n(64700),
    u = n(735438),
    i = n.n(u),
    l = n(602137),
    a = n(17928),
    d = n(228366),
    o = n(334738),
    s = n(964486),
    A = n(159273),
    c = n(465364),
    f = n(763754),
    g = n(376708),
    h = n(695633),
    m = n(970278),
    E = n(321045),
    _ = n(456874),
    M = n(707539),
    T = n(734057),
    C = n(860071),
    y = n(71393),
    I = n(576705),
    S = n(222823),
    R = n(287809),
    b = n(403362),
    p = n(935208),
    G = n(919577),
    U = n(207777),
    N = n(256265),
    w = n(969043),
    k = n(474399),
    O = n(768953),
    F = n(767581),
    j = n(253913),
    x = n(652215),
    D = n(746080),
    v = n(37411);
function L(e, t, n, u) {
    let i = (0, a.bG)([m.A], () => m.A.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!i) return;
        let r = U.A.getThreadIds(e.id, t, n, u),
            l = k.A.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, F.yz)(e, [S.Ay]))
                .slice(0, 180)
                .map((e) => ({ threadId: e, ackMessageId: S.Ay.getTrackedAckMessageId(e) }));
        l.length > 0 &&
            d.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: l });
    }, [e.id, e.guild_id, i, n, t, u]);
}
function H(e) {
    return (0, a.bG)([m.A, T.A], () => {
        let t = i()(m.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => T.A.getChannel(e)?.hasFlag(D.lx.PINNED) === !0)
            .head();
        return T.A.getChannel(t);
    });
}
let K = [];
function P(e) {
    let t,
        n =
            ((t = e?.parent_id),
            (0, a.cf)([T.A], () => {
                let e = T.A.getChannel(t);
                return (e?.availableTags ?? []).reduce((e, t) => ({ ...e, [t.id]: t }), {});
            }, [t]));
    return r.useMemo(() => {
        let t = e?.appliedTags?.map((e) => n[e])?.filter(b.Vq) ?? K;
        return e?.isModeratorReportChannel() ? (0, g.Yj)(t) : t;
    }, [n, e]);
}
function B(e, t) {
    let n = (0, a.yK)([R.default], () => t.map((e) => R.default.getUser(e)).filter(b.Vq));
    return (
        (0, s.Ay)(() => {
            n.forEach((t) => {
                C.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function Y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j.EG.DURATION_AGO,
        u = r.useMemo(() => p.default.extractTimestamp(e.id), [e.id]),
        i = (0, M.JO)(e),
        a = r.useMemo(() => (0, F.mf)(t, n), [t, n]);
    return r.useMemo(() => (t === l.T.CREATION_DATE ? (0, M.aK)(u, a) : (0, M.aK)(i, a)), [i, t, u, a]);
}
function q(e) {
    return r.useMemo(() => i().maxBy(e?.reactions ?? [], (e) => Math.max(e.burst_count, e.count)), [e?.reactions]);
}
function z(e) {
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
function Q(e) {
    let t = (0, a.bG)([_.A], () => _.A.getCount(e.id) ?? 0),
        n = (0, E.Mw)(t, e.id),
        r = (0, a.bG)([S.Ay], () => (0, F.yz)(e.id, [S.Ay])),
        u = (0, a.bG)([k.A], () => {
            if (!r) return null;
            let n = k.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= v.oR ? `${v.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: u };
}
function V(e) {
    let t = (0, a.bG)([R.default], () => R.default.getUser(e.ownerId)),
        n = (0, a.bG)([w.A], () => w.A.getMessage(e.id)?.firstMessage),
        u = (0, f.d8)(n?.author ?? t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && C.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: u }
    );
}
function J(e) {
    let t = R.default.getUser(e.ownerId),
        n = w.A.getMessage(e.id)?.firstMessage,
        r = (0, f.FT)(n?.author ?? t, e);
    return { user: t, author: r };
}
function $(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: u = !0, hasUnreads: i = !0 } = e,
        l = i ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: a, content: d } = r.useMemo(
            () =>
                t?.content != null && "" !== t.content
                    ? (0, c.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: u,
                          allowHeading: !0,
                          allowList: !0,
                          textColor: l,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, u, l],
        ),
        o = (0, N.Ky)(t, a),
        s = (0, N.L_)(t, a);
    return { hasSpoilerEmbeds: a, content: d, firstMedia: o, firstMediaIsEmbed: s };
}
function X(e) {
    return (0, a.bG)([I.A], () => I.A.can(x.xBc.MANAGE_CHANNELS, e));
}
let Z = { isNew: !1, hasUnreads: !1 };
function W(e) {
    return (0, a.cf)([y.A, S.Ay], () => {
        let t = y.A.getGuild(e.getGuildId() ?? x.dJq);
        return null == t ? Z : (0, F.U1)(e, t, [S.Ay]);
    });
}
function ee(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function et(e) {
    let t = (0, a.bG)([I.A], () => I.A.can(x.xBc.MANAGE_THREADS, e));
    return r.useMemo(() => {
        let n = [...(e?.availableTags ?? [])];
        return t || (n = n.filter((e) => !e.moderated)), n;
    }, [t, e?.availableTags]);
}
function en(e, t) {
    let n = et((0, a.bG)([T.A], () => T.A.getChannel(e?.parent_id), [e]));
    return r.useMemo(() => {
        let r = t.filter((e) => n.includes(e));
        return e?.isModeratorReportChannel() ? (0, g.Yj)(r) : r;
    }, [t, n, e]);
}
function er(e) {
    return (0, a.bG)([I.A], () => I.A.can(x.xBc.READ_MESSAGE_HISTORY, e));
}
function eu(e) {
    return (0, a.bG)([I.A], () => I.A.can(x.xBc.READ_MESSAGE_HISTORY, e));
}
function ei(e) {
    let { channelId: t } = e;
    return (0, a.cf)([O.A], () => ({
        isSearchLoading: O.A.getSearchLoading(t),
        searchQuery: O.A.getSearchQuery(t),
        searchResults: O.A.getSearchResults(t),
    }));
}
function el(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: i, searchQuery: l } = ei({ channelId: e.id }),
        a = er(e),
        d = r.useRef(null),
        o = r.useRef(new Set());
    r.useEffect(() => {
        if (null == l && null != d.current) {
            G.A.clearForumSearch(e.id), (d.current = null);
            return;
        }
        if (null == l || 0 === l.length || u) return;
        if (!a) return void G.A.clearForumSearch(e.id);
        if ((d.current === l && o.current === t) || i) return;
        let r = setTimeout(async () => {
            (d.current = l), (o.current = t);
            try {
                await G.A.searchForumPosts(e.guild_id, e.id, l, t, n);
            } catch {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, u, i, l, t, n]);
}
function ea(e, t) {
    return (0, a.bG)([h.A, S.Ay, T.A], () => {
        let n = T.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let r = h.A.getActiveJoinedUnreadThreadsForParent(e, t),
            u = h.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
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
function ed(e) {
    let { channel: t, sortOrder: n, tagFilter: u, tagSetting: i, shouldAutomaticallyAck: l } = e,
        d = (0, a.yK)([U.A], () => U.A.getThreadIds(t.id, n, u, i)),
        s = ea(t.guild_id, t.id),
        A = (0, a.bG)([U.A], () => l && (s > 0 || U.A.getCanAckThreads()), [l, s]);
    return (
        r.useEffect(() => {
            A &&
                (0, o.hS)(t, {
                    object: x.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: x.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, A]),
        d
    );
}

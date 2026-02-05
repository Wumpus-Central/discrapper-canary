n.d(t, {
    $I: () => Y,
    An: () => ei,
    Ck: () => Q,
    Eh: () => K,
    Hv: () => et,
    Mw: () => q,
    O3: () => eu,
    OT: () => en,
    S4: () => Z,
    V3: () => eo,
    X5: () => ee,
    cA: () => el,
    ed: () => ed,
    gk: () => X,
    k6: () => V,
    kn: () => J,
    kt: () => B,
    lQ: () => z,
    o7: () => ea,
    tY: () => $,
    yz: () => H,
    zt: () => er,
});
var r = n(64700),
    u = n(735438),
    i = n.n(u),
    l = n(602137),
    a = n(311907),
    d = n(73153),
    o = n(334738),
    s = n(964486),
    A = n(508675),
    c = n(352505),
    f = n(465364),
    g = n(763754),
    h = n(376708),
    m = n(863005),
    E = n(970278),
    _ = n(321045),
    M = n(456874),
    T = n(707539),
    C = n(734057),
    y = n(256587),
    I = n(71393),
    S = n(576705),
    b = n(222823),
    R = n(287809),
    p = n(403362),
    G = n(661191),
    U = n(919577),
    N = n(207777),
    w = n(256265),
    k = n(969043),
    F = n(474399),
    O = n(768953),
    j = n(767581),
    x = n(253913),
    D = n(652215),
    v = n(746080),
    L = n(37411);
function H(e, t, n, u) {
    let i = (0, a.bG)([E.A], () => E.A.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!i) return;
        let r = N.A.getThreadIds(e.id, t, n, u),
            l = F.A.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, j.yz)(e, [b.Ay]))
                .slice(0, 180)
                .map((e) => ({ threadId: e, ackMessageId: b.Ay.getTrackedAckMessageId(e) }));
        l.length > 0 &&
            d.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: l });
    }, [e.id, e.guild_id, i, n, t, u]);
}
function K(e) {
    return (0, a.bG)([E.A, C.A], () => {
        let t = i()(E.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => C.A.getChannel(e)?.hasFlag(v.lx.PINNED) === !0)
            .head();
        return C.A.getChannel(t);
    });
}
let P = [];
function B(e) {
    let t,
        n =
            ((t = e?.parent_id),
            (0, a.cf)([C.A], () => {
                let e = C.A.getChannel(t);
                return (e?.availableTags ?? []).reduce((e, t) => ({ ...e, [t.id]: t }), {});
            }, [t]));
    return r.useMemo(() => {
        let t = e?.appliedTags?.map((e) => n[e])?.filter(p.Vq) ?? P;
        return e?.isModeratorReportChannel() ? (0, h.Yj)(t) : t;
    }, [n, e]);
}
function Y(e, t) {
    let n = (0, a.yK)([R.default], () => t.map((e) => R.default.getUser(e)).filter(p.Vq));
    return (
        (0, s.Ay)(() => {
            n.forEach((t) => {
                y.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x.EG.DURATION_AGO,
        u = r.useMemo(() => G.default.extractTimestamp(e.id), [e.id]),
        i = (0, T.JO)(e),
        a = r.useMemo(() => (0, j.mf)(t, n), [t, n]);
    return r.useMemo(() => (t === l.T.CREATION_DATE ? (0, T.aK)(u, a) : (0, T.aK)(i, a)), [i, t, u, a]);
}
function z(e) {
    return r.useMemo(() => i().maxBy(e?.reactions ?? [], (e) => Math.max(e.burst_count, e.count)), [e?.reactions]);
}
function Q(e) {
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
function V(e) {
    let t = (0, a.bG)([M.A], () => M.A.getCount(e.id) ?? 0),
        n = (0, _.Mw)(t, e.id),
        r = (0, a.bG)([b.Ay], () => (0, j.yz)(e.id, [b.Ay])),
        u = (0, a.bG)([F.A], () => {
            if (!r) return null;
            let n = F.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= L.oR ? `${L.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: u };
}
function J(e) {
    let t = (0, a.bG)([R.default], () => R.default.getUser(e.ownerId)),
        n = (0, a.bG)([k.A], () => k.A.getMessage(e.id)?.firstMessage),
        u = (0, g.d8)(n?.author ?? t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && y.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: u }
    );
}
function $(e) {
    let t = R.default.getUser(e.ownerId),
        n = k.A.getMessage(e.id)?.firstMessage,
        r = (0, g.FT)(n?.author ?? t, e);
    return { user: t, author: r };
}
function X(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: u = !0, hasUnreads: i = !0 } = e,
        l = c.m.useExperiment({ location: "modules/forums/ForumHooks" }).enabled,
        a = i ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: d, content: o } = r.useMemo(
            () =>
                t?.content != null && "" !== t.content
                    ? (0, f.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: u,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: l,
                          textColor: a,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, u, l, a],
        ),
        s = (0, w.Ky)(t, d),
        A = (0, w.L_)(t, d);
    return { hasSpoilerEmbeds: d, content: o, firstMedia: s, firstMediaIsEmbed: A };
}
function Z(e) {
    return (0, a.bG)([S.A], () => S.A.can(D.xBc.MANAGE_CHANNELS, e));
}
let W = { isNew: !1, hasUnreads: !1 };
function ee(e) {
    return (0, a.cf)([I.A, b.Ay], () => {
        let t = I.A.getGuild(e.getGuildId() ?? D.dJq);
        return null == t ? W : (0, j.U1)(e, t, [b.Ay]);
    });
}
function et(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function en(e) {
    let t = (0, a.bG)([S.A], () => S.A.can(D.xBc.MANAGE_THREADS, e));
    return r.useMemo(() => {
        let n = [...(e?.availableTags ?? [])];
        return t || (n = n.filter((e) => !e.moderated)), n;
    }, [t, e?.availableTags]);
}
function er(e, t) {
    let n = en((0, a.bG)([C.A], () => C.A.getChannel(e?.parent_id), [e]));
    return r.useMemo(() => {
        let r = t.filter((e) => n.includes(e));
        return e?.isModeratorReportChannel() ? (0, h.Yj)(r) : r;
    }, [t, n, e]);
}
function eu(e) {
    return (0, a.bG)([S.A], () => S.A.can(D.xBc.READ_MESSAGE_HISTORY, e));
}
function ei(e) {
    return (0, a.bG)([S.A], () => S.A.can(D.xBc.READ_MESSAGE_HISTORY, e));
}
function el(e) {
    let { channelId: t } = e;
    return (0, a.cf)([O.A], () => ({
        isSearchLoading: O.A.getSearchLoading(t),
        searchQuery: O.A.getSearchQuery(t),
        searchResults: O.A.getSearchResults(t),
    }));
}
function ea(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: i, searchQuery: l } = el({ channelId: e.id }),
        a = eu(e),
        d = r.useRef(null),
        o = r.useRef(new Set());
    r.useEffect(() => {
        if (null == l && null != d.current) {
            U.A.clearForumSearch(e.id), (d.current = null);
            return;
        }
        if (null == l || 0 === l.length || u) return;
        if (!a) return void U.A.clearForumSearch(e.id);
        if ((d.current === l && o.current === t) || i) return;
        let r = setTimeout(async () => {
            (d.current = l), (o.current = t);
            try {
                await U.A.searchForumPosts(e.guild_id, e.id, l, t, n);
            } catch {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, u, i, l, t, n]);
}
function ed(e, t) {
    return (0, a.bG)([m.A, b.Ay, C.A], () => {
        let n = C.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let r = m.A.getActiveJoinedUnreadThreadsForParent(e, t),
            u = m.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            i = b.Ay.ackMessageId(t),
            l = 0;
        if (null == i) return l;
        for (let e in r) {
            let t = r[e],
                n = b.Ay.lastMessageId(t.channel.id);
            null != n && n > i && l++;
        }
        for (let e in u) {
            let t = u[e],
                n = b.Ay.lastMessageId(t.id);
            null != n && n > i && l++;
        }
        return l;
    });
}
function eo(e) {
    let { channel: t, sortOrder: n, tagFilter: u, tagSetting: i, shouldAutomaticallyAck: l } = e,
        d = (0, a.yK)([N.A], () => N.A.getThreadIds(t.id, n, u, i)),
        s = ed(t.guild_id, t.id),
        A = (0, a.bG)([N.A], () => l && (s > 0 || N.A.getCanAckThreads()), [l, s]);
    return (
        r.useEffect(() => {
            A &&
                (0, o.hS)(t, {
                    object: D.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: D.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, A]),
        d
    );
}

"use strict";
n.d(t, {
    $I: () => K,
    An: () => eo,
    Ck: () => q,
    Eh: () => H,
    Hv: () => er,
    Mw: () => z,
    O3: () => ea,
    OT: () => ei,
    S4: () => ee,
    V3: () => e_,
    X5: () => en,
    cA: () => el,
    ed: () => ed,
    gk: () => J,
    k6: () => Z,
    kn: () => X,
    kt: () => W,
    lQ: () => $,
    o7: () => ec,
    tY: () => Q,
    yz: () => B,
    zt: () => es,
});
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(602137),
    o = n(311907),
    l = n(73153),
    u = n(334738),
    c = n(964486),
    d = n(508675),
    _ = n(352505),
    f = n(465364),
    p = n(763754),
    h = n(376708),
    m = n(863005),
    E = n(970278),
    g = n(321045),
    A = n(456874),
    I = n(707539),
    T = n(734057),
    S = n(256587),
    y = n(71393),
    v = n(576705),
    N = n(222823),
    C = n(287809),
    b = n(403362),
    R = n(661191),
    O = n(919577),
    D = n(207777),
    L = n(256265),
    w = n(969043),
    x = n(474399),
    M = n(768953),
    P = n(767581),
    k = n(253913),
    U = n(652215),
    G = n(746080),
    F = n(37411);
let V = 180;
function B(e, t, n, i) {
    let s = (0, o.bG)([E.A], () => E.A.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!s) return;
        let r = D.A.getThreadIds(e.id, t, n, i),
            a = x.A.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, P.yz)(e, [N.Ay]))
                .slice(0, V)
                .map((e) => ({ threadId: e, ackMessageId: N.Ay.getTrackedAckMessageId(e) }));
        a.length > 0 &&
            l.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: a });
    }, [e.id, e.guild_id, s, n, t, i]);
}
function H(e) {
    return (0, o.bG)([E.A, T.A], () => {
        let t = s()(E.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => T.A.getChannel(e)?.hasFlag(G.lx.PINNED) === !0)
            .head();
        return T.A.getChannel(t);
    });
}
function j(e) {
    let t = e?.parent_id;
    return (0, o.cf)([T.A], () => {
        let e = T.A.getChannel(t);
        return (e?.availableTags ?? []).reduce((e, t) => ({ ...e, [t.id]: t }), {});
    }, [t]);
}
let Y = [];
function W(e) {
    let t = j(e);
    return r.useMemo(() => {
        let n = e?.appliedTags?.map((e) => t[e])?.filter(b.Vq) ?? Y;
        return e?.isModeratorReportChannel() ? (0, h.Yj)(n) : n;
    }, [t, e]);
}
function K(e, t) {
    let n = (0, o.yK)([C.default], () => t.map((e) => C.default.getUser(e)).filter(b.Vq));
    return (
        (0, c.Ay)(() => {
            n.forEach((t) => {
                S.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k.EG.DURATION_AGO,
        i = r.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
        s = (0, I.JO)(e),
        o = r.useMemo(() => (0, P.mf)(t, n), [t, n]);
    return r.useMemo(() => (t === a.T.CREATION_DATE ? (0, I.aK)(i, o) : (0, I.aK)(s, o)), [s, t, i, o]);
}
function $(e) {
    return r.useMemo(() => s().maxBy(e?.reactions ?? [], (e) => Math.max(e.burst_count, e.count)), [e?.reactions]);
}
function q(e) {
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
function Z(e) {
    let t = (0, o.bG)([A.A], () => A.A.getCount(e.id) ?? 0),
        n = (0, g.Mw)(t, e.id),
        r = (0, o.bG)([N.Ay], () => (0, P.yz)(e.id, [N.Ay])),
        i = (0, o.bG)([x.A], () => {
            if (!r) return null;
            let n = x.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= F.oR ? `${F.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: i };
}
function X(e) {
    let t = (0, o.bG)([C.default], () => C.default.getUser(e.ownerId)),
        n = (0, o.bG)([w.A], () => w.A.getMessage(e.id)?.firstMessage),
        i = (0, p.d8)(n?.author ?? t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && S.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: i }
    );
}
function Q(e) {
    let t = C.default.getUser(e.ownerId),
        n = w.A.getMessage(e.id)?.firstMessage,
        r = (0, p.FT)(n?.author ?? t, e);
    return { user: t, author: r };
}
function J(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: i = !0, hasUnreads: s = !0 } = e,
        a = _.m.useExperiment({ location: "modules/forums/ForumHooks" }).enabled,
        o = s ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: l, content: u } = r.useMemo(
            () =>
                t?.content != null && "" !== t.content
                    ? (0, f.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: i,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: a,
                          textColor: o,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, i, a, o],
        ),
        c = (0, L.Ky)(t, l),
        d = (0, L.L_)(t, l);
    return { hasSpoilerEmbeds: l, content: u, firstMedia: c, firstMediaIsEmbed: d };
}
function ee(e) {
    return (0, o.bG)([v.A], () => v.A.can(U.xBc.MANAGE_CHANNELS, e));
}
let et = { isNew: !1, hasUnreads: !1 };
function en(e) {
    return (0, o.cf)([y.A, N.Ay], () => {
        let t = y.A.getGuild(e.getGuildId() ?? U.dJq);
        return null == t ? et : (0, P.U1)(e, t, [N.Ay]);
    });
}
function er(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function ei(e) {
    let t = (0, o.bG)([v.A], () => v.A.can(U.xBc.MANAGE_THREADS, e));
    return r.useMemo(() => {
        let n = [...(e?.availableTags ?? [])];
        return t || (n = n.filter((e) => !e.moderated)), n;
    }, [t, e?.availableTags]);
}
function es(e, t) {
    let n = ei((0, o.bG)([T.A], () => T.A.getChannel(e?.parent_id), [e]));
    return r.useMemo(() => {
        let r = t.filter((e) => n.includes(e));
        return e?.isModeratorReportChannel() ? (0, h.Yj)(r) : r;
    }, [t, n, e]);
}
function ea(e) {
    return (0, o.bG)([v.A], () => v.A.can(U.xBc.READ_MESSAGE_HISTORY, e));
}
function eo(e) {
    return (0, o.bG)([v.A], () => v.A.can(U.xBc.READ_MESSAGE_HISTORY, e));
}
function el(e) {
    let { channelId: t } = e;
    return (0, o.cf)([M.A], () => ({
        isSearchLoading: M.A.getSearchLoading(t),
        searchQuery: M.A.getSearchQuery(t),
        searchResults: M.A.getSearchResults(t),
    }));
}
let eu = 350;
function ec(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: s, searchQuery: a } = el({ channelId: e.id }),
        o = ea(e),
        l = r.useRef(null),
        u = r.useRef(new Set());
    r.useEffect(() => {
        if (null == a && null != l.current) {
            O.A.clearForumSearch(e.id), (l.current = null);
            return;
        }
        if (null == a || 0 === a.length || i) return;
        if (!o) return void O.A.clearForumSearch(e.id);
        if ((l.current === a && u.current === t) || s) return;
        let r = setTimeout(async () => {
            (l.current = a), (u.current = t);
            try {
                await O.A.searchForumPosts(e.guild_id, e.id, a, t, n);
            } catch {}
        }, eu);
        return () => clearTimeout(r);
    }, [o, e.guild_id, e.id, i, s, a, t, n]);
}
function ed(e, t) {
    return (0, o.bG)([m.A, N.Ay, T.A], () => {
        let n = T.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let r = m.A.getActiveJoinedUnreadThreadsForParent(e, t),
            i = m.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            s = N.Ay.ackMessageId(t),
            a = 0;
        if (null == s) return a;
        for (let e in r) {
            let t = r[e],
                n = N.Ay.lastMessageId(t.channel.id);
            null != n && n > s && a++;
        }
        for (let e in i) {
            let t = i[e],
                n = N.Ay.lastMessageId(t.id);
            null != n && n > s && a++;
        }
        return a;
    });
}
function e_(e) {
    let { channel: t, sortOrder: n, tagFilter: i, tagSetting: s, shouldAutomaticallyAck: a } = e,
        l = (0, o.yK)([D.A], () => D.A.getThreadIds(t.id, n, i, s)),
        c = ed(t.guild_id, t.id),
        d = (0, o.bG)([D.A], () => a && (c > 0 || D.A.getCanAckThreads()), [a, c]);
    return (
        r.useEffect(() => {
            d &&
                (0, u.hS)(t, {
                    object: U.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: U.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, d]),
        l
    );
}

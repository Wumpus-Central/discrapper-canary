"use strict";
n.d(t, {
    $I: () => W,
    An: () => ea,
    Ck: () => z,
    Eh: () => B,
    Hv: () => en,
    Mw: () => K,
    O3: () => es,
    OT: () => er,
    S4: () => J,
    V3: () => ed,
    X5: () => et,
    cA: () => eo,
    ed: () => ec,
    gk: () => Q,
    k6: () => q,
    kn: () => Z,
    kt: () => Y,
    lQ: () => $,
    o7: () => eu,
    tY: () => X,
    yz: () => V,
    zt: () => ei,
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
    _ = n(465364),
    f = n(763754),
    p = n(376708),
    h = n(863005),
    m = n(970278),
    E = n(321045),
    g = n(456874),
    A = n(707539),
    I = n(734057),
    T = n(256587),
    S = n(71393),
    y = n(576705),
    v = n(222823),
    N = n(287809),
    C = n(403362),
    R = n(661191),
    O = n(919577),
    b = n(207777),
    D = n(256265),
    L = n(969043),
    w = n(474399),
    M = n(768953),
    x = n(767581),
    P = n(253913),
    k = n(652215),
    U = n(746080),
    G = n(37411);
let F = 180;
function V(e, t, n, i) {
    let s = (0, o.bG)([m.A], () => m.A.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!s) return;
        let r = b.A.getThreadIds(e.id, t, n, i),
            a = w.A.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, x.yz)(e, [v.Ay]))
                .slice(0, F)
                .map((e) => ({ threadId: e, ackMessageId: v.Ay.getTrackedAckMessageId(e) }));
        a.length > 0 &&
            l.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: a });
    }, [e.id, e.guild_id, s, n, t, i]);
}
function B(e) {
    return (0, o.bG)([m.A, I.A], () => {
        let t = s()(m.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => I.A.getChannel(e)?.hasFlag(U.lx.PINNED) === !0)
            .head();
        return I.A.getChannel(t);
    });
}
function H(e) {
    let t = e?.parent_id;
    return (0, o.cf)([I.A], () => {
        let e = I.A.getChannel(t);
        return (e?.availableTags ?? []).reduce((e, t) => ({ ...e, [t.id]: t }), {});
    }, [t]);
}
let j = [];
function Y(e) {
    let t = H(e);
    return r.useMemo(() => {
        let n = e?.appliedTags?.map((e) => t[e])?.filter(C.Vq) ?? j;
        return e?.isModeratorReportChannel() ? (0, p.Yj)(n) : n;
    }, [t, e]);
}
function W(e, t) {
    let n = (0, o.yK)([N.default], () => t.map((e) => N.default.getUser(e)).filter(C.Vq));
    return (
        (0, c.Ay)(() => {
            n.forEach((t) => {
                T.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P.EG.DURATION_AGO,
        i = r.useMemo(() => R.default.extractTimestamp(e.id), [e.id]),
        s = (0, A.JO)(e),
        o = r.useMemo(() => (0, x.mf)(t, n), [t, n]);
    return r.useMemo(() => (t === a.T.CREATION_DATE ? (0, A.aK)(i, o) : (0, A.aK)(s, o)), [s, t, i, o]);
}
function $(e) {
    return r.useMemo(() => s().maxBy(e?.reactions ?? [], (e) => Math.max(e.burst_count, e.count)), [e?.reactions]);
}
function z(e) {
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
function q(e) {
    let t = (0, o.bG)([g.A], () => g.A.getCount(e.id) ?? 0),
        n = (0, E.Mw)(t, e.id),
        r = (0, o.bG)([v.Ay], () => (0, x.yz)(e.id, [v.Ay])),
        i = (0, o.bG)([w.A], () => {
            if (!r) return null;
            let n = w.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= G.oR ? `${G.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: i };
}
function Z(e) {
    let t = (0, o.bG)([N.default], () => N.default.getUser(e.ownerId)),
        n = (0, o.bG)([L.A], () => L.A.getMessage(e.id)?.firstMessage),
        i = (0, f.d8)(n?.author ?? t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && T.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: i }
    );
}
function X(e) {
    let t = N.default.getUser(e.ownerId),
        n = L.A.getMessage(e.id)?.firstMessage,
        r = (0, f.FT)(n?.author ?? t, e);
    return { user: t, author: r };
}
function Q(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: i = !0, hasUnreads: s = !0 } = e,
        a = s ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: o, content: l } = r.useMemo(
            () =>
                t?.content != null && "" !== t.content
                    ? (0, _.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: i,
                          allowHeading: !0,
                          allowList: !0,
                          textColor: a,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, i, a],
        ),
        u = (0, D.Ky)(t, o),
        c = (0, D.L_)(t, o);
    return { hasSpoilerEmbeds: o, content: l, firstMedia: u, firstMediaIsEmbed: c };
}
function J(e) {
    return (0, o.bG)([y.A], () => y.A.can(k.xBc.MANAGE_CHANNELS, e));
}
let ee = { isNew: !1, hasUnreads: !1 };
function et(e) {
    return (0, o.cf)([S.A, v.Ay], () => {
        let t = S.A.getGuild(e.getGuildId() ?? k.dJq);
        return null == t ? ee : (0, x.U1)(e, t, [v.Ay]);
    });
}
function en(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function er(e) {
    let t = (0, o.bG)([y.A], () => y.A.can(k.xBc.MANAGE_THREADS, e));
    return r.useMemo(() => {
        let n = [...(e?.availableTags ?? [])];
        return t || (n = n.filter((e) => !e.moderated)), n;
    }, [t, e?.availableTags]);
}
function ei(e, t) {
    let n = er((0, o.bG)([I.A], () => I.A.getChannel(e?.parent_id), [e]));
    return r.useMemo(() => {
        let r = t.filter((e) => n.includes(e));
        return e?.isModeratorReportChannel() ? (0, p.Yj)(r) : r;
    }, [t, n, e]);
}
function es(e) {
    return (0, o.bG)([y.A], () => y.A.can(k.xBc.READ_MESSAGE_HISTORY, e));
}
function ea(e) {
    return (0, o.bG)([y.A], () => y.A.can(k.xBc.READ_MESSAGE_HISTORY, e));
}
function eo(e) {
    let { channelId: t } = e;
    return (0, o.cf)([M.A], () => ({
        isSearchLoading: M.A.getSearchLoading(t),
        searchQuery: M.A.getSearchQuery(t),
        searchResults: M.A.getSearchResults(t),
    }));
}
let el = 350;
function eu(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: s, searchQuery: a } = eo({ channelId: e.id }),
        o = es(e),
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
        }, el);
        return () => clearTimeout(r);
    }, [o, e.guild_id, e.id, i, s, a, t, n]);
}
function ec(e, t) {
    return (0, o.bG)([h.A, v.Ay, I.A], () => {
        let n = I.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let r = h.A.getActiveJoinedUnreadThreadsForParent(e, t),
            i = h.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            s = v.Ay.ackMessageId(t),
            a = 0;
        if (null == s) return a;
        for (let e in r) {
            let t = r[e],
                n = v.Ay.lastMessageId(t.channel.id);
            null != n && n > s && a++;
        }
        for (let e in i) {
            let t = i[e],
                n = v.Ay.lastMessageId(t.id);
            null != n && n > s && a++;
        }
        return a;
    });
}
function ed(e) {
    let { channel: t, sortOrder: n, tagFilter: i, tagSetting: s, shouldAutomaticallyAck: a } = e,
        l = (0, o.yK)([b.A], () => b.A.getThreadIds(t.id, n, i, s)),
        c = ec(t.guild_id, t.id),
        d = (0, o.bG)([b.A], () => a && (c > 0 || b.A.getCanAckThreads()), [a, c]);
    return (
        r.useEffect(() => {
            d &&
                (0, u.hS)(t, {
                    object: k.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: k.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, d]),
        l
    );
}

"use strict";
n.d(t, {
    $I: () => j,
    An: () => er,
    Ck: () => K,
    Eh: () => V,
    Hv: () => ee,
    Mw: () => Y,
    O3: () => ei,
    OT: () => et,
    S4: () => X,
    V3: () => el,
    X5: () => J,
    cA: () => es,
    ed: () => eo,
    gk: () => Z,
    k6: () => z,
    kn: () => $,
    kt: () => H,
    lQ: () => W,
    o7: () => ea,
    tY: () => q,
    yz: () => F,
    zt: () => en,
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
    f = n(763754),
    h = n(892340),
    p = n(695633),
    E = n(970278),
    m = n(321045),
    g = n(456874),
    A = n(707539),
    I = n(734057),
    T = n(860071),
    S = n(71393),
    N = n(576705),
    y = n(222823),
    C = n(287809),
    v = n(403362),
    O = n(935208),
    R = n(919577),
    b = n(207777),
    D = n(256265),
    L = n(969043),
    w = n(474399),
    M = n(768953),
    P = n(767581),
    x = n(253913),
    U = n(652215),
    k = n(746080),
    G = n(37411);
function F(e, t, n, r) {
    let s = (0, o.bG)([E.A], () => E.A.hasLoaded(e.guild_id));
    i.useEffect(() => {
        if (!s) return;
        let i = b.A.getThreadIds(e.id, t, n, r),
            a = w.A.getThreadIdsMissingCounts(e.guild_id, i)
                .filter((e) => (0, P.yz)(e, [y.Ay]))
                .slice(0, 180)
                .map((e) => ({ threadId: e, ackMessageId: y.Ay.getTrackedAckMessageId(e) }));
        a.length > 0 &&
            l.h.dispatch({ type: "REQUEST_FORUM_UNREADS", guildId: e.guild_id, channelId: e.id, threads: a });
    }, [e.id, e.guild_id, s, n, t, r]);
}
function V(e) {
    return (0, o.bG)([E.A, I.A], () => {
        let t = s()(E.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => I.A.getChannel(e)?.hasFlag(k.lx.PINNED) === !0)
            .head();
        return I.A.getChannel(t);
    });
}
let B = [];
function H(e) {
    let t,
        n =
            ((t = e?.parent_id),
            (0, o.cf)([I.A], () => {
                let e = I.A.getChannel(t);
                return (e?.availableTags ?? []).reduce((e, t) => ({ ...e, [t.id]: t }), {});
            }, [t]));
    return i.useMemo(() => {
        let t = e?.appliedTags?.map((e) => n[e])?.filter(v.Vq) ?? B;
        return e?.isModeratorReportChannel() ? (0, h.Yj)(t) : t;
    }, [n, e]);
}
function j(e, t) {
    let n = (0, o.yK)([C.default], () => t.map((e) => C.default.getUser(e)).filter(v.Vq));
    return (
        (0, c.Ay)(() => {
            n.forEach((t) => {
                T.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function Y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x.EG.DURATION_AGO,
        r = i.useMemo(() => O.default.extractTimestamp(e.id), [e.id]),
        s = (0, A.JO)(e),
        o = i.useMemo(() => (0, P.mf)(t, n), [t, n]);
    return i.useMemo(() => (t === a.T.CREATION_DATE ? (0, A.aK)(r, o) : (0, A.aK)(s, o)), [s, t, r, o]);
}
function W(e) {
    return i.useMemo(() => {
        let t = e?.reactions ?? [];
        if (0 !== t.length)
            return s().orderBy(t, [(e) => e.count + e.burst_count, (e) => e.burst_count], ["desc", "desc"])[0];
    }, [e?.reactions]);
}
function K(e) {
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
function z(e) {
    let t = (0, o.bG)([g.A], () => g.A.getCount(e.id) ?? 0),
        n = (0, m.Mw)(t, e.id),
        i = (0, o.bG)([y.Ay], () => (0, P.yz)(e.id, [y.Ay])),
        r = (0, o.bG)([w.A], () => {
            if (!i) return null;
            let n = w.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= G.oR ? `${G.oR}+` : e;
            }
        });
    return { messageCount: t, isMaxMessageCount: null != t && `${t}` !== n, messageCountText: n, unreadCount: r };
}
function $(e) {
    let t = (0, o.bG)([C.default], () => C.default.getUser(e.ownerId)),
        n = (0, o.bG)([L.A], () => L.A.getMessage(e.id)?.firstMessage),
        r = (0, f.d8)(n?.author ?? t, e);
    return (
        i.useEffect(() => {
            null != e.ownerId && T.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        { user: t, author: r }
    );
}
function q(e) {
    let t = C.default.getUser(e.ownerId),
        n = L.A.getMessage(e.id)?.firstMessage,
        i = (0, f.FT)(n?.author ?? t, e);
    return { user: t, author: i };
}
function Z(e) {
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
                          textColor: a,
                      })
                    : { hasSpoilerEmbeds: !1, content: null },
            [t, n, r, a],
        ),
        u = (0, D.Ky)(t, o),
        c = (0, D.L_)(t, o);
    return { hasSpoilerEmbeds: o, content: l, firstMedia: u, firstMediaIsEmbed: c };
}
function X(e) {
    return (0, o.bG)([N.A], () => N.A.can(U.xBc.MANAGE_CHANNELS, e));
}
let Q = { isNew: !1, hasUnreads: !1 };
function J(e) {
    return (0, o.cf)([S.A, y.Ay], () => {
        let t = S.A.getGuild(e.getGuildId() ?? U.dJq);
        return null == t ? Q : (0, P.U1)(e, t, [y.Ay]);
    });
}
function ee(e) {
    return i.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function et(e) {
    let t = (0, o.bG)([N.A], () => N.A.can(U.xBc.MANAGE_THREADS, e));
    return i.useMemo(() => {
        let n = [...(e?.availableTags ?? [])];
        return t || (n = n.filter((e) => !e.moderated)), n;
    }, [t, e?.availableTags]);
}
function en(e, t) {
    let n = et((0, o.bG)([I.A], () => I.A.getChannel(e?.parent_id), [e]));
    return i.useMemo(() => {
        let i = t.filter((e) => n.includes(e));
        return e?.isModeratorReportChannel() ? (0, h.Yj)(i) : i;
    }, [t, n, e]);
}
function ei(e) {
    return (0, o.bG)([N.A], () => N.A.can(U.xBc.READ_MESSAGE_HISTORY, e));
}
function er(e) {
    return (0, o.bG)([N.A], () => N.A.can(U.xBc.READ_MESSAGE_HISTORY, e));
}
function es(e) {
    let { channelId: t } = e;
    return (0, o.cf)([M.A], () => ({
        isSearchLoading: M.A.getSearchLoading(t),
        searchQuery: M.A.getSearchQuery(t),
        searchResults: M.A.getSearchResults(t),
    }));
}
function ea(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: s, searchQuery: a } = es({ channelId: e.id }),
        o = ei(e),
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
function eo(e, t) {
    return (0, o.bG)([p.A, y.Ay, I.A], () => {
        let n = I.A.getChannel(t);
        if (!n?.isForumLikeChannel()) return 0;
        let i = p.A.getActiveJoinedUnreadThreadsForParent(e, t),
            r = p.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            s = y.Ay.ackMessageId(t),
            a = 0;
        if (null == s) return a;
        for (let e in i) {
            let t = i[e],
                n = y.Ay.lastMessageId(t.channel.id);
            null != n && n > s && a++;
        }
        for (let e in r) {
            let t = r[e],
                n = y.Ay.lastMessageId(t.id);
            null != n && n > s && a++;
        }
        return a;
    });
}
function el(e) {
    let { channel: t, sortOrder: n, tagFilter: r, tagSetting: s, shouldAutomaticallyAck: a } = e,
        l = (0, o.yK)([b.A], () => b.A.getThreadIds(t.id, n, r, s)),
        c = eo(t.guild_id, t.id),
        d = (0, o.bG)([b.A], () => a && (c > 0 || b.A.getCanAckThreads()), [a, c]);
    return (
        i.useEffect(() => {
            d &&
                (0, u.hS)(t, {
                    object: U.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: U.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, d]),
        l
    );
}

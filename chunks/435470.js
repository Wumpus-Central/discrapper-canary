n.d(t, {
    $I: () => Y,
    An: () => eu,
    Ck: () => Q,
    Eh: () => H,
    Hv: () => et,
    Mw: () => q,
    O3: () => el,
    OT: () => en,
    S4: () => $,
    V3: () => ed,
    X5: () => ee,
    cA: () => ei,
    ed: () => eo,
    gk: () => Z,
    k6: () => V,
    kn: () => J,
    kt: () => B,
    lQ: () => z,
    o7: () => ea,
    tY: () => X,
    yz: () => L,
    zt: () => er,
}),
    n(896048),
    n(264879),
    n(733351);
var r = n(64700),
    l = n(735438),
    u = n.n(l),
    i = n(602137),
    a = n(311907),
    o = n(73153),
    d = n(334738),
    s = n(964486),
    c = n(508675),
    A = n(352505),
    f = n(465364),
    g = n(763754),
    h = n(376708),
    m = n(863005),
    b = n(970278),
    y = n(321045),
    v = n(456874),
    E = n(707539),
    p = n(734057),
    _ = n(256587),
    M = n(71393),
    C = n(576705),
    O = n(222823),
    S = n(287809),
    T = n(403362),
    I = n(661191),
    j = n(919577),
    R = n(207777),
    w = n(256265),
    G = n(969043),
    U = n(474399),
    k = n(768953),
    N = n(767581),
    P = n(253913),
    F = n(652215),
    D = n(746080),
    x = n(37411);
function L(e, t, n, l) {
    let u = (0, a.bG)([b.A], () => b.A.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!u) return;
        let r = R.A.getThreadIds(e.id, t, n, l),
            i = U.A.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, N.yz)(e, [O.Ay]))
                .slice(0, 180)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: O.Ay.getTrackedAckMessageId(e),
                }));
        i.length > 0 &&
            o.h.dispatch({
                type: "REQUEST_FORUM_UNREADS",
                guildId: e.guild_id,
                channelId: e.id,
                threads: i,
            });
    }, [e.id, e.guild_id, u, n, t, l]);
}
function H(e) {
    return (0, a.bG)([b.A, p.A], () => {
        let t = u()(b.A.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var t;
                return (null == (t = p.A.getChannel(e)) ? void 0 : t.hasFlag(D.lx.PINNED)) === !0;
            })
            .head();
        return p.A.getChannel(t);
    });
}
let K = [];
function B(e) {
    let t,
        n =
            ((t = null == e ? void 0 : e.parent_id),
            (0, a.cf)([p.A], () => {
                var e;
                let n = p.A.getChannel(t);
                return (null != (e = null == n ? void 0 : n.availableTags) ? e : []).reduce((e, t) => {
                    var n, r;
                    return (
                        (n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r = { [t.id]: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n
                    );
                }, {});
            }, [t]));
    return r.useMemo(() => {
        var t, r, l;
        let u =
            null !=
            (t = null == e || null == (l = e.appliedTags) || null == (r = l.map((e) => n[e])) ? void 0 : r.filter(T.Vq))
                ? t
                : K;
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.Yj)(u) : u;
    }, [n, e]);
}
function Y(e, t) {
    let n = (0, a.yK)([S.default], () => t.map((e) => S.default.getUser(e)).filter(T.Vq));
    return (
        (0, s.Ay)(() => {
            n.forEach((t) => {
                _.A.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P.EG.DURATION_AGO,
        l = r.useMemo(() => I.default.extractTimestamp(e.id), [e.id]),
        u = (0, E.JO)(e),
        a = r.useMemo(() => (0, N.mf)(t, n), [t, n]);
    return r.useMemo(() => (t === i.T.CREATION_DATE ? (0, E.aK)(l, a) : (0, E.aK)(u, a)), [u, t, l, a]);
}
function z(e) {
    return r.useMemo(() => {
        var t;
        return u().maxBy(null != (t = null == e ? void 0 : e.reactions) ? t : [], (e) =>
            Math.max(e.burst_count, e.count),
        );
    }, [null == e ? void 0 : e.reactions]);
}
function Q(e) {
    let t = null == e ? void 0 : e.defaultReactionEmoji,
        n = (0, a.bG)([c.Ay], () =>
            (null == t ? void 0 : t.emojiId) != null ? c.Ay.getUsableCustomEmojiById(t.emojiId) : null,
        );
    return null == t
        ? null
        : null != t.emojiId && null != n
          ? {
                id: t.emojiId,
                name: n.name,
                animated: n.animated,
            }
          : null != t.emojiName
            ? {
                  id: t.emojiId,
                  name: t.emojiName,
                  animated: !1,
              }
            : null;
}
function V(e) {
    let t = (0, a.bG)([v.A], () => {
            var t;
            return null != (t = v.A.getCount(e.id)) ? t : 0;
        }),
        n = (0, y.Mw)(t, e.id),
        r = (0, a.bG)([O.Ay], () => (0, N.yz)(e.id, [O.Ay])),
        l = (0, a.bG)([U.A], () => {
            if (!r) return null;
            let n = U.A.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= x.oR ? "".concat(x.oR, "+") : e;
            }
        });
    return {
        messageCount: t,
        isMaxMessageCount: null != t && "".concat(t) !== n,
        messageCountText: n,
        unreadCount: l,
    };
}
function J(e) {
    var t;
    let n = (0, a.bG)([S.default], () => S.default.getUser(e.ownerId)),
        l = (0, a.bG)([G.A], () => {
            var t;
            return null == (t = G.A.getMessage(e.id)) ? void 0 : t.firstMessage;
        }),
        u = (0, g.d8)(null != (t = null == l ? void 0 : l.author) ? t : n, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && _.A.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: n,
            author: u,
        }
    );
}
function X(e) {
    var t, n;
    let r = S.default.getUser(e.ownerId),
        l = null == (n = G.A.getMessage(e.id)) ? void 0 : n.firstMessage,
        u = (0, g.FT)(null != (t = null == l ? void 0 : l.author) ? t : r, e);
    return {
        user: r,
        author: u,
    };
}
function Z(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0, hasUnreads: u = !0 } = e,
        i = A.m.useExperiment({ location: "modules/forums/ForumHooks" }).enabled,
        a = u ? "text-default" : "text-muted",
        { hasSpoilerEmbeds: o, content: d } = r.useMemo(
            () =>
                (null == t ? void 0 : t.content) != null && "" !== t.content
                    ? (0, f.Ay)(t, {
                          formatInline: n,
                          noStyleAndInteraction: l,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: i,
                          textColor: a,
                      })
                    : {
                          hasSpoilerEmbeds: !1,
                          content: null,
                      },
            [t, n, l, i, a],
        ),
        s = (0, w.Ky)(t, o),
        c = (0, w.L_)(t, o);
    return {
        hasSpoilerEmbeds: o,
        content: d,
        firstMedia: s,
        firstMediaIsEmbed: c,
    };
}
function $(e) {
    return (0, a.bG)([C.A], () => C.A.can(F.xBc.MANAGE_CHANNELS, e));
}
let W = {
    isNew: !1,
    hasUnreads: !1,
};
function ee(e) {
    return (0, a.cf)([M.A, O.Ay], () => {
        var t;
        let n = M.A.getGuild(null != (t = e.getGuildId()) ? t : F.dJq);
        return null == n ? W : (0, N.U1)(e, n, [O.Ay]);
    });
}
function et(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function en(e) {
    let t = (0, a.bG)([C.A], () => C.A.can(F.xBc.MANAGE_THREADS, e));
    return r.useMemo(() => {
        var n;
        let r = [...(null != (n = null == e ? void 0 : e.availableTags) ? n : [])];
        return t || (r = r.filter((e) => !e.moderated)), r;
    }, [t, null == e ? void 0 : e.availableTags]);
}
function er(e, t) {
    let n = en((0, a.bG)([p.A], () => p.A.getChannel(null == e ? void 0 : e.parent_id), [e]));
    return r.useMemo(() => {
        let r = t.filter((e) => n.includes(e));
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.Yj)(r) : r;
    }, [t, n, e]);
}
function el(e) {
    return (0, a.bG)([C.A], () => C.A.can(F.xBc.READ_MESSAGE_HISTORY, e));
}
function eu(e) {
    return (0, a.bG)([C.A], () => C.A.can(F.xBc.READ_MESSAGE_HISTORY, e));
}
function ei(e) {
    let { channelId: t } = e;
    return (0, a.cf)([k.A], () => ({
        isSearchLoading: k.A.getSearchLoading(t),
        searchQuery: k.A.getSearchQuery(t),
        searchResults: k.A.getSearchResults(t),
    }));
}
function ea(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: u, searchQuery: i } = ei({ channelId: e.id }),
        a = el(e),
        o = r.useRef(null),
        d = r.useRef(new Set());
    r.useEffect(() => {
        if (null == i && null != o.current) {
            j.A.clearForumSearch(e.id), (o.current = null);
            return;
        }
        if (null == i || 0 === i.length || l) return;
        if (!a) return void j.A.clearForumSearch(e.id);
        if ((o.current === i && d.current === t) || u) return;
        let r = setTimeout(async () => {
            (o.current = i), (d.current = t);
            try {
                await j.A.searchForumPosts(e.guild_id, e.id, i, t, n);
            } catch (e) {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, l, u, i, t, n]);
}
function eo(e, t) {
    return (0, a.bG)([m.A, O.Ay, p.A], () => {
        let n = p.A.getChannel(t);
        if (!(null == n ? void 0 : n.isForumLikeChannel())) return 0;
        let r = m.A.getActiveJoinedUnreadThreadsForParent(e, t),
            l = m.A.getActiveUnjoinedUnreadThreadsForParent(e, t),
            u = O.Ay.ackMessageId(t),
            i = 0;
        if (null == u) return i;
        for (let e in r) {
            let t = r[e],
                n = O.Ay.lastMessageId(t.channel.id);
            null != n && n > u && i++;
        }
        for (let e in l) {
            let t = l[e],
                n = O.Ay.lastMessageId(t.id);
            null != n && n > u && i++;
        }
        return i;
    });
}
function ed(e) {
    let { channel: t, sortOrder: n, tagFilter: l, tagSetting: u, shouldAutomaticallyAck: i } = e,
        o = (0, a.yK)([R.A], () => R.A.getThreadIds(t.id, n, l, u)),
        s = eo(t.guild_id, t.id),
        c = (0, a.bG)([R.A], () => i && (s > 0 || R.A.getCanAckThreads()), [i, s]);
    return (
        r.useEffect(() => {
            c &&
                (0, d.hS)(t, {
                    object: F.ZSU.ACK_FORUM_ACTIVE_THREADS,
                    objectType: F.AnalyticsObjectTypes.ACK_AUTOMATIC,
                });
        }, [t, c]),
        o
    );
}

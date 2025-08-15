n.d(t, {
    AJ: () => V,
    Bs: () => J,
    ES: () => G,
    IN: () => B,
    J$: () => et,
    MC: () => W,
    Vm: () => er,
    XZ: () => ea,
    eV: () => Q,
    eZ: () => ei,
    iM: () => Y,
    jR: () => eu,
    kF: () => H,
    kn: () => el,
    ku: () => eo,
    mX: () => X,
    n2: () => ed,
    nP: () => K,
    ql: () => en,
    r_: () => $,
    vP: () => es,
    xw: () => z,
}),
    n(388685),
    n(583741),
    n(781311);
var r = n(647438),
    l = n(392711),
    u = n.n(l),
    i = n(683860),
    a = n(442837),
    o = n(570140),
    d = n(45114),
    s = n(493773),
    c = n(339085),
    f = n(627050),
    g = n(905405),
    Z = n(937889),
    m = n(739566),
    h = n(982168),
    v = n(601070),
    E = n(344185),
    p = n(723774),
    P = n(144140),
    _ = n(91159),
    M = n(592125),
    b = n(720202),
    C = n(430824),
    S = n(496675),
    O = n(306680),
    A = n(594174),
    T = n(823379),
    I = n(709054),
    j = n(883429),
    w = n(238349),
    y = n(368844),
    R = n(660189),
    U = n(581036),
    N = n(208970),
    k = n(882252),
    F = n(710352),
    D = n(981631),
    q = n(176505),
    L = n(124368);
function G(e, t, n, l) {
    let u = (0, a.e7)([E.Z], () => E.Z.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!u) return;
        let r = w.Z.getThreadIds(e.id, t, n, l),
            i = U.Z.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, k.nU)(e, [O.ZP]))
                .slice(0, 180)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: O.ZP.getTrackedAckMessageId(e),
                }));
        i.length > 0 &&
            o.Z.dispatch({
                type: "REQUEST_FORUM_UNREADS",
                guildId: e.guild_id,
                channelId: e.id,
                threads: i,
            });
    }, [e.id, e.guild_id, u, n, t, l]);
}
function H(e) {
    return (0, a.e7)([E.Z, M.Z], () => {
        let t = u()(E.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var t;
                return (null == (t = M.Z.getChannel(e)) ? void 0 : t.hasFlag(q.zZ.PINNED)) === !0;
            })
            .head();
        return M.Z.getChannel(t);
    });
}
let x = [];
function Q(e) {
    let t = (function (e) {
        let t = null == e ? void 0 : e.parent_id;
        return (0, a.cj)([M.Z], () => {
            var e;
            let n = M.Z.getChannel(t);
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
        }, [t]);
    })(e);
    return r.useMemo(() => {
        var n, r, l;
        let u =
            null !=
            (l = null == e || null == (r = e.appliedTags) || null == (n = r.map((e) => t[e])) ? void 0 : n.filter(T.lm))
                ? l
                : x;
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.iq)(u) : u;
    }, [t, e]);
}
function Y(e, t) {
    let n = (0, a.Wu)([A.default], () => t.map((e) => A.default.getUser(e)).filter(T.lm));
    return (
        (0, s.ZP)(() => {
            n.forEach((t) => {
                b.Z.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.R6.DURATION_AGO,
        l = r.useMemo(() => I.default.extractTimestamp(e.id), [e.id]),
        u = (0, _.Ok)(e),
        a = r.useMemo(() => (0, k.Uw)(t, n), [t, n]);
    return r.useMemo(() => (t === i.z.CREATION_DATE ? (0, _.Ye)(l, a) : (0, _.Ye)(u, a)), [u, t, l, a]);
}
function B(e) {
    return r.useMemo(() => {
        var t;
        return u().maxBy(null != (t = null == e ? void 0 : e.reactions) ? t : [], (e) =>
            Math.max(e.burst_count, e.count),
        );
    }, [null == e ? void 0 : e.reactions]);
}
function J(e) {
    let t = null == e ? void 0 : e.defaultReactionEmoji,
        n = (0, a.e7)([c.ZP], () =>
            (null == t ? void 0 : t.emojiId) != null ? c.ZP.getUsableCustomEmojiById(t.emojiId) : null,
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
function K(e) {
    let t = (0, a.e7)([P.Z], () => {
            var t;
            return null != (t = P.Z.getCount(e.id)) ? t : 0;
        }),
        n = (0, p.lE)(t, e.id),
        r = (0, a.e7)([O.ZP], () => (0, k.nU)(e.id, [O.ZP])),
        l = (0, a.e7)([U.Z], () => {
            if (!r) return null;
            let n = U.Z.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= L.dg ? "".concat(L.dg, "+") : e;
            }
        });
    return {
        messageCount: t,
        isMaxMessageCount: null != t && "".concat(t) !== n,
        messageCountText: n,
        unreadCount: l,
    };
}
function V(e) {
    var t;
    let n = (0, a.e7)([A.default], () => A.default.getUser(e.ownerId)),
        l = (0, a.e7)([R.Z], () => {
            var t;
            return null == (t = R.Z.getMessage(e.id)) ? void 0 : t.firstMessage;
        }),
        u = (0, m.Sw)(null != (t = null == l ? void 0 : l.author) ? t : n, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && b.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: n,
            author: u,
        }
    );
}
function W(e) {
    var t, n;
    let r = A.default.getUser(e.ownerId),
        l = null == (t = R.Z.getMessage(e.id)) ? void 0 : t.firstMessage,
        u = (0, m.ij)(null != (n = null == l ? void 0 : l.author) ? n : r, e);
    return {
        user: r,
        author: u,
    };
}
function X(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: l = !0 } = e,
        u = (0, g.p)(),
        i = f.d.useExperiment({ location: "modules/forums/ForumHooks" }).enabled,
        { hasSpoilerEmbeds: a, content: o } = r.useMemo(
            () =>
                (null == t ? void 0 : t.content) != null && "" !== t.content
                    ? (0, Z.ZP)(t, {
                          formatInline: n,
                          noStyleAndInteraction: l,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: i,
                          shouldFilterKeywords: u,
                      })
                    : {
                          hasSpoilerEmbeds: !1,
                          content: null,
                      },
            [t, n, l, u, i],
        ),
        d = (0, y.eL)(t, a),
        s = (0, y.vg)(t, a);
    return {
        hasSpoilerEmbeds: a,
        content: o,
        firstMedia: d,
        firstMediaIsEmbed: s,
    };
}
function $(e) {
    return (0, a.e7)([S.Z], () => S.Z.can(D.Plq.MANAGE_CHANNELS, e));
}
let ee = {
    isNew: !1,
    hasUnreads: !1,
};
function et(e) {
    return (0, a.cj)([C.Z, O.ZP], () => {
        var t;
        let n = C.Z.getGuild(null != (t = e.getGuildId()) ? t : D.lds);
        return null == n ? ee : (0, k.FS)(e, n, [O.ZP]);
    });
}
function en(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function er(e) {
    let t = (0, a.e7)([S.Z], () => S.Z.can(D.Plq.MANAGE_THREADS, e));
    return r.useMemo(() => {
        var n;
        let r = [...(null != (n = null == e ? void 0 : e.availableTags) ? n : [])];
        return t || (r = r.filter((e) => !e.moderated)), r;
    }, [t, null == e ? void 0 : e.availableTags]);
}
function el(e, t) {
    let n = er((0, a.e7)([M.Z], () => M.Z.getChannel(null == e ? void 0 : e.parent_id), [e]));
    return r.useMemo(() => {
        let r = t.filter((e) => n.includes(e));
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.iq)(r) : r;
    }, [t, n, e]);
}
function eu(e) {
    return (0, a.e7)([S.Z], () => S.Z.can(D.Plq.READ_MESSAGE_HISTORY, e));
}
function ei(e) {
    return (0, a.e7)([S.Z], () => S.Z.can(D.Plq.READ_MESSAGE_HISTORY, e));
}
function ea(e) {
    let { channelId: t } = e;
    return (0, a.cj)([N.Z], () => ({
        isSearchLoading: N.Z.getSearchLoading(t),
        searchQuery: N.Z.getSearchQuery(t),
        searchResults: N.Z.getSearchResults(t),
    }));
}
function eo(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: u, searchQuery: i } = ea({ channelId: e.id }),
        a = eu(e),
        o = r.useRef(null),
        d = r.useRef(new Set());
    r.useEffect(() => {
        if (null == i && null != o.current) {
            j.Z.clearForumSearch(e.id), (o.current = null);
            return;
        }
        if (null == i || 0 === i.length || l) return;
        if (!a) return void j.Z.clearForumSearch(e.id);
        if ((o.current === i && d.current === t) || u) return;
        let r = setTimeout(async () => {
            (o.current = i), (d.current = t);
            try {
                await j.Z.searchForumPosts(e.guild_id, e.id, i, t, n);
            } catch (e) {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, l, u, i, t, n]);
}
function ed(e, t) {
    return (0, a.e7)([v.Z, O.ZP, M.Z], () => {
        let n = M.Z.getChannel(t);
        if (!(null == n ? void 0 : n.isForumLikeChannel())) return 0;
        let r = v.Z.getActiveJoinedUnreadThreadsForParent(e, t),
            l = v.Z.getActiveUnjoinedUnreadThreadsForParent(e, t),
            u = O.ZP.ackMessageId(t),
            i = 0;
        if (null == u) return i;
        for (let e in r) {
            let t = r[e],
                n = O.ZP.lastMessageId(t.channel.id);
            null != n && n > u && i++;
        }
        for (let e in l) {
            let t = l[e],
                n = O.ZP.lastMessageId(t.id);
            null != n && n > u && i++;
        }
        return i;
    });
}
function es(e) {
    let { channel: t, sortOrder: n, tagFilter: l, tagSetting: u, shouldAutomaticallyAck: i } = e,
        o = (0, a.Wu)([w.Z], () => w.Z.getThreadIds(t.id, n, l, u)),
        s = ed(t.guild_id, t.id),
        c = (0, a.e7)([w.Z], () => i && (s > 0 || w.Z.getCanAckThreads()), [i, s]);
    return (
        r.useEffect(() => {
            c &&
                (0, d.U6)(t, {
                    object: D.qAy.ACK_FORUM_ACTIVE_THREADS,
                    objectType: D.Qqv.ACK_AUTOMATIC,
                });
        }, [t, c]),
        o
    );
}

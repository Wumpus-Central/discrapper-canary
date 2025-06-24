t.d(n, {
    AJ: () => $,
    Bs: () => W,
    ES: () => Y,
    Eg: () => x,
    IN: () => V,
    J$: () => el,
    MC: () => ee,
    O2: () => G,
    Vm: () => ei,
    W3: () => H,
    XZ: () => ec,
    eV: () => B,
    eZ: () => ed,
    iM: () => J,
    jR: () => eo,
    kF: () => Q,
    kn: () => ea,
    ku: () => es,
    mX: () => en,
    n2: () => ef,
    nP: () => X,
    ql: () => eu,
    r_: () => et,
    vP: () => eg,
    xw: () => K
}),
    t(388685),
    t(583741),
    t(781311);
var r = t(73800),
    l = t(392711),
    u = t.n(l),
    i = t(683860),
    a = t(442837),
    o = t(570140),
    d = t(45114),
    c = t(493773),
    s = t(339085),
    f = t(987170),
    g = t(905405),
    Z = t(937889),
    m = t(739566),
    h = t(982168),
    E = t(601070),
    v = t(344185),
    _ = t(723774),
    p = t(144140),
    b = t(91159),
    M = t(592125),
    C = t(720202),
    P = t(430824),
    O = t(496675),
    S = t(306680),
    T = t(594174),
    I = t(823379),
    A = t(709054),
    j = t(883429),
    y = t(238349),
    R = t(368844),
    w = t(660189),
    N = t(581036),
    U = t(208970),
    k = t(882252),
    F = t(710352),
    D = t(981631),
    L = t(176505),
    q = t(124368);
let G = (0, f.Z)({
    id: '2023-01_forums_non_community',
    label: 'Forum non-community',
    kind: 'guild',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function x(e) {
    return G.getCurrentConfig({
        guildId: e,
        location: '553713_2'
    }).enabled;
}
function H(e) {
    let n = (0, a.e7)([P.Z], () => P.Z.getGuild(e));
    return (
        G.useExperiment(
            {
                guildId: e,
                location: '553713_1'
            },
            { autoTrackExposure: !1 }
        ).enabled || !!((null == n ? void 0 : n.hasFeature(D.oNc.COMMUNITY)) || (null == n ? void 0 : n.hasFeature(D.oNc.INTERNAL_EMPLOYEE_ONLY)))
    );
}
function Y(e, n, t, l) {
    let u = (0, a.e7)([v.Z], () => v.Z.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!u) return;
        let r = y.Z.getThreadIds(e.id, n, t, l),
            i = N.Z.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, k.nU)(e, [S.ZP]))
                .slice(0, 180)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: S.ZP.getTrackedAckMessageId(e)
                }));
        i.length > 0 &&
            o.Z.dispatch({
                type: 'REQUEST_FORUM_UNREADS',
                guildId: e.guild_id,
                channelId: e.id,
                threads: i
            });
    }, [e.id, e.guild_id, u, t, n, l]);
}
function Q(e) {
    return (0, a.e7)([v.Z, M.Z], () => {
        let n = u()(v.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var n;
                return (null == (n = M.Z.getChannel(e)) ? void 0 : n.hasFlag(L.zZ.PINNED)) === !0;
            })
            .head();
        return M.Z.getChannel(n);
    });
}
let z = [];
function B(e) {
    let n = (function (e) {
        let n = null == e ? void 0 : e.parent_id;
        return (0, a.cj)(
            [M.Z],
            () => {
                var e;
                let t = M.Z.getChannel(n);
                return (null != (e = null == t ? void 0 : t.availableTags) ? e : []).reduce((e, n) => {
                    var t, r;
                    return (
                        (t = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (n) {
                                        var r;
                                        (r = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[n] = r);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (r = r = { [n.id]: n }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                            : (function (e, n) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, r);
                                  }
                                  return t;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        t
                    );
                }, {});
            },
            [n]
        );
    })(e);
    return r.useMemo(() => {
        var t, r, l;
        let u = null != (l = null == e || null == (r = e.appliedTags) || null == (t = r.map((e) => n[e])) ? void 0 : t.filter(I.lm)) ? l : z;
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.iq)(u) : u;
    }, [n, e]);
}
function J(e, n) {
    let t = (0, a.Wu)([T.default], () => n.map((e) => T.default.getUser(e)).filter(I.lm));
    return (
        (0, c.ZP)(() => {
            t.forEach((n) => {
                C.Z.requestMember(e.guild_id, n.id);
            });
        }),
        t
    );
}
function K(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.R6.DURATION_AGO,
        l = r.useMemo(() => A.default.extractTimestamp(e.id), [e.id]),
        u = (0, b.Ok)(e),
        a = r.useMemo(() => (0, k.Uw)(n, t), [n, t]);
    return r.useMemo(() => (n === i.z.CREATION_DATE ? (0, b.Ye)(l, a) : (0, b.Ye)(u, a)), [u, n, l, a]);
}
function V(e) {
    return r.useMemo(() => {
        var n;
        return u().maxBy(null != (n = null == e ? void 0 : e.reactions) ? n : [], (e) => Math.max(e.burst_count, e.count));
    }, [null == e ? void 0 : e.reactions]);
}
function W(e) {
    let n = null == e ? void 0 : e.defaultReactionEmoji,
        t = (0, a.e7)([s.ZP], () => ((null == n ? void 0 : n.emojiId) != null ? s.ZP.getUsableCustomEmojiById(n.emojiId) : null));
    return null == n
        ? null
        : null != n.emojiId && null != t
          ? {
                id: n.emojiId,
                name: t.name,
                animated: t.animated
            }
          : null != n.emojiName
            ? {
                  id: n.emojiId,
                  name: n.emojiName,
                  animated: !1
              }
            : null;
}
function X(e) {
    let n = (0, a.e7)([p.Z], () => {
            var n;
            return null != (n = p.Z.getCount(e.id)) ? n : 0;
        }),
        t = (0, _.lE)(n, e.id),
        r = (0, a.e7)([S.ZP], () => (0, k.nU)(e.id, [S.ZP])),
        l = (0, a.e7)([N.Z], () => {
            if (!r) return null;
            let t = N.Z.getCount(e.id);
            if (null == t || !(t > 0)) return '1+';
            {
                let e = Math.min(t, n);
                return e >= q.dg ? ''.concat(q.dg, '+') : e;
            }
        });
    return {
        messageCount: n,
        isMaxMessageCount: null != n && ''.concat(n) !== t,
        messageCountText: t,
        unreadCount: l
    };
}
function $(e) {
    var n;
    let t = (0, a.e7)([T.default], () => T.default.getUser(e.ownerId)),
        l = (0, a.e7)([w.Z], () => {
            var n;
            return null == (n = w.Z.getMessage(e.id)) ? void 0 : n.firstMessage;
        }),
        u = (0, m.Sw)(null != (n = null == l ? void 0 : l.author) ? n : t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && C.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: t,
            author: u
        }
    );
}
function ee(e) {
    var n, t;
    let r = T.default.getUser(e.ownerId),
        l = null == (n = w.Z.getMessage(e.id)) ? void 0 : n.firstMessage,
        u = (0, m.ij)(null != (t = null == l ? void 0 : l.author) ? t : r, e);
    return {
        user: r,
        author: u
    };
}
function en(e) {
    let { firstMessage: n, formatInline: t = !0, noStyleAndInteraction: l = !0 } = e,
        u = (0, g.p)(),
        { hasSpoilerEmbeds: i, content: a } = r.useMemo(
            () =>
                (null == n ? void 0 : n.content) != null && '' !== n.content
                    ? (0, Z.ZP)(n, {
                          formatInline: t,
                          noStyleAndInteraction: l,
                          allowHeading: !0,
                          allowList: !0,
                          shouldFilterKeywords: u
                      })
                    : {
                          hasSpoilerEmbeds: !1,
                          content: null
                      },
            [n, t, l, u]
        ),
        o = (0, R.eL)(n, i),
        d = (0, R.vg)(n, i);
    return {
        hasSpoilerEmbeds: i,
        content: a,
        firstMedia: o,
        firstMediaIsEmbed: d
    };
}
function et(e) {
    return (0, a.e7)([O.Z], () => O.Z.can(D.Plq.MANAGE_CHANNELS, e));
}
let er = {
    isNew: !1,
    hasUnreads: !1
};
function el(e) {
    return (0, a.cj)([P.Z, S.ZP], () => {
        var n;
        let t = P.Z.getGuild(null != (n = e.getGuildId()) ? n : D.lds);
        return null == t ? er : (0, k.FS)(e, t, [S.ZP]);
    });
}
function eu(e) {
    return r.useMemo(() => (null == e || null == e.template ? '' : e.template.trim()), [e]);
}
function ei(e) {
    let n = (0, a.e7)([O.Z], () => O.Z.can(D.Plq.MANAGE_THREADS, e));
    return r.useMemo(() => {
        var t;
        let r = [...(null != (t = null == e ? void 0 : e.availableTags) ? t : [])];
        return n || (r = r.filter((e) => !e.moderated)), r;
    }, [n, null == e ? void 0 : e.availableTags]);
}
function ea(e, n) {
    let t = ei((0, a.e7)([M.Z], () => M.Z.getChannel(null == e ? void 0 : e.parent_id), [e]));
    return r.useMemo(() => {
        let r = n.filter((e) => t.includes(e));
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.iq)(r) : r;
    }, [n, t, e]);
}
function eo(e) {
    return (0, a.e7)([O.Z], () => O.Z.can(D.Plq.READ_MESSAGE_HISTORY, e));
}
function ed(e) {
    return (0, a.e7)([O.Z], () => O.Z.can(D.Plq.READ_MESSAGE_HISTORY, e));
}
function ec(e) {
    let { channelId: n } = e;
    return (0, a.cj)([U.Z], () => ({
        isSearchLoading: U.Z.getSearchLoading(n),
        searchQuery: U.Z.getSearchQuery(n),
        searchResults: U.Z.getSearchResults(n)
    }));
}
function es(e, n, t) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: u, searchQuery: i } = ec({ channelId: e.id }),
        a = eo(e),
        o = r.useRef(null),
        d = r.useRef(new Set());
    r.useEffect(() => {
        if (null == i && null != o.current) {
            j.Z.clearForumSearch(e.id), (o.current = null);
            return;
        }
        if (null == i || 0 === i.length || l) return;
        if (!a) return void j.Z.clearForumSearch(e.id);
        if ((o.current === i && d.current === n) || u) return;
        let r = setTimeout(async () => {
            (o.current = i), (d.current = n);
            try {
                await j.Z.searchForumPosts(e.guild_id, e.id, i, n, t);
            } catch (e) {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, l, u, i, n, t]);
}
function ef(e, n) {
    return (0, a.e7)([E.Z, S.ZP, M.Z], () => {
        let t = M.Z.getChannel(n);
        if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
        let r = E.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            l = E.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
            u = S.ZP.ackMessageId(n),
            i = 0;
        if (null == u) return i;
        for (let e in r) {
            let n = r[e],
                t = S.ZP.lastMessageId(n.channel.id);
            null != t && t > u && i++;
        }
        for (let e in l) {
            let n = l[e],
                t = S.ZP.lastMessageId(n.id);
            null != t && t > u && i++;
        }
        return i;
    });
}
function eg(e) {
    let { channel: n, sortOrder: t, tagFilter: l, tagSetting: u, shouldAutomaticallyAck: i } = e,
        o = (0, a.Wu)([y.Z], () => y.Z.getThreadIds(n.id, t, l, u)),
        c = ef(n.guild_id, n.id),
        s = (0, a.e7)([y.Z], () => i && (c > 0 || y.Z.getCanAckThreads()), [i, c]);
    return (
        r.useEffect(() => {
            s &&
                (0, d.U6)(n, {
                    object: D.qAy.ACK_FORUM_ACTIVE_THREADS,
                    objectType: D.Qqv.ACK_AUTOMATIC
                });
        }, [n, s]),
        o
    );
}

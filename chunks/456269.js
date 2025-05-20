t.d(n, {
    AJ: () => $,
    Bs: () => V,
    ES: () => Y,
    Eg: () => q,
    IN: () => J,
    J$: () => el,
    MC: () => ee,
    O2: () => G,
    Vm: () => ei,
    W3: () => H,
    XZ: () => es,
    eV: () => W,
    eZ: () => ed,
    iM: () => z,
    jR: () => eo,
    kF: () => Q,
    kn: () => ea,
    ku: () => ec,
    mX: () => en,
    n2: () => ef,
    nP: () => K,
    ql: () => eu,
    r_: () => et,
    vP: () => eg,
    xw: () => B
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
    s = t(493773),
    c = t(339085),
    f = t(987170),
    g = t(905405),
    Z = t(937889),
    m = t(739566),
    h = t(982168),
    v = t(601070),
    E = t(344185),
    p = t(723774),
    _ = t(144140),
    P = t(91159),
    b = t(592125),
    M = t(720202),
    C = t(430824),
    O = t(496675),
    S = t(306680),
    I = t(594174),
    T = t(823379),
    y = t(709054),
    w = t(883429),
    A = t(238349),
    j = t(368844),
    R = t(660189),
    N = t(581036),
    k = t(208970),
    U = t(882252),
    F = t(710352),
    D = t(981631),
    L = t(176505),
    x = t(124368);
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
function q(e) {
    return G.getCurrentConfig({
        guildId: e,
        location: '553713_2'
    }).enabled;
}
function H(e) {
    let n = (0, a.e7)([C.Z], () => C.Z.getGuild(e));
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
    let u = (0, a.e7)([E.Z], () => E.Z.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!u) return;
        let r = A.Z.getThreadIds(e.id, n, t, l),
            i = N.Z.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, U.nU)(e, [S.ZP]))
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
    return (0, a.e7)([E.Z, b.Z], () => {
        let n = u()(E.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var n;
                return (null == (n = b.Z.getChannel(e)) ? void 0 : n.hasFlag(L.zZ.PINNED)) === !0;
            })
            .head();
        return b.Z.getChannel(n);
    });
}
let X = [];
function W(e) {
    let n = (function (e) {
        let n = null == e ? void 0 : e.parent_id;
        return (0, a.cj)(
            [b.Z],
            () => {
                var e;
                let t = b.Z.getChannel(n);
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
        let u = null != (l = null == e || null == (r = e.appliedTags) || null == (t = r.map((e) => n[e])) ? void 0 : t.filter(T.lm)) ? l : X;
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.iq)(u) : u;
    }, [n, e]);
}
function z(e, n) {
    let t = (0, a.Wu)([I.default], () => n.map((e) => I.default.getUser(e)).filter(T.lm));
    return (
        (0, s.ZP)(() => {
            t.forEach((n) => {
                M.Z.requestMember(e.guild_id, n.id);
            });
        }),
        t
    );
}
function B(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : F.R6.DURATION_AGO,
        l = r.useMemo(() => y.default.extractTimestamp(e.id), [e.id]),
        u = (0, P.Ok)(e),
        a = r.useMemo(() => (0, U.Uw)(n, t), [n, t]);
    return r.useMemo(() => (n === i.z.CREATION_DATE ? (0, P.Ye)(l, a) : (0, P.Ye)(u, a)), [u, n, l, a]);
}
function J(e) {
    return r.useMemo(() => {
        var n;
        return u().maxBy(null != (n = null == e ? void 0 : e.reactions) ? n : [], (e) => Math.max(e.burst_count, e.count));
    }, [null == e ? void 0 : e.reactions]);
}
function V(e) {
    let n = null == e ? void 0 : e.defaultReactionEmoji,
        t = (0, a.e7)([c.ZP], () => ((null == n ? void 0 : n.emojiId) != null ? c.ZP.getUsableCustomEmojiById(n.emojiId) : null));
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
function K(e) {
    let n = (0, a.e7)([_.Z], () => {
            var n;
            return null != (n = _.Z.getCount(e.id)) ? n : 0;
        }),
        t = (0, p.lE)(n, e.id),
        r = (0, a.e7)([S.ZP], () => (0, U.nU)(e.id, [S.ZP])),
        l = (0, a.e7)([N.Z], () => {
            if (!r) return null;
            let t = N.Z.getCount(e.id);
            if (null == t || !(t > 0)) return '1+';
            {
                let e = Math.min(t, n);
                return e >= x.dg ? ''.concat(x.dg, '+') : e;
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
    let t = (0, a.e7)([I.default], () => I.default.getUser(e.ownerId)),
        l = (0, a.e7)([R.Z], () => {
            var n;
            return null == (n = R.Z.getMessage(e.id)) ? void 0 : n.firstMessage;
        }),
        u = (0, m.Sw)(null != (n = null == l ? void 0 : l.author) ? n : t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && M.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: t,
            author: u
        }
    );
}
function ee(e) {
    var n, t;
    let r = I.default.getUser(e.ownerId),
        l = null == (n = R.Z.getMessage(e.id)) ? void 0 : n.firstMessage,
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
        o = (0, j.eL)(n, i),
        d = (0, j.vg)(n, i);
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
    return (0, a.cj)([C.Z, S.ZP], () => {
        var n;
        let t = C.Z.getGuild(null != (n = e.getGuildId()) ? n : D.lds);
        return null == t ? er : (0, U.FS)(e, t, [S.ZP]);
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
    let t = ei((0, a.e7)([b.Z], () => b.Z.getChannel(null == e ? void 0 : e.parent_id), [e]));
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
function es(e) {
    let { channelId: n } = e;
    return (0, a.cj)([k.Z], () => ({
        isSearchLoading: k.Z.getSearchLoading(n),
        searchQuery: k.Z.getSearchQuery(n),
        searchResults: k.Z.getSearchResults(n)
    }));
}
function ec(e, n, t) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: u, searchQuery: i } = es({ channelId: e.id }),
        a = eo(e),
        o = r.useRef(null),
        d = r.useRef(new Set());
    r.useEffect(() => {
        if (null == i && null != o.current) {
            w.Z.clearForumSearch(e.id), (o.current = null);
            return;
        }
        if (null == i || 0 === i.length || l) return;
        if (!a) return void w.Z.clearForumSearch(e.id);
        if ((o.current === i && d.current === n) || u) return;
        let r = setTimeout(async () => {
            (o.current = i), (d.current = n);
            try {
                await w.Z.searchForumPosts(e.guild_id, e.id, i, n, t);
            } catch (e) {}
        }, 350);
        return () => clearTimeout(r);
    }, [a, e.guild_id, e.id, l, u, i, n, t]);
}
function ef(e, n) {
    return (0, a.e7)([v.Z, S.ZP, b.Z], () => {
        let t = b.Z.getChannel(n);
        if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
        let r = v.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            l = v.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
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
        o = (0, a.Wu)([A.Z], () => A.Z.getThreadIds(n.id, t, l, u)),
        s = ef(n.guild_id, n.id),
        c = (0, a.e7)([A.Z], () => i && (s > 0 || A.Z.getCanAckThreads()), [i, s]);
    return (
        r.useEffect(() => {
            c && (0, d.U6)(n);
        }, [n, c]),
        o
    );
}

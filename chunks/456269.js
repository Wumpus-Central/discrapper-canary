t.d(n, {
    AJ: () => K,
    Bs: () => J,
    ES: () => Y,
    Eg: () => G,
    IN: () => B,
    J$: () => er,
    MC: () => $,
    O2: () => x,
    Vm: () => eu,
    W3: () => H,
    XZ: () => ed,
    eV: () => Q,
    eZ: () => eo,
    iM: () => X,
    jR: () => ea,
    kF: () => q,
    kn: () => ei,
    ku: () => es,
    mX: () => ee,
    n2: () => ec,
    nP: () => V,
    ql: () => el,
    r_: () => en,
    vP: () => ef,
    xw: () => z
}),
    t(47120),
    t(978209),
    t(566702);
var r = t(192379),
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
    h = t(601070),
    v = t(344185),
    E = t(723774),
    p = t(144140),
    _ = t(91159),
    P = t(592125),
    b = t(720202),
    M = t(430824),
    O = t(496675),
    S = t(306680),
    C = t(594174),
    I = t(823379),
    T = t(709054),
    y = t(883429),
    w = t(238349),
    A = t(368844),
    j = t(660189),
    N = t(581036),
    R = t(208970),
    k = t(882252),
    U = t(710352),
    F = t(981631),
    D = t(176505),
    L = t(124368);
let x = (0, f.Z)({
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
function G(e) {
    return x.getCurrentConfig({
        guildId: e,
        location: '553713_2'
    }).enabled;
}
function H(e) {
    let n = (0, a.e7)([M.Z], () => M.Z.getGuild(e));
    return (
        x.useExperiment(
            {
                guildId: e,
                location: '553713_1'
            },
            { autoTrackExposure: !1 }
        ).enabled || !!((null == n ? void 0 : n.hasFeature(F.oNc.COMMUNITY)) || (null == n ? void 0 : n.hasFeature(F.oNc.INTERNAL_EMPLOYEE_ONLY)))
    );
}
function Y(e, n, t) {
    let l = (0, a.e7)([v.Z], () => v.Z.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!l) return;
        let r = w.Z.getThreadIds(e.id, n, t),
            u = N.Z.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, k.nU)(e, [S.ZP]))
                .slice(0, 180)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: S.ZP.getTrackedAckMessageId(e)
                }));
        u.length > 0 &&
            o.Z.dispatch({
                type: 'REQUEST_FORUM_UNREADS',
                guildId: e.guild_id,
                channelId: e.id,
                threads: u
            });
    }, [e.id, e.guild_id, l, t, n]);
}
function q(e) {
    return (0, a.e7)([v.Z, P.Z], () => {
        let n = u()(v.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var n;
                return (null == (n = P.Z.getChannel(e)) ? void 0 : n.hasFlag(D.zZ.PINNED)) === !0;
            })
            .head();
        return P.Z.getChannel(n);
    });
}
let W = [];
function Q(e) {
    let n = (function (e) {
        let n = null == e ? void 0 : e.parent_id;
        return (0, a.cj)(
            [P.Z],
            () => {
                var e;
                let t = P.Z.getChannel(n);
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
        return null != (l = null == e || null == (r = e.appliedTags) || null == (t = r.map((e) => n[e])) ? void 0 : t.filter(I.lm)) ? l : W;
    }, [n, null == e ? void 0 : e.appliedTags]);
}
function X(e, n) {
    let t = (0, a.Wu)([C.default], () => n.map((e) => C.default.getUser(e)).filter(I.lm));
    return (
        (0, s.ZP)(() => {
            t.forEach((n) => {
                b.Z.requestMember(e.guild_id, n.id);
            });
        }),
        t
    );
}
function z(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.R6.DURATION_AGO,
        l = r.useMemo(() => T.default.extractTimestamp(e.id), [e.id]),
        u = (0, _.Ok)(e),
        a = r.useMemo(() => (0, k.Uw)(n, t), [n, t]);
    return r.useMemo(() => (n === i.z.CREATION_DATE ? (0, _.Ye)(l, a) : (0, _.Ye)(u, a)), [u, n, l, a]);
}
function B(e) {
    return r.useMemo(() => {
        var n;
        return u().maxBy(null != (n = null == e ? void 0 : e.reactions) ? n : [], (e) => Math.max(e.burst_count, e.count));
    }, [null == e ? void 0 : e.reactions]);
}
function J(e) {
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
function V(e) {
    let n = (0, a.e7)([p.Z], () => {
            var n;
            return null != (n = p.Z.getCount(e.id)) ? n : 0;
        }),
        t = (0, E.lE)(n, e.id),
        r = (0, a.e7)([S.ZP], () => (0, k.nU)(e.id, [S.ZP])),
        l = (0, a.e7)([N.Z], () => {
            if (!r) return null;
            let t = N.Z.getCount(e.id);
            if (null == t || !(t > 0)) return '1+';
            {
                let e = Math.min(t, n);
                return e >= L.dg ? ''.concat(L.dg, '+') : e;
            }
        });
    return {
        messageCount: n,
        isMaxMessageCount: null != n && ''.concat(n) !== t,
        messageCountText: t,
        unreadCount: l
    };
}
function K(e) {
    var n;
    let t = (0, a.e7)([C.default], () => C.default.getUser(e.ownerId)),
        l = (0, a.e7)([j.Z], () => {
            var n;
            return null == (n = j.Z.getMessage(e.id)) ? void 0 : n.firstMessage;
        }),
        u = (0, m.Sw)(null != (n = null == l ? void 0 : l.author) ? n : t, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && b.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: t,
            author: u
        }
    );
}
function $(e) {
    var n, t;
    let r = C.default.getUser(e.ownerId),
        l = null == (n = j.Z.getMessage(e.id)) ? void 0 : n.firstMessage,
        u = (0, m.ij)(null != (t = null == l ? void 0 : l.author) ? t : r, e);
    return {
        user: r,
        author: u
    };
}
function ee(e) {
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
        o = (0, A.eL)(n, i),
        d = (0, A.vg)(n, i);
    return {
        hasSpoilerEmbeds: i,
        content: a,
        firstMedia: o,
        firstMediaIsEmbed: d
    };
}
function en(e) {
    return (0, a.e7)([O.Z], () => O.Z.can(F.Plq.MANAGE_CHANNELS, e));
}
let et = {
    isNew: !1,
    hasUnreads: !1
};
function er(e) {
    return (0, a.cj)([M.Z, S.ZP], () => {
        var n;
        let t = M.Z.getGuild(null != (n = e.getGuildId()) ? n : F.lds);
        return null == t ? et : (0, k.FS)(e, t, [S.ZP]);
    });
}
function el(e) {
    return r.useMemo(() => (null == e || null == e.template ? '' : e.template.trim()), [e]);
}
function eu(e) {
    let n = (0, a.e7)([O.Z], () => O.Z.can(F.Plq.MANAGE_THREADS, e));
    return r.useMemo(() => {
        var t;
        let r = [...(null != (t = null == e ? void 0 : e.availableTags) ? t : [])];
        return n || (r = r.filter((e) => !e.moderated)), r;
    }, [n, null == e ? void 0 : e.availableTags]);
}
function ei(e, n) {
    let t = eu((0, a.e7)([P.Z], () => P.Z.getChannel(null == e ? void 0 : e.parent_id), [e]));
    return r.useMemo(() => n.filter((e) => t.includes(e)), [n, t]);
}
function ea(e) {
    return (0, a.e7)([O.Z], () => O.Z.can(F.Plq.READ_MESSAGE_HISTORY, e));
}
function eo(e) {
    return (0, a.e7)([O.Z], () => O.Z.can(F.Plq.READ_MESSAGE_HISTORY, e));
}
function ed(e) {
    let { channelId: n } = e;
    return (0, a.cj)([R.Z], () => ({
        isSearchLoading: R.Z.getSearchLoading(n),
        searchQuery: R.Z.getSearchQuery(n),
        searchResults: R.Z.getSearchResults(n)
    }));
}
function es(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { isSearchLoading: l, searchQuery: u } = ed({ channelId: e.id }),
        i = ea(e),
        a = r.useRef(null),
        o = r.useRef(new Set());
    r.useEffect(() => {
        if (null == u && null != a.current) {
            y.Z.clearForumSearch(e.id), (a.current = null);
            return;
        }
        if (null == u || 0 === u.length || t) return;
        if (!i) return void y.Z.clearForumSearch(e.id);
        if ((a.current === u && o.current === n) || l) return;
        let r = setTimeout(async () => {
            (a.current = u), (o.current = n);
            try {
                await y.Z.searchForumPosts(e.guild_id, e.id, u, n);
            } catch (e) {}
        }, 350);
        return () => clearTimeout(r);
    }, [i, e.guild_id, e.id, t, l, u, n]);
}
function ec(e, n) {
    return (0, a.e7)([h.Z, S.ZP, P.Z], () => {
        let t = P.Z.getChannel(n);
        if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
        let r = h.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            l = h.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
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
function ef(e) {
    let { channel: n, sortOrder: t, tagFilter: l, shouldAutomaticallyAck: u } = e,
        i = (0, a.Wu)([w.Z], () => w.Z.getThreadIds(n.id, t, l)),
        o = ec(n.guild_id, n.id),
        s = (0, a.e7)([w.Z], () => u && (o > 0 || w.Z.getCanAckThreads()), [u, o]);
    return (
        r.useEffect(() => {
            s && (0, d.U6)(n);
        }, [n, s]),
        i
    );
}

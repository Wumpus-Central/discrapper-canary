n.d(t, {
    AJ: () => et,
    Bs: () => $,
    ES: () => Y,
    IN: () => J,
    J$: () => ea,
    MC: () => en,
    Vm: () => el,
    XZ: () => ef,
    eV: () => q,
    eZ: () => ed,
    iM: () => X,
    jR: () => eu,
    kF: () => W,
    kn: () => ec,
    ku: () => ep,
    mX: () => er,
    n2: () => eh,
    nP: () => ee,
    ql: () => es,
    r_: () => ei,
    vP: () => em,
    xw: () => Q,
}),
    n(388685),
    n(583741),
    n(781311);
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(683860),
    s = n(442837),
    l = n(570140),
    c = n(45114),
    u = n(493773),
    d = n(339085),
    f = n(905405),
    _ = n(937889),
    p = n(739566),
    h = n(982168),
    m = n(601070),
    g = n(344185),
    E = n(723774),
    b = n(144140),
    y = n(91159),
    O = n(592125),
    v = n(720202),
    I = n(430824),
    T = n(496675),
    S = n(306680),
    A = n(594174),
    N = n(823379),
    C = n(709054),
    R = n(883429),
    P = n(238349),
    w = n(368844),
    D = n(660189),
    L = n(581036),
    x = n(208970),
    M = n(882252),
    k = n(710352),
    j = n(981631),
    U = n(176505),
    G = n(124368);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = 180;
function Y(e, t, n, i) {
    let o = (0, s.e7)([g.Z], () => g.Z.hasLoaded(e.guild_id));
    r.useEffect(() => {
        if (!o) return;
        let r = P.Z.getThreadIds(e.id, t, n, i),
            a = L.Z.getThreadIdsMissingCounts(e.guild_id, r)
                .filter((e) => (0, M.nU)(e, [S.ZP]))
                .slice(0, H)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: S.ZP.getTrackedAckMessageId(e),
                }));
        a.length > 0 &&
            l.Z.dispatch({
                type: "REQUEST_FORUM_UNREADS",
                guildId: e.guild_id,
                channelId: e.id,
                threads: a,
            });
    }, [e.id, e.guild_id, o, n, t, i]);
}
function W(e) {
    return (0, s.e7)([g.Z, O.Z], () => {
        let t = o()(g.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var t;
                return (null == (t = O.Z.getChannel(e)) ? void 0 : t.hasFlag(U.zZ.PINNED)) === !0;
            })
            .head();
        return O.Z.getChannel(t);
    });
}
function K(e) {
    let t = null == e ? void 0 : e.parent_id;
    return (0, s.cj)([O.Z], () => {
        var e;
        let n = O.Z.getChannel(t);
        return (null != (e = null == n ? void 0 : n.availableTags) ? e : []).reduce(
            (e, t) => V(Z({}, e), { [t.id]: t }),
            {},
        );
    }, [t]);
}
let z = [];
function q(e) {
    let t = K(e);
    return r.useMemo(() => {
        var n, r, i;
        let o =
            null !=
            (i = null == e || null == (r = e.appliedTags) || null == (n = r.map((e) => t[e])) ? void 0 : n.filter(N.lm))
                ? i
                : z;
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.iq)(o) : o;
    }, [t, e]);
}
function X(e, t) {
    let n = (0, s.Wu)([A.default], () => t.map((e) => A.default.getUser(e)).filter(N.lm));
    return (
        (0, u.ZP)(() => {
            n.forEach((t) => {
                v.Z.requestMember(e.guild_id, t.id);
            });
        }),
        n
    );
}
function Q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k.R6.DURATION_AGO,
        i = r.useMemo(() => C.default.extractTimestamp(e.id), [e.id]),
        o = (0, y.Ok)(e),
        s = r.useMemo(() => (0, M.Uw)(t, n), [t, n]);
    return r.useMemo(() => (t === a.z.CREATION_DATE ? (0, y.Ye)(i, s) : (0, y.Ye)(o, s)), [o, t, i, s]);
}
function J(e) {
    return r.useMemo(() => {
        var t;
        return o().maxBy(null != (t = null == e ? void 0 : e.reactions) ? t : [], (e) =>
            Math.max(e.burst_count, e.count),
        );
    }, [null == e ? void 0 : e.reactions]);
}
function $(e) {
    let t = null == e ? void 0 : e.defaultReactionEmoji,
        n = (0, s.e7)([d.ZP], () =>
            (null == t ? void 0 : t.emojiId) != null ? d.ZP.getUsableCustomEmojiById(t.emojiId) : null,
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
function ee(e) {
    let t = (0, s.e7)([b.Z], () => {
            var t;
            return null != (t = b.Z.getCount(e.id)) ? t : 0;
        }),
        n = (0, E.lE)(t, e.id),
        r = (0, s.e7)([S.ZP], () => (0, M.nU)(e.id, [S.ZP])),
        i = (0, s.e7)([L.Z], () => {
            if (!r) return null;
            let n = L.Z.getCount(e.id);
            if (null == n || !(n > 0)) return "1+";
            {
                let e = Math.min(n, t);
                return e >= G.dg ? "".concat(G.dg, "+") : e;
            }
        });
    return {
        messageCount: t,
        isMaxMessageCount: null != t && "".concat(t) !== n,
        messageCountText: n,
        unreadCount: i,
    };
}
function et(e) {
    var t;
    let n = (0, s.e7)([A.default], () => A.default.getUser(e.ownerId)),
        i = (0, s.e7)([D.Z], () => {
            var t;
            return null == (t = D.Z.getMessage(e.id)) ? void 0 : t.firstMessage;
        }),
        o = (0, p.Sw)(null != (t = null == i ? void 0 : i.author) ? t : n, e);
    return (
        r.useEffect(() => {
            null != e.ownerId && v.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: n,
            author: o,
        }
    );
}
function en(e) {
    var t, n;
    let r = A.default.getUser(e.ownerId),
        i = null == (t = D.Z.getMessage(e.id)) ? void 0 : t.firstMessage,
        o = (0, p.ij)(null != (n = null == i ? void 0 : i.author) ? n : r, e);
    return {
        user: r,
        author: o,
    };
}
function er(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: i = !0 } = e,
        o = (0, f.p)(),
        { hasSpoilerEmbeds: a, content: s } = r.useMemo(
            () =>
                (null == t ? void 0 : t.content) != null && "" !== t.content
                    ? (0, _.ZP)(t, {
                          formatInline: n,
                          noStyleAndInteraction: i,
                          allowHeading: !0,
                          allowList: !0,
                          shouldFilterKeywords: o,
                      })
                    : {
                          hasSpoilerEmbeds: !1,
                          content: null,
                      },
            [t, n, i, o],
        ),
        l = (0, w.eL)(t, a),
        c = (0, w.vg)(t, a);
    return {
        hasSpoilerEmbeds: a,
        content: s,
        firstMedia: l,
        firstMediaIsEmbed: c,
    };
}
function ei(e) {
    return (0, s.e7)([T.Z], () => T.Z.can(j.Plq.MANAGE_CHANNELS, e));
}
let eo = {
    isNew: !1,
    hasUnreads: !1,
};
function ea(e) {
    return (0, s.cj)([I.Z, S.ZP], () => {
        var t;
        let n = I.Z.getGuild(null != (t = e.getGuildId()) ? t : j.lds);
        return null == n ? eo : (0, M.FS)(e, n, [S.ZP]);
    });
}
function es(e) {
    return r.useMemo(() => (null == e || null == e.template ? "" : e.template.trim()), [e]);
}
function el(e) {
    let t = (0, s.e7)([T.Z], () => T.Z.can(j.Plq.MANAGE_THREADS, e));
    return r.useMemo(() => {
        var n;
        let r = [...(null != (n = null == e ? void 0 : e.availableTags) ? n : [])];
        return t || (r = r.filter((e) => !e.moderated)), r;
    }, [t, null == e ? void 0 : e.availableTags]);
}
function ec(e, t) {
    let n = el((0, s.e7)([O.Z], () => O.Z.getChannel(null == e ? void 0 : e.parent_id), [e]));
    return r.useMemo(() => {
        let r = t.filter((e) => n.includes(e));
        return (null == e ? void 0 : e.isModeratorReportChannel()) ? (0, h.iq)(r) : r;
    }, [t, n, e]);
}
function eu(e) {
    return (0, s.e7)([T.Z], () => T.Z.can(j.Plq.READ_MESSAGE_HISTORY, e));
}
function ed(e) {
    return (0, s.e7)([T.Z], () => T.Z.can(j.Plq.READ_MESSAGE_HISTORY, e));
}
function ef(e) {
    let { channelId: t } = e;
    return (0, s.cj)([x.Z], () => ({
        isSearchLoading: x.Z.getSearchLoading(t),
        searchQuery: x.Z.getSearchQuery(t),
        searchResults: x.Z.getSearchResults(t),
    }));
}
let e_ = 350;
function ep(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { isSearchLoading: o, searchQuery: a } = ef({ channelId: e.id }),
        s = eu(e),
        l = r.useRef(null),
        c = r.useRef(new Set());
    r.useEffect(() => {
        if (null == a && null != l.current) {
            R.Z.clearForumSearch(e.id), (l.current = null);
            return;
        }
        if (null == a || 0 === a.length || i) return;
        if (!s) return void R.Z.clearForumSearch(e.id);
        if ((l.current === a && c.current === t) || o) return;
        let r = setTimeout(async () => {
            (l.current = a), (c.current = t);
            try {
                await R.Z.searchForumPosts(e.guild_id, e.id, a, t, n);
            } catch (e) {}
        }, e_);
        return () => clearTimeout(r);
    }, [s, e.guild_id, e.id, i, o, a, t, n]);
}
function eh(e, t) {
    return (0, s.e7)([m.Z, S.ZP, O.Z], () => {
        let n = O.Z.getChannel(t);
        if (!(null == n ? void 0 : n.isForumLikeChannel())) return 0;
        let r = m.Z.getActiveJoinedUnreadThreadsForParent(e, t),
            i = m.Z.getActiveUnjoinedUnreadThreadsForParent(e, t),
            o = S.ZP.ackMessageId(t),
            a = 0;
        if (null == o) return a;
        for (let e in r) {
            let t = r[e],
                n = S.ZP.lastMessageId(t.channel.id);
            null != n && n > o && a++;
        }
        for (let e in i) {
            let t = i[e],
                n = S.ZP.lastMessageId(t.id);
            null != n && n > o && a++;
        }
        return a;
    });
}
function em(e) {
    let { channel: t, sortOrder: n, tagFilter: i, tagSetting: o, shouldAutomaticallyAck: a } = e,
        l = (0, s.Wu)([P.Z], () => P.Z.getThreadIds(t.id, n, i, o)),
        u = eh(t.guild_id, t.id),
        d = (0, s.e7)([P.Z], () => a && (u > 0 || P.Z.getCanAckThreads()), [a, u]);
    return (
        r.useEffect(() => {
            d &&
                (0, c.U6)(t, {
                    object: j.qAy.ACK_FORUM_ACTIVE_THREADS,
                    objectType: j.Qqv.ACK_AUTOMATIC,
                });
        }, [t, d]),
        l
    );
}

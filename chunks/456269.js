t.d(n, {
    AJ: () => K,
    Bs: () => J,
    ES: () => Y,
    Eg: () => x,
    IN: () => B,
    J$: () => el,
    MC: () => $,
    O2: () => G,
    Vm: () => ei,
    W3: () => H,
    XZ: () => eo,
    eV: () => W,
    eZ: () => ed,
    iM: () => X,
    jR: () => ea,
    kF: () => q,
    kn: () => er,
    ku: () => es,
    mX: () => ee,
    n2: () => ec,
    nP: () => V,
    ql: () => eu,
    r_: () => en,
    vP: () => ef,
    xw: () => z
}),
    t(47120),
    t(724458);
var l = t(192379),
    u = t(392711),
    i = t.n(u),
    r = t(683860),
    a = t(442837),
    d = t(570140),
    o = t(45114),
    s = t(493773),
    c = t(339085),
    f = t(987170),
    g = t(905405),
    Z = t(937889),
    m = t(739566),
    h = t(601070),
    v = t(344185),
    E = t(723774),
    _ = t(144140),
    M = t(91159),
    C = t(592125),
    T = t(720202),
    I = t(430824),
    S = t(496675),
    P = t(306680),
    A = t(594174),
    p = t(823379),
    N = t(709054),
    R = t(883429),
    U = t(238349),
    w = t(368844),
    b = t(660189),
    k = t(581036),
    F = t(208970),
    O = t(882252),
    j = t(710352),
    L = t(981631),
    y = t(176505),
    D = t(124368);
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
    return (function (e) {
        let n = (0, a.e7)([I.Z], () => I.Z.getGuild(e));
        return (
            G.useExperiment(
                {
                    guildId: e,
                    location: '553713_1'
                },
                { autoTrackExposure: !1 }
            ).enabled || !!((null == n ? void 0 : n.hasFeature(L.oNc.COMMUNITY)) || (null == n ? void 0 : n.hasFeature(L.oNc.INTERNAL_EMPLOYEE_ONLY)))
        );
    })(e);
}
function Y(e, n, t) {
    let u = (0, a.e7)([v.Z], () => v.Z.hasLoaded(e.guild_id));
    l.useEffect(() => {
        if (!u) return;
        let l = U.Z.getThreadIds(e.id, n, t),
            i = k.Z.getThreadIdsMissingCounts(e.guild_id, l)
                .filter((e) => (0, O.nU)(e, [P.ZP]))
                .slice(0, 180)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: P.ZP.getTrackedAckMessageId(e)
                }));
        i.length > 0 &&
            d.Z.dispatch({
                type: 'REQUEST_FORUM_UNREADS',
                guildId: e.guild_id,
                channelId: e.id,
                threads: i
            });
    }, [e.id, e.guild_id, u, t, n]);
}
function q(e) {
    return (0, a.e7)([v.Z, C.Z], () => {
        let n = i()(v.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var n;
                return (null === (n = C.Z.getChannel(e)) || void 0 === n ? void 0 : n.hasFlag(y.zZ.PINNED)) === !0;
            })
            .head();
        return C.Z.getChannel(n);
    });
}
let Q = [];
function W(e) {
    let n = (function (e) {
        let n = null == e ? void 0 : e.parent_id;
        return (0, a.cj)(
            [C.Z],
            () => {
                var e;
                let t = C.Z.getChannel(n);
                return (null !== (e = null == t ? void 0 : t.availableTags) && void 0 !== e ? e : []).reduce(
                    (e, n) => ({
                        ...e,
                        [n.id]: n
                    }),
                    {}
                );
            },
            [n]
        );
    })(e);
    return l.useMemo(() => {
        var t, l, u;
        return null !== (u = null == e ? void 0 : null === (l = e.appliedTags) || void 0 === l ? void 0 : null === (t = l.map((e) => n[e])) || void 0 === t ? void 0 : t.filter(p.lm)) && void 0 !== u ? u : Q;
    }, [n, null == e ? void 0 : e.appliedTags]);
}
function X(e, n) {
    let t = (0, a.Wu)([A.default], () => n.map((e) => A.default.getUser(e)).filter(p.lm));
    return (
        (0, s.Z)(() => {
            t.forEach((n) => {
                T.Z.requestMember(e.guild_id, n.id);
            });
        }),
        t
    );
}
function z(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j.R6.DURATION_AGO,
        u = l.useMemo(() => N.default.extractTimestamp(e.id), [e.id]),
        i = (0, M.Ok)(e),
        a = l.useMemo(() => (0, O.Uw)(n, t), [n, t]);
    return l.useMemo(() => (n === r.z.CREATION_DATE ? (0, M.Ye)(u, a) : (0, M.Ye)(i, a)), [i, n, u, a]);
}
function B(e) {
    return l.useMemo(() => {
        var n;
        return i().maxBy(null !== (n = null == e ? void 0 : e.reactions) && void 0 !== n ? n : [], (e) => Math.max(e.burst_count, e.count));
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
    let n = (0, a.e7)([_.Z], () => {
            var n;
            return null !== (n = _.Z.getCount(e.id)) && void 0 !== n ? n : 0;
        }),
        t = (0, E.lE)(n, e.id),
        l = (0, a.e7)([P.ZP], () => (0, O.nU)(e.id, [P.ZP])),
        u = (0, a.e7)([k.Z], () => {
            if (!l) return null;
            let t = k.Z.getCount(e.id);
            if (null == t || !(t > 0)) return '1+';
            {
                let e = Math.min(t, n);
                return e >= D.dg ? ''.concat(D.dg, '+') : e;
            }
        });
    return {
        messageCount: n,
        isMaxMessageCount: null != n && ''.concat(n) !== t,
        messageCountText: t,
        unreadCount: u
    };
}
function K(e) {
    var n;
    let t = (0, a.e7)([A.default], () => A.default.getUser(e.ownerId)),
        u = (0, a.e7)([b.Z], () => {
            var n;
            return null === (n = b.Z.getMessage(e.id)) || void 0 === n ? void 0 : n.firstMessage;
        }),
        i = (0, m.Sw)(null !== (n = null == u ? void 0 : u.author) && void 0 !== n ? n : t, e);
    return (
        l.useEffect(() => {
            null != e.ownerId && T.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: t,
            author: i
        }
    );
}
function $(e) {
    var n, t;
    let l = A.default.getUser(e.ownerId),
        u = null === (n = b.Z.getMessage(e.id)) || void 0 === n ? void 0 : n.firstMessage,
        i = (0, m.ij)(null !== (t = null == u ? void 0 : u.author) && void 0 !== t ? t : l, e);
    return {
        user: l,
        author: i
    };
}
function ee(e) {
    let { firstMessage: n, formatInline: t = !0, noStyleAndInteraction: u = !0 } = e,
        i = (0, g.p)(),
        { hasSpoilerEmbeds: r, content: a } = l.useMemo(
            () =>
                (null == n ? void 0 : n.content) != null && '' !== n.content
                    ? (0, Z.ZP)(n, {
                          formatInline: t,
                          noStyleAndInteraction: u,
                          allowHeading: !0,
                          allowList: !0,
                          shouldFilterKeywords: i
                      })
                    : {
                          hasSpoilerEmbeds: !1,
                          content: null
                      },
            [n, t, u, i]
        ),
        d = (0, w.eL)(n, r),
        o = (0, w.vg)(n, r);
    return {
        hasSpoilerEmbeds: r,
        content: a,
        firstMedia: d,
        firstMediaIsEmbed: o
    };
}
function en(e) {
    return (0, a.e7)([S.Z], () => S.Z.can(L.Plq.MANAGE_CHANNELS, e));
}
let et = {
    isNew: !1,
    hasUnreads: !1
};
function el(e) {
    return (0, a.cj)([I.Z, P.ZP], () => {
        var n;
        let t = I.Z.getGuild(null !== (n = e.getGuildId()) && void 0 !== n ? n : L.lds);
        return null == t ? et : (0, O.FS)(e, t, [P.ZP]);
    });
}
function eu(e) {
    return l.useMemo(() => (null == e ? '' : null == e.template ? '' : e.template.trim()), [e]);
}
function ei(e) {
    let n = (0, a.e7)([S.Z], () => S.Z.can(L.Plq.MANAGE_THREADS, e));
    return l.useMemo(() => {
        var t;
        let l = [...(null !== (t = null == e ? void 0 : e.availableTags) && void 0 !== t ? t : [])];
        return n || (l = l.filter((e) => !e.moderated)), l;
    }, [n, null == e ? void 0 : e.availableTags]);
}
function er(e, n) {
    let t = ei((0, a.e7)([C.Z], () => C.Z.getChannel(null == e ? void 0 : e.parent_id), [e]));
    return l.useMemo(() => n.filter((e) => t.includes(e)), [n, t]);
}
function ea(e) {
    return (0, a.e7)([S.Z], () => S.Z.can(L.Plq.READ_MESSAGE_HISTORY, e));
}
function ed(e) {
    return (0, a.e7)([S.Z], () => S.Z.can(L.Plq.READ_MESSAGE_HISTORY, e));
}
function eo(e) {
    let { channelId: n } = e;
    return (0, a.cj)([F.Z], () => ({
        isSearchLoading: F.Z.getSearchLoading(n),
        searchQuery: F.Z.getSearchQuery(n),
        searchResults: F.Z.getSearchResults(n)
    }));
}
function es(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { isSearchLoading: u, searchQuery: i } = eo({ channelId: e.id }),
        r = ea(e),
        a = l.useRef(null),
        d = l.useRef(new Set());
    l.useEffect(() => {
        if (null == i && null != a.current) {
            R.Z.clearForumSearch(e.id), (a.current = null);
            return;
        }
        if (null == i || 0 === i.length || t) return;
        if (!r) {
            R.Z.clearForumSearch(e.id);
            return;
        }
        if ((a.current === i && d.current === n) || u) return;
        let l = setTimeout(async () => {
            (a.current = i), (d.current = n);
            try {
                await R.Z.searchForumPosts(e.guild_id, e.id, i, n);
            } catch {}
        }, 350);
        return () => clearTimeout(l);
    }, [r, e.guild_id, e.id, t, u, i, n]);
}
function ec(e, n) {
    return (0, a.e7)([h.Z, P.ZP, C.Z], () => {
        let t = C.Z.getChannel(n);
        if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
        let l = h.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            u = h.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
            i = P.ZP.ackMessageId(n),
            r = 0;
        if (null == i) return r;
        for (let e in l) {
            let n = l[e],
                t = P.ZP.lastMessageId(n.channel.id);
            null != t && t > i && r++;
        }
        for (let e in u) {
            let n = u[e],
                t = P.ZP.lastMessageId(n.id);
            null != t && t > i && r++;
        }
        return r;
    });
}
function ef(e) {
    let { channel: n, sortOrder: t, tagFilter: u, shouldAutomaticallyAck: i } = e,
        r = (0, a.Wu)([U.Z], () => U.Z.getThreadIds(n.id, t, u)),
        d = ec(n.guild_id, n.id),
        s = (0, a.e7)([U.Z], () => i && (d > 0 || U.Z.getCanAckThreads()), [i, d]);
    return (
        l.useEffect(() => {
            s && (0, o.U6)(n);
        }, [n, s]),
        r
    );
}

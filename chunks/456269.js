t.d(n, {
    AJ: () => K,
    Bs: () => J,
    ES: () => Y,
    Eg: () => G,
    IN: () => B,
    J$: () => el,
    MC: () => $,
    O2: () => D,
    Vm: () => ei,
    W3: () => H,
    XZ: () => eo,
    eV: () => X,
    eZ: () => ed,
    iM: () => W,
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
    v = t(739566),
    m = t(601070),
    h = t(344185),
    E = t(723774),
    _ = t(144140),
    M = t(91159),
    C = t(592125),
    I = t(720202),
    S = t(430824),
    T = t(496675),
    p = t(306680),
    P = t(594174),
    A = t(823379),
    N = t(709054),
    R = t(883429),
    w = t(238349),
    U = t(368844),
    k = t(660189),
    b = t(581036),
    F = t(208970),
    O = t(882252),
    j = t(710352),
    y = t(981631),
    L = t(176505),
    x = t(124368);
let D = (0, f.Z)({
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
    return D.getCurrentConfig({
        guildId: e,
        location: '553713_2'
    }).enabled;
}
function H(e) {
    return (function (e) {
        let n = (0, a.e7)([S.Z], () => S.Z.getGuild(e));
        return (
            D.useExperiment(
                {
                    guildId: e,
                    location: '553713_1'
                },
                { autoTrackExposure: !1 }
            ).enabled || !!((null == n ? void 0 : n.hasFeature(y.oNc.COMMUNITY)) || (null == n ? void 0 : n.hasFeature(y.oNc.INTERNAL_EMPLOYEE_ONLY)))
        );
    })(e);
}
function Y(e, n, t) {
    let u = (0, a.e7)([h.Z], () => h.Z.hasLoaded(e.guild_id));
    l.useEffect(() => {
        if (!u) return;
        let l = w.Z.getThreadIds(e.id, n, t),
            i = b.Z.getThreadIdsMissingCounts(e.guild_id, l)
                .filter((e) => (0, O.nU)(e, [p.ZP]))
                .slice(0, 180)
                .map((e) => ({
                    threadId: e,
                    ackMessageId: p.ZP.getTrackedAckMessageId(e)
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
    return (0, a.e7)([h.Z, C.Z], () => {
        let n = i()(h.Z.getThreadsForParent(e.guild_id, e.parent_id))
            .keys()
            .filter((e) => {
                var n;
                return (null === (n = C.Z.getChannel(e)) || void 0 === n ? void 0 : n.hasFlag(L.zZ.PINNED)) === !0;
            })
            .head();
        return C.Z.getChannel(n);
    });
}
let Q = [];
function X(e) {
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
        return null !== (u = null == e ? void 0 : null === (l = e.appliedTags) || void 0 === l ? void 0 : null === (t = l.map((e) => n[e])) || void 0 === t ? void 0 : t.filter(A.lm)) && void 0 !== u ? u : Q;
    }, [n, null == e ? void 0 : e.appliedTags]);
}
function W(e, n) {
    let t = (0, a.Wu)([P.default], () => n.map((e) => P.default.getUser(e)).filter(A.lm));
    return (
        (0, s.ZP)(() => {
            t.forEach((n) => {
                I.Z.requestMember(e.guild_id, n.id);
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
        l = (0, a.e7)([p.ZP], () => (0, O.nU)(e.id, [p.ZP])),
        u = (0, a.e7)([b.Z], () => {
            if (!l) return null;
            let t = b.Z.getCount(e.id);
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
        unreadCount: u
    };
}
function K(e) {
    var n;
    let t = (0, a.e7)([P.default], () => P.default.getUser(e.ownerId)),
        u = (0, a.e7)([k.Z], () => {
            var n;
            return null === (n = k.Z.getMessage(e.id)) || void 0 === n ? void 0 : n.firstMessage;
        }),
        i = (0, v.Sw)(null !== (n = null == u ? void 0 : u.author) && void 0 !== n ? n : t, e);
    return (
        l.useEffect(() => {
            null != e.ownerId && I.Z.requestMember(e.guild_id, e.ownerId);
        }, [e.guild_id, e.ownerId]),
        {
            user: t,
            author: i
        }
    );
}
function $(e) {
    var n, t;
    let l = P.default.getUser(e.ownerId),
        u = null === (n = k.Z.getMessage(e.id)) || void 0 === n ? void 0 : n.firstMessage,
        i = (0, v.ij)(null !== (t = null == u ? void 0 : u.author) && void 0 !== t ? t : l, e);
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
        d = (0, U.eL)(n, r),
        o = (0, U.vg)(n, r);
    return {
        hasSpoilerEmbeds: r,
        content: a,
        firstMedia: d,
        firstMediaIsEmbed: o
    };
}
function en(e) {
    return (0, a.e7)([T.Z], () => T.Z.can(y.Plq.MANAGE_CHANNELS, e));
}
let et = {
    isNew: !1,
    hasUnreads: !1
};
function el(e) {
    return (0, a.cj)([S.Z, p.ZP], () => {
        var n;
        let t = S.Z.getGuild(null !== (n = e.getGuildId()) && void 0 !== n ? n : y.lds);
        return null == t ? et : (0, O.FS)(e, t, [p.ZP]);
    });
}
function eu(e) {
    return l.useMemo(() => (null == e ? '' : null == e.template ? '' : e.template.trim()), [e]);
}
function ei(e) {
    let n = (0, a.e7)([T.Z], () => T.Z.can(y.Plq.MANAGE_THREADS, e));
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
    return (0, a.e7)([T.Z], () => T.Z.can(y.Plq.READ_MESSAGE_HISTORY, e));
}
function ed(e) {
    return (0, a.e7)([T.Z], () => T.Z.can(y.Plq.READ_MESSAGE_HISTORY, e));
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
    return (0, a.e7)([m.Z, p.ZP, C.Z], () => {
        let t = C.Z.getChannel(n);
        if (!(null == t ? void 0 : t.isForumLikeChannel())) return 0;
        let l = m.Z.getActiveJoinedUnreadThreadsForParent(e, n),
            u = m.Z.getActiveUnjoinedUnreadThreadsForParent(e, n),
            i = p.ZP.ackMessageId(n),
            r = 0;
        if (null == i) return r;
        for (let e in l) {
            let n = l[e],
                t = p.ZP.lastMessageId(n.channel.id);
            null != t && t > i && r++;
        }
        for (let e in u) {
            let n = u[e],
                t = p.ZP.lastMessageId(n.id);
            null != t && t > i && r++;
        }
        return r;
    });
}
function ef(e) {
    let { channel: n, sortOrder: t, tagFilter: u, shouldAutomaticallyAck: i } = e,
        r = (0, a.Wu)([w.Z], () => w.Z.getThreadIds(n.id, t, u)),
        d = ec(n.guild_id, n.id),
        s = (0, a.e7)([w.Z], () => i && (d > 0 || w.Z.getCanAckThreads()), [i, d]);
    return (
        l.useEffect(() => {
            s && (0, o.U6)(n);
        }, [n, s]),
        r
    );
}

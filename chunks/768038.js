"use strict";
let i;
n.d(t, { Ay: () => eR, zy: () => eE, L3: () => eg, X3: () => ef }), n(321073), n(667532);
var r = n(91871),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(896170),
    d = n(329308),
    _ = n(989133),
    u = n(47167),
    c = n(734057),
    E = n(652215);
function h(e) {
    if (null == e.parent_id)
        if (e.type === E.rbe.GUILD_CATEGORY) return (e.position + 1) * 1e3;
        else return e.position;
    {
        let t = ((c.A.getChannel(e.parent_id)?.position ?? 0) + 1) * 1e3;
        return e.isGuildVocal() ? t + e.position + 500 : t + e.position;
    }
}
function m(e, t) {
    if (e.score !== t.score) return t.score - e.score;
    let n = h(e.record),
        i = h(t.record);
    if (n !== i) return n - i;
    let r = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
        s = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
    return r < s ? -1 : +(r > s);
}
var f = n(626584),
    g = n(159273),
    p = n(202776),
    A = n(473529),
    I = n(69945),
    T = n(796774),
    S = n(209932),
    N = n(147472),
    C = n(361670),
    R = n(931959),
    O = n(750385),
    y = n(194004),
    v = n(695633),
    D = n(152007),
    L = n(594061),
    b = n(95701),
    w = n(34457),
    P = n(889227),
    k = n(205761),
    M = n(808728),
    U = n(696451),
    x = n(317525),
    G = n(71393),
    V = n(232835),
    F = n(576705),
    B = n(290863),
    H = n(994500),
    j = n(309010),
    W = n(967198),
    Y = n(287809),
    K = n(67480),
    z = n(583613),
    $ = n(403362),
    q = n(860689),
    X = n(695184),
    Z = n(488926),
    Q = n(257120),
    J = n(935208),
    ee = n(240248),
    et = n(427262),
    en = n(926140),
    ei = n(746080),
    er = n(985018);
let es = new f.A("AutocompleteUtils"),
    ea = () => !0,
    eo = /(\t|\s)/,
    el = [],
    ed = (i = n(966382).A).MENTION_EVERYONE,
    e_ = i.MENTION_HERE,
    eu = i.MENTION_TIMESTAMP,
    ec = i.LAUNCHABLE_APPLICATIONS;
function eE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return 1e3 * e * (t ?? 1);
}
class eh {
    lastFrecencyVersion = null;
    lastRelationshipVersion = null;
    lastPrivateChannelsVersion = null;
    cache = new Map();
    get(e) {
        this.isStale() && this.cache.clear();
        let t = this.cache.get(e);
        if (null != t) return t;
        let n = this.build(e);
        return this.cache.set(e, n), n;
    }
    isStale() {
        let e = k.A.getVersion(),
            t = H.A.getVersion(),
            n = c.A.getPrivateChannelsVersion();
        return (
            (this.lastFrecencyVersion !== e ||
                this.lastRelationshipVersion !== t ||
                this.lastPrivateChannelsVersion !== n) &&
            ((this.lastFrecencyVersion = e),
            (this.lastRelationshipVersion = t),
            (this.lastPrivateChannelsVersion = n),
            !0)
        );
    }
    build(e) {
        let t = k.A.getFrequentlyWithoutFetchingLatest(),
            n = t.reduce((e, t) => {
                let { id: n } = t,
                    i = k.A.getScoreWithoutFetchingLatest(n);
                return i > e ? i : e;
            }, 0),
            i = [];
        switch (e) {
            case en.rD.GUILD:
                i = t.filter((e) => (0, q.fh)(e));
                break;
            case en.rD.USER:
                i = t.filter((e) => e instanceof b.YB && e.type === E.rbe.DM);
                break;
            case en.rD.GROUP_DM:
                i = t.filter((e) => e instanceof b.YB && e.isMultiUserDM());
                break;
            case en.rD.TEXT_CHANNEL:
                i = t.filter((e) => e instanceof b.YB && (0, b.tr)(e.type));
                break;
            case en.rD.VOICE_CHANNEL:
                i = t.filter((e) => e instanceof b.YB && e.isGuildVocal());
        }
        let r = {};
        for (let t of i) {
            let { id: i } = t,
                s = k.A.getScoreWithoutFetchingLatest(i);
            if (e === en.rD.USER && t instanceof b.cq) {
                if (t.type === E.rbe.DM) r[(i = t.getRecipientId())] = 1 + s / n;
                else if (t.type === E.rbe.GROUP_DM) {
                    let e = t.recipients.length;
                    for (let i of t.recipients) r[i] = 1 + (s / n) * (1 / e);
                }
            } else r[i] = 1 + s / n;
        }
        for (let e of H.A.getFriendIDs()) r[e] = (r[e] ?? 1) + 0.2;
        for (let e of c.A.getDMUserIds()) r[e] = (r[e] ?? 1) + 0.1;
        return r;
    }
}
let em = new eh();
function ef(e) {
    return em.get(e);
}
let eg = [M.I6, M.vM, E.rbe.GUILD_CATEGORY];
function ep(e, t) {
    let { exactQuery: n, containQuery: i, queryLower: r } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === r) return 10;
            return 7;
        }
        if (i.test(e)) return 5;
        if (r.split(/(?:,| )+/).every((t) => RegExp(Q.A.escape(t), "i").test(e))) return 3;
        if (a && s()(r, e)) return 1;
    } catch (e) {
        es.error(e);
    }
    return 0;
}
function eA(e) {
    return e?.joinedAt != null && !e.isPending;
}
function eI(e) {
    if (null == e) return [null, null];
    let t = (0, ee.sS)(e),
        n = (0, ee.S8)(t);
    return [t, n];
}
function eT(e) {
    let { query: t, members: n, limit: i, filter: r, allowSnowflake: a, boosters: o } = e,
        l = Y.default.getUsers(),
        d = W.A.getGuildId(),
        u = t.toLocaleLowerCase(),
        c = (0, ee.S8)(u),
        E = [],
        h = [],
        m = n.length,
        f = 0,
        g = 0;
    for (; f < m; ) {
        let e,
            i,
            _ = n[f];
        _ instanceof P.A
            ? ((i = _), (e = U.Ay.getNick(d, i.id)?.toLocaleLowerCase()))
            : ((e = _.nick?.toLocaleLowerCase()), (i = l[_.userId]));
        let m = et.Ay.getGlobalName(i)?.toLocaleLowerCase();
        if (null != i && (null == r || r(i))) {
            let n = i.username.toLocaleLowerCase(),
                r = (0, ee.sS)(n),
                l = (0, ee.S8)(r),
                [d, _] = eI(e),
                [f, p] = eI(m);
            (a && t === i.id) ||
            n.substring(0, u.length) === u ||
            r.substring(0, u.length) === u ||
            e?.substring(0, u.length) === u ||
            d?.substring(0, u.length) === u ||
            m?.substring(0, u.length) === u ||
            f?.substring(0, u.length) === u
                ? E.push({
                      type: en.rD.USER,
                      record: i,
                      score: eE(10, o?.[i.id]),
                      comparator: m ?? e ?? n,
                      sortable: f ?? d ?? r,
                  })
                : l.substring(0, c.length) === c || _?.substring(0, c.length) === c || p?.substring(0, c.length) === c
                  ? E.push({
                        type: en.rD.USER,
                        record: i,
                        score: eE(1, o?.[i.id]),
                        comparator: m ?? e ?? n,
                        sortable: f ?? d ?? r,
                    })
                  : g < 50 &&
                    (s()(u, r) ||
                        s()(c, l) ||
                        (null != d && s()(u, d)) ||
                        (null != _ && s()(c, _)) ||
                        (null != f && s()(u, f)) ||
                        (null != p && s()(c, p))) &&
                    (h.push({
                        type: en.rD.USER,
                        record: i,
                        score: eE(1, o?.[i.id]),
                        comparator: m ?? e ?? n,
                        sortable: f ?? d ?? r,
                    }),
                    (g += 1));
        }
        f += 1;
    }
    return (
        E.sort(_.A),
        E.length < i && (h.sort(_.A), (E = E.concat(h.slice(0, Math.max(0, i - E.length))))),
        E.length > i && (E.length = i),
        E
    );
}
function eS(e, t, n) {
    let i = 0,
        r = null;
    for (let s of t) {
        let t = ep(e, s, n);
        t > i && ((i = t), (r = s));
    }
    return null != r && (r.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(r), 1)), i;
}
function eN(e, t) {
    let n = c.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(V.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Y.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eA(U.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      i = null != t ? U.Ay.getMember(t, e.id) : null;
                  return { type: en.rD.USER, record: e, score: 0, comparator: i?.nick ?? et.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let eC = (0, z.L_)((e, t, n) => {
        let i = new Map(),
            r = new Map(),
            s = [];
        return (
            o()(c.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = Y.default.getUser(t);
                        null == t ||
                            null == n ||
                            i.has(t) ||
                            (i.set(t, e), s.push({ userId: t, nick: H.A.getNickname(t) }), r.set(t, n));
                    }
                }),
            { channelsByRecipientId: i, recipientsById: r, recipients: s }
        );
    }),
    eR = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: i = !0, filter: r } = e;
            return eT({
                query: t,
                members: H.A.getFriendIDs()
                    .map((e) => Y.default.getUser(e))
                    .filter($.Vq),
                limit: n,
                filter: r,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: i } = e;
            return eT({
                query: t,
                members: c.A.getDMUserIds()
                    .map((e) => Y.default.getUser(e))
                    .filter($.Vq),
                limit: n,
                filter: i,
            });
        },
        queryChannelUsers(e) {
            let t,
                {
                    channelId: n,
                    query: i,
                    limit: r = 10,
                    request: s = !0,
                    checkRecentlyTalkedOnEmptyQuery: a = !0,
                    allowSnowflake: o = !1,
                } = e,
                l = c.A.getChannel(n);
            if (null == l) return [];
            let d = (l.isThread() ? c.A.getChannel(l.parent_id) : null) ?? l;
            if (null == d) return [];
            if (d.isPrivate()) {
                t = d.recipients.map((e) => ({ userId: e, nick: H.A.getNickname(e) ?? null }));
                let e = Y.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === i.length && a) {
                    let e = eN(l.id, r);
                    if (e.length > 0) return e;
                }
                (t = U.Ay.getMembers(d.guild_id).filter(eA)), s && X.A.requestMembers(d.guild_id, i, r);
            }
            return eT({
                query: i,
                members: t,
                limit: r,
                filter: (e) => d.isPrivate() || Z.$3({ permission: E.xBc.VIEW_CHANNEL, user: e, context: d }),
                allowSnowflake: o,
            });
        },
        queryGuildUsers(e) {
            let {
                guildId: t,
                query: n,
                limit: i = 10,
                request: r = !0,
                checkRecentlyTalkedOnEmptyQuery: s = !0,
                filter: a,
                allowSnowflake: o,
            } = e;
            if (null == G.A.getGuild(t)) return [];
            if (0 === n.length && s) {
                let e = eN(j.A.getChannelId(t), i);
                if (e.length > 0) return e;
            }
            let l = U.Ay.getMembers(t).filter(eA);
            return (
                r && n.length > 0 && X.A.requestMembers(t, n, i),
                eT({ query: n, members: l, limit: i, filter: a, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: i, limit: r = 10, users: s, allowSnowflake: a } = e;
            return eT({ query: t, members: s, limit: r, filter: n, allowSnowflake: a, boosters: i });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: i, limit: r = 10, request: s = !0 } = e;
            return (
                s && t.length > 0 && X.A.requestMembers(null, t, r),
                this.queryUsers({
                    query: t,
                    limit: r,
                    request: s,
                    filter: n,
                    boosters: i,
                    users: o()(Y.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            var t, n, i;
            let r,
                {
                    query: s,
                    guildId: a,
                    limit: l = E.rs7,
                    fuzzy: d = !0,
                    filter: h = ea,
                    type: m = M.I6,
                    allowEmptyQueries: f = !1,
                    requireVocalConnectAccess: g = !0,
                    boosters: p = {},
                    allowSnowflake: A,
                    includeAllThreads: I,
                } = e,
                T = (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e
                            .split(" ")
                            .filter((e) => "" !== e || t)
                            .map((e) => {
                                let t = e.toLocaleLowerCase();
                                return {
                                    queryLower: t,
                                    exactQuery: RegExp(`^${Q.A.escape(t)}`, "i"),
                                    containQuery: RegExp(Q.A.escape(t), "i"),
                                    isFullMatch: !1,
                                };
                            });
                    if (e.includes(" ")) {
                        let t = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: t,
                            exactQuery: RegExp(`^${Q.A.escape(t).replace(" ", "( |-)")}`, "i"),
                            containQuery: RegExp(Q.A.escape(t).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0,
                        });
                    }
                    return n;
                })(s, f),
                S = m === M.I6 || (m !== M.vM && !!(0, b.fT)(m));
            r =
                null != a
                    ? o()(M.Ay.getChannels(a)[m])
                          .map((e) => e.channel)
                          .concat(S ? (I ? c.A.getAllThreadsForGuild(a) : v.A.computeAllActiveJoinedThreads(a)) : [])
                          .value()
                    : o()(c.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(S ? v.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let N = {},
                C = [],
                R = k.A.getMaxScore();
            for (let e of r) {
                if (
                    ((t = e.type),
                    (n = null != a),
                    !(
                        m === t ||
                        ((n || (0, b.zy)(t)) &&
                            (m === M.I6 ? (0, b.tr)(t) || (0, b.ay)(t) : m === M.vM && (0, b.ay)(t)))
                    ) ||
                        ((0, b.zy)(e.type) && !F.A.can(g ? e.accessPermissions : E.xBc.VIEW_CHANNEL, e)) ||
                        !h(e))
                )
                    continue;
                let r = [...T],
                    o = (0, u.m1)(e, Y.default, H.A).toLocaleLowerCase(),
                    l = A && s === e.id,
                    _ = l ? 10 : eS(o, r, d);
                if (0 !== _) {
                    if (r.length > 0) {
                        for (let t of [
                            (function (e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                return (
                                    null == n &&
                                        (n = t[e.guild_id] = G.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, N),
                            (function (e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                return (
                                    null == n &&
                                        (n = t[e.parent_id] = c.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, N),
                        ]) {
                            if (null == t || "" === t) continue;
                            let e = eS(t, r, !1);
                            0 !== e && (_ += 0.5 * e);
                        }
                        _ = Math.min(6, _);
                    }
                    0 !== _ &&
                        !(r.length > 1) &&
                        (1 !== r.length || r[0].isFullMatch || l) &&
                        ((i = e.type),
                        m === M.I6 && (0, b.ay)(i) && (_ = Math.max(_ - 1, 0.5)),
                        e.isThread() && (e.isActiveThread() || (_ -= 3), D.A.hasJoined(e.id) || (_ -= 5)),
                        (_ = Math.min(
                            _ + 3 * Math.min(k.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / R, 1),
                            _ >= 7 ? 10 : 7,
                        )),
                        C.push({
                            type: (0, b.ay)(e.type) ? en.rD.VOICE_CHANNEL : en.rD.TEXT_CHANNEL,
                            record: e,
                            score: eE(_, p[e.id]),
                            comparator: (0, u.m1)(e, Y.default, H.A),
                            sortable: o,
                        }));
                }
            }
            return C.sort(_.A), null != l && C.length > l && (C.length = l), C;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, allowSnowflake: r, filter: s = ea, boosters: a = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${Q.A.escape(o)}`, "i"),
                    containQuery: RegExp(Q.A.escape(o), "i"),
                    queryLower: o,
                },
                d = [];
            for (let e of G.A.getGuildsArray()) {
                if (!s(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = r && t === e.id ? 10 : ep(n, l, i);
                o > 0 &&
                    d.push({ type: en.rD.GUILD, record: e, score: eE(o, a[e.id]), comparator: e.name, sortable: n });
            }
            return d.sort(_.A), d.length > n && (d.length = n), d;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: i = {} } = e,
                {
                    channelsByRecipientId: r,
                    recipientsById: s,
                    recipients: a,
                } = eC(c.A.getPrivateChannelsVersion(), H.A.getVersion(), Y.default.getUserStoreVersion()),
                o = eT({ query: t, members: a, limit: a.length, boosters: i }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = r.get(e.record.id);
                    null != t &&
                        l.push({
                            type: en.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: et.Ay.getUserTag(s.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(_.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ea, boosters: s = {} } = e,
                a = (0, ee.sS)((0, ee.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${Q.A.escape(a)}`, "i"),
                    containQuery: RegExp(Q.A.escape(a), "i"),
                    queryLower: a,
                },
                d = o()(c.A.getMutablePrivateChannels()).values().value(),
                E = [];
            for (let e of d) {
                if (!e.isMultiUserDM() || !r(e)) continue;
                let t = (0, u.m1)(e, Y.default, H.A).toLocaleLowerCase(),
                    n = (0, ee.sS)((0, ee.S8)(t)),
                    a = ep(n, l, i),
                    o = [];
                for (let t of e.recipients) {
                    let e = Y.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        i = et.Ay.getGlobalName(e),
                        r = H.A.getNickname(t);
                    null != n && o.push(n), null != i && o.push(i), null != r && o.push(r);
                }
                for (let e of o) {
                    let t = Math.min(5, ep((0, ee.sS)((0, ee.S8)(e.toLocaleLowerCase())), l, i));
                    t > a && (a = t);
                }
                a > 0 &&
                    E.push({
                        type: en.rD.GROUP_DM,
                        record: e,
                        score: eE(a, s[e.id]),
                        comparator: (0, u.m1)(e, Y.default, H.A),
                        sortable: n,
                    });
            }
            return E.sort(_.A), E.length > n && (E.length = n), E;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ea } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${Q.A.escape(s)}`, "i"),
                    containQuery: RegExp(Q.A.escape(s), "i"),
                    queryLower: s,
                },
                o = ec(),
                l = [];
            for (let { application: e } of o) {
                if (!r(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ep(t, a, i);
                n > 0 && l.push({ type: en.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(_.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0 } = e,
                r = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${Q.A.escape(r)}`, "i"),
                    containQuery: RegExp(Q.A.escape(r), "i"),
                    queryLower: r,
                },
                a = {
                    [d.t1.SHOP]: [er.intl.string(er.t.pWG4ze)],
                    [d.t1.SHOP_ORBS_TAB]: [
                        er.intl.string(er.t.ElYQFS),
                        er.intl.string(er.t.pWG4ze),
                        er.intl.string(er.t.EBYkzk),
                    ],
                    [d.t1.QUEST_ORBS]: [
                        er.intl.string(er.t.ElYQFS),
                        er.intl.string(er.t["v/R2aC"]),
                        er.intl.string(er.t.qQR4tn),
                    ],
                    [d.t1.NITRO_HOME]: [er.intl.string(er.t.Ipxkog)],
                    [d.t1.QUEST_HOME]: [er.intl.string(er.t.JALI2K)],
                    [d.t1.APPS_HOME]: [er.intl.string(er.t.PHjkRE), er.intl.string(er.t.AKcFUj)],
                    [d.t1.SETTINGS]: [er.intl.string(er.t["3D5yo/"])],
                },
                o = [];
            for (let e in a) {
                let t = d.t1[e],
                    n = a[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = ep(n, s, i);
                        r > 0 &&
                            o.push({
                                type: en.rD.IN_APP_NAVIGATION,
                                record: d.SV.fromType(t),
                                score: eE(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return o.sort(_.A), o.length > n && (o.length = n), o;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ea } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${Q.A.escape(s)}`, "i"),
                    containQuery: RegExp(Q.A.escape(s), "i"),
                    queryLower: s,
                },
                l = o()(K.A.getSKUs()).values().value(),
                d = [];
            for (let e of l)
                if (e.type === E.Puh.DURABLE_PRIMARY && r(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = ep(t, a, i);
                    n > 0 && d.push({ type: en.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return d.sort(_.A), d.length > n && (d.length = n), d;
        },
        getRecentlyTalked: eN,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: i = !1,
                    canMentionHere: r = !0,
                    canMentionUsers: a = !0,
                    canMentionRoles: d = !0,
                    canMentionOtherGlobals: _ = !0,
                    includeAllGuildUsers: u = !1,
                    includeNonMentionableRoles: c = !1,
                    checkRecentlyTalkedOnEmptyQuery: h = !0,
                    limit: m = E.rs7,
                    request: f,
                    allowSnowflake: g = !1,
                } = e,
                p = a
                    ? (u && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: m,
                                checkRecentlyTalkedOnEmptyQuery: h,
                                request: f,
                                allowSnowflake: g,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: m,
                                checkRecentlyTalkedOnEmptyQuery: h,
                                allowSnowflake: g,
                            })
                      ).map((e) => {
                          let { record: t, score: i, comparator: r } = e;
                          return {
                              user: t,
                              score: i,
                              comparator: r,
                              nick: U.Ay.getNick(n.guild_id, t.id),
                              status: B.A.getStatus(t.id),
                          };
                      })
                    : [],
                A = p.length,
                I = t.toLowerCase(),
                T = [];
            if (A < m && d) {
                let e = n.getGuildId(),
                    r = G.A.getGuild(e);
                if (null != r) {
                    let n = o()(x.A.getSortedRoles(r.id))
                        .filter((t) => {
                            let { mentionable: n, name: r, id: a } = t;
                            return (
                                (n || i || c) &&
                                (s()(I, r.toLowerCase()) || (g && I === a)) &&
                                a !== J.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (T = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, m - A)), (A += T.length);
                }
            }
            let S = [];
            return (
                !n.isPrivate() &&
                    i &&
                    d &&
                    (A < m && s()(I, ed().test) && (S.push(ed()), (A += 1)),
                    r && A < m && s()(I, e_().test) && (S.push(e_()), (A += 1))),
                _ &&
                    null != eu &&
                    (((A < m || 0 === I.length) && s()(I, eu().test)) || I === eu().test) &&
                    (A >= m && (T.length > 0 ? T.pop() : p.length > 0 && p.pop()), S.push(eu()), (A += 1)),
                { users: p, globals: S, roles: T }
            );
        },
        queryGuildMentionResults(e) {
            let {
                    query: t,
                    guildId: n,
                    canMentionEveryone: i = !1,
                    canMentionUsers: r = !0,
                    canMentionRoles: a = !0,
                    canMentionNonMentionableRoles: l = !1,
                } = e,
                d = r
                    ? this.queryGuildUsers({ guildId: n, query: t }).map((e) => ({
                          ...e,
                          status: B.A.getStatus(e.record.id),
                      }))
                    : [],
                _ = d.length,
                u = t.toLowerCase(),
                c = [];
            if (_ < E.rs7 && a) {
                let e = G.A.getGuild(n);
                null != e &&
                    (o()(x.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || i || l) && s()(u, e.name.toLowerCase()) && !(0, w.Oy)(e))
                        .take(E.rs7 - _)
                        .forEach((e) => {
                            c.push(e);
                        }),
                    (_ += c.length));
            }
            let h = [];
            return (
                i &&
                    a &&
                    (_ < E.rs7 && s()(u, ed().test) && (h.push(ed()), (_ += 1)),
                    _ < E.rs7 && s()(u, e_().test) && h.push(e_())),
                { users: d, globals: h, roles: c }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: i = 10, fuzzy: r = !0 } = e,
                s = t.toLocaleLowerCase(),
                a = RegExp(`^${Q.A.escape(s)}`, "i"),
                l = RegExp(Q.A.escape(s), "i"),
                d = o()(n)
                    .map((e, t) => {
                        let n = ep(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: a, containQuery: l, queryLower: s },
                            r,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter($.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== i && (d = d.take(i)), d.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                i = t.toLocaleLowerCase(),
                r = {
                    exactQuery: RegExp(`^${Q.A.escape(i)}`, "i"),
                    containQuery: RegExp(Q.A.escape(i), "i"),
                    queryLower: i,
                },
                s = (0, A.K)(n.id) && !n.features.has(E.GuildFeatures.HUB),
                a = n.features.has(E.GuildFeatures.COMMUNITY),
                o = (0, p.u)(n) && n.features.has(E.GuildFeatures.COMMUNITY),
                l = [
                    { id: ei.T4.SERVER_GUIDE, name: er.intl.string(er.t.VbpLyU) },
                    { id: ei.T4.CHANNEL_BROWSER, name: er.intl.string(er.t.et6wav) },
                    { id: ei.T4.CUSTOMIZE_COMMUNITY, name: er.intl.string(er.t.h9mGOP) },
                ],
                d = [];
            for (let e of l)
                (e.id !== ei.T4.SERVER_GUIDE || s) &&
                    (e.id !== ei.T4.CHANNEL_BROWSER || a) &&
                    (e.id !== ei.T4.CUSTOMIZE_COMMUNITY || o) &&
                    ep(e.name.toLocaleLowerCase(), r, !1) > 0 &&
                    d.push(new b.jb({ id: e.id, name: e.name, type: E.rbe.UNKNOWN, guild_id: n.id }));
            return d;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: i = M.I6, channelTypes: r } = e;
            return {
                channels: this.queryChannels({
                    query: t,
                    guildId: n.getGuildId(),
                    limit: void 0,
                    fuzzy: void 0,
                    filter: (e) => null == r || r.includes(e.type),
                    type: i,
                    allowEmptyQueries: !0,
                }).map((e) => e.record),
            };
        },
        queryApplicationCommandChannelResults(e) {
            let { query: t, channel: n, channelTypes: i, limit: r = E.rs7, allowSnowflake: s } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == i || i.includes(n.type)) && e.push(n), { channels: e };
            }
            let a = [];
            for (let e of eg)
                a = a.concat(
                    this.queryChannels({
                        query: t,
                        guildId: n.guild_id,
                        limit: r,
                        fuzzy: !0,
                        filter: (e) => null == i || i.includes(e.type),
                        type: e,
                        allowEmptyQueries: !0,
                        requireVocalConnectAccess: !1,
                        allowSnowflake: s,
                    }),
                );
            return (
                (a = a
                    .filter((e) => {
                        let { record: t } = e;
                        return "null" !== t.id;
                    })
                    .sort(m)),
                null != r && a.length > r && (a = a.slice(0, r)),
                { channels: a.map((e) => e.record) }
            );
        },
        queryChoiceResults(e) {
            let { query: t, choices: n } = e;
            return { choices: this.queryChoice({ query: t, choices: n, limit: null }).map((e) => e.choice) };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: i, maxCount: r = E.rs7, matchComparator: s } = e;
            return (
                L.bW.loadIfNecessary(),
                {
                    emojis: g.Ay.searchWithoutFetchingLatest({
                        channel: n,
                        query: t,
                        count: r,
                        intention: i,
                        matchComparator: s,
                    }),
                }
            );
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ea],
                r = Y.default.getCurrentUser(),
                s = new Set(),
                a = [];
            for (let o of (L.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, ee.sS)(e),
                    d = RegExp(`^${Q.A.escape(l)}`, "i"),
                    _ = RegExp(`${Q.A.escape(l)}`, "i");
                O.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let u = 0,
                            c = null,
                            E = O.A.getStickerById(l);
                        if (null == E || !i(E, (0, C.W$)(E, r, n))) return;
                        for (let n of o) {
                            let { type: i, value: r } = n,
                                s = (function (e) {
                                    switch (e) {
                                        case y.cG.STICKER_NAME:
                                            return 11;
                                        case y.cG.CORRELATED_EMOJI:
                                            return 6;
                                        case y.cG.TAG:
                                            return 1;
                                        case y.cG.GUILD_NAME:
                                        case y.cG.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1;
                                    }
                                })(i),
                                a = 0;
                            t
                                ? r === e
                                    ? (a = 10 * s)
                                    : d.test(r)
                                      ? (a = 7 * s)
                                      : (i === y.cG.GUILD_NAME || i === y.cG.PACK_NAME || i === y.cG.STICKER_NAME) &&
                                        _.test(r) &&
                                        (a = 5 * s)
                                : r === e && ((a = 10 * s), (c = r)),
                                a > u && ((u = a), (c = r));
                        }
                        let h = R.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != h && (u *= h / 100),
                            u > 0 &&
                                null != c &&
                                !s.has(E.id) &&
                                (s.add(E.id), a.push({ sticker: E, comparator: c, score: u }));
                    });
                });
            }
            return (
                0 ===
                    (a = o()(a)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (a = el),
                a
            );
        },
        querySoundmoji(e, t) {
            let n = Y.default.getCurrentUser();
            S.A.isFetching() || S.A.hasFetchedAllSounds() || (0, T.E7)(), L.bW.loadIfNecessary();
            let i = Array.from(S.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, I.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, N.lG)(e, i, n, t);
        },
        matchSentinel: (e, t, n) => !eo.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = G.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? x.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eT,
    };

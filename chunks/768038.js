"use strict";
let i;
n.d(t, { Ay: () => eL, zy: () => eA, L3: () => ey, X3: () => eS }), n(321073), n(667532);
var r = n(91871),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(896170),
    u = n(329308),
    c = n(989133),
    d = n(47167),
    _ = n(734057),
    h = n(652215);
function f(e) {
    if (null == e.parent_id)
        if (e.type === h.rbe.GUILD_CATEGORY) return (e.position + 1) * 1e3;
        else return e.position;
    {
        let t = ((_.A.getChannel(e.parent_id)?.position ?? 0) + 1) * 1e3;
        return e.isGuildVocal() ? t + e.position + 500 : t + e.position;
    }
}
function p(e, t) {
    if (e.score !== t.score) return t.score - e.score;
    let n = f(e.record),
        i = f(t.record);
    if (n !== i) return n - i;
    let r = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
        s = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
    return r < s ? -1 : +(r > s);
}
var E = n(626584),
    m = n(159273),
    g = n(952818),
    A = n(352505),
    I = n(202776),
    T = n(473529),
    S = n(69945),
    y = n(796774),
    N = n(209932),
    v = n(147472),
    C = n(361670),
    R = n(931959),
    O = n(750385),
    b = n(194004),
    D = n(695633),
    L = n(152007),
    w = n(735321),
    M = n(594061),
    P = n(95701),
    x = n(34457),
    k = n(889227),
    U = n(760751),
    G = n(205761),
    F = n(808728),
    V = n(696451),
    B = n(317525),
    H = n(71393),
    j = n(232835),
    Y = n(576705),
    W = n(290863),
    K = n(994500),
    $ = n(309010),
    z = n(967198),
    q = n(287809),
    X = n(67480),
    Z = n(583613),
    Q = n(403362),
    J = n(860689),
    ee = n(695184),
    et = n(488926),
    en = n(257120),
    ei = n(935208),
    er = n(240248),
    es = n(427262),
    ea = n(926140),
    eo = n(746080),
    el = n(282435),
    eu = n(375708);
let ec = new E.A("AutocompleteUtils"),
    ed = () => !0,
    e_ = /(\t|\s)/,
    eh = [],
    ef = (i = n(966382).A).MENTION_EVERYONE,
    ep = i.MENTION_HERE,
    eE = i.MENTION_GAME,
    em = i.MENTION_TIMESTAMP,
    eg = i.LAUNCHABLE_APPLICATIONS;
function eA() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return 1e3 * e * (t ?? 1);
}
class eI {
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
        let e = G.A.getVersion(),
            t = K.A.getVersion(),
            n = _.A.getPrivateChannelsVersion();
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
        let t = G.A.getFrequentlyWithoutFetchingLatest(),
            n = t.reduce((e, t) => {
                let { id: n } = t,
                    i = G.A.getScoreWithoutFetchingLatest(n);
                return i > e ? i : e;
            }, 0),
            i = [];
        switch (e) {
            case ea.rD.GUILD:
                i = t.filter((e) => (0, J.fh)(e));
                break;
            case ea.rD.USER:
                i = t.filter((e) => e instanceof P.YB && e.type === h.rbe.DM);
                break;
            case ea.rD.GROUP_DM:
                i = t.filter((e) => e instanceof P.YB && e.isMultiUserDM());
                break;
            case ea.rD.TEXT_CHANNEL:
                i = t.filter((e) => e instanceof P.YB && (0, P.tr)(e.type));
                break;
            case ea.rD.VOICE_CHANNEL:
                i = t.filter((e) => e instanceof P.YB && e.isGuildVocal());
        }
        let r = {};
        for (let t of i) {
            let { id: i } = t,
                s = G.A.getScoreWithoutFetchingLatest(i);
            if (e === ea.rD.USER && t instanceof P.cq)
                switch (t.type) {
                    case h.rbe.DM:
                        r[(i = t.getRecipientId())] = 1 + s / n;
                        break;
                    case h.rbe.GROUP_DM: {
                        let e = t.recipients.length;
                        for (let i of t.recipients) r[i] = 1 + (s / n) * (1 / e);
                    }
                }
            else r[i] = 1 + s / n;
        }
        for (let e of K.A.getFriendIDs()) r[e] = (r[e] ?? 1) + 0.2;
        for (let e of _.A.getDMUserIds()) r[e] = (r[e] ?? 1) + 0.1;
        return r;
    }
}
let eT = new eI();
function eS(e) {
    return eT.get(e);
}
let ey = [F.I6, F.vM, h.rbe.GUILD_CATEGORY];
function eN(e, t) {
    let { exactQuery: n, containQuery: i, queryLower: r } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === r) return 10;
            return 7;
        }
        if (i.test(e)) return 5;
        if (r.split(/(?:,| )+/).every((t) => RegExp(en.A.escape(t), "i").test(e))) return 3;
        if (a && s()(r, e)) return 1;
    } catch (e) {
        ec.error(e);
    }
    return 0;
}
function ev(e) {
    return e?.joinedAt != null && !e.isPending;
}
function eC(e) {
    if (null == e) return [null, null];
    let t = (0, er.sS)(e),
        n = (0, er.S8)(t);
    return [t, n];
}
function eR(e) {
    let { query: t, members: n, limit: i, filter: r, allowSnowflake: a, boosters: o } = e,
        l = q.default.getUsers(),
        u = z.A.getGuildId(),
        d = t.toLocaleLowerCase(),
        _ = (0, er.S8)(d),
        h = [],
        f = [],
        p = n.length,
        E = 0,
        m = 0;
    for (; E < p; ) {
        let e,
            i,
            c = n[E];
        c instanceof k.A
            ? ((i = c), (e = V.Ay.getNick(u, i.id)?.toLocaleLowerCase()))
            : ((e = c.nick?.toLocaleLowerCase()), (i = l[c.userId]));
        let p = es.Ay.getGlobalName(i)?.toLocaleLowerCase();
        if (null != i && (null == r || r(i))) {
            let n = i.username.toLocaleLowerCase(),
                r = (0, er.sS)(n),
                l = (0, er.S8)(r),
                [u, c] = eC(e),
                [E, g] = eC(p);
            (a && t === i.id) ||
            n.substring(0, d.length) === d ||
            r.substring(0, d.length) === d ||
            e?.substring(0, d.length) === d ||
            u?.substring(0, d.length) === d ||
            p?.substring(0, d.length) === d ||
            E?.substring(0, d.length) === d
                ? h.push({
                      type: ea.rD.USER,
                      record: i,
                      score: eA(10, o?.[i.id]),
                      comparator: p ?? e ?? n,
                      sortable: E ?? u ?? r,
                  })
                : l.substring(0, _.length) === _ || c?.substring(0, _.length) === _ || g?.substring(0, _.length) === _
                  ? h.push({
                        type: ea.rD.USER,
                        record: i,
                        score: eA(1, o?.[i.id]),
                        comparator: p ?? e ?? n,
                        sortable: E ?? u ?? r,
                    })
                  : m < 50 &&
                    (s()(d, r) ||
                        s()(_, l) ||
                        (null != u && s()(d, u)) ||
                        (null != c && s()(_, c)) ||
                        (null != E && s()(d, E)) ||
                        (null != g && s()(_, g))) &&
                    (f.push({
                        type: ea.rD.USER,
                        record: i,
                        score: eA(1, o?.[i.id]),
                        comparator: p ?? e ?? n,
                        sortable: E ?? u ?? r,
                    }),
                    (m += 1));
        }
        E += 1;
    }
    return (
        h.sort(c.A),
        h.length < i && (f.sort(c.A), (h = h.concat(f.slice(0, Math.max(0, i - h.length))))),
        h.length > i && (h.length = i),
        h
    );
}
function eO(e, t, n) {
    let i = 0,
        r = null;
    for (let s of t) {
        let t = eN(e, s, n);
        t > i && ((i = t), (r = s));
    }
    return null != r && (r.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(r), 1)), i;
}
function eb(e, t) {
    let n = _.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(j.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => q.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || ev(V.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      i = null != t ? V.Ay.getMember(t, e.id) : null;
                  return { type: ea.rD.USER, record: e, score: 0, comparator: i?.nick ?? es.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let eD = (0, Z.L_)((e, t, n) => {
        let i = new Map(),
            r = new Map(),
            s = [];
        return (
            o()(_.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = q.default.getUser(t);
                        null == t ||
                            null == n ||
                            i.has(t) ||
                            (i.set(t, e), s.push({ userId: t, nick: K.A.getNickname(t) }), r.set(t, n));
                    }
                }),
            { channelsByRecipientId: i, recipientsById: r, recipients: s }
        );
    }),
    eL = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: i = !0, filter: r } = e;
            return eR({
                query: t,
                members: K.A.getFriendIDs()
                    .map((e) => q.default.getUser(e))
                    .filter(Q.Vq),
                limit: n,
                filter: r,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: i } = e;
            return eR({
                query: t,
                members: _.A.getDMUserIds()
                    .map((e) => q.default.getUser(e))
                    .filter(Q.Vq),
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
                l = _.A.getChannel(n);
            if (null == l) return [];
            let u = (l.isThread() ? _.A.getChannel(l.parent_id) : null) ?? l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => ({ userId: e, nick: K.A.getNickname(e) ?? null }));
                let e = q.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === i.length && a) {
                    let e = eb(l.id, r);
                    if (e.length > 0) return e;
                }
                (t = V.Ay.getMembers(u.guild_id).filter(ev)), s && ee.A.requestMembers(u.guild_id, i, r);
            }
            return eR({
                query: i,
                members: t,
                limit: r,
                filter: (e) => u.isPrivate() || et.$3({ permission: h.xBc.VIEW_CHANNEL, user: e, context: u }),
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
            if (null == H.A.getGuild(t)) return [];
            if (0 === n.length && s) {
                let e = eb($.A.getChannelId(t), i);
                if (e.length > 0) return e;
            }
            let l = V.Ay.getMembers(t).filter(ev);
            return (
                r && n.length > 0 && ee.A.requestMembers(t, n, i),
                eR({ query: n, members: l, limit: i, filter: a, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: i, limit: r = 10, users: s, allowSnowflake: a } = e;
            return eR({ query: t, members: s, limit: r, filter: n, allowSnowflake: a, boosters: i });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: i, limit: r = 10, request: s = !0 } = e;
            return (
                s && t.length > 0 && ee.A.requestMembers(null, t, r),
                this.queryUsers({
                    query: t,
                    limit: r,
                    request: s,
                    filter: n,
                    boosters: i,
                    users: o()(q.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            var t, n, i;
            let r,
                {
                    query: s,
                    guildId: a,
                    limit: l = h.rs7,
                    fuzzy: u = !0,
                    filter: f = ed,
                    type: p = F.I6,
                    allowEmptyQueries: E = !1,
                    requireVocalConnectAccess: m = !0,
                    boosters: g = {},
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
                                    exactQuery: RegExp(`^${en.A.escape(t)}`, "i"),
                                    containQuery: RegExp(en.A.escape(t), "i"),
                                    isFullMatch: !1,
                                };
                            });
                    if (e.includes(" ")) {
                        let t = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: t,
                            exactQuery: RegExp(`^${en.A.escape(t).replace(" ", "( |-)")}`, "i"),
                            containQuery: RegExp(en.A.escape(t).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0,
                        });
                    }
                    return n;
                })(s, E),
                S = p === F.I6 || (p !== F.vM && !!(0, P.fT)(p));
            r =
                null != a
                    ? o()(F.Ay.getChannels(a)[p])
                          .map((e) => e.channel)
                          .concat(S ? (I ? _.A.getAllThreadsForGuild(a) : D.A.computeAllActiveJoinedThreads(a)) : [])
                          .value()
                    : o()(_.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(S ? D.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let y = {},
                N = [],
                v = G.A.getMaxScore();
            for (let e of r) {
                if (
                    ((t = e.type),
                    (n = null != a),
                    !(
                        p === t ||
                        ((n || (0, P.zy)(t)) &&
                            (p === F.I6 ? (0, P.tr)(t) || (0, P.ay)(t) : p === F.vM && (0, P.ay)(t)))
                    ) ||
                        ((0, P.zy)(e.type) && !Y.A.can(m ? e.accessPermissions : h.xBc.VIEW_CHANNEL, e)) ||
                        !f(e))
                )
                    continue;
                let r = [...T],
                    o = (0, d.m1)(e, q.default, K.A).toLocaleLowerCase(),
                    l = A && s === e.id,
                    c = l ? 10 : eO(o, r, u);
                if (0 !== c) {
                    if (r.length > 0) {
                        for (let t of [
                            (function (e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                return (
                                    null == n &&
                                        (n = t[e.guild_id] = H.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, y),
                            (function (e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                return (
                                    null == n &&
                                        (n = t[e.parent_id] = _.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, y),
                        ]) {
                            if (null == t || "" === t) continue;
                            let e = eO(t, r, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(6, c);
                    }
                    0 !== c &&
                        !(r.length > 1) &&
                        (1 !== r.length || r[0].isFullMatch || l) &&
                        ((i = e.type),
                        p === F.I6 && (0, P.ay)(i) && (c = Math.max(c - 1, 0.5)),
                        e.isThread() && (e.isActiveThread() || (c -= 3), L.A.hasJoined(e.id) || (c -= 5)),
                        (c = Math.min(
                            c + 3 * Math.min(G.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / v, 1),
                            c >= 7 ? 10 : 7,
                        )),
                        N.push({
                            type: (0, P.ay)(e.type) ? ea.rD.VOICE_CHANNEL : ea.rD.TEXT_CHANNEL,
                            record: e,
                            score: eA(c, g[e.id]),
                            comparator: (0, d.m1)(e, q.default, K.A),
                            sortable: o,
                        }));
                }
            }
            return N.sort(c.A), null != l && N.length > l && (N.length = l), N;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, allowSnowflake: r, filter: s = ed, boosters: a = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${en.A.escape(o)}`, "i"),
                    containQuery: RegExp(en.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of H.A.getGuildsArray()) {
                if (!s(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = r && t === e.id ? 10 : eN(n, l, i);
                o > 0 &&
                    u.push({ type: ea.rD.GUILD, record: e, score: eA(o, a[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(c.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: i = {} } = e,
                {
                    channelsByRecipientId: r,
                    recipientsById: s,
                    recipients: a,
                } = eD(_.A.getPrivateChannelsVersion(), K.A.getVersion(), q.default.getUserStoreVersion()),
                o = eR({ query: t, members: a, limit: a.length, boosters: i }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = r.get(e.record.id);
                    null != t &&
                        l.push({
                            type: ea.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: es.Ay.getUserTag(s.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(c.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ed, boosters: s = {} } = e,
                a = (0, er.sS)((0, er.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${en.A.escape(a)}`, "i"),
                    containQuery: RegExp(en.A.escape(a), "i"),
                    queryLower: a,
                },
                u = o()(_.A.getMutablePrivateChannels()).values().value(),
                h = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !r(e)) continue;
                let t = (0, d.m1)(e, q.default, K.A).toLocaleLowerCase(),
                    n = (0, er.sS)((0, er.S8)(t)),
                    a = eN(n, l, i),
                    o = [];
                for (let t of e.recipients) {
                    let e = q.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        i = es.Ay.getGlobalName(e),
                        r = K.A.getNickname(t);
                    null != n && o.push(n), null != i && o.push(i), null != r && o.push(r);
                }
                for (let e of o) {
                    let t = Math.min(5, eN((0, er.sS)((0, er.S8)(e.toLocaleLowerCase())), l, i));
                    t > a && (a = t);
                }
                a > 0 &&
                    h.push({
                        type: ea.rD.GROUP_DM,
                        record: e,
                        score: eA(a, s[e.id]),
                        comparator: (0, d.m1)(e, q.default, K.A),
                        sortable: n,
                    });
            }
            return h.sort(c.A), h.length > n && (h.length = n), h;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ed } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${en.A.escape(s)}`, "i"),
                    containQuery: RegExp(en.A.escape(s), "i"),
                    queryLower: s,
                },
                o = eg(),
                l = [];
            for (let { application: e } of o) {
                if (!r(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eN(t, a, i);
                n > 0 && l.push({ type: ea.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(c.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0 } = e,
                r = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${en.A.escape(r)}`, "i"),
                    containQuery: RegExp(en.A.escape(r), "i"),
                    queryLower: r,
                },
                a = {
                    [u.t1.SHOP]: [eu.intl.string(eu.t.pWG4ze)],
                    [u.t1.SHOP_ORBS_TAB]: [
                        eu.intl.string(eu.t.ElYQFS),
                        eu.intl.string(eu.t.pWG4ze),
                        eu.intl.string(eu.t.EBYkzk),
                    ],
                    [u.t1.QUEST_ORBS]: [
                        eu.intl.string(eu.t.ElYQFS),
                        eu.intl.string(eu.t["v/R2aC"]),
                        eu.intl.string(eu.t.qQR4tn),
                    ],
                    [u.t1.NITRO_HOME]: [eu.intl.string(eu.t.Ipxkog)],
                    [u.t1.QUEST_HOME]: [eu.intl.string(eu.t.JALI2K)],
                    [u.t1.APPS_HOME]: [eu.intl.string(eu.t.PHjkRE), eu.intl.string(eu.t.AKcFUj)],
                    [u.t1.SETTINGS]: [eu.intl.string(eu.t["3D5yo/"])],
                },
                o = [];
            for (let e in a) {
                let t = u.t1[e],
                    n = a[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = eN(n, s, i);
                        r > 0 &&
                            o.push({
                                type: ea.rD.IN_APP_NAVIGATION,
                                record: u.SV.fromType(t),
                                score: eA(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return o.sort(c.A), o.length > n && (o.length = n), o;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ed } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${en.A.escape(s)}`, "i"),
                    containQuery: RegExp(en.A.escape(s), "i"),
                    queryLower: s,
                },
                l = o()(X.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === h.Puh.DURABLE_PRIMARY && r(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eN(t, a, i);
                    n > 0 && u.push({ type: ea.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(c.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: eb,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: i = !1,
                    canMentionHere: r = !0,
                    canMentionUsers: a = !0,
                    canMentionRoles: u = !0,
                    canMentionOtherGlobals: c = !0,
                    includeAllGuildUsers: d = !1,
                    includeNonMentionableRoles: _ = !1,
                    checkRecentlyTalkedOnEmptyQuery: f = !0,
                    limit: p = h.rs7,
                    request: E,
                    allowSnowflake: m = !1,
                } = e,
                g = a
                    ? (d && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: p,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                request: E,
                                allowSnowflake: m,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: p,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                allowSnowflake: m,
                            })
                      ).map((e) => {
                          let { record: t, score: i, comparator: r } = e;
                          return {
                              user: t,
                              score: i,
                              comparator: r,
                              nick: V.Ay.getNick(n.guild_id, t.id),
                              status: W.A.getStatus(t.id),
                          };
                      })
                    : [],
                I = g.length,
                T = t.toLowerCase(),
                S = [];
            if (I < p && u) {
                let e = n.getGuildId(),
                    r = H.A.getGuild(e);
                if (null != r) {
                    let n = o()(B.A.getSortedRoles(r.id))
                        .filter((t) => {
                            let { mentionable: n, name: r, id: a } = t;
                            return (
                                (n || i || _) &&
                                (s()(T, r.toLowerCase()) || (m && T === a)) &&
                                a !== ei.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (S = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, p - I)), (I += S.length);
                }
            }
            let y = [];
            !n.isPrivate() &&
                i &&
                u &&
                (I < p && s()(T, ef().test) && (y.push(ef()), (I += 1)),
                r && I < p && s()(T, ep().test) && (y.push(ep()), (I += 1)));
            let N = (e) => {
                    !c ||
                        null == e ||
                        ((((I < p || 0 === T.length) && s()(T, e.test)) || T === e.test) &&
                            (I >= p && (S.length > 0 ? S.pop() : g.length > 0 && g.pop()), y.push(e), (I += 1)));
                },
                v = A.r.getConfig({ location: "mention autocomplete" });
            return (
                v.enabled && !v.combineMentionAutocomplete && N(eE?.()), N(em?.()), { users: g, globals: y, roles: S }
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
                u = r
                    ? this.queryGuildUsers({ guildId: n, query: t }).map((e) => ({
                          ...e,
                          status: W.A.getStatus(e.record.id),
                      }))
                    : [],
                c = u.length,
                d = t.toLowerCase(),
                _ = [];
            if (c < h.rs7 && a) {
                let e = H.A.getGuild(n);
                null != e &&
                    (o()(B.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || i || l) && s()(d, e.name.toLowerCase()) && !(0, x.Oy)(e))
                        .take(h.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                i &&
                    a &&
                    (c < h.rs7 && s()(d, ef().test) && (f.push(ef()), (c += 1)),
                    c < h.rs7 && s()(d, ep().test) && f.push(ep())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: i = 10, fuzzy: r = !0 } = e,
                s = t.toLocaleLowerCase(),
                a = RegExp(`^${en.A.escape(s)}`, "i"),
                l = RegExp(en.A.escape(s), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = eN(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: a, containQuery: l, queryLower: s },
                            r,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(Q.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== i && (u = u.take(i)), u.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                i = t.toLocaleLowerCase(),
                r = {
                    exactQuery: RegExp(`^${en.A.escape(i)}`, "i"),
                    containQuery: RegExp(en.A.escape(i), "i"),
                    queryLower: i,
                },
                s = (0, T.K)(n.id) && !n.features.has(h.GuildFeatures.HUB),
                a = n.features.has(h.GuildFeatures.COMMUNITY),
                o = (0, I.u)(n) && n.features.has(h.GuildFeatures.COMMUNITY),
                l = [
                    { id: eo.T4.SERVER_GUIDE, name: eu.intl.string(eu.t.VbpLyU) },
                    { id: eo.T4.CHANNEL_BROWSER, name: eu.intl.string(eu.t.et6wav) },
                    { id: eo.T4.CUSTOMIZE_COMMUNITY, name: eu.intl.string(eu.t.h9mGOP) },
                ],
                u = [];
            for (let e of l)
                (e.id !== eo.T4.SERVER_GUIDE || s) &&
                    (e.id !== eo.T4.CHANNEL_BROWSER || a) &&
                    (e.id !== eo.T4.CUSTOMIZE_COMMUNITY || o) &&
                    eN(e.name.toLocaleLowerCase(), r, !1) > 0 &&
                    u.push(new P.jb({ id: e.id, name: e.name, type: h.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: i = F.I6, channelTypes: r } = e;
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
            let { query: t, channel: n, channelTypes: i, limit: r = h.rs7, allowSnowflake: s } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == i || i.includes(n.type)) && e.push(n), { channels: e };
            }
            let a = [];
            for (let e of ey)
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
                    .sort(p)),
                null != r && a.length > r && (a = a.slice(0, r)),
                { channels: a.map((e) => e.record) }
            );
        },
        queryChoiceResults(e) {
            let { query: t, choices: n } = e;
            return { choices: this.queryChoice({ query: t, choices: n, limit: null }).map((e) => e.choice) };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: i, maxCount: r = h.rs7, matchComparator: s } = e;
            return (
                M.bW.loadIfNecessary(),
                {
                    emojis: m.Ay.searchWithoutFetchingLatest({
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
                [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ed],
                r = q.default.getCurrentUser(),
                s = new Set(),
                a = [];
            for (let o of (M.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, er.sS)(e),
                    u = RegExp(`^${en.A.escape(l)}`, "i"),
                    c = RegExp(`${en.A.escape(l)}`, "i");
                O.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            h = O.A.getStickerById(l);
                        if (null == h || !i(h, (0, C.W$)(h, r, n))) return;
                        for (let n of o) {
                            let { type: i, value: r } = n,
                                s = (function (e) {
                                    switch (e) {
                                        case b.cG.STICKER_NAME:
                                            return 11;
                                        case b.cG.CORRELATED_EMOJI:
                                            return 6;
                                        case b.cG.TAG:
                                            return 1;
                                        case b.cG.GUILD_NAME:
                                        case b.cG.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1;
                                    }
                                })(i),
                                a = 0;
                            t
                                ? r === e
                                    ? (a = 10 * s)
                                    : u.test(r)
                                      ? (a = 7 * s)
                                      : (i === b.cG.GUILD_NAME || i === b.cG.PACK_NAME || i === b.cG.STICKER_NAME) &&
                                        c.test(r) &&
                                        (a = 5 * s)
                                : r === e && ((a = 10 * s), (_ = r)),
                                a > d && ((d = a), (_ = r));
                        }
                        let f = R.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != f && (d *= f / 100),
                            d > 0 &&
                                null != _ &&
                                !s.has(h.id) &&
                                (s.add(h.id), a.push({ sticker: h, comparator: _, score: d }));
                    });
                });
            }
            return (
                0 ===
                    (a = o()(a)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (a = eh),
                a
            );
        },
        querySoundmoji(e, t) {
            let n = q.default.getCurrentUser();
            N.A.isFetching() || N.A.hasFetchedAllSounds() || (0, y.E7)(), M.bW.loadIfNecessary();
            let i = Array.from(N.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, S.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, v.lG)(e, i, n, t);
        },
        queryGames(e) {
            let t = g.Ay.getRunningVerifiedApplicationIds(),
                n = e.includes("_"),
                i = (0, er.sS)(e.toLowerCase()).replaceAll("_", " "),
                r =
                    0 === e.length
                        ? Array.from(new Set([...t, ...el.Bf.keys()]))
                              .map((e) => U.A.getDetectableGame(e))
                              .filter(Q.Vq)
                        : U.A.games;
            return o()(r)
                .filter((e) => !(0, w.nS)(e) && !(0, w.jg)(e))
                .map((r) => ({
                    game: r,
                    score: (function (r) {
                        let a = 0,
                            o = (0, er.sS)(r.name.toLowerCase()),
                            l = n ? o.replaceAll("_", " ") : o;
                        if (
                            (r.id === e
                                ? (a += 1e3)
                                : l === i
                                  ? (a += 5)
                                  : l.startsWith(i)
                                    ? (a += 4)
                                    : l.includes(i)
                                      ? (a += 3)
                                      : e.length > 1 && s()(i, l) && (a += 1),
                            a > 0)
                        ) {
                            t.includes(r.id) && (a += 10);
                            let e = el.Bf.get(r.id);
                            null != e && (a += e / el.Bf.size);
                        }
                        return a;
                    })(r),
                }))
                .filter((e) => {
                    let { score: t } = e;
                    return t > 0;
                })
                .sortBy((e) => {
                    let { score: t } = e;
                    return t;
                })
                .map((e) => {
                    let { game: t } = e;
                    return t;
                })
                .reverse()
                .value()
                .slice(0, h.rs7);
        },
        matchSentinel: (e, t, n) => !e_.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = H.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? B.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eR,
    };

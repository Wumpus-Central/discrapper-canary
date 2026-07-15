"use strict";
let i;
n.d(t, { Ay: () => eD, zy: () => eh, XA: () => eI, L3: () => em, X3: () => eT }), n(321073), n(667532);
var r = n(91871),
    a = n.n(r),
    s = n(735438),
    l = n.n(s),
    o = n(896170),
    d = n(329308),
    c = n(989133),
    u = n(47167),
    _ = n(734057),
    E = n(652215);
function A(e) {
    if (null == e.parent_id)
        if (e.type === E.rbe.GUILD_CATEGORY) return (e.position + 1) * 1e3;
        else return e.position;
    {
        let t = ((_.A.getChannel(e.parent_id)?.position ?? 0) + 1) * 1e3;
        return e.isGuildVocal() ? t + e.position + 500 : t + e.position;
    }
}
function h(e, t) {
    if (e.score !== t.score) return t.score - e.score;
    let n = A(e.record),
        i = A(t.record);
    if (n !== i) return n - i;
    let r = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
        a = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
    return r < a ? -1 : +(r > a);
}
var I = n(626584),
    f = n(159273),
    p = n(352505),
    T = n(202776),
    m = n(473529),
    g = n(69945),
    S = n(796774),
    N = n(209932),
    C = n(147472),
    O = n(361670),
    R = n(931959),
    L = n(750385),
    D = n(194004),
    y = n(695633),
    v = n(152007),
    b = n(594061),
    M = n(95701),
    P = n(34457),
    U = n(889227),
    w = n(205761),
    G = n(808728),
    x = n(696451),
    k = n(317525),
    F = n(71393),
    V = n(232835),
    B = n(576705),
    H = n(290863),
    j = n(994500),
    W = n(309010),
    Y = n(967198),
    K = n(287809),
    $ = n(67480),
    z = n(583613),
    q = n(403362),
    Z = n(860689),
    X = n(695184),
    Q = n(488926),
    J = n(257120),
    ee = n(935208),
    et = n(240248),
    en = n(427262),
    ei = n(926140),
    er = n(746080),
    ea = n(375708);
let es = new I.A("AutocompleteUtils");
function el() {
    return !0;
}
let eo = /(\t|\s)/,
    ed = [],
    ec = (i = n(966382).A).MENTION_EVERYONE,
    eu = i.MENTION_HERE,
    e_ = i.MENTION_GAME,
    eE = i.MENTION_TIMESTAMP,
    eA = i.LAUNCHABLE_APPLICATIONS;
function eh() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return 1e3 * e * (t ?? 1);
}
function eI(e, t, n) {
    let i = e.toLocaleLowerCase();
    return i === t ? 10 : i.startsWith(t) ? 7 : Math.max(1, 7 - n);
}
class ef {
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
        let e = w.A.getVersion(),
            t = j.A.getVersion(),
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
        let t = w.A.getFrequentlyWithoutFetchingLatest(),
            n = t.reduce((e, t) => {
                let { id: n } = t,
                    i = w.A.getScoreWithoutFetchingLatest(n);
                return i > e ? i : e;
            }, 0),
            i = [];
        switch (e) {
            case ei.rD.GUILD:
                i = t.filter((e) => (0, Z.fh)(e));
                break;
            case ei.rD.USER:
                i = t.filter((e) => e instanceof M.YB && e.type === E.rbe.DM);
                break;
            case ei.rD.GROUP_DM:
                i = t.filter((e) => e instanceof M.YB && e.isMultiUserDM());
                break;
            case ei.rD.TEXT_CHANNEL:
                i = t.filter((e) => e instanceof M.YB && (0, M.tr)(e.type));
                break;
            case ei.rD.VOICE_CHANNEL:
                i = t.filter((e) => e instanceof M.YB && e.isGuildVocal());
        }
        let r = {};
        for (let t of i) {
            let { id: i } = t,
                a = w.A.getScoreWithoutFetchingLatest(i);
            if (e === ei.rD.USER && t instanceof M.cq)
                switch (t.type) {
                    case E.rbe.DM:
                        r[(i = t.getRecipientId())] = 1 + a / n;
                        break;
                    case E.rbe.GROUP_DM: {
                        let e = t.recipients.length;
                        for (let i of t.recipients) r[i] = 1 + (a / n) * (1 / e);
                    }
                }
            else r[i] = 1 + a / n;
        }
        for (let e of j.A.getFriendIDs()) r[e] = (r[e] ?? 1) + 0.2;
        for (let e of _.A.getDMUserIds()) r[e] = (r[e] ?? 1) + 0.1;
        return r;
    }
}
let ep = new ef();
function eT(e) {
    return ep.get(e);
}
let em = [G.I6, G.vM, E.rbe.GUILD_CATEGORY];
function eg(e, t) {
    let { exactQuery: n, containQuery: i, queryLower: r } = t,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === r) return 10;
            return 7;
        }
        if (i.test(e)) return 5;
        if (r.split(/(?:,| )+/).every((t) => RegExp(J.A.escape(t), "i").test(e))) return 3;
        if (s && a()(r, e)) return 1;
    } catch (e) {
        es.error(e);
    }
    return 0;
}
function eS(e) {
    return e?.joinedAt != null && !e.isPending;
}
function eN(e) {
    if (null == e) return [null, null];
    let t = (0, et.sS)(e),
        n = (0, et.S8)(t);
    return [t, n];
}
function eC(e) {
    let { query: t, members: n, limit: i, filter: r, allowSnowflake: s, boosters: l } = e,
        o = K.default.getUsers(),
        d = Y.A.getGuildId(),
        u = t.toLocaleLowerCase(),
        _ = (0, et.S8)(u),
        E = [],
        A = [],
        h = n.length,
        I = 0,
        f = 0;
    for (; I < h; ) {
        let e,
            i,
            c = n[I];
        c instanceof U.A
            ? ((i = c), (e = x.Ay.getNick(d, i.id)?.toLocaleLowerCase()))
            : ((e = c.nick?.toLocaleLowerCase()), (i = o[c.userId]));
        let h = en.Ay.getGlobalName(i)?.toLocaleLowerCase();
        if (null != i && (null == r || r(i))) {
            let n = i.username.toLocaleLowerCase(),
                r = (0, et.sS)(n),
                o = (0, et.S8)(r),
                [d, c] = eN(e),
                [I, p] = eN(h);
            (s && t === i.id) ||
            n.substring(0, u.length) === u ||
            r.substring(0, u.length) === u ||
            e?.substring(0, u.length) === u ||
            d?.substring(0, u.length) === u ||
            h?.substring(0, u.length) === u ||
            I?.substring(0, u.length) === u
                ? E.push({
                      type: ei.rD.USER,
                      record: i,
                      score: eh(10, l?.[i.id]),
                      comparator: h ?? e ?? n,
                      sortable: I ?? d ?? r,
                  })
                : o.substring(0, _.length) === _ || c?.substring(0, _.length) === _ || p?.substring(0, _.length) === _
                  ? E.push({
                        type: ei.rD.USER,
                        record: i,
                        score: eh(1, l?.[i.id]),
                        comparator: h ?? e ?? n,
                        sortable: I ?? d ?? r,
                    })
                  : f < 50 &&
                    (a()(u, r) ||
                        a()(_, o) ||
                        (null != d && a()(u, d)) ||
                        (null != c && a()(_, c)) ||
                        (null != I && a()(u, I)) ||
                        (null != p && a()(_, p))) &&
                    (A.push({
                        type: ei.rD.USER,
                        record: i,
                        score: eh(1, l?.[i.id]),
                        comparator: h ?? e ?? n,
                        sortable: I ?? d ?? r,
                    }),
                    (f += 1));
        }
        I += 1;
    }
    return (
        E.sort(c.A),
        E.length < i && (A.sort(c.A), (E = E.concat(A.slice(0, Math.max(0, i - E.length))))),
        E.length > i && (E.length = i),
        E
    );
}
function eO(e, t, n) {
    let i = 0,
        r = null;
    for (let a of t) {
        let t = eg(e, a, n);
        t > i && ((i = t), (r = a));
    }
    return null != r && (r.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(r), 1)), i;
}
function eR(e, t) {
    let n = _.A.getChannel(e);
    return null == e || null == n
        ? []
        : l()(V.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => K.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eS(x.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      i = null != t ? x.Ay.getMember(t, e.id) : null;
                  return { type: ei.rD.USER, record: e, score: 0, comparator: i?.nick ?? en.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let eL = (0, z.L_)((e, t, n) => {
        let i = new Map(),
            r = new Map(),
            a = [];
        return (
            l()(_.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = K.default.getUser(t);
                        null == t ||
                            null == n ||
                            i.has(t) ||
                            (i.set(t, e), a.push({ userId: t, nick: j.A.getNickname(t) }), r.set(t, n));
                    }
                }),
            { channelsByRecipientId: i, recipientsById: r, recipients: a }
        );
    }),
    eD = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: i = !0, filter: r } = e;
            return eC({
                query: t,
                members: j.A.getFriendIDs()
                    .map((e) => K.default.getUser(e))
                    .filter(q.Vq),
                limit: n,
                filter: r,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: i } = e;
            return eC({
                query: t,
                members: _.A.getDMUserIds()
                    .map((e) => K.default.getUser(e))
                    .filter(q.Vq),
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
                    request: a = !0,
                    checkRecentlyTalkedOnEmptyQuery: s = !0,
                    allowSnowflake: l = !1,
                } = e,
                o = _.A.getChannel(n);
            if (null == o) return [];
            let d = (o.isThread() ? _.A.getChannel(o.parent_id) : null) ?? o;
            if (null == d) return [];
            if (d.isPrivate()) {
                t = d.recipients.map((e) => ({ userId: e, nick: j.A.getNickname(e) ?? null }));
                let e = K.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === i.length && s) {
                    let e = eR(o.id, r);
                    if (e.length > 0) return e;
                }
                (t = x.Ay.getMembers(d.guild_id).filter(eS)), a && X.A.requestMembers(d.guild_id, i, r);
            }
            return eC({
                query: i,
                members: t,
                limit: r,
                filter: (e) => d.isPrivate() || Q.$3({ permission: E.xBc.VIEW_CHANNEL, user: e, context: d }),
                allowSnowflake: l,
            });
        },
        queryGuildUsers(e) {
            let {
                guildId: t,
                query: n,
                limit: i = 10,
                request: r = !0,
                checkRecentlyTalkedOnEmptyQuery: a = !0,
                filter: s,
                allowSnowflake: l,
            } = e;
            if (null == F.A.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = eR(W.A.getChannelId(t), i);
                if (e.length > 0) return e;
            }
            let o = x.Ay.getMembers(t).filter(eS);
            return (
                r && n.length > 0 && X.A.requestMembers(t, n, i),
                eC({ query: n, members: o, limit: i, filter: s, allowSnowflake: l })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: i, limit: r = 10, users: a, allowSnowflake: s } = e;
            return eC({ query: t, members: a, limit: r, filter: n, allowSnowflake: s, boosters: i });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: i, limit: r = 10, request: a = !0 } = e;
            return (
                a && t.length > 0 && X.A.requestMembers(null, t, r),
                this.queryUsers({
                    query: t,
                    limit: r,
                    request: a,
                    filter: n,
                    boosters: i,
                    users: l()(K.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            var t, n, i;
            let r,
                {
                    query: a,
                    guildId: s,
                    limit: o = E.rs7,
                    fuzzy: d = !0,
                    filter: A = el,
                    type: h = G.I6,
                    allowEmptyQueries: I = !1,
                    requireVocalConnectAccess: f = !0,
                    boosters: p = {},
                    allowSnowflake: T,
                    includeAllThreads: m,
                } = e,
                g = (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e
                            .split(" ")
                            .filter((e) => "" !== e || t)
                            .map((e) => {
                                let t = e.toLocaleLowerCase();
                                return {
                                    queryLower: t,
                                    exactQuery: RegExp(`^${J.A.escape(t)}`, "i"),
                                    containQuery: RegExp(J.A.escape(t), "i"),
                                    isFullMatch: !1,
                                };
                            });
                    if (e.includes(" ")) {
                        let t = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: t,
                            exactQuery: RegExp(`^${J.A.escape(t).replace(" ", "( |-)")}`, "i"),
                            containQuery: RegExp(J.A.escape(t).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0,
                        });
                    }
                    return n;
                })(a, I),
                S = h === G.I6 || (h !== G.vM && !!(0, M.fT)(h));
            r =
                null != s
                    ? l()(G.Ay.getChannels(s)[h])
                          .map((e) => e.channel)
                          .concat(S ? (m ? _.A.getAllThreadsForGuild(s) : y.A.computeAllActiveJoinedThreads(s)) : [])
                          .value()
                    : l()(_.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(S ? y.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let N = {},
                C = [],
                O = w.A.getMaxScore();
            for (let e of r) {
                if (
                    ((t = e.type),
                    (n = null != s),
                    !(
                        h === t ||
                        ((n || (0, M.zy)(t)) &&
                            (h === G.I6 ? (0, M.tr)(t) || (0, M.ay)(t) : h === G.vM && (0, M.ay)(t)))
                    ) ||
                        ((0, M.zy)(e.type) && !B.A.can(f ? e.accessPermissions : E.xBc.VIEW_CHANNEL, e)) ||
                        !A(e))
                )
                    continue;
                let r = [...g],
                    l = (0, u.m1)(e, K.default, j.A).toLocaleLowerCase(),
                    o = T && a === e.id,
                    c = o ? 10 : eO(l, r, d);
                if (0 !== c) {
                    if (r.length > 0) {
                        for (let t of [
                            (function (e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                return (
                                    null == n &&
                                        (n = t[e.guild_id] = F.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, N),
                            (function (e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                return (
                                    null == n &&
                                        (n = t[e.parent_id] = _.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, N),
                        ]) {
                            if (null == t || "" === t) continue;
                            let e = eO(t, r, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(6, c);
                    }
                    0 !== c &&
                        !(r.length > 1) &&
                        (1 !== r.length || r[0].isFullMatch || o) &&
                        ((i = e.type),
                        h === G.I6 && (0, M.ay)(i) && (c = Math.max(c - 1, 0.5)),
                        e.isThread() && (e.isActiveThread() || (c -= 3), v.A.hasJoined(e.id) || (c -= 5)),
                        (c = Math.min(
                            c + 3 * Math.min(w.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / O, 1),
                            c >= 7 ? 10 : 7,
                        )),
                        C.push({
                            type: (0, M.ay)(e.type) ? ei.rD.VOICE_CHANNEL : ei.rD.TEXT_CHANNEL,
                            record: e,
                            score: eh(c, p[e.id]),
                            comparator: (0, u.m1)(e, K.default, j.A),
                            sortable: l,
                        }));
                }
            }
            return C.sort(c.A), null != o && C.length > o && (C.length = o), C;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, allowSnowflake: r, filter: a = el, boosters: s = {} } = e,
                l = "" === t ? "" : t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp(`^${J.A.escape(l)}`, "i"),
                    containQuery: RegExp(J.A.escape(l), "i"),
                    queryLower: l,
                },
                d = [];
            for (let e of F.A.getGuildsArray()) {
                if (!a(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    l = r && t === e.id ? 10 : eg(n, o, i);
                l > 0 &&
                    d.push({ type: ei.rD.GUILD, record: e, score: eh(l, s[e.id]), comparator: e.name, sortable: n });
            }
            return d.sort(c.A), d.length > n && (d.length = n), d;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: i = {} } = e,
                {
                    channelsByRecipientId: r,
                    recipientsById: a,
                    recipients: s,
                } = eL(_.A.getPrivateChannelsVersion(), j.A.getVersion(), K.default.getUserStoreVersion()),
                l = eC({ query: t, members: s, limit: s.length, boosters: i }),
                o = [];
            return (
                l.forEach((e) => {
                    let t = r.get(e.record.id);
                    null != t &&
                        o.push({
                            type: ei.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: en.Ay.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                o.sort(c.A),
                o.length > n && (o.length = n),
                o
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = el, boosters: a = {} } = e,
                s = (0, et.sS)((0, et.S8)(t.toLocaleLowerCase())),
                o = {
                    exactQuery: RegExp(`^${J.A.escape(s)}`, "i"),
                    containQuery: RegExp(J.A.escape(s), "i"),
                    queryLower: s,
                },
                d = l()(_.A.getMutablePrivateChannels()).values().value(),
                E = [];
            for (let e of d) {
                if (!e.isMultiUserDM() || !r(e)) continue;
                let t = (0, u.m1)(e, K.default, j.A).toLocaleLowerCase(),
                    n = (0, et.sS)((0, et.S8)(t)),
                    s = eg(n, o, i),
                    l = [];
                for (let t of e.recipients) {
                    let e = K.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        i = en.Ay.getGlobalName(e),
                        r = j.A.getNickname(t);
                    null != n && l.push(n), null != i && l.push(i), null != r && l.push(r);
                }
                for (let e of l) {
                    let t = Math.min(5, eg((0, et.sS)((0, et.S8)(e.toLocaleLowerCase())), o, i));
                    t > s && (s = t);
                }
                s > 0 &&
                    E.push({
                        type: ei.rD.GROUP_DM,
                        record: e,
                        score: eh(s, a[e.id]),
                        comparator: (0, u.m1)(e, K.default, j.A),
                        sortable: n,
                    });
            }
            return E.sort(c.A), E.length > n && (E.length = n), E;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = el } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${J.A.escape(a)}`, "i"),
                    containQuery: RegExp(J.A.escape(a), "i"),
                    queryLower: a,
                },
                l = eA(),
                o = [];
            for (let { application: e } of l) {
                if (!r(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eg(t, s, i);
                n > 0 && o.push({ type: ei.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return o.sort(c.A), o.length > n && (o.length = n), o;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0 } = e,
                r = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${J.A.escape(r)}`, "i"),
                    containQuery: RegExp(J.A.escape(r), "i"),
                    queryLower: r,
                },
                s = {
                    [d.t1.SHOP]: [ea.intl.string(ea.t.pWG4ze)],
                    [d.t1.SHOP_ORBS_TAB]: [
                        ea.intl.string(ea.t.ElYQFS),
                        ea.intl.string(ea.t.pWG4ze),
                        ea.intl.string(ea.t.EBYkzk),
                    ],
                    [d.t1.QUEST_ORBS]: [
                        ea.intl.string(ea.t.ElYQFS),
                        ea.intl.string(ea.t["v/R2aC"]),
                        ea.intl.string(ea.t.qQR4tn),
                    ],
                    [d.t1.NITRO_HOME]: [ea.intl.string(ea.t.Ipxkog)],
                    [d.t1.QUEST_HOME]: [ea.intl.string(ea.t.JALI2K)],
                    [d.t1.APPS_HOME]: [ea.intl.string(ea.t.PHjkRE), ea.intl.string(ea.t.AKcFUj)],
                    [d.t1.SETTINGS]: [ea.intl.string(ea.t["3D5yo/"])],
                },
                l = [];
            for (let e in s) {
                let t = d.t1[e],
                    n = s[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = eg(n, a, i);
                        r > 0 &&
                            l.push({
                                type: ei.rD.IN_APP_NAVIGATION,
                                record: d.SV.fromType(t),
                                score: eh(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return l.sort(c.A), l.length > n && (l.length = n), l;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = el } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${J.A.escape(a)}`, "i"),
                    containQuery: RegExp(J.A.escape(a), "i"),
                    queryLower: a,
                },
                o = l()($.A.getSKUs()).values().value(),
                d = [];
            for (let e of o)
                if (e.type === E.Puh.DURABLE_PRIMARY && r(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eg(t, s, i);
                    n > 0 && d.push({ type: ei.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return d.sort(c.A), d.length > n && (d.length = n), d;
        },
        getRecentlyTalked: eR,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: i = !1,
                    canMentionHere: r = !0,
                    canMentionUsers: s = !0,
                    canMentionRoles: d = !0,
                    canMentionOtherGlobals: c = !0,
                    includeAllGuildUsers: u = !1,
                    includeNonMentionableRoles: _ = !1,
                    checkRecentlyTalkedOnEmptyQuery: A = !0,
                    limit: h = E.rs7,
                    request: I,
                    allowSnowflake: f = !1,
                } = e,
                T = s
                    ? (u && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: h,
                                checkRecentlyTalkedOnEmptyQuery: A,
                                request: I,
                                allowSnowflake: f,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: h,
                                checkRecentlyTalkedOnEmptyQuery: A,
                                allowSnowflake: f,
                            })
                      ).map((e) => {
                          let { record: t, score: i, comparator: r } = e;
                          return {
                              user: t,
                              score: i,
                              comparator: r,
                              nick: x.Ay.getNick(n.guild_id, t.id),
                              status: H.A.getStatus(t.id),
                          };
                      })
                    : [],
                m = T.length,
                g = t.toLowerCase(),
                S = [];
            if (m < h && d) {
                let e = n.getGuildId(),
                    r = F.A.getGuild(e);
                if (null != r) {
                    let n = l()(k.A.getSortedRoles(r.id))
                        .filter((t) => {
                            let { mentionable: n, name: r, id: s } = t;
                            return (
                                (n || i || _) &&
                                (a()(g, r.toLowerCase()) || (f && g === s)) &&
                                s !== ee.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (S = (0, o.Ht)(n, t, { keys: ["name"] }).slice(0, h - m)), (m += S.length);
                }
            }
            let N = [];
            function C(e) {
                !c ||
                    null == e ||
                    ((((m < h || 0 === g.length) && a()(g, e.test)) || g === e.test) &&
                        (m >= h && (S.length > 0 ? S.pop() : T.length > 0 && T.pop()), N.push(e), (m += 1)));
            }
            !n.isPrivate() &&
                i &&
                d &&
                (m < h && a()(g, ec().test) && (N.push(ec()), (m += 1)),
                r && m < h && a()(g, eu().test) && (N.push(eu()), (m += 1)));
            let O = p.r.getConfig({ location: "mention autocomplete" });
            return (
                O.enabled && !O.combineMentionAutocomplete && C(e_?.()), C(eE?.()), { users: T, globals: N, roles: S }
            );
        },
        queryGuildMentionResults(e) {
            let {
                    query: t,
                    guildId: n,
                    canMentionEveryone: i = !1,
                    canMentionUsers: r = !0,
                    canMentionRoles: s = !0,
                    canMentionNonMentionableRoles: o = !1,
                } = e,
                d = r
                    ? this.queryGuildUsers({ guildId: n, query: t }).map((e) => ({
                          ...e,
                          status: H.A.getStatus(e.record.id),
                      }))
                    : [],
                c = d.length,
                u = t.toLowerCase(),
                _ = [];
            if (c < E.rs7 && s) {
                let e = F.A.getGuild(n);
                null != e &&
                    (l()(k.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || i || o) && a()(u, e.name.toLowerCase()) && !(0, P.Oy)(e))
                        .take(E.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let A = [];
            return (
                i &&
                    s &&
                    (c < E.rs7 && a()(u, ec().test) && (A.push(ec()), (c += 1)),
                    c < E.rs7 && a()(u, eu().test) && A.push(eu())),
                { users: d, globals: A, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: i = 10, fuzzy: r = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = RegExp(`^${J.A.escape(a)}`, "i"),
                o = RegExp(J.A.escape(a), "i"),
                d = l()(n)
                    .map((e, t) => {
                        let n = eg(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: s, containQuery: o, queryLower: a },
                            r,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(q.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== i && (d = d.take(i)), d.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                i = t.toLocaleLowerCase(),
                r = {
                    exactQuery: RegExp(`^${J.A.escape(i)}`, "i"),
                    containQuery: RegExp(J.A.escape(i), "i"),
                    queryLower: i,
                },
                a = (0, m.K)(n.id) && !n.features.has(E.GuildFeatures.HUB),
                s = n.features.has(E.GuildFeatures.COMMUNITY),
                l = (0, T.u)(n) && n.features.has(E.GuildFeatures.COMMUNITY),
                o = [
                    { id: er.T4.SERVER_GUIDE, name: ea.intl.string(ea.t.VbpLyU) },
                    { id: er.T4.CHANNEL_BROWSER, name: ea.intl.string(ea.t.et6wav) },
                    { id: er.T4.CUSTOMIZE_COMMUNITY, name: ea.intl.string(ea.t.h9mGOP) },
                ],
                d = [];
            for (let e of o)
                (e.id !== er.T4.SERVER_GUIDE || a) &&
                    (e.id !== er.T4.CHANNEL_BROWSER || s) &&
                    (e.id !== er.T4.CUSTOMIZE_COMMUNITY || l) &&
                    eg(e.name.toLocaleLowerCase(), r, !1) > 0 &&
                    d.push(new M.jb({ id: e.id, name: e.name, type: E.rbe.UNKNOWN, guild_id: n.id }));
            return d;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: i = G.I6, channelTypes: r } = e;
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
            let { query: t, channel: n, channelTypes: i, limit: r = E.rs7, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == i || i.includes(n.type)) && e.push(n), { channels: e };
            }
            let s = [];
            for (let e of em)
                s = s.concat(
                    this.queryChannels({
                        query: t,
                        guildId: n.guild_id,
                        limit: r,
                        fuzzy: !0,
                        filter: (e) => null == i || i.includes(e.type),
                        type: e,
                        allowEmptyQueries: !0,
                        requireVocalConnectAccess: !1,
                        allowSnowflake: a,
                    }),
                );
            return (
                (s = s
                    .filter((e) => {
                        let { record: t } = e;
                        return "null" !== t.id;
                    })
                    .sort(h)),
                null != r && s.length > r && (s = s.slice(0, r)),
                { channels: s.map((e) => e.record) }
            );
        },
        queryChoiceResults(e) {
            let { query: t, choices: n } = e;
            return { choices: this.queryChoice({ query: t, choices: n, limit: null }).map((e) => e.choice) };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: i, maxCount: r = E.rs7, matchComparator: a } = e;
            return (
                b.bW.loadIfNecessary(),
                {
                    emojis: f.Ay.searchWithoutFetchingLatest({
                        channel: n,
                        query: t,
                        count: r,
                        intention: i,
                        matchComparator: a,
                    }),
                }
            );
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, el],
                r = K.default.getCurrentUser(),
                a = new Set(),
                s = [];
            for (let l of (b.bW.loadIfNecessary(), e)) {
                if ("" === l) continue;
                let e = l.toLocaleLowerCase(),
                    o = (0, et.sS)(e),
                    d = RegExp(`^${J.A.escape(o)}`, "i"),
                    c = RegExp(`${J.A.escape(o)}`, "i");
                L.A.getStickerMetadataArrays().forEach((l) => {
                    l.forEach((l, o) => {
                        let u = 0,
                            _ = null,
                            E = L.A.getStickerById(o);
                        if (null == E || !i(E, (0, O.W$)(E, r, n))) return;
                        for (let n of l) {
                            let { type: i, value: r } = n,
                                a = (function (e) {
                                    switch (e) {
                                        case D.cG.STICKER_NAME:
                                            return 11;
                                        case D.cG.CORRELATED_EMOJI:
                                            return 6;
                                        case D.cG.TAG:
                                            return 1;
                                        case D.cG.GUILD_NAME:
                                        case D.cG.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1;
                                    }
                                })(i),
                                s = 0;
                            t
                                ? r === e
                                    ? (s = 10 * a)
                                    : d.test(r)
                                      ? (s = 7 * a)
                                      : (i === D.cG.GUILD_NAME || i === D.cG.PACK_NAME || i === D.cG.STICKER_NAME) &&
                                        c.test(r) &&
                                        (s = 5 * a)
                                : r === e && ((s = 10 * a), (_ = r)),
                                s > u && ((u = s), (_ = r));
                        }
                        let A = R.A.stickerFrecencyWithoutFetchingLatest.getScore(o);
                        null != A && (u *= A / 100),
                            u > 0 &&
                                null != _ &&
                                !a.has(E.id) &&
                                (a.add(E.id), s.push({ sticker: E, comparator: _, score: u }));
                    });
                });
            }
            return (
                0 ===
                    (s = l()(s)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (s = ed),
                s
            );
        },
        querySoundmoji(e, t) {
            let n = K.default.getCurrentUser();
            N.A.isFetching() || N.A.hasFetchedAllSounds() || (0, S.E7)(), b.bW.loadIfNecessary();
            let i = Array.from(N.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, g.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, C.lG)(e, i, n, t);
        },
        matchSentinel: (e, t, n) => !eo.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = F.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? k.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eC,
    };

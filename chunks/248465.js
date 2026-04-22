"use strict";
let r;
n.d(t, { Ay: () => eD, L3: () => eS, X3: () => eT, zy: () => eg }), n(321073), n(667532);
var i = n(91871),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(896170),
    u = n(661439),
    d = n(329308),
    c = n(989133),
    _ = n(47167),
    f = n(182014),
    E = n(626584),
    h = n(508675),
    p = n(15285),
    m = n(202776),
    g = n(473529),
    A = n(69945),
    I = n(796774),
    T = n(209932),
    S = n(147472),
    y = n(361670),
    N = n(931959),
    O = n(679382),
    R = n(842086),
    v = n(863005),
    C = n(152007),
    b = n(735321),
    D = n(594061),
    L = n(95701),
    w = n(34457),
    M = n(427157),
    P = n(734057),
    U = n(760751),
    k = n(205761),
    x = n(808728),
    G = n(696451),
    V = n(317525),
    F = n(71393),
    B = n(320501),
    H = n(576705),
    Y = n(290863),
    W = n(994500),
    j = n(309010),
    K = n(967198),
    $ = n(287809),
    z = n(90165),
    q = n(67480),
    X = n(583613),
    Q = n(403362),
    J = n(860689),
    Z = n(695184),
    ee = n(488926),
    et = n(257120),
    en = n(661191),
    er = n(240248),
    ei = n(427262),
    es = n(652215),
    ea = n(926140),
    eo = n(746080),
    el = n(282435),
    eu = n(985018);
let ed = new E.A("AutocompleteUtils"),
    ec = () => !0,
    e_ = /(\t|\s)/,
    ef = [],
    eE = (r = n(966382).A).MENTION_EVERYONE,
    eh = r.MENTION_HERE,
    ep = r.MENTION_TIMESTAMP,
    em = r.LAUNCHABLE_APPLICATIONS;
function eg() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return 1e3 * e * (t ?? 1);
}
class eA {
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
            t = W.A.getVersion(),
            n = P.A.getPrivateChannelsVersion();
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
                    r = k.A.getScoreWithoutFetchingLatest(n);
                return r > e ? r : e;
            }, 0),
            r = [];
        switch (e) {
            case ea.rD.GUILD:
                r = t.filter((e) => (0, J.fh)(e));
                break;
            case ea.rD.USER:
                r = t.filter((e) => e instanceof L.YB && e.type === es.rbe.DM);
                break;
            case ea.rD.GROUP_DM:
                r = t.filter((e) => e instanceof L.YB && e.isMultiUserDM());
                break;
            case ea.rD.TEXT_CHANNEL:
                r = t.filter((e) => e instanceof L.YB && (0, L.tr)(e.type));
                break;
            case ea.rD.VOICE_CHANNEL:
                r = t.filter((e) => e instanceof L.YB && e.isGuildVocal());
        }
        let i = {};
        for (let t of r) {
            let { id: r } = t,
                s = k.A.getScoreWithoutFetchingLatest(r);
            if (e === ea.rD.USER && t instanceof L.cq) {
                if (t.type === es.rbe.DM) i[(r = t.getRecipientId())] = 1 + s / n;
                else if (t.type === es.rbe.GROUP_DM) {
                    let e = t.recipients.length;
                    for (let r of t.recipients) i[r] = 1 + (s / n) * (1 / e);
                }
            } else i[r] = 1 + s / n;
        }
        for (let e of W.A.getFriendIDs()) i[e] = (i[e] ?? 1) + 0.2;
        for (let e of P.A.getDMUserIds()) i[e] = (i[e] ?? 1) + 0.1;
        return i;
    }
}
let eI = new eA();
function eT(e) {
    return eI.get(e);
}
let eS = [x.I6, x.vM, es.rbe.GUILD_CATEGORY];
function ey(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return 10;
            return 7;
        }
        if (r.test(e)) return 5;
        if (i.split(/(?:,| )+/).every((t) => RegExp(et.A.escape(t), "i").test(e))) return 3;
        if (a && s()(i, e)) return 1;
    } catch (e) {
        ed.error(e);
    }
    return 0;
}
function eN(e) {
    return e?.joinedAt != null && !e.isPending;
}
function eO(e) {
    if (null == e) return [null, null];
    let t = (0, er.sS)(e),
        n = (0, er.S8)(t);
    return [t, n];
}
function eR(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a, boosters: o } = e,
        l = $.default.getUsers(),
        u = K.A.getGuildId(),
        d = t.toLocaleLowerCase(),
        _ = (0, er.S8)(d),
        f = [],
        E = [],
        h = n.length,
        p = 0,
        m = 0;
    for (; p < h; ) {
        let e,
            r,
            c = n[p];
        c instanceof M.A
            ? ((r = c), (e = G.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = c.nick?.toLocaleLowerCase()), (r = l[c.userId]));
        let h = ei.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, er.sS)(n),
                l = (0, er.S8)(i),
                [u, c] = eO(e),
                [p, g] = eO(h);
            (a && t === r.id) ||
            n.substring(0, d.length) === d ||
            i.substring(0, d.length) === d ||
            e?.substring(0, d.length) === d ||
            u?.substring(0, d.length) === d ||
            h?.substring(0, d.length) === d ||
            p?.substring(0, d.length) === d
                ? f.push({
                      type: ea.rD.USER,
                      record: r,
                      score: eg(10, o?.[r.id]),
                      comparator: h ?? e ?? n,
                      sortable: p ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || c?.substring(0, _.length) === _ || g?.substring(0, _.length) === _
                  ? f.push({
                        type: ea.rD.USER,
                        record: r,
                        score: eg(1, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: p ?? u ?? i,
                    })
                  : m < 50 &&
                    (s()(d, i) ||
                        s()(_, l) ||
                        (null != u && s()(d, u)) ||
                        (null != c && s()(_, c)) ||
                        (null != p && s()(d, p)) ||
                        (null != g && s()(_, g))) &&
                    (E.push({
                        type: ea.rD.USER,
                        record: r,
                        score: eg(1, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: p ?? u ?? i,
                    }),
                    (m += 1));
        }
        p += 1;
    }
    return (
        f.sort(c.A),
        f.length < r && (E.sort(c.A), (f = f.concat(E.slice(0, Math.max(0, r - f.length))))),
        f.length > r && (f.length = r),
        f
    );
}
function ev(e, t, n) {
    let r = 0,
        i = null;
    for (let s of t) {
        let t = ey(e, s, n);
        t > r && ((r = t), (i = s));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eC(e, t) {
    let n = P.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(B.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => $.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eN(G.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? G.Ay.getMember(t, e.id) : null;
                  return { type: ea.rD.USER, record: e, score: 0, comparator: r?.nick ?? ei.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let eb = (0, X.L_)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            s = [];
        return (
            o()(P.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = $.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e), s.push({ userId: t, nick: W.A.getNickname(t) }), i.set(t, n));
                    }
                }),
            { channelsByRecipientId: r, recipientsById: i, recipients: s }
        );
    }),
    eD = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eR({
                query: t,
                members: W.A.getFriendIDs()
                    .map((e) => $.default.getUser(e))
                    .filter(Q.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eR({
                query: t,
                members: P.A.getDMUserIds()
                    .map((e) => $.default.getUser(e))
                    .filter(Q.Vq),
                limit: n,
                filter: r,
            });
        },
        queryChannelUsers(e) {
            let t,
                {
                    channelId: n,
                    query: r,
                    limit: i = 10,
                    request: s = !0,
                    checkRecentlyTalkedOnEmptyQuery: a = !0,
                    allowSnowflake: o = !1,
                } = e,
                l = P.A.getChannel(n);
            if (null == l) return [];
            let u = (l.isThread() ? P.A.getChannel(l.parent_id) : null) ?? l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => ({ userId: e, nick: W.A.getNickname(e) ?? null }));
                let e = $.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && a) {
                    let e = eC(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = G.Ay.getMembers(u.guild_id).filter(eN)), s && Z.A.requestMembers(u.guild_id, r, i);
            }
            return eR({
                query: r,
                members: t,
                limit: i,
                filter: (e) => u.isPrivate() || ee.$3({ permission: es.xBc.VIEW_CHANNEL, user: e, context: u }),
                allowSnowflake: o,
            });
        },
        queryGuildUsers(e) {
            let {
                guildId: t,
                query: n,
                limit: r = 10,
                request: i = !0,
                checkRecentlyTalkedOnEmptyQuery: s = !0,
                filter: a,
                allowSnowflake: o,
            } = e;
            if (null == F.A.getGuild(t)) return [];
            if (0 === n.length && s) {
                let e = eC(j.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = G.Ay.getMembers(t).filter(eN);
            return (
                i && n.length > 0 && Z.A.requestMembers(t, n, r),
                eR({ query: n, members: l, limit: r, filter: a, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: s, allowSnowflake: a } = e;
            return eR({ query: t, members: s, limit: i, filter: n, allowSnowflake: a, boosters: r });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: s = !0 } = e;
            return (
                s && t.length > 0 && Z.A.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: s,
                    filter: n,
                    boosters: r,
                    users: o()($.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            var t, n, r;
            let i,
                {
                    query: s,
                    guildId: a,
                    limit: l = es.rs7,
                    fuzzy: u = !0,
                    filter: d = ec,
                    type: f = x.I6,
                    allowEmptyQueries: E = !1,
                    requireVocalConnectAccess: h = !0,
                    boosters: p = {},
                    allowSnowflake: m,
                    includeAllThreads: g,
                } = e,
                A = (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e
                            .split(" ")
                            .filter((e) => "" !== e || t)
                            .map((e) => {
                                let t = e.toLocaleLowerCase();
                                return {
                                    queryLower: t,
                                    exactQuery: RegExp(`^${et.A.escape(t)}`, "i"),
                                    containQuery: RegExp(et.A.escape(t), "i"),
                                    isFullMatch: !1,
                                };
                            });
                    if (e.includes(" ")) {
                        let t = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: t,
                            exactQuery: RegExp(`^${et.A.escape(t).replace(" ", "( |-)")}`, "i"),
                            containQuery: RegExp(et.A.escape(t).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0,
                        });
                    }
                    return n;
                })(s, E),
                I = f === x.I6 || (f !== x.vM && !!(0, L.fT)(f));
            i =
                null != a
                    ? o()(x.Ay.getChannels(a)[f])
                          .map((e) => e.channel)
                          .concat(I ? (g ? P.A.getAllThreadsForGuild(a) : v.A.computeAllActiveJoinedThreads(a)) : [])
                          .value()
                    : o()(P.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(I ? v.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let T = {},
                S = [],
                y = k.A.getMaxScore();
            for (let e of i) {
                if (
                    ((t = e.type),
                    (n = null != a),
                    !(
                        f === t ||
                        ((n || (0, L.zy)(t)) &&
                            (f === x.I6 ? (0, L.tr)(t) || (0, L.ay)(t) : f === x.vM && (0, L.ay)(t)))
                    ) ||
                        ((0, L.zy)(e.type) && !H.A.can(h ? e.accessPermissions : es.xBc.VIEW_CHANNEL, e)) ||
                        !d(e))
                )
                    continue;
                let i = [...A],
                    o = (0, _.m1)(e, $.default, W.A).toLocaleLowerCase(),
                    l = m && s === e.id,
                    c = l ? 10 : ev(o, i, u);
                if (0 !== c) {
                    if (i.length > 0) {
                        for (let t of [
                            (function (e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                return (
                                    null == n &&
                                        (n = t[e.guild_id] = F.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, T),
                            (function (e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                return (
                                    null == n &&
                                        (n = t[e.parent_id] = P.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, T),
                        ]) {
                            if (null == t || "" === t) continue;
                            let e = ev(t, i, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(6, c);
                    }
                    0 !== c &&
                        !(i.length > 1) &&
                        (1 !== i.length || i[0].isFullMatch || l) &&
                        ((r = e.type),
                        f === x.I6 && (0, L.ay)(r) && (c = Math.max(c - 1, 0.5)),
                        e.isThread() && (e.isActiveThread() || (c -= 3), C.A.hasJoined(e.id) || (c -= 5)),
                        (c = Math.min(
                            c + 3 * Math.min(k.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / y, 1),
                            c >= 7 ? 10 : 7,
                        )),
                        S.push({
                            type: (0, L.ay)(e.type) ? ea.rD.VOICE_CHANNEL : ea.rD.TEXT_CHANNEL,
                            record: e,
                            score: eg(c, p[e.id]),
                            comparator: (0, _.m1)(e, $.default, W.A),
                            sortable: o,
                        }));
                }
            }
            return S.sort(c.A), null != l && S.length > l && (S.length = l), S;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: s = ec, boosters: a = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${et.A.escape(o)}`, "i"),
                    containQuery: RegExp(et.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of F.A.getGuildsArray()) {
                if (!s(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? 10 : ey(n, l, r);
                o > 0 &&
                    u.push({ type: ea.rD.GUILD, record: e, score: eg(o, a[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(c.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: s,
                    recipients: a,
                } = eb(P.A.getPrivateChannelsVersion(), W.A.getVersion(), $.default.getUserStoreVersion()),
                o = eR({ query: t, members: a, limit: a.length, boosters: r }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: ea.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: ei.Ay.getUserTag(s.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(c.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ec, boosters: s = {} } = e,
                a = (0, er.sS)((0, er.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${et.A.escape(a)}`, "i"),
                    containQuery: RegExp(et.A.escape(a), "i"),
                    queryLower: a,
                },
                u = o()(P.A.getMutablePrivateChannels()).values().value(),
                d = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.m1)(e, $.default, W.A).toLocaleLowerCase(),
                    n = (0, er.sS)((0, er.S8)(t)),
                    a = ey(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = $.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = ei.Ay.getGlobalName(e),
                        i = W.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(5, ey((0, er.sS)((0, er.S8)(e.toLocaleLowerCase())), l, r));
                    t > a && (a = t);
                }
                a > 0 &&
                    d.push({
                        type: ea.rD.GROUP_DM,
                        record: e,
                        score: eg(a, s[e.id]),
                        comparator: (0, _.m1)(e, $.default, W.A),
                        sortable: n,
                    });
            }
            return d.sort(c.A), d.length > n && (d.length = n), d;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ec } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${et.A.escape(s)}`, "i"),
                    containQuery: RegExp(et.A.escape(s), "i"),
                    queryLower: s,
                },
                o = em(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ey(t, a, r);
                n > 0 && l.push({ type: ea.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(c.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
                i = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${et.A.escape(i)}`, "i"),
                    containQuery: RegExp(et.A.escape(i), "i"),
                    queryLower: i,
                },
                a = {
                    [d.t1.SHOP]: [eu.intl.string(eu.t.pWG4ze)],
                    [d.t1.SHOP_ORBS_TAB]: [
                        eu.intl.string(eu.t.ElYQFS),
                        eu.intl.string(eu.t.pWG4ze),
                        eu.intl.string(eu.t.EBYkzk),
                    ],
                    [d.t1.QUEST_ORBS]: [
                        eu.intl.string(eu.t.ElYQFS),
                        eu.intl.string(eu.t["v/R2aC"]),
                        eu.intl.string(eu.t.qQR4tn),
                    ],
                    [d.t1.NITRO_HOME]: [eu.intl.string(eu.t.Ipxkog)],
                    [d.t1.QUEST_HOME]: [eu.intl.string(eu.t.JALI2K)],
                    [d.t1.APPS_HOME]: [eu.intl.string(eu.t.PHjkRE), eu.intl.string(eu.t.AKcFUj)],
                    [d.t1.SETTINGS]: [eu.intl.string(eu.t["3D5yo/"])],
                },
                o = [];
            for (let e in a) {
                let t = d.t1[e],
                    n = a[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            i = ey(n, s, r);
                        i > 0 &&
                            o.push({
                                type: ea.rD.IN_APP_NAVIGATION,
                                record: d.SV.fromType(t),
                                score: eg(i),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return o.sort(c.A), o.length > n && (o.length = n), o;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ec } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${et.A.escape(s)}`, "i"),
                    containQuery: RegExp(et.A.escape(s), "i"),
                    queryLower: s,
                },
                l = o()(q.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === es.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = ey(t, a, r);
                    n > 0 && u.push({ type: ea.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(c.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: eC,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: r = !1,
                    canMentionHere: i = !0,
                    canMentionUsers: a = !0,
                    canMentionRoles: u = !0,
                    canMentionOtherGlobals: d = !0,
                    includeAllGuildUsers: c = !1,
                    includeNonMentionableRoles: _ = !1,
                    checkRecentlyTalkedOnEmptyQuery: f = !0,
                    limit: E = es.rs7,
                    request: h,
                    allowSnowflake: p = !1,
                } = e,
                m = a
                    ? (c && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: E,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                request: h,
                                allowSnowflake: p,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: E,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                allowSnowflake: p,
                            })
                      ).map((e) => {
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: G.Ay.getNick(n.guild_id, t.id),
                              status: Y.A.getStatus(t.id),
                          };
                      })
                    : [],
                g = m.length,
                A = t.toLowerCase(),
                I = [];
            if (g < E && u) {
                let e = n.getGuildId(),
                    i = F.A.getGuild(e);
                if (null != i) {
                    let n = o()(V.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: a } = t;
                            return (
                                (n || r || _) &&
                                (s()(A, i.toLowerCase()) || (p && A === a)) &&
                                a !== en.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (I = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, E - g)), (g += I.length);
                }
            }
            let T = [];
            return (
                !n.isPrivate() &&
                    r &&
                    u &&
                    (g < E && s()(A, eE().test) && (T.push(eE()), (g += 1)),
                    i && g < E && s()(A, eh().test) && (T.push(eh()), (g += 1))),
                d &&
                    null != ep &&
                    (((g < E || 0 === A.length) && s()(A, ep().test)) || A === ep().test) &&
                    (g >= E && (I.length > 0 ? I.pop() : m.length > 0 && m.pop()), T.push(ep()), (g += 1)),
                { users: m, globals: T, roles: I }
            );
        },
        queryGuildMentionResults(e) {
            let {
                    query: t,
                    guildId: n,
                    canMentionEveryone: r = !1,
                    canMentionUsers: i = !0,
                    canMentionRoles: a = !0,
                    canMentionNonMentionableRoles: l = !1,
                } = e,
                u = i
                    ? this.queryGuildUsers({ guildId: n, query: t }).map((e) => ({
                          ...e,
                          status: Y.A.getStatus(e.record.id),
                      }))
                    : [],
                d = u.length,
                c = t.toLowerCase(),
                _ = [];
            if (d < es.rs7 && a) {
                let e = F.A.getGuild(n);
                null != e &&
                    (o()(V.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && s()(c, e.name.toLowerCase()) && !(0, w.Oy)(e))
                        .take(es.rs7 - d)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (d += _.length));
            }
            let f = [];
            return (
                r &&
                    a &&
                    (d < es.rs7 && s()(c, eE().test) && (f.push(eE()), (d += 1)),
                    d < es.rs7 && s()(c, eh().test) && f.push(eh())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                s = t.toLocaleLowerCase(),
                a = RegExp(`^${et.A.escape(s)}`, "i"),
                l = RegExp(et.A.escape(s), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = ey(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: a, containQuery: l, queryLower: s },
                            i,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(Q.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (u = u.take(r)), u.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp(`^${et.A.escape(r)}`, "i"),
                    containQuery: RegExp(et.A.escape(r), "i"),
                    queryLower: r,
                },
                s = (0, g.K)(n.id) && !n.features.has(es.GuildFeatures.HUB),
                a = n.features.has(es.GuildFeatures.COMMUNITY),
                o = (0, m.u)(n) && n.features.has(es.GuildFeatures.COMMUNITY),
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
                    ey(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new L.jb({ id: e.id, name: e.name, type: es.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = x.I6, channelTypes: i } = e;
            return {
                channels: this.queryChannels({
                    query: t,
                    guildId: n.getGuildId(),
                    limit: void 0,
                    fuzzy: void 0,
                    filter: (e) => null == i || i.includes(e.type),
                    type: r,
                    allowEmptyQueries: !0,
                }).map((e) => e.record),
            };
        },
        queryApplicationCommandChannelResults(e) {
            let { query: t, channel: n, channelTypes: r, limit: i = es.rs7, allowSnowflake: s } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let a = [];
            for (let e of eS)
                a = a.concat(
                    this.queryChannels({
                        query: t,
                        guildId: n.guild_id,
                        limit: i,
                        fuzzy: !0,
                        filter: (e) => null == r || r.includes(e.type),
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
                    .sort(f.A)),
                null != i && a.length > i && (a = a.slice(0, i)),
                { channels: a.map((e) => e.record) }
            );
        },
        queryChoiceResults(e) {
            let { query: t, choices: n } = e;
            return { choices: this.queryChoice({ query: t, choices: n, limit: null }).map((e) => e.choice) };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: r, maxCount: i = es.rs7, matchComparator: s } = e;
            return (
                D.bW.loadIfNecessary(),
                {
                    emojis: h.Ay.searchWithoutFetchingLatest({
                        channel: n,
                        query: t,
                        count: i,
                        intention: r,
                        matchComparator: s,
                    }),
                }
            );
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ec],
                i = $.default.getCurrentUser(),
                s = new Set(),
                a = [];
            for (let o of (D.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, er.sS)(e),
                    u = RegExp(`^${et.A.escape(l)}`, "i"),
                    d = RegExp(`${et.A.escape(l)}`, "i");
                O.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let c = 0,
                            _ = null,
                            f = O.A.getStickerById(l);
                        if (null == f || !r(f, (0, y.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                s = (function (e) {
                                    switch (e) {
                                        case R.cG.STICKER_NAME:
                                            return 11;
                                        case R.cG.CORRELATED_EMOJI:
                                            return 6;
                                        case R.cG.TAG:
                                            return 1;
                                        case R.cG.GUILD_NAME:
                                        case R.cG.PACK_NAME:
                                            return 8;
                                        default:
                                            return 1;
                                    }
                                })(r),
                                a = 0;
                            t
                                ? i === e
                                    ? (a = 10 * s)
                                    : u.test(i)
                                      ? (a = 7 * s)
                                      : (r === R.cG.GUILD_NAME || r === R.cG.PACK_NAME || r === R.cG.STICKER_NAME) &&
                                        d.test(i) &&
                                        (a = 5 * s)
                                : i === e && ((a = 10 * s), (_ = i)),
                                a > c && ((c = a), (_ = i));
                        }
                        let E = N.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != E && (c *= E / 100),
                            c > 0 &&
                                null != _ &&
                                !s.has(f.id) &&
                                (s.add(f.id), a.push({ sticker: f, comparator: _, score: c }));
                    });
                });
            }
            return (
                0 ===
                    (a = o()(a)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (a = ef),
                a
            );
        },
        querySoundmoji(e, t) {
            let n = $.default.getCurrentUser();
            T.A.isFetching() || T.A.hasFetchedAllSounds() || (0, I.E7)(), D.bW.loadIfNecessary();
            let r = Array.from(T.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, A.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, S.lG)(e, r, n, t);
        },
        queryGames(e) {
            let t = p.Ay.getRunningVerifiedApplicationIds();
            null == z.A.lastFetched && u.X();
            let n = z.A.applicationStatistics,
                r = U.A.games;
            return o()(r)
                .filter((e) => !(0, b.nS)(e))
                .map((r) => {
                    let i, a, o;
                    return {
                        game: r,
                        score:
                            ((i = 0),
                            (a = r.name.toLowerCase()),
                            (o = e.toLowerCase()),
                            r.id === o
                                ? (i += 1e3)
                                : a === o
                                  ? (i += 5)
                                  : a.startsWith(o)
                                    ? (i += 4)
                                    : a.includes(o)
                                      ? (i += 3)
                                      : a.endsWith(o)
                                        ? (i += 2)
                                        : s()(o, a) && (i += 1),
                            i > 0 &&
                                (t.includes(r.id) && (i += 10),
                                r.id in n && (i += 2),
                                el.Bf.has(r.id) && (i += el.Bf.get(r.id) / el.Bf.size)),
                            i),
                    };
                })
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
                .slice(0, es.rs7);
        },
        matchSentinel: (e, t, n) => !e_.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = F.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? V.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eR,
    };

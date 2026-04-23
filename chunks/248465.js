"use strict";
let r;
n.d(t, { Ay: () => eN, L3: () => eE, X3: () => eh, zy: () => e_ }), n(321073), n(667532);
var i = n(91871),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(896170),
    u = n(329308),
    c = n(989133),
    d = n(47167),
    _ = n(182014),
    f = n(626584),
    p = n(508675),
    h = n(202776),
    E = n(473529),
    m = n(69945),
    g = n(796774),
    A = n(209932),
    I = n(147472),
    T = n(361670),
    S = n(931959),
    y = n(679382),
    N = n(842086),
    v = n(863005),
    C = n(152007),
    O = n(594061),
    R = n(95701),
    b = n(34457),
    D = n(427157),
    L = n(734057),
    w = n(205761),
    M = n(808728),
    P = n(696451),
    x = n(317525),
    k = n(71393),
    U = n(320501),
    G = n(576705),
    F = n(290863),
    V = n(994500),
    B = n(309010),
    H = n(967198),
    j = n(287809),
    Y = n(67480),
    W = n(583613),
    K = n(403362),
    $ = n(860689),
    z = n(695184),
    q = n(488926),
    X = n(257120),
    Q = n(661191),
    Z = n(240248),
    J = n(427262),
    ee = n(652215),
    et = n(926140),
    en = n(746080),
    er = n(985018);
let ei = new f.A("AutocompleteUtils"),
    es = () => !0,
    ea = /(\t|\s)/,
    eo = [],
    el = (r = n(966382).A).MENTION_EVERYONE,
    eu = r.MENTION_HERE,
    ec = r.MENTION_TIMESTAMP,
    ed = r.LAUNCHABLE_APPLICATIONS;
function e_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return 1e3 * e * (t ?? 1);
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
            t = V.A.getVersion(),
            n = L.A.getPrivateChannelsVersion();
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
                    r = w.A.getScoreWithoutFetchingLatest(n);
                return r > e ? r : e;
            }, 0),
            r = [];
        switch (e) {
            case et.rD.GUILD:
                r = t.filter((e) => (0, $.fh)(e));
                break;
            case et.rD.USER:
                r = t.filter((e) => e instanceof R.YB && e.type === ee.rbe.DM);
                break;
            case et.rD.GROUP_DM:
                r = t.filter((e) => e instanceof R.YB && e.isMultiUserDM());
                break;
            case et.rD.TEXT_CHANNEL:
                r = t.filter((e) => e instanceof R.YB && (0, R.tr)(e.type));
                break;
            case et.rD.VOICE_CHANNEL:
                r = t.filter((e) => e instanceof R.YB && e.isGuildVocal());
        }
        let i = {};
        for (let t of r) {
            let { id: r } = t,
                s = w.A.getScoreWithoutFetchingLatest(r);
            if (e === et.rD.USER && t instanceof R.cq) {
                if (t.type === ee.rbe.DM) i[(r = t.getRecipientId())] = 1 + s / n;
                else if (t.type === ee.rbe.GROUP_DM) {
                    let e = t.recipients.length;
                    for (let r of t.recipients) i[r] = 1 + (s / n) * (1 / e);
                }
            } else i[r] = 1 + s / n;
        }
        for (let e of V.A.getFriendIDs()) i[e] = (i[e] ?? 1) + 0.2;
        for (let e of L.A.getDMUserIds()) i[e] = (i[e] ?? 1) + 0.1;
        return i;
    }
}
let ep = new ef();
function eh(e) {
    return ep.get(e);
}
let eE = [M.I6, M.vM, ee.rbe.GUILD_CATEGORY];
function em(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return 10;
            return 7;
        }
        if (r.test(e)) return 5;
        if (i.split(/(?:,| )+/).every((t) => RegExp(X.A.escape(t), "i").test(e))) return 3;
        if (a && s()(i, e)) return 1;
    } catch (e) {
        ei.error(e);
    }
    return 0;
}
function eg(e) {
    return e?.joinedAt != null && !e.isPending;
}
function eA(e) {
    if (null == e) return [null, null];
    let t = (0, Z.sS)(e),
        n = (0, Z.S8)(t);
    return [t, n];
}
function eI(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a, boosters: o } = e,
        l = j.default.getUsers(),
        u = H.A.getGuildId(),
        d = t.toLocaleLowerCase(),
        _ = (0, Z.S8)(d),
        f = [],
        p = [],
        h = n.length,
        E = 0,
        m = 0;
    for (; E < h; ) {
        let e,
            r,
            c = n[E];
        c instanceof D.A
            ? ((r = c), (e = P.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = c.nick?.toLocaleLowerCase()), (r = l[c.userId]));
        let h = J.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, Z.sS)(n),
                l = (0, Z.S8)(i),
                [u, c] = eA(e),
                [E, g] = eA(h);
            (a && t === r.id) ||
            n.substring(0, d.length) === d ||
            i.substring(0, d.length) === d ||
            e?.substring(0, d.length) === d ||
            u?.substring(0, d.length) === d ||
            h?.substring(0, d.length) === d ||
            E?.substring(0, d.length) === d
                ? f.push({
                      type: et.rD.USER,
                      record: r,
                      score: e_(10, o?.[r.id]),
                      comparator: h ?? e ?? n,
                      sortable: E ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || c?.substring(0, _.length) === _ || g?.substring(0, _.length) === _
                  ? f.push({
                        type: et.rD.USER,
                        record: r,
                        score: e_(1, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: E ?? u ?? i,
                    })
                  : m < 50 &&
                    (s()(d, i) ||
                        s()(_, l) ||
                        (null != u && s()(d, u)) ||
                        (null != c && s()(_, c)) ||
                        (null != E && s()(d, E)) ||
                        (null != g && s()(_, g))) &&
                    (p.push({
                        type: et.rD.USER,
                        record: r,
                        score: e_(1, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: E ?? u ?? i,
                    }),
                    (m += 1));
        }
        E += 1;
    }
    return (
        f.sort(c.A),
        f.length < r && (p.sort(c.A), (f = f.concat(p.slice(0, Math.max(0, r - f.length))))),
        f.length > r && (f.length = r),
        f
    );
}
function eT(e, t, n) {
    let r = 0,
        i = null;
    for (let s of t) {
        let t = em(e, s, n);
        t > r && ((r = t), (i = s));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eS(e, t) {
    let n = L.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(U.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => j.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eg(P.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? P.Ay.getMember(t, e.id) : null;
                  return { type: et.rD.USER, record: e, score: 0, comparator: r?.nick ?? J.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let ey = (0, W.L_)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            s = [];
        return (
            o()(L.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = j.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e), s.push({ userId: t, nick: V.A.getNickname(t) }), i.set(t, n));
                    }
                }),
            { channelsByRecipientId: r, recipientsById: i, recipients: s }
        );
    }),
    eN = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eI({
                query: t,
                members: V.A.getFriendIDs()
                    .map((e) => j.default.getUser(e))
                    .filter(K.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eI({
                query: t,
                members: L.A.getDMUserIds()
                    .map((e) => j.default.getUser(e))
                    .filter(K.Vq),
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
                l = L.A.getChannel(n);
            if (null == l) return [];
            let u = (l.isThread() ? L.A.getChannel(l.parent_id) : null) ?? l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => ({ userId: e, nick: V.A.getNickname(e) ?? null }));
                let e = j.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && a) {
                    let e = eS(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = P.Ay.getMembers(u.guild_id).filter(eg)), s && z.A.requestMembers(u.guild_id, r, i);
            }
            return eI({
                query: r,
                members: t,
                limit: i,
                filter: (e) => u.isPrivate() || q.$3({ permission: ee.xBc.VIEW_CHANNEL, user: e, context: u }),
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
            if (null == k.A.getGuild(t)) return [];
            if (0 === n.length && s) {
                let e = eS(B.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = P.Ay.getMembers(t).filter(eg);
            return (
                i && n.length > 0 && z.A.requestMembers(t, n, r),
                eI({ query: n, members: l, limit: r, filter: a, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: s, allowSnowflake: a } = e;
            return eI({ query: t, members: s, limit: i, filter: n, allowSnowflake: a, boosters: r });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: s = !0 } = e;
            return (
                s && t.length > 0 && z.A.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: s,
                    filter: n,
                    boosters: r,
                    users: o()(j.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            var t, n, r;
            let i,
                {
                    query: s,
                    guildId: a,
                    limit: l = ee.rs7,
                    fuzzy: u = !0,
                    filter: _ = es,
                    type: f = M.I6,
                    allowEmptyQueries: p = !1,
                    requireVocalConnectAccess: h = !0,
                    boosters: E = {},
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
                                    exactQuery: RegExp(`^${X.A.escape(t)}`, "i"),
                                    containQuery: RegExp(X.A.escape(t), "i"),
                                    isFullMatch: !1,
                                };
                            });
                    if (e.includes(" ")) {
                        let t = e.toLocaleLowerCase();
                        n.unshift({
                            queryLower: t,
                            exactQuery: RegExp(`^${X.A.escape(t).replace(" ", "( |-)")}`, "i"),
                            containQuery: RegExp(X.A.escape(t).replace(" ", "( |-)"), "i"),
                            isFullMatch: !0,
                        });
                    }
                    return n;
                })(s, p),
                I = f === M.I6 || (f !== M.vM && !!(0, R.fT)(f));
            i =
                null != a
                    ? o()(M.Ay.getChannels(a)[f])
                          .map((e) => e.channel)
                          .concat(I ? (g ? L.A.getAllThreadsForGuild(a) : v.A.computeAllActiveJoinedThreads(a)) : [])
                          .value()
                    : o()(L.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(I ? v.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let T = {},
                S = [],
                y = w.A.getMaxScore();
            for (let e of i) {
                if (
                    ((t = e.type),
                    (n = null != a),
                    !(
                        f === t ||
                        ((n || (0, R.zy)(t)) &&
                            (f === M.I6 ? (0, R.tr)(t) || (0, R.ay)(t) : f === M.vM && (0, R.ay)(t)))
                    ) ||
                        ((0, R.zy)(e.type) && !G.A.can(h ? e.accessPermissions : ee.xBc.VIEW_CHANNEL, e)) ||
                        !_(e))
                )
                    continue;
                let i = [...A],
                    o = (0, d.m1)(e, j.default, V.A).toLocaleLowerCase(),
                    l = m && s === e.id,
                    c = l ? 10 : eT(o, i, u);
                if (0 !== c) {
                    if (i.length > 0) {
                        for (let t of [
                            (function (e, t) {
                                if (null == e.guild_id) return;
                                let n = t[e.guild_id];
                                return (
                                    null == n &&
                                        (n = t[e.guild_id] = k.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, T),
                            (function (e, t) {
                                if (null == e.parent_id) return;
                                let n = t[e.parent_id];
                                return (
                                    null == n &&
                                        (n = t[e.parent_id] = L.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()),
                                    n
                                );
                            })(e, T),
                        ]) {
                            if (null == t || "" === t) continue;
                            let e = eT(t, i, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(6, c);
                    }
                    0 !== c &&
                        !(i.length > 1) &&
                        (1 !== i.length || i[0].isFullMatch || l) &&
                        ((r = e.type),
                        f === M.I6 && (0, R.ay)(r) && (c = Math.max(c - 1, 0.5)),
                        e.isThread() && (e.isActiveThread() || (c -= 3), C.A.hasJoined(e.id) || (c -= 5)),
                        (c = Math.min(
                            c + 3 * Math.min(w.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / y, 1),
                            c >= 7 ? 10 : 7,
                        )),
                        S.push({
                            type: (0, R.ay)(e.type) ? et.rD.VOICE_CHANNEL : et.rD.TEXT_CHANNEL,
                            record: e,
                            score: e_(c, E[e.id]),
                            comparator: (0, d.m1)(e, j.default, V.A),
                            sortable: o,
                        }));
                }
            }
            return S.sort(c.A), null != l && S.length > l && (S.length = l), S;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: s = es, boosters: a = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${X.A.escape(o)}`, "i"),
                    containQuery: RegExp(X.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of k.A.getGuildsArray()) {
                if (!s(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? 10 : em(n, l, r);
                o > 0 &&
                    u.push({ type: et.rD.GUILD, record: e, score: e_(o, a[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(c.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: s,
                    recipients: a,
                } = ey(L.A.getPrivateChannelsVersion(), V.A.getVersion(), j.default.getUserStoreVersion()),
                o = eI({ query: t, members: a, limit: a.length, boosters: r }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: et.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: J.Ay.getUserTag(s.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(c.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = es, boosters: s = {} } = e,
                a = (0, Z.sS)((0, Z.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${X.A.escape(a)}`, "i"),
                    containQuery: RegExp(X.A.escape(a), "i"),
                    queryLower: a,
                },
                u = o()(L.A.getMutablePrivateChannels()).values().value(),
                _ = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, d.m1)(e, j.default, V.A).toLocaleLowerCase(),
                    n = (0, Z.sS)((0, Z.S8)(t)),
                    a = em(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = j.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = J.Ay.getGlobalName(e),
                        i = V.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(5, em((0, Z.sS)((0, Z.S8)(e.toLocaleLowerCase())), l, r));
                    t > a && (a = t);
                }
                a > 0 &&
                    _.push({
                        type: et.rD.GROUP_DM,
                        record: e,
                        score: e_(a, s[e.id]),
                        comparator: (0, d.m1)(e, j.default, V.A),
                        sortable: n,
                    });
            }
            return _.sort(c.A), _.length > n && (_.length = n), _;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = es } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${X.A.escape(s)}`, "i"),
                    containQuery: RegExp(X.A.escape(s), "i"),
                    queryLower: s,
                },
                o = ed(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = em(t, a, r);
                n > 0 && l.push({ type: et.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(c.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
                i = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${X.A.escape(i)}`, "i"),
                    containQuery: RegExp(X.A.escape(i), "i"),
                    queryLower: i,
                },
                a = {
                    [u.t1.SHOP]: [er.intl.string(er.t.pWG4ze)],
                    [u.t1.SHOP_ORBS_TAB]: [
                        er.intl.string(er.t.ElYQFS),
                        er.intl.string(er.t.pWG4ze),
                        er.intl.string(er.t.EBYkzk),
                    ],
                    [u.t1.QUEST_ORBS]: [
                        er.intl.string(er.t.ElYQFS),
                        er.intl.string(er.t["v/R2aC"]),
                        er.intl.string(er.t.qQR4tn),
                    ],
                    [u.t1.NITRO_HOME]: [er.intl.string(er.t.Ipxkog)],
                    [u.t1.QUEST_HOME]: [er.intl.string(er.t.JALI2K)],
                    [u.t1.APPS_HOME]: [er.intl.string(er.t.PHjkRE), er.intl.string(er.t.AKcFUj)],
                    [u.t1.SETTINGS]: [er.intl.string(er.t["3D5yo/"])],
                },
                o = [];
            for (let e in a) {
                let t = u.t1[e],
                    n = a[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            i = em(n, s, r);
                        i > 0 &&
                            o.push({
                                type: et.rD.IN_APP_NAVIGATION,
                                record: u.SV.fromType(t),
                                score: e_(i),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return o.sort(c.A), o.length > n && (o.length = n), o;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = es } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${X.A.escape(s)}`, "i"),
                    containQuery: RegExp(X.A.escape(s), "i"),
                    queryLower: s,
                },
                l = o()(Y.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === ee.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = em(t, a, r);
                    n > 0 && u.push({ type: et.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(c.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: eS,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: r = !1,
                    canMentionHere: i = !0,
                    canMentionUsers: a = !0,
                    canMentionRoles: u = !0,
                    canMentionOtherGlobals: c = !0,
                    includeAllGuildUsers: d = !1,
                    includeNonMentionableRoles: _ = !1,
                    checkRecentlyTalkedOnEmptyQuery: f = !0,
                    limit: p = ee.rs7,
                    request: h,
                    allowSnowflake: E = !1,
                } = e,
                m = a
                    ? (d && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: p,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                request: h,
                                allowSnowflake: E,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: p,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                allowSnowflake: E,
                            })
                      ).map((e) => {
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: P.Ay.getNick(n.guild_id, t.id),
                              status: F.A.getStatus(t.id),
                          };
                      })
                    : [],
                g = m.length,
                A = t.toLowerCase(),
                I = [];
            if (g < p && u) {
                let e = n.getGuildId(),
                    i = k.A.getGuild(e);
                if (null != i) {
                    let n = o()(x.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: a } = t;
                            return (
                                (n || r || _) &&
                                (s()(A, i.toLowerCase()) || (E && A === a)) &&
                                a !== Q.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (I = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, p - g)), (g += I.length);
                }
            }
            let T = [];
            return (
                !n.isPrivate() &&
                    r &&
                    u &&
                    (g < p && s()(A, el().test) && (T.push(el()), (g += 1)),
                    i && g < p && s()(A, eu().test) && (T.push(eu()), (g += 1))),
                c &&
                    null != ec &&
                    (((g < p || 0 === A.length) && s()(A, ec().test)) || A === ec().test) &&
                    (g >= p && (I.length > 0 ? I.pop() : m.length > 0 && m.pop()), T.push(ec()), (g += 1)),
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
                          status: F.A.getStatus(e.record.id),
                      }))
                    : [],
                c = u.length,
                d = t.toLowerCase(),
                _ = [];
            if (c < ee.rs7 && a) {
                let e = k.A.getGuild(n);
                null != e &&
                    (o()(x.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && s()(d, e.name.toLowerCase()) && !(0, b.Oy)(e))
                        .take(ee.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                r &&
                    a &&
                    (c < ee.rs7 && s()(d, el().test) && (f.push(el()), (c += 1)),
                    c < ee.rs7 && s()(d, eu().test) && f.push(eu())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                s = t.toLocaleLowerCase(),
                a = RegExp(`^${X.A.escape(s)}`, "i"),
                l = RegExp(X.A.escape(s), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = em(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: a, containQuery: l, queryLower: s },
                            i,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(K.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (u = u.take(r)), u.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp(`^${X.A.escape(r)}`, "i"),
                    containQuery: RegExp(X.A.escape(r), "i"),
                    queryLower: r,
                },
                s = (0, E.K)(n.id) && !n.features.has(ee.GuildFeatures.HUB),
                a = n.features.has(ee.GuildFeatures.COMMUNITY),
                o = (0, h.u)(n) && n.features.has(ee.GuildFeatures.COMMUNITY),
                l = [
                    { id: en.T4.SERVER_GUIDE, name: er.intl.string(er.t.VbpLyU) },
                    { id: en.T4.CHANNEL_BROWSER, name: er.intl.string(er.t.et6wav) },
                    { id: en.T4.CUSTOMIZE_COMMUNITY, name: er.intl.string(er.t.h9mGOP) },
                ],
                u = [];
            for (let e of l)
                (e.id !== en.T4.SERVER_GUIDE || s) &&
                    (e.id !== en.T4.CHANNEL_BROWSER || a) &&
                    (e.id !== en.T4.CUSTOMIZE_COMMUNITY || o) &&
                    em(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new R.jb({ id: e.id, name: e.name, type: ee.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = M.I6, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = ee.rs7, allowSnowflake: s } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let a = [];
            for (let e of eE)
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
                    .sort(_.A)),
                null != i && a.length > i && (a = a.slice(0, i)),
                { channels: a.map((e) => e.record) }
            );
        },
        queryChoiceResults(e) {
            let { query: t, choices: n } = e;
            return { choices: this.queryChoice({ query: t, choices: n, limit: null }).map((e) => e.choice) };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: r, maxCount: i = ee.rs7, matchComparator: s } = e;
            return (
                O.bW.loadIfNecessary(),
                {
                    emojis: p.Ay.searchWithoutFetchingLatest({
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, es],
                i = j.default.getCurrentUser(),
                s = new Set(),
                a = [];
            for (let o of (O.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, Z.sS)(e),
                    u = RegExp(`^${X.A.escape(l)}`, "i"),
                    c = RegExp(`${X.A.escape(l)}`, "i");
                y.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            f = y.A.getStickerById(l);
                        if (null == f || !r(f, (0, T.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                s = (function (e) {
                                    switch (e) {
                                        case N.cG.STICKER_NAME:
                                            return 11;
                                        case N.cG.CORRELATED_EMOJI:
                                            return 6;
                                        case N.cG.TAG:
                                            return 1;
                                        case N.cG.GUILD_NAME:
                                        case N.cG.PACK_NAME:
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
                                      : (r === N.cG.GUILD_NAME || r === N.cG.PACK_NAME || r === N.cG.STICKER_NAME) &&
                                        c.test(i) &&
                                        (a = 5 * s)
                                : i === e && ((a = 10 * s), (_ = i)),
                                a > d && ((d = a), (_ = i));
                        }
                        let p = S.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != p && (d *= p / 100),
                            d > 0 &&
                                null != _ &&
                                !s.has(f.id) &&
                                (s.add(f.id), a.push({ sticker: f, comparator: _, score: d }));
                    });
                });
            }
            return (
                0 ===
                    (a = o()(a)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (a = eo),
                a
            );
        },
        querySoundmoji(e, t) {
            let n = j.default.getCurrentUser();
            A.A.isFetching() || A.A.hasFetchedAllSounds() || (0, g.E7)(), O.bW.loadIfNecessary();
            let r = Array.from(A.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, m.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, I.lG)(e, r, n, t);
        },
        matchSentinel: (e, t, n) => !ea.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = k.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? x.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eI,
    };

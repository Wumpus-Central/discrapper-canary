"use strict";
let r;
n.d(t, { Ay: () => e5, L3: () => eY, X3: () => eH, zy: () => ej }), n(321073), n(667532);
var i = n(91871),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(896170),
    u = n(661439),
    c = n(329308),
    d = n(989133),
    _ = n(47167),
    f = n(857157),
    h = n(182014),
    p = n(626584),
    g = n(790271),
    E = n(508675),
    A = n(15285),
    I = n(352505),
    T = n(202776),
    y = n(473529),
    S = n(69945),
    v = n(796774),
    C = n(209932),
    b = n(147472),
    N = n(361670),
    R = n(931959),
    O = n(679382),
    D = n(842086),
    L = n(863005),
    w = n(152007),
    x = n(735321),
    P = n(594061),
    M = n(95701),
    k = n(34457),
    U = n(427157),
    G = n(961350),
    F = n(734057),
    V = n(760751),
    B = n(205761),
    j = n(808728),
    H = n(696451),
    Y = n(317525),
    W = n(71393),
    K = n(320501),
    $ = n(576705),
    z = n(290863),
    q = n(994500),
    X = n(309010),
    Z = n(967198),
    Q = n(287809),
    J = n(90165),
    ee = n(67480),
    et = n(583613),
    en = n(403362),
    er = n(860689),
    ei = n(695184),
    ea = n(488926),
    es = n(257120),
    eo = n(661191),
    el = n(240248),
    eu = n(427262),
    ec = n(652215),
    ed = n(926140),
    e_ = n(746080),
    ef = n(282435),
    eh = n(985018);
let ep = new p.A("AutocompleteUtils"),
    em = 10,
    eg = 8,
    eE = 7,
    eA = 5,
    eI = 3,
    eT = 1,
    ey = 1,
    eS = 3,
    ev = 5,
    eC = 3,
    eb = 11,
    eN = 6,
    eR = 8,
    eO = 1,
    eD = 1e3,
    eL = 0.2,
    ew = 0.1,
    ex = 50,
    eP = () => !0,
    eM = /(\t|\s)/,
    ek = [],
    eU = (r = n(966382).A).MENTION_EVERYONE,
    eG = r.MENTION_HERE,
    eF = r.MENTION_GAME,
    eV = r.MENTION_TIMESTAMP,
    eB = r.LAUNCHABLE_APPLICATIONS;
function ej() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eD * e * (t ?? 1);
}
function eH(e) {
    let t = B.A.getFrequentlyWithoutFetchingLatest(),
        n = t.reduce((e, t) => {
            let { id: n } = t,
                r = B.A.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        r = [];
    switch (e) {
        case ed.rD.GUILD:
            r = t.filter((e) => (0, er.fh)(e));
            break;
        case ed.rD.USER:
            r = t.filter((e) => e instanceof M.YB && e.type === ec.rbe.DM);
            break;
        case ed.rD.GROUP_DM:
            r = t.filter((e) => e instanceof M.YB && e.isMultiUserDM());
            break;
        case ed.rD.TEXT_CHANNEL:
            r = t.filter((e) => e instanceof M.YB && (0, M.tr)(e.type));
            break;
        case ed.rD.VOICE_CHANNEL:
            r = t.filter((e) => e instanceof M.YB && e.isGuildVocal());
    }
    let i = {};
    for (let t of r) {
        let { id: r } = t,
            a = B.A.getScoreWithoutFetchingLatest(r);
        if (e === ed.rD.USER && t instanceof M.cq) {
            if (t.type === ec.rbe.DM) i[(r = t.getRecipientId())] = 1 + a / n;
            else if (t.type === ec.rbe.GROUP_DM) {
                let e = t.recipients.length;
                for (let r of t.recipients) i[r] = 1 + (a / n) * (1 / e);
            }
        } else i[r] = 1 + a / n;
    }
    for (let e of q.A.getFriendIDs()) i[e] = (i[e] ?? 1) + eL;
    for (let e of F.A.getDMUserIds()) i[e] = (i[e] ?? 1) + ew;
    return i;
}
let eY = [j.I6, j.vM, ec.rbe.GUILD_CATEGORY];
function eW(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(es.A.escape(e), "i").test(t));
}
function eK(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return em;
            return eE;
        }
        if (r.test(e)) return eA;
        if (eW(i, e)) return eI;
        if (s && a()(i, e)) return eT;
    } catch (e) {
        ep.error(e);
    }
    return 0;
}
function e$(e) {
    return e?.joinedAt != null && !e.isPending;
}
function ez(e) {
    if (null == e) return [null, null];
    let t = (0, el.sS)(e),
        n = (0, el.S8)(t);
    return [t, n];
}
function eq(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: s, boosters: o } = e,
        l = Q.default.getUsers(),
        u = Z.A.getGuildId(),
        c = t.toLocaleLowerCase(),
        _ = (0, el.S8)(c),
        f = [],
        h = [],
        p = n.length,
        g = 0,
        E = 0;
    for (; g < p; ) {
        let e,
            r,
            d = n[g];
        d instanceof U.A
            ? ((r = d), (e = H.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = d.nick?.toLocaleLowerCase()), (r = l[d.userId]));
        let p = eu.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, el.sS)(n),
                l = (0, el.S8)(i),
                [u, d] = ez(e),
                [g, A] = ez(p);
            (s && t === r.id) ||
            n.substring(0, c.length) === c ||
            i.substring(0, c.length) === c ||
            e?.substring(0, c.length) === c ||
            u?.substring(0, c.length) === c ||
            p?.substring(0, c.length) === c ||
            g?.substring(0, c.length) === c
                ? f.push({
                      type: ed.rD.USER,
                      record: r,
                      score: ej(em, o?.[r.id]),
                      comparator: p ?? e ?? n,
                      sortable: g ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || d?.substring(0, _.length) === _ || A?.substring(0, _.length) === _
                  ? f.push({
                        type: ed.rD.USER,
                        record: r,
                        score: ej(eT, o?.[r.id]),
                        comparator: p ?? e ?? n,
                        sortable: g ?? u ?? i,
                    })
                  : E < ex &&
                    (a()(c, i) ||
                        a()(_, l) ||
                        (null != u && a()(c, u)) ||
                        (null != d && a()(_, d)) ||
                        (null != g && a()(c, g)) ||
                        (null != A && a()(_, A))) &&
                    (h.push({
                        type: ed.rD.USER,
                        record: r,
                        score: ej(eT, o?.[r.id]),
                        comparator: p ?? e ?? n,
                        sortable: g ?? u ?? i,
                    }),
                    (E += 1));
        }
        g += 1;
    }
    return (
        f.sort(d.A),
        f.length < r && (h.sort(d.A), (f = f.concat(h.slice(0, Math.max(0, r - f.length))))),
        f.length > r && (f.length = r),
        f
    );
}
function eX(e) {
    switch (e) {
        case D.cG.STICKER_NAME:
            return eb;
        case D.cG.CORRELATED_EMOJI:
            return eN;
        case D.cG.TAG:
            return eO;
        case D.cG.GUILD_NAME:
        case D.cG.PACK_NAME:
            return eR;
        default:
            return 1;
    }
}
function eZ(e) {
    return e === j.I6 || (e !== j.vM && !!(0, M.fT)(e));
}
function eQ(e, t, n) {
    return (
        e === t || ((!!n || !!(0, M.zy)(t)) && (e === j.I6 ? (0, M.tr)(t) || (0, M.ay)(t) : e === j.vM && (0, M.ay)(t)))
    );
}
function eJ(e, t) {
    return e === j.I6 && (0, M.ay)(t);
}
function e0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(" ")
            .filter((e) => "" !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp(`^${es.A.escape(t)}`, "i"),
                    containQuery: RegExp(es.A.escape(t), "i"),
                    isFullMatch: !1,
                };
            });
    if (e.includes(" ")) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp(`^${es.A.escape(t).replace(" ", "( |-)")}`, "i"),
            containQuery: RegExp(es.A.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0,
        });
    }
    return n;
}
function e1(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eK(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function e2(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    return null == n && (n = t[e.guild_id] = W.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()), n;
}
function e3(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    return null == n && (n = t[e.parent_id] = F.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()), n;
}
function e6(e, t) {
    let n = F.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(K.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Q.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || e$(H.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? H.Ay.getMember(t, e.id) : null;
                  return { type: ed.rD.USER, record: e, score: 0, comparator: r?.nick ?? eu.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let e4 = (0, et.L_)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            a = [];
        return (
            o()(F.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = Q.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e), a.push({ userId: t, nick: q.A.getNickname(t) }), i.set(t, n));
                    }
                }),
            { channelsByRecipientId: r, recipientsById: i, recipients: a }
        );
    }),
    e5 = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eq({
                query: t,
                members: q.A.getFriendIDs()
                    .map((e) => Q.default.getUser(e))
                    .filter(en.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eq({
                query: t,
                members: F.A.getDMUserIds()
                    .map((e) => Q.default.getUser(e))
                    .filter(en.Vq),
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
                    request: a = !0,
                    checkRecentlyTalkedOnEmptyQuery: s = !0,
                    allowSnowflake: o = !1,
                } = e,
                l = F.A.getChannel(n);
            if (null == l) return [];
            let u = (l.isThread() ? F.A.getChannel(l.parent_id) : null) ?? l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => ({ userId: e, nick: q.A.getNickname(e) ?? null }));
                let e = Q.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && s) {
                    let e = e6(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = H.Ay.getMembers(u.guild_id).filter(e$)), a && ei.A.requestMembers(u.guild_id, r, i);
            }
            return eq({
                query: r,
                members: t,
                limit: i,
                filter: (e) => u.isPrivate() || ea.$3({ permission: ec.xBc.VIEW_CHANNEL, user: e, context: u }),
                allowSnowflake: o,
            });
        },
        queryGuildUsers(e) {
            let {
                guildId: t,
                query: n,
                limit: r = 10,
                request: i = !0,
                checkRecentlyTalkedOnEmptyQuery: a = !0,
                filter: s,
                allowSnowflake: o,
            } = e;
            if (null == W.A.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = e6(X.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = H.Ay.getMembers(t).filter(e$);
            return (
                i && n.length > 0 && ei.A.requestMembers(t, n, r),
                eq({ query: n, members: l, limit: r, filter: s, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: a, allowSnowflake: s } = e;
            return eq({ query: t, members: a, limit: i, filter: n, allowSnowflake: s, boosters: r });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: a = !0 } = e;
            return (
                a && t.length > 0 && ei.A.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: a,
                    filter: n,
                    boosters: r,
                    users: o()(Q.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            let t,
                {
                    query: n,
                    guildId: r,
                    limit: i = ec.rs7,
                    fuzzy: a = !0,
                    filter: s = eP,
                    type: l = j.I6,
                    allowEmptyQueries: u = !1,
                    requireVocalConnectAccess: c = !0,
                    boosters: f = {},
                    allowSnowflake: h,
                    includeAllThreads: p,
                } = e,
                g = e0(n, u),
                E = eZ(l);
            t =
                null != r
                    ? o()(j.Ay.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(E ? (p ? F.A.getAllThreadsForGuild(r) : L.A.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : o()(F.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(E ? L.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let A = {},
                I = [],
                T = B.A.getMaxScore();
            for (let e of t) {
                if (
                    !eQ(l, e.type, null != r) ||
                    ((0, M.zy)(e.type) && !$.A.can(c ? e.accessPermissions : ec.xBc.VIEW_CHANNEL, e)) ||
                    !s(e)
                )
                    continue;
                let t = [...g],
                    i = e.name.toLocaleLowerCase(),
                    o = h && n === e.id,
                    u = o ? em : e1(i, t, a);
                if (0 !== u) {
                    if (t.length > 0) {
                        for (let n of [e2(e, A), e3(e, A)]) {
                            if (null == n || "" === n) continue;
                            let e = e1(n, t, !1);
                            0 !== e && (u += 0.5 * e);
                        }
                        u = Math.min(eE - eT, u);
                    }
                    0 !== u &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || o) &&
                        (eJ(l, e.type) && (u = Math.max(u - ey, eT / 2)),
                        e.isThread() && (e.isActiveThread() || (u -= eS), w.A.hasJoined(e.id) || (u -= ev)),
                        (u = Math.min(
                            u + Math.min(B.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / T, 1) * eC,
                            u >= eE ? em : eE,
                        )),
                        I.push({
                            type: (0, M.ay)(e.type) ? ed.rD.VOICE_CHANNEL : ed.rD.TEXT_CHANNEL,
                            record: e,
                            score: ej(u, f[e.id]),
                            comparator: (0, _.m1)(e, Q.default, q.A),
                            sortable: i,
                        }));
                }
            }
            return I.sort(d.A), null != i && I.length > i && (I.length = i), I;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: a = eP, boosters: s = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${es.A.escape(o)}`, "i"),
                    containQuery: RegExp(es.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of W.A.getGuildsArray()) {
                if (!a(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? em : eK(n, l, r);
                o > 0 &&
                    u.push({ type: ed.rD.GUILD, record: e, score: ej(o, s[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: a,
                    recipients: s,
                } = e4(F.A.getPrivateChannelsVersion(), q.A.getVersion(), Q.default.getUserStoreVersion()),
                o = eq({ query: t, members: s, limit: s.length, boosters: r }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: ed.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: eu.Ay.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(d.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eP, boosters: a = {} } = e,
                s = (0, el.sS)((0, el.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${es.A.escape(s)}`, "i"),
                    containQuery: RegExp(es.A.escape(s), "i"),
                    queryLower: s,
                },
                u = o()(F.A.getMutablePrivateChannels()).values().value(),
                c = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.m1)(e, Q.default, q.A).toLocaleLowerCase(),
                    n = (0, el.sS)((0, el.S8)(t)),
                    s = eK(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = Q.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = eu.Ay.getGlobalName(e),
                        i = q.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(eA, eK((0, el.sS)((0, el.S8)(e.toLocaleLowerCase())), l, r));
                    t > s && (s = t);
                }
                s > 0 &&
                    c.push({
                        type: ed.rD.GROUP_DM,
                        record: e,
                        score: ej(s, a[e.id]),
                        comparator: (0, _.m1)(e, Q.default, q.A),
                        sortable: n,
                    });
            }
            return c.sort(d.A), c.length > n && (c.length = n), c;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eP } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${es.A.escape(a)}`, "i"),
                    containQuery: RegExp(es.A.escape(a), "i"),
                    queryLower: a,
                },
                o = eB(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eK(t, s, r);
                n > 0 && l.push({ type: ed.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(d.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${es.A.escape(a)}`, "i"),
                    containQuery: RegExp(es.A.escape(a), "i"),
                    queryLower: a,
                },
                o = {
                    [c.t1.SHOP]: [eh.intl.string(eh.t.pWG4ze)],
                    [c.t1.SHOP_ORBS_TAB]: [
                        eh.intl.string(eh.t.ElYQFS),
                        eh.intl.string(eh.t.pWG4ze),
                        eh.intl.string(eh.t.EBYkzk),
                    ],
                    [c.t1.QUEST_ORBS]: [
                        eh.intl.string(eh.t.ElYQFS),
                        eh.intl.string(eh.t["v/R2aC"]),
                        eh.intl.string(eh.t.qQR4tn),
                    ],
                    [c.t1.NITRO_HOME]: [eh.intl.string(eh.t.Ipxkog)],
                    [c.t1.QUEST_HOME]: [eh.intl.string(eh.t.JALI2K)],
                    [c.t1.APPS_HOME]: [eh.intl.string(eh.t.PHjkRE), eh.intl.string(eh.t.AKcFUj)],
                    [c.t1.SETTINGS]: [eh.intl.string(eh.t["3D5yo/"])],
                },
                l = [];
            for (let e in o) {
                let t = c.t1[e],
                    n = o[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = eK(n, s, i);
                        r > 0 &&
                            l.push({
                                type: ed.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(t),
                                score: ej(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            if ((0, g.mz)("quickswitcher")) {
                let { componentPlaygroundConfigs: e } = n(944771);
                for (let t of e.flatMap((e) => e.collections))
                    for (let e of [
                        `${t.name} Playground`,
                        `${t.name} Components`,
                        `${t.name} Design System`,
                        t.name,
                        ...(t.tags ?? []),
                    ]) {
                        let n = e.toLocaleLowerCase(),
                            r = eK(n, s, i);
                        if (r > 0) {
                            l.push({
                                type: ed.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(
                                    c.t1.PLAYGROUND,
                                    void 0,
                                    `${t.name} Playground`,
                                    t.id,
                                    t.IconComponent,
                                ),
                                score: ej(r),
                                comparator: n,
                                sortable: n,
                            });
                            break;
                        }
                    }
            }
            return l.sort(d.A), l.length > r && (l.length = r), l;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eP } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${es.A.escape(a)}`, "i"),
                    containQuery: RegExp(es.A.escape(a), "i"),
                    queryLower: a,
                },
                l = o()(ee.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === ec.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eK(t, s, r);
                    n > 0 && u.push({ type: ed.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: e6,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: r = !1,
                    canMentionHere: i = !0,
                    canMentionUsers: s = !0,
                    canMentionRoles: u = !0,
                    canMentionOtherGlobals: c = !0,
                    includeAllGuildUsers: d = !1,
                    includeNonMentionableRoles: _ = !1,
                    checkRecentlyTalkedOnEmptyQuery: h = !0,
                    limit: p = ec.rs7,
                    request: g,
                    allowSnowflake: E = !1,
                } = e,
                A = s
                    ? (d && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: p,
                                checkRecentlyTalkedOnEmptyQuery: h,
                                request: g,
                                allowSnowflake: E,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: p,
                                checkRecentlyTalkedOnEmptyQuery: h,
                                allowSnowflake: E,
                            })
                      ).map((e) => {
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: H.Ay.getNick(n.guild_id, t.id),
                              status: z.A.getStatus(t.id),
                          };
                      })
                    : [],
                T = A.length,
                y = t.toLowerCase(),
                S = [];
            if (T < p && u) {
                let e = n.getGuildId(),
                    i = W.A.getGuild(e);
                if (null != i) {
                    let n = o()(Y.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: s } = t;
                            return (
                                (n || r || _) &&
                                (a()(y, i.toLowerCase()) || (E && y === s)) &&
                                s !== eo.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (S = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, p - T)), (T += S.length);
                }
            }
            let v = [];
            !n.isPrivate() &&
                r &&
                u &&
                (T < p && a()(y, eU().test) && (v.push(eU()), (T += 1)),
                i && T < p && a()(y, eG().test) && (v.push(eG()), (T += 1)));
            let C = I.M.getCurrentConfig(
                { guildId: n.guild_id, location: "mention autocomplete" },
                { autoTrackExposure: !0 },
            ).enabled;
            return (
                r &&
                    C &&
                    null != eF &&
                    (T < p || 0 === y.length) &&
                    a()(y, eF().test) &&
                    (T >= p && (v.length > 0 ? v.pop() : S.length > 0 ? S.pop() : A.length > 0 && A.pop()),
                    v.push(eF()),
                    (T += 1)),
                f.A.getConfig({ location: "mention autocomplete" }).enabled &&
                    c &&
                    null != eV &&
                    (((T < p || 0 === y.length) && a()(y, eV().test)) || y === eV().test) &&
                    (T >= p && (S.length > 0 ? S.pop() : A.length > 0 && A.pop()), v.push(eV()), (T += 1)),
                { users: A, globals: v, roles: S }
            );
        },
        queryGuildMentionResults(e) {
            let {
                    query: t,
                    guildId: n,
                    canMentionEveryone: r = !1,
                    canMentionUsers: i = !0,
                    canMentionRoles: s = !0,
                    canMentionNonMentionableRoles: l = !1,
                } = e,
                u = i
                    ? this.queryGuildUsers({ guildId: n, query: t }).map((e) => ({
                          ...e,
                          status: z.A.getStatus(e.record.id),
                      }))
                    : [],
                c = u.length,
                d = t.toLowerCase(),
                _ = [];
            if (c < ec.rs7 && s) {
                let e = W.A.getGuild(n);
                null != e &&
                    (o()(Y.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && a()(d, e.name.toLowerCase()) && !(0, k.Oy)(e))
                        .take(ec.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                r &&
                    s &&
                    (c < ec.rs7 && a()(d, eU().test) && (f.push(eU()), (c += 1)),
                    c < ec.rs7 && a()(d, eG().test) && f.push(eG())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = RegExp(`^${es.A.escape(a)}`, "i"),
                l = RegExp(es.A.escape(a), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = eK(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: s, containQuery: l, queryLower: a },
                            i,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(en.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (u = u.take(r)), u.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp(`^${es.A.escape(r)}`, "i"),
                    containQuery: RegExp(es.A.escape(r), "i"),
                    queryLower: r,
                },
                a = (0, y.K)(n.id) && !n.features.has(ec.GuildFeatures.HUB),
                s = n.features.has(ec.GuildFeatures.COMMUNITY),
                o = (0, T.u)(n) && n.features.has(ec.GuildFeatures.COMMUNITY),
                l = [
                    { id: e_.T4.SERVER_GUIDE, name: eh.intl.string(eh.t.VbpLyU) },
                    { id: e_.T4.CHANNEL_BROWSER, name: eh.intl.string(eh.t.et6wav) },
                    { id: e_.T4.CUSTOMIZE_COMMUNITY, name: eh.intl.string(eh.t.h9mGOP) },
                ],
                u = [];
            for (let e of l)
                (e.id !== e_.T4.SERVER_GUIDE || a) &&
                    (e.id !== e_.T4.CHANNEL_BROWSER || s) &&
                    (e.id !== e_.T4.CUSTOMIZE_COMMUNITY || o) &&
                    eK(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new M.jb({ id: e.id, name: e.name, type: ec.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = j.I6, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = ec.rs7, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let s = [];
            for (let e of eY)
                s = s.concat(
                    this.queryChannels({
                        query: t,
                        guildId: n.guild_id,
                        limit: i,
                        fuzzy: !0,
                        filter: (e) => null == r || r.includes(e.type),
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
                    .sort(h.A)),
                null != i && s.length > i && (s = s.slice(0, i)),
                { channels: s.map((e) => e.record) }
            );
        },
        queryChoiceResults(e) {
            let { query: t, choices: n } = e;
            return { choices: this.queryChoice({ query: t, choices: n, limit: null }).map((e) => e.choice) };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: r, maxCount: i = ec.rs7, matchComparator: a } = e;
            return (
                P.bW.loadIfNecessary(),
                {
                    emojis: E.Ay.searchWithoutFetchingLatest({
                        channel: n,
                        query: t,
                        count: i,
                        intention: r,
                        matchComparator: a,
                    }),
                }
            );
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eP],
                i = Q.default.getCurrentUser(),
                a = new Set(),
                s = [];
            for (let o of (P.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, el.sS)(e),
                    u = RegExp(`^${es.A.escape(l)}`, "i"),
                    c = RegExp(`${es.A.escape(l)}`, "i");
                O.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            f = O.A.getStickerById(l);
                        if (null == f || !r(f, (0, N.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                a = eX(r),
                                s = 0;
                            t
                                ? i === e
                                    ? (s = em * a)
                                    : u.test(i)
                                      ? (s = eE * a)
                                      : (r === D.cG.GUILD_NAME || r === D.cG.PACK_NAME || r === D.cG.STICKER_NAME) &&
                                        c.test(i) &&
                                        (s = eA * a)
                                : i === e && ((s = em * a), (_ = i)),
                                s > d && ((d = s), (_ = i));
                        }
                        let h = R.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != h && (d *= h / 100),
                            d > 0 &&
                                null != _ &&
                                !a.has(f.id) &&
                                (a.add(f.id), s.push({ sticker: f, comparator: _, score: d }));
                    });
                });
            }
            return (
                0 ===
                    (s = o()(s)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (s = ek),
                s
            );
        },
        querySoundmoji(e, t) {
            let n = Q.default.getCurrentUser();
            C.A.isFetching() || C.A.hasFetchedAllSounds() || (0, v.E7)(), P.bW.loadIfNecessary();
            let r = Array.from(C.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, S.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, b.lG)(e, r, n, t);
        },
        queryGames(e) {
            let t = A.Ay.getRunningVerifiedApplicationIds();
            null == J.A.lastFetched && u.X();
            let n = J.A.applicationStatistics;
            function r(r) {
                let i = 0,
                    s = r.name.toLowerCase(),
                    o = e.toLowerCase();
                return (
                    r.id === o
                        ? (i += 1e3)
                        : s === o
                          ? (i += 5)
                          : s.startsWith(o)
                            ? (i += 4)
                            : s.includes(o)
                              ? (i += 3)
                              : s.endsWith(o)
                                ? (i += 2)
                                : a()(o, s) && (i += 1),
                    i > 0 &&
                        (t.includes(r.id) && (i += 10),
                        r.id in n && (i += 2),
                        ef.Bf.has(r.id) && (i += ef.Bf.get(r.id) / ef.Bf.size)),
                    i
                );
            }
            let i = V.A.games;
            return o()(i)
                .filter((e) => !(0, x.nS)(e))
                .map((e) => ({ game: e, score: r(e) }))
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
                .slice(0, ec.rs7);
        },
        queryMentionSuggestionResults(e) {
            let { query: t, channel: n, limit: r = 3, boosters: i, onlyExactMatch: a = !1 } = e,
                s = n.isPrivate()
                    ? n.recipients.map((e) => ({ userId: e, nick: q.A.getNickname(e) ?? null }))
                    : H.Ay.getMembers(n.guild_id).filter(e$),
                o = G.default.getId(),
                l = Q.default.getUsers(),
                u = Z.A.getGuildId(),
                c = t.toLocaleLowerCase(),
                _ = (0, el.S8)(c),
                f = [];
            u: for (let e of s) {
                let t, s;
                if (f.length >= r) break;
                if (
                    (e instanceof U.A
                        ? ((s = e), (t = H.Ay.getNick(u, s.id)?.toLocaleLowerCase()))
                        : ((t = e.nick?.toLocaleLowerCase()), (s = l[e.userId])),
                    null == s || s.id === o || s.bot)
                )
                    continue;
                let d = q.A.getNickname(s.id)?.toLocaleLowerCase(),
                    h = eu.Ay.getGlobalName(s)?.toLocaleLowerCase();
                if (!ea.$3({ permission: ec.xBc.VIEW_CHANNEL, user: s, context: n }) && !n.isPrivate()) continue;
                let p = (e, n, r) => {
                        f.push({
                            user: s,
                            score: ej(n, i?.[s.id]),
                            matchType: e,
                            comparator: r,
                            nick: t,
                            status: z.A.getStatus(s.id),
                        });
                    },
                    g = s.username.toLocaleLowerCase(),
                    E = (0, el.sS)(g),
                    A = (0, el.S8)(E),
                    [I, T] = ez(t),
                    [y, S] = ez(d),
                    [v, C] = ez(h),
                    b = [
                        [g, g],
                        [E, g],
                        [t, t],
                        [I, t],
                        [d, d],
                        [y, d],
                        [h, h],
                        [v, h],
                    ].filter((e) => null != e[0] && null != e[1]);
                for (let [e, t] of b)
                    if (c === e) {
                        p("exact", em, t);
                        continue u;
                    }
                let N = /\s+|\.|_/;
                for (let [e, t] of b)
                    if (c === e.split(N, 1)[0]) {
                        p("exact", eg, t);
                        continue u;
                    }
                if (!a) {
                    for (let [e, t] of b)
                        if (e.startsWith(c)) {
                            p("starts_with", eE, t);
                            continue u;
                        }
                    for (let [e, n] of [
                        [A, g],
                        [T, t],
                        [S, d],
                        [C, h],
                    ])
                        if (null != e && null != n && e.startsWith(_)) {
                            p("starts_with", eE, n);
                            continue u;
                        }
                }
            }
            return f.sort(d.A), f;
        },
        matchSentinel: (e, t, n) => !eM.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = W.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? Y.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eq,
    };

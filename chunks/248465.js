"use strict";
let r;
n.d(t, { Ay: () => e1, L3: () => eF, X3: () => eG, zy: () => ex }), n(321073), n(667532);
var i = n(91871),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(896170),
    u = n(661439),
    c = n(329308),
    d = n(989133),
    _ = n(47167),
    f = n(182014),
    p = n(626584),
    h = n(508675),
    m = n(15285),
    E = n(202776),
    g = n(473529),
    A = n(69945),
    I = n(796774),
    T = n(209932),
    S = n(147472),
    y = n(361670),
    v = n(931959),
    N = n(679382),
    C = n(842086),
    R = n(863005),
    O = n(152007),
    b = n(735321),
    D = n(594061),
    L = n(95701),
    w = n(34457),
    M = n(427157),
    P = n(734057),
    x = n(760751),
    k = n(205761),
    U = n(808728),
    G = n(696451),
    F = n(317525),
    V = n(71393),
    B = n(320501),
    H = n(576705),
    j = n(290863),
    Y = n(994500),
    W = n(309010),
    K = n(967198),
    $ = n(287809),
    z = n(90165),
    q = n(67480),
    Z = n(583613),
    X = n(403362),
    Q = n(860689),
    J = n(695184),
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
let ec = new p.A("AutocompleteUtils"),
    ed = 10,
    e_ = 7,
    ef = 5,
    ep = 3,
    eh = 1,
    em = 1,
    eE = 3,
    eg = 5,
    eA = 3,
    eI = 11,
    eT = 6,
    eS = 8,
    ey = 1,
    ev = 1e3,
    eN = 0.2,
    eC = 0.1,
    eR = 50,
    eO = () => !0,
    eb = /(\t|\s)/,
    eD = [],
    eL = (r = n(966382).A).MENTION_EVERYONE,
    ew = r.MENTION_HERE,
    eM = r.MENTION_TIMESTAMP,
    eP = r.LAUNCHABLE_APPLICATIONS;
function ex() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return ev * e * (t ?? 1);
}
class ek {
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
            t = Y.A.getVersion(),
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
                r = t.filter((e) => (0, Q.fh)(e));
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
        for (let e of Y.A.getFriendIDs()) i[e] = (i[e] ?? 1) + eN;
        for (let e of P.A.getDMUserIds()) i[e] = (i[e] ?? 1) + eC;
        return i;
    }
}
let eU = new ek();
function eG(e) {
    return eU.get(e);
}
let eF = [U.I6, U.vM, es.rbe.GUILD_CATEGORY];
function eV(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(et.A.escape(e), "i").test(t));
}
function eB(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return ed;
            return e_;
        }
        if (r.test(e)) return ef;
        if (eV(i, e)) return ep;
        if (a && s()(i, e)) return eh;
    } catch (e) {
        ec.error(e);
    }
    return 0;
}
function eH(e) {
    return e?.joinedAt != null && !e.isPending;
}
function ej(e) {
    if (null == e) return [null, null];
    let t = (0, er.sS)(e),
        n = (0, er.S8)(t);
    return [t, n];
}
function eY(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a, boosters: o } = e,
        l = $.default.getUsers(),
        u = K.A.getGuildId(),
        c = t.toLocaleLowerCase(),
        _ = (0, er.S8)(c),
        f = [],
        p = [],
        h = n.length,
        m = 0,
        E = 0;
    for (; m < h; ) {
        let e,
            r,
            d = n[m];
        d instanceof M.A
            ? ((r = d), (e = G.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = d.nick?.toLocaleLowerCase()), (r = l[d.userId]));
        let h = ei.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, er.sS)(n),
                l = (0, er.S8)(i),
                [u, d] = ej(e),
                [m, g] = ej(h);
            (a && t === r.id) ||
            n.substring(0, c.length) === c ||
            i.substring(0, c.length) === c ||
            e?.substring(0, c.length) === c ||
            u?.substring(0, c.length) === c ||
            h?.substring(0, c.length) === c ||
            m?.substring(0, c.length) === c
                ? f.push({
                      type: ea.rD.USER,
                      record: r,
                      score: ex(ed, o?.[r.id]),
                      comparator: h ?? e ?? n,
                      sortable: m ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || d?.substring(0, _.length) === _ || g?.substring(0, _.length) === _
                  ? f.push({
                        type: ea.rD.USER,
                        record: r,
                        score: ex(eh, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: m ?? u ?? i,
                    })
                  : E < eR &&
                    (s()(c, i) ||
                        s()(_, l) ||
                        (null != u && s()(c, u)) ||
                        (null != d && s()(_, d)) ||
                        (null != m && s()(c, m)) ||
                        (null != g && s()(_, g))) &&
                    (p.push({
                        type: ea.rD.USER,
                        record: r,
                        score: ex(eh, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: m ?? u ?? i,
                    }),
                    (E += 1));
        }
        m += 1;
    }
    return (
        f.sort(d.A),
        f.length < r && (p.sort(d.A), (f = f.concat(p.slice(0, Math.max(0, r - f.length))))),
        f.length > r && (f.length = r),
        f
    );
}
function eW(e) {
    switch (e) {
        case C.cG.STICKER_NAME:
            return eI;
        case C.cG.CORRELATED_EMOJI:
            return eT;
        case C.cG.TAG:
            return ey;
        case C.cG.GUILD_NAME:
        case C.cG.PACK_NAME:
            return eS;
        default:
            return 1;
    }
}
function eK(e) {
    return e === U.I6 || (e !== U.vM && !!(0, L.fT)(e));
}
function e$(e, t, n) {
    return (
        e === t || ((!!n || !!(0, L.zy)(t)) && (e === U.I6 ? (0, L.tr)(t) || (0, L.ay)(t) : e === U.vM && (0, L.ay)(t)))
    );
}
function ez(e, t) {
    return e === U.I6 && (0, L.ay)(t);
}
function eq(e) {
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
}
function eZ(e, t, n) {
    let r = 0,
        i = null;
    for (let s of t) {
        let t = eB(e, s, n);
        t > r && ((r = t), (i = s));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eX(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    return null == n && (n = t[e.guild_id] = V.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()), n;
}
function eQ(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    return null == n && (n = t[e.parent_id] = P.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()), n;
}
function eJ(e, t) {
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
                  return null == t || eH(G.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? G.Ay.getMember(t, e.id) : null;
                  return { type: ea.rD.USER, record: e, score: 0, comparator: r?.nick ?? ei.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let e0 = (0, Z.L_)((e, t, n) => {
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
                            (r.set(t, e), s.push({ userId: t, nick: Y.A.getNickname(t) }), i.set(t, n));
                    }
                }),
            { channelsByRecipientId: r, recipientsById: i, recipients: s }
        );
    }),
    e1 = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eY({
                query: t,
                members: Y.A.getFriendIDs()
                    .map((e) => $.default.getUser(e))
                    .filter(X.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eY({
                query: t,
                members: P.A.getDMUserIds()
                    .map((e) => $.default.getUser(e))
                    .filter(X.Vq),
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
                t = u.recipients.map((e) => ({ userId: e, nick: Y.A.getNickname(e) ?? null }));
                let e = $.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && a) {
                    let e = eJ(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = G.Ay.getMembers(u.guild_id).filter(eH)), s && J.A.requestMembers(u.guild_id, r, i);
            }
            return eY({
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
            if (null == V.A.getGuild(t)) return [];
            if (0 === n.length && s) {
                let e = eJ(W.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = G.Ay.getMembers(t).filter(eH);
            return (
                i && n.length > 0 && J.A.requestMembers(t, n, r),
                eY({ query: n, members: l, limit: r, filter: a, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: s, allowSnowflake: a } = e;
            return eY({ query: t, members: s, limit: i, filter: n, allowSnowflake: a, boosters: r });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: s = !0 } = e;
            return (
                s && t.length > 0 && J.A.requestMembers(null, t, i),
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
            let t,
                {
                    query: n,
                    guildId: r,
                    limit: i = es.rs7,
                    fuzzy: s = !0,
                    filter: a = eO,
                    type: l = U.I6,
                    allowEmptyQueries: u = !1,
                    requireVocalConnectAccess: c = !0,
                    boosters: f = {},
                    allowSnowflake: p,
                    includeAllThreads: h,
                } = e,
                m = eq(n, u),
                E = eK(l);
            t =
                null != r
                    ? o()(U.Ay.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(E ? (h ? P.A.getAllThreadsForGuild(r) : R.A.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : o()(P.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(E ? R.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let g = {},
                A = [],
                I = k.A.getMaxScore();
            for (let e of t) {
                if (
                    !e$(l, e.type, null != r) ||
                    ((0, L.zy)(e.type) && !H.A.can(c ? e.accessPermissions : es.xBc.VIEW_CHANNEL, e)) ||
                    !a(e)
                )
                    continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    o = p && n === e.id,
                    u = o ? ed : eZ(i, t, s);
                if (0 !== u) {
                    if (t.length > 0) {
                        for (let n of [eX(e, g), eQ(e, g)]) {
                            if (null == n || "" === n) continue;
                            let e = eZ(n, t, !1);
                            0 !== e && (u += 0.5 * e);
                        }
                        u = Math.min(e_ - eh, u);
                    }
                    0 !== u &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || o) &&
                        (ez(l, e.type) && (u = Math.max(u - em, eh / 2)),
                        e.isThread() && (e.isActiveThread() || (u -= eE), O.A.hasJoined(e.id) || (u -= eg)),
                        (u = Math.min(
                            u + Math.min(k.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / I, 1) * eA,
                            u >= e_ ? ed : e_,
                        )),
                        A.push({
                            type: (0, L.ay)(e.type) ? ea.rD.VOICE_CHANNEL : ea.rD.TEXT_CHANNEL,
                            record: e,
                            score: ex(u, f[e.id]),
                            comparator: (0, _.m1)(e, $.default, Y.A),
                            sortable: i,
                        }));
                }
            }
            return A.sort(d.A), null != i && A.length > i && (A.length = i), A;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: s = eO, boosters: a = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${et.A.escape(o)}`, "i"),
                    containQuery: RegExp(et.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of V.A.getGuildsArray()) {
                if (!s(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? ed : eB(n, l, r);
                o > 0 &&
                    u.push({ type: ea.rD.GUILD, record: e, score: ex(o, a[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: s,
                    recipients: a,
                } = e0(P.A.getPrivateChannelsVersion(), Y.A.getVersion(), $.default.getUserStoreVersion()),
                o = eY({ query: t, members: a, limit: a.length, boosters: r }),
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
                l.sort(d.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eO, boosters: s = {} } = e,
                a = (0, er.sS)((0, er.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${et.A.escape(a)}`, "i"),
                    containQuery: RegExp(et.A.escape(a), "i"),
                    queryLower: a,
                },
                u = o()(P.A.getMutablePrivateChannels()).values().value(),
                c = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.m1)(e, $.default, Y.A).toLocaleLowerCase(),
                    n = (0, er.sS)((0, er.S8)(t)),
                    a = eB(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = $.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = ei.Ay.getGlobalName(e),
                        i = Y.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(ef, eB((0, er.sS)((0, er.S8)(e.toLocaleLowerCase())), l, r));
                    t > a && (a = t);
                }
                a > 0 &&
                    c.push({
                        type: ea.rD.GROUP_DM,
                        record: e,
                        score: ex(a, s[e.id]),
                        comparator: (0, _.m1)(e, $.default, Y.A),
                        sortable: n,
                    });
            }
            return c.sort(d.A), c.length > n && (c.length = n), c;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eO } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${et.A.escape(s)}`, "i"),
                    containQuery: RegExp(et.A.escape(s), "i"),
                    queryLower: s,
                },
                o = eP(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eB(t, a, r);
                n > 0 && l.push({ type: ea.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(d.A), l.length > n && (l.length = n), l;
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
                    [c.t1.SHOP]: [eu.intl.string(eu.t.pWG4ze)],
                    [c.t1.SHOP_ORBS_TAB]: [
                        eu.intl.string(eu.t.ElYQFS),
                        eu.intl.string(eu.t.pWG4ze),
                        eu.intl.string(eu.t.EBYkzk),
                    ],
                    [c.t1.QUEST_ORBS]: [
                        eu.intl.string(eu.t.ElYQFS),
                        eu.intl.string(eu.t["v/R2aC"]),
                        eu.intl.string(eu.t.qQR4tn),
                    ],
                    [c.t1.NITRO_HOME]: [eu.intl.string(eu.t.Ipxkog)],
                    [c.t1.QUEST_HOME]: [eu.intl.string(eu.t.JALI2K)],
                    [c.t1.APPS_HOME]: [eu.intl.string(eu.t.PHjkRE), eu.intl.string(eu.t.AKcFUj)],
                    [c.t1.SETTINGS]: [eu.intl.string(eu.t["3D5yo/"])],
                },
                o = [];
            for (let e in a) {
                let t = c.t1[e],
                    n = a[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            i = eB(n, s, r);
                        i > 0 &&
                            o.push({
                                type: ea.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(t),
                                score: ex(i),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return o.sort(d.A), o.length > n && (o.length = n), o;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eO } = e,
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
                        n = eB(t, a, r);
                    n > 0 && u.push({ type: ea.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: eJ,
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
                    limit: p = es.rs7,
                    request: h,
                    allowSnowflake: m = !1,
                } = e,
                E = a
                    ? (d && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: p,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                request: h,
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
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: G.Ay.getNick(n.guild_id, t.id),
                              status: j.A.getStatus(t.id),
                          };
                      })
                    : [],
                g = E.length,
                A = t.toLowerCase(),
                I = [];
            if (g < p && u) {
                let e = n.getGuildId(),
                    i = V.A.getGuild(e);
                if (null != i) {
                    let n = o()(F.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: a } = t;
                            return (
                                (n || r || _) &&
                                (s()(A, i.toLowerCase()) || (m && A === a)) &&
                                a !== en.default.castGuildIdAsEveryoneGuildRoleId(e)
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
                    (g < p && s()(A, eL().test) && (T.push(eL()), (g += 1)),
                    i && g < p && s()(A, ew().test) && (T.push(ew()), (g += 1))),
                c &&
                    null != eM &&
                    (((g < p || 0 === A.length) && s()(A, eM().test)) || A === eM().test) &&
                    (g >= p && (I.length > 0 ? I.pop() : E.length > 0 && E.pop()), T.push(eM()), (g += 1)),
                { users: E, globals: T, roles: I }
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
                          status: j.A.getStatus(e.record.id),
                      }))
                    : [],
                c = u.length,
                d = t.toLowerCase(),
                _ = [];
            if (c < es.rs7 && a) {
                let e = V.A.getGuild(n);
                null != e &&
                    (o()(F.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && s()(d, e.name.toLowerCase()) && !(0, w.Oy)(e))
                        .take(es.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                r &&
                    a &&
                    (c < es.rs7 && s()(d, eL().test) && (f.push(eL()), (c += 1)),
                    c < es.rs7 && s()(d, ew().test) && f.push(ew())),
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
                        let n = eB(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: a, containQuery: l, queryLower: s },
                            i,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(X.Vq)
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
                o = (0, E.u)(n) && n.features.has(es.GuildFeatures.COMMUNITY),
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
                    eB(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new L.jb({ id: e.id, name: e.name, type: es.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = U.I6, channelTypes: i } = e;
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
            for (let e of eF)
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eO],
                i = $.default.getCurrentUser(),
                s = new Set(),
                a = [];
            for (let o of (D.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, er.sS)(e),
                    u = RegExp(`^${et.A.escape(l)}`, "i"),
                    c = RegExp(`${et.A.escape(l)}`, "i");
                N.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            f = N.A.getStickerById(l);
                        if (null == f || !r(f, (0, y.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                s = eW(r),
                                a = 0;
                            t
                                ? i === e
                                    ? (a = ed * s)
                                    : u.test(i)
                                      ? (a = e_ * s)
                                      : (r === C.cG.GUILD_NAME || r === C.cG.PACK_NAME || r === C.cG.STICKER_NAME) &&
                                        c.test(i) &&
                                        (a = ef * s)
                                : i === e && ((a = ed * s), (_ = i)),
                                a > d && ((d = a), (_ = i));
                        }
                        let p = v.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
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
                        .value()).length && (a = eD),
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
            let t = m.Ay.getRunningVerifiedApplicationIds();
            null == z.A.lastFetched && u.X();
            let n = z.A.applicationStatistics;
            function r(r) {
                let i = 0,
                    a = r.name.toLowerCase(),
                    o = e.toLowerCase();
                return (
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
                    i
                );
            }
            let i = x.A.games;
            return o()(i)
                .filter((e) => !(0, b.nS)(e))
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
                .slice(0, es.rs7);
        },
        matchSentinel: (e, t, n) => !eb.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = V.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? F.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eY,
    };

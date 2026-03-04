"use strict";
let r;
n.d(t, { Ay: () => e1, L3: () => eF, X3: () => eG, zy: () => eU }), n(321073), n(667532);
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
    E = n(352505),
    g = n(202776),
    A = n(473529),
    I = n(69945),
    T = n(796774),
    S = n(209932),
    y = n(147472),
    v = n(361670),
    N = n(931959),
    C = n(679382),
    R = n(842086),
    O = n(863005),
    b = n(152007),
    D = n(735321),
    L = n(594061),
    w = n(95701),
    M = n(34457),
    x = n(427157),
    P = n(734057),
    k = n(760751),
    U = n(205761),
    G = n(808728),
    F = n(696451),
    V = n(317525),
    B = n(71393),
    H = n(320501),
    j = n(576705),
    Y = n(290863),
    W = n(994500),
    K = n(309010),
    $ = n(967198),
    z = n(287809),
    q = n(90165),
    Z = n(67480),
    X = n(583613),
    Q = n(403362),
    J = n(860689),
    ee = n(695184),
    et = n(488926),
    en = n(257120),
    er = n(661191),
    ei = n(240248),
    es = n(427262),
    ea = n(652215),
    eo = n(926140),
    el = n(746080),
    eu = n(282435),
    ec = n(985018);
let ed = new p.A("AutocompleteUtils"),
    e_ = 10,
    ef = 7,
    ep = 5,
    eh = 3,
    em = 1,
    eE = 1,
    eg = 3,
    eA = 5,
    eI = 3,
    eT = 11,
    eS = 6,
    ey = 8,
    ev = 1,
    eN = 1e3,
    eC = 0.2,
    eR = 0.1,
    eO = 50,
    eb = () => !0,
    eD = /(\t|\s)/,
    eL = [],
    ew = (r = n(966382).A).MENTION_EVERYONE,
    eM = r.MENTION_HERE,
    ex = r.MENTION_GAME,
    eP = r.MENTION_TIMESTAMP,
    ek = r.LAUNCHABLE_APPLICATIONS;
function eU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eN * e * (t ?? 1);
}
function eG(e) {
    let t = U.A.getFrequentlyWithoutFetchingLatest(),
        n = t.reduce((e, t) => {
            let { id: n } = t,
                r = U.A.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        r = [];
    switch (e) {
        case eo.rD.GUILD:
            r = t.filter((e) => (0, J.fh)(e));
            break;
        case eo.rD.USER:
            r = t.filter((e) => e instanceof w.YB && e.type === ea.rbe.DM);
            break;
        case eo.rD.GROUP_DM:
            r = t.filter((e) => e instanceof w.YB && e.isMultiUserDM());
            break;
        case eo.rD.TEXT_CHANNEL:
            r = t.filter((e) => e instanceof w.YB && (0, w.tr)(e.type));
            break;
        case eo.rD.VOICE_CHANNEL:
            r = t.filter((e) => e instanceof w.YB && e.isGuildVocal());
    }
    let i = {};
    for (let t of r) {
        let { id: r } = t,
            s = U.A.getScoreWithoutFetchingLatest(r);
        if (e === eo.rD.USER && t instanceof w.cq) {
            if (t.type === ea.rbe.DM) i[(r = t.getRecipientId())] = 1 + s / n;
            else if (t.type === ea.rbe.GROUP_DM) {
                let e = t.recipients.length;
                for (let r of t.recipients) i[r] = 1 + (s / n) * (1 / e);
            }
        } else i[r] = 1 + s / n;
    }
    for (let e of W.A.getFriendIDs()) i[e] = (i[e] ?? 1) + eC;
    for (let e of P.A.getDMUserIds()) i[e] = (i[e] ?? 1) + eR;
    return i;
}
let eF = [G.I6, G.vM, ea.rbe.GUILD_CATEGORY];
function eV(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(en.A.escape(e), "i").test(t));
}
function eB(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return e_;
            return ef;
        }
        if (r.test(e)) return ep;
        if (eV(i, e)) return eh;
        if (a && s()(i, e)) return em;
    } catch (e) {
        ed.error(e);
    }
    return 0;
}
function eH(e) {
    return e?.joinedAt != null && !e.isPending;
}
function ej(e) {
    if (null == e) return [null, null];
    let t = (0, ei.sS)(e),
        n = (0, ei.S8)(t);
    return [t, n];
}
function eY(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a, boosters: o } = e,
        l = z.default.getUsers(),
        u = $.A.getGuildId(),
        c = t.toLocaleLowerCase(),
        _ = (0, ei.S8)(c),
        f = [],
        p = [],
        h = n.length,
        m = 0,
        E = 0;
    for (; m < h; ) {
        let e,
            r,
            d = n[m];
        d instanceof x.A
            ? ((r = d), (e = F.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = d.nick?.toLocaleLowerCase()), (r = l[d.userId]));
        let h = es.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, ei.sS)(n),
                l = (0, ei.S8)(i),
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
                      type: eo.rD.USER,
                      record: r,
                      score: eU(e_, o?.[r.id]),
                      comparator: h ?? e ?? n,
                      sortable: m ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || d?.substring(0, _.length) === _ || g?.substring(0, _.length) === _
                  ? f.push({
                        type: eo.rD.USER,
                        record: r,
                        score: eU(em, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: m ?? u ?? i,
                    })
                  : E < eO &&
                    (s()(c, i) ||
                        s()(_, l) ||
                        (null != u && s()(c, u)) ||
                        (null != d && s()(_, d)) ||
                        (null != m && s()(c, m)) ||
                        (null != g && s()(_, g))) &&
                    (p.push({
                        type: eo.rD.USER,
                        record: r,
                        score: eU(em, o?.[r.id]),
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
        case R.cG.STICKER_NAME:
            return eT;
        case R.cG.CORRELATED_EMOJI:
            return eS;
        case R.cG.TAG:
            return ev;
        case R.cG.GUILD_NAME:
        case R.cG.PACK_NAME:
            return ey;
        default:
            return 1;
    }
}
function eK(e) {
    return e === G.I6 || (e !== G.vM && !!(0, w.fT)(e));
}
function e$(e, t, n) {
    return (
        e === t || ((!!n || !!(0, w.zy)(t)) && (e === G.I6 ? (0, w.tr)(t) || (0, w.ay)(t) : e === G.vM && (0, w.ay)(t)))
    );
}
function ez(e, t) {
    return e === G.I6 && (0, w.ay)(t);
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
    return null == n && (n = t[e.guild_id] = B.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()), n;
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
        : o()(H.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => z.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eH(F.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? F.Ay.getMember(t, e.id) : null;
                  return { type: eo.rD.USER, record: e, score: 0, comparator: r?.nick ?? es.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let e0 = (0, X.L_)((e, t, n) => {
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
                            n = z.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e), s.push({ userId: t, nick: W.A.getNickname(t) }), i.set(t, n));
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
                members: W.A.getFriendIDs()
                    .map((e) => z.default.getUser(e))
                    .filter(Q.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eY({
                query: t,
                members: P.A.getDMUserIds()
                    .map((e) => z.default.getUser(e))
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
                let e = z.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && a) {
                    let e = eJ(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = F.Ay.getMembers(u.guild_id).filter(eH)), s && ee.A.requestMembers(u.guild_id, r, i);
            }
            return eY({
                query: r,
                members: t,
                limit: i,
                filter: (e) => u.isPrivate() || et.$3({ permission: ea.xBc.VIEW_CHANNEL, user: e, context: u }),
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
            if (null == B.A.getGuild(t)) return [];
            if (0 === n.length && s) {
                let e = eJ(K.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = F.Ay.getMembers(t).filter(eH);
            return (
                i && n.length > 0 && ee.A.requestMembers(t, n, r),
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
                s && t.length > 0 && ee.A.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: s,
                    filter: n,
                    boosters: r,
                    users: o()(z.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            let t,
                {
                    query: n,
                    guildId: r,
                    limit: i = ea.rs7,
                    fuzzy: s = !0,
                    filter: a = eb,
                    type: l = G.I6,
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
                    ? o()(G.Ay.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(E ? (h ? P.A.getAllThreadsForGuild(r) : O.A.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : o()(P.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(E ? O.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let g = {},
                A = [],
                I = U.A.getMaxScore();
            for (let e of t) {
                if (
                    !e$(l, e.type, null != r) ||
                    ((0, w.zy)(e.type) && !j.A.can(c ? e.accessPermissions : ea.xBc.VIEW_CHANNEL, e)) ||
                    !a(e)
                )
                    continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    o = p && n === e.id,
                    u = o ? e_ : eZ(i, t, s);
                if (0 !== u) {
                    if (t.length > 0) {
                        for (let n of [eX(e, g), eQ(e, g)]) {
                            if (null == n || "" === n) continue;
                            let e = eZ(n, t, !1);
                            0 !== e && (u += 0.5 * e);
                        }
                        u = Math.min(ef - em, u);
                    }
                    0 !== u &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || o) &&
                        (ez(l, e.type) && (u = Math.max(u - eE, em / 2)),
                        e.isThread() && (e.isActiveThread() || (u -= eg), b.A.hasJoined(e.id) || (u -= eA)),
                        (u = Math.min(
                            u + Math.min(U.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / I, 1) * eI,
                            u >= ef ? e_ : ef,
                        )),
                        A.push({
                            type: (0, w.ay)(e.type) ? eo.rD.VOICE_CHANNEL : eo.rD.TEXT_CHANNEL,
                            record: e,
                            score: eU(u, f[e.id]),
                            comparator: (0, _.m1)(e, z.default, W.A),
                            sortable: i,
                        }));
                }
            }
            return A.sort(d.A), null != i && A.length > i && (A.length = i), A;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: s = eb, boosters: a = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${en.A.escape(o)}`, "i"),
                    containQuery: RegExp(en.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of B.A.getGuildsArray()) {
                if (!s(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? e_ : eB(n, l, r);
                o > 0 &&
                    u.push({ type: eo.rD.GUILD, record: e, score: eU(o, a[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: s,
                    recipients: a,
                } = e0(P.A.getPrivateChannelsVersion(), W.A.getVersion(), z.default.getUserStoreVersion()),
                o = eY({ query: t, members: a, limit: a.length, boosters: r }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: eo.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: es.Ay.getUserTag(s.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(d.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eb, boosters: s = {} } = e,
                a = (0, ei.sS)((0, ei.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${en.A.escape(a)}`, "i"),
                    containQuery: RegExp(en.A.escape(a), "i"),
                    queryLower: a,
                },
                u = o()(P.A.getMutablePrivateChannels()).values().value(),
                c = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.m1)(e, z.default, W.A).toLocaleLowerCase(),
                    n = (0, ei.sS)((0, ei.S8)(t)),
                    a = eB(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = z.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = es.Ay.getGlobalName(e),
                        i = W.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(ep, eB((0, ei.sS)((0, ei.S8)(e.toLocaleLowerCase())), l, r));
                    t > a && (a = t);
                }
                a > 0 &&
                    c.push({
                        type: eo.rD.GROUP_DM,
                        record: e,
                        score: eU(a, s[e.id]),
                        comparator: (0, _.m1)(e, z.default, W.A),
                        sortable: n,
                    });
            }
            return c.sort(d.A), c.length > n && (c.length = n), c;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eb } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${en.A.escape(s)}`, "i"),
                    containQuery: RegExp(en.A.escape(s), "i"),
                    queryLower: s,
                },
                o = ek(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eB(t, a, r);
                n > 0 && l.push({ type: eo.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(d.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
                i = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${en.A.escape(i)}`, "i"),
                    containQuery: RegExp(en.A.escape(i), "i"),
                    queryLower: i,
                },
                a = {
                    [c.t1.SHOP]: [ec.intl.string(ec.t.pWG4ze)],
                    [c.t1.SHOP_ORBS_TAB]: [
                        ec.intl.string(ec.t.ElYQFS),
                        ec.intl.string(ec.t.pWG4ze),
                        ec.intl.string(ec.t.EBYkzk),
                    ],
                    [c.t1.QUEST_ORBS]: [
                        ec.intl.string(ec.t.ElYQFS),
                        ec.intl.string(ec.t["v/R2aC"]),
                        ec.intl.string(ec.t.qQR4tn),
                    ],
                    [c.t1.NITRO_HOME]: [ec.intl.string(ec.t.Ipxkog)],
                    [c.t1.QUEST_HOME]: [ec.intl.string(ec.t.JALI2K)],
                    [c.t1.APPS_HOME]: [ec.intl.string(ec.t.PHjkRE), ec.intl.string(ec.t.AKcFUj)],
                    [c.t1.SETTINGS]: [ec.intl.string(ec.t["3D5yo/"])],
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
                                type: eo.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(t),
                                score: eU(i),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return o.sort(d.A), o.length > n && (o.length = n), o;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eb } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${en.A.escape(s)}`, "i"),
                    containQuery: RegExp(en.A.escape(s), "i"),
                    queryLower: s,
                },
                l = o()(Z.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === ea.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eB(t, a, r);
                    n > 0 && u.push({ type: eo.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
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
                    limit: p = ea.rs7,
                    request: h,
                    allowSnowflake: m = !1,
                } = e,
                g = a
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
                              nick: F.Ay.getNick(n.guild_id, t.id),
                              status: Y.A.getStatus(t.id),
                          };
                      })
                    : [],
                A = g.length,
                I = t.toLowerCase(),
                T = [];
            if (A < p && u) {
                let e = n.getGuildId(),
                    i = B.A.getGuild(e);
                if (null != i) {
                    let n = o()(V.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: a } = t;
                            return (
                                (n || r || _) &&
                                (s()(I, i.toLowerCase()) || (m && I === a)) &&
                                a !== er.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (T = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, p - A)), (A += T.length);
                }
            }
            let S = [];
            !n.isPrivate() &&
                r &&
                u &&
                (A < p && s()(I, ew().test) && (S.push(ew()), (A += 1)),
                i && A < p && s()(I, eM().test) && (S.push(eM()), (A += 1)));
            let y = E.M.getCurrentConfig(
                { guildId: n.guild_id, location: "mention autocomplete" },
                { autoTrackExposure: !0 },
            ).enabled;
            return (
                r &&
                    y &&
                    null != ex &&
                    (A < p || 0 === I.length) &&
                    s()(I, ex().test) &&
                    (A >= p && (S.length > 0 ? S.pop() : T.length > 0 ? T.pop() : g.length > 0 && g.pop()),
                    S.push(ex()),
                    (A += 1)),
                c &&
                    null != eP &&
                    (((A < p || 0 === I.length) && s()(I, eP().test)) || I === eP().test) &&
                    (A >= p && (T.length > 0 ? T.pop() : g.length > 0 && g.pop()), S.push(eP()), (A += 1)),
                { users: g, globals: S, roles: T }
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
                c = u.length,
                d = t.toLowerCase(),
                _ = [];
            if (c < ea.rs7 && a) {
                let e = B.A.getGuild(n);
                null != e &&
                    (o()(V.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && s()(d, e.name.toLowerCase()) && !(0, M.Oy)(e))
                        .take(ea.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                r &&
                    a &&
                    (c < ea.rs7 && s()(d, ew().test) && (f.push(ew()), (c += 1)),
                    c < ea.rs7 && s()(d, eM().test) && f.push(eM())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                s = t.toLocaleLowerCase(),
                a = RegExp(`^${en.A.escape(s)}`, "i"),
                l = RegExp(en.A.escape(s), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = eB(
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
                    exactQuery: RegExp(`^${en.A.escape(r)}`, "i"),
                    containQuery: RegExp(en.A.escape(r), "i"),
                    queryLower: r,
                },
                s = (0, A.K)(n.id) && !n.features.has(ea.GuildFeatures.HUB),
                a = n.features.has(ea.GuildFeatures.COMMUNITY),
                o = (0, g.u)(n) && n.features.has(ea.GuildFeatures.COMMUNITY),
                l = [
                    { id: el.T4.SERVER_GUIDE, name: ec.intl.string(ec.t.VbpLyU) },
                    { id: el.T4.CHANNEL_BROWSER, name: ec.intl.string(ec.t.et6wav) },
                    { id: el.T4.CUSTOMIZE_COMMUNITY, name: ec.intl.string(ec.t.h9mGOP) },
                ],
                u = [];
            for (let e of l)
                (e.id !== el.T4.SERVER_GUIDE || s) &&
                    (e.id !== el.T4.CHANNEL_BROWSER || a) &&
                    (e.id !== el.T4.CUSTOMIZE_COMMUNITY || o) &&
                    eB(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new w.jb({ id: e.id, name: e.name, type: ea.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = G.I6, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = ea.rs7, allowSnowflake: s } = e;
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
            let { query: t, channel: n, intention: r, maxCount: i = ea.rs7, matchComparator: s } = e;
            return (
                L.bW.loadIfNecessary(),
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eb],
                i = z.default.getCurrentUser(),
                s = new Set(),
                a = [];
            for (let o of (L.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, ei.sS)(e),
                    u = RegExp(`^${en.A.escape(l)}`, "i"),
                    c = RegExp(`${en.A.escape(l)}`, "i");
                C.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            f = C.A.getStickerById(l);
                        if (null == f || !r(f, (0, v.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                s = eW(r),
                                a = 0;
                            t
                                ? i === e
                                    ? (a = e_ * s)
                                    : u.test(i)
                                      ? (a = ef * s)
                                      : (r === R.cG.GUILD_NAME || r === R.cG.PACK_NAME || r === R.cG.STICKER_NAME) &&
                                        c.test(i) &&
                                        (a = ep * s)
                                : i === e && ((a = e_ * s), (_ = i)),
                                a > d && ((d = a), (_ = i));
                        }
                        let p = N.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
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
                        .value()).length && (a = eL),
                a
            );
        },
        querySoundmoji(e, t) {
            let n = z.default.getCurrentUser();
            S.A.isFetching() || S.A.hasFetchedAllSounds() || (0, T.E7)(), L.bW.loadIfNecessary();
            let r = Array.from(S.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, I.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, y.lG)(e, r, n, t);
        },
        queryGames(e) {
            let t = m.Ay.getRunningVerifiedApplicationIds();
            null == q.A.lastFetched && u.X();
            let n = q.A.applicationStatistics;
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
                        eu.Bf.has(r.id) && (i += eu.Bf.get(r.id) / eu.Bf.size)),
                    i
                );
            }
            let i = k.A.games;
            return o()(i)
                .filter((e) => !(0, D.nS)(e))
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
                .slice(0, ea.rs7);
        },
        matchSentinel: (e, t, n) => !eD.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = B.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? V.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eY,
    };

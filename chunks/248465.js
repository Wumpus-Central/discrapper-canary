"use strict";
let r;
n.d(t, { Ay: () => e3, L3: () => eB, X3: () => eV, zy: () => eF }), n(321073), n(667532);
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
    P = n(961350),
    k = n(734057),
    U = n(760751),
    G = n(205761),
    F = n(808728),
    V = n(696451),
    B = n(317525),
    H = n(71393),
    j = n(320501),
    Y = n(576705),
    W = n(290863),
    K = n(994500),
    $ = n(309010),
    z = n(967198),
    q = n(287809),
    Z = n(90165),
    X = n(67480),
    Q = n(583613),
    J = n(403362),
    ee = n(860689),
    et = n(695184),
    en = n(488926),
    er = n(257120),
    ei = n(661191),
    es = n(240248),
    ea = n(427262),
    eo = n(652215),
    el = n(926140),
    eu = n(746080),
    ec = n(282435),
    ed = n(985018);
let e_ = new p.A("AutocompleteUtils"),
    ef = 10,
    ep = 8,
    eh = 7,
    em = 5,
    eE = 3,
    eg = 1,
    eA = 1,
    eI = 3,
    eT = 5,
    eS = 3,
    ey = 11,
    ev = 6,
    eN = 8,
    eC = 1,
    eR = 1e3,
    eO = 0.2,
    eb = 0.1,
    eD = 50,
    eL = () => !0,
    ew = /(\t|\s)/,
    eM = [],
    ex = (r = n(966382).A).MENTION_EVERYONE,
    eP = r.MENTION_HERE,
    ek = r.MENTION_GAME,
    eU = r.MENTION_TIMESTAMP,
    eG = r.LAUNCHABLE_APPLICATIONS;
function eF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eR * e * (t ?? 1);
}
function eV(e) {
    let t = G.A.getFrequentlyWithoutFetchingLatest(),
        n = t.reduce((e, t) => {
            let { id: n } = t,
                r = G.A.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        r = [];
    switch (e) {
        case el.rD.GUILD:
            r = t.filter((e) => (0, ee.fh)(e));
            break;
        case el.rD.USER:
            r = t.filter((e) => e instanceof w.YB && e.type === eo.rbe.DM);
            break;
        case el.rD.GROUP_DM:
            r = t.filter((e) => e instanceof w.YB && e.isMultiUserDM());
            break;
        case el.rD.TEXT_CHANNEL:
            r = t.filter((e) => e instanceof w.YB && (0, w.tr)(e.type));
            break;
        case el.rD.VOICE_CHANNEL:
            r = t.filter((e) => e instanceof w.YB && e.isGuildVocal());
    }
    let i = {};
    for (let t of r) {
        let { id: r } = t,
            s = G.A.getScoreWithoutFetchingLatest(r);
        if (e === el.rD.USER && t instanceof w.cq) {
            if (t.type === eo.rbe.DM) i[(r = t.getRecipientId())] = 1 + s / n;
            else if (t.type === eo.rbe.GROUP_DM) {
                let e = t.recipients.length;
                for (let r of t.recipients) i[r] = 1 + (s / n) * (1 / e);
            }
        } else i[r] = 1 + s / n;
    }
    for (let e of K.A.getFriendIDs()) i[e] = (i[e] ?? 1) + eO;
    for (let e of k.A.getDMUserIds()) i[e] = (i[e] ?? 1) + eb;
    return i;
}
let eB = [F.I6, F.vM, eo.rbe.GUILD_CATEGORY];
function eH(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(er.A.escape(e), "i").test(t));
}
function ej(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return ef;
            return eh;
        }
        if (r.test(e)) return em;
        if (eH(i, e)) return eE;
        if (a && s()(i, e)) return eg;
    } catch (e) {
        e_.error(e);
    }
    return 0;
}
function eY(e) {
    return e?.joinedAt != null && !e.isPending;
}
function eW(e) {
    if (null == e) return [null, null];
    let t = (0, es.sS)(e),
        n = (0, es.S8)(t);
    return [t, n];
}
function eK(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a, boosters: o } = e,
        l = q.default.getUsers(),
        u = z.A.getGuildId(),
        c = t.toLocaleLowerCase(),
        _ = (0, es.S8)(c),
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
            ? ((r = d), (e = V.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = d.nick?.toLocaleLowerCase()), (r = l[d.userId]));
        let h = ea.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, es.sS)(n),
                l = (0, es.S8)(i),
                [u, d] = eW(e),
                [m, g] = eW(h);
            (a && t === r.id) ||
            n.substring(0, c.length) === c ||
            i.substring(0, c.length) === c ||
            e?.substring(0, c.length) === c ||
            u?.substring(0, c.length) === c ||
            h?.substring(0, c.length) === c ||
            m?.substring(0, c.length) === c
                ? f.push({
                      type: el.rD.USER,
                      record: r,
                      score: eF(ef, o?.[r.id]),
                      comparator: h ?? e ?? n,
                      sortable: m ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || d?.substring(0, _.length) === _ || g?.substring(0, _.length) === _
                  ? f.push({
                        type: el.rD.USER,
                        record: r,
                        score: eF(eg, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: m ?? u ?? i,
                    })
                  : E < eD &&
                    (s()(c, i) ||
                        s()(_, l) ||
                        (null != u && s()(c, u)) ||
                        (null != d && s()(_, d)) ||
                        (null != m && s()(c, m)) ||
                        (null != g && s()(_, g))) &&
                    (p.push({
                        type: el.rD.USER,
                        record: r,
                        score: eF(eg, o?.[r.id]),
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
function e$(e) {
    switch (e) {
        case R.cG.STICKER_NAME:
            return ey;
        case R.cG.CORRELATED_EMOJI:
            return ev;
        case R.cG.TAG:
            return eC;
        case R.cG.GUILD_NAME:
        case R.cG.PACK_NAME:
            return eN;
        default:
            return 1;
    }
}
function ez(e) {
    return e === F.I6 || (e !== F.vM && !!(0, w.fT)(e));
}
function eq(e, t, n) {
    return (
        e === t || ((!!n || !!(0, w.zy)(t)) && (e === F.I6 ? (0, w.tr)(t) || (0, w.ay)(t) : e === F.vM && (0, w.ay)(t)))
    );
}
function eZ(e, t) {
    return e === F.I6 && (0, w.ay)(t);
}
function eX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(" ")
            .filter((e) => "" !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp(`^${er.A.escape(t)}`, "i"),
                    containQuery: RegExp(er.A.escape(t), "i"),
                    isFullMatch: !1,
                };
            });
    if (e.includes(" ")) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp(`^${er.A.escape(t).replace(" ", "( |-)")}`, "i"),
            containQuery: RegExp(er.A.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0,
        });
    }
    return n;
}
function eQ(e, t, n) {
    let r = 0,
        i = null;
    for (let s of t) {
        let t = ej(e, s, n);
        t > r && ((r = t), (i = s));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eJ(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    return null == n && (n = t[e.guild_id] = H.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()), n;
}
function e0(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    return null == n && (n = t[e.parent_id] = k.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()), n;
}
function e1(e, t) {
    let n = k.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(j.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => q.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eY(V.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? V.Ay.getMember(t, e.id) : null;
                  return { type: el.rD.USER, record: e, score: 0, comparator: r?.nick ?? ea.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let e2 = (0, Q.L_)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            s = [];
        return (
            o()(k.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = q.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e), s.push({ userId: t, nick: K.A.getNickname(t) }), i.set(t, n));
                    }
                }),
            { channelsByRecipientId: r, recipientsById: i, recipients: s }
        );
    }),
    e3 = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eK({
                query: t,
                members: K.A.getFriendIDs()
                    .map((e) => q.default.getUser(e))
                    .filter(J.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eK({
                query: t,
                members: k.A.getDMUserIds()
                    .map((e) => q.default.getUser(e))
                    .filter(J.Vq),
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
                l = k.A.getChannel(n);
            if (null == l) return [];
            let u = (l.isThread() ? k.A.getChannel(l.parent_id) : null) ?? l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => ({ userId: e, nick: K.A.getNickname(e) ?? null }));
                let e = q.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && a) {
                    let e = e1(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = V.Ay.getMembers(u.guild_id).filter(eY)), s && et.A.requestMembers(u.guild_id, r, i);
            }
            return eK({
                query: r,
                members: t,
                limit: i,
                filter: (e) => u.isPrivate() || en.$3({ permission: eo.xBc.VIEW_CHANNEL, user: e, context: u }),
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
            if (null == H.A.getGuild(t)) return [];
            if (0 === n.length && s) {
                let e = e1($.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = V.Ay.getMembers(t).filter(eY);
            return (
                i && n.length > 0 && et.A.requestMembers(t, n, r),
                eK({ query: n, members: l, limit: r, filter: a, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: s, allowSnowflake: a } = e;
            return eK({ query: t, members: s, limit: i, filter: n, allowSnowflake: a, boosters: r });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: s = !0 } = e;
            return (
                s && t.length > 0 && et.A.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: s,
                    filter: n,
                    boosters: r,
                    users: o()(q.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            let t,
                {
                    query: n,
                    guildId: r,
                    limit: i = eo.rs7,
                    fuzzy: s = !0,
                    filter: a = eL,
                    type: l = F.I6,
                    allowEmptyQueries: u = !1,
                    requireVocalConnectAccess: c = !0,
                    boosters: f = {},
                    allowSnowflake: p,
                    includeAllThreads: h,
                } = e,
                m = eX(n, u),
                E = ez(l);
            t =
                null != r
                    ? o()(F.Ay.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(E ? (h ? k.A.getAllThreadsForGuild(r) : O.A.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : o()(k.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(E ? O.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let g = {},
                A = [],
                I = G.A.getMaxScore();
            for (let e of t) {
                if (
                    !eq(l, e.type, null != r) ||
                    ((0, w.zy)(e.type) && !Y.A.can(c ? e.accessPermissions : eo.xBc.VIEW_CHANNEL, e)) ||
                    !a(e)
                )
                    continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    o = p && n === e.id,
                    u = o ? ef : eQ(i, t, s);
                if (0 !== u) {
                    if (t.length > 0) {
                        for (let n of [eJ(e, g), e0(e, g)]) {
                            if (null == n || "" === n) continue;
                            let e = eQ(n, t, !1);
                            0 !== e && (u += 0.5 * e);
                        }
                        u = Math.min(eh - eg, u);
                    }
                    0 !== u &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || o) &&
                        (eZ(l, e.type) && (u = Math.max(u - eA, eg / 2)),
                        e.isThread() && (e.isActiveThread() || (u -= eI), b.A.hasJoined(e.id) || (u -= eT)),
                        (u = Math.min(
                            u + Math.min(G.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / I, 1) * eS,
                            u >= eh ? ef : eh,
                        )),
                        A.push({
                            type: (0, w.ay)(e.type) ? el.rD.VOICE_CHANNEL : el.rD.TEXT_CHANNEL,
                            record: e,
                            score: eF(u, f[e.id]),
                            comparator: (0, _.m1)(e, q.default, K.A),
                            sortable: i,
                        }));
                }
            }
            return A.sort(d.A), null != i && A.length > i && (A.length = i), A;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: s = eL, boosters: a = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${er.A.escape(o)}`, "i"),
                    containQuery: RegExp(er.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of H.A.getGuildsArray()) {
                if (!s(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? ef : ej(n, l, r);
                o > 0 &&
                    u.push({ type: el.rD.GUILD, record: e, score: eF(o, a[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: s,
                    recipients: a,
                } = e2(k.A.getPrivateChannelsVersion(), K.A.getVersion(), q.default.getUserStoreVersion()),
                o = eK({ query: t, members: a, limit: a.length, boosters: r }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: el.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: ea.Ay.getUserTag(s.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(d.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eL, boosters: s = {} } = e,
                a = (0, es.sS)((0, es.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${er.A.escape(a)}`, "i"),
                    containQuery: RegExp(er.A.escape(a), "i"),
                    queryLower: a,
                },
                u = o()(k.A.getMutablePrivateChannels()).values().value(),
                c = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.m1)(e, q.default, K.A).toLocaleLowerCase(),
                    n = (0, es.sS)((0, es.S8)(t)),
                    a = ej(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = q.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = ea.Ay.getGlobalName(e),
                        i = K.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(em, ej((0, es.sS)((0, es.S8)(e.toLocaleLowerCase())), l, r));
                    t > a && (a = t);
                }
                a > 0 &&
                    c.push({
                        type: el.rD.GROUP_DM,
                        record: e,
                        score: eF(a, s[e.id]),
                        comparator: (0, _.m1)(e, q.default, K.A),
                        sortable: n,
                    });
            }
            return c.sort(d.A), c.length > n && (c.length = n), c;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eL } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${er.A.escape(s)}`, "i"),
                    containQuery: RegExp(er.A.escape(s), "i"),
                    queryLower: s,
                },
                o = eG(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ej(t, a, r);
                n > 0 && l.push({ type: el.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(d.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
                i = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${er.A.escape(i)}`, "i"),
                    containQuery: RegExp(er.A.escape(i), "i"),
                    queryLower: i,
                },
                a = {
                    [c.t1.SHOP]: [ed.intl.string(ed.t.pWG4ze)],
                    [c.t1.SHOP_ORBS_TAB]: [
                        ed.intl.string(ed.t.ElYQFS),
                        ed.intl.string(ed.t.pWG4ze),
                        ed.intl.string(ed.t.EBYkzk),
                    ],
                    [c.t1.QUEST_ORBS]: [
                        ed.intl.string(ed.t.ElYQFS),
                        ed.intl.string(ed.t["v/R2aC"]),
                        ed.intl.string(ed.t.qQR4tn),
                    ],
                    [c.t1.NITRO_HOME]: [ed.intl.string(ed.t.Ipxkog)],
                    [c.t1.QUEST_HOME]: [ed.intl.string(ed.t.JALI2K)],
                    [c.t1.APPS_HOME]: [ed.intl.string(ed.t.PHjkRE), ed.intl.string(ed.t.AKcFUj)],
                    [c.t1.SETTINGS]: [ed.intl.string(ed.t["3D5yo/"])],
                },
                o = [];
            for (let e in a) {
                let t = c.t1[e],
                    n = a[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            i = ej(n, s, r);
                        i > 0 &&
                            o.push({
                                type: el.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(t),
                                score: eF(i),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            return o.sort(d.A), o.length > n && (o.length = n), o;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eL } = e,
                s = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp(`^${er.A.escape(s)}`, "i"),
                    containQuery: RegExp(er.A.escape(s), "i"),
                    queryLower: s,
                },
                l = o()(X.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === eo.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = ej(t, a, r);
                    n > 0 && u.push({ type: el.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: e1,
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
                    limit: p = eo.rs7,
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
                              nick: V.Ay.getNick(n.guild_id, t.id),
                              status: W.A.getStatus(t.id),
                          };
                      })
                    : [],
                A = g.length,
                I = t.toLowerCase(),
                T = [];
            if (A < p && u) {
                let e = n.getGuildId(),
                    i = H.A.getGuild(e);
                if (null != i) {
                    let n = o()(B.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: a } = t;
                            return (
                                (n || r || _) &&
                                (s()(I, i.toLowerCase()) || (m && I === a)) &&
                                a !== ei.default.castGuildIdAsEveryoneGuildRoleId(e)
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
                (A < p && s()(I, ex().test) && (S.push(ex()), (A += 1)),
                i && A < p && s()(I, eP().test) && (S.push(eP()), (A += 1)));
            let y = E.M.getCurrentConfig(
                { guildId: n.guild_id, location: "mention autocomplete" },
                { autoTrackExposure: !0 },
            ).enabled;
            return (
                r &&
                    y &&
                    null != ek &&
                    (A < p || 0 === I.length) &&
                    s()(I, ek().test) &&
                    (A >= p && (S.length > 0 ? S.pop() : T.length > 0 ? T.pop() : g.length > 0 && g.pop()),
                    S.push(ek()),
                    (A += 1)),
                c &&
                    null != eU &&
                    (((A < p || 0 === I.length) && s()(I, eU().test)) || I === eU().test) &&
                    (A >= p && (T.length > 0 ? T.pop() : g.length > 0 && g.pop()), S.push(eU()), (A += 1)),
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
                          status: W.A.getStatus(e.record.id),
                      }))
                    : [],
                c = u.length,
                d = t.toLowerCase(),
                _ = [];
            if (c < eo.rs7 && a) {
                let e = H.A.getGuild(n);
                null != e &&
                    (o()(B.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && s()(d, e.name.toLowerCase()) && !(0, M.Oy)(e))
                        .take(eo.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                r &&
                    a &&
                    (c < eo.rs7 && s()(d, ex().test) && (f.push(ex()), (c += 1)),
                    c < eo.rs7 && s()(d, eP().test) && f.push(eP())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                s = t.toLocaleLowerCase(),
                a = RegExp(`^${er.A.escape(s)}`, "i"),
                l = RegExp(er.A.escape(s), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = ej(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: a, containQuery: l, queryLower: s },
                            i,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(J.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (u = u.take(r)), u.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp(`^${er.A.escape(r)}`, "i"),
                    containQuery: RegExp(er.A.escape(r), "i"),
                    queryLower: r,
                },
                s = (0, A.K)(n.id) && !n.features.has(eo.GuildFeatures.HUB),
                a = n.features.has(eo.GuildFeatures.COMMUNITY),
                o = (0, g.u)(n) && n.features.has(eo.GuildFeatures.COMMUNITY),
                l = [
                    { id: eu.T4.SERVER_GUIDE, name: ed.intl.string(ed.t.VbpLyU) },
                    { id: eu.T4.CHANNEL_BROWSER, name: ed.intl.string(ed.t.et6wav) },
                    { id: eu.T4.CUSTOMIZE_COMMUNITY, name: ed.intl.string(ed.t.h9mGOP) },
                ],
                u = [];
            for (let e of l)
                (e.id !== eu.T4.SERVER_GUIDE || s) &&
                    (e.id !== eu.T4.CHANNEL_BROWSER || a) &&
                    (e.id !== eu.T4.CUSTOMIZE_COMMUNITY || o) &&
                    ej(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new w.jb({ id: e.id, name: e.name, type: eo.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = F.I6, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = eo.rs7, allowSnowflake: s } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let a = [];
            for (let e of eB)
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
            let { query: t, channel: n, intention: r, maxCount: i = eo.rs7, matchComparator: s } = e;
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eL],
                i = q.default.getCurrentUser(),
                s = new Set(),
                a = [];
            for (let o of (L.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, es.sS)(e),
                    u = RegExp(`^${er.A.escape(l)}`, "i"),
                    c = RegExp(`${er.A.escape(l)}`, "i");
                C.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            f = C.A.getStickerById(l);
                        if (null == f || !r(f, (0, v.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                s = e$(r),
                                a = 0;
                            t
                                ? i === e
                                    ? (a = ef * s)
                                    : u.test(i)
                                      ? (a = eh * s)
                                      : (r === R.cG.GUILD_NAME || r === R.cG.PACK_NAME || r === R.cG.STICKER_NAME) &&
                                        c.test(i) &&
                                        (a = em * s)
                                : i === e && ((a = ef * s), (_ = i)),
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
                        .value()).length && (a = eM),
                a
            );
        },
        querySoundmoji(e, t) {
            let n = q.default.getCurrentUser();
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
            null == Z.A.lastFetched && u.X();
            let n = Z.A.applicationStatistics;
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
                        ec.Bf.has(r.id) && (i += ec.Bf.get(r.id) / ec.Bf.size)),
                    i
                );
            }
            let i = U.A.games;
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
                .slice(0, eo.rs7);
        },
        queryMentionSuggestionResults(e) {
            let { query: t, channel: n, limit: r = 3, boosters: i, onlyExactMatch: s = !1 } = e,
                a = n.isPrivate()
                    ? n.recipients.map((e) => ({ userId: e, nick: K.A.getNickname(e) ?? null }))
                    : V.Ay.getMembers(n.guild_id).filter(eY),
                o = P.default.getId(),
                l = q.default.getUsers(),
                u = z.A.getGuildId(),
                c = t.toLocaleLowerCase(),
                _ = (0, es.S8)(c),
                f = [];
            u: for (let e of a) {
                let t, a;
                if (f.length >= r) break;
                if (
                    (e instanceof x.A
                        ? ((a = e), (t = V.Ay.getNick(u, a.id)?.toLocaleLowerCase()))
                        : ((t = e.nick?.toLocaleLowerCase()), (a = l[e.userId])),
                    null == a || a.id === o || a.bot)
                )
                    continue;
                let d = K.A.getNickname(a.id)?.toLocaleLowerCase(),
                    p = ea.Ay.getGlobalName(a)?.toLocaleLowerCase();
                if (!en.$3({ permission: eo.xBc.VIEW_CHANNEL, user: a, context: n }) && !n.isPrivate()) continue;
                let h = (e, n, r) => {
                        f.push({
                            user: a,
                            score: eF(n, i?.[a.id]),
                            matchType: e,
                            comparator: r,
                            nick: t,
                            status: W.A.getStatus(a.id),
                        });
                    },
                    m = a.username.toLocaleLowerCase(),
                    E = (0, es.sS)(m),
                    g = (0, es.S8)(E),
                    [A, I] = eW(t),
                    [T, S] = eW(d),
                    [y, v] = eW(p),
                    N = [
                        [m, m],
                        [E, m],
                        [t, t],
                        [A, t],
                        [d, d],
                        [T, d],
                        [p, p],
                        [y, p],
                    ].filter((e) => null != e[0] && null != e[1]);
                for (let [e, t] of N)
                    if (c === e) {
                        h("exact", ef, t);
                        continue u;
                    }
                let C = /\s+|\.|_/;
                for (let [e, t] of N)
                    if (c === e.split(C, 1)[0]) {
                        h("exact", ep, t);
                        continue u;
                    }
                if (!s) {
                    for (let [e, t] of N)
                        if (e.startsWith(c)) {
                            h("starts_with", eh, t);
                            continue u;
                        }
                    for (let [e, n] of [
                        [g, m],
                        [I, t],
                        [S, d],
                        [v, p],
                    ])
                        if (null != e && null != n && e.startsWith(_)) {
                            h("starts_with", eh, n);
                            continue u;
                        }
                }
            }
            return f.sort(d.A), f;
        },
        matchSentinel: (e, t, n) => !ew.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = H.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? B.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: eK,
    };

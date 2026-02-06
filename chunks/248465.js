"use strict";
let r;
n.d(t, { Ay: () => e4, L3: () => eH, X3: () => ej, zy: () => eB }), n(321073), n(667532);
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
    p = n(182014),
    h = n(626584),
    m = n(790271),
    g = n(508675),
    E = n(15285),
    A = n(352505),
    I = n(202776),
    T = n(473529),
    S = n(69945),
    y = n(796774),
    v = n(209932),
    C = n(147472),
    N = n(361670),
    b = n(931959),
    R = n(679382),
    O = n(842086),
    D = n(863005),
    L = n(152007),
    w = n(735321),
    x = n(594061),
    M = n(95701),
    P = n(34457),
    k = n(427157),
    U = n(961350),
    G = n(734057),
    F = n(760751),
    V = n(205761),
    B = n(808728),
    j = n(696451),
    H = n(317525),
    Y = n(71393),
    W = n(320501),
    K = n(576705),
    z = n(290863),
    $ = n(994500),
    q = n(309010),
    X = n(967198),
    Z = n(287809),
    Q = n(90165),
    J = n(67480),
    ee = n(583613),
    et = n(403362),
    en = n(860689),
    er = n(695184),
    ei = n(488926),
    ea = n(257120),
    es = n(661191),
    eo = n(240248),
    el = n(427262),
    eu = n(652215),
    ec = n(926140),
    ed = n(746080),
    e_ = n(282435),
    ef = n(985018);
let ep = new h.A("AutocompleteUtils"),
    eh = 10,
    em = 8,
    eg = 7,
    eE = 5,
    eA = 3,
    eI = 1,
    eT = 1,
    eS = 3,
    ey = 5,
    ev = 3,
    eC = 11,
    eN = 6,
    eb = 8,
    eR = 1,
    eO = 1e3,
    eD = 0.2,
    eL = 0.1,
    ew = 50,
    ex = () => !0,
    eM = /(\t|\s)/,
    eP = [],
    ek = (r = n(966382).A).MENTION_EVERYONE,
    eU = r.MENTION_HERE,
    eG = r.MENTION_GAME,
    eF = r.MENTION_TIMESTAMP,
    eV = r.LAUNCHABLE_APPLICATIONS;
function eB() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eO * e * (t ?? 1);
}
function ej(e) {
    let t = V.A.getFrequentlyWithoutFetchingLatest(),
        n = t.reduce((e, t) => {
            let { id: n } = t,
                r = V.A.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        r = [];
    switch (e) {
        case ec.rD.GUILD:
            r = t.filter((e) => (0, en.fh)(e));
            break;
        case ec.rD.USER:
            r = t.filter((e) => e instanceof M.YB && e.type === eu.rbe.DM);
            break;
        case ec.rD.GROUP_DM:
            r = t.filter((e) => e instanceof M.YB && e.isMultiUserDM());
            break;
        case ec.rD.TEXT_CHANNEL:
            r = t.filter((e) => e instanceof M.YB && (0, M.tr)(e.type));
            break;
        case ec.rD.VOICE_CHANNEL:
            r = t.filter((e) => e instanceof M.YB && e.isGuildVocal());
    }
    let i = {};
    for (let t of r) {
        let { id: r } = t,
            a = V.A.getScoreWithoutFetchingLatest(r);
        if (e === ec.rD.USER && t instanceof M.cq) {
            if (t.type === eu.rbe.DM) i[(r = t.getRecipientId())] = 1 + a / n;
            else if (t.type === eu.rbe.GROUP_DM) {
                let e = t.recipients.length;
                for (let r of t.recipients) i[r] = 1 + (a / n) * (1 / e);
            }
        } else i[r] = 1 + a / n;
    }
    for (let e of $.A.getFriendIDs()) i[e] = (i[e] ?? 1) + eD;
    for (let e of G.A.getDMUserIds()) i[e] = (i[e] ?? 1) + eL;
    return i;
}
let eH = [B.I6, B.vM, eu.rbe.GUILD_CATEGORY];
function eY(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(ea.A.escape(e), "i").test(t));
}
function eW(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return eh;
            return eg;
        }
        if (r.test(e)) return eE;
        if (eY(i, e)) return eA;
        if (s && a()(i, e)) return eI;
    } catch (e) {
        ep.error(e);
    }
    return 0;
}
function eK(e) {
    return e?.joinedAt != null && !e.isPending;
}
function ez(e) {
    if (null == e) return [null, null];
    let t = (0, eo.sS)(e),
        n = (0, eo.S8)(t);
    return [t, n];
}
function e$(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: s, boosters: o } = e,
        l = Z.default.getUsers(),
        u = X.A.getGuildId(),
        c = t.toLocaleLowerCase(),
        _ = (0, eo.S8)(c),
        f = [],
        p = [],
        h = n.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        let e,
            r,
            d = n[m];
        d instanceof k.A
            ? ((r = d), (e = j.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = d.nick?.toLocaleLowerCase()), (r = l[d.userId]));
        let h = el.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, eo.sS)(n),
                l = (0, eo.S8)(i),
                [u, d] = ez(e),
                [m, E] = ez(h);
            (s && t === r.id) ||
            n.substring(0, c.length) === c ||
            i.substring(0, c.length) === c ||
            e?.substring(0, c.length) === c ||
            u?.substring(0, c.length) === c ||
            h?.substring(0, c.length) === c ||
            m?.substring(0, c.length) === c
                ? f.push({
                      type: ec.rD.USER,
                      record: r,
                      score: eB(eh, o?.[r.id]),
                      comparator: h ?? e ?? n,
                      sortable: m ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || d?.substring(0, _.length) === _ || E?.substring(0, _.length) === _
                  ? f.push({
                        type: ec.rD.USER,
                        record: r,
                        score: eB(eI, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: m ?? u ?? i,
                    })
                  : g < ew &&
                    (a()(c, i) ||
                        a()(_, l) ||
                        (null != u && a()(c, u)) ||
                        (null != d && a()(_, d)) ||
                        (null != m && a()(c, m)) ||
                        (null != E && a()(_, E))) &&
                    (p.push({
                        type: ec.rD.USER,
                        record: r,
                        score: eB(eI, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: m ?? u ?? i,
                    }),
                    (g += 1));
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
function eq(e) {
    switch (e) {
        case O.cG.STICKER_NAME:
            return eC;
        case O.cG.CORRELATED_EMOJI:
            return eN;
        case O.cG.TAG:
            return eR;
        case O.cG.GUILD_NAME:
        case O.cG.PACK_NAME:
            return eb;
        default:
            return 1;
    }
}
function eX(e) {
    return e === B.I6 || (e !== B.vM && !!(0, M.fT)(e));
}
function eZ(e, t, n) {
    return (
        e === t || ((!!n || !!(0, M.zy)(t)) && (e === B.I6 ? (0, M.tr)(t) || (0, M.ay)(t) : e === B.vM && (0, M.ay)(t)))
    );
}
function eQ(e, t) {
    return e === B.I6 && (0, M.ay)(t);
}
function eJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(" ")
            .filter((e) => "" !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp(`^${ea.A.escape(t)}`, "i"),
                    containQuery: RegExp(ea.A.escape(t), "i"),
                    isFullMatch: !1,
                };
            });
    if (e.includes(" ")) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp(`^${ea.A.escape(t).replace(" ", "( |-)")}`, "i"),
            containQuery: RegExp(ea.A.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0,
        });
    }
    return n;
}
function e0(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eW(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function e1(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    return null == n && (n = t[e.guild_id] = Y.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()), n;
}
function e2(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    return null == n && (n = t[e.parent_id] = G.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()), n;
}
function e3(e, t) {
    let n = G.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(W.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Z.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eK(j.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? j.Ay.getMember(t, e.id) : null;
                  return { type: ec.rD.USER, record: e, score: 0, comparator: r?.nick ?? el.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let e6 = (0, ee.L_)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            a = [];
        return (
            o()(G.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = Z.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e), a.push({ userId: t, nick: $.A.getNickname(t) }), i.set(t, n));
                    }
                }),
            { channelsByRecipientId: r, recipientsById: i, recipients: a }
        );
    }),
    e4 = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return e$({
                query: t,
                members: $.A.getFriendIDs()
                    .map((e) => Z.default.getUser(e))
                    .filter(et.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return e$({
                query: t,
                members: G.A.getDMUserIds()
                    .map((e) => Z.default.getUser(e))
                    .filter(et.Vq),
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
                l = G.A.getChannel(n);
            if (null == l) return [];
            let u = (l.isThread() ? G.A.getChannel(l.parent_id) : null) ?? l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => ({ userId: e, nick: $.A.getNickname(e) ?? null }));
                let e = Z.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && s) {
                    let e = e3(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = j.Ay.getMembers(u.guild_id).filter(eK)), a && er.A.requestMembers(u.guild_id, r, i);
            }
            return e$({
                query: r,
                members: t,
                limit: i,
                filter: (e) => u.isPrivate() || ei.$3({ permission: eu.xBc.VIEW_CHANNEL, user: e, context: u }),
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
            if (null == Y.A.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = e3(q.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = j.Ay.getMembers(t).filter(eK);
            return (
                i && n.length > 0 && er.A.requestMembers(t, n, r),
                e$({ query: n, members: l, limit: r, filter: s, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: a, allowSnowflake: s } = e;
            return e$({ query: t, members: a, limit: i, filter: n, allowSnowflake: s, boosters: r });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: a = !0 } = e;
            return (
                a && t.length > 0 && er.A.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: a,
                    filter: n,
                    boosters: r,
                    users: o()(Z.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            let t,
                {
                    query: n,
                    guildId: r,
                    limit: i = eu.rs7,
                    fuzzy: a = !0,
                    filter: s = ex,
                    type: l = B.I6,
                    allowEmptyQueries: u = !1,
                    requireVocalConnectAccess: c = !0,
                    boosters: f = {},
                    allowSnowflake: p,
                    includeAllThreads: h,
                } = e,
                m = eJ(n, u),
                g = eX(l);
            t =
                null != r
                    ? o()(B.Ay.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(g ? (h ? G.A.getAllThreadsForGuild(r) : D.A.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : o()(G.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(g ? D.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let E = {},
                A = [],
                I = V.A.getMaxScore();
            for (let e of t) {
                if (
                    !eZ(l, e.type, null != r) ||
                    ((0, M.zy)(e.type) && !K.A.can(c ? e.accessPermissions : eu.xBc.VIEW_CHANNEL, e)) ||
                    !s(e)
                )
                    continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    o = p && n === e.id,
                    u = o ? eh : e0(i, t, a);
                if (0 !== u) {
                    if (t.length > 0) {
                        for (let n of [e1(e, E), e2(e, E)]) {
                            if (null == n || "" === n) continue;
                            let e = e0(n, t, !1);
                            0 !== e && (u += 0.5 * e);
                        }
                        u = Math.min(eg - eI, u);
                    }
                    0 !== u &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || o) &&
                        (eQ(l, e.type) && (u = Math.max(u - eT, eI / 2)),
                        e.isThread() && (e.isActiveThread() || (u -= eS), L.A.hasJoined(e.id) || (u -= ey)),
                        (u = Math.min(
                            u + Math.min(V.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / I, 1) * ev,
                            u >= eg ? eh : eg,
                        )),
                        A.push({
                            type: (0, M.ay)(e.type) ? ec.rD.VOICE_CHANNEL : ec.rD.TEXT_CHANNEL,
                            record: e,
                            score: eB(u, f[e.id]),
                            comparator: (0, _.m1)(e, Z.default, $.A),
                            sortable: i,
                        }));
                }
            }
            return A.sort(d.A), null != i && A.length > i && (A.length = i), A;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: a = ex, boosters: s = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${ea.A.escape(o)}`, "i"),
                    containQuery: RegExp(ea.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of Y.A.getGuildsArray()) {
                if (!a(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? eh : eW(n, l, r);
                o > 0 &&
                    u.push({ type: ec.rD.GUILD, record: e, score: eB(o, s[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: a,
                    recipients: s,
                } = e6(G.A.getPrivateChannelsVersion(), $.A.getVersion(), Z.default.getUserStoreVersion()),
                o = e$({ query: t, members: s, limit: s.length, boosters: r }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: ec.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: el.Ay.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(d.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ex, boosters: a = {} } = e,
                s = (0, eo.sS)((0, eo.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${ea.A.escape(s)}`, "i"),
                    containQuery: RegExp(ea.A.escape(s), "i"),
                    queryLower: s,
                },
                u = o()(G.A.getMutablePrivateChannels()).values().value(),
                c = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.m1)(e, Z.default, $.A).toLocaleLowerCase(),
                    n = (0, eo.sS)((0, eo.S8)(t)),
                    s = eW(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = Z.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = el.Ay.getGlobalName(e),
                        i = $.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(eE, eW((0, eo.sS)((0, eo.S8)(e.toLocaleLowerCase())), l, r));
                    t > s && (s = t);
                }
                s > 0 &&
                    c.push({
                        type: ec.rD.GROUP_DM,
                        record: e,
                        score: eB(s, a[e.id]),
                        comparator: (0, _.m1)(e, Z.default, $.A),
                        sortable: n,
                    });
            }
            return c.sort(d.A), c.length > n && (c.length = n), c;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ex } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${ea.A.escape(a)}`, "i"),
                    containQuery: RegExp(ea.A.escape(a), "i"),
                    queryLower: a,
                },
                o = eV(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eW(t, s, r);
                n > 0 && l.push({ type: ec.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(d.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${ea.A.escape(a)}`, "i"),
                    containQuery: RegExp(ea.A.escape(a), "i"),
                    queryLower: a,
                },
                o = {
                    [c.t1.SHOP]: [ef.intl.string(ef.t.pWG4ze)],
                    [c.t1.SHOP_ORBS_TAB]: [
                        ef.intl.string(ef.t.ElYQFS),
                        ef.intl.string(ef.t.pWG4ze),
                        ef.intl.string(ef.t.EBYkzk),
                    ],
                    [c.t1.QUEST_ORBS]: [
                        ef.intl.string(ef.t.ElYQFS),
                        ef.intl.string(ef.t["v/R2aC"]),
                        ef.intl.string(ef.t.qQR4tn),
                    ],
                    [c.t1.NITRO_HOME]: [ef.intl.string(ef.t.Ipxkog)],
                    [c.t1.QUEST_HOME]: [ef.intl.string(ef.t.JALI2K)],
                    [c.t1.APPS_HOME]: [ef.intl.string(ef.t.PHjkRE), ef.intl.string(ef.t.AKcFUj)],
                    [c.t1.SETTINGS]: [ef.intl.string(ef.t["3D5yo/"])],
                },
                l = [];
            for (let e in o) {
                let t = c.t1[e],
                    n = o[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = eW(n, s, i);
                        r > 0 &&
                            l.push({
                                type: ec.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(t),
                                score: eB(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            if ((0, m.mz)("quickswitcher")) {
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
                            r = eW(n, s, i);
                        if (r > 0) {
                            l.push({
                                type: ec.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(
                                    c.t1.PLAYGROUND,
                                    void 0,
                                    `${t.name} Playground`,
                                    t.id,
                                    t.IconComponent,
                                ),
                                score: eB(r),
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
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ex } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${ea.A.escape(a)}`, "i"),
                    containQuery: RegExp(ea.A.escape(a), "i"),
                    queryLower: a,
                },
                l = o()(J.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === eu.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eW(t, s, r);
                    n > 0 && u.push({ type: ec.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: e3,
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
                    checkRecentlyTalkedOnEmptyQuery: p = !0,
                    limit: h = eu.rs7,
                    request: m,
                    allowSnowflake: g = !1,
                } = e,
                E = s
                    ? (d && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: h,
                                checkRecentlyTalkedOnEmptyQuery: p,
                                request: m,
                                allowSnowflake: g,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: h,
                                checkRecentlyTalkedOnEmptyQuery: p,
                                allowSnowflake: g,
                            })
                      ).map((e) => {
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: j.Ay.getNick(n.guild_id, t.id),
                              status: z.A.getStatus(t.id),
                          };
                      })
                    : [],
                I = E.length,
                T = t.toLowerCase(),
                S = [];
            if (I < h && u) {
                let e = n.getGuildId(),
                    i = Y.A.getGuild(e);
                if (null != i) {
                    let n = o()(H.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: s } = t;
                            return (
                                (n || r || _) &&
                                (a()(T, i.toLowerCase()) || (g && T === s)) &&
                                s !== es.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (S = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, h - I)), (I += S.length);
                }
            }
            let y = [];
            !n.isPrivate() &&
                r &&
                u &&
                (I < h && a()(T, ek().test) && (y.push(ek()), (I += 1)),
                i && I < h && a()(T, eU().test) && (y.push(eU()), (I += 1)));
            let v = A.M.getCurrentConfig(
                { guildId: n.guild_id, location: "mention autocomplete" },
                { autoTrackExposure: !0 },
            ).enabled;
            return (
                r &&
                    v &&
                    null != eG &&
                    (I < h || 0 === T.length) &&
                    a()(T, eG().test) &&
                    (I >= h && (y.length > 0 ? y.pop() : S.length > 0 ? S.pop() : E.length > 0 && E.pop()),
                    y.push(eG()),
                    (I += 1)),
                f.A.getConfig({ location: "mention autocomplete" }).enabled &&
                    c &&
                    null != eF &&
                    (((I < h || 0 === T.length) && a()(T, eF().test)) || T === eF().test) &&
                    (I >= h && (S.length > 0 ? S.pop() : E.length > 0 && E.pop()), y.push(eF()), (I += 1)),
                { users: E, globals: y, roles: S }
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
            if (c < eu.rs7 && s) {
                let e = Y.A.getGuild(n);
                null != e &&
                    (o()(H.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && a()(d, e.name.toLowerCase()) && !(0, P.Oy)(e))
                        .take(eu.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                r &&
                    s &&
                    (c < eu.rs7 && a()(d, ek().test) && (f.push(ek()), (c += 1)),
                    c < eu.rs7 && a()(d, eU().test) && f.push(eU())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = RegExp(`^${ea.A.escape(a)}`, "i"),
                l = RegExp(ea.A.escape(a), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = eW(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: s, containQuery: l, queryLower: a },
                            i,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(et.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (u = u.take(r)), u.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp(`^${ea.A.escape(r)}`, "i"),
                    containQuery: RegExp(ea.A.escape(r), "i"),
                    queryLower: r,
                },
                a = (0, T.K)(n.id) && !n.features.has(eu.GuildFeatures.HUB),
                s = n.features.has(eu.GuildFeatures.COMMUNITY),
                o = (0, I.u)(n) && n.features.has(eu.GuildFeatures.COMMUNITY),
                l = [
                    { id: ed.T4.SERVER_GUIDE, name: ef.intl.string(ef.t.VbpLyU) },
                    { id: ed.T4.CHANNEL_BROWSER, name: ef.intl.string(ef.t.et6wav) },
                    { id: ed.T4.CUSTOMIZE_COMMUNITY, name: ef.intl.string(ef.t.h9mGOP) },
                ],
                u = [];
            for (let e of l)
                (e.id !== ed.T4.SERVER_GUIDE || a) &&
                    (e.id !== ed.T4.CHANNEL_BROWSER || s) &&
                    (e.id !== ed.T4.CUSTOMIZE_COMMUNITY || o) &&
                    eW(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new M.jb({ id: e.id, name: e.name, type: eu.rbe.UNKNOWN, guild_id: n.id }));
            return u;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = B.I6, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = eu.rs7, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let s = [];
            for (let e of eH)
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
                    .sort(p.A)),
                null != i && s.length > i && (s = s.slice(0, i)),
                { channels: s.map((e) => e.record) }
            );
        },
        queryChoiceResults(e) {
            let { query: t, choices: n } = e;
            return { choices: this.queryChoice({ query: t, choices: n, limit: null }).map((e) => e.choice) };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: r, maxCount: i = eu.rs7, matchComparator: a } = e;
            return (
                x.bW.loadIfNecessary(),
                {
                    emojis: g.Ay.searchWithoutFetchingLatest({
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ex],
                i = Z.default.getCurrentUser(),
                a = new Set(),
                s = [];
            for (let o of (x.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, eo.sS)(e),
                    u = RegExp(`^${ea.A.escape(l)}`, "i"),
                    c = RegExp(`${ea.A.escape(l)}`, "i");
                R.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            f = R.A.getStickerById(l);
                        if (null == f || !r(f, (0, N.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                a = eq(r),
                                s = 0;
                            t
                                ? i === e
                                    ? (s = eh * a)
                                    : u.test(i)
                                      ? (s = eg * a)
                                      : (r === O.cG.GUILD_NAME || r === O.cG.PACK_NAME || r === O.cG.STICKER_NAME) &&
                                        c.test(i) &&
                                        (s = eE * a)
                                : i === e && ((s = eh * a), (_ = i)),
                                s > d && ((d = s), (_ = i));
                        }
                        let p = b.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != p && (d *= p / 100),
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
                        .value()).length && (s = eP),
                s
            );
        },
        querySoundmoji(e, t) {
            let n = Z.default.getCurrentUser();
            v.A.isFetching() || v.A.hasFetchedAllSounds() || (0, y.E7)(), x.bW.loadIfNecessary();
            let r = Array.from(v.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, S.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, C.lG)(e, r, n, t);
        },
        queryGames(e) {
            let t = E.Ay.getRunningVerifiedApplicationIds();
            null == Q.A.lastFetched && u.X();
            let n = Q.A.applicationStatistics;
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
                        e_.Bf.has(r.id) && (i += e_.Bf.get(r.id) / e_.Bf.size)),
                    i
                );
            }
            let i = F.A.games;
            return o()(i)
                .filter((e) => !(0, w.nS)(e))
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
                .slice(0, eu.rs7);
        },
        queryMentionSuggestionResults(e) {
            let { query: t, channel: n, limit: r = 3, boosters: i, onlyExactMatch: a = !1 } = e,
                s = n.isPrivate()
                    ? n.recipients.map((e) => ({ userId: e, nick: $.A.getNickname(e) ?? null }))
                    : j.Ay.getMembers(n.guild_id).filter(eK),
                o = U.default.getId(),
                l = Z.default.getUsers(),
                u = X.A.getGuildId(),
                c = t.toLocaleLowerCase(),
                _ = (0, eo.S8)(c),
                f = [];
            u: for (let e of s) {
                let t, s;
                if (f.length >= r) break;
                if (
                    (e instanceof k.A
                        ? ((s = e), (t = j.Ay.getNick(u, s.id)?.toLocaleLowerCase()))
                        : ((t = e.nick?.toLocaleLowerCase()), (s = l[e.userId])),
                    null == s || s.id === o || s.bot)
                )
                    continue;
                let d = $.A.getNickname(s.id)?.toLocaleLowerCase(),
                    p = el.Ay.getGlobalName(s)?.toLocaleLowerCase();
                if (!ei.$3({ permission: eu.xBc.VIEW_CHANNEL, user: s, context: n }) && !n.isPrivate()) continue;
                let h = (e, n, r) => {
                        f.push({
                            user: s,
                            score: eB(n, i?.[s.id]),
                            matchType: e,
                            comparator: r,
                            nick: t,
                            status: z.A.getStatus(s.id),
                        });
                    },
                    m = s.username.toLocaleLowerCase(),
                    g = (0, eo.sS)(m),
                    E = (0, eo.S8)(g),
                    [A, I] = ez(t),
                    [T, S] = ez(d),
                    [y, v] = ez(p),
                    C = [
                        [m, m],
                        [g, m],
                        [t, t],
                        [A, t],
                        [d, d],
                        [T, d],
                        [p, p],
                        [y, p],
                    ].filter((e) => null != e[0] && null != e[1]);
                for (let [e, t] of C)
                    if (c === e) {
                        h("exact", eh, t);
                        continue u;
                    }
                let N = /\s+|\.|_/;
                for (let [e, t] of C)
                    if (c === e.split(N, 1)[0]) {
                        h("exact", em, t);
                        continue u;
                    }
                if (!a) {
                    for (let [e, t] of C)
                        if (e.startsWith(c)) {
                            h("starts_with", eg, t);
                            continue u;
                        }
                    for (let [e, n] of [
                        [E, m],
                        [I, t],
                        [S, d],
                        [v, p],
                    ])
                        if (null != e && null != n && e.startsWith(_)) {
                            h("starts_with", eg, n);
                            continue u;
                        }
                }
            }
            return f.sort(d.A), f;
        },
        matchSentinel: (e, t, n) => !eM.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = Y.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? H.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: e$,
    };

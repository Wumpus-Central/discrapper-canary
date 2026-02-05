"use strict";
let r;
n.d(t, { Ay: () => e6, L3: () => ej, X3: () => eB, zy: () => eF }), n(321073), n(667532);
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
    m = n(508675),
    g = n(15285),
    E = n(352505),
    A = n(202776),
    I = n(473529),
    T = n(69945),
    y = n(796774),
    S = n(209932),
    v = n(147472),
    C = n(361670),
    b = n(931959),
    N = n(679382),
    R = n(842086),
    O = n(863005),
    D = n(152007),
    L = n(735321),
    w = n(594061),
    x = n(95701),
    P = n(34457),
    M = n(427157),
    k = n(961350),
    U = n(734057),
    G = n(760751),
    V = n(205761),
    F = n(808728),
    B = n(696451),
    j = n(317525),
    H = n(71393),
    Y = n(320501),
    W = n(576705),
    K = n(290863),
    z = n(994500),
    $ = n(309010),
    q = n(967198),
    Z = n(287809),
    Q = n(90165),
    X = n(67480),
    J = n(583613),
    ee = n(403362),
    et = n(860689),
    en = n(695184),
    er = n(488926),
    ei = n(257120),
    ea = n(661191),
    es = n(240248),
    eo = n(427262),
    el = n(652215),
    eu = n(926140),
    ec = n(746080),
    ed = n(282435),
    e_ = n(985018);
let ef = new h.A("AutocompleteUtils"),
    ep = 10,
    eh = 8,
    em = 7,
    eg = 5,
    eE = 3,
    eA = 1,
    eI = 1,
    eT = 3,
    ey = 5,
    eS = 3,
    ev = 11,
    eC = 6,
    eb = 8,
    eN = 1,
    eR = 1e3,
    eO = 0.2,
    eD = 0.1,
    eL = 50,
    ew = () => !0,
    ex = /(\t|\s)/,
    eP = [],
    eM = (r = n(966382).A).MENTION_EVERYONE,
    ek = r.MENTION_HERE,
    eU = r.MENTION_GAME,
    eG = r.MENTION_TIMESTAMP,
    eV = r.LAUNCHABLE_APPLICATIONS;
function eF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eR * e * (t ?? 1);
}
function eB(e) {
    let t = V.A.getFrequentlyWithoutFetchingLatest(),
        n = t.reduce((e, t) => {
            let { id: n } = t,
                r = V.A.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        r = [];
    switch (e) {
        case eu.rD.GUILD:
            r = t.filter((e) => (0, et.fh)(e));
            break;
        case eu.rD.USER:
            r = t.filter((e) => e instanceof x.YB && e.type === el.rbe.DM);
            break;
        case eu.rD.GROUP_DM:
            r = t.filter((e) => e instanceof x.YB && e.isMultiUserDM());
            break;
        case eu.rD.TEXT_CHANNEL:
            r = t.filter((e) => e instanceof x.YB && (0, x.tr)(e.type));
            break;
        case eu.rD.VOICE_CHANNEL:
            r = t.filter((e) => e instanceof x.YB && e.isGuildVocal());
    }
    let i = {};
    for (let t of r) {
        let { id: r } = t,
            a = V.A.getScoreWithoutFetchingLatest(r);
        if (e === eu.rD.USER && t instanceof x.cq) {
            if (t.type === el.rbe.DM) i[(r = t.getRecipientId())] = 1 + a / n;
            else if (t.type === el.rbe.GROUP_DM) {
                let e = t.recipients.length;
                for (let r of t.recipients) i[r] = 1 + (a / n) * (1 / e);
            }
        } else i[r] = 1 + a / n;
    }
    for (let e of z.A.getFriendIDs()) i[e] = (i[e] ?? 1) + eO;
    for (let e of U.A.getDMUserIds()) i[e] = (i[e] ?? 1) + eD;
    return i;
}
let ej = [F.I6, F.vM, el.rbe.GUILD_CATEGORY];
function eH(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(ei.A.escape(e), "i").test(t));
}
function eY(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return ep;
            return em;
        }
        if (r.test(e)) return eg;
        if (eH(i, e)) return eE;
        if (s && a()(i, e)) return eA;
    } catch (e) {
        ef.error(e);
    }
    return 0;
}
function eW(e) {
    return e?.joinedAt != null && !e.isPending;
}
function eK(e) {
    if (null == e) return [null, null];
    let t = (0, es.sS)(e),
        n = (0, es.S8)(t);
    return [t, n];
}
function ez(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: s, boosters: o } = e,
        l = Z.default.getUsers(),
        u = q.A.getGuildId(),
        c = t.toLocaleLowerCase(),
        _ = (0, es.S8)(c),
        f = [],
        p = [],
        h = n.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        let e,
            r,
            d = n[m];
        d instanceof M.A
            ? ((r = d), (e = B.Ay.getNick(u, r.id)?.toLocaleLowerCase()))
            : ((e = d.nick?.toLocaleLowerCase()), (r = l[d.userId]));
        let h = eo.Ay.getGlobalName(r)?.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, es.sS)(n),
                l = (0, es.S8)(i),
                [u, d] = eK(e),
                [m, E] = eK(h);
            (s && t === r.id) ||
            n.substring(0, c.length) === c ||
            i.substring(0, c.length) === c ||
            e?.substring(0, c.length) === c ||
            u?.substring(0, c.length) === c ||
            h?.substring(0, c.length) === c ||
            m?.substring(0, c.length) === c
                ? f.push({
                      type: eu.rD.USER,
                      record: r,
                      score: eF(ep, o?.[r.id]),
                      comparator: h ?? e ?? n,
                      sortable: m ?? u ?? i,
                  })
                : l.substring(0, _.length) === _ || d?.substring(0, _.length) === _ || E?.substring(0, _.length) === _
                  ? f.push({
                        type: eu.rD.USER,
                        record: r,
                        score: eF(eA, o?.[r.id]),
                        comparator: h ?? e ?? n,
                        sortable: m ?? u ?? i,
                    })
                  : g < eL &&
                    (a()(c, i) ||
                        a()(_, l) ||
                        (null != u && a()(c, u)) ||
                        (null != d && a()(_, d)) ||
                        (null != m && a()(c, m)) ||
                        (null != E && a()(_, E))) &&
                    (p.push({
                        type: eu.rD.USER,
                        record: r,
                        score: eF(eA, o?.[r.id]),
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
function e$(e) {
    switch (e) {
        case R.cG.STICKER_NAME:
            return ev;
        case R.cG.CORRELATED_EMOJI:
            return eC;
        case R.cG.TAG:
            return eN;
        case R.cG.GUILD_NAME:
        case R.cG.PACK_NAME:
            return eb;
        default:
            return 1;
    }
}
function eq(e) {
    return e === F.I6 || (e !== F.vM && !!(0, x.fT)(e));
}
function eZ(e, t, n) {
    return (
        e === t || ((!!n || !!(0, x.zy)(t)) && (e === F.I6 ? (0, x.tr)(t) || (0, x.ay)(t) : e === F.vM && (0, x.ay)(t)))
    );
}
function eQ(e, t) {
    return e === F.I6 && (0, x.ay)(t);
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
                    exactQuery: RegExp(`^${ei.A.escape(t)}`, "i"),
                    containQuery: RegExp(ei.A.escape(t), "i"),
                    isFullMatch: !1,
                };
            });
    if (e.includes(" ")) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp(`^${ei.A.escape(t).replace(" ", "( |-)")}`, "i"),
            containQuery: RegExp(ei.A.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0,
        });
    }
    return n;
}
function eJ(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eY(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function e0(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    return null == n && (n = t[e.guild_id] = H.A.getGuild(e.guild_id)?.name.toLocaleLowerCase()), n;
}
function e1(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    return null == n && (n = t[e.parent_id] = U.A.getChannel(e.parent_id)?.name.toLocaleLowerCase()), n;
}
function e2(e, t) {
    let n = U.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(Y.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Z.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eW(B.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  let t = n.getGuildId(),
                      r = null != t ? B.Ay.getMember(t, e.id) : null;
                  return { type: eu.rD.USER, record: e, score: 0, comparator: r?.nick ?? eo.Ay.getName(e) };
              })
              .take(t)
              .value();
}
let e3 = (0, J.L_)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            a = [];
        return (
            o()(U.A.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = Z.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e), a.push({ userId: t, nick: z.A.getNickname(t) }), i.set(t, n));
                    }
                }),
            { channelsByRecipientId: r, recipientsById: i, recipients: a }
        );
    }),
    e6 = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return ez({
                query: t,
                members: z.A.getFriendIDs()
                    .map((e) => Z.default.getUser(e))
                    .filter(ee.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return ez({
                query: t,
                members: U.A.getDMUserIds()
                    .map((e) => Z.default.getUser(e))
                    .filter(ee.Vq),
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
                l = U.A.getChannel(n);
            if (null == l) return [];
            let u = (l.isThread() ? U.A.getChannel(l.parent_id) : null) ?? l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => ({ userId: e, nick: z.A.getNickname(e) ?? null }));
                let e = Z.default.getCurrentUser();
                null != e && t.push({ userId: e.id, nick: null });
            } else {
                if (0 === r.length && s) {
                    let e = e2(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = B.Ay.getMembers(u.guild_id).filter(eW)), a && en.A.requestMembers(u.guild_id, r, i);
            }
            return ez({
                query: r,
                members: t,
                limit: i,
                filter: (e) => u.isPrivate() || er.$3({ permission: el.xBc.VIEW_CHANNEL, user: e, context: u }),
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
            if (null == H.A.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = e2($.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = B.Ay.getMembers(t).filter(eW);
            return (
                i && n.length > 0 && en.A.requestMembers(t, n, r),
                ez({ query: n, members: l, limit: r, filter: s, allowSnowflake: o })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: a, allowSnowflake: s } = e;
            return ez({ query: t, members: a, limit: i, filter: n, allowSnowflake: s, boosters: r });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: a = !0 } = e;
            return (
                a && t.length > 0 && en.A.requestMembers(null, t, i),
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
                    limit: i = el.rs7,
                    fuzzy: a = !0,
                    filter: s = ew,
                    type: l = F.I6,
                    allowEmptyQueries: u = !1,
                    requireVocalConnectAccess: c = !0,
                    boosters: f = {},
                    allowSnowflake: p,
                    includeAllThreads: h,
                } = e,
                m = eX(n, u),
                g = eq(l);
            t =
                null != r
                    ? o()(F.Ay.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(g ? (h ? U.A.getAllThreadsForGuild(r) : O.A.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : o()(U.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(g ? O.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let E = {},
                A = [],
                I = V.A.getMaxScore();
            for (let e of t) {
                if (
                    !eZ(l, e.type, null != r) ||
                    ((0, x.zy)(e.type) && !W.A.can(c ? e.accessPermissions : el.xBc.VIEW_CHANNEL, e)) ||
                    !s(e)
                )
                    continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    o = p && n === e.id,
                    u = o ? ep : eJ(i, t, a);
                if (0 !== u) {
                    if (t.length > 0) {
                        for (let n of [e0(e, E), e1(e, E)]) {
                            if (null == n || "" === n) continue;
                            let e = eJ(n, t, !1);
                            0 !== e && (u += 0.5 * e);
                        }
                        u = Math.min(em - eA, u);
                    }
                    0 !== u &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || o) &&
                        (eQ(l, e.type) && (u = Math.max(u - eI, eA / 2)),
                        e.isThread() && (e.isActiveThread() || (u -= eT), D.A.hasJoined(e.id) || (u -= ey)),
                        (u = Math.min(
                            u + Math.min(V.A.getScoreWithoutFetchingLatest(e.id) ?? 0 / I, 1) * eS,
                            u >= em ? ep : em,
                        )),
                        A.push({
                            type: (0, x.ay)(e.type) ? eu.rD.VOICE_CHANNEL : eu.rD.TEXT_CHANNEL,
                            record: e,
                            score: eF(u, f[e.id]),
                            comparator: (0, _.m1)(e, Z.default, z.A),
                            sortable: i,
                        }));
                }
            }
            return A.sort(d.A), null != i && A.length > i && (A.length = i), A;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: a = ew, boosters: s = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp(`^${ei.A.escape(o)}`, "i"),
                    containQuery: RegExp(ei.A.escape(o), "i"),
                    queryLower: o,
                },
                u = [];
            for (let e of H.A.getGuildsArray()) {
                if (!a(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? ep : eY(n, l, r);
                o > 0 &&
                    u.push({ type: eu.rD.GUILD, record: e, score: eF(o, s[e.id]), comparator: e.name, sortable: n });
            }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: a,
                    recipients: s,
                } = e3(U.A.getPrivateChannelsVersion(), z.A.getVersion(), Z.default.getUserStoreVersion()),
                o = ez({ query: t, members: s, limit: s.length, boosters: r }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: eu.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: eo.Ay.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(d.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ew, boosters: a = {} } = e,
                s = (0, es.sS)((0, es.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp(`^${ei.A.escape(s)}`, "i"),
                    containQuery: RegExp(ei.A.escape(s), "i"),
                    queryLower: s,
                },
                u = o()(U.A.getMutablePrivateChannels()).values().value(),
                c = [];
            for (let e of u) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.m1)(e, Z.default, z.A).toLocaleLowerCase(),
                    n = (0, es.sS)((0, es.S8)(t)),
                    s = eY(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = Z.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = eo.Ay.getGlobalName(e),
                        i = z.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(eg, eY((0, es.sS)((0, es.S8)(e.toLocaleLowerCase())), l, r));
                    t > s && (s = t);
                }
                s > 0 &&
                    c.push({
                        type: eu.rD.GROUP_DM,
                        record: e,
                        score: eF(s, a[e.id]),
                        comparator: (0, _.m1)(e, Z.default, z.A),
                        sortable: n,
                    });
            }
            return c.sort(d.A), c.length > n && (c.length = n), c;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ew } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${ei.A.escape(a)}`, "i"),
                    containQuery: RegExp(ei.A.escape(a), "i"),
                    queryLower: a,
                },
                o = eV(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eY(t, s, r);
                n > 0 && l.push({ type: eu.rD.APPLICATION, record: e, score: n, comparator: e.name, sortable: t });
            }
            return l.sort(d.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${ei.A.escape(a)}`, "i"),
                    containQuery: RegExp(ei.A.escape(a), "i"),
                    queryLower: a,
                },
                o = eo.Ay.getUserIsStaff(),
                l = {
                    [c.t1.SHOP]: [e_.intl.string(e_.t.pWG4ze)],
                    [c.t1.SHOP_ORBS_TAB]: [
                        e_.intl.string(e_.t.ElYQFS),
                        e_.intl.string(e_.t.pWG4ze),
                        e_.intl.string(e_.t.EBYkzk),
                    ],
                    [c.t1.QUEST_ORBS]: [
                        e_.intl.string(e_.t.ElYQFS),
                        e_.intl.string(e_.t["v/R2aC"]),
                        e_.intl.string(e_.t.qQR4tn),
                    ],
                    [c.t1.NITRO_HOME]: [e_.intl.string(e_.t.Ipxkog)],
                    [c.t1.QUEST_HOME]: [e_.intl.string(e_.t.JALI2K)],
                    [c.t1.APPS_HOME]: [e_.intl.string(e_.t.PHjkRE), e_.intl.string(e_.t.AKcFUj)],
                    [c.t1.SETTINGS]: [e_.intl.string(e_.t["3D5yo/"])],
                },
                u = [];
            for (let e in l) {
                let t = c.t1[e],
                    n = l[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = eY(n, s, i);
                        r > 0 &&
                            u.push({
                                type: eu.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(t),
                                score: eF(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            if (o) {
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
                            r = eY(n, s, i);
                        if (r > 0) {
                            u.push({
                                type: eu.rD.IN_APP_NAVIGATION,
                                record: c.SV.fromType(
                                    c.t1.PLAYGROUND,
                                    void 0,
                                    `${t.name} Playground`,
                                    t.id,
                                    t.IconComponent,
                                ),
                                score: eF(r),
                                comparator: n,
                                sortable: n,
                            });
                            break;
                        }
                    }
            }
            return u.sort(d.A), u.length > r && (u.length = r), u;
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ew } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp(`^${ei.A.escape(a)}`, "i"),
                    containQuery: RegExp(ei.A.escape(a), "i"),
                    queryLower: a,
                },
                l = o()(X.A.getSKUs()).values().value(),
                u = [];
            for (let e of l)
                if (e.type === el.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eY(t, s, r);
                    n > 0 && u.push({ type: eu.rD.SKU, record: e, score: n, comparator: e.name, sortable: t });
                }
            return u.sort(d.A), u.length > n && (u.length = n), u;
        },
        getRecentlyTalked: e2,
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
                    limit: h = el.rs7,
                    request: m,
                    allowSnowflake: g = !1,
                } = e,
                A = s
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
                              nick: B.Ay.getNick(n.guild_id, t.id),
                              status: K.A.getStatus(t.id),
                          };
                      })
                    : [],
                I = A.length,
                T = t.toLowerCase(),
                y = [];
            if (I < h && u) {
                let e = n.getGuildId(),
                    i = H.A.getGuild(e);
                if (null != i) {
                    let n = o()(j.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: s } = t;
                            return (
                                (n || r || _) &&
                                (a()(T, i.toLowerCase()) || (g && T === s)) &&
                                s !== ea.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (y = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, h - I)), (I += y.length);
                }
            }
            let S = [];
            !n.isPrivate() &&
                r &&
                u &&
                (I < h && a()(T, eM().test) && (S.push(eM()), (I += 1)),
                i && I < h && a()(T, ek().test) && (S.push(ek()), (I += 1)));
            let v = E.M.getCurrentConfig(
                { guildId: n.guild_id, location: "mention autocomplete" },
                { autoTrackExposure: !0 },
            ).enabled;
            return (
                r &&
                    v &&
                    null != eU &&
                    (I < h || 0 === T.length) &&
                    a()(T, eU().test) &&
                    (I >= h && (S.length > 0 ? S.pop() : y.length > 0 ? y.pop() : A.length > 0 && A.pop()),
                    S.push(eU()),
                    (I += 1)),
                f.A.getConfig({ location: "mention autocomplete" }).enabled &&
                    c &&
                    null != eG &&
                    (((I < h || 0 === T.length) && a()(T, eG().test)) || T === eG().test) &&
                    (I >= h && (y.length > 0 ? y.pop() : A.length > 0 && A.pop()), S.push(eG()), (I += 1)),
                { users: A, globals: S, roles: y }
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
                          status: K.A.getStatus(e.record.id),
                      }))
                    : [],
                c = u.length,
                d = t.toLowerCase(),
                _ = [];
            if (c < el.rs7 && s) {
                let e = H.A.getGuild(n);
                null != e &&
                    (o()(j.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && a()(d, e.name.toLowerCase()) && !(0, P.Oy)(e))
                        .take(el.rs7 - c)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (c += _.length));
            }
            let f = [];
            return (
                r &&
                    s &&
                    (c < el.rs7 && a()(d, eM().test) && (f.push(eM()), (c += 1)),
                    c < el.rs7 && a()(d, ek().test) && f.push(ek())),
                { users: u, globals: f, roles: _ }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = RegExp(`^${ei.A.escape(a)}`, "i"),
                l = RegExp(ei.A.escape(a), "i"),
                u = o()(n)
                    .map((e, t) => {
                        let n = eY(
                            e.displayName.toLocaleLowerCase(),
                            { exactQuery: s, containQuery: l, queryLower: a },
                            i,
                        );
                        return n > 0 ? { choice: e, score: n, originalIndex: t } : null;
                    })
                    .filter(ee.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (u = u.take(r)), u.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp(`^${ei.A.escape(r)}`, "i"),
                    containQuery: RegExp(ei.A.escape(r), "i"),
                    queryLower: r,
                },
                a = (0, I.K)(n.id) && !n.features.has(el.GuildFeatures.HUB),
                s = n.features.has(el.GuildFeatures.COMMUNITY),
                o = (0, A.u)(n) && n.features.has(el.GuildFeatures.COMMUNITY),
                l = [
                    { id: ec.T4.SERVER_GUIDE, name: e_.intl.string(e_.t.VbpLyU) },
                    { id: ec.T4.CHANNEL_BROWSER, name: e_.intl.string(e_.t.et6wav) },
                    { id: ec.T4.CUSTOMIZE_COMMUNITY, name: e_.intl.string(e_.t.h9mGOP) },
                ],
                u = [];
            for (let e of l)
                (e.id !== ec.T4.SERVER_GUIDE || a) &&
                    (e.id !== ec.T4.CHANNEL_BROWSER || s) &&
                    (e.id !== ec.T4.CUSTOMIZE_COMMUNITY || o) &&
                    eY(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(new x.jb({ id: e.id, name: e.name, type: el.rbe.UNKNOWN, guild_id: n.id }));
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
            let { query: t, channel: n, channelTypes: r, limit: i = el.rs7, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let s = [];
            for (let e of ej)
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
            let { query: t, channel: n, intention: r, maxCount: i = el.rs7, matchComparator: a } = e;
            return (
                w.bW.loadIfNecessary(),
                {
                    emojis: m.Ay.searchWithoutFetchingLatest({
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ew],
                i = Z.default.getCurrentUser(),
                a = new Set(),
                s = [];
            for (let o of (w.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, es.sS)(e),
                    u = RegExp(`^${ei.A.escape(l)}`, "i"),
                    c = RegExp(`${ei.A.escape(l)}`, "i");
                N.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            _ = null,
                            f = N.A.getStickerById(l);
                        if (null == f || !r(f, (0, C.W$)(f, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                a = e$(r),
                                s = 0;
                            t
                                ? i === e
                                    ? (s = ep * a)
                                    : u.test(i)
                                      ? (s = em * a)
                                      : (r === R.cG.GUILD_NAME || r === R.cG.PACK_NAME || r === R.cG.STICKER_NAME) &&
                                        c.test(i) &&
                                        (s = eg * a)
                                : i === e && ((s = ep * a), (_ = i)),
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
            S.A.isFetching() || S.A.hasFetchedAllSounds() || (0, y.E7)(), w.bW.loadIfNecessary();
            let r = Array.from(S.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, T.A)(n, t?.guild_id, t?.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, v.lG)(e, r, n, t);
        },
        queryGames(e) {
            let t = g.Ay.getRunningVerifiedApplicationIds();
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
                        ed.Bf.has(r.id) && (i += ed.Bf.get(r.id) / ed.Bf.size)),
                    i
                );
            }
            let i = G.A.games;
            return o()(i)
                .filter((e) => !(0, L.nS)(e))
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
                .slice(0, el.rs7);
        },
        queryMentionSuggestionResults(e) {
            let { query: t, channel: n, limit: r = 3, boosters: i, onlyExactMatch: a = !1 } = e,
                s = n.isPrivate()
                    ? n.recipients.map((e) => ({ userId: e, nick: z.A.getNickname(e) ?? null }))
                    : B.Ay.getMembers(n.guild_id).filter(eW),
                o = k.default.getId(),
                l = Z.default.getUsers(),
                u = q.A.getGuildId(),
                c = t.toLocaleLowerCase(),
                _ = (0, es.S8)(c),
                f = [];
            u: for (let e of s) {
                let t, s;
                if (f.length >= r) break;
                if (
                    (e instanceof M.A
                        ? ((s = e), (t = B.Ay.getNick(u, s.id)?.toLocaleLowerCase()))
                        : ((t = e.nick?.toLocaleLowerCase()), (s = l[e.userId])),
                    null == s || s.id === o || s.bot)
                )
                    continue;
                let d = z.A.getNickname(s.id)?.toLocaleLowerCase(),
                    p = eo.Ay.getGlobalName(s)?.toLocaleLowerCase();
                if (!er.$3({ permission: el.xBc.VIEW_CHANNEL, user: s, context: n }) && !n.isPrivate()) continue;
                let h = (e, n, r) => {
                        f.push({
                            user: s,
                            score: eF(n, i?.[s.id]),
                            matchType: e,
                            comparator: r,
                            nick: t,
                            status: K.A.getStatus(s.id),
                        });
                    },
                    m = s.username.toLocaleLowerCase(),
                    g = (0, es.sS)(m),
                    E = (0, es.S8)(g),
                    [A, I] = eK(t),
                    [T, y] = eK(d),
                    [S, v] = eK(p),
                    C = [
                        [m, m],
                        [g, m],
                        [t, t],
                        [A, t],
                        [d, d],
                        [T, d],
                        [p, p],
                        [S, p],
                    ].filter((e) => null != e[0] && null != e[1]);
                for (let [e, t] of C)
                    if (c === e) {
                        h("exact", ep, t);
                        continue u;
                    }
                let b = /\s+|\.|_/;
                for (let [e, t] of C)
                    if (c === e.split(b, 1)[0]) {
                        h("exact", eh, t);
                        continue u;
                    }
                if (!a) {
                    for (let [e, t] of C)
                        if (e.startsWith(c)) {
                            h("starts_with", em, t);
                            continue u;
                        }
                    for (let [e, n] of [
                        [E, m],
                        [I, t],
                        [y, d],
                        [v, p],
                    ])
                        if (null != e && null != n && e.startsWith(_)) {
                            h("starts_with", em, n);
                            continue u;
                        }
                }
            }
            return f.sort(d.A), f;
        },
        matchSentinel: (e, t, n) => !ex.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = H.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? j.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: ez,
    };

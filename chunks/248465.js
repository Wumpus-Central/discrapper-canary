let r;
n.d(t, {
    Ay: () => tt,
    FR: () => eb,
    L3: () => eX,
    X3: () => eq,
    zy: () => ez,
}),
    n(896048),
    n(747238),
    n(591487),
    n(727858),
    n(321073),
    n(638769),
    n(667532),
    n(812715),
    n(264879),
    n(114821),
    n(339614);
var i = n(91871),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(896170),
    c = n(870844),
    u = n(661439),
    d = n(329308),
    f = n(989133),
    p = n(47167),
    _ = n(857157),
    h = n(182014),
    m = n(626584),
    g = n(508675),
    E = n(15285),
    b = n(352505),
    y = n(202776),
    O = n(473529),
    A = n(69945),
    v = n(796774),
    S = n(209932),
    I = n(147472),
    T = n(361670),
    C = n(931959),
    N = n(679382),
    R = n(842086),
    w = n(863005),
    P = n(152007),
    D = n(735321),
    x = n(594061),
    L = n(95701),
    j = n(34457),
    M = n(427157),
    k = n(961350),
    U = n(734057),
    G = n(760751),
    V = n(205761),
    F = n(808728),
    B = n(696451),
    H = n(317525),
    Y = n(71393),
    W = n(320501),
    K = n(576705),
    z = n(290863),
    q = n(994500),
    X = n(309010),
    Z = n(967198),
    Q = n(287809),
    $ = n(90165),
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
    ec = n(652215),
    eu = n(926140),
    ed = n(746080),
    ef = n(282435),
    ep = n(985018);
function e_(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                e_(e, t, n[t]);
            });
    }
    return e;
}
function em(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eg(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : em(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eE = (0, c.y)(() => ({ options: [] }));
function eb(e) {
    eE.setState({ options: e });
}
let ey = new m.A("AutocompleteUtils"),
    eO = 10,
    eA = 8,
    ev = 7,
    eS = 5,
    eI = 3,
    eT = 1,
    eC = 1,
    eN = 3,
    eR = 5,
    ew = 3,
    eP = 11,
    eD = 6,
    ex = 8,
    eL = 1,
    ej = 1000,
    eM = 0.2,
    ek = 0.1,
    eU = 50,
    eG = () => !0,
    eV = /(\t|\s)/,
    eF = [],
    eB = (r = n(966382).A).MENTION_EVERYONE,
    eH = r.MENTION_HERE,
    eY = r.MENTION_GAME,
    eW = r.MENTION_TIMESTAMP,
    eK = r.LAUNCHABLE_APPLICATIONS;
function ez() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return ej * e * (null != t ? t : 1);
}
function eq(e) {
    var t, n;
    let r = V.A.getFrequentlyWithoutFetchingLatest(),
        i = r.reduce((e, t) => {
            let { id: n } = t,
                r = V.A.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        a = [];
    switch (e) {
        case eu.rD.GUILD:
            a = r.filter((e) => (0, en.fh)(e));
            break;
        case eu.rD.USER:
            a = r.filter((e) => e instanceof L.YB && e.type === ec.rbe.DM);
            break;
        case eu.rD.GROUP_DM:
            a = r.filter((e) => e instanceof L.YB && e.isMultiUserDM());
            break;
        case eu.rD.TEXT_CHANNEL:
            a = r.filter((e) => e instanceof L.YB && (0, L.tr)(e.type));
            break;
        case eu.rD.VOICE_CHANNEL:
            a = r.filter((e) => e instanceof L.YB && e.isGuildVocal());
    }
    let s = {};
    for (let t of a) {
        let { id: n } = t,
            r = V.A.getScoreWithoutFetchingLatest(n);
        if (e === eu.rD.USER && t instanceof L.cq) {
            if (t.type === ec.rbe.DM) s[(n = t.getRecipientId())] = 1 + r / i;
            else if (t.type === ec.rbe.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) s[n] = 1 + (r / i) * (1 / e);
            }
        } else s[n] = 1 + r / i;
    }
    for (let e of q.A.getFriendIDs()) s[e] = (null != (t = s[e]) ? t : 1) + eM;
    for (let e of U.A.getDMUserIds()) s[e] = (null != (n = s[e]) ? n : 1) + ek;
    return s;
}
let eX = [F.I6, F.vM, ec.rbe.GUILD_CATEGORY];
function eZ(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(ea.A.escape(e), "i").test(t));
}
function eQ(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return eO;
            return ev;
        }
        if (r.test(e)) return eS;
        if (eZ(i, e)) return eI;
        if (s && a()(i, e)) return eT;
    } catch (e) {
        ey.error(e);
    }
    return 0;
}
function e$(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eJ(e) {
    if (null == e) return [null, null];
    let t = (0, eo.sS)(e),
        n = (0, eo.S8)(t);
    return [t, n];
}
function e0(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: s, boosters: o } = e,
        l = Q.default.getUsers(),
        c = Z.A.getGuildId(),
        u = t.toLocaleLowerCase(),
        d = (0, eo.S8)(u),
        p = [],
        _ = [],
        h = n.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        var E, b, y, O, A, v, S, I, T;
        let e,
            r,
            f = n[m];
        f instanceof M.A
            ? ((r = f), (e = null == (b = B.Ay.getNick(c, r.id)) ? void 0 : b.toLocaleLowerCase()))
            : ((e = null == (y = f.nick) ? void 0 : y.toLocaleLowerCase()), (r = l[f.userId]));
        let h = null == (E = el.Ay.getGlobalName(r)) ? void 0 : E.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, eo.sS)(n),
                l = (0, eo.S8)(i),
                [c, f] = eJ(e),
                [m, E] = eJ(h);
            (s && t === r.id) ||
            n.substring(0, u.length) === u ||
            i.substring(0, u.length) === u ||
            (null == e ? void 0 : e.substring(0, u.length)) === u ||
            (null == c ? void 0 : c.substring(0, u.length)) === u ||
            (null == h ? void 0 : h.substring(0, u.length)) === u ||
            (null == m ? void 0 : m.substring(0, u.length)) === u
                ? p.push({
                      type: eu.rD.USER,
                      record: r,
                      score: ez(eO, null == o ? void 0 : o[r.id]),
                      comparator: null != (O = null != h ? h : e) ? O : n,
                      sortable: null != (A = null != m ? m : c) ? A : i,
                  })
                : l.substring(0, d.length) === d ||
                    (null == f ? void 0 : f.substring(0, d.length)) === d ||
                    (null == E ? void 0 : E.substring(0, d.length)) === d
                  ? p.push({
                        type: eu.rD.USER,
                        record: r,
                        score: ez(eT, null == o ? void 0 : o[r.id]),
                        comparator: null != (v = null != h ? h : e) ? v : n,
                        sortable: null != (S = null != m ? m : c) ? S : i,
                    })
                  : g < eU &&
                    (a()(u, i) ||
                        a()(d, l) ||
                        (null != c && a()(u, c)) ||
                        (null != f && a()(d, f)) ||
                        (null != m && a()(u, m)) ||
                        (null != E && a()(d, E))) &&
                    (_.push({
                        type: eu.rD.USER,
                        record: r,
                        score: ez(eT, null == o ? void 0 : o[r.id]),
                        comparator: null != (I = null != h ? h : e) ? I : n,
                        sortable: null != (T = null != m ? m : c) ? T : i,
                    }),
                    (g += 1));
        }
        m += 1;
    }
    return (
        p.sort(f.A),
        p.length < r && (_.sort(f.A), (p = p.concat(_.slice(0, Math.max(0, r - p.length))))),
        p.length > r && (p.length = r),
        p
    );
}
function e1(e) {
    switch (e) {
        case R.cG.STICKER_NAME:
            return eP;
        case R.cG.CORRELATED_EMOJI:
            return eD;
        case R.cG.TAG:
            return eL;
        case R.cG.GUILD_NAME:
        case R.cG.PACK_NAME:
            return ex;
        default:
            return 1;
    }
}
function e2(e) {
    return e === F.I6 || (e !== F.vM && !!(0, L.fT)(e));
}
function e3(e, t, n) {
    return (
        e === t || ((!!n || !!(0, L.zy)(t)) && (e === F.I6 ? (0, L.tr)(t) || (0, L.ay)(t) : e === F.vM && (0, L.ay)(t)))
    );
}
function e6(e, t) {
    return e === F.I6 && (0, L.ay)(t);
}
function e4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(" ")
            .filter((e) => "" !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp("^".concat(ea.A.escape(t)), "i"),
                    containQuery: RegExp(ea.A.escape(t), "i"),
                    isFullMatch: !1,
                };
            });
    if (e.includes(" ")) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp("^".concat(ea.A.escape(t).replace(" ", "( |-)")), "i"),
            containQuery: RegExp(ea.A.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0,
        });
    }
    return n;
}
function e5(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eQ(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function e7(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null == (r = Y.A.getGuild(e.guild_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function e8(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null == (r = U.A.getChannel(e.parent_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function e9(e, t) {
    let n = U.A.getChannel(e);
    return null == e || null == n
        ? []
        : o()(W.A.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Q.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || e$(B.Ay.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? B.Ay.getMember(r, e.id) : null;
                  return {
                      type: eu.rD.USER,
                      record: e,
                      score: 0,
                      comparator: null != (t = null == i ? void 0 : i.nick) ? t : el.Ay.getName(e),
                  };
              })
              .take(t)
              .value();
}
let te = (0, ee.L_)((e, t, n) => {
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
                            n = Q.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e),
                            a.push({
                                userId: t,
                                nick: q.A.getNickname(t),
                            }),
                            i.set(t, n));
                    }
                }),
            {
                channelsByRecipientId: r,
                recipientsById: i,
                recipients: a,
            }
        );
    }),
    tt = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return e0({
                query: t,
                members: q.A.getFriendIDs()
                    .map((e) => Q.default.getUser(e))
                    .filter(et.Vq),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return e0({
                query: t,
                members: U.A.getDMUserIds()
                    .map((e) => Q.default.getUser(e))
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
                l = U.A.getChannel(n);
            if (null == l) return [];
            let c = l.isThread() ? U.A.getChannel(l.parent_id) : null,
                u = null != c ? c : l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => {
                    var t;
                    return {
                        userId: e,
                        nick: null != (t = q.A.getNickname(e)) ? t : null,
                    };
                });
                let e = Q.default.getCurrentUser();
                null != e &&
                    t.push({
                        userId: e.id,
                        nick: null,
                    });
            } else {
                if (0 === r.length && s) {
                    let e = e9(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = B.Ay.getMembers(u.guild_id).filter(e$)), a && er.A.requestMembers(u.guild_id, r, i);
            }
            return e0({
                query: r,
                members: t,
                limit: i,
                filter: (e) =>
                    u.isPrivate() ||
                    ei.$3({
                        permission: ec.xBc.VIEW_CHANNEL,
                        user: e,
                        context: u,
                    }),
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
                let e = e9(X.A.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = B.Ay.getMembers(t).filter(e$);
            return (
                i && n.length > 0 && er.A.requestMembers(t, n, r),
                e0({
                    query: n,
                    members: l,
                    limit: r,
                    filter: s,
                    allowSnowflake: o,
                })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: a, allowSnowflake: s } = e;
            return e0({
                query: t,
                members: a,
                limit: i,
                filter: n,
                allowSnowflake: s,
                boosters: r,
            });
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
                    filter: s = eG,
                    type: l = F.I6,
                    allowEmptyQueries: c = !1,
                    requireVocalConnectAccess: u = !0,
                    boosters: d = {},
                    allowSnowflake: _,
                    includeAllThreads: h,
                } = e,
                m = e4(n, c),
                g = e2(l);
            t =
                null != r
                    ? o()(F.Ay.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(g ? (h ? U.A.getAllThreadsForGuild(r) : w.A.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : o()(U.A.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(g ? w.A.computeAllActiveJoinedThreads() : [])
                          .value();
            let E = {},
                b = [],
                y = V.A.getMaxScore();
            for (let e of t) {
                var O;
                if (
                    !e3(l, e.type, null != r) ||
                    ((0, L.zy)(e.type) && !K.A.can(u ? e.accessPermissions : ec.xBc.VIEW_CHANNEL, e)) ||
                    !s(e)
                )
                    continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    o = _ && n === e.id,
                    c = o ? eO : e5(i, t, a);
                if (0 !== c) {
                    if (t.length > 0) {
                        for (let n of [e7(e, E), e8(e, E)]) {
                            if (null == n || "" === n) continue;
                            let e = e5(n, t, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(ev - eT, c);
                    }
                    0 !== c &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || o) &&
                        (e6(l, e.type) && (c = Math.max(c - eC, eT / 2)),
                        e.isThread() && (e.isActiveThread() || (c -= eN), P.A.hasJoined(e.id) || (c -= eR)),
                        (c = Math.min(
                            c + Math.min(null != (O = V.A.getScoreWithoutFetchingLatest(e.id)) ? O : 0 / y, 1) * ew,
                            c >= ev ? eO : ev,
                        )),
                        b.push({
                            type: (0, L.ay)(e.type) ? eu.rD.VOICE_CHANNEL : eu.rD.TEXT_CHANNEL,
                            record: e,
                            score: ez(c, d[e.id]),
                            comparator: (0, p.m1)(e, Q.default, q.A),
                            sortable: i,
                        }));
                }
            }
            return b.sort(f.A), null != i && b.length > i && (b.length = i), b;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: a = eG, boosters: s = {} } = e,
                o = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp("^".concat(ea.A.escape(o)), "i"),
                    containQuery: RegExp(ea.A.escape(o), "i"),
                    queryLower: o,
                },
                c = [];
            for (let e of Y.A.getGuildsArray()) {
                if (!a(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    o = i && t === e.id ? eO : eQ(n, l, r);
                o > 0 &&
                    c.push({
                        type: eu.rD.GUILD,
                        record: e,
                        score: ez(o, s[e.id]),
                        comparator: e.name,
                        sortable: n,
                    });
            }
            return c.sort(f.A), c.length > n && (c.length = n), c;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: a,
                    recipients: s,
                } = te(U.A.getPrivateChannelsVersion(), q.A.getVersion(), Q.default.getUserStoreVersion()),
                o = e0({
                    query: t,
                    members: s,
                    limit: s.length,
                    boosters: r,
                }),
                l = [];
            return (
                o.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: eu.rD.DM,
                            record: t,
                            score: e.score,
                            comparator: el.Ay.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(f.A),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eG, boosters: a = {} } = e,
                s = (0, eo.sS)((0, eo.S8)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp("^".concat(ea.A.escape(s)), "i"),
                    containQuery: RegExp(ea.A.escape(s), "i"),
                    queryLower: s,
                },
                c = o()(U.A.getMutablePrivateChannels()).values().value(),
                u = [];
            for (let e of c) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, p.m1)(e, Q.default, q.A).toLocaleLowerCase(),
                    n = (0, eo.sS)((0, eo.S8)(t)),
                    s = eQ(n, l, r),
                    o = [];
                for (let t of e.recipients) {
                    let e = Q.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = el.Ay.getGlobalName(e),
                        i = q.A.getNickname(t);
                    null != n && o.push(n), null != r && o.push(r), null != i && o.push(i);
                }
                for (let e of o) {
                    let t = Math.min(eS, eQ((0, eo.sS)((0, eo.S8)(e.toLocaleLowerCase())), l, r));
                    t > s && (s = t);
                }
                s > 0 &&
                    u.push({
                        type: eu.rD.GROUP_DM,
                        record: e,
                        score: ez(s, a[e.id]),
                        comparator: (0, p.m1)(e, Q.default, q.A),
                        sortable: n,
                    });
            }
            return u.sort(f.A), u.length > n && (u.length = n), u;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eG } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp("^".concat(ea.A.escape(a)), "i"),
                    containQuery: RegExp(ea.A.escape(a), "i"),
                    queryLower: a,
                },
                o = eK(),
                l = [];
            for (let { application: e } of o) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eQ(t, s, r);
                n > 0 &&
                    l.push({
                        type: eu.rD.APPLICATION,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t,
                    });
            }
            return l.sort(f.A), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp("^".concat(ea.A.escape(a)), "i"),
                    containQuery: RegExp(ea.A.escape(a), "i"),
                    queryLower: a,
                },
                l = el.Ay.getUserIsStaff(),
                c = {
                    [d.t1.SHOP]: [ep.intl.string(ep.t.pWG4ze)],
                    [d.t1.SHOP_ORBS_TAB]: [
                        ep.intl.string(ep.t.ElYQFS),
                        ep.intl.string(ep.t.pWG4ze),
                        ep.intl.string(ep.t.EBYkzk),
                    ],
                    [d.t1.QUEST_ORBS]: [
                        ep.intl.string(ep.t.ElYQFS),
                        ep.intl.string(ep.t["v/R2aC"]),
                        ep.intl.string(ep.t.qQR4tn),
                    ],
                    [d.t1.NITRO_HOME]: [ep.intl.string(ep.t.Ipxkog)],
                    [d.t1.QUEST_HOME]: [ep.intl.string(ep.t.JALI2K)],
                    [d.t1.APPS_HOME]: [ep.intl.string(ep.t.PHjkRE), ep.intl.string(ep.t.AKcFUj)],
                },
                u = [];
            for (let e in c) {
                let t = d.t1[e],
                    n = c[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = eQ(n, o, i);
                        r > 0 &&
                            u.push({
                                type: eu.rD.IN_APP_NAVIGATION,
                                record: d.SV.fromType(t),
                                score: ez(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            if (l) {
                let { componentPlaygroundConfigs: e } = n(944771);
                for (let t of e.flatMap((e) => e.collections)) {
                    var p;
                    for (let e of [
                        "".concat(t.name, " Playground"),
                        "".concat(t.name, " Components"),
                        "".concat(t.name, " Design System"),
                        t.name,
                        ...(null != (p = t.tags) ? p : []),
                    ]) {
                        let n = e.toLocaleLowerCase(),
                            r = eQ(n, o, i);
                        if (r > 0) {
                            u.push({
                                type: eu.rD.IN_APP_NAVIGATION,
                                record: d.SV.fromType(
                                    d.t1.PLAYGROUND,
                                    void 0,
                                    "".concat(t.name, " Playground"),
                                    t.id,
                                    t.IconComponent,
                                ),
                                score: ez(r),
                                comparator: n,
                                sortable: n,
                            });
                            break;
                        }
                    }
                }
            }
            return (
                eE.getState().options.forEach((e) => {
                    var t;
                    let n = [e.title].concat(e.searchableTitles),
                        r = null != (t = (0, s.max)(n.map((e) => ez(eQ(e.toLocaleLowerCase(), o, i))))) ? t : 0;
                    r > 0 &&
                        u.push({
                            type: eu.rD.IN_APP_NAVIGATION,
                            record: d.SV.fromType(d.t1.SETTINGS, e.path, e.title),
                            score: r,
                            comparator: e.title.toLocaleLowerCase(),
                            sortable: e.title.toLocaleLowerCase(),
                        });
                }),
                u.sort(f.A),
                u.length > r && (u.length = r),
                u
            );
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eG } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp("^".concat(ea.A.escape(a)), "i"),
                    containQuery: RegExp(ea.A.escape(a), "i"),
                    queryLower: a,
                },
                l = o()(J.A.getSKUs()).values().value(),
                c = [];
            for (let e of l)
                if (e.type === ec.Puh.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eQ(t, s, r);
                    n > 0 &&
                        c.push({
                            type: eu.rD.SKU,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t,
                        });
                }
            return c.sort(f.A), c.length > n && (c.length = n), c;
        },
        getRecentlyTalked: e9,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: r = !1,
                    canMentionHere: i = !0,
                    canMentionUsers: s = !0,
                    canMentionRoles: c = !0,
                    canMentionOtherGlobals: u = !0,
                    includeAllGuildUsers: d = !1,
                    includeNonMentionableRoles: f = !1,
                    checkRecentlyTalkedOnEmptyQuery: p = !0,
                    limit: h = ec.rs7,
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
                              nick: B.Ay.getNick(n.guild_id, t.id),
                              status: z.A.getStatus(t.id),
                          };
                      })
                    : [],
                y = E.length,
                O = t.toLowerCase(),
                A = [];
            if (y < h && c) {
                let e = n.getGuildId(),
                    i = Y.A.getGuild(e);
                if (null != i) {
                    let n = o()(H.A.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: s } = t;
                            return (
                                (n || r || f) &&
                                (a()(O, i.toLowerCase()) || (g && O === s)) &&
                                s !== es.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (A = (0, l.Ht)(n, t, { keys: ["name"] }).slice(0, h - y)), (y += A.length);
                }
            }
            let v = [];
            !n.isPrivate() &&
                r &&
                c &&
                (y < h && a()(O, eB().test) && (v.push(eB()), (y += 1)),
                i && y < h && a()(O, eH().test) && (v.push(eH()), (y += 1)));
            let S = b.M.getCurrentConfig(
                {
                    guildId: n.guild_id,
                    location: "mention autocomplete",
                },
                { autoTrackExposure: !0 },
            ).enabled;
            return (
                r &&
                    S &&
                    null != eY &&
                    (y < h || 0 === O.length) &&
                    a()(O, eY().test) &&
                    (y >= h && (v.length > 0 ? v.pop() : A.length > 0 ? A.pop() : E.length > 0 && E.pop()),
                    v.push(eY()),
                    (y += 1)),
                _.A.getConfig({ location: "mention autocomplete" }).enabled &&
                    u &&
                    null != eW &&
                    (((y < h || 0 === O.length) && a()(O, eW().test)) || O === eW().test) &&
                    (y >= h && (A.length > 0 ? A.pop() : E.length > 0 && E.pop()), v.push(eW()), (y += 1)),
                {
                    users: E,
                    globals: v,
                    roles: A,
                }
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
                c = i
                    ? this.queryGuildUsers({
                          guildId: n,
                          query: t,
                      }).map((e) => eg(eh({}, e), { status: z.A.getStatus(e.record.id) }))
                    : [],
                u = c.length,
                d = t.toLowerCase(),
                f = [];
            if (u < ec.rs7 && s) {
                let e = Y.A.getGuild(n);
                null != e &&
                    (o()(H.A.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && a()(d, e.name.toLowerCase()) && !(0, j.Oy)(e))
                        .take(ec.rs7 - u)
                        .forEach((e) => {
                            f.push(e);
                        }),
                    (u += f.length));
            }
            let p = [];
            return (
                r &&
                    s &&
                    (u < ec.rs7 && a()(d, eB().test) && (p.push(eB()), (u += 1)),
                    u < ec.rs7 && a()(d, eH().test) && p.push(eH())),
                {
                    users: c,
                    globals: p,
                    roles: f,
                }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = RegExp("^".concat(ea.A.escape(a)), "i"),
                l = RegExp(ea.A.escape(a), "i"),
                c = o()(n)
                    .map((e, t) => {
                        let n = eQ(
                            e.displayName.toLocaleLowerCase(),
                            {
                                exactQuery: s,
                                containQuery: l,
                                queryLower: a,
                            },
                            i,
                        );
                        return n > 0
                            ? {
                                  choice: e,
                                  score: n,
                                  originalIndex: t,
                              }
                            : null;
                    })
                    .filter(et.Vq)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (c = c.take(r)), c.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp("^".concat(ea.A.escape(r)), "i"),
                    containQuery: RegExp(ea.A.escape(r), "i"),
                    queryLower: r,
                },
                a = (0, O.K)(n.id) && !n.features.has(ec.GuildFeatures.HUB),
                s = n.features.has(ec.GuildFeatures.COMMUNITY),
                o = (0, y.u)(n) && n.features.has(ec.GuildFeatures.COMMUNITY),
                l = [
                    {
                        id: ed.T4.SERVER_GUIDE,
                        name: ep.intl.string(ep.t.VbpLyU),
                    },
                    {
                        id: ed.T4.CHANNEL_BROWSER,
                        name: ep.intl.string(ep.t.et6wav),
                    },
                    {
                        id: ed.T4.CUSTOMIZE_COMMUNITY,
                        name: ep.intl.string(ep.t.h9mGOP),
                    },
                ],
                c = [];
            for (let e of l)
                (e.id !== ed.T4.SERVER_GUIDE || a) &&
                    (e.id !== ed.T4.CHANNEL_BROWSER || s) &&
                    (e.id !== ed.T4.CUSTOMIZE_COMMUNITY || o) &&
                    eQ(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    c.push(
                        new L.jb({
                            id: e.id,
                            name: e.name,
                            type: ec.rbe.UNKNOWN,
                            guild_id: n.id,
                        }),
                    );
            return c;
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
            let { query: t, channel: n, channelTypes: r, limit: i = ec.rs7, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let s = [];
            for (let e of eX)
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
            return {
                choices: this.queryChoice({
                    query: t,
                    choices: n,
                    limit: null,
                }).map((e) => e.choice),
            };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: r, maxCount: i = ec.rs7, matchComparator: a } = e;
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eG],
                i = Q.default.getCurrentUser(),
                a = new Set(),
                s = [];
            for (let o of (x.bW.loadIfNecessary(), e)) {
                if ("" === o) continue;
                let e = o.toLocaleLowerCase(),
                    l = (0, eo.sS)(e),
                    c = RegExp("^".concat(ea.A.escape(l)), "i"),
                    u = RegExp("".concat(ea.A.escape(l)), "i");
                N.A.getStickerMetadataArrays().forEach((o) => {
                    o.forEach((o, l) => {
                        let d = 0,
                            f = null,
                            p = N.A.getStickerById(l);
                        if (null == p || !r(p, (0, T.W$)(p, i, n))) return;
                        for (let n of o) {
                            let { type: r, value: i } = n,
                                a = e1(r),
                                s = 0;
                            t
                                ? i === e
                                    ? (s = eO * a)
                                    : c.test(i)
                                      ? (s = ev * a)
                                      : (r === R.cG.GUILD_NAME || r === R.cG.PACK_NAME || r === R.cG.STICKER_NAME) &&
                                        u.test(i) &&
                                        (s = eS * a)
                                : i === e && ((s = eO * a), (f = i)),
                                s > d && ((d = s), (f = i));
                        }
                        let _ = C.A.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != _ && (d *= _ / 100),
                            d > 0 &&
                                null != f &&
                                !a.has(p.id) &&
                                (a.add(p.id),
                                s.push({
                                    sticker: p,
                                    comparator: f,
                                    score: d,
                                }));
                    });
                });
            }
            return (
                0 ===
                    (s = o()(s)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (s = eF),
                s
            );
        },
        querySoundmoji(e, t) {
            let n = Q.default.getCurrentUser();
            S.A.isFetching() || S.A.hasFetchedAllSounds() || (0, v.E7)(), x.bW.loadIfNecessary();
            let r = Array.from(S.A.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, A.A)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, I.lG)(e, r, n, t);
        },
        queryGames(e) {
            let t = E.Ay.getRunningVerifiedApplicationIds();
            null == $.A.lastFetched && u.X();
            let n = $.A.applicationStatistics;
            function r(r) {
                let i = 0,
                    s = r.name.toLowerCase(),
                    o = e.toLowerCase();
                return (
                    r.id === o
                        ? (i += 1000)
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
            let i = G.A.games;
            return o()(i)
                .filter((e) => !(0, D.nS)(e))
                .map((e) => ({
                    game: e,
                    score: r(e),
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
                .slice(0, ec.rs7);
        },
        queryMentionSuggestionResults(e) {
            let { query: t, channel: n, limit: r = 3, boosters: i, onlyExactMatch: a = !1 } = e,
                s = n.isPrivate()
                    ? n.recipients.map((e) => {
                          var t;
                          return {
                              userId: e,
                              nick: null != (t = q.A.getNickname(e)) ? t : null,
                          };
                      })
                    : B.Ay.getMembers(n.guild_id).filter(e$),
                o = k.default.getId(),
                l = Q.default.getUsers(),
                c = Z.A.getGuildId(),
                u = t.toLocaleLowerCase(),
                d = (0, eo.S8)(u),
                p = [];
            c: for (let e of s) {
                var _, h, m, g;
                let t, s;
                if (p.length >= r) break;
                if (
                    (e instanceof M.A
                        ? ((s = e), (t = null == (m = B.Ay.getNick(c, s.id)) ? void 0 : m.toLocaleLowerCase()))
                        : ((t = null == (g = e.nick) ? void 0 : g.toLocaleLowerCase()), (s = l[e.userId])),
                    null == s || s.id === o || s.bot)
                )
                    continue;
                let f = null == (_ = q.A.getNickname(s.id)) ? void 0 : _.toLocaleLowerCase(),
                    E = null == (h = el.Ay.getGlobalName(s)) ? void 0 : h.toLocaleLowerCase();
                if (
                    !ei.$3({
                        permission: ec.xBc.VIEW_CHANNEL,
                        user: s,
                        context: n,
                    }) &&
                    !n.isPrivate()
                )
                    continue;
                let b = (e, n, r) => {
                        p.push({
                            user: s,
                            score: ez(n, null == i ? void 0 : i[s.id]),
                            matchType: e,
                            comparator: r,
                            nick: t,
                            status: z.A.getStatus(s.id),
                        });
                    },
                    y = s.username.toLocaleLowerCase(),
                    O = (0, eo.sS)(y),
                    A = (0, eo.S8)(O),
                    [v, S] = eJ(t),
                    [I, T] = eJ(f),
                    [C, N] = eJ(E),
                    R = [
                        [y, y],
                        [O, y],
                        [t, t],
                        [v, t],
                        [f, f],
                        [I, f],
                        [E, E],
                        [C, E],
                    ].filter((e) => null != e[0] && null != e[1]);
                for (let [e, t] of R)
                    if (u === e) {
                        b("exact", eO, t);
                        continue c;
                    }
                let w = /\s+|\.|_/;
                for (let [e, t] of R)
                    if (u === e.split(w, 1)[0]) {
                        b("exact", eA, t);
                        continue c;
                    }
                if (!a) {
                    for (let [e, t] of R)
                        if (e.startsWith(u)) {
                            b("starts_with", ev, t);
                            continue c;
                        }
                    for (let [e, n] of [
                        [A, y],
                        [S, t],
                        [T, f],
                        [N, E],
                    ])
                        if (null != e && null != n && e.startsWith(d)) {
                            b("starts_with", ev, n);
                            continue c;
                        }
                }
            }
            return p.sort(f.A), p;
        },
        matchSentinel: (e, t, n) => !eV.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = Y.A.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? H.A.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: e0,
    };

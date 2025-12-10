let r;
n.d(t, {
    Cq: () => ez,
    ZP: () => tt,
    gF: () => eb,
    k1: () => eq,
    mB: () => eK,
}),
    n(388685),
    n(35282),
    n(413496),
    n(433524),
    n(539854),
    n(642613),
    n(290780),
    n(704826),
    n(583741),
    n(361932),
    n(187205);
var i = n(658722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(423802),
    c = n(343203),
    u = n(827837),
    d = n(815372),
    f = n(620490),
    p = n(933557),
    _ = n(510255),
    m = n(565924),
    h = n(710845),
    g = n(339085),
    E = n(594190),
    b = n(627050),
    y = n(31445),
    O = n(931261),
    v = n(510231),
    S = n(277078),
    I = n(208049),
    T = n(763296),
    C = n(421673),
    A = n(285651),
    N = n(822179),
    P = n(926491),
    R = n(373228),
    D = n(601070),
    w = n(569471),
    x = n(675478),
    L = n(131704),
    j = n(345162),
    M = n(598077),
    k = n(314897),
    U = n(592125),
    G = n(580005),
    Z = n(77498),
    B = n(984933),
    F = n(271383),
    V = n(485386),
    H = n(430824),
    Y = n(375954),
    W = n(496675),
    K = n(158776),
    z = n(699516),
    q = n(944486),
    Q = n(914010),
    X = n(594174),
    J = n(230307),
    $ = n(55563),
    ee = n(251625),
    et = n(823379),
    en = n(411198),
    er = n(892880),
    ei = n(700785),
    ea = n(226951),
    eo = n(709054),
    es = n(624138),
    el = n(51144),
    ec = n(981631),
    eu = n(727785),
    ed = n(176505),
    ef = n(570911),
    ep = n(388032);
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
function em(e) {
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
function eh(e, t) {
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
            : eh(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eE = (0, c.M)(() => ({ options: [] }));
function eb(e) {
    eE.setState({ options: e });
}
let ey = new h.Z("AutocompleteUtils"),
    eO = 10,
    ev = 8,
    eS = 7,
    eI = 5,
    eT = 3,
    eC = 1,
    eA = 1,
    eN = 3,
    eP = 5,
    eR = 3,
    eD = 11,
    ew = 6,
    ex = 8,
    eL = 1,
    ej = 1000,
    eM = 0.2,
    ek = 0.1,
    eU = 50,
    eG = () => !0,
    eZ = /(\t|\s)/,
    eB = [],
    eF = (r = n(786074).Z).MENTION_EVERYONE,
    eV = r.MENTION_HERE,
    eH = r.MENTION_GAME,
    eY = r.MENTION_TIMESTAMP,
    eW = r.LAUNCHABLE_APPLICATIONS;
function eK() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return ej * e * (null != t ? t : 1);
}
function ez(e) {
    var t, n;
    let r = G.Z.getFrequentlyWithoutFetchingLatest(),
        i = r.reduce((e, t) => {
            let { id: n } = t,
                r = G.Z.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        a = [];
    switch (e) {
        case eu.h8.GUILD:
            a = r.filter((e) => (0, en.lM)(e));
            break;
        case eu.h8.USER:
            a = r.filter((e) => e instanceof L.Sf && e.type === ec.d4z.DM);
            break;
        case eu.h8.GROUP_DM:
            a = r.filter((e) => e instanceof L.Sf && e.isMultiUserDM());
            break;
        case eu.h8.TEXT_CHANNEL:
            a = r.filter((e) => e instanceof L.Sf && (0, L.r8)(e.type));
            break;
        case eu.h8.VOICE_CHANNEL:
            a = r.filter((e) => e instanceof L.Sf && e.isGuildVocal());
    }
    let o = {};
    for (let t of a) {
        let { id: n } = t,
            r = G.Z.getScoreWithoutFetchingLatest(n);
        if (e === eu.h8.USER && t instanceof L.mn) {
            if (t.type === ec.d4z.DM) o[(n = t.getRecipientId())] = 1 + r / i;
            else if (t.type === ec.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) o[n] = 1 + (r / i) * (1 / e);
            }
        } else o[n] = 1 + r / i;
    }
    for (let e of z.Z.getFriendIDs()) o[e] = (null != (t = o[e]) ? t : 1) + eM;
    for (let e of U.Z.getDMUserIds()) o[e] = (null != (n = o[e]) ? n : 1) + ek;
    return o;
}
let eq = [B.sH, B.Zb, ec.d4z.GUILD_CATEGORY];
function eQ(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(ea.Z.escape(e), "i").test(t));
}
function eX(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return eO;
            return eS;
        }
        if (r.test(e)) return eI;
        if (eQ(i, e)) return eT;
        if (o && a()(i, e)) return eC;
    } catch (e) {
        ey.error(e);
    }
    return 0;
}
function eJ(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function e$(e) {
    if (null == e) return [null, null];
    let t = (0, es._I)(e),
        n = (0, es.Fv)(t);
    return [t, n];
}
function e0(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: o, boosters: s } = e,
        l = X.default.getUsers(),
        c = Q.Z.getGuildId(),
        u = t.toLocaleLowerCase(),
        d = (0, es.Fv)(u),
        p = [],
        _ = [],
        m = n.length,
        h = 0,
        g = 0;
    for (; h < m; ) {
        var E, b, y, O, v, S, I, T, C;
        let e,
            r,
            f = n[h];
        f instanceof M.Z
            ? ((r = f), (e = null == (b = F.ZP.getNick(c, r.id)) ? void 0 : b.toLocaleLowerCase()))
            : ((e = null == (y = f.nick) ? void 0 : y.toLocaleLowerCase()), (r = l[f.userId]));
        let m = null == (E = el.ZP.getGlobalName(r)) ? void 0 : E.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, es._I)(n),
                l = (0, es.Fv)(i),
                [c, f] = e$(e),
                [h, E] = e$(m);
            (o && t === r.id) ||
            n.substring(0, u.length) === u ||
            i.substring(0, u.length) === u ||
            (null == e ? void 0 : e.substring(0, u.length)) === u ||
            (null == c ? void 0 : c.substring(0, u.length)) === u ||
            (null == m ? void 0 : m.substring(0, u.length)) === u ||
            (null == h ? void 0 : h.substring(0, u.length)) === u
                ? p.push({
                      type: eu.h8.USER,
                      record: r,
                      score: eK(eO, null == s ? void 0 : s[r.id]),
                      comparator: null != (O = null != m ? m : e) ? O : n,
                      sortable: null != (v = null != h ? h : c) ? v : i,
                  })
                : l.substring(0, d.length) === d ||
                    (null == f ? void 0 : f.substring(0, d.length)) === d ||
                    (null == E ? void 0 : E.substring(0, d.length)) === d
                  ? p.push({
                        type: eu.h8.USER,
                        record: r,
                        score: eK(eC, null == s ? void 0 : s[r.id]),
                        comparator: null != (S = null != m ? m : e) ? S : n,
                        sortable: null != (I = null != h ? h : c) ? I : i,
                    })
                  : g < eU &&
                    (a()(u, i) ||
                        a()(d, l) ||
                        (null != c && a()(u, c)) ||
                        (null != f && a()(d, f)) ||
                        (null != h && a()(u, h)) ||
                        (null != E && a()(d, E))) &&
                    (_.push({
                        type: eu.h8.USER,
                        record: r,
                        score: eK(eC, null == s ? void 0 : s[r.id]),
                        comparator: null != (T = null != m ? m : e) ? T : n,
                        sortable: null != (C = null != h ? h : c) ? C : i,
                    }),
                    (g += 1));
        }
        h += 1;
    }
    return (
        p.sort(f.Z),
        p.length < r && (_.sort(f.Z), (p = p.concat(_.slice(0, Math.max(0, r - p.length))))),
        p.length > r && (p.length = r),
        p
    );
}
function e1(e) {
    switch (e) {
        case R.MO.STICKER_NAME:
            return eD;
        case R.MO.CORRELATED_EMOJI:
            return ew;
        case R.MO.TAG:
            return eL;
        case R.MO.GUILD_NAME:
        case R.MO.PACK_NAME:
            return ex;
        default:
            return 1;
    }
}
function e3(e) {
    return e === B.sH || (e !== B.Zb && !!(0, L.Q5)(e));
}
function e2(e, t, n) {
    return (
        e === t || ((!!n || !!(0, L.Km)(t)) && (e === B.sH ? (0, L.r8)(t) || (0, L.bw)(t) : e === B.Zb && (0, L.bw)(t)))
    );
}
function e4(e, t) {
    return e === B.sH && (0, L.bw)(t);
}
function e5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(" ")
            .filter((e) => "" !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp("^".concat(ea.Z.escape(t)), "i"),
                    containQuery: RegExp(ea.Z.escape(t), "i"),
                    isFullMatch: !1,
                };
            });
    if (e.includes(" ")) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp("^".concat(ea.Z.escape(t).replace(" ", "( |-)")), "i"),
            containQuery: RegExp(ea.Z.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0,
        });
    }
    return n;
}
function e8(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eX(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function e6(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null == (r = H.Z.getGuild(e.guild_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function e7(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null == (r = U.Z.getChannel(e.parent_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function e9(e, t) {
    let n = U.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(Y.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => X.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eJ(F.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? F.ZP.getMember(r, e.id) : null;
                  return {
                      type: eu.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null != (t = null == i ? void 0 : i.nick) ? t : el.ZP.getName(e),
                  };
              })
              .take(t)
              .value();
}
let te = (0, ee.oH)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            a = [];
        return (
            s()(U.Z.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = X.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e),
                            a.push({
                                userId: t,
                                nick: z.Z.getNickname(t),
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
                members: z.Z.getFriendIDs()
                    .map((e) => X.default.getUser(e))
                    .filter(et.lm),
                limit: n,
                filter: i,
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return e0({
                query: t,
                members: U.Z.getDMUserIds()
                    .map((e) => X.default.getUser(e))
                    .filter(et.lm),
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
                    checkRecentlyTalkedOnEmptyQuery: o = !0,
                    allowSnowflake: s = !1,
                } = e,
                l = U.Z.getChannel(n);
            if (null == l) return [];
            let c = l.isThread() ? U.Z.getChannel(l.parent_id) : null,
                u = null != c ? c : l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => {
                    var t;
                    return {
                        userId: e,
                        nick: null != (t = z.Z.getNickname(e)) ? t : null,
                    };
                });
                let e = X.default.getCurrentUser();
                null != e &&
                    t.push({
                        userId: e.id,
                        nick: null,
                    });
            } else {
                if (0 === r.length && o) {
                    let e = e9(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = F.ZP.getMembers(u.guild_id).filter(eJ)), a && er.Z.requestMembers(u.guild_id, r, i);
            }
            return e0({
                query: r,
                members: t,
                limit: i,
                filter: (e) =>
                    u.isPrivate() ||
                    ei.BT({
                        permission: ec.Plq.VIEW_CHANNEL,
                        user: e,
                        context: u,
                    }),
                allowSnowflake: s,
            });
        },
        queryGuildUsers(e) {
            let {
                guildId: t,
                query: n,
                limit: r = 10,
                request: i = !0,
                checkRecentlyTalkedOnEmptyQuery: a = !0,
                filter: o,
                allowSnowflake: s,
            } = e;
            if (null == H.Z.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = e9(q.Z.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = F.ZP.getMembers(t).filter(eJ);
            return (
                i && n.length > 0 && er.Z.requestMembers(t, n, r),
                e0({
                    query: n,
                    members: l,
                    limit: r,
                    filter: o,
                    allowSnowflake: s,
                })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: a, allowSnowflake: o } = e;
            return e0({
                query: t,
                members: a,
                limit: i,
                filter: n,
                allowSnowflake: o,
                boosters: r,
            });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: a = !0 } = e;
            return (
                a && t.length > 0 && er.Z.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: a,
                    filter: n,
                    boosters: r,
                    users: s()(X.default.getUsers()).values().value(),
                })
            );
        },
        queryChannels(e) {
            let t,
                {
                    query: n,
                    guildId: r,
                    limit: i = ec.rnv,
                    fuzzy: a = !0,
                    filter: o = eG,
                    type: l = B.sH,
                    allowEmptyQueries: c = !1,
                    requireVocalConnectAccess: u = !0,
                    boosters: d = {},
                    allowSnowflake: _,
                    includeAllThreads: m,
                } = e,
                h = e5(n, c),
                g = e3(l);
            t =
                null != r
                    ? s()(B.ZP.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(g ? (m ? U.Z.getAllThreadsForGuild(r) : D.Z.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : s()(U.Z.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(g ? D.Z.computeAllActiveJoinedThreads() : [])
                          .value();
            let E = {},
                b = [],
                y = G.Z.getMaxScore();
            for (let e of t) {
                var O;
                if (
                    !e2(l, e.type, null != r) ||
                    ((0, L.Km)(e.type) && !W.Z.can(u ? e.accessPermissions : ec.Plq.VIEW_CHANNEL, e)) ||
                    !o(e)
                )
                    continue;
                let t = [...h],
                    i = e.name.toLocaleLowerCase(),
                    s = _ && n === e.id,
                    c = s ? eO : e8(i, t, a);
                if (0 !== c) {
                    if (t.length > 0) {
                        for (let n of [e6(e, E), e7(e, E)]) {
                            if (null == n || "" === n) continue;
                            let e = e8(n, t, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(eS - eC, c);
                    }
                    0 !== c &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || s) &&
                        (e4(l, e.type) && (c = Math.max(c - eA, eC / 2)),
                        e.isThread() && (e.isActiveThread() || (c -= eN), w.Z.hasJoined(e.id) || (c -= eP)),
                        (c = Math.min(
                            c + Math.min(null != (O = G.Z.getScoreWithoutFetchingLatest(e.id)) ? O : 0 / y, 1) * eR,
                            c >= eS ? eO : eS,
                        )),
                        b.push({
                            type: (0, L.bw)(e.type) ? eu.h8.VOICE_CHANNEL : eu.h8.TEXT_CHANNEL,
                            record: e,
                            score: eK(c, d[e.id]),
                            comparator: (0, p.F6)(e, X.default, z.Z),
                            sortable: i,
                        }));
                }
            }
            return b.sort(f.Z), null != i && b.length > i && (b.length = i), b;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, allowSnowflake: i, filter: a = eG, boosters: o = {} } = e,
                s = "" === t ? "" : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp("^".concat(ea.Z.escape(s)), "i"),
                    containQuery: RegExp(ea.Z.escape(s), "i"),
                    queryLower: s,
                },
                c = [];
            for (let e of H.Z.getGuildsArray()) {
                if (!a(e)) continue;
                let n = e.name.toLocaleLowerCase(),
                    s = i && t === e.id ? eO : eX(n, l, r);
                s > 0 &&
                    c.push({
                        type: eu.h8.GUILD,
                        record: e,
                        score: eK(s, o[e.id]),
                        comparator: e.name,
                        sortable: n,
                    });
            }
            return c.sort(f.Z), c.length > n && (c.length = n), c;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                {
                    channelsByRecipientId: i,
                    recipientsById: a,
                    recipients: o,
                } = te(U.Z.getPrivateChannelsVersion(), z.Z.getVersion(), X.default.getUserStoreVersion()),
                s = e0({
                    query: t,
                    members: o,
                    limit: o.length,
                    boosters: r,
                }),
                l = [];
            return (
                s.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: eu.h8.DM,
                            record: t,
                            score: e.score,
                            comparator: el.ZP.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable,
                        });
                }),
                l.sort(f.Z),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eG, boosters: a = {} } = e,
                o = (0, es._I)((0, es.Fv)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp("^".concat(ea.Z.escape(o)), "i"),
                    containQuery: RegExp(ea.Z.escape(o), "i"),
                    queryLower: o,
                },
                c = s()(U.Z.getMutablePrivateChannels()).values().value(),
                u = [];
            for (let e of c) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, p.F6)(e, X.default, z.Z).toLocaleLowerCase(),
                    n = (0, es._I)((0, es.Fv)(t)),
                    o = eX(n, l, r),
                    s = [];
                for (let t of e.recipients) {
                    let e = X.default.getUser(t);
                    if (null == e) continue;
                    let n = e.username,
                        r = el.ZP.getGlobalName(e),
                        i = z.Z.getNickname(t);
                    null != n && s.push(n), null != r && s.push(r), null != i && s.push(i);
                }
                for (let e of s) {
                    let t = Math.min(eI, eX((0, es._I)((0, es.Fv)(e.toLocaleLowerCase())), l, r));
                    t > o && (o = t);
                }
                o > 0 &&
                    u.push({
                        type: eu.h8.GROUP_DM,
                        record: e,
                        score: eK(o, a[e.id]),
                        comparator: (0, p.F6)(e, X.default, z.Z),
                        sortable: n,
                    });
            }
            return u.sort(f.Z), u.length > n && (u.length = n), u;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eG } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp("^".concat(ea.Z.escape(a)), "i"),
                    containQuery: RegExp(ea.Z.escape(a), "i"),
                    queryLower: a,
                },
                s = eW(),
                l = [];
            for (let { application: e } of s) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eX(t, o, r);
                n > 0 &&
                    l.push({
                        type: eu.h8.APPLICATION,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t,
                    });
            }
            return l.sort(f.Z), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp("^".concat(ea.Z.escape(a)), "i"),
                    containQuery: RegExp(ea.Z.escape(a), "i"),
                    queryLower: a,
                },
                l = el.ZP.getUserIsStaff(),
                c = {
                    [d.Ky.SHOP]: [ep.intl.string(ep.t.pWG4ze)],
                    [d.Ky.SHOP_ORBS_TAB]: [
                        ep.intl.string(ep.t.ElYQFS),
                        ep.intl.string(ep.t.pWG4ze),
                        ep.intl.string(ep.t.EBYkzk),
                    ],
                    [d.Ky.QUEST_ORBS]: [
                        ep.intl.string(ep.t.ElYQFS),
                        ep.intl.string(ep.t["v/R2aC"]),
                        ep.intl.string(ep.t.qQR4tn),
                    ],
                    [d.Ky.NITRO_HOME]: [ep.intl.string(ep.t.Ipxkog)],
                    [d.Ky.QUEST_HOME]: [ep.intl.string(ep.t.JALI2K)],
                    [d.Ky.APPS_HOME]: [ep.intl.string(ep.t.PHjkRE), ep.intl.string(ep.t.AKcFUj)],
                },
                u = [];
            for (let e in c) {
                let t = d.Ky[e],
                    n = c[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            r = eX(n, s, i);
                        r > 0 &&
                            u.push({
                                type: eu.h8.IN_APP_NAVIGATION,
                                record: d.FL.fromType(t),
                                score: eK(r),
                                comparator: n,
                                sortable: n,
                            });
                    }
            }
            if (l) {
                let { componentPlaygroundConfigs: e } = n(653592);
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
                            r = eX(n, s, i);
                        if (r > 0) {
                            u.push({
                                type: eu.h8.IN_APP_NAVIGATION,
                                record: d.FL.fromType(
                                    d.Ky.PLAYGROUND,
                                    void 0,
                                    "".concat(t.name, " Playground"),
                                    t.id,
                                    t.IconComponent,
                                ),
                                score: eK(r),
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
                        r = null != (t = (0, o.max)(n.map((e) => eK(eX(e.toLocaleLowerCase(), s, i))))) ? t : 0;
                    r > 0 &&
                        u.push({
                            type: eu.h8.IN_APP_NAVIGATION,
                            record: d.FL.fromType(d.Ky.SETTINGS, e.path, e.title),
                            score: r,
                            comparator: e.title.toLocaleLowerCase(),
                            sortable: e.title.toLocaleLowerCase(),
                        });
                }),
                u.sort(f.Z),
                u.length > r && (u.length = r),
                u
            );
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eG } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp("^".concat(ea.Z.escape(a)), "i"),
                    containQuery: RegExp(ea.Z.escape(a), "i"),
                    queryLower: a,
                },
                l = s()($.Z.getSKUs()).values().value(),
                c = [];
            for (let e of l)
                if (e.type === ec.epS.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eX(t, o, r);
                    n > 0 &&
                        c.push({
                            type: eu.h8.SKU,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t,
                        });
                }
            return c.sort(f.Z), c.length > n && (c.length = n), c;
        },
        getRecentlyTalked: e9,
        queryMentionResults(e) {
            let {
                    query: t,
                    channel: n,
                    canMentionEveryone: r = !1,
                    canMentionHere: i = !0,
                    canMentionUsers: o = !0,
                    canMentionRoles: c = !0,
                    canMentionOtherGlobals: u = !0,
                    includeAllGuildUsers: d = !1,
                    includeNonMentionableRoles: f = !1,
                    checkRecentlyTalkedOnEmptyQuery: p = !0,
                    limit: m = ec.rnv,
                    request: h,
                    allowSnowflake: g = !1,
                } = e,
                E = o
                    ? (d && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: m,
                                checkRecentlyTalkedOnEmptyQuery: p,
                                request: h,
                                allowSnowflake: g,
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: m,
                                checkRecentlyTalkedOnEmptyQuery: p,
                                allowSnowflake: g,
                            })
                      ).map((e) => {
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: F.ZP.getNick(n.guild_id, t.id),
                              status: K.Z.getStatus(t.id),
                          };
                      })
                    : [],
                y = E.length,
                O = t.toLowerCase(),
                v = [];
            if (y < m && c) {
                let e = n.getGuildId(),
                    i = H.Z.getGuild(e);
                if (null != i) {
                    let n = s()(V.Z.getSortedRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: o } = t;
                            return (
                                (n || r || f) &&
                                (a()(O, i.toLowerCase()) || (g && O === o)) &&
                                o !== eo.default.castGuildIdAsEveryoneGuildRoleId(e)
                            );
                        })
                        .value();
                    (v = (0, l.Lu)(n, t, { keys: ["name"] }).slice(0, m - y)), (y += v.length);
                }
            }
            let S = [];
            !n.isPrivate() &&
                r &&
                c &&
                (y < m && a()(O, eF().test) && (S.push(eF()), (y += 1)),
                i && y < m && a()(O, eV().test) && (S.push(eV()), (y += 1)));
            let I = b.N.getCurrentConfig(
                {
                    guildId: n.guild_id,
                    location: "mention autocomplete",
                },
                { autoTrackExposure: !0 },
            ).enabled;
            return (
                r &&
                    I &&
                    null != eH &&
                    (y < m || 0 === O.length) &&
                    a()(O, eH().test) &&
                    (y >= m && (S.length > 0 ? S.pop() : v.length > 0 ? v.pop() : E.length > 0 && E.pop()),
                    S.push(eH()),
                    (y += 1)),
                _.Z.getConfig({ location: "mention autocomplete" }).enabled &&
                    u &&
                    null != eY &&
                    (((y < m || 0 === O.length) && a()(O, eY().test)) || O === eY().test) &&
                    (y >= m && (v.length > 0 ? v.pop() : E.length > 0 && E.pop()), S.push(eY()), (y += 1)),
                {
                    users: E,
                    globals: S,
                    roles: v,
                }
            );
        },
        queryGuildMentionResults(e) {
            let {
                    query: t,
                    guildId: n,
                    canMentionEveryone: r = !1,
                    canMentionUsers: i = !0,
                    canMentionRoles: o = !0,
                    canMentionNonMentionableRoles: l = !1,
                } = e,
                c = i
                    ? this.queryGuildUsers({
                          guildId: n,
                          query: t,
                      }).map((e) => eg(em({}, e), { status: K.Z.getStatus(e.record.id) }))
                    : [],
                u = c.length,
                d = t.toLowerCase(),
                f = [];
            if (u < ec.rnv && o) {
                let e = H.Z.getGuild(n);
                null != e &&
                    (s()(V.Z.getSortedRoles(e.id))
                        .filter((e) => (e.mentionable || r || l) && a()(d, e.name.toLowerCase()) && !(0, j.fI)(e))
                        .take(ec.rnv - u)
                        .forEach((e) => {
                            f.push(e);
                        }),
                    (u += f.length));
            }
            let p = [];
            return (
                r &&
                    o &&
                    (u < ec.rnv && a()(d, eF().test) && (p.push(eF()), (u += 1)),
                    u < ec.rnv && a()(d, eV().test) && p.push(eV())),
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
                o = RegExp("^".concat(ea.Z.escape(a)), "i"),
                l = RegExp(ea.Z.escape(a), "i"),
                c = s()(n)
                    .map((e, t) => {
                        let n = eX(
                            e.displayName.toLocaleLowerCase(),
                            {
                                exactQuery: o,
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
                    .filter(et.lm)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (c = c.take(r)), c.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp("^".concat(ea.Z.escape(r)), "i"),
                    containQuery: RegExp(ea.Z.escape(r), "i"),
                    queryLower: r,
                },
                a = (0, O.s)(n.id) && !n.features.has(ec.GuildFeatures.HUB),
                o = n.features.has(ec.GuildFeatures.COMMUNITY),
                s = (0, y.t)(n) && n.features.has(ec.GuildFeatures.COMMUNITY),
                l = [
                    {
                        id: ed.HY.SERVER_GUIDE,
                        name: ep.intl.string(ep.t.VbpLyU),
                    },
                    {
                        id: ed.HY.CHANNEL_BROWSER,
                        name: ep.intl.string(ep.t.et6wav),
                    },
                    {
                        id: ed.HY.CUSTOMIZE_COMMUNITY,
                        name: ep.intl.string(ep.t.h9mGOP),
                    },
                ],
                c = [];
            for (let e of l)
                (e.id !== ed.HY.SERVER_GUIDE || a) &&
                    (e.id !== ed.HY.CHANNEL_BROWSER || o) &&
                    (e.id !== ed.HY.CUSTOMIZE_COMMUNITY || s) &&
                    eX(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    c.push(
                        new L.nl({
                            id: e.id,
                            name: e.name,
                            type: ec.d4z.UNKNOWN,
                            guild_id: n.id,
                        }),
                    );
            return c;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = B.sH, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = ec.rnv, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let o = [];
            for (let e of eq)
                o = o.concat(
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
                (o = o
                    .filter((e) => {
                        let { record: t } = e;
                        return "null" !== t.id;
                    })
                    .sort(m.Z)),
                null != i && o.length > i && (o = o.slice(0, i)),
                { channels: o.map((e) => e.record) }
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
            let { query: t, channel: n, intention: r, maxCount: i = ec.rnv, matchComparator: a } = e;
            return (
                x.DZ.loadIfNecessary(),
                {
                    emojis: g.ZP.searchWithoutFetchingLatest({
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
                i = X.default.getCurrentUser(),
                a = new Set(),
                o = [];
            for (let s of (x.DZ.loadIfNecessary(), e)) {
                if ("" === s) continue;
                let e = s.toLocaleLowerCase(),
                    l = (0, es._I)(e),
                    c = RegExp("^".concat(ea.Z.escape(l)), "i"),
                    u = RegExp("".concat(ea.Z.escape(l)), "i");
                P.Z.getStickerMetadataArrays().forEach((s) => {
                    s.forEach((s, l) => {
                        let d = 0,
                            f = null,
                            p = P.Z.getStickerById(l);
                        if (null == p || !r(p, (0, A.cO)(p, i, n))) return;
                        for (let n of s) {
                            let { type: r, value: i } = n,
                                a = e1(r),
                                o = 0;
                            t
                                ? i === e
                                    ? (o = eO * a)
                                    : c.test(i)
                                      ? (o = eS * a)
                                      : (r === R.MO.GUILD_NAME || r === R.MO.PACK_NAME || r === R.MO.STICKER_NAME) &&
                                        u.test(i) &&
                                        (o = eI * a)
                                : i === e && ((o = eO * a), (f = i)),
                                o > d && ((d = o), (f = i));
                        }
                        let _ = N.Z.stickerFrecencyWithoutFetchingLatest.getScore(l);
                        null != _ && (d *= _ / 100),
                            d > 0 &&
                                null != f &&
                                !a.has(p.id) &&
                                (a.add(p.id),
                                o.push({
                                    sticker: p,
                                    comparator: f,
                                    score: d,
                                }));
                    });
                });
            }
            return (
                0 ===
                    (o = s()(o)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (o = eB),
                o
            );
        },
        querySoundmoji(e, t) {
            let n = X.default.getCurrentUser();
            T.Z.isFetching() || T.Z.hasFetchedAllSounds() || (0, I.w)(), x.DZ.loadIfNecessary();
            let r = Array.from(T.Z.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, S.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                    }),
                    e
                ),
                [],
            );
            return (0, C.cK)(e, r, n, t);
        },
        queryGames(e) {
            let t = E.ZP.getRunningVerifiedApplicationIds();
            null == J.Z.lastFetched && u.N();
            let n = J.Z.applicationStatistics;
            function r(r) {
                let i = 0,
                    o = r.name.toLowerCase(),
                    s = e.toLowerCase();
                return (
                    r.id === s
                        ? (i += 1000)
                        : o === s
                          ? (i += 5)
                          : o.startsWith(s)
                            ? (i += 4)
                            : o.includes(s)
                              ? (i += 3)
                              : o.endsWith(s)
                                ? (i += 2)
                                : a()(s, o) && (i += 1),
                    i > 0 &&
                        (t.includes(r.id) && (i += 10),
                        r.id in n && (i += 2),
                        ef.gQ.has(r.id) && (i += ef.gQ.get(r.id) / ef.gQ.size)),
                    i
                );
            }
            let i = Z.Z.games;
            return s()(i)
                .filter((e) => !(0, v.N)(e))
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
                .slice(0, ec.rnv);
        },
        queryMentionSuggestionResults(e) {
            let { query: t, channel: n, limit: r = 3, boosters: i, onlyExactMatch: a = !1 } = e,
                o = n.isPrivate()
                    ? n.recipients.map((e) => {
                          var t;
                          return {
                              userId: e,
                              nick: null != (t = z.Z.getNickname(e)) ? t : null,
                          };
                      })
                    : F.ZP.getMembers(n.guild_id).filter(eJ),
                s = k.default.getId(),
                l = X.default.getUsers(),
                c = Q.Z.getGuildId(),
                u = t.toLocaleLowerCase(),
                d = (0, es.Fv)(u),
                p = [];
            c: for (let e of o) {
                var _, m, h, g;
                let t, o;
                if (p.length >= r) break;
                if (
                    (e instanceof M.Z
                        ? ((o = e), (t = null == (h = F.ZP.getNick(c, o.id)) ? void 0 : h.toLocaleLowerCase()))
                        : ((t = null == (g = e.nick) ? void 0 : g.toLocaleLowerCase()), (o = l[e.userId])),
                    null == o || o.id === s || o.bot)
                )
                    continue;
                let f = null == (_ = z.Z.getNickname(o.id)) ? void 0 : _.toLocaleLowerCase(),
                    E = null == (m = el.ZP.getGlobalName(o)) ? void 0 : m.toLocaleLowerCase();
                if (
                    !ei.BT({
                        permission: ec.Plq.VIEW_CHANNEL,
                        user: o,
                        context: n,
                    }) &&
                    !n.isPrivate()
                )
                    continue;
                let b = (e, n, r) => {
                        p.push({
                            user: o,
                            score: eK(n, null == i ? void 0 : i[o.id]),
                            matchType: e,
                            comparator: r,
                            nick: t,
                            status: K.Z.getStatus(o.id),
                        });
                    },
                    y = o.username.toLocaleLowerCase(),
                    O = (0, es._I)(y),
                    v = (0, es.Fv)(O),
                    [S, I] = e$(t),
                    [T, C] = e$(f),
                    [A, N] = e$(E),
                    P = [
                        [y, y],
                        [O, y],
                        [t, t],
                        [S, t],
                        [f, f],
                        [T, f],
                        [E, E],
                        [A, E],
                    ].filter((e) => null != e[0] && null != e[1]);
                for (let [e, t] of P)
                    if (u === e) {
                        b("exact", eO, t);
                        continue c;
                    }
                let R = /\s+|\.|_/;
                for (let [e, t] of P)
                    if (u === e.split(R, 1)[0]) {
                        b("exact", ev, t);
                        continue c;
                    }
                if (!a) {
                    for (let [e, t] of P)
                        if (e.startsWith(u)) {
                            b("starts_with", eS, t);
                            continue c;
                        }
                    for (let [e, n] of [
                        [v, y],
                        [I, t],
                        [C, f],
                        [N, E],
                    ])
                        if (null != e && null != n && e.startsWith(d)) {
                            b("starts_with", eS, n);
                            continue c;
                        }
                }
            }
            return p.sort(f.Z), p;
        },
        matchSentinel: (e, t, n) => !eZ.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.hasUniqueUsername()) return !1;
            let n = H.Z.getGuild(e.getGuildId());
            for (let { name: e } of null != n ? V.Z.getSortedRoles(n.id) : [])
                if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        },
        queryMemberList: e0,
    };

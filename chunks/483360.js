let r;
(n.d(t, {
    Cq: () => eH,
    ZP: () => e6,
    gF: () => eg,
    k1: () => eY,
    mB: () => eZ
}),
    n(388685),
    n(35282),
    n(413496),
    n(433524),
    n(539854),
    n(642613),
    n(290780),
    n(704826),
    n(583741));
var i = n(658722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(423802),
    c = n(842022),
    u = n(827837),
    d = n(815372),
    f = n(620490),
    _ = n(933557),
    p = n(605436),
    h = n(565924),
    m = n(710845),
    g = n(339085),
    E = n(594190),
    b = n(627050),
    y = n(31445),
    O = n(931261),
    v = n(510231),
    I = n(277078),
    T = n(208049),
    S = n(763296),
    A = n(421673),
    N = n(285651),
    C = n(822179),
    R = n(926491),
    P = n(373228),
    w = n(601070),
    D = n(569471),
    L = n(675478),
    x = n(131704),
    M = n(598077),
    k = n(592125),
    j = n(580005),
    U = n(77498),
    G = n(984933),
    B = n(271383),
    V = n(485386),
    F = n(430824),
    Z = n(375954),
    H = n(496675),
    Y = n(158776),
    W = n(699516),
    K = n(944486),
    z = n(914010),
    q = n(594174),
    X = n(230307),
    Q = n(55563),
    J = n(251625),
    $ = n(823379),
    ee = n(411198),
    et = n(892880),
    en = n(700785),
    er = n(226951),
    ei = n(709054),
    ea = n(624138),
    eo = n(51144),
    es = n(981631),
    el = n(727785),
    ec = n(176505),
    eu = n(570911),
    ed = n(388032);
function ef(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function e_(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ef(e, t, n[t]);
            }));
    }
    return e;
}
function ep(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ep(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let em = (0, c.M)(() => ({ options: [] }));
function eg(e) {
    em.setState({ options: e });
}
let eE = new m.Z('AutocompleteUtils'),
    eb = 10,
    ey = 7,
    eO = 5,
    ev = 3,
    eI = 1,
    eT = 1,
    eS = 3,
    eA = 5,
    eN = 3,
    eC = 11,
    eR = 6,
    eP = 8,
    ew = 1,
    eD = 1000,
    eL = 0.2,
    ex = 0.1,
    eM = 50,
    ek = () => !0,
    ej = /(\t|\s)/,
    eU = [],
    eG = (r = n(786074).Z).MENTION_EVERYONE,
    eB = r.MENTION_HERE,
    eV = r.MENTION_GAME,
    eF = r.LAUNCHABLE_APPLICATIONS;
function eZ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eD * e * (null != t ? t : 1);
}
function eH(e) {
    var t, n;
    let r = j.Z.getFrequentlyWithoutFetchingLatest(),
        i = r.reduce((e, t) => {
            let { id: n } = t,
                r = j.Z.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        a = [];
    switch (e) {
        case el.h8.GUILD:
            a = r.filter((e) => (0, ee.lM)(e));
            break;
        case el.h8.USER:
            a = r.filter((e) => e instanceof x.Sf && e.type === es.d4z.DM);
            break;
        case el.h8.GROUP_DM:
            a = r.filter((e) => e instanceof x.Sf && e.isMultiUserDM());
            break;
        case el.h8.TEXT_CHANNEL:
            a = r.filter((e) => e instanceof x.Sf && (0, x.r8)(e.type));
            break;
        case el.h8.VOICE_CHANNEL:
            a = r.filter((e) => e instanceof x.Sf && e.isGuildVocal());
    }
    let o = {};
    for (let t of a) {
        let { id: n } = t,
            r = j.Z.getScoreWithoutFetchingLatest(n);
        if (e === el.h8.USER && t instanceof x.mn) {
            if (t.type === es.d4z.DM) o[(n = t.getRecipientId())] = 1 + r / i;
            else if (t.type === es.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) o[n] = 1 + (r / i) * (1 / e);
            }
        } else o[n] = 1 + r / i;
    }
    for (let e of W.Z.getFriendIDs()) o[e] = (null != (t = o[e]) ? t : 1) + eL;
    for (let e of k.Z.getDMUserIds()) o[e] = (null != (n = o[e]) ? n : 1) + ex;
    return o;
}
let eY = [G.sH, G.Zb, es.d4z.GUILD_CATEGORY];
function eW(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(er.Z.escape(e), 'i').test(t));
}
function eK(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return eb;
            return ey;
        }
        if (r.test(e)) return eO;
        if (eW(i, e)) return ev;
        if (o && a()(i, e)) return eI;
    } catch (e) {
        eE.error(e);
    }
    return 0;
}
function ez(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eq(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: o, boosters: s } = e,
        l = q.default.getUsers(),
        c = z.Z.getGuildId(),
        u = t.toLocaleLowerCase(),
        d = (0, ea.Fv)(u),
        _ = [],
        p = [],
        h = n.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        var E, b, y, O, v, I, T, S, A;
        let e,
            r,
            f = n[m];
        f instanceof M.Z ? ((r = f), (e = null == (b = B.ZP.getNick(c, r.id)) ? void 0 : b.toLocaleLowerCase())) : ((e = null == (y = f.nick) ? void 0 : y.toLocaleLowerCase()), (r = l[f.userId]));
        let h = null == (E = eo.ZP.getGlobalName(r)) ? void 0 : E.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, ea._I)(n),
                l = (0, ea.Fv)(i),
                c = null != e ? (0, ea._I)(e) : null,
                f = null != c ? (0, ea.Fv)(c) : null,
                m = null != h ? (0, ea._I)(h) : null,
                E = null != m ? (0, ea.Fv)(m) : null;
            (o && t === r.id) || n.substring(0, u.length) === u || i.substring(0, u.length) === u || (null == e ? void 0 : e.substring(0, u.length)) === u || (null == c ? void 0 : c.substring(0, u.length)) === u || (null == h ? void 0 : h.substring(0, u.length)) === u || (null == m ? void 0 : m.substring(0, u.length)) === u
                ? _.push({
                      type: el.h8.USER,
                      record: r,
                      score: eZ(eb, null == s ? void 0 : s[r.id]),
                      comparator: null != (O = null != h ? h : e) ? O : n,
                      sortable: null != (v = null != m ? m : c) ? v : i
                  })
                : l.substring(0, d.length) === d || (null == f ? void 0 : f.substring(0, d.length)) === d || (null == E ? void 0 : E.substring(0, d.length)) === d
                  ? _.push({
                        type: el.h8.USER,
                        record: r,
                        score: eZ(eI, null == s ? void 0 : s[r.id]),
                        comparator: null != (I = null != h ? h : e) ? I : n,
                        sortable: null != (T = null != m ? m : c) ? T : i
                    })
                  : g < eM &&
                    (a()(u, i) || a()(d, l) || (null != c && a()(u, c)) || (null != f && a()(d, f)) || (null != m && a()(u, m)) || (null != E && a()(d, E))) &&
                    (p.push({
                        type: el.h8.USER,
                        record: r,
                        score: eZ(eI, null == s ? void 0 : s[r.id]),
                        comparator: null != (S = null != h ? h : e) ? S : n,
                        sortable: null != (A = null != m ? m : c) ? A : i
                    }),
                    (g += 1));
        }
        m += 1;
    }
    return (_.sort(f.Z), _.length < r && (p.sort(f.Z), (_ = _.concat(p.slice(0, Math.max(0, r - _.length))))), _.length > r && (_.length = r), _);
}
function eX(e) {
    switch (e) {
        case P.MO.STICKER_NAME:
            return eC;
        case P.MO.CORRELATED_EMOJI:
            return eR;
        case P.MO.TAG:
            return ew;
        case P.MO.GUILD_NAME:
        case P.MO.PACK_NAME:
            return eP;
        default:
            return 1;
    }
}
function eQ(e) {
    return e === G.sH || (e !== G.Zb && !!(0, x.Q5)(e));
}
function eJ(e, t, n) {
    return e === t || ((!!n || !!(0, x.Km)(t)) && (e === G.sH ? (0, x.r8)(t) || (0, x.bw)(t) : e === G.Zb && (0, x.bw)(t)));
}
function e$(e, t) {
    return e === G.sH && (0, x.bw)(t);
}
function e0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(er.Z.escape(t)), 'i'),
                    containQuery: RegExp(er.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(er.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(er.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
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
    return (null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r);
}
function e2(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null == (r = F.Z.getGuild(e.guild_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function e3(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null == (r = k.Z.getChannel(e.parent_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function e4(e, t) {
    let n = k.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(Z.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => q.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || ez(B.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? B.ZP.getMember(r, e.id) : null;
                  return {
                      type: el.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null != (t = null == i ? void 0 : i.nick) ? t : eo.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let e5 = (0, J.oH)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            a = [];
        return (
            s()(k.Z.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = q.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e),
                            a.push({
                                userId: t,
                                nick: W.Z.getNickname(t)
                            }),
                            i.set(t, n));
                    }
                }),
            {
                channelsByRecipientId: r,
                recipientsById: i,
                recipients: a
            }
        );
    }),
    e6 = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eq({
                query: t,
                members: W.Z.getFriendIDs()
                    .map((e) => q.default.getUser(e))
                    .filter($.lm),
                limit: n,
                filter: i
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eq({
                query: t,
                members: k.Z.getDMUserIds()
                    .map((e) => q.default.getUser(e))
                    .filter($.lm),
                limit: n,
                filter: r
            });
        },
        queryChannelUsers(e) {
            let t,
                { channelId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, allowSnowflake: s = !1 } = e,
                l = k.Z.getChannel(n);
            if (null == l) return [];
            let c = l.isThread() ? k.Z.getChannel(l.parent_id) : null,
                u = null != c ? c : l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => {
                    var t;
                    return {
                        userId: e,
                        nick: null != (t = W.Z.getNickname(e)) ? t : null
                    };
                });
                let e = q.default.getCurrentUser();
                null != e &&
                    t.push({
                        userId: e.id,
                        nick: null
                    });
            } else {
                if (0 === r.length && o) {
                    let e = e4(l.id, i);
                    if (e.length > 0) return e;
                }
                ((t = B.ZP.getMembers(u.guild_id).filter(ez)), a && et.Z.requestMembers(u.guild_id, r, i));
            }
            return eq({
                query: r,
                members: t,
                limit: i,
                filter: (e) =>
                    u.isPrivate() ||
                    en.BT({
                        permission: es.Plq.VIEW_CHANNEL,
                        user: e,
                        context: u
                    }),
                allowSnowflake: s
            });
        },
        queryGuildUsers(e) {
            let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: o, allowSnowflake: s } = e;
            if (null == F.Z.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = e4(K.Z.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = B.ZP.getMembers(t).filter(ez);
            return (
                i && n.length > 0 && et.Z.requestMembers(t, n, r),
                eq({
                    query: n,
                    members: l,
                    limit: r,
                    filter: o,
                    allowSnowflake: s
                })
            );
        },
        queryUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, users: a } = e;
            return eq({
                query: t,
                members: a,
                limit: i,
                filter: n,
                boosters: r
            });
        },
        queryAllUsers(e) {
            let { query: t, filter: n, boosters: r, limit: i = 10, request: a = !0 } = e;
            return (
                a && t.length > 0 && et.Z.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: a,
                    filter: n,
                    boosters: r,
                    users: s()(q.default.getUsers()).values().value()
                })
            );
        },
        queryChannels(e) {
            let t,
                { query: n, guildId: r, limit: i = es.rnv, fuzzy: a = !0, filter: o = ek, type: l = G.sH, allowEmptyQueries: c = !1, requireVocalConnectAccess: u = !0, boosters: d = {}, allowSnowflake: p, includeAllThreads: h } = e,
                m = e0(n, c),
                g = eQ(l);
            t =
                null != r
                    ? s()(G.ZP.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(g ? (h ? k.Z.getAllThreadsForGuild(r) : w.Z.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : s()(k.Z.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(g ? w.Z.computeAllActiveJoinedThreads() : [])
                          .value();
            let E = {},
                b = [],
                y = j.Z.getMaxScore();
            for (let e of t) {
                var O;
                if (!eJ(l, e.type, null != r) || ((0, x.Km)(e.type) && !H.Z.can(u ? e.accessPermissions : es.Plq.VIEW_CHANNEL, e)) || !o(e)) continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    s = p && n === e.id,
                    c = s ? eb : e1(i, t, a);
                if (0 !== c) {
                    if (t.length > 0) {
                        for (let n of [e2(e, E), e3(e, E)]) {
                            if (null == n || '' === n) continue;
                            let e = e1(n, t, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(ey - eI, c);
                    }
                    0 !== c &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || s) &&
                        (e$(l, e.type) && (c = Math.max(c - eT, eI / 2)),
                        e.isThread() && (e.isActiveThread() || (c -= eS), D.Z.hasJoined(e.id) || (c -= eA)),
                        (c = Math.min(c + Math.min(null != (O = j.Z.getScoreWithoutFetchingLatest(e.id)) ? O : 0 / y, 1) * eN, c >= ey ? eb : ey)),
                        b.push({
                            type: (0, x.bw)(e.type) ? el.h8.VOICE_CHANNEL : el.h8.TEXT_CHANNEL,
                            record: e,
                            score: eZ(c, d[e.id]),
                            comparator: (0, _.F6)(e, q.default, W.Z),
                            sortable: i
                        }));
                }
            }
            return (b.sort(f.Z), null != i && b.length > i && (b.length = i), b);
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ek, boosters: a = {} } = e,
                o = '' === t ? '' : t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp('^'.concat(er.Z.escape(o)), 'i'),
                    containQuery: RegExp(er.Z.escape(o), 'i'),
                    queryLower: o
                },
                l = [];
            for (let e of F.Z.getGuildsArray()) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eK(t, s, r);
                n > 0 &&
                    l.push({
                        type: el.h8.GUILD,
                        record: e,
                        score: eZ(n, a[e.id]),
                        comparator: e.name,
                        sortable: t
                    });
            }
            return (l.sort(f.Z), l.length > n && (l.length = n), l);
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                { channelsByRecipientId: i, recipientsById: a, recipients: o } = e5(k.Z.getPrivateChannelsVersion(), W.Z.getVersion(), q.default.getUserStoreVersion()),
                s = eq({
                    query: t,
                    members: o,
                    limit: o.length,
                    boosters: r
                }),
                l = [];
            return (
                s.forEach((e) => {
                    let t = i.get(e.record.id);
                    null != t &&
                        l.push({
                            type: el.h8.DM,
                            record: t,
                            score: e.score,
                            comparator: eo.ZP.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable
                        });
                }),
                l.sort(f.Z),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ek, boosters: a = {} } = e,
                o = (0, ea._I)((0, ea.Fv)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp('^'.concat(er.Z.escape(o)), 'i'),
                    containQuery: RegExp(er.Z.escape(o), 'i'),
                    queryLower: o
                },
                c = s()(k.Z.getMutablePrivateChannels()).values().value(),
                u = [];
            for (let e of c) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.F6)(e, q.default, W.Z).toLocaleLowerCase(),
                    n = (0, ea._I)((0, ea.Fv)(t)),
                    o = eK(n, l, r);
                if ('' !== e.name) {
                    let t = (0, _.on)(e, q.default, W.Z).toLocaleLowerCase();
                    o = Math.max(o, eK((0, ea._I)((0, ea.Fv)(t)), l, r));
                }
                o > 0 &&
                    u.push({
                        type: el.h8.GROUP_DM,
                        record: e,
                        score: eZ(o, a[e.id]),
                        comparator: (0, _.F6)(e, q.default, W.Z),
                        sortable: n
                    });
            }
            return (u.sort(f.Z), u.length > n && (u.length = n), u);
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ek } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(er.Z.escape(a)), 'i'),
                    containQuery: RegExp(er.Z.escape(a), 'i'),
                    queryLower: a
                },
                s = eF(),
                l = [];
            for (let { application: e } of s) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eK(t, o, r);
                n > 0 &&
                    l.push({
                        type: el.h8.APPLICATION,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
            return (l.sort(f.Z), l.length > n && (l.length = n), l);
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
                i = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp('^'.concat(er.Z.escape(i)), 'i'),
                    containQuery: RegExp(er.Z.escape(i), 'i'),
                    queryLower: i
                },
                s = {
                    [d.Ky.SHOP]: [ed.intl.string(ed.t.pWG4zc)],
                    [d.Ky.NITRO_HOME]: [ed.intl.string(ed.t.Ipxkoq)],
                    [d.Ky.QUEST_HOME]: [ed.intl.string(ed.t.JALI2N)],
                    [d.Ky.APPS_HOME]: [ed.intl.string(ed.t.PHjkRE), ed.intl.string(ed.t.AKcFUl)]
                },
                l = [];
            for (let e in s) {
                let t = d.Ky[e],
                    n = s[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            i = eK(n, a, r);
                        i > 0 &&
                            l.push({
                                type: el.h8.IN_APP_NAVIGATION,
                                record: d.FL.fromType(t),
                                score: eZ(i),
                                comparator: n,
                                sortable: n
                            });
                    }
            }
            return (
                em.getState().options.forEach((e) => {
                    var t;
                    let n = [e.title].concat(e.searchableTitles),
                        i = null != (t = (0, o.max)(n.map((e) => eZ(eK(e.toLocaleLowerCase(), a, r))))) ? t : 0;
                    i > 0 &&
                        l.push({
                            type: el.h8.IN_APP_NAVIGATION,
                            record: d.FL.fromType(d.Ky.SETTINGS, e.path, e.title),
                            score: i,
                            comparator: e.title.toLocaleLowerCase(),
                            sortable: e.title.toLocaleLowerCase()
                        });
                }),
                l.sort(f.Z),
                l.length > n && (l.length = n),
                l
            );
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ek } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(er.Z.escape(a)), 'i'),
                    containQuery: RegExp(er.Z.escape(a), 'i'),
                    queryLower: a
                },
                l = s()(Q.Z.getSKUs()).values().value(),
                c = [];
            for (let e of l)
                if (e.type === es.epS.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eK(t, o, r);
                    n > 0 &&
                        c.push({
                            type: el.h8.SKU,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t
                        });
                }
            return (c.sort(f.Z), c.length > n && (c.length = n), c);
        },
        getRecentlyTalked: e4,
        queryMentionResults(e) {
            let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: o = !0, canMentionRoles: c = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: d = !1, checkRecentlyTalkedOnEmptyQuery: f = !0, limit: _ = es.rnv, request: p, allowSnowflake: h = !1 } = e,
                m = o
                    ? (u && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: _,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                request: p,
                                allowSnowflake: h
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: _,
                                checkRecentlyTalkedOnEmptyQuery: f,
                                allowSnowflake: h
                            })
                      ).map((e) => {
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: B.ZP.getNick(n.guild_id, t.id),
                              status: Y.Z.getStatus(t.id)
                          };
                      })
                    : [],
                g = m.length,
                E = t.toLowerCase(),
                y = [];
            if (g < _ && c) {
                let e = n.getGuildId(),
                    i = F.Z.getGuild(e);
                if (null != i) {
                    let n = s()(V.Z.getRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: o } = t;
                            return (n || r || d) && (a()(E, i.toLowerCase()) || (h && E === o)) && o !== ei.default.castGuildIdAsEveryoneGuildRoleId(e);
                        })
                        .value();
                    ((y = (0, l.Lu)(n, t, { keys: ['name'] }).slice(0, _ - g)), (g += y.length));
                }
            }
            let O = [];
            return (
                !n.isPrivate() && r && c && (g < _ && a()(E, eG().test) && (O.push(eG()), (g += 1)), i && g < _ && a()(E, eB().test) && (O.push(eB()), (g += 1))),
                b.N.getCurrentConfig(
                    {
                        guildId: n.guild_id,
                        location: 'mention autocomplete'
                    },
                    { autoTrackExposure: !0 }
                ).enabled &&
                    null != eV &&
                    g < _ &&
                    a()(E, eV().test) &&
                    (O.push(eV()), (g += 1)),
                {
                    users: m,
                    globals: O,
                    roles: y
                }
            );
        },
        queryGuildMentionResults(e) {
            let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: o = !0, canMentionNonMentionableRoles: l = !1 } = e,
                c = i
                    ? this.queryGuildUsers({
                          guildId: n,
                          query: t
                      }).map((e) => eh(e_({}, e), { status: Y.Z.getStatus(e.record.id) }))
                    : [],
                u = c.length,
                d = t.toLowerCase(),
                f = [];
            if (u < es.rnv && o) {
                let e = F.Z.getGuild(n);
                null != e &&
                    (s()(V.Z.getRoles(e.id))
                        .filter((e) => {
                            let { mentionable: t, name: i, id: o } = e;
                            return (t || r || l) && a()(d, i.toLowerCase()) && (0, p.Gy)(n, o);
                        })
                        .take(es.rnv - u)
                        .forEach((e) => {
                            f.push(e);
                        }),
                    (u += f.length));
            }
            let _ = [];
            return (
                r && o && (u < es.rnv && a()(d, eG().test) && (_.push(eG()), (u += 1)), u < es.rnv && a()(d, eB().test) && _.push(eB())),
                {
                    users: c,
                    globals: _,
                    roles: f
                }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                o = RegExp('^'.concat(er.Z.escape(a)), 'i'),
                l = RegExp(er.Z.escape(a), 'i'),
                c = s()(n)
                    .map((e, t) => {
                        let n = eK(
                            e.displayName.toLocaleLowerCase(),
                            {
                                exactQuery: o,
                                containQuery: l,
                                queryLower: a
                            },
                            i
                        );
                        return n > 0
                            ? {
                                  choice: e,
                                  score: n,
                                  originalIndex: t
                              }
                            : null;
                    })
                    .filter($.lm)
                    .sortBy((e) => -1 * e.score);
            return (null !== r && (c = c.take(r)), c.value());
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp('^'.concat(er.Z.escape(r)), 'i'),
                    containQuery: RegExp(er.Z.escape(r), 'i'),
                    queryLower: r
                },
                a = (0, O.s)(n.id) && !n.features.has(es.oNc.HUB),
                o = n.features.has(es.oNc.COMMUNITY),
                s = (0, y.t)(n) && n.features.has(es.oNc.COMMUNITY),
                l = [
                    {
                        id: ec.HY.SERVER_GUIDE,
                        name: ed.intl.string(ed.t.VbpLyc)
                    },
                    {
                        id: ec.HY.CHANNEL_BROWSER,
                        name: ed.intl.string(ed.t.et6wam)
                    },
                    {
                        id: ec.HY.CUSTOMIZE_COMMUNITY,
                        name: ed.intl.string(ed.t.h9mGOD)
                    }
                ],
                c = [];
            for (let e of l)
                (e.id !== ec.HY.SERVER_GUIDE || a) &&
                    (e.id !== ec.HY.CHANNEL_BROWSER || o) &&
                    (e.id !== ec.HY.CUSTOMIZE_COMMUNITY || s) &&
                    eK(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    c.push(
                        new x.nl({
                            id: e.id,
                            name: e.name,
                            type: es.d4z.UNKNOWN,
                            guild_id: n.id
                        })
                    );
            return c;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = G.sH, channelTypes: i } = e;
            return {
                channels: this.queryChannels({
                    query: t,
                    guildId: n.getGuildId(),
                    limit: void 0,
                    fuzzy: void 0,
                    filter: (e) => null == i || i.includes(e.type),
                    type: r,
                    allowEmptyQueries: !0
                }).map((e) => e.record)
            };
        },
        queryApplicationCommandChannelResults(e) {
            let { query: t, channel: n, channelTypes: r, limit: i = es.rnv, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return ((null == r || r.includes(n.type)) && e.push(n), { channels: e });
            }
            let o = [];
            for (let e of eY)
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
                        allowSnowflake: a
                    })
                );
            return (
                (o = o
                    .filter((e) => {
                        let { record: t } = e;
                        return 'null' !== t.id;
                    })
                    .sort(h.Z)),
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
                    limit: null
                }).map((e) => e.choice)
            };
        },
        queryEmojiResults(e) {
            let { query: t, channel: n, intention: r, maxCount: i = es.rnv, matchComparator: a } = e;
            return (
                L.DZ.loadIfNecessary(),
                {
                    emojis: g.ZP.searchWithoutFetchingLatest({
                        channel: n,
                        query: t,
                        count: i,
                        intention: r,
                        matchComparator: a
                    })
                }
            );
        },
        queryStickers(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ek],
                { stickerMetadata: i } = R.Z,
                a = q.default.getCurrentUser(),
                o = new Set(),
                l = [];
            for (let s of (L.DZ.loadIfNecessary(), e)) {
                if ('' === s) continue;
                let e = s.toLocaleLowerCase(),
                    c = (0, ea._I)(e),
                    u = RegExp('^'.concat(er.Z.escape(c)), 'i'),
                    d = RegExp(''.concat(er.Z.escape(c)), 'i');
                i.forEach((i, s) => {
                    let c = 0,
                        f = null,
                        _ = R.Z.getStickerById(s);
                    if (null == _ || !r(_, (0, N.cO)(_, a, n))) return;
                    for (let n of i) {
                        let { type: r, value: i } = n,
                            a = eX(r),
                            o = 0;
                        (t ? (i === e ? (o = eb * a) : u.test(i) ? (o = ey * a) : (r === P.MO.GUILD_NAME || r === P.MO.PACK_NAME || r === P.MO.STICKER_NAME) && d.test(i) && (o = eO * a)) : i === e && ((o = eb * a), (f = i)), o > c && ((c = o), (f = i)));
                    }
                    let p = C.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
                    (null != p && (c *= p / 100),
                        c > 0 &&
                            null != f &&
                            !o.has(_.id) &&
                            (o.add(_.id),
                            l.push({
                                sticker: _,
                                comparator: f,
                                score: c
                            })));
                });
            }
            return (
                0 ===
                    (l = s()(l)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (l = eU),
                l
            );
        },
        querySoundmoji(e, t) {
            let n = q.default.getCurrentUser();
            (S.Z.isFetching() || S.Z.hasFetchedAllSounds() || (0, T.w)(), L.DZ.loadIfNecessary());
            let r = Array.from(S.Z.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, I.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                    }),
                    e
                ),
                []
            );
            return (0, A.cK)(e, r, n, t);
        },
        queryGames(e) {
            let t = E.ZP.getRunningVerifiedApplicationIds();
            null == X.Z.lastFetched && u.N();
            let n = X.Z.applicationStatistics;
            function r(r) {
                let i = 0,
                    o = r.name.toLowerCase(),
                    s = e.toLowerCase();
                return (r.id === s ? (i += 1000) : o === s ? (i += 5) : o.startsWith(s) ? (i += 4) : o.includes(s) ? (i += 3) : o.endsWith(s) ? (i += 2) : a()(s, o) && (i += 1), i > 0 && (t.includes(r.id) && (i += 10), r.id in n && (i += 2), eu.gQ.has(r.id) && (i += eu.gQ.get(r.id) / eu.gQ.size)), i);
            }
            let i = U.Z.games;
            return s()(i)
                .filter((e) => !(0, v.N)(e))
                .map((e) => ({
                    game: e,
                    score: r(e)
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
                .slice(0, es.rnv);
        },
        matchSentinel: (e, t, n) => !ej.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.isPomelo()) return !1;
            let n = F.Z.getGuild(e.getGuildId());
            for (let { name: e } of Object.values(null != n ? V.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        }
    };

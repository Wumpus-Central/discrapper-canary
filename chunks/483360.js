let r;
(n.d(t, {
    Cq: () => ek,
    ZP: () => eJ,
    gF: () => eu,
    k1: () => ej,
    mB: () => eM
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
    u = n(815372),
    d = n(620490),
    _ = n(933557),
    f = n(605436),
    p = n(565924),
    h = n(710845),
    m = n(339085),
    g = n(31445),
    E = n(931261),
    b = n(277078),
    y = n(208049),
    O = n(763296),
    v = n(421673),
    I = n(285651),
    T = n(822179),
    S = n(926491),
    A = n(373228),
    N = n(601070),
    C = n(569471),
    R = n(675478),
    P = n(131704),
    w = n(598077),
    D = n(592125),
    L = n(580005),
    x = n(984933),
    M = n(271383),
    k = n(485386),
    j = n(430824),
    U = n(375954),
    G = n(496675),
    B = n(158776),
    V = n(699516),
    F = n(944486),
    Z = n(914010),
    H = n(594174),
    Y = n(55563),
    W = n(251625),
    K = n(823379),
    z = n(411198),
    q = n(892880),
    X = n(700785),
    Q = n(226951),
    J = n(709054),
    $ = n(624138),
    ee = n(51144),
    et = n(981631),
    en = n(727785),
    er = n(176505),
    ei = n(388032);
function ea(e, t, n) {
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
function eo(e) {
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
                ea(e, t, n[t]);
            }));
    }
    return e;
}
function es(e, t) {
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
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : es(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ec = (0, c.M)(() => ({ options: [] }));
function eu(e) {
    ec.setState({ options: e });
}
let ed = new h.Z('AutocompleteUtils'),
    e_ = 10,
    ef = 7,
    ep = 5,
    eh = 3,
    em = 1,
    eg = 1,
    eE = 3,
    eb = 5,
    ey = 3,
    eO = 11,
    ev = 6,
    eI = 8,
    eT = 1,
    eS = 1000,
    eA = 0.2,
    eN = 0.1,
    eC = 50,
    eR = () => !0,
    eP = /(\t|\s)/,
    ew = [],
    eD = (r = n(786074).Z).MENTION_EVERYONE,
    eL = r.MENTION_HERE,
    ex = r.LAUNCHABLE_APPLICATIONS;
function eM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eS * e * (null != t ? t : 1);
}
function ek(e) {
    var t, n;
    let r = L.Z.getFrequentlyWithoutFetchingLatest(),
        i = r.reduce((e, t) => {
            let { id: n } = t,
                r = L.Z.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        a = [];
    switch (e) {
        case en.h8.GUILD:
            a = r.filter((e) => (0, z.lM)(e));
            break;
        case en.h8.USER:
            a = r.filter((e) => e instanceof P.Sf && e.type === et.d4z.DM);
            break;
        case en.h8.GROUP_DM:
            a = r.filter((e) => e instanceof P.Sf && e.isMultiUserDM());
            break;
        case en.h8.TEXT_CHANNEL:
            a = r.filter((e) => e instanceof P.Sf && (0, P.r8)(e.type));
            break;
        case en.h8.VOICE_CHANNEL:
            a = r.filter((e) => e instanceof P.Sf && e.isGuildVocal());
    }
    let o = {};
    for (let t of a) {
        let { id: n } = t,
            r = L.Z.getScoreWithoutFetchingLatest(n);
        if (e === en.h8.USER && t instanceof P.mn) {
            if (t.type === et.d4z.DM) o[(n = t.getRecipientId())] = 1 + r / i;
            else if (t.type === et.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) o[n] = 1 + (r / i) * (1 / e);
            }
        } else o[n] = 1 + r / i;
    }
    for (let e of V.Z.getFriendIDs()) o[e] = (null != (t = o[e]) ? t : 1) + eA;
    for (let e of D.Z.getDMUserIds()) o[e] = (null != (n = o[e]) ? n : 1) + eN;
    return o;
}
let ej = [x.sH, x.Zb, et.d4z.GUILD_CATEGORY];
function eU(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(Q.Z.escape(e), 'i').test(t));
}
function eG(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return e_;
            return ef;
        }
        if (r.test(e)) return ep;
        if (eU(i, e)) return eh;
        if (o && a()(i, e)) return em;
    } catch (e) {
        ed.error(e);
    }
    return 0;
}
function eB(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eV(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: o, boosters: s } = e,
        l = H.default.getUsers(),
        c = Z.Z.getGuildId(),
        u = t.toLocaleLowerCase(),
        _ = (0, $.Fv)(u),
        f = [],
        p = [],
        h = n.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        var E, b, y, O, v, I, T, S, A;
        let e,
            r,
            d = n[m];
        d instanceof w.Z ? ((r = d), (e = null == (b = M.ZP.getNick(c, r.id)) ? void 0 : b.toLocaleLowerCase())) : ((e = null == (y = d.nick) ? void 0 : y.toLocaleLowerCase()), (r = l[d.userId]));
        let h = null == (E = ee.ZP.getGlobalName(r)) ? void 0 : E.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, $._I)(n),
                l = (0, $.Fv)(i),
                c = null != e ? (0, $._I)(e) : null,
                d = null != c ? (0, $.Fv)(c) : null,
                m = null != h ? (0, $._I)(h) : null,
                E = null != m ? (0, $.Fv)(m) : null;
            (o && t === r.id) || n.substring(0, u.length) === u || i.substring(0, u.length) === u || (null == e ? void 0 : e.substring(0, u.length)) === u || (null == c ? void 0 : c.substring(0, u.length)) === u || (null == h ? void 0 : h.substring(0, u.length)) === u || (null == m ? void 0 : m.substring(0, u.length)) === u
                ? f.push({
                      type: en.h8.USER,
                      record: r,
                      score: eM(e_, null == s ? void 0 : s[r.id]),
                      comparator: null != (O = null != h ? h : e) ? O : n,
                      sortable: null != (v = null != m ? m : c) ? v : i
                  })
                : l.substring(0, _.length) === _ || (null == d ? void 0 : d.substring(0, _.length)) === _ || (null == E ? void 0 : E.substring(0, _.length)) === _
                  ? f.push({
                        type: en.h8.USER,
                        record: r,
                        score: eM(em, null == s ? void 0 : s[r.id]),
                        comparator: null != (I = null != h ? h : e) ? I : n,
                        sortable: null != (T = null != m ? m : c) ? T : i
                    })
                  : g < eC &&
                    (a()(u, i) || a()(_, l) || (null != c && a()(u, c)) || (null != d && a()(_, d)) || (null != m && a()(u, m)) || (null != E && a()(_, E))) &&
                    (p.push({
                        type: en.h8.USER,
                        record: r,
                        score: eM(em, null == s ? void 0 : s[r.id]),
                        comparator: null != (S = null != h ? h : e) ? S : n,
                        sortable: null != (A = null != m ? m : c) ? A : i
                    }),
                    (g += 1));
        }
        m += 1;
    }
    return (f.sort(d.Z), f.length < r && (p.sort(d.Z), (f = f.concat(p.slice(0, Math.max(0, r - f.length))))), f.length > r && (f.length = r), f);
}
function eF(e) {
    switch (e) {
        case A.MO.STICKER_NAME:
            return eO;
        case A.MO.CORRELATED_EMOJI:
            return ev;
        case A.MO.TAG:
            return eT;
        case A.MO.GUILD_NAME:
        case A.MO.PACK_NAME:
            return eI;
        default:
            return 1;
    }
}
function eZ(e) {
    return e === x.sH || (e !== x.Zb && !!(0, P.Q5)(e));
}
function eH(e, t, n) {
    return e === t || ((!!n || !!(0, P.Km)(t)) && (e === x.sH ? (0, P.r8)(t) || (0, P.bw)(t) : e === x.Zb && (0, P.bw)(t)));
}
function eY(e, t) {
    return e === x.sH && (0, P.bw)(t);
}
function eW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(Q.Z.escape(t)), 'i'),
                    containQuery: RegExp(Q.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(Q.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(Q.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function eK(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eG(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return (null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r);
}
function ez(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null == (r = j.Z.getGuild(e.guild_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eq(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null == (r = D.Z.getChannel(e.parent_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eX(e, t) {
    let n = D.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(U.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => H.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eB(M.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? M.ZP.getMember(r, e.id) : null;
                  return {
                      type: en.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null != (t = null == i ? void 0 : i.nick) ? t : ee.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let eQ = (0, W.oH)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            a = [];
        return (
            s()(D.Z.getMutablePrivateChannels())
                .values()
                .value()
                .forEach((e) => {
                    if (e.isDM()) {
                        let t = e.getRecipientId(),
                            n = H.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e),
                            a.push({
                                userId: t,
                                nick: V.Z.getNickname(t)
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
    eJ = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eV({
                query: t,
                members: V.Z.getFriendIDs()
                    .map((e) => H.default.getUser(e))
                    .filter(K.lm),
                limit: n,
                filter: i
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return eV({
                query: t,
                members: D.Z.getDMUserIds()
                    .map((e) => H.default.getUser(e))
                    .filter(K.lm),
                limit: n,
                filter: r
            });
        },
        queryChannelUsers(e) {
            let t,
                { channelId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, allowSnowflake: s = !1 } = e,
                l = D.Z.getChannel(n);
            if (null == l) return [];
            let c = l.isThread() ? D.Z.getChannel(l.parent_id) : null,
                u = null != c ? c : l;
            if (null == u) return [];
            if (u.isPrivate()) {
                t = u.recipients.map((e) => {
                    var t;
                    return {
                        userId: e,
                        nick: null != (t = V.Z.getNickname(e)) ? t : null
                    };
                });
                let e = H.default.getCurrentUser();
                null != e &&
                    t.push({
                        userId: e.id,
                        nick: null
                    });
            } else {
                if (0 === r.length && o) {
                    let e = eX(l.id, i);
                    if (e.length > 0) return e;
                }
                ((t = M.ZP.getMembers(u.guild_id).filter(eB)), a && q.Z.requestMembers(u.guild_id, r, i));
            }
            return eV({
                query: r,
                members: t,
                limit: i,
                filter: (e) =>
                    u.isPrivate() ||
                    X.BT({
                        permission: et.Plq.VIEW_CHANNEL,
                        user: e,
                        context: u
                    }),
                allowSnowflake: s
            });
        },
        queryGuildUsers(e) {
            let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: o, allowSnowflake: s } = e;
            if (null == j.Z.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = eX(F.Z.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = M.ZP.getMembers(t).filter(eB);
            return (
                i && n.length > 0 && q.Z.requestMembers(t, n, r),
                eV({
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
            return eV({
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
                a && t.length > 0 && q.Z.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: a,
                    filter: n,
                    boosters: r,
                    users: s()(H.default.getUsers()).values().value()
                })
            );
        },
        queryChannels(e) {
            let t,
                { query: n, guildId: r, limit: i = et.rnv, fuzzy: a = !0, filter: o = eR, type: l = x.sH, allowEmptyQueries: c = !1, requireVocalConnectAccess: u = !0, boosters: f = {}, allowSnowflake: p, includeAllThreads: h } = e,
                m = eW(n, c),
                g = eZ(l);
            t =
                null != r
                    ? s()(x.ZP.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(g ? (h ? D.Z.getAllThreadsForGuild(r) : N.Z.computeAllActiveJoinedThreads(r)) : [])
                          .value()
                    : s()(D.Z.loadAllGuildAndPrivateChannelsFromDisk())
                          .values()
                          .concat(g ? N.Z.computeAllActiveJoinedThreads() : [])
                          .value();
            let E = {},
                b = [],
                y = L.Z.getMaxScore();
            for (let e of t) {
                var O;
                if (!eH(l, e.type, null != r) || ((0, P.Km)(e.type) && !G.Z.can(u ? e.accessPermissions : et.Plq.VIEW_CHANNEL, e)) || !o(e)) continue;
                let t = [...m],
                    i = e.name.toLocaleLowerCase(),
                    s = p && n === e.id,
                    c = s ? e_ : eK(i, t, a);
                if (0 !== c) {
                    if (t.length > 0) {
                        for (let n of [ez(e, E), eq(e, E)]) {
                            if (null == n || '' === n) continue;
                            let e = eK(n, t, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(ef - em, c);
                    }
                    0 !== c &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || s) &&
                        (eY(l, e.type) && (c = Math.max(c - eg, em / 2)),
                        e.isThread() && (e.isActiveThread() || (c -= eE), C.Z.hasJoined(e.id) || (c -= eb)),
                        (c = Math.min(c + Math.min(null != (O = L.Z.getScoreWithoutFetchingLatest(e.id)) ? O : 0 / y, 1) * ey, c >= ef ? e_ : ef)),
                        b.push({
                            type: (0, P.bw)(e.type) ? en.h8.VOICE_CHANNEL : en.h8.TEXT_CHANNEL,
                            record: e,
                            score: eM(c, f[e.id]),
                            comparator: (0, _.F6)(e, H.default, V.Z),
                            sortable: i
                        }));
                }
            }
            return (b.sort(d.Z), null != i && b.length > i && (b.length = i), b);
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eR, boosters: a = {} } = e,
                o = '' === t ? '' : t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp('^'.concat(Q.Z.escape(o)), 'i'),
                    containQuery: RegExp(Q.Z.escape(o), 'i'),
                    queryLower: o
                },
                l = [];
            for (let e of j.Z.getGuildsArray()) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eG(t, s, r);
                n > 0 &&
                    l.push({
                        type: en.h8.GUILD,
                        record: e,
                        score: eM(n, a[e.id]),
                        comparator: e.name,
                        sortable: t
                    });
            }
            return (l.sort(d.Z), l.length > n && (l.length = n), l);
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                { channelsByRecipientId: i, recipientsById: a, recipients: o } = eQ(D.Z.getPrivateChannelsVersion(), V.Z.getVersion(), H.default.getUserStoreVersion()),
                s = eV({
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
                            type: en.h8.DM,
                            record: t,
                            score: e.score,
                            comparator: ee.ZP.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable
                        });
                }),
                l.sort(d.Z),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eR, boosters: a = {} } = e,
                o = (0, $._I)((0, $.Fv)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp('^'.concat(Q.Z.escape(o)), 'i'),
                    containQuery: RegExp(Q.Z.escape(o), 'i'),
                    queryLower: o
                },
                c = s()(D.Z.getMutablePrivateChannels()).values().value(),
                u = [];
            for (let e of c) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, _.F6)(e, H.default, V.Z).toLocaleLowerCase(),
                    n = (0, $._I)((0, $.Fv)(t)),
                    o = eG(n, l, r);
                if ('' !== e.name) {
                    let t = (0, _.on)(e, H.default, V.Z).toLocaleLowerCase();
                    o = Math.max(o, eG((0, $._I)((0, $.Fv)(t)), l, r));
                }
                o > 0 &&
                    u.push({
                        type: en.h8.GROUP_DM,
                        record: e,
                        score: eM(o, a[e.id]),
                        comparator: (0, _.F6)(e, H.default, V.Z),
                        sortable: n
                    });
            }
            return (u.sort(d.Z), u.length > n && (u.length = n), u);
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eR } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(Q.Z.escape(a)), 'i'),
                    containQuery: RegExp(Q.Z.escape(a), 'i'),
                    queryLower: a
                },
                s = ex(),
                l = [];
            for (let { application: e } of s) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = eG(t, o, r);
                n > 0 &&
                    l.push({
                        type: en.h8.APPLICATION,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
            return (l.sort(d.Z), l.length > n && (l.length = n), l);
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
                i = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp('^'.concat(Q.Z.escape(i)), 'i'),
                    containQuery: RegExp(Q.Z.escape(i), 'i'),
                    queryLower: i
                },
                s = {
                    [u.Ky.SHOP]: [ei.intl.string(ei.t.pWG4zc)],
                    [u.Ky.NITRO_HOME]: [ei.intl.string(ei.t.Ipxkoq)],
                    [u.Ky.QUEST_HOME]: [ei.intl.string(ei.t.JALI2N)],
                    [u.Ky.APPS_HOME]: [ei.intl.string(ei.t.PHjkRE), ei.intl.string(ei.t.AKcFUl)]
                },
                l = [];
            for (let e in s) {
                let t = u.Ky[e],
                    n = s[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            i = eG(n, a, r);
                        i > 0 &&
                            l.push({
                                type: en.h8.IN_APP_NAVIGATION,
                                record: u.FL.fromType(t),
                                score: eM(i),
                                comparator: n,
                                sortable: n
                            });
                    }
            }
            return (
                ec.getState().options.forEach((e) => {
                    var t;
                    let n = [e.title].concat(e.searchableTitles),
                        i = null != (t = (0, o.max)(n.map((e) => eM(eG(e.toLocaleLowerCase(), a, r))))) ? t : 0;
                    i > 0 &&
                        l.push({
                            type: en.h8.IN_APP_NAVIGATION,
                            record: u.FL.fromType(u.Ky.SETTINGS, e.path, e.title),
                            score: i,
                            comparator: e.title.toLocaleLowerCase(),
                            sortable: e.title.toLocaleLowerCase()
                        });
                }),
                l.sort(d.Z),
                l.length > n && (l.length = n),
                l
            );
        },
        querySKUs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eR } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(Q.Z.escape(a)), 'i'),
                    containQuery: RegExp(Q.Z.escape(a), 'i'),
                    queryLower: a
                },
                l = s()(Y.Z.getSKUs()).values().value(),
                c = [];
            for (let e of l)
                if (e.type === et.epS.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = eG(t, o, r);
                    n > 0 &&
                        c.push({
                            type: en.h8.SKU,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t
                        });
                }
            return (c.sort(d.Z), c.length > n && (c.length = n), c);
        },
        getRecentlyTalked: eX,
        queryMentionResults(e) {
            let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: o = !0, canMentionRoles: c = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: d = !1, checkRecentlyTalkedOnEmptyQuery: _ = !0, limit: f = et.rnv, request: p, allowSnowflake: h = !1 } = e,
                m = o
                    ? (u && null != n.guild_id
                          ? this.queryGuildUsers({
                                guildId: n.guild_id,
                                query: t,
                                limit: f,
                                checkRecentlyTalkedOnEmptyQuery: _,
                                request: p,
                                allowSnowflake: h
                            })
                          : this.queryChannelUsers({
                                channelId: n.id,
                                query: t,
                                limit: f,
                                checkRecentlyTalkedOnEmptyQuery: _,
                                allowSnowflake: h
                            })
                      ).map((e) => {
                          let { record: t, score: r, comparator: i } = e;
                          return {
                              user: t,
                              score: r,
                              comparator: i,
                              nick: M.ZP.getNick(n.guild_id, t.id),
                              status: B.Z.getStatus(t.id)
                          };
                      })
                    : [],
                g = m.length,
                E = t.toLowerCase(),
                b = [];
            if (g < f && c) {
                let e = n.getGuildId(),
                    i = j.Z.getGuild(e);
                if (null != i) {
                    let n = s()(k.Z.getRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: o } = t;
                            return (n || r || d) && (a()(E, i.toLowerCase()) || (h && E === o)) && o !== J.default.castGuildIdAsEveryoneGuildRoleId(e);
                        })
                        .value();
                    ((b = (0, l.Lu)(n, t, { keys: ['name'] }).slice(0, f - g)), (g += b.length));
                }
            }
            let y = [];
            return (
                !n.isPrivate() && r && c && (g < f && a()(E, eD().test) && (y.push(eD()), (g += 1)), i && g < f && a()(E, eL().test) && y.push(eL())),
                {
                    users: m,
                    globals: y,
                    roles: b
                }
            );
        },
        queryGuildMentionResults(e) {
            let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: o = !0, canMentionNonMentionableRoles: l = !1 } = e,
                c = i
                    ? this.queryGuildUsers({
                          guildId: n,
                          query: t
                      }).map((e) => el(eo({}, e), { status: B.Z.getStatus(e.record.id) }))
                    : [],
                u = c.length,
                d = t.toLowerCase(),
                _ = [];
            if (u < et.rnv && o) {
                let e = j.Z.getGuild(n);
                null != e &&
                    (s()(k.Z.getRoles(e.id))
                        .filter((e) => {
                            let { mentionable: t, name: i, id: o } = e;
                            return (t || r || l) && a()(d, i.toLowerCase()) && (0, f.Gy)(n, o);
                        })
                        .take(et.rnv - u)
                        .forEach((e) => {
                            _.push(e);
                        }),
                    (u += _.length));
            }
            let p = [];
            return (
                r && o && (u < et.rnv && a()(d, eD().test) && (p.push(eD()), (u += 1)), u < et.rnv && a()(d, eL().test) && p.push(eL())),
                {
                    users: c,
                    globals: p,
                    roles: _
                }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                o = RegExp('^'.concat(Q.Z.escape(a)), 'i'),
                l = RegExp(Q.Z.escape(a), 'i'),
                c = s()(n)
                    .map((e, t) => {
                        let n = eG(
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
                    .filter(K.lm)
                    .sortBy((e) => -1 * e.score);
            return (null !== r && (c = c.take(r)), c.value());
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp('^'.concat(Q.Z.escape(r)), 'i'),
                    containQuery: RegExp(Q.Z.escape(r), 'i'),
                    queryLower: r
                },
                a = (0, E.s)(n.id) && !n.features.has(et.oNc.HUB),
                o = n.features.has(et.oNc.COMMUNITY),
                s = (0, g.t)(n) && n.features.has(et.oNc.COMMUNITY),
                l = [
                    {
                        id: er.HY.SERVER_GUIDE,
                        name: ei.intl.string(ei.t.VbpLyc)
                    },
                    {
                        id: er.HY.CHANNEL_BROWSER,
                        name: ei.intl.string(ei.t.et6wam)
                    },
                    {
                        id: er.HY.CUSTOMIZE_COMMUNITY,
                        name: ei.intl.string(ei.t.h9mGOD)
                    }
                ],
                c = [];
            for (let e of l)
                (e.id !== er.HY.SERVER_GUIDE || a) &&
                    (e.id !== er.HY.CHANNEL_BROWSER || o) &&
                    (e.id !== er.HY.CUSTOMIZE_COMMUNITY || s) &&
                    eG(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    c.push(
                        new P.nl({
                            id: e.id,
                            name: e.name,
                            type: et.d4z.UNKNOWN,
                            guild_id: n.id
                        })
                    );
            return c;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = x.sH, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = et.rnv, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return ((null == r || r.includes(n.type)) && e.push(n), { channels: e });
            }
            let o = [];
            for (let e of ej)
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
                    .sort(p.Z)),
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
            let { query: t, channel: n, intention: r, maxCount: i = et.rnv, matchComparator: a } = e;
            return (
                R.DZ.loadIfNecessary(),
                {
                    emojis: m.ZP.searchWithoutFetchingLatest({
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eR],
                { stickerMetadata: i } = S.Z,
                a = H.default.getCurrentUser(),
                o = new Set(),
                l = [];
            for (let s of (R.DZ.loadIfNecessary(), e)) {
                if ('' === s) continue;
                let e = s.toLocaleLowerCase(),
                    c = (0, $._I)(e),
                    u = RegExp('^'.concat(Q.Z.escape(c)), 'i'),
                    d = RegExp(''.concat(Q.Z.escape(c)), 'i');
                i.forEach((i, s) => {
                    let c = 0,
                        _ = null,
                        f = S.Z.getStickerById(s);
                    if (null == f || !r(f, (0, I.cO)(f, a, n))) return;
                    for (let n of i) {
                        let { type: r, value: i } = n,
                            a = eF(r),
                            o = 0;
                        (t ? (i === e ? (o = e_ * a) : u.test(i) ? (o = ef * a) : (r === A.MO.GUILD_NAME || r === A.MO.PACK_NAME || r === A.MO.STICKER_NAME) && d.test(i) && (o = ep * a)) : i === e && ((o = e_ * a), (_ = i)), o > c && ((c = o), (_ = i)));
                    }
                    let p = T.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
                    (null != p && (c *= p / 100),
                        c > 0 &&
                            null != _ &&
                            !o.has(f.id) &&
                            (o.add(f.id),
                            l.push({
                                sticker: f,
                                comparator: _,
                                score: c
                            })));
                });
            }
            return (
                0 ===
                    (l = s()(l)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (l = ew),
                l
            );
        },
        querySoundmoji(e, t) {
            let n = H.default.getCurrentUser();
            (O.Z.isFetching() || O.Z.hasFetchedAllSounds() || (0, y.w)(), R.DZ.loadIfNecessary());
            let r = Array.from(O.Z.getSounds().values()).reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, b.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                    }),
                    e
                ),
                []
            );
            return (0, v.cK)(e, r, n, t);
        },
        matchSentinel: (e, t, n) => !eP.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.isPomelo()) return !1;
            let n = j.Z.getGuild(e.getGuildId());
            for (let { name: e } of Object.values(null != n ? k.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        }
    };

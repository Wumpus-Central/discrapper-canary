let r;
n.d(t, {
    Cq: () => eD,
    ZP: () => eK,
    gF: () => el,
    k1: () => eL,
    mB: () => ew
}),
    n(388685),
    n(35282),
    n(413496),
    n(433524),
    n(539854),
    n(642613),
    n(290780),
    n(704826),
    n(583741);
var i = n(658722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(423802),
    c = n(842022),
    u = n(815372),
    d = n(620490),
    f = n(933557),
    _ = n(605436),
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
    C = n(675478),
    R = n(131704),
    P = n(601964),
    w = n(598077),
    D = n(592125),
    L = n(580005),
    x = n(984933),
    k = n(271383),
    M = n(430824),
    j = n(375954),
    U = n(496675),
    G = n(158776),
    B = n(699516),
    V = n(944486),
    F = n(914010),
    Z = n(594174),
    H = n(55563),
    Y = n(251625),
    W = n(823379),
    K = n(892880),
    z = n(700785),
    q = n(226951),
    X = n(709054),
    Q = n(624138),
    J = n(51144),
    $ = n(981631),
    ee = n(727785),
    et = n(176505),
    en = n(388032);
function er(e, t, n) {
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
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let es = (0, c.M)(() => ({ options: [] }));
function el(e) {
    es.setState({ options: e });
}
let ec = new h.Z('AutocompleteUtils'),
    eu = 10,
    ed = 7,
    ef = 5,
    e_ = 3,
    ep = 1,
    eh = 1,
    em = 3,
    eg = 11,
    eE = 6,
    eb = 8,
    ey = 1,
    eO = 1000,
    ev = 0.2,
    eI = 0.1,
    eT = 50,
    eS = () => !0,
    eA = /(\t|\s)/,
    eN = [],
    eC = (r = n(786074).Z).MENTION_EVERYONE,
    eR = r.MENTION_HERE,
    eP = r.LAUNCHABLE_APPLICATIONS;
function ew() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eO * e * (null != t ? t : 1);
}
function eD(e) {
    var t, n;
    let r = L.Z.getFrequentlyWithoutFetchingLatest(),
        i = r.reduce((e, t) => {
            let { id: n } = t,
                r = L.Z.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        a = [];
    switch (e) {
        case ee.h8.GUILD:
            a = r.filter((e) => e instanceof P.ZP);
            break;
        case ee.h8.USER:
            a = r.filter((e) => e instanceof R.Sf && e.type === $.d4z.DM);
            break;
        case ee.h8.GROUP_DM:
            a = r.filter((e) => e instanceof R.Sf && e.isMultiUserDM());
            break;
        case ee.h8.TEXT_CHANNEL:
            a = r.filter((e) => e instanceof R.Sf && (0, R.r8)(e.type));
            break;
        case ee.h8.VOICE_CHANNEL:
            a = r.filter((e) => e instanceof R.Sf && e.isGuildVocal());
    }
    let o = {};
    for (let t of a) {
        let { id: n } = t,
            r = L.Z.getScoreWithoutFetchingLatest(n);
        if (e === ee.h8.USER && t instanceof R.mn) {
            if (t.type === $.d4z.DM) o[(n = t.getRecipientId())] = 1 + r / i;
            else if (t.type === $.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) o[n] = 1 + (r / i) * (1 / e);
            }
        } else o[n] = 1 + r / i;
    }
    for (let e of B.Z.getFriendIDs()) o[e] = (null != (t = o[e]) ? t : 1) + ev;
    for (let e of D.Z.getDMUserIds()) o[e] = (null != (n = o[e]) ? n : 1) + eI;
    return o;
}
let eL = [x.sH, x.Zb, $.d4z.GUILD_CATEGORY];
function ex(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(q.Z.escape(e), 'i').test(t));
}
function ek(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return eu;
            return ed;
        }
        if (r.test(e)) return ef;
        if (ex(i, e)) return e_;
        if (o && a()(i, e)) return ep;
    } catch (e) {
        ec.error(e);
    }
    return 0;
}
function eM(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function ej(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: o, boosters: s } = e,
        l = Z.default.getUsers(),
        c = F.Z.getGuildId(),
        u = t.toLocaleLowerCase(),
        f = (0, Q.Fv)(u),
        _ = [],
        p = [],
        h = n.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        var E, b, y, O, v, I, T, S, A;
        let e,
            r,
            d = n[m];
        d instanceof w.Z ? ((r = d), (e = null == (b = k.ZP.getNick(c, r.id)) ? void 0 : b.toLocaleLowerCase())) : ((e = null == (y = d.nick) ? void 0 : y.toLocaleLowerCase()), (r = l[d.userId]));
        let h = null == (E = J.ZP.getGlobalName(r)) ? void 0 : E.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, Q._I)(n),
                l = (0, Q.Fv)(i),
                c = null != e ? (0, Q._I)(e) : null,
                d = null != c ? (0, Q.Fv)(c) : null,
                m = null != h ? (0, Q._I)(h) : null,
                E = null != m ? (0, Q.Fv)(m) : null;
            (o && t === r.id) || n.substring(0, u.length) === u || i.substring(0, u.length) === u || (null == e ? void 0 : e.substring(0, u.length)) === u || (null == c ? void 0 : c.substring(0, u.length)) === u || (null == h ? void 0 : h.substring(0, u.length)) === u || (null == m ? void 0 : m.substring(0, u.length)) === u
                ? _.push({
                      type: ee.h8.USER,
                      record: r,
                      score: ew(eu, null == s ? void 0 : s[r.id]),
                      comparator: null != (O = null != h ? h : e) ? O : n,
                      sortable: null != (v = null != m ? m : c) ? v : i
                  })
                : l.substring(0, f.length) === f || (null == d ? void 0 : d.substring(0, f.length)) === f || (null == E ? void 0 : E.substring(0, f.length)) === f
                  ? _.push({
                        type: ee.h8.USER,
                        record: r,
                        score: ew(ep, null == s ? void 0 : s[r.id]),
                        comparator: null != (I = null != h ? h : e) ? I : n,
                        sortable: null != (T = null != m ? m : c) ? T : i
                    })
                  : g < eT &&
                    (a()(u, i) || a()(f, l) || (null != c && a()(u, c)) || (null != d && a()(f, d)) || (null != m && a()(u, m)) || (null != E && a()(f, E))) &&
                    (p.push({
                        type: ee.h8.USER,
                        record: r,
                        score: ew(ep, null == s ? void 0 : s[r.id]),
                        comparator: null != (S = null != h ? h : e) ? S : n,
                        sortable: null != (A = null != m ? m : c) ? A : i
                    }),
                    (g += 1));
        }
        m += 1;
    }
    return _.sort(d.Z), _.length < r && (p.sort(d.Z), (_ = _.concat(p.slice(0, Math.max(0, r - _.length))))), _.length > r && (_.length = r), _;
}
function eU(e) {
    switch (e) {
        case A.MO.STICKER_NAME:
            return eg;
        case A.MO.CORRELATED_EMOJI:
            return eE;
        case A.MO.TAG:
            return ey;
        case A.MO.GUILD_NAME:
        case A.MO.PACK_NAME:
            return eb;
        default:
            return 1;
    }
}
function eG(e, t, n) {
    return e === t || ((!!n || !!(0, R.Km)(t)) && (e === x.sH ? (0, R.r8)(t) || (0, R.bw)(t) : e === x.Zb && (0, R.bw)(t)));
}
function eB(e, t) {
    return e === x.sH && (0, R.bw)(t);
}
function eV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(q.Z.escape(t)), 'i'),
                    containQuery: RegExp(q.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(q.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(q.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function eF(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = ek(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eZ(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null == (r = M.Z.getGuild(e.guild_id)) ? void 0 : r.toString().toLocaleLowerCase();
    }
    return n;
}
function eH(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null == (r = D.Z.getChannel(e.parent_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eY(e, t) {
    let n = D.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(j.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Z.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eM(k.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? k.ZP.getMember(r, e.id) : null;
                  return {
                      type: ee.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null != (t = null == i ? void 0 : i.nick) ? t : J.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let eW = (0, Y.oH)((e, t, n) => {
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
                            n = Z.default.getUser(t);
                        null == t ||
                            null == n ||
                            r.has(t) ||
                            (r.set(t, e),
                            a.push({
                                userId: t,
                                nick: B.Z.getNickname(t)
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
    eK = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return ej({
                query: t,
                members: B.Z.getFriendIDs()
                    .map((e) => Z.default.getUser(e))
                    .filter(W.lm),
                limit: n,
                filter: i
            });
        },
        queryDMUsers(e) {
            let { query: t, limit: n = 10, filter: r } = e;
            return ej({
                query: t,
                members: D.Z.getDMUserIds()
                    .map((e) => Z.default.getUser(e))
                    .filter(W.lm),
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
                        nick: null != (t = B.Z.getNickname(e)) ? t : null
                    };
                });
                let e = Z.default.getCurrentUser();
                null != e &&
                    t.push({
                        userId: e.id,
                        nick: null
                    });
            } else {
                if (0 === r.length && o) {
                    let e = eY(l.id, i);
                    if (e.length > 0) return e;
                }
                (t = k.ZP.getMembers(u.guild_id).filter(eM)), a && K.Z.requestMembers(u.guild_id, r, i);
            }
            return ej({
                query: r,
                members: t,
                limit: i,
                filter: (e) =>
                    u.isPrivate() ||
                    z.BT({
                        permission: $.Plq.VIEW_CHANNEL,
                        user: e,
                        context: u
                    }),
                allowSnowflake: s
            });
        },
        queryGuildUsers(e) {
            let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: o, allowSnowflake: s } = e;
            if (null == M.Z.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = eY(V.Z.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = k.ZP.getMembers(t).filter(eM);
            return (
                i && n.length > 0 && K.Z.requestMembers(t, n, r),
                ej({
                    query: n,
                    members: l,
                    limit: r,
                    filter: o,
                    allowSnowflake: s
                })
            );
        },
        queryUsers(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
                r = arguments.length > 4 ? arguments[4] : void 0;
            return (
                n && e.length > 0 && K.Z.requestMembers(null, e, t),
                ej({
                    query: e,
                    members: s()(Z.default.getUsers()).values().value(),
                    limit: t,
                    filter: r
                })
            );
        },
        queryChannels(e) {
            let t,
                { query: n, guildId: r, limit: i = $.rnv, fuzzy: a = !0, filter: o = eS, type: l = x.sH, allowEmptyQueries: c = !1, requireVocalConnectAccess: u = !0, boosters: _ = {}, allowSnowflake: p } = e,
                h = eV(n, c);
            t =
                null != r
                    ? s()(x.ZP.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(N.Z.computeAllActiveJoinedThreads(r))
                          .value()
                    : s()(D.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(N.Z.computeAllActiveJoinedThreads()).value();
            let m = {},
                g = [],
                E = L.Z.getMaxScore();
            for (let e of t) {
                var b;
                if (!eG(l, e.type, null != r) || ((0, R.Km)(e.type) && !U.Z.can(u ? e.accessPermissions : $.Plq.VIEW_CHANNEL, e)) || !o(e)) continue;
                let t = [...h],
                    i = e.name.toLocaleLowerCase(),
                    s = p && n === e.id,
                    c = s ? eu : eF(i, t, a);
                if (0 !== c) {
                    if (t.length > 0) {
                        for (let n of [eZ(e, m), eH(e, m)]) {
                            if (null == n || '' === n) continue;
                            let e = eF(n, t, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(ed - ep, c);
                    }
                    0 !== c &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || s) &&
                        (eB(l, e.type) && (c = Math.max(c - eh, ep / 2)),
                        (c = Math.min(c + Math.min(null != (b = L.Z.getScoreWithoutFetchingLatest(e.id)) ? b : 0 / E, 1) * em, c >= ed ? eu : ed)),
                        g.push({
                            type: (0, R.bw)(e.type) ? ee.h8.VOICE_CHANNEL : ee.h8.TEXT_CHANNEL,
                            record: e,
                            score: ew(c, _[e.id]),
                            comparator: (0, f.F6)(e, Z.default, B.Z),
                            sortable: i
                        }));
                }
            }
            return g.sort(d.Z), null != i && g.length > i && (g.length = i), g;
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eS, boosters: a = {} } = e,
                o = '' === t ? '' : t.toLocaleLowerCase(),
                l = {
                    exactQuery: RegExp('^'.concat(q.Z.escape(o)), 'i'),
                    containQuery: RegExp(q.Z.escape(o), 'i'),
                    queryLower: o
                },
                c = [];
            for (let e of s()(M.Z.getGuilds()).values().value()) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ek(t, l, r);
                n > 0 &&
                    c.push({
                        type: ee.h8.GUILD,
                        record: e,
                        score: ew(n, a[e.id]),
                        comparator: e.toString(),
                        sortable: t
                    });
            }
            return c.sort(d.Z), c.length > n && (c.length = n), c;
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                { channelsByRecipientId: i, recipientsById: a, recipients: o } = eW(D.Z.getPrivateChannelsVersion(), B.Z.getVersion(), Z.default.getUserStoreVersion()),
                s = ej({
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
                            type: ee.h8.DM,
                            record: t,
                            score: e.score,
                            comparator: J.ZP.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable
                        });
                }),
                l.sort(d.Z),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eS, boosters: a = {} } = e,
                o = (0, Q._I)((0, Q.Fv)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp('^'.concat(q.Z.escape(o)), 'i'),
                    containQuery: RegExp(q.Z.escape(o), 'i'),
                    queryLower: o
                },
                c = s()(D.Z.getMutablePrivateChannels()).values().value(),
                u = [];
            for (let e of c) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, f.F6)(e, Z.default, B.Z).toLocaleLowerCase(),
                    n = (0, Q._I)((0, Q.Fv)(t)),
                    o = ek(n, l, r);
                if ('' !== e.name) {
                    let t = (0, f.on)(e, Z.default, B.Z).toLocaleLowerCase();
                    o = Math.max(o, ek((0, Q._I)((0, Q.Fv)(t)), l, r));
                }
                o > 0 &&
                    u.push({
                        type: ee.h8.GROUP_DM,
                        record: e,
                        score: ew(o, a[e.id]),
                        comparator: (0, f.F6)(e, Z.default, B.Z),
                        sortable: n
                    });
            }
            return u.sort(d.Z), u.length > n && (u.length = n), u;
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eS } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(q.Z.escape(a)), 'i'),
                    containQuery: RegExp(q.Z.escape(a), 'i'),
                    queryLower: a
                },
                s = eP(),
                l = [];
            for (let { application: e } of s) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ek(t, o, r);
                n > 0 &&
                    l.push({
                        type: ee.h8.APPLICATION,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
            return l.sort(d.Z), l.length > n && (l.length = n), l;
        },
        queryInAppNavigations(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
                i = t.toLocaleLowerCase(),
                a = {
                    exactQuery: RegExp('^'.concat(q.Z.escape(i)), 'i'),
                    containQuery: RegExp(q.Z.escape(i), 'i'),
                    queryLower: i
                },
                s = {
                    [u.Ky.SHOP]: [en.intl.string(en.t.pWG4zc)],
                    [u.Ky.NITRO_HOME]: [en.intl.string(en.t.Ipxkoq)],
                    [u.Ky.QUEST_HOME]: [en.intl.string(en.t.JALI2N)],
                    [u.Ky.APPS_HOME]: [en.intl.string(en.t.PHjkRE), en.intl.string(en.t.AKcFUl)]
                },
                l = [];
            for (let e in s) {
                let t = u.Ky[e],
                    n = s[t];
                if (null != n)
                    for (let e of n) {
                        let n = e.toLocaleLowerCase(),
                            i = ek(n, a, r);
                        i > 0 &&
                            l.push({
                                type: ee.h8.IN_APP_NAVIGATION,
                                record: u.FL.fromType(t),
                                score: ew(i),
                                comparator: n,
                                sortable: n
                            });
                    }
            }
            return (
                es.getState().options.forEach((e) => {
                    var t;
                    let n = [e.title].concat(e.searchableTitles),
                        i = null != (t = (0, o.max)(n.map((e) => ew(ek(e.toLocaleLowerCase(), a, r))))) ? t : 0;
                    i > 0 &&
                        l.push({
                            type: ee.h8.IN_APP_NAVIGATION,
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
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eS } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(q.Z.escape(a)), 'i'),
                    containQuery: RegExp(q.Z.escape(a), 'i'),
                    queryLower: a
                },
                l = s()(H.Z.getSKUs()).values().value(),
                c = [];
            for (let e of l)
                if (e.type === $.epS.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = ek(t, o, r);
                    n > 0 &&
                        c.push({
                            type: ee.h8.SKU,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t
                        });
                }
            return c.sort(d.Z), c.length > n && (c.length = n), c;
        },
        getRecentlyTalked: eY,
        queryMentionResults(e) {
            let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: o = !0, canMentionRoles: c = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: d = !1, checkRecentlyTalkedOnEmptyQuery: f = !0, limit: _ = $.rnv, request: p, allowSnowflake: h = !1 } = e,
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
                              nick: k.ZP.getNick(n.guild_id, t.id),
                              status: G.Z.getStatus(t.id)
                          };
                      })
                    : [],
                g = m.length,
                E = t.toLowerCase(),
                b = [];
            if (g < _ && c) {
                let e = n.getGuildId(),
                    i = M.Z.getGuild(e);
                if (null != i) {
                    let n = s()(M.Z.getRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: o } = t;
                            return (n || r || d) && (a()(E, i.toLowerCase()) || (h && E === o)) && o !== X.default.castGuildIdAsEveryoneGuildRoleId(e);
                        })
                        .value();
                    (b = (0, l.Lu)(n, t, { keys: ['name'] }).slice(0, _ - g)), (g += b.length);
                }
            }
            let y = [];
            return (
                !n.isPrivate() && r && c && (g < _ && a()(E, eC().test) && (y.push(eC()), (g += 1)), i && g < _ && a()(E, eR().test) && y.push(eR())),
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
                      }).map((e) => eo(ei({}, e), { status: G.Z.getStatus(e.record.id) }))
                    : [],
                u = c.length,
                d = t.toLowerCase(),
                f = [];
            if (u < $.rnv && o) {
                let e = M.Z.getGuild(n);
                null != e &&
                    (s()(M.Z.getRoles(e.id))
                        .filter((e) => {
                            let { mentionable: t, name: i, id: o } = e;
                            return (t || r || l) && a()(d, i.toLowerCase()) && (0, _.Gy)(n, o);
                        })
                        .take($.rnv - u)
                        .forEach((e) => {
                            f.push(e);
                        }),
                    (u += f.length));
            }
            let p = [];
            return (
                r && o && (u < $.rnv && a()(d, eC().test) && (p.push(eC()), (u += 1)), u < $.rnv && a()(d, eR().test) && p.push(eR())),
                {
                    users: c,
                    globals: p,
                    roles: f
                }
            );
        },
        queryChoice(e) {
            let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
                a = t.toLocaleLowerCase(),
                o = RegExp('^'.concat(q.Z.escape(a)), 'i'),
                l = RegExp(q.Z.escape(a), 'i'),
                c = s()(n)
                    .map((e, t) => {
                        let n = ek(
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
                    .filter(W.lm)
                    .sortBy((e) => -1 * e.score);
            return null !== r && (c = c.take(r)), c.value();
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp('^'.concat(q.Z.escape(r)), 'i'),
                    containQuery: RegExp(q.Z.escape(r), 'i'),
                    queryLower: r
                },
                a = (0, E.s)(n.id) && !n.hasFeature($.oNc.HUB),
                o = n.hasFeature($.oNc.COMMUNITY),
                s = (0, g.t)(n) && n.hasFeature($.oNc.COMMUNITY),
                l = [
                    {
                        id: et.HY.SERVER_GUIDE,
                        name: en.intl.string(en.t.VbpLyc)
                    },
                    {
                        id: et.HY.CHANNEL_BROWSER,
                        name: en.intl.string(en.t.et6wam)
                    },
                    {
                        id: et.HY.CUSTOMIZE_COMMUNITY,
                        name: en.intl.string(en.t.h9mGOD)
                    }
                ],
                c = [];
            for (let e of l)
                (e.id !== et.HY.SERVER_GUIDE || a) &&
                    (e.id !== et.HY.CHANNEL_BROWSER || o) &&
                    (e.id !== et.HY.CUSTOMIZE_COMMUNITY || s) &&
                    ek(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    c.push(
                        new R.nl({
                            id: e.id,
                            name: e.name,
                            type: $.d4z.UNKNOWN,
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
            let { query: t, channel: n, channelTypes: r, limit: i = $.rnv, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
            }
            let o = [];
            for (let e of eL)
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
            let { query: t, channel: n, intention: r, maxCount: i = $.rnv, matchComparator: a } = e;
            return (
                C.DZ.loadIfNecessary(),
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eS],
                { stickerMetadata: i } = S.Z,
                a = Z.default.getCurrentUser(),
                o = new Set(),
                l = [];
            for (let s of (C.DZ.loadIfNecessary(), e)) {
                if ('' === s) continue;
                let e = s.toLocaleLowerCase(),
                    c = (0, Q._I)(e),
                    u = RegExp('^'.concat(q.Z.escape(c)), 'i'),
                    d = RegExp(''.concat(q.Z.escape(c)), 'i');
                i.forEach((i, s) => {
                    let c = 0,
                        f = null,
                        _ = S.Z.getStickerById(s);
                    if (null == _ || !r(_, (0, I.cO)(_, a, n))) return;
                    for (let n of i) {
                        let { type: r, value: i } = n,
                            a = eU(r),
                            o = 0;
                        t ? (i === e ? (o = eu * a) : u.test(i) ? (o = ed * a) : (r === A.MO.GUILD_NAME || r === A.MO.PACK_NAME || r === A.MO.STICKER_NAME) && d.test(i) && (o = ef * a)) : i === e && ((o = eu * a), (f = i)), o > c && ((c = o), (f = i));
                    }
                    let p = T.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
                    null != p && (c *= p / 100),
                        c > 0 &&
                            null != f &&
                            !o.has(_.id) &&
                            (o.add(_.id),
                            l.push({
                                sticker: _,
                                comparator: f,
                                score: c
                            }));
                });
            }
            return (
                0 ===
                    (l = s()(l)
                        .sortBy((e) => -1 * e.score)
                        .value()).length && (l = eN),
                l
            );
        },
        querySoundmoji(e, t) {
            let n = Z.default.getCurrentUser();
            O.Z.isFetching() || O.Z.hasFetchedAllSounds() || (0, y.w)(), C.DZ.loadIfNecessary();
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
        matchSentinel: (e, t, n) => !eA.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.isPomelo()) return !1;
            let n = M.Z.getGuild(e.getGuildId());
            for (let { name: e } of Object.values(null != n ? M.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        }
    };

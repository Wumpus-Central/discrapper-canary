let r;
(n.d(t, {
    Cq: () => eL,
    ZP: () => ez,
    gF: () => ec,
    k1: () => ex,
    mB: () => eD
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
    P = n(598077),
    w = n(592125),
    D = n(580005),
    L = n(984933),
    x = n(271383),
    M = n(485386),
    k = n(430824),
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
    K = n(411198),
    z = n(892880),
    q = n(700785),
    X = n(226951),
    Q = n(709054),
    J = n(624138),
    $ = n(51144),
    ee = n(981631),
    et = n(727785),
    en = n(176505),
    er = n(388032);
function ei(e, t, n) {
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
function ea(e) {
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
                ei(e, t, n[t]);
            }));
    }
    return e;
}
function eo(e, t) {
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
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let el = (0, c.M)(() => ({ options: [] }));
function ec(e) {
    el.setState({ options: e });
}
let eu = new h.Z('AutocompleteUtils'),
    ed = 10,
    ef = 7,
    e_ = 5,
    ep = 3,
    eh = 1,
    em = 1,
    eg = 3,
    eE = 11,
    eb = 6,
    ey = 8,
    eO = 1,
    ev = 1000,
    eI = 0.2,
    eT = 0.1,
    eS = 50,
    eA = () => !0,
    eN = /(\t|\s)/,
    eC = [],
    eR = (r = n(786074).Z).MENTION_EVERYONE,
    eP = r.MENTION_HERE,
    ew = r.LAUNCHABLE_APPLICATIONS;
function eD() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return ev * e * (null != t ? t : 1);
}
function eL(e) {
    var t, n;
    let r = D.Z.getFrequentlyWithoutFetchingLatest(),
        i = r.reduce((e, t) => {
            let { id: n } = t,
                r = D.Z.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        a = [];
    switch (e) {
        case et.h8.GUILD:
            a = r.filter((e) => (0, K.lM)(e));
            break;
        case et.h8.USER:
            a = r.filter((e) => e instanceof R.Sf && e.type === ee.d4z.DM);
            break;
        case et.h8.GROUP_DM:
            a = r.filter((e) => e instanceof R.Sf && e.isMultiUserDM());
            break;
        case et.h8.TEXT_CHANNEL:
            a = r.filter((e) => e instanceof R.Sf && (0, R.r8)(e.type));
            break;
        case et.h8.VOICE_CHANNEL:
            a = r.filter((e) => e instanceof R.Sf && e.isGuildVocal());
    }
    let o = {};
    for (let t of a) {
        let { id: n } = t,
            r = D.Z.getScoreWithoutFetchingLatest(n);
        if (e === et.h8.USER && t instanceof R.mn) {
            if (t.type === ee.d4z.DM) o[(n = t.getRecipientId())] = 1 + r / i;
            else if (t.type === ee.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) o[n] = 1 + (r / i) * (1 / e);
            }
        } else o[n] = 1 + r / i;
    }
    for (let e of B.Z.getFriendIDs()) o[e] = (null != (t = o[e]) ? t : 1) + eI;
    for (let e of w.Z.getDMUserIds()) o[e] = (null != (n = o[e]) ? n : 1) + eT;
    return o;
}
let ex = [L.sH, L.Zb, ee.d4z.GUILD_CATEGORY];
function eM(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(X.Z.escape(e), 'i').test(t));
}
function ek(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return ed;
            return ef;
        }
        if (r.test(e)) return e_;
        if (eM(i, e)) return ep;
        if (o && a()(i, e)) return eh;
    } catch (e) {
        eu.error(e);
    }
    return 0;
}
function ej(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eU(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: o, boosters: s } = e,
        l = Z.default.getUsers(),
        c = F.Z.getGuildId(),
        u = t.toLocaleLowerCase(),
        f = (0, J.Fv)(u),
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
        d instanceof P.Z ? ((r = d), (e = null == (b = x.ZP.getNick(c, r.id)) ? void 0 : b.toLocaleLowerCase())) : ((e = null == (y = d.nick) ? void 0 : y.toLocaleLowerCase()), (r = l[d.userId]));
        let h = null == (E = $.ZP.getGlobalName(r)) ? void 0 : E.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, J._I)(n),
                l = (0, J.Fv)(i),
                c = null != e ? (0, J._I)(e) : null,
                d = null != c ? (0, J.Fv)(c) : null,
                m = null != h ? (0, J._I)(h) : null,
                E = null != m ? (0, J.Fv)(m) : null;
            (o && t === r.id) || n.substring(0, u.length) === u || i.substring(0, u.length) === u || (null == e ? void 0 : e.substring(0, u.length)) === u || (null == c ? void 0 : c.substring(0, u.length)) === u || (null == h ? void 0 : h.substring(0, u.length)) === u || (null == m ? void 0 : m.substring(0, u.length)) === u
                ? _.push({
                      type: et.h8.USER,
                      record: r,
                      score: eD(ed, null == s ? void 0 : s[r.id]),
                      comparator: null != (O = null != h ? h : e) ? O : n,
                      sortable: null != (v = null != m ? m : c) ? v : i
                  })
                : l.substring(0, f.length) === f || (null == d ? void 0 : d.substring(0, f.length)) === f || (null == E ? void 0 : E.substring(0, f.length)) === f
                  ? _.push({
                        type: et.h8.USER,
                        record: r,
                        score: eD(eh, null == s ? void 0 : s[r.id]),
                        comparator: null != (I = null != h ? h : e) ? I : n,
                        sortable: null != (T = null != m ? m : c) ? T : i
                    })
                  : g < eS &&
                    (a()(u, i) || a()(f, l) || (null != c && a()(u, c)) || (null != d && a()(f, d)) || (null != m && a()(u, m)) || (null != E && a()(f, E))) &&
                    (p.push({
                        type: et.h8.USER,
                        record: r,
                        score: eD(eh, null == s ? void 0 : s[r.id]),
                        comparator: null != (S = null != h ? h : e) ? S : n,
                        sortable: null != (A = null != m ? m : c) ? A : i
                    }),
                    (g += 1));
        }
        m += 1;
    }
    return (_.sort(d.Z), _.length < r && (p.sort(d.Z), (_ = _.concat(p.slice(0, Math.max(0, r - _.length))))), _.length > r && (_.length = r), _);
}
function eG(e) {
    switch (e) {
        case A.MO.STICKER_NAME:
            return eE;
        case A.MO.CORRELATED_EMOJI:
            return eb;
        case A.MO.TAG:
            return eO;
        case A.MO.GUILD_NAME:
        case A.MO.PACK_NAME:
            return ey;
        default:
            return 1;
    }
}
function eB(e, t, n) {
    return e === t || ((!!n || !!(0, R.Km)(t)) && (e === L.sH ? (0, R.r8)(t) || (0, R.bw)(t) : e === L.Zb && (0, R.bw)(t)));
}
function eV(e, t) {
    return e === L.sH && (0, R.bw)(t);
}
function eF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(X.Z.escape(t)), 'i'),
                    containQuery: RegExp(X.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(X.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(X.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function eZ(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = ek(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return (null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r);
}
function eH(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null == (r = k.Z.getGuild(e.guild_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eY(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null == (r = w.Z.getChannel(e.parent_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eW(e, t) {
    let n = w.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(j.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Z.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || ej(x.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? x.ZP.getMember(r, e.id) : null;
                  return {
                      type: et.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null != (t = null == i ? void 0 : i.nick) ? t : $.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let eK = (0, Y.oH)((e, t, n) => {
        let r = new Map(),
            i = new Map(),
            a = [];
        return (
            s()(w.Z.getMutablePrivateChannels())
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
    ez = {
        queryFriends(e) {
            let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
            return eU({
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
            return eU({
                query: t,
                members: w.Z.getDMUserIds()
                    .map((e) => Z.default.getUser(e))
                    .filter(W.lm),
                limit: n,
                filter: r
            });
        },
        queryChannelUsers(e) {
            let t,
                { channelId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, allowSnowflake: s = !1 } = e,
                l = w.Z.getChannel(n);
            if (null == l) return [];
            let c = l.isThread() ? w.Z.getChannel(l.parent_id) : null,
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
                    let e = eW(l.id, i);
                    if (e.length > 0) return e;
                }
                ((t = x.ZP.getMembers(u.guild_id).filter(ej)), a && z.Z.requestMembers(u.guild_id, r, i));
            }
            return eU({
                query: r,
                members: t,
                limit: i,
                filter: (e) =>
                    u.isPrivate() ||
                    q.BT({
                        permission: ee.Plq.VIEW_CHANNEL,
                        user: e,
                        context: u
                    }),
                allowSnowflake: s
            });
        },
        queryGuildUsers(e) {
            let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: o, allowSnowflake: s } = e;
            if (null == k.Z.getGuild(t)) return [];
            if (0 === n.length && a) {
                let e = eW(V.Z.getChannelId(t), r);
                if (e.length > 0) return e;
            }
            let l = x.ZP.getMembers(t).filter(ej);
            return (
                i && n.length > 0 && z.Z.requestMembers(t, n, r),
                eU({
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
            return eU({
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
                a && t.length > 0 && z.Z.requestMembers(null, t, i),
                this.queryUsers({
                    query: t,
                    limit: i,
                    request: a,
                    filter: n,
                    boosters: r,
                    users: s()(Z.default.getUsers()).values().value()
                })
            );
        },
        queryChannels(e) {
            let t,
                { query: n, guildId: r, limit: i = ee.rnv, fuzzy: a = !0, filter: o = eA, type: l = L.sH, allowEmptyQueries: c = !1, requireVocalConnectAccess: u = !0, boosters: _ = {}, allowSnowflake: p } = e,
                h = eF(n, c);
            t =
                null != r
                    ? s()(L.ZP.getChannels(r)[l])
                          .map((e) => e.channel)
                          .concat(N.Z.computeAllActiveJoinedThreads(r))
                          .value()
                    : s()(w.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(N.Z.computeAllActiveJoinedThreads()).value();
            let m = {},
                g = [],
                E = D.Z.getMaxScore();
            for (let e of t) {
                var b;
                if (!eB(l, e.type, null != r) || ((0, R.Km)(e.type) && !U.Z.can(u ? e.accessPermissions : ee.Plq.VIEW_CHANNEL, e)) || !o(e)) continue;
                let t = [...h],
                    i = e.name.toLocaleLowerCase(),
                    s = p && n === e.id,
                    c = s ? ed : eZ(i, t, a);
                if (0 !== c) {
                    if (t.length > 0) {
                        for (let n of [eH(e, m), eY(e, m)]) {
                            if (null == n || '' === n) continue;
                            let e = eZ(n, t, !1);
                            0 !== e && (c += 0.5 * e);
                        }
                        c = Math.min(ef - eh, c);
                    }
                    0 !== c &&
                        !(t.length > 1) &&
                        (1 !== t.length || t[0].isFullMatch || s) &&
                        (eV(l, e.type) && (c = Math.max(c - em, eh / 2)),
                        (c = Math.min(c + Math.min(null != (b = D.Z.getScoreWithoutFetchingLatest(e.id)) ? b : 0 / E, 1) * eg, c >= ef ? ed : ef)),
                        g.push({
                            type: (0, R.bw)(e.type) ? et.h8.VOICE_CHANNEL : et.h8.TEXT_CHANNEL,
                            record: e,
                            score: eD(c, _[e.id]),
                            comparator: (0, f.F6)(e, Z.default, B.Z),
                            sortable: i
                        }));
                }
            }
            return (g.sort(d.Z), null != i && g.length > i && (g.length = i), g);
        },
        queryGuilds(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eA, boosters: a = {} } = e,
                o = '' === t ? '' : t.toLocaleLowerCase(),
                s = {
                    exactQuery: RegExp('^'.concat(X.Z.escape(o)), 'i'),
                    containQuery: RegExp(X.Z.escape(o), 'i'),
                    queryLower: o
                },
                l = [];
            for (let e of k.Z.getGuildsArray()) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ek(t, s, r);
                n > 0 &&
                    l.push({
                        type: et.h8.GUILD,
                        record: e,
                        score: eD(n, a[e.id]),
                        comparator: e.name,
                        sortable: t
                    });
            }
            return (l.sort(d.Z), l.length > n && (l.length = n), l);
        },
        queryDMChannels(e) {
            let { query: t, limit: n = 10, boosters: r = {} } = e,
                { channelsByRecipientId: i, recipientsById: a, recipients: o } = eK(w.Z.getPrivateChannelsVersion(), B.Z.getVersion(), Z.default.getUserStoreVersion()),
                s = eU({
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
                            type: et.h8.DM,
                            record: t,
                            score: e.score,
                            comparator: $.ZP.getUserTag(a.get(e.record.id)),
                            sortable: e.sortable
                        });
                }),
                l.sort(d.Z),
                l.length > n && (l.length = n),
                l
            );
        },
        queryGroupDMs(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eA, boosters: a = {} } = e,
                o = (0, J._I)((0, J.Fv)(t.toLocaleLowerCase())),
                l = {
                    exactQuery: RegExp('^'.concat(X.Z.escape(o)), 'i'),
                    containQuery: RegExp(X.Z.escape(o), 'i'),
                    queryLower: o
                },
                c = s()(w.Z.getMutablePrivateChannels()).values().value(),
                u = [];
            for (let e of c) {
                if (!e.isMultiUserDM() || !i(e)) continue;
                let t = (0, f.F6)(e, Z.default, B.Z).toLocaleLowerCase(),
                    n = (0, J._I)((0, J.Fv)(t)),
                    o = ek(n, l, r);
                if ('' !== e.name) {
                    let t = (0, f.on)(e, Z.default, B.Z).toLocaleLowerCase();
                    o = Math.max(o, ek((0, J._I)((0, J.Fv)(t)), l, r));
                }
                o > 0 &&
                    u.push({
                        type: et.h8.GROUP_DM,
                        record: e,
                        score: eD(o, a[e.id]),
                        comparator: (0, f.F6)(e, Z.default, B.Z),
                        sortable: n
                    });
            }
            return (u.sort(d.Z), u.length > n && (u.length = n), u);
        },
        queryApplications(e) {
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eA } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(X.Z.escape(a)), 'i'),
                    containQuery: RegExp(X.Z.escape(a), 'i'),
                    queryLower: a
                },
                s = ew(),
                l = [];
            for (let { application: e } of s) {
                if (!i(e)) continue;
                let t = e.name.toLocaleLowerCase(),
                    n = ek(t, o, r);
                n > 0 &&
                    l.push({
                        type: et.h8.APPLICATION,
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
                    exactQuery: RegExp('^'.concat(X.Z.escape(i)), 'i'),
                    containQuery: RegExp(X.Z.escape(i), 'i'),
                    queryLower: i
                },
                s = {
                    [u.Ky.SHOP]: [er.intl.string(er.t.pWG4zc)],
                    [u.Ky.NITRO_HOME]: [er.intl.string(er.t.Ipxkoq)],
                    [u.Ky.QUEST_HOME]: [er.intl.string(er.t.JALI2N)],
                    [u.Ky.APPS_HOME]: [er.intl.string(er.t.PHjkRE), er.intl.string(er.t.AKcFUl)]
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
                                type: et.h8.IN_APP_NAVIGATION,
                                record: u.FL.fromType(t),
                                score: eD(i),
                                comparator: n,
                                sortable: n
                            });
                    }
            }
            return (
                el.getState().options.forEach((e) => {
                    var t;
                    let n = [e.title].concat(e.searchableTitles),
                        i = null != (t = (0, o.max)(n.map((e) => eD(ek(e.toLocaleLowerCase(), a, r))))) ? t : 0;
                    i > 0 &&
                        l.push({
                            type: et.h8.IN_APP_NAVIGATION,
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
            let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eA } = e,
                a = t.toLocaleLowerCase(),
                o = {
                    exactQuery: RegExp('^'.concat(X.Z.escape(a)), 'i'),
                    containQuery: RegExp(X.Z.escape(a), 'i'),
                    queryLower: a
                },
                l = s()(H.Z.getSKUs()).values().value(),
                c = [];
            for (let e of l)
                if (e.type === ee.epS.DURABLE_PRIMARY && i(e)) {
                    let t = e.name.toLocaleLowerCase(),
                        n = ek(t, o, r);
                    n > 0 &&
                        c.push({
                            type: et.h8.SKU,
                            record: e,
                            score: n,
                            comparator: e.name,
                            sortable: t
                        });
                }
            return (c.sort(d.Z), c.length > n && (c.length = n), c);
        },
        getRecentlyTalked: eW,
        queryMentionResults(e) {
            let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: o = !0, canMentionRoles: c = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: d = !1, checkRecentlyTalkedOnEmptyQuery: f = !0, limit: _ = ee.rnv, request: p, allowSnowflake: h = !1 } = e,
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
                              nick: x.ZP.getNick(n.guild_id, t.id),
                              status: G.Z.getStatus(t.id)
                          };
                      })
                    : [],
                g = m.length,
                E = t.toLowerCase(),
                b = [];
            if (g < _ && c) {
                let e = n.getGuildId(),
                    i = k.Z.getGuild(e);
                if (null != i) {
                    let n = s()(M.Z.getRoles(i.id))
                        .filter((t) => {
                            let { mentionable: n, name: i, id: o } = t;
                            return (n || r || d) && (a()(E, i.toLowerCase()) || (h && E === o)) && o !== Q.default.castGuildIdAsEveryoneGuildRoleId(e);
                        })
                        .value();
                    ((b = (0, l.Lu)(n, t, { keys: ['name'] }).slice(0, _ - g)), (g += b.length));
                }
            }
            let y = [];
            return (
                !n.isPrivate() && r && c && (g < _ && a()(E, eR().test) && (y.push(eR()), (g += 1)), i && g < _ && a()(E, eP().test) && y.push(eP())),
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
                      }).map((e) => es(ea({}, e), { status: G.Z.getStatus(e.record.id) }))
                    : [],
                u = c.length,
                d = t.toLowerCase(),
                f = [];
            if (u < ee.rnv && o) {
                let e = k.Z.getGuild(n);
                null != e &&
                    (s()(M.Z.getRoles(e.id))
                        .filter((e) => {
                            let { mentionable: t, name: i, id: o } = e;
                            return (t || r || l) && a()(d, i.toLowerCase()) && (0, _.Gy)(n, o);
                        })
                        .take(ee.rnv - u)
                        .forEach((e) => {
                            f.push(e);
                        }),
                    (u += f.length));
            }
            let p = [];
            return (
                r && o && (u < ee.rnv && a()(d, eR().test) && (p.push(eR()), (u += 1)), u < ee.rnv && a()(d, eP().test) && p.push(eP())),
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
                o = RegExp('^'.concat(X.Z.escape(a)), 'i'),
                l = RegExp(X.Z.escape(a), 'i'),
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
            return (null !== r && (c = c.take(r)), c.value());
        },
        queryStaticRouteChannels(e) {
            let { query: t, guild: n } = e,
                r = t.toLocaleLowerCase(),
                i = {
                    exactQuery: RegExp('^'.concat(X.Z.escape(r)), 'i'),
                    containQuery: RegExp(X.Z.escape(r), 'i'),
                    queryLower: r
                },
                a = (0, E.s)(n.id) && !n.features.has(ee.oNc.HUB),
                o = n.features.has(ee.oNc.COMMUNITY),
                s = (0, g.t)(n) && n.features.has(ee.oNc.COMMUNITY),
                l = [
                    {
                        id: en.HY.SERVER_GUIDE,
                        name: er.intl.string(er.t.VbpLyc)
                    },
                    {
                        id: en.HY.CHANNEL_BROWSER,
                        name: er.intl.string(er.t.et6wam)
                    },
                    {
                        id: en.HY.CUSTOMIZE_COMMUNITY,
                        name: er.intl.string(er.t.h9mGOD)
                    }
                ],
                c = [];
            for (let e of l)
                (e.id !== en.HY.SERVER_GUIDE || a) &&
                    (e.id !== en.HY.CHANNEL_BROWSER || o) &&
                    (e.id !== en.HY.CUSTOMIZE_COMMUNITY || s) &&
                    ek(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    c.push(
                        new R.nl({
                            id: e.id,
                            name: e.name,
                            type: ee.d4z.UNKNOWN,
                            guild_id: n.id
                        })
                    );
            return c;
        },
        queryChannelResults(e) {
            let { query: t, channel: n, type: r = L.sH, channelTypes: i } = e;
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
            let { query: t, channel: n, channelTypes: r, limit: i = ee.rnv, allowSnowflake: a } = e;
            if (null == n.guild_id) {
                let e = [];
                return ((null == r || r.includes(n.type)) && e.push(n), { channels: e });
            }
            let o = [];
            for (let e of ex)
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
            let { query: t, channel: n, intention: r, maxCount: i = ee.rnv, matchComparator: a } = e;
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
                [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eA],
                { stickerMetadata: i } = S.Z,
                a = Z.default.getCurrentUser(),
                o = new Set(),
                l = [];
            for (let s of (C.DZ.loadIfNecessary(), e)) {
                if ('' === s) continue;
                let e = s.toLocaleLowerCase(),
                    c = (0, J._I)(e),
                    u = RegExp('^'.concat(X.Z.escape(c)), 'i'),
                    d = RegExp(''.concat(X.Z.escape(c)), 'i');
                i.forEach((i, s) => {
                    let c = 0,
                        f = null,
                        _ = S.Z.getStickerById(s);
                    if (null == _ || !r(_, (0, I.cO)(_, a, n))) return;
                    for (let n of i) {
                        let { type: r, value: i } = n,
                            a = eG(r),
                            o = 0;
                        (t ? (i === e ? (o = ed * a) : u.test(i) ? (o = ef * a) : (r === A.MO.GUILD_NAME || r === A.MO.PACK_NAME || r === A.MO.STICKER_NAME) && d.test(i) && (o = e_ * a)) : i === e && ((o = ed * a), (f = i)), o > c && ((c = o), (f = i)));
                    }
                    let p = T.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
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
                        .value()).length && (l = eC),
                l
            );
        },
        querySoundmoji(e, t) {
            let n = Z.default.getCurrentUser();
            (O.Z.isFetching() || O.Z.hasFetchedAllSounds() || (0, y.w)(), C.DZ.loadIfNecessary());
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
        matchSentinel: (e, t, n) => !eN.test(t) && e === n,
        hasSameRoleAsUsername(e, t) {
            if (!t.isPomelo()) return !1;
            let n = k.Z.getGuild(e.getGuildId());
            for (let { name: e } of Object.values(null != n ? M.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
            return !1;
        }
    };

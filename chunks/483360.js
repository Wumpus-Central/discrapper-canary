let r;
n.d(t, {
    ZP: () => eF,
    gF: () => ea,
    k1: () => eC
}),
    n(301563),
    n(474991),
    n(398202),
    n(653041),
    n(230036),
    n(733860),
    n(757143),
    n(47120),
    n(978209);
var i = n(658722),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(423802),
    c = n(684233),
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
    v = n(763296),
    O = n(421673),
    I = n(285651),
    S = n(822179),
    T = n(926491),
    N = n(373228),
    A = n(601070),
    C = n(675478),
    R = n(131704),
    P = n(598077),
    w = n(592125),
    D = n(580005),
    L = n(984933),
    x = n(271383),
    M = n(430824),
    k = n(375954),
    j = n(496675),
    U = n(158776),
    G = n(699516),
    B = n(944486),
    F = n(914010),
    V = n(594174),
    Z = n(55563),
    H = n(823379),
    W = n(892880),
    Y = n(700785),
    K = n(226951),
    z = n(709054),
    q = n(624138),
    Q = n(51144),
    X = n(981631),
    J = n(727785),
    $ = n(176505),
    ee = n(388032);
function et(e, t, n) {
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
function en(e) {
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
                et(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : er(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eo = (0, c.M)(() => ({ options: [] }));
function ea(e) {
    eo.setState({ options: e });
}
let es = new h.Z('AutocompleteUtils'),
    el = 10,
    ec = 7,
    eu = 5,
    ed = 3,
    ef = 1,
    e_ = 1,
    ep = 3,
    eh = 11,
    em = 6,
    eg = 8,
    eE = 1,
    eb = 1000,
    ey = 50,
    ev = () => !0,
    eO = /(\t|\s)/,
    eI = [],
    eS = (r = n(786074).Z).MENTION_EVERYONE,
    eT = r.MENTION_HERE,
    eN = r.LAUNCHABLE_APPLICATIONS;
function eA() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eb * e * (null != t ? t : 1);
}
let eC = [L.sH, L.Zb, X.d4z.GUILD_CATEGORY];
function eR(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(K.Z.escape(e), 'i').test(t));
}
function eP(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i } = t,
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return el;
            return ec;
        }
        if (r.test(e)) return eu;
        if (eR(i, e)) return ed;
        if (a && o()(i, e)) return ef;
    } catch (e) {
        es.error(e);
    }
    return 0;
}
function ew(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eD(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a } = e,
        s = V.default.getUsers(),
        l = F.Z.getGuildId(),
        c = t.toLocaleLowerCase(),
        u = (0, q.Fv)(c),
        f = [],
        _ = [],
        p = n.length,
        h = 0,
        m = 0;
    for (; h < p; ) {
        var g, E, b, y, v, O, I, S, T;
        let e,
            r,
            d = n[h];
        d instanceof P.Z ? ((r = d), (e = null == (E = x.ZP.getNick(l, r.id)) ? void 0 : E.toLocaleLowerCase())) : ((e = null == (b = d.nick) ? void 0 : b.toLocaleLowerCase()), (r = s[d.userId]));
        let p = null == (g = Q.ZP.getGlobalName(r)) ? void 0 : g.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, q._I)(n),
                s = (0, q.Fv)(i),
                l = null != e ? (0, q._I)(e) : null,
                d = null != l ? (0, q.Fv)(l) : null,
                h = null != p ? (0, q._I)(p) : null,
                g = null != h ? (0, q.Fv)(h) : null;
            (a && t === r.id) || n.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == p ? void 0 : p.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c
                ? f.push({
                      type: J.h8.USER,
                      record: r,
                      score: el,
                      comparator: null != (y = null != p ? p : e) ? y : n,
                      sortable: null != (v = null != h ? h : l) ? v : i
                  })
                : s.substring(0, u.length) === u || (null == d ? void 0 : d.substring(0, u.length)) === u || (null == g ? void 0 : g.substring(0, u.length)) === u
                  ? f.push({
                        type: J.h8.USER,
                        record: r,
                        score: ef,
                        comparator: null != (O = null != p ? p : e) ? O : n,
                        sortable: null != (I = null != h ? h : l) ? I : i
                    })
                  : m < ey &&
                    (o()(c, i) || o()(u, s) || (null != l && o()(c, l)) || (null != d && o()(u, d)) || (null != h && o()(c, h)) || (null != g && o()(u, g))) &&
                    (_.push({
                        type: J.h8.USER,
                        record: r,
                        score: ef,
                        comparator: null != (S = null != p ? p : e) ? S : n,
                        sortable: null != (T = null != h ? h : l) ? T : i
                    }),
                    (m += 1));
        }
        h += 1;
    }
    return f.sort(d.Z), f.length < r && (_.sort(d.Z), (f = f.concat(_.slice(0, Math.max(0, r - f.length))))), f.length > r && (f.length = r), f;
}
function eL(e) {
    switch (e) {
        case N.MO.STICKER_NAME:
            return eh;
        case N.MO.CORRELATED_EMOJI:
            return em;
        case N.MO.TAG:
            return eE;
        case N.MO.GUILD_NAME:
        case N.MO.PACK_NAME:
            return eg;
        default:
            return 1;
    }
}
function ex(e, t, n) {
    return e === t || ((!!n || !!(0, R.Km)(t)) && (e === L.sH ? (0, R.r8)(t) || (0, R.bw)(t) : e === L.Zb && (0, R.bw)(t)));
}
function eM(e, t) {
    return e === L.sH && (0, R.bw)(t);
}
function ek(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(K.Z.escape(t)), 'i'),
                    containQuery: RegExp(K.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(K.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(K.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function ej(e, t, n) {
    let r = 0,
        i = null;
    for (let o of t) {
        let t = eP(e, o, n);
        t > r && ((r = t), (i = o));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eU(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null == (r = M.Z.getGuild(e.guild_id)) ? void 0 : r.toString().toLocaleLowerCase();
    }
    return n;
}
function eG(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null == (r = w.Z.getChannel(e.parent_id)) ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eB(e, t) {
    let n = w.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(k.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => V.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || ew(x.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? x.ZP.getMember(r, e.id) : null;
                  return {
                      type: J.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null != (t = null == i ? void 0 : i.nick) ? t : Q.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let eF = {
    queryFriends(e) {
        let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
        return eD({
            query: t,
            members: G.Z.getFriendIDs()
                .map((e) => V.default.getUser(e))
                .filter(H.lm),
            limit: n,
            filter: i
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: r } = e;
        return eD({
            query: t,
            members: w.Z.getDMUserIds()
                .map((e) => V.default.getUser(e))
                .filter(H.lm),
            limit: n,
            filter: r
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: r, limit: i = 10, request: o = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, allowSnowflake: s = !1 } = e,
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
                    nick: null != (t = G.Z.getNickname(e)) ? t : null
                };
            });
            let e = V.default.getCurrentUser();
            null != e &&
                t.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === r.length && a) {
                let e = eB(l.id, i);
                if (e.length > 0) return e;
            }
            (t = x.ZP.getMembers(u.guild_id).filter(ew)), o && W.Z.requestMembers(u.guild_id, r, i);
        }
        return eD({
            query: r,
            members: t,
            limit: i,
            filter: (e) =>
                u.isPrivate() ||
                Y.BT({
                    permission: X.Plq.VIEW_CHANNEL,
                    user: e,
                    context: u
                }),
            allowSnowflake: s
        });
    },
    queryGuildUsers(e) {
        let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, filter: a, allowSnowflake: s } = e;
        if (null == M.Z.getGuild(t)) return [];
        if (0 === n.length && o) {
            let e = eB(B.Z.getChannelId(t), r);
            if (e.length > 0) return e;
        }
        let l = x.ZP.getMembers(t).filter(ew);
        return (
            i && n.length > 0 && W.Z.requestMembers(t, n, r),
            eD({
                query: n,
                members: l,
                limit: r,
                filter: a,
                allowSnowflake: s
            })
        );
    },
    queryUsers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
            r = arguments.length > 4 ? arguments[4] : void 0;
        return (
            n && e.length > 0 && W.Z.requestMembers(null, e, t),
            eD({
                query: e,
                members: s()(V.default.getUsers()).values().value(),
                limit: t,
                filter: r
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: r, limit: i = X.rnv, fuzzy: o = !0, filter: a = ev, type: l = L.sH, allowEmptyQueries: c = !1, requireVocalConnectAccess: u = !0, boosters: _ = {}, allowSnowflake: p } = e,
            h = ek(n, c);
        t =
            null != r
                ? s()(L.ZP.getChannels(r)[l])
                      .map((e) => e.channel)
                      .concat(A.Z.computeAllActiveJoinedThreads(r))
                      .value()
                : s()(w.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(A.Z.computeAllActiveJoinedThreads()).value();
        let m = {},
            g = [],
            E = D.Z.getMaxScore();
        for (let e of t) {
            var b;
            if (!ex(l, e.type, null != r) || ((0, R.Km)(e.type) && !j.Z.can(u ? e.accessPermissions : X.Plq.VIEW_CHANNEL, e)) || !a(e)) continue;
            let t = [...h],
                i = e.name.toLocaleLowerCase(),
                s = p && n === e.id,
                c = s ? el : ej(i, t, o);
            if (0 !== c) {
                if (t.length > 0) {
                    for (let n of [eU(e, m), eG(e, m)]) {
                        if (null == n || '' === n) continue;
                        let e = ej(n, t, !1);
                        0 !== e && (c += 0.5 * e);
                    }
                    c = Math.min(ec - ef, c);
                }
                0 !== c &&
                    !(t.length > 1) &&
                    (1 !== t.length || t[0].isFullMatch || s) &&
                    (eM(l, e.type) && (c = Math.max(c - e_, ef / 2)),
                    (c = Math.min(c + Math.min(null != (b = D.Z.getScoreWithoutFetchingLatest(e.id)) ? b : 0 / E, 1) * ep, c >= ec ? el : ec)),
                    g.push({
                        type: (0, R.bw)(e.type) ? J.h8.VOICE_CHANNEL : J.h8.TEXT_CHANNEL,
                        record: e,
                        score: eA(c, _[e.id]),
                        comparator: (0, f.F6)(e, V.default, G.Z),
                        sortable: i
                    }));
            }
        }
        return g.sort(d.Z), null != i && g.length > i && (g.length = i), g;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ev, boosters: o = {} } = e,
            a = '' === t ? '' : t.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(K.Z.escape(a)), 'i'),
                containQuery: RegExp(K.Z.escape(a), 'i'),
                queryLower: a
            },
            c = [];
        for (let e of s()(M.Z.getGuilds()).values().value()) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eP(t, l, r);
            n > 0 &&
                c.push({
                    type: J.h8.GUILD,
                    record: e,
                    score: eA(n, o[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return c.sort(d.Z), c.length > n && (c.length = n), c;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ev, boosters: o = {} } = e,
            a = (0, q._I)((0, q.Fv)(t.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(K.Z.escape(a)), 'i'),
                containQuery: RegExp(K.Z.escape(a), 'i'),
                queryLower: a
            },
            c = s()(w.Z.getMutablePrivateChannels()).values().value(),
            u = [];
        for (let e of c) {
            if (!e.isMultiUserDM() || !i(e)) continue;
            let t = (0, f.F6)(e, V.default, G.Z).toLocaleLowerCase(),
                n = (0, q._I)((0, q.Fv)(t)),
                a = eP(n, l, r);
            a > 0 &&
                u.push({
                    type: J.h8.GROUP_DM,
                    record: e,
                    score: eA(a, o[e.id]),
                    comparator: (0, f.F6)(e, V.default, G.Z),
                    sortable: n
                });
        }
        return u.sort(d.Z), u.length > n && (u.length = n), u;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ev } = e,
            o = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(K.Z.escape(o)), 'i'),
                containQuery: RegExp(K.Z.escape(o), 'i'),
                queryLower: o
            },
            s = eN(),
            l = [];
        for (let { application: e } of s) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eP(t, a, r);
            n > 0 &&
                l.push({
                    type: J.h8.APPLICATION,
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
            o = {
                exactQuery: RegExp('^'.concat(K.Z.escape(i)), 'i'),
                containQuery: RegExp(K.Z.escape(i), 'i'),
                queryLower: i
            },
            s = {
                [u.Ky.SHOP]: [ee.NW.string(ee.t.pWG4zc)],
                [u.Ky.NITRO_HOME]: [ee.NW.string(ee.t.Ipxkoq)],
                [u.Ky.QUEST_HOME]: [ee.NW.string(ee.t.JALI2N)],
                [u.Ky.APPS_HOME]: [ee.NW.string(ee.t.PHjkRE), ee.NW.string(ee.t.AKcFUl)]
            },
            l = [];
        for (let e in s) {
            let t = u.Ky[e],
                n = s[t];
            if (null != n)
                for (let e of n) {
                    let n = e.toLocaleLowerCase(),
                        i = eP(n, o, r);
                    i > 0 &&
                        l.push({
                            type: J.h8.IN_APP_NAVIGATION,
                            record: u.FL.fromType(t),
                            score: eA(i),
                            comparator: n,
                            sortable: n
                        });
                }
        }
        return (
            eo.getState().options.forEach((e) => {
                var t;
                let n = [e.title].concat(e.searchableTitles),
                    i = null != (t = (0, a.max)(n.map((e) => eA(eP(e.toLocaleLowerCase(), o, r))))) ? t : 0;
                i > 0 &&
                    l.push({
                        type: J.h8.IN_APP_NAVIGATION,
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
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ev } = e,
            o = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(K.Z.escape(o)), 'i'),
                containQuery: RegExp(K.Z.escape(o), 'i'),
                queryLower: o
            },
            l = s()(Z.Z.getSKUs()).values().value(),
            c = [];
        for (let e of l)
            if (e.type === X.epS.DURABLE_PRIMARY && i(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = eP(t, a, r);
                n > 0 &&
                    c.push({
                        type: J.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return c.sort(d.Z), c.length > n && (c.length = n), c;
    },
    getRecentlyTalked: eB,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: a = !0, canMentionRoles: c = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: d = !1, checkRecentlyTalkedOnEmptyQuery: f = !0, limit: _ = X.rnv, request: p, allowSnowflake: h = !1 } = e,
            m = a
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
                          status: U.Z.getStatus(t.id)
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
                        let { mentionable: n, name: i, id: a } = t;
                        return (n || r || d) && (o()(E, i.toLowerCase()) || (h && E === a)) && a !== z.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .value();
                (b = (0, l.Lu)(n, t, { keys: ['name'] }).slice(0, _ - g)), (g += b.length);
            }
        }
        let y = [];
        return (
            !n.isPrivate() && r && c && (g < _ && o()(E, eS().test) && (y.push(eS()), (g += 1)), i && g < _ && o()(E, eT().test) && y.push(eT())),
            {
                users: m,
                globals: y,
                roles: b
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: a = !0, canMentionNonMentionableRoles: l = !1 } = e,
            c = i
                ? this.queryGuildUsers({
                      guildId: n,
                      query: t
                  }).map((e) => ei(en({}, e), { status: U.Z.getStatus(e.record.id) }))
                : [],
            u = c.length,
            d = t.toLowerCase(),
            f = [];
        if (u < X.rnv && a) {
            let e = M.Z.getGuild(n);
            null != e &&
                (s()(M.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: i, id: a } = e;
                        return (t || r || l) && o()(d, i.toLowerCase()) && (0, _.Gy)(n, a);
                    })
                    .take(X.rnv - u)
                    .forEach((e) => {
                        f.push(e);
                    }),
                (u += f.length));
        }
        let p = [];
        return (
            r && a && (u < X.rnv && o()(d, eS().test) && (p.push(eS()), (u += 1)), u < X.rnv && o()(d, eT().test) && p.push(eT())),
            {
                users: c,
                globals: p,
                roles: f
            }
        );
    },
    queryChoice(e) {
        let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
            o = t.toLocaleLowerCase(),
            a = RegExp('^'.concat(K.Z.escape(o)), 'i'),
            l = RegExp(K.Z.escape(o), 'i'),
            c = s()(n)
                .map((e, t) => {
                    let n = eP(
                        e.displayName.toLocaleLowerCase(),
                        {
                            exactQuery: a,
                            containQuery: l,
                            queryLower: o
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
                .filter(H.lm)
                .sortBy((e) => -1 * e.score);
        return null !== r && (c = c.take(r)), c.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            r = t.toLocaleLowerCase(),
            i = {
                exactQuery: RegExp('^'.concat(K.Z.escape(r)), 'i'),
                containQuery: RegExp(K.Z.escape(r), 'i'),
                queryLower: r
            },
            o = (0, E.s)(n.id) && !n.hasFeature(X.oNc.HUB),
            a = n.hasFeature(X.oNc.COMMUNITY),
            s = (0, g.t)(n) && n.hasFeature(X.oNc.COMMUNITY),
            l = [
                {
                    id: $.HY.SERVER_GUIDE,
                    name: ee.NW.string(ee.t.VbpLyc)
                },
                {
                    id: $.HY.CHANNEL_BROWSER,
                    name: ee.NW.string(ee.t.et6wam)
                },
                {
                    id: $.HY.CUSTOMIZE_COMMUNITY,
                    name: ee.NW.string(ee.t.h9mGOD)
                }
            ],
            c = [];
        for (let e of l)
            (e.id !== $.HY.SERVER_GUIDE || o) &&
                (e.id !== $.HY.CHANNEL_BROWSER || a) &&
                (e.id !== $.HY.CUSTOMIZE_COMMUNITY || s) &&
                eP(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                c.push(
                    new R.nl({
                        id: e.id,
                        name: e.name,
                        type: X.d4z.UNKNOWN,
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
        let { query: t, channel: n, channelTypes: r, limit: i = X.rnv, allowSnowflake: o } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
        }
        let a = [];
        for (let e of eC)
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
                    allowSnowflake: o
                })
            );
        return (
            (a = a
                .filter((e) => {
                    let { record: t } = e;
                    return 'null' !== t.id;
                })
                .sort(p.Z)),
            null != i && a.length > i && (a = a.slice(0, i)),
            { channels: a.map((e) => e.record) }
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
        let { query: t, channel: n, intention: r, maxCount: i = X.rnv, matchComparator: o } = e;
        return (
            C.DZ.loadIfNecessary(),
            {
                emojis: m.ZP.searchWithoutFetchingLatest({
                    channel: n,
                    query: t,
                    count: i,
                    intention: r,
                    matchComparator: o
                })
            }
        );
    },
    queryStickers(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ev],
            { stickerMetadata: i } = T.Z,
            o = V.default.getCurrentUser(),
            a = new Set(),
            l = [];
        for (let s of (C.DZ.loadIfNecessary(), e)) {
            if ('' === s) continue;
            let e = s.toLocaleLowerCase(),
                c = (0, q._I)(e),
                u = RegExp('^'.concat(K.Z.escape(c)), 'i'),
                d = RegExp(''.concat(K.Z.escape(c)), 'i');
            i.forEach((i, s) => {
                let c = 0,
                    f = null,
                    _ = T.Z.getStickerById(s);
                if (null == _ || !r(_, (0, I.cO)(_, o, n))) return;
                for (let n of i) {
                    let { type: r, value: i } = n,
                        o = eL(r),
                        a = 0;
                    t ? (i === e ? (a = el * o) : u.test(i) ? (a = ec * o) : (r === N.MO.GUILD_NAME || r === N.MO.PACK_NAME || r === N.MO.STICKER_NAME) && d.test(i) && (a = eu * o)) : i === e && ((a = el * o), (f = i)), a > c && ((c = a), (f = i));
                }
                let p = S.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
                null != p && (c *= p / 100),
                    c > 0 &&
                        null != f &&
                        !a.has(_.id) &&
                        (a.add(_.id),
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
                    .value()).length && (l = eI),
            l
        );
    },
    querySoundmoji(e, t) {
        let n = V.default.getCurrentUser();
        v.Z.isFetching() || v.Z.hasFetchedAllSounds() || (0, y.w)(), C.DZ.loadIfNecessary();
        let r = Array.from(v.Z.getSounds().values()).reduce(
            (e, n) => (
                n.forEach((n) => {
                    (0, b.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                }),
                e
            ),
            []
        );
        return (0, O.cK)(e, r, n, t);
    },
    matchSentinel: (e, t, n) => !eO.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = M.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? M.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};

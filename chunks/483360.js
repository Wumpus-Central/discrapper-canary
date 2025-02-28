let r;
n.d(t, {
    ZP: () => eG,
    gF: () => eo,
    k1: () => eN
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
    c = n(5907),
    u = n(815372),
    d = n(620490),
    f = n(933557),
    _ = n(605436),
    p = n(565924),
    h = n(710845),
    g = n(339085),
    m = n(31445),
    E = n(931261),
    v = n(277078),
    b = n(208049),
    y = n(763296),
    O = n(421673),
    S = n(285651),
    I = n(822179),
    T = n(926491),
    N = n(373228),
    A = n(601070),
    C = n(675478),
    R = n(131704),
    P = n(598077),
    D = n(592125),
    w = n(984933),
    L = n(271383),
    x = n(430824),
    M = n(375954),
    k = n(496675),
    j = n(158776),
    U = n(699516),
    G = n(944486),
    B = n(914010),
    V = n(594174),
    F = n(55563),
    Z = n(823379),
    H = n(892880),
    W = n(700785),
    Y = n(226951),
    K = n(709054),
    z = n(624138),
    q = n(51144),
    Q = n(981631),
    X = n(727785),
    J = n(176505),
    $ = n(388032);
function ee(e, t, n) {
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
function et(e) {
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
                ee(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
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
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ei = (0, c.M)(() => ({ options: [] }));
function eo(e) {
    ei.setState({ options: e });
}
let ea = new h.Z('AutocompleteUtils'),
    es = 10,
    el = 7,
    ec = 5,
    eu = 3,
    ed = 1,
    ef = 1,
    e_ = 11,
    ep = 6,
    eh = 8,
    eg = 1,
    em = 1000,
    eE = 50,
    ev = () => !0,
    eb = /(\t|\s)/,
    ey = [],
    eO = (r = n(786074).Z).MENTION_EVERYONE,
    eS = r.MENTION_HERE,
    eI = r.LAUNCHABLE_APPLICATIONS;
function eT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return em * e * (null != t ? t : 1);
}
let eN = [w.sH, w.Zb, Q.d4z.GUILD_CATEGORY];
function eA(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(Y.Z.escape(e), 'i').test(t));
}
function eC(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i, isFullMatch: a } = t,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return es;
            if (!1 === a) {
                let t = i.length / e.length;
                return Math.max(ed, el * t);
            }
            return el;
        }
        if (r.test(e)) return ec;
        if (eA(i, e)) return eu;
        if (s && o()(i, e)) return ed;
    } catch (e) {
        ea.error(e);
    }
    return 0;
}
function eR(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eP(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a } = e,
        s = V.default.getUsers(),
        l = B.Z.getGuildId(),
        c = t.toLocaleLowerCase(),
        u = (0, z.Fv)(c),
        f = [],
        _ = [],
        p = n.length,
        h = 0,
        g = 0;
    for (; h < p; ) {
        var m, E, v, b, y, O, S, I, T;
        let e, r;
        let d = n[h];
        d instanceof P.Z ? ((r = d), (e = null === (E = L.ZP.getNick(l, r.id)) || void 0 === E ? void 0 : E.toLocaleLowerCase())) : ((e = null === (v = d.nick) || void 0 === v ? void 0 : v.toLocaleLowerCase()), (r = s[d.userId]));
        let p = null === (m = q.ZP.getGlobalName(r)) || void 0 === m ? void 0 : m.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, z._I)(n),
                s = (0, z.Fv)(i),
                l = null != e ? (0, z._I)(e) : null,
                d = null != l ? (0, z.Fv)(l) : null,
                h = null != p ? (0, z._I)(p) : null,
                m = null != h ? (0, z.Fv)(h) : null;
            (a && t === r.id) || n.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == p ? void 0 : p.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c
                ? f.push({
                      type: X.h8.USER,
                      record: r,
                      score: es,
                      comparator: null !== (b = null != p ? p : e) && void 0 !== b ? b : n,
                      sortable: null !== (y = null != h ? h : l) && void 0 !== y ? y : i
                  })
                : s.substring(0, u.length) === u || (null == d ? void 0 : d.substring(0, u.length)) === u || (null == m ? void 0 : m.substring(0, u.length)) === u
                  ? f.push({
                        type: X.h8.USER,
                        record: r,
                        score: ed,
                        comparator: null !== (O = null != p ? p : e) && void 0 !== O ? O : n,
                        sortable: null !== (S = null != h ? h : l) && void 0 !== S ? S : i
                    })
                  : g < eE &&
                    (o()(c, i) || o()(u, s) || (null != l && o()(c, l)) || (null != d && o()(u, d)) || (null != h && o()(c, h)) || (null != m && o()(u, m))) &&
                    (_.push({
                        type: X.h8.USER,
                        record: r,
                        score: ed,
                        comparator: null !== (I = null != p ? p : e) && void 0 !== I ? I : n,
                        sortable: null !== (T = null != h ? h : l) && void 0 !== T ? T : i
                    }),
                    (g += 1));
        }
        h += 1;
    }
    return f.sort(d.Z), f.length < r && (_.sort(d.Z), (f = f.concat(_.slice(0, Math.max(0, r - f.length))))), f.length > r && (f.length = r), f;
}
function eD(e) {
    switch (e) {
        case N.MO.STICKER_NAME:
            return e_;
        case N.MO.CORRELATED_EMOJI:
            return ep;
        case N.MO.TAG:
            return eg;
        case N.MO.GUILD_NAME:
        case N.MO.PACK_NAME:
            return eh;
        default:
            return 1;
    }
}
function ew(e, t, n) {
    return e === t || (!!(n || (0, R.Km)(t)) && (e === w.sH ? (0, R.r8)(t) || (0, R.bw)(t) : e === w.Zb && (0, R.bw)(t)));
}
function eL(e, t) {
    return e === w.sH && (0, R.bw)(t);
}
function ex(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(Y.Z.escape(t)), 'i'),
                    containQuery: RegExp(Y.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(Y.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(Y.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function eM(e, t, n) {
    let r = 0,
        i = null;
    for (let o of t) {
        let t = eC(e, o, n);
        t > r && ((r = t), (i = o));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function ek(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null === (r = x.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase();
    }
    return n;
}
function ej(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null === (r = D.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eU(e, t) {
    let n = D.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(M.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => V.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eR(L.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? L.ZP.getMember(r, e.id) : null;
                  return {
                      type: X.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : q.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let eG = {
    queryFriends(e) {
        let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
        return eP({
            query: t,
            members: U.Z.getFriendIDs()
                .map((e) => V.default.getUser(e))
                .filter(Z.lm),
            limit: n,
            filter: i
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: r } = e;
        return eP({
            query: t,
            members: D.Z.getDMUserIds()
                .map((e) => V.default.getUser(e))
                .filter(Z.lm),
            limit: n,
            filter: r
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: r, limit: i = 10, request: o = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, allowSnowflake: s = !1 } = e,
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
                    nick: null !== (t = U.Z.getNickname(e)) && void 0 !== t ? t : null
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
                let e = eU(l.id, i);
                if (e.length > 0) return e;
            }
            (t = L.ZP.getMembers(u.guild_id).filter(eR)), o && H.Z.requestMembers(u.guild_id, r, i);
        }
        return eP({
            query: r,
            members: t,
            limit: i,
            filter: (e) =>
                u.isPrivate() ||
                W.BT({
                    permission: Q.Plq.VIEW_CHANNEL,
                    user: e,
                    context: u
                }),
            allowSnowflake: s
        });
    },
    queryGuildUsers(e) {
        let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, filter: a, allowSnowflake: s } = e;
        if (null == x.Z.getGuild(t)) return [];
        if (0 === n.length && o) {
            let e = eU(G.Z.getChannelId(t), r);
            if (e.length > 0) return e;
        }
        let l = L.ZP.getMembers(t).filter(eR);
        return (
            i && n.length > 0 && H.Z.requestMembers(t, n, r),
            eP({
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
            n && e.length > 0 && H.Z.requestMembers(null, e, t),
            eP({
                query: e,
                members: s()(V.default.getUsers()).values().value(),
                limit: t,
                filter: r
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: r, limit: i = Q.rnv, fuzzy: o = !0, filter: a = ev, type: l = w.sH, allowEmptyQueries: c = !1, requireVocalConnectAccess: u = !0, boosters: _ = {}, allowSnowflake: p } = e,
            h = ex(n, c);
        t =
            null != r
                ? s()(w.ZP.getChannels(r)[l])
                      .map((e) => e.channel)
                      .concat(A.Z.computeAllActiveJoinedThreads(r))
                      .value()
                : s()(D.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(A.Z.computeAllActiveJoinedThreads()).value();
        let g = {},
            m = [];
        for (let e of t) {
            if (!ew(l, e.type, null != r) || ((0, R.Km)(e.type) && !k.Z.can(u ? e.accessPermissions : Q.Plq.VIEW_CHANNEL, e)) || !a(e)) continue;
            let t = [...h],
                i = e.name.toLocaleLowerCase(),
                s = p && n === e.id,
                c = s ? es : eM(i, t, o);
            if (0 !== c) {
                if (t.length > 0) {
                    for (let n of [ek(e, g), ej(e, g)]) {
                        if (null == n || '' === n) continue;
                        let e = eM(n, t, !1);
                        0 !== e && (c += 0.5 * e);
                    }
                    c = Math.min(el - ed, c);
                }
                if (0 === c || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !s)) continue;
                eL(l, e.type) && (c = Math.max(c - ef, ed / 2)),
                    m.push({
                        type: (0, R.bw)(e.type) ? X.h8.VOICE_CHANNEL : X.h8.TEXT_CHANNEL,
                        record: e,
                        score: eT(c, _[e.id]),
                        comparator: (0, f.F6)(e, V.default, U.Z),
                        sortable: i
                    });
            }
        }
        return m.sort(d.Z), null != i && m.length > i && (m.length = i), m;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ev, boosters: o = {} } = e,
            a = '' === t ? '' : t.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(a)), 'i'),
                containQuery: RegExp(Y.Z.escape(a), 'i'),
                queryLower: a
            },
            c = [];
        for (let e of s()(x.Z.getGuilds()).values().value()) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eC(t, l, r);
            n > 0 &&
                c.push({
                    type: X.h8.GUILD,
                    record: e,
                    score: eT(n, o[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return c.sort(d.Z), c.length > n && (c.length = n), c;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ev, boosters: o = {} } = e,
            a = (0, z._I)((0, z.Fv)(t.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(a)), 'i'),
                containQuery: RegExp(Y.Z.escape(a), 'i'),
                queryLower: a
            },
            c = s()(D.Z.getMutablePrivateChannels()).values().value(),
            u = [];
        for (let e of c) {
            if (!e.isMultiUserDM() || !i(e)) continue;
            let t = (0, f.F6)(e, V.default, U.Z).toLocaleLowerCase(),
                n = (0, z._I)((0, z.Fv)(t)),
                a = eC(n, l, r);
            a > 0 &&
                u.push({
                    type: X.h8.GROUP_DM,
                    record: e,
                    score: eT(a, o[e.id]),
                    comparator: (0, f.F6)(e, V.default, U.Z),
                    sortable: n
                });
        }
        return u.sort(d.Z), u.length > n && (u.length = n), u;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ev } = e,
            o = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(o)), 'i'),
                containQuery: RegExp(Y.Z.escape(o), 'i'),
                queryLower: o
            },
            s = eI(),
            l = [];
        for (let { application: e } of s) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eC(t, a, r);
            n > 0 &&
                l.push({
                    type: X.h8.APPLICATION,
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
                exactQuery: RegExp('^'.concat(Y.Z.escape(i)), 'i'),
                containQuery: RegExp(Y.Z.escape(i), 'i'),
                queryLower: i
            },
            s = {
                [u.Ky.SHOP]: [$.NW.string($.t.pWG4zc)],
                [u.Ky.NITRO_HOME]: [$.NW.string($.t.Ipxkoq)],
                [u.Ky.QUEST_HOME]: [$.NW.string($.t.JALI2N)],
                [u.Ky.APPS_HOME]: [$.NW.string($.t.PHjkRE), $.NW.string($.t.AKcFUl)]
            },
            l = [];
        for (let e in s) {
            let t = u.Ky[e],
                n = s[t];
            if (null != n)
                for (let e of n) {
                    let n = e.toLocaleLowerCase(),
                        i = eC(n, o, r);
                    i > 0 &&
                        l.push({
                            type: X.h8.IN_APP_NAVIGATION,
                            record: u.FL.fromType(t),
                            score: eT(i),
                            comparator: n,
                            sortable: n
                        });
                }
        }
        return (
            ei.getState().options.forEach((e) => {
                var t;
                let n = [e.title].concat(e.searchableTitles),
                    i = null !== (t = (0, a.max)(n.map((e) => eT(eC(e.toLocaleLowerCase(), o, r))))) && void 0 !== t ? t : 0;
                i > 0 &&
                    l.push({
                        type: X.h8.IN_APP_NAVIGATION,
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
                exactQuery: RegExp('^'.concat(Y.Z.escape(o)), 'i'),
                containQuery: RegExp(Y.Z.escape(o), 'i'),
                queryLower: o
            },
            l = s()(F.Z.getSKUs()).values().value(),
            c = [];
        for (let e of l)
            if (e.type === Q.epS.DURABLE_PRIMARY && i(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = eC(t, a, r);
                n > 0 &&
                    c.push({
                        type: X.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return c.sort(d.Z), c.length > n && (c.length = n), c;
    },
    getRecentlyTalked: eU,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: a = !0, canMentionRoles: c = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: d = !1, checkRecentlyTalkedOnEmptyQuery: f = !0, limit: _ = Q.rnv, request: p, allowSnowflake: h = !1 } = e,
            g = a
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
                          nick: L.ZP.getNick(n.guild_id, t.id),
                          status: j.Z.getStatus(t.id)
                      };
                  })
                : [],
            m = g.length,
            E = t.toLowerCase(),
            v = [];
        if (m < _ && c) {
            let e = n.getGuildId(),
                i = x.Z.getGuild(e);
            if (null != i) {
                let n = s()(x.Z.getRoles(i.id))
                    .filter((t) => {
                        let { mentionable: n, name: i, id: a } = t;
                        return (n || r || d) && (o()(E, i.toLowerCase()) || (h && E === a)) && a !== K.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .value();
                (v = (0, l.Lu)(n, t, { keys: ['name'] }).slice(0, _ - m)), (m += v.length);
            }
        }
        let b = [];
        return (
            !n.isPrivate() && r && c && (m < _ && o()(E, eO().test) && (b.push(eO()), (m += 1)), i && m < _ && o()(E, eS().test) && b.push(eS())),
            {
                users: g,
                globals: b,
                roles: v
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: a = !0, canMentionNonMentionableRoles: l = !1 } = e,
            c = i
                ? this.queryGuildUsers({
                      guildId: n,
                      query: t
                  }).map((e) => er(et({}, e), { status: j.Z.getStatus(e.record.id) }))
                : [],
            u = c.length,
            d = t.toLowerCase(),
            f = [];
        if (u < Q.rnv && a) {
            let e = x.Z.getGuild(n);
            null != e &&
                (s()(x.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: i, id: a } = e;
                        return (t || r || l) && o()(d, i.toLowerCase()) && (0, _.Gy)(n, a);
                    })
                    .take(Q.rnv - u)
                    .forEach((e) => {
                        f.push(e);
                    }),
                (u += f.length));
        }
        let p = [];
        return (
            r && a && (u < Q.rnv && o()(d, eO().test) && (p.push(eO()), (u += 1)), u < Q.rnv && o()(d, eS().test) && p.push(eS())),
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
            a = RegExp('^'.concat(Y.Z.escape(o)), 'i'),
            l = RegExp(Y.Z.escape(o), 'i'),
            c = s()(n)
                .map((e, t) => {
                    let n = eC(
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
                .filter(Z.lm)
                .sortBy((e) => -1 * e.score);
        return null !== r && (c = c.take(r)), c.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            r = t.toLocaleLowerCase(),
            i = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(r)), 'i'),
                containQuery: RegExp(Y.Z.escape(r), 'i'),
                queryLower: r
            },
            o = (0, E.s)(n.id) && !n.hasFeature(Q.oNc.HUB),
            a = n.hasFeature(Q.oNc.COMMUNITY),
            s = (0, m.t)(n) && n.hasFeature(Q.oNc.COMMUNITY),
            l = [
                {
                    id: J.HY.SERVER_GUIDE,
                    name: $.NW.string($.t.VbpLyc)
                },
                {
                    id: J.HY.CHANNEL_BROWSER,
                    name: $.NW.string($.t.et6wam)
                },
                {
                    id: J.HY.CUSTOMIZE_COMMUNITY,
                    name: $.NW.string($.t.h9mGOD)
                }
            ],
            c = [];
        for (let e of l)
            (e.id !== J.HY.SERVER_GUIDE || o) &&
                (e.id !== J.HY.CHANNEL_BROWSER || a) &&
                (e.id !== J.HY.CUSTOMIZE_COMMUNITY || s) &&
                eC(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                c.push(
                    new R.nl({
                        id: e.id,
                        name: e.name,
                        type: Q.d4z.UNKNOWN,
                        guild_id: n.id
                    })
                );
        return c;
    },
    queryChannelResults(e) {
        let { query: t, channel: n, type: r = w.sH, channelTypes: i } = e;
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
        let { query: t, channel: n, channelTypes: r, limit: i = Q.rnv, allowSnowflake: o } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
        }
        let a = [];
        for (let e of eN)
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
        let { query: t, channel: n, intention: r, maxCount: i = Q.rnv, matchComparator: o } = e;
        return (
            C.DZ.loadIfNecessary(),
            {
                emojis: g.ZP.searchWithoutFetchingLatest({
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
                c = (0, z._I)(e),
                u = RegExp('^'.concat(Y.Z.escape(c)), 'i'),
                d = RegExp(''.concat(Y.Z.escape(c)), 'i');
            i.forEach((i, s) => {
                let c = 0,
                    f = null,
                    _ = T.Z.getStickerById(s);
                if (null == _ || !r(_, (0, S.cO)(_, o, n))) return;
                for (let n of i) {
                    let { type: r, value: i } = n,
                        o = eD(r),
                        a = 0;
                    t ? (i === e ? (a = es * o) : u.test(i) ? (a = el * o) : (r === N.MO.GUILD_NAME || r === N.MO.PACK_NAME || r === N.MO.STICKER_NAME) && d.test(i) && (a = ec * o)) : i === e && ((a = es * o), (f = i)), a > c && ((c = a), (f = i));
                }
                let p = I.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
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
                    .value()).length && (l = ey),
            l
        );
    },
    querySoundmoji(e, t) {
        let n = V.default.getCurrentUser();
        y.Z.isFetching() || y.Z.hasFetchedAllSounds() || (0, b.w)(), C.DZ.loadIfNecessary();
        let r = Array.from(y.Z.getSounds().values()).reduce(
            (e, n) => (
                n.forEach((n) => {
                    (0, v.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                }),
                e
            ),
            []
        );
        return (0, O.cK)(e, r, n, t);
    },
    matchSentinel: (e, t, n) => !eb.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = x.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? x.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};

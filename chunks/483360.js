let r;
n.d(t, {
    ZP: () => eU,
    gF: () => ei,
    k1: () => eT
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
    l = n(5907),
    c = n(815372),
    u = n(620490),
    d = n(933557),
    f = n(605436),
    p = n(565924),
    _ = n(710845),
    h = n(339085),
    m = n(31445),
    g = n(931261),
    E = n(277078),
    v = n(208049),
    b = n(763296),
    y = n(421673),
    O = n(285651),
    S = n(822179),
    I = n(926491),
    T = n(373228),
    N = n(601070),
    A = n(675478),
    C = n(131704),
    R = n(598077),
    P = n(592125),
    w = n(984933),
    D = n(271383),
    x = n(430824),
    L = n(375954),
    M = n(496675),
    k = n(158776),
    j = n(699516),
    U = n(944486),
    G = n(914010),
    B = n(594174),
    Z = n(55563),
    F = n(823379),
    V = n(892880),
    H = n(700785),
    W = n(226951),
    Y = n(709054),
    K = n(624138),
    z = n(51144),
    q = n(981631),
    Q = n(727785),
    X = n(176505),
    J = n(388032);
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
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
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : et(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let er = (0, l.M)(() => ({ options: [] }));
function ei(e) {
    er.setState({ options: e });
}
let eo = new _.Z('AutocompleteUtils'),
    ea = 10,
    es = 7,
    el = 5,
    ec = 3,
    eu = 1,
    ed = 1,
    ef = 11,
    ep = 6,
    e_ = 8,
    eh = 1,
    em = 1000,
    eg = 50,
    eE = () => !0,
    ev = /(\t|\s)/,
    eb = [],
    ey = (r = n(786074).Z).MENTION_EVERYONE,
    eO = r.MENTION_HERE,
    eS = r.LAUNCHABLE_APPLICATIONS;
function eI() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return em * e * (null != t ? t : 1);
}
let eT = [w.sH, w.Zb, q.d4z.GUILD_CATEGORY];
function eN(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(W.Z.escape(e), 'i').test(t));
}
function eA(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i, isFullMatch: a } = t,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return ea;
            if (!1 === a) {
                let t = i.length / e.length;
                return Math.max(eu, es * t);
            }
            return es;
        }
        if (r.test(e)) return el;
        if (eN(i, e)) return ec;
        if (s && o()(i, e)) return eu;
    } catch (e) {
        eo.error(e);
    }
    return 0;
}
function eC(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eR(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a } = e,
        s = B.default.getUsers(),
        l = G.Z.getGuildId(),
        c = t.toLocaleLowerCase(),
        d = (0, K.Fv)(c),
        f = [],
        p = [],
        _ = n.length,
        h = 0,
        m = 0;
    for (; h < _; ) {
        var g, E, v, b, y, O, S, I, T;
        let e, r;
        let u = n[h];
        u instanceof R.Z ? ((r = u), (e = null === (E = D.ZP.getNick(l, r.id)) || void 0 === E ? void 0 : E.toLocaleLowerCase())) : ((e = null === (v = u.nick) || void 0 === v ? void 0 : v.toLocaleLowerCase()), (r = s[u.userId]));
        let _ = null === (g = z.ZP.getGlobalName(r)) || void 0 === g ? void 0 : g.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, K._I)(n),
                s = (0, K.Fv)(i),
                l = null != e ? (0, K._I)(e) : null,
                u = null != l ? (0, K.Fv)(l) : null,
                h = null != _ ? (0, K._I)(_) : null,
                g = null != h ? (0, K.Fv)(h) : null;
            (a && t === r.id) || n.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == _ ? void 0 : _.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c
                ? f.push({
                      type: Q.h8.USER,
                      record: r,
                      score: ea,
                      comparator: null !== (b = null != _ ? _ : e) && void 0 !== b ? b : n,
                      sortable: null !== (y = null != h ? h : l) && void 0 !== y ? y : i
                  })
                : s.substring(0, d.length) === d || (null == u ? void 0 : u.substring(0, d.length)) === d || (null == g ? void 0 : g.substring(0, d.length)) === d
                  ? f.push({
                        type: Q.h8.USER,
                        record: r,
                        score: eu,
                        comparator: null !== (O = null != _ ? _ : e) && void 0 !== O ? O : n,
                        sortable: null !== (S = null != h ? h : l) && void 0 !== S ? S : i
                    })
                  : m < eg &&
                    (o()(c, i) || o()(d, s) || (null != l && o()(c, l)) || (null != u && o()(d, u)) || (null != h && o()(c, h)) || (null != g && o()(d, g))) &&
                    (p.push({
                        type: Q.h8.USER,
                        record: r,
                        score: eu,
                        comparator: null !== (I = null != _ ? _ : e) && void 0 !== I ? I : n,
                        sortable: null !== (T = null != h ? h : l) && void 0 !== T ? T : i
                    }),
                    (m += 1));
        }
        h += 1;
    }
    return f.sort(u.Z), f.length < r && (p.sort(u.Z), (f = f.concat(p.slice(0, Math.max(0, r - f.length))))), f.length > r && (f.length = r), f;
}
function eP(e) {
    switch (e) {
        case T.MO.STICKER_NAME:
            return ef;
        case T.MO.CORRELATED_EMOJI:
            return ep;
        case T.MO.TAG:
            return eh;
        case T.MO.GUILD_NAME:
        case T.MO.PACK_NAME:
            return e_;
        default:
            return 1;
    }
}
function ew(e, t, n) {
    return e === t || (!!(n || (0, C.Km)(t)) && (e === w.sH ? (0, C.r8)(t) || (0, C.bw)(t) : e === w.Zb && (0, C.bw)(t)));
}
function eD(e, t) {
    return e === w.sH && (0, C.bw)(t);
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
                    exactQuery: RegExp('^'.concat(W.Z.escape(t)), 'i'),
                    containQuery: RegExp(W.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(W.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(W.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function eL(e, t, n) {
    let r = 0,
        i = null;
    for (let o of t) {
        let t = eA(e, o, n);
        t > r && ((r = t), (i = o));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eM(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null === (r = x.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase();
    }
    return n;
}
function ek(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null === (r = P.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function ej(e, t) {
    let n = P.Z.getChannel(e);
    return null == e || null == n
        ? []
        : s()(L.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => B.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eC(D.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? D.ZP.getMember(r, e.id) : null;
                  return {
                      type: Q.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : z.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let eU = {
    queryFriends(e) {
        let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
        return eR({
            query: t,
            members: j.Z.getFriendIDs()
                .map((e) => B.default.getUser(e))
                .filter(F.lm),
            limit: n,
            filter: i
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: r } = e;
        return eR({
            query: t,
            members: P.Z.getDMUserIds()
                .map((e) => B.default.getUser(e))
                .filter(F.lm),
            limit: n,
            filter: r
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: r, limit: i = 10, request: o = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, allowSnowflake: s = !1 } = e,
            l = P.Z.getChannel(n);
        if (null == l) return [];
        let c = l.isThread() ? P.Z.getChannel(l.parent_id) : null,
            u = null != c ? c : l;
        if (null == u) return [];
        if (u.isPrivate()) {
            t = u.recipients.map((e) => {
                var t;
                return {
                    userId: e,
                    nick: null !== (t = j.Z.getNickname(e)) && void 0 !== t ? t : null
                };
            });
            let e = B.default.getCurrentUser();
            null != e &&
                t.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === r.length && a) {
                let e = ej(l.id, i);
                if (e.length > 0) return e;
            }
            (t = D.ZP.getMembers(u.guild_id).filter(eC)), o && V.Z.requestMembers(u.guild_id, r, i);
        }
        return eR({
            query: r,
            members: t,
            limit: i,
            filter: (e) =>
                u.isPrivate() ||
                H.BT({
                    permission: q.Plq.VIEW_CHANNEL,
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
            let e = ej(U.Z.getChannelId(t), r);
            if (e.length > 0) return e;
        }
        let l = D.ZP.getMembers(t).filter(eC);
        return (
            i && n.length > 0 && V.Z.requestMembers(t, n, r),
            eR({
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
            n && e.length > 0 && V.Z.requestMembers(null, e, t),
            eR({
                query: e,
                members: s()(B.default.getUsers()).values().value(),
                limit: t,
                filter: r
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: r, limit: i = q.rnv, fuzzy: o = !0, filter: a = eE, type: l = w.sH, allowEmptyQueries: c = !1, requireVocalConnectAccess: f = !0, boosters: p = {}, allowSnowflake: _ } = e,
            h = ex(n, c);
        t =
            null != r
                ? s()(w.ZP.getChannels(r)[l])
                      .map((e) => e.channel)
                      .concat(N.Z.computeAllActiveJoinedThreads(r))
                      .value()
                : s()(P.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(N.Z.computeAllActiveJoinedThreads()).value();
        let m = {},
            g = [];
        for (let e of t) {
            if (!ew(l, e.type, null != r) || ((0, C.Km)(e.type) && !M.Z.can(f ? e.accessPermissions : q.Plq.VIEW_CHANNEL, e)) || !a(e)) continue;
            let t = [...h],
                i = e.name.toLocaleLowerCase(),
                s = _ && n === e.id,
                c = s ? ea : eL(i, t, o);
            if (0 !== c) {
                if (t.length > 0) {
                    for (let n of [eM(e, m), ek(e, m)]) {
                        if (null == n || '' === n) continue;
                        let e = eL(n, t, !1);
                        0 !== e && (c += 0.5 * e);
                    }
                    c = Math.min(es - eu, c);
                }
                if (0 === c || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !s)) continue;
                eD(l, e.type) && (c = Math.max(c - ed, eu / 2)),
                    g.push({
                        type: (0, C.bw)(e.type) ? Q.h8.VOICE_CHANNEL : Q.h8.TEXT_CHANNEL,
                        record: e,
                        score: eI(c, p[e.id]),
                        comparator: (0, d.F6)(e, B.default, j.Z),
                        sortable: i
                    });
            }
        }
        return g.sort(u.Z), null != i && g.length > i && (g.length = i), g;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eE, boosters: o = {} } = e,
            a = '' === t ? '' : t.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(W.Z.escape(a)), 'i'),
                containQuery: RegExp(W.Z.escape(a), 'i'),
                queryLower: a
            },
            c = [];
        for (let e of s()(x.Z.getGuilds()).values().value()) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eA(t, l, r);
            n > 0 &&
                c.push({
                    type: Q.h8.GUILD,
                    record: e,
                    score: eI(n, o[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eE, boosters: o = {} } = e,
            a = (0, K._I)((0, K.Fv)(t.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(W.Z.escape(a)), 'i'),
                containQuery: RegExp(W.Z.escape(a), 'i'),
                queryLower: a
            },
            c = s()(P.Z.getMutablePrivateChannels()).values().value(),
            f = [];
        for (let e of c) {
            if (!e.isMultiUserDM() || !i(e)) continue;
            let t = (0, d.F6)(e, B.default, j.Z).toLocaleLowerCase(),
                n = (0, K._I)((0, K.Fv)(t)),
                a = eA(n, l, r);
            a > 0 &&
                f.push({
                    type: Q.h8.GROUP_DM,
                    record: e,
                    score: eI(a, o[e.id]),
                    comparator: (0, d.F6)(e, B.default, j.Z),
                    sortable: n
                });
        }
        return f.sort(u.Z), f.length > n && (f.length = n), f;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eE } = e,
            o = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(W.Z.escape(o)), 'i'),
                containQuery: RegExp(W.Z.escape(o), 'i'),
                queryLower: o
            },
            s = eS(),
            l = [];
        for (let { application: e } of s) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eA(t, a, r);
            n > 0 &&
                l.push({
                    type: Q.h8.APPLICATION,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                });
        }
        return l.sort(u.Z), l.length > n && (l.length = n), l;
    },
    queryInAppNavigations(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
            i = t.toLocaleLowerCase(),
            o = {
                exactQuery: RegExp('^'.concat(W.Z.escape(i)), 'i'),
                containQuery: RegExp(W.Z.escape(i), 'i'),
                queryLower: i
            },
            s = {
                [c.Ky.SHOP]: [J.NW.string(J.t.pWG4zc)],
                [c.Ky.NITRO_HOME]: [J.NW.string(J.t.Ipxkoq)],
                [c.Ky.QUEST_HOME]: [J.NW.string(J.t.JALI2N)],
                [c.Ky.APPS_HOME]: [J.NW.string(J.t.PHjkRE), J.NW.string(J.t.AKcFUl)]
            },
            l = [];
        for (let e in s) {
            let t = c.Ky[e],
                n = s[t];
            if (null != n)
                for (let e of n) {
                    let n = e.toLocaleLowerCase(),
                        i = eA(n, o, r);
                    i > 0 &&
                        l.push({
                            type: Q.h8.IN_APP_NAVIGATION,
                            record: c.FL.fromType(t),
                            score: eI(i),
                            comparator: n,
                            sortable: n
                        });
                }
        }
        return (
            er.getState().options.forEach((e) => {
                var t;
                let n = [e.title].concat(e.searchableTitles),
                    i = null !== (t = (0, a.max)(n.map((e) => eI(eA(e.toLocaleLowerCase(), o, r))))) && void 0 !== t ? t : 0;
                i > 0 &&
                    l.push({
                        type: Q.h8.IN_APP_NAVIGATION,
                        record: c.FL.fromType(c.Ky.SETTINGS, e.path, e.title),
                        score: i,
                        comparator: e.title.toLocaleLowerCase(),
                        sortable: e.title.toLocaleLowerCase()
                    });
            }),
            l.sort(u.Z),
            l.length > n && (l.length = n),
            l
        );
    },
    querySKUs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = eE } = e,
            o = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(W.Z.escape(o)), 'i'),
                containQuery: RegExp(W.Z.escape(o), 'i'),
                queryLower: o
            },
            l = s()(Z.Z.getSKUs()).values().value(),
            c = [];
        for (let e of l)
            if (e.type === q.epS.DURABLE_PRIMARY && i(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = eA(t, a, r);
                n > 0 &&
                    c.push({
                        type: Q.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    getRecentlyTalked: ej,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: a = !0, canMentionRoles: l = !0, includeAllGuildUsers: c = !1, includeNonMentionableRoles: u = !1, checkRecentlyTalkedOnEmptyQuery: d = !0, limit: f = q.rnv, request: p, allowSnowflake: _ = !1 } = e,
            h = a
                ? (c && null != n.guild_id
                      ? this.queryGuildUsers({
                            guildId: n.guild_id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            request: p,
                            allowSnowflake: _
                        })
                      : this.queryChannelUsers({
                            channelId: n.id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            allowSnowflake: _
                        })
                  ).map((e) => {
                      let { record: t, score: r, comparator: i } = e;
                      return {
                          user: t,
                          score: r,
                          comparator: i,
                          nick: D.ZP.getNick(n.guild_id, t.id),
                          status: k.Z.getStatus(t.id)
                      };
                  })
                : [],
            m = h.length,
            g = t.toLowerCase(),
            E = [];
        if (m < f && l) {
            let e = n.getGuildId(),
                t = x.Z.getGuild(e);
            null != t &&
                (s()(x.Z.getRoles(t.id))
                    .filter((t) => {
                        let { mentionable: n, name: i, id: a } = t;
                        return (n || r || u) && (o()(g, i.toLowerCase()) || (_ && g === a)) && a !== Y.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(f - m)
                    .forEach((e) => {
                        E.push(e);
                    }),
                (m += E.length));
        }
        let v = [];
        return (
            !n.isPrivate() && r && l && (m < f && o()(g, ey().test) && (v.push(ey()), (m += 1)), i && m < f && o()(g, eO().test) && v.push(eO())),
            {
                users: h,
                globals: v,
                roles: E
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: a = !0, canMentionNonMentionableRoles: l = !1 } = e,
            c = i
                ? this.queryGuildUsers({
                      guildId: n,
                      query: t
                  }).map((e) => en(ee({}, e), { status: k.Z.getStatus(e.record.id) }))
                : [],
            u = c.length,
            d = t.toLowerCase(),
            p = [];
        if (u < q.rnv && a) {
            let e = x.Z.getGuild(n);
            null != e &&
                (s()(x.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: i, id: a } = e;
                        return (t || r || l) && o()(d, i.toLowerCase()) && (0, f.Gy)(n, a);
                    })
                    .take(q.rnv - u)
                    .forEach((e) => {
                        p.push(e);
                    }),
                (u += p.length));
        }
        let _ = [];
        return (
            r && a && (u < q.rnv && o()(d, ey().test) && (_.push(ey()), (u += 1)), u < q.rnv && o()(d, eO().test) && _.push(eO())),
            {
                users: c,
                globals: _,
                roles: p
            }
        );
    },
    queryChoice(e) {
        let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
            o = t.toLocaleLowerCase(),
            a = RegExp('^'.concat(W.Z.escape(o)), 'i'),
            l = RegExp(W.Z.escape(o), 'i'),
            c = s()(n)
                .map((e, t) => {
                    let n = eA(
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
                .filter(F.lm)
                .sortBy((e) => -1 * e.score);
        return null !== r && (c = c.take(r)), c.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            r = t.toLocaleLowerCase(),
            i = {
                exactQuery: RegExp('^'.concat(W.Z.escape(r)), 'i'),
                containQuery: RegExp(W.Z.escape(r), 'i'),
                queryLower: r
            },
            o = (0, g.s)(n.id) && !n.hasFeature(q.oNc.HUB),
            a = n.hasFeature(q.oNc.COMMUNITY),
            s = (0, m.t)(n) && n.hasFeature(q.oNc.COMMUNITY),
            l = [
                {
                    id: X.HY.SERVER_GUIDE,
                    name: J.NW.string(J.t.VbpLyc)
                },
                {
                    id: X.HY.CHANNEL_BROWSER,
                    name: J.NW.string(J.t.et6wam)
                },
                {
                    id: X.HY.CUSTOMIZE_COMMUNITY,
                    name: J.NW.string(J.t.h9mGOD)
                }
            ],
            c = [];
        for (let e of l)
            (e.id !== X.HY.SERVER_GUIDE || o) &&
                (e.id !== X.HY.CHANNEL_BROWSER || a) &&
                (e.id !== X.HY.CUSTOMIZE_COMMUNITY || s) &&
                eA(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                c.push(
                    new C.nl({
                        id: e.id,
                        name: e.name,
                        type: q.d4z.UNKNOWN,
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
        let { query: t, channel: n, channelTypes: r, limit: i = q.rnv, allowSnowflake: o } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
        }
        let a = [];
        for (let e of eT)
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
        let { query: t, channel: n, intention: r, maxCount: i = q.rnv, matchComparator: o } = e;
        return (
            A.DZ.loadIfNecessary(),
            {
                emojis: h.ZP.searchWithoutFetchingLatest({
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
            [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eE],
            { stickerMetadata: i } = I.Z,
            o = B.default.getCurrentUser(),
            a = new Set(),
            l = [];
        for (let s of (A.DZ.loadIfNecessary(), e)) {
            if ('' === s) continue;
            let e = s.toLocaleLowerCase(),
                c = (0, K._I)(e),
                u = RegExp('^'.concat(W.Z.escape(c)), 'i'),
                d = RegExp(''.concat(W.Z.escape(c)), 'i');
            i.forEach((i, s) => {
                let c = 0,
                    f = null,
                    p = I.Z.getStickerById(s);
                if (null == p || !r(p, (0, O.cO)(p, o, n))) return;
                for (let n of i) {
                    let { type: r, value: i } = n,
                        o = eP(r),
                        a = 0;
                    t ? (i === e ? (a = ea * o) : u.test(i) ? (a = es * o) : (r === T.MO.GUILD_NAME || r === T.MO.PACK_NAME || r === T.MO.STICKER_NAME) && d.test(i) && (a = el * o)) : i === e && ((a = ea * o), (f = i)), a > c && ((c = a), (f = i));
                }
                let _ = S.Z.stickerFrecencyWithoutFetchingLatest.getScore(s);
                null != _ && (c *= _ / 100),
                    c > 0 &&
                        null != f &&
                        !a.has(p.id) &&
                        (a.add(p.id),
                        l.push({
                            sticker: p,
                            comparator: f,
                            score: c
                        }));
            });
        }
        return (
            0 ===
                (l = s()(l)
                    .sortBy((e) => -1 * e.score)
                    .value()).length && (l = eb),
            l
        );
    },
    querySoundmoji(e, t) {
        let n = B.default.getCurrentUser();
        b.Z.isFetching() || b.Z.hasFetchedAllSounds() || (0, v.w)(), A.DZ.loadIfNecessary();
        let r = Array.from(b.Z.getSounds().values()).reduce(
            (e, n) => (
                n.forEach((n) => {
                    (0, E.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                }),
                e
            ),
            []
        );
        return (0, y.cK)(e, r, n, t);
    },
    matchSentinel: (e, t, n) => !ev.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = x.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? x.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};

let i;
n.d(t, {
    ZP: () => ew,
    gF: () => ee,
    k1: () => eI
}),
    n(653041),
    n(733860),
    n(757143),
    n(47120),
    n(724458);
var r = n(658722),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(5907),
    u = n(815372),
    c = n(620490),
    d = n(933557),
    f = n(605436),
    _ = n(565924),
    p = n(710845),
    h = n(339085),
    m = n(31445),
    g = n(931261),
    E = n(277078),
    v = n(208049),
    y = n(763296),
    I = n(421673),
    T = n(285651),
    b = n(822179),
    S = n(926491),
    A = n(373228),
    N = n(601070),
    C = n(675478),
    R = n(131704),
    O = n(598077),
    D = n(592125),
    L = n(984933),
    x = n(271383),
    P = n(430824),
    w = n(375954),
    M = n(496675),
    k = n(158776),
    U = n(699516),
    G = n(944486),
    B = n(914010),
    Z = n(594174),
    F = n(55563),
    V = n(823379),
    j = n(892880),
    H = n(700785),
    Y = n(226951),
    W = n(709054),
    K = n(624138),
    z = n(51144),
    q = n(981631),
    Q = n(727785),
    X = n(176505),
    J = n(388032);
let $ = (0, l.M)(() => ({ options: [] }));
function ee(e) {
    $.setState({ options: e });
}
let et = new p.Z('AutocompleteUtils'),
    en = 10,
    ei = 7,
    er = 5,
    ea = 3,
    es = 1,
    eo = 1,
    el = 11,
    eu = 6,
    ec = 8,
    ed = 1,
    ef = 1000,
    e_ = 50,
    ep = () => !0,
    eh = /(\t|\s)/,
    em = [],
    eg = (i = n(786074).Z).MENTION_EVERYONE,
    eE = i.MENTION_HERE,
    ev = i.LAUNCHABLE_APPLICATIONS;
function ey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return ef * e * (null != t ? t : 1);
}
let eI = [L.sH, L.Zb, q.d4z.GUILD_CATEGORY];
function eT(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(Y.Z.escape(e), 'i').test(t));
}
function eb(e, t) {
    let { exactQuery: n, containQuery: i, queryLower: r, isFullMatch: s } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === r) return en;
            if (!1 === s) {
                let t = r.length / e.length;
                return Math.max(es, ei * t);
            }
            return ei;
        }
        if (i.test(e)) return er;
        if (eT(r, e)) return ea;
        if (o && a()(r, e)) return es;
    } catch (e) {
        et.error(e);
    }
    return 0;
}
function eS(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eA(e) {
    let { query: t, members: n, limit: i, filter: r, allowSnowflake: s } = e,
        o = Z.default.getUsers(),
        l = B.Z.getGuildId(),
        u = t.toLocaleLowerCase(),
        d = (0, K.Fv)(u),
        f = [],
        _ = [],
        p = n.length,
        h = 0,
        m = 0;
    for (; h < p; ) {
        var g, E, v, y, I, T, b, S, A;
        let e, i;
        let c = n[h];
        c instanceof O.Z ? ((i = c), (e = null === (E = x.ZP.getNick(l, i.id)) || void 0 === E ? void 0 : E.toLocaleLowerCase())) : ((e = null === (v = c.nick) || void 0 === v ? void 0 : v.toLocaleLowerCase()), (i = o[c.userId]));
        let p = null === (g = z.ZP.getGlobalName(i)) || void 0 === g ? void 0 : g.toLocaleLowerCase();
        if (null != i && (null == r || r(i))) {
            let n = i.username.toLocaleLowerCase(),
                r = (0, K._I)(n),
                o = (0, K.Fv)(r),
                l = null != e ? (0, K._I)(e) : null,
                c = null != l ? (0, K.Fv)(l) : null,
                h = null != p ? (0, K._I)(p) : null,
                g = null != h ? (0, K.Fv)(h) : null;
            (s && t === i.id) || n.substring(0, u.length) === u || r.substring(0, u.length) === u || (null == e ? void 0 : e.substring(0, u.length)) === u || (null == l ? void 0 : l.substring(0, u.length)) === u || (null == p ? void 0 : p.substring(0, u.length)) === u || (null == h ? void 0 : h.substring(0, u.length)) === u
                ? f.push({
                      type: Q.h8.USER,
                      record: i,
                      score: en,
                      comparator: null !== (y = null != p ? p : e) && void 0 !== y ? y : n,
                      sortable: null !== (I = null != h ? h : l) && void 0 !== I ? I : r
                  })
                : o.substring(0, d.length) === d || (null == c ? void 0 : c.substring(0, d.length)) === d || (null == g ? void 0 : g.substring(0, d.length)) === d
                  ? f.push({
                        type: Q.h8.USER,
                        record: i,
                        score: es,
                        comparator: null !== (T = null != p ? p : e) && void 0 !== T ? T : n,
                        sortable: null !== (b = null != h ? h : l) && void 0 !== b ? b : r
                    })
                  : m < e_ &&
                    (a()(u, r) || a()(d, o) || (null != l && a()(u, l)) || (null != c && a()(d, c)) || (null != h && a()(u, h)) || (null != g && a()(d, g))) &&
                    (_.push({
                        type: Q.h8.USER,
                        record: i,
                        score: es,
                        comparator: null !== (S = null != p ? p : e) && void 0 !== S ? S : n,
                        sortable: null !== (A = null != h ? h : l) && void 0 !== A ? A : r
                    }),
                    (m += 1));
        }
        h += 1;
    }
    return f.sort(c.Z), f.length < i && (_.sort(c.Z), (f = f.concat(_.slice(0, Math.max(0, i - f.length))))), f.length > i && (f.length = i), f;
}
function eN(e) {
    switch (e) {
        case A.MO.STICKER_NAME:
            return el;
        case A.MO.CORRELATED_EMOJI:
            return eu;
        case A.MO.TAG:
            return ed;
        case A.MO.GUILD_NAME:
        case A.MO.PACK_NAME:
            return ec;
        default:
            return 1;
    }
}
function eC(e, t, n) {
    return e === t || (!!(n || (0, R.Km)(t)) && (e === L.sH ? (0, R.r8)(t) || (0, R.bw)(t) : e === L.Zb && (0, R.bw)(t)));
}
function eR(e, t) {
    return e === L.sH && (0, R.bw)(t);
}
function eO(e) {
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
function eD(e, t, n) {
    let i = 0,
        r = null;
    for (let a of t) {
        let t = eb(e, a, n);
        t > i && ((i = t), (r = a));
    }
    return null != r && (r.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(r), 1)), i;
}
function eL(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var i;
        n = t[e.guild_id] = null === (i = P.Z.getGuild(e.guild_id)) || void 0 === i ? void 0 : i.toString().toLocaleLowerCase();
    }
    return n;
}
function ex(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var i;
        n = t[e.parent_id] = null === (i = D.Z.getChannel(e.parent_id)) || void 0 === i ? void 0 : i.name.toLocaleLowerCase();
    }
    return n;
}
function eP(e, t) {
    let n = D.Z.getChannel(e);
    return null == e || null == n
        ? []
        : o()(w.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Z.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eS(x.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let i = n.getGuildId(),
                      r = null != i ? x.ZP.getMember(i, e.id) : null;
                  return {
                      type: Q.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : z.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let ew = {
    queryFriends(e) {
        let { query: t, limit: n = 10, _fuzzy: i = !0, filter: r } = e;
        return eA({
            query: t,
            members: U.Z.getFriendIDs()
                .map((e) => Z.default.getUser(e))
                .filter(V.lm),
            limit: n,
            filter: r
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: i } = e;
        return eA({
            query: t,
            members: D.Z.getDMUserIds()
                .map((e) => Z.default.getUser(e))
                .filter(V.lm),
            limit: n,
            filter: i
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: i, limit: r = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: s = !0, allowSnowflake: o = !1 } = e,
            l = D.Z.getChannel(n);
        if (null == l) return [];
        let u = l.isThread() ? D.Z.getChannel(l.parent_id) : null,
            c = null != u ? u : l;
        if (null == c) return [];
        if (c.isPrivate()) {
            t = c.recipients.map((e) => {
                var t;
                return {
                    userId: e,
                    nick: null !== (t = U.Z.getNickname(e)) && void 0 !== t ? t : null
                };
            });
            let e = Z.default.getCurrentUser();
            null != e &&
                t.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === i.length && s) {
                let e = eP(l.id, r);
                if (e.length > 0) return e;
            }
            (t = x.ZP.getMembers(c.guild_id).filter(eS)), a && j.Z.requestMembers(c.guild_id, i, r);
        }
        return eA({
            query: i,
            members: t,
            limit: r,
            filter: (e) =>
                c.isPrivate() ||
                H.BT({
                    permission: q.Plq.VIEW_CHANNEL,
                    user: e,
                    context: c
                }),
            allowSnowflake: o
        });
    },
    queryGuildUsers(e) {
        let { guildId: t, query: n, limit: i = 10, request: r = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: s, allowSnowflake: o } = e;
        if (null == P.Z.getGuild(t)) return [];
        if (0 === n.length && a) {
            let e = eP(G.Z.getChannelId(t), i);
            if (e.length > 0) return e;
        }
        let l = x.ZP.getMembers(t).filter(eS);
        return (
            r && n.length > 0 && j.Z.requestMembers(t, n, i),
            eA({
                query: n,
                members: l,
                limit: i,
                filter: s,
                allowSnowflake: o
            })
        );
    },
    queryUsers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
            i = arguments.length > 4 ? arguments[4] : void 0;
        return (
            n && e.length > 0 && j.Z.requestMembers(null, e, t),
            eA({
                query: e,
                members: o()(Z.default.getUsers()).values().value(),
                limit: t,
                filter: i
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: i, limit: r = q.rnv, fuzzy: a = !0, filter: s = ep, type: l = L.sH, allowEmptyQueries: u = !1, requireVocalConnectAccess: f = !0, boosters: _ = {}, allowSnowflake: p } = e,
            h = eO(n, u);
        t =
            null != i
                ? o()(L.ZP.getChannels(i)[l])
                      .map((e) => e.channel)
                      .concat(N.Z.computeAllActiveJoinedThreads(i))
                      .value()
                : o()(D.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(N.Z.computeAllActiveJoinedThreads()).value();
        let m = {},
            g = [];
        for (let e of t) {
            if (!eC(l, e.type, null != i) || ((0, R.Km)(e.type) && !M.Z.can(f ? e.accessPermissions : q.Plq.VIEW_CHANNEL, e)) || !s(e)) continue;
            let t = [...h],
                r = e.name.toLocaleLowerCase(),
                o = p && n === e.id,
                u = o ? en : eD(r, t, a);
            if (0 !== u) {
                if (t.length > 0) {
                    for (let n of [eL(e, m), ex(e, m)]) {
                        if (null == n || '' === n) continue;
                        let e = eD(n, t, !1);
                        0 !== e && (u += 0.5 * e);
                    }
                    u = Math.min(ei - es, u);
                }
                if (0 === u || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !o)) continue;
                eR(l, e.type) && (u = Math.max(u - eo, es / 2)),
                    g.push({
                        type: (0, R.bw)(e.type) ? Q.h8.VOICE_CHANNEL : Q.h8.TEXT_CHANNEL,
                        record: e,
                        score: ey(u, _[e.id]),
                        comparator: (0, d.F6)(e, Z.default, U.Z),
                        sortable: r
                    });
            }
        }
        return g.sort(c.Z), null != r && g.length > r && (g.length = r), g;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ep, boosters: a = {} } = e,
            s = '' === t ? '' : t.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(s)), 'i'),
                containQuery: RegExp(Y.Z.escape(s), 'i'),
                queryLower: s
            },
            u = [];
        for (let e of o()(P.Z.getGuilds()).values().value()) {
            if (!r(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eb(t, l, i);
            n > 0 &&
                u.push({
                    type: Q.h8.GUILD,
                    record: e,
                    score: ey(n, a[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return u.sort(c.Z), u.length > n && (u.length = n), u;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ep, boosters: a = {} } = e,
            s = (0, K._I)((0, K.Fv)(t.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(s)), 'i'),
                containQuery: RegExp(Y.Z.escape(s), 'i'),
                queryLower: s
            },
            u = o()(D.Z.getMutablePrivateChannels()).values().value(),
            f = [];
        for (let e of u) {
            if (!e.isMultiUserDM() || !r(e)) continue;
            let t = (0, d.F6)(e, Z.default, U.Z).toLocaleLowerCase(),
                n = (0, K._I)((0, K.Fv)(t)),
                s = eb(n, l, i);
            s > 0 &&
                f.push({
                    type: Q.h8.GROUP_DM,
                    record: e,
                    score: ey(s, a[e.id]),
                    comparator: (0, d.F6)(e, Z.default, U.Z),
                    sortable: n
                });
        }
        return f.sort(c.Z), f.length > n && (f.length = n), f;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ep } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(a)), 'i'),
                containQuery: RegExp(Y.Z.escape(a), 'i'),
                queryLower: a
            },
            o = ev(),
            l = [];
        for (let { application: e } of o) {
            if (!r(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eb(t, s, i);
            n > 0 &&
                l.push({
                    type: Q.h8.APPLICATION,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                });
        }
        return l.sort(c.Z), l.length > n && (l.length = n), l;
    },
    queryInAppNavigations(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0 } = e,
            r = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(r)), 'i'),
                containQuery: RegExp(Y.Z.escape(r), 'i'),
                queryLower: r
            },
            o = {
                [u.Ky.SHOP]: [J.intl.string(J.t.pWG4zc)],
                [u.Ky.NITRO_HOME]: [J.intl.string(J.t.Ipxkoq)],
                [u.Ky.QUEST_HOME]: [J.intl.string(J.t.JALI2N)],
                [u.Ky.APPS_HOME]: [J.intl.string(J.t.PHjkRE), J.intl.string(J.t.AKcFUl)]
            },
            l = [];
        for (let e in o) {
            let t = u.Ky[e],
                n = o[t];
            if (null != n)
                for (let e of n) {
                    let n = e.toLocaleLowerCase(),
                        r = eb(n, a, i);
                    r > 0 &&
                        l.push({
                            type: Q.h8.IN_APP_NAVIGATION,
                            record: u.FL.fromType(t),
                            score: ey(r),
                            comparator: n,
                            sortable: n
                        });
                }
        }
        return (
            $.getState().options.forEach((e) => {
                var t;
                let n = [e.title].concat(e.searchableTitles),
                    r = null !== (t = (0, s.max)(n.map((e) => ey(eb(e.toLocaleLowerCase(), a, i))))) && void 0 !== t ? t : 0;
                r > 0 &&
                    l.push({
                        type: Q.h8.IN_APP_NAVIGATION,
                        record: u.FL.fromType(u.Ky.SETTINGS, e.path, e.title),
                        score: r,
                        comparator: e.title.toLocaleLowerCase(),
                        sortable: e.title.toLocaleLowerCase()
                    });
            }),
            l.sort(c.Z),
            l.length > n && (l.length = n),
            l
        );
    },
    querySKUs(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ep } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(a)), 'i'),
                containQuery: RegExp(Y.Z.escape(a), 'i'),
                queryLower: a
            },
            l = o()(F.Z.getSKUs()).values().value(),
            u = [];
        for (let e of l)
            if (e.type === q.epS.DURABLE_PRIMARY && r(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = eb(t, s, i);
                n > 0 &&
                    u.push({
                        type: Q.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return u.sort(c.Z), u.length > n && (u.length = n), u;
    },
    getRecentlyTalked: eP,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: i = !1, canMentionHere: r = !0, canMentionUsers: s = !0, canMentionRoles: l = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: c = !1, checkRecentlyTalkedOnEmptyQuery: d = !0, limit: f = q.rnv, request: _, allowSnowflake: p = !1 } = e,
            h = s
                ? (u && null != n.guild_id
                      ? this.queryGuildUsers({
                            guildId: n.guild_id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            request: _,
                            allowSnowflake: p
                        })
                      : this.queryChannelUsers({
                            channelId: n.id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            allowSnowflake: p
                        })
                  ).map((e) => {
                      let { record: t, score: i, comparator: r } = e;
                      return {
                          user: t,
                          score: i,
                          comparator: r,
                          nick: x.ZP.getNick(n.guild_id, t.id),
                          status: k.Z.getStatus(t.id)
                      };
                  })
                : [],
            m = h.length,
            g = t.toLowerCase(),
            E = [];
        if (m < f && l) {
            let e = n.getGuildId(),
                t = P.Z.getGuild(e);
            null != t &&
                (o()(P.Z.getRoles(t.id))
                    .filter((t) => {
                        let { mentionable: n, name: r, id: s } = t;
                        return (n || i || c) && (a()(g, r.toLowerCase()) || (p && g === s)) && s !== W.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(f - m)
                    .forEach((e) => {
                        E.push(e);
                    }),
                (m += E.length));
        }
        let v = [];
        return (
            !n.isPrivate() && i && l && (m < f && a()(g, eg().test) && (v.push(eg()), (m += 1)), r && m < f && a()(g, eE().test) && v.push(eE())),
            {
                users: h,
                globals: v,
                roles: E
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: t, guildId: n, canMentionEveryone: i = !1, canMentionUsers: r = !0, canMentionRoles: s = !0, canMentionNonMentionableRoles: l = !1 } = e,
            u = r
                ? this.queryGuildUsers({
                      guildId: n,
                      query: t
                  }).map((e) => ({
                      ...e,
                      status: k.Z.getStatus(e.record.id)
                  }))
                : [],
            c = u.length,
            d = t.toLowerCase(),
            _ = [];
        if (c < q.rnv && s) {
            let e = P.Z.getGuild(n);
            null != e &&
                (o()(P.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: r, id: s } = e;
                        return (t || i || l) && a()(d, r.toLowerCase()) && (0, f.Gy)(n, s);
                    })
                    .take(q.rnv - c)
                    .forEach((e) => {
                        _.push(e);
                    }),
                (c += _.length));
        }
        let p = [];
        return (
            i && s && (c < q.rnv && a()(d, eg().test) && (p.push(eg()), (c += 1)), c < q.rnv && a()(d, eE().test) && p.push(eE())),
            {
                users: u,
                globals: p,
                roles: _
            }
        );
    },
    queryChoice(e) {
        let { query: t, choices: n, limit: i = 10, fuzzy: r = !0 } = e,
            a = t.toLocaleLowerCase(),
            s = RegExp('^'.concat(Y.Z.escape(a)), 'i'),
            l = RegExp(Y.Z.escape(a), 'i'),
            u = o()(n)
                .map((e, t) => {
                    let n = eb(
                        e.displayName.toLocaleLowerCase(),
                        {
                            exactQuery: s,
                            containQuery: l,
                            queryLower: a
                        },
                        r
                    );
                    return n > 0
                        ? {
                              choice: e,
                              score: n,
                              originalIndex: t
                          }
                        : null;
                })
                .filter(V.lm)
                .sortBy((e) => -1 * e.score);
        return null !== i && (u = u.take(i)), u.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            i = t.toLocaleLowerCase(),
            r = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(i)), 'i'),
                containQuery: RegExp(Y.Z.escape(i), 'i'),
                queryLower: i
            },
            a = (0, g.s)(n.id) && !n.hasFeature(q.oNc.HUB),
            s = n.hasFeature(q.oNc.COMMUNITY),
            o = (0, m.t)(n) && n.hasFeature(q.oNc.COMMUNITY),
            l = [
                {
                    id: X.HY.SERVER_GUIDE,
                    name: J.intl.string(J.t.VbpLyc)
                },
                {
                    id: X.HY.CHANNEL_BROWSER,
                    name: J.intl.string(J.t.et6wam)
                },
                {
                    id: X.HY.CUSTOMIZE_COMMUNITY,
                    name: J.intl.string(J.t.h9mGOD)
                }
            ],
            u = [];
        for (let e of l)
            (e.id !== X.HY.SERVER_GUIDE || a) &&
                (e.id !== X.HY.CHANNEL_BROWSER || s) &&
                (e.id !== X.HY.CUSTOMIZE_COMMUNITY || o) &&
                eb(e.name.toLocaleLowerCase(), r, !1) > 0 &&
                u.push(
                    new R.nl({
                        id: e.id,
                        name: e.name,
                        type: q.d4z.UNKNOWN,
                        guild_id: n.id
                    })
                );
        return u;
    },
    queryChannelResults(e) {
        let { query: t, channel: n, type: i = L.sH, channelTypes: r } = e;
        return {
            channels: this.queryChannels({
                query: t,
                guildId: n.getGuildId(),
                limit: void 0,
                fuzzy: void 0,
                filter: (e) => null == r || r.includes(e.type),
                type: i,
                allowEmptyQueries: !0
            }).map((e) => e.record)
        };
    },
    queryApplicationCommandChannelResults(e) {
        let { query: t, channel: n, channelTypes: i, limit: r = q.rnv, allowSnowflake: a } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == i || i.includes(n.type)) && e.push(n), { channels: e };
        }
        let s = [];
        for (let e of eI)
            s = s.concat(
                this.queryChannels({
                    query: t,
                    guildId: n.guild_id,
                    limit: r,
                    fuzzy: !0,
                    filter: (e) => null == i || i.includes(e.type),
                    type: e,
                    allowEmptyQueries: !0,
                    requireVocalConnectAccess: !1,
                    allowSnowflake: a
                })
            );
        return (
            (s = s
                .filter((e) => {
                    let { record: t } = e;
                    return 'null' !== t.id;
                })
                .sort(_.Z)),
            null != r && s.length > r && (s = s.slice(0, r)),
            { channels: s.map((e) => e.record) }
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
        let { query: t, channel: n, intention: i, maxCount: r = q.rnv, matchComparator: a } = e;
        return (
            C.DZ.loadIfNecessary(),
            {
                emojis: h.ZP.searchWithoutFetchingLatest({
                    channel: n,
                    query: t,
                    count: r,
                    intention: i,
                    matchComparator: a
                })
            }
        );
    },
    queryStickers(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ep],
            { stickerMetadata: r } = S.Z,
            a = Z.default.getCurrentUser(),
            s = new Set(),
            l = [];
        for (let o of (C.DZ.loadIfNecessary(), e)) {
            if ('' === o) continue;
            let e = o.toLocaleLowerCase(),
                u = (0, K._I)(e),
                c = RegExp('^'.concat(Y.Z.escape(u)), 'i'),
                d = RegExp(''.concat(Y.Z.escape(u)), 'i');
            r.forEach((r, o) => {
                let u = 0,
                    f = null,
                    _ = S.Z.getStickerById(o);
                if (null == _ || !i(_, (0, T.cO)(_, a, n))) return;
                for (let n of r) {
                    let { type: i, value: r } = n,
                        a = eN(i),
                        s = 0;
                    t ? (r === e ? (s = en * a) : c.test(r) ? (s = ei * a) : (i === A.MO.GUILD_NAME || i === A.MO.PACK_NAME || i === A.MO.STICKER_NAME) && d.test(r) && (s = er * a)) : r === e && ((s = en * a), (f = r)), s > u && ((u = s), (f = r));
                }
                let p = b.Z.stickerFrecencyWithoutFetchingLatest.getScore(o);
                null != p && (u *= p / 100),
                    u > 0 &&
                        null != f &&
                        !s.has(_.id) &&
                        (s.add(_.id),
                        l.push({
                            sticker: _,
                            comparator: f,
                            score: u
                        }));
            });
        }
        return (
            0 ===
                (l = o()(l)
                    .sortBy((e) => -1 * e.score)
                    .value()).length && (l = em),
            l
        );
    },
    querySoundmoji(e, t) {
        let n = Z.default.getCurrentUser();
        y.Z.isFetching() || y.Z.hasFetchedAllSounds() || (0, v.w)(), C.DZ.loadIfNecessary();
        let i = Array.from(y.Z.getSounds().values()).reduce(
            (e, n) => (
                n.forEach((n) => {
                    (0, E.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                }),
                e
            ),
            []
        );
        return (0, I.cK)(e, i, n, t);
    },
    matchSentinel: (e, t, n) => !eh.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = P.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? P.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};

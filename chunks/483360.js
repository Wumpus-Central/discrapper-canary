let i;
n.d(t, {
    ZP: () => ex,
    k1: () => eE
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
    l = n(815372),
    u = n(620490),
    c = n(933557),
    d = n(605436),
    f = n(565924),
    _ = n(710845),
    p = n(339085),
    h = n(31445),
    m = n(931261),
    g = n(277078),
    E = n(208049),
    v = n(763296),
    y = n(421673),
    I = n(285651),
    T = n(822179),
    b = n(926491),
    S = n(373228),
    A = n(601070),
    N = n(675478),
    C = n(131704),
    R = n(598077),
    O = n(592125),
    D = n(984933),
    x = n(271383),
    L = n(430824),
    P = n(375954),
    w = n(496675),
    M = n(158776),
    k = n(699516),
    U = n(944486),
    G = n(914010),
    B = n(594174),
    Z = n(55563),
    F = n(823379),
    V = n(892880),
    j = n(700785),
    H = n(226951),
    Y = n(709054),
    W = n(624138),
    K = n(51144),
    z = n(981631),
    q = n(727785),
    Q = n(176505),
    X = n(388032);
let J = new _.Z('AutocompleteUtils'),
    $ = 10,
    ee = 7,
    et = 5,
    en = 3,
    ei = 1,
    er = 1,
    ea = 11,
    es = 6,
    eo = 8,
    el = 1,
    eu = 1000,
    ec = 50,
    ed = () => !0,
    ef = /(\t|\s)/,
    e_ = [],
    ep = (i = n(786074).Z).MENTION_EVERYONE,
    eh = i.MENTION_HERE,
    em = i.LAUNCHABLE_APPLICATIONS;
function eg() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eu * e * (null != t ? t : 1);
}
let eE = [D.sH, D.Zb, z.d4z.GUILD_CATEGORY];
function ev(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(H.Z.escape(e), 'i').test(t));
}
function ey(e, t) {
    let { exactQuery: n, containQuery: i, queryLower: r, isFullMatch: s } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === r) return $;
            if (!1 === s) {
                let t = r.length / e.length;
                return Math.max(ei, ee * t);
            }
            return ee;
        }
        if (i.test(e)) return et;
        if (ev(r, e)) return en;
        if (o && a()(r, e)) return ei;
    } catch (e) {
        J.error(e);
    }
    return 0;
}
function eI(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eT(e) {
    let { query: t, members: n, limit: i, filter: r, allowSnowflake: s } = e,
        o = B.default.getUsers(),
        l = G.Z.getGuildId(),
        c = t.toLocaleLowerCase(),
        d = (0, W.Fv)(c),
        f = [],
        _ = [],
        p = n.length,
        h = 0,
        m = 0;
    for (; h < p; ) {
        var g, E, v, y, I, T, b, S, A;
        let e, i;
        let u = n[h];
        u instanceof R.Z ? ((i = u), (e = null === (E = x.ZP.getNick(l, i.id)) || void 0 === E ? void 0 : E.toLocaleLowerCase())) : ((e = null === (v = u.nick) || void 0 === v ? void 0 : v.toLocaleLowerCase()), (i = o[u.userId]));
        let p = null === (g = K.ZP.getGlobalName(i)) || void 0 === g ? void 0 : g.toLocaleLowerCase();
        if (null != i && (null == r || r(i))) {
            let n = i.username.toLocaleLowerCase(),
                r = (0, W._I)(n),
                o = (0, W.Fv)(r),
                l = null != e ? (0, W._I)(e) : null,
                u = null != l ? (0, W.Fv)(l) : null,
                h = null != p ? (0, W._I)(p) : null,
                g = null != h ? (0, W.Fv)(h) : null;
            (s && t === i.id) || n.substring(0, c.length) === c || r.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == p ? void 0 : p.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c
                ? f.push({
                      type: q.h8.USER,
                      record: i,
                      score: $,
                      comparator: null !== (y = null != p ? p : e) && void 0 !== y ? y : n,
                      sortable: null !== (I = null != h ? h : l) && void 0 !== I ? I : r
                  })
                : o.substring(0, d.length) === d || (null == u ? void 0 : u.substring(0, d.length)) === d || (null == g ? void 0 : g.substring(0, d.length)) === d
                  ? f.push({
                        type: q.h8.USER,
                        record: i,
                        score: ei,
                        comparator: null !== (T = null != p ? p : e) && void 0 !== T ? T : n,
                        sortable: null !== (b = null != h ? h : l) && void 0 !== b ? b : r
                    })
                  : m < ec &&
                    (a()(c, r) || a()(d, o) || (null != l && a()(c, l)) || (null != u && a()(d, u)) || (null != h && a()(c, h)) || (null != g && a()(d, g))) &&
                    (_.push({
                        type: q.h8.USER,
                        record: i,
                        score: ei,
                        comparator: null !== (S = null != p ? p : e) && void 0 !== S ? S : n,
                        sortable: null !== (A = null != h ? h : l) && void 0 !== A ? A : r
                    }),
                    (m += 1));
        }
        h += 1;
    }
    return f.sort(u.Z), f.length < i && (_.sort(u.Z), (f = f.concat(_.slice(0, Math.max(0, i - f.length))))), f.length > i && (f.length = i), f;
}
function eb(e) {
    switch (e) {
        case S.MO.STICKER_NAME:
            return ea;
        case S.MO.CORRELATED_EMOJI:
            return es;
        case S.MO.TAG:
            return el;
        case S.MO.GUILD_NAME:
        case S.MO.PACK_NAME:
            return eo;
        default:
            return 1;
    }
}
function eS(e, t, n) {
    return e === t || (!!(n || (0, C.Km)(t)) && (e === D.sH ? (0, C.r8)(t) || (0, C.bw)(t) : e === D.Zb && (0, C.bw)(t)));
}
function eA(e, t) {
    return e === D.sH && (0, C.bw)(t);
}
function eN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(H.Z.escape(t)), 'i'),
                    containQuery: RegExp(H.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(H.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(H.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function eC(e, t, n) {
    let i = 0,
        r = null;
    for (let a of t) {
        let t = ey(e, a, n);
        t > i && ((i = t), (r = a));
    }
    return null != r && (r.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(r), 1)), i;
}
function eR(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var i;
        n = t[e.guild_id] = null === (i = L.Z.getGuild(e.guild_id)) || void 0 === i ? void 0 : i.toString().toLocaleLowerCase();
    }
    return n;
}
function eO(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var i;
        n = t[e.parent_id] = null === (i = O.Z.getChannel(e.parent_id)) || void 0 === i ? void 0 : i.name.toLocaleLowerCase();
    }
    return n;
}
function eD(e, t) {
    let n = O.Z.getChannel(e);
    return null == e || null == n
        ? []
        : o()(P.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => B.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eI(x.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let i = n.getGuildId(),
                      r = null != i ? x.ZP.getMember(i, e.id) : null;
                  return {
                      type: q.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : K.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
let ex = {
    queryFriends(e) {
        let { query: t, limit: n = 10, _fuzzy: i = !0, filter: r } = e;
        return eT({
            query: t,
            members: k.Z.getFriendIDs()
                .map((e) => B.default.getUser(e))
                .filter(F.lm),
            limit: n,
            filter: r
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: i } = e;
        return eT({
            query: t,
            members: O.Z.getDMUserIds()
                .map((e) => B.default.getUser(e))
                .filter(F.lm),
            limit: n,
            filter: i
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: i, limit: r = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: s = !0, allowSnowflake: o = !1 } = e,
            l = O.Z.getChannel(n);
        if (null == l) return [];
        let u = l.isThread() ? O.Z.getChannel(l.parent_id) : null,
            c = null != u ? u : l;
        if (null == c) return [];
        if (c.isPrivate()) {
            t = c.recipients.map((e) => {
                var t;
                return {
                    userId: e,
                    nick: null !== (t = k.Z.getNickname(e)) && void 0 !== t ? t : null
                };
            });
            let e = B.default.getCurrentUser();
            null != e &&
                t.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === i.length && s) {
                let e = eD(l.id, r);
                if (e.length > 0) return e;
            }
            (t = x.ZP.getMembers(c.guild_id).filter(eI)), a && V.Z.requestMembers(c.guild_id, i, r);
        }
        return eT({
            query: i,
            members: t,
            limit: r,
            filter: (e) =>
                c.isPrivate() ||
                j.BT({
                    permission: z.Plq.VIEW_CHANNEL,
                    user: e,
                    context: c
                }),
            allowSnowflake: o
        });
    },
    queryGuildUsers(e) {
        let { guildId: t, query: n, limit: i = 10, request: r = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: s, allowSnowflake: o } = e;
        if (null == L.Z.getGuild(t)) return [];
        if (0 === n.length && a) {
            let e = eD(U.Z.getChannelId(t), i);
            if (e.length > 0) return e;
        }
        let l = x.ZP.getMembers(t).filter(eI);
        return (
            r && n.length > 0 && V.Z.requestMembers(t, n, i),
            eT({
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
            n && e.length > 0 && V.Z.requestMembers(null, e, t),
            eT({
                query: e,
                members: o()(B.default.getUsers()).values().value(),
                limit: t,
                filter: i
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: i, limit: r = z.rnv, fuzzy: a = !0, filter: s = ed, type: l = D.sH, allowEmptyQueries: d = !1, requireVocalConnectAccess: f = !0, boosters: _ = {}, allowSnowflake: p } = e,
            h = eN(n, d);
        t =
            null != i
                ? o()(D.ZP.getChannels(i)[l])
                      .map((e) => e.channel)
                      .concat(A.Z.computeAllActiveJoinedThreads(i))
                      .value()
                : o()(O.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(A.Z.computeAllActiveJoinedThreads()).value();
        let m = {},
            g = [];
        for (let e of t) {
            if (!eS(l, e.type, null != i) || ((0, C.Km)(e.type) && !w.Z.can(f ? e.accessPermissions : z.Plq.VIEW_CHANNEL, e)) || !s(e)) continue;
            let t = [...h],
                r = e.name.toLocaleLowerCase(),
                o = p && n === e.id,
                u = o ? $ : eC(r, t, a);
            if (0 !== u) {
                if (t.length > 0) {
                    for (let n of [eR(e, m), eO(e, m)]) {
                        if (null == n || '' === n) continue;
                        let e = eC(n, t, !1);
                        0 !== e && (u += 0.5 * e);
                    }
                    u = Math.min(ee - ei, u);
                }
                if (0 === u || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !o)) continue;
                eA(l, e.type) && (u = Math.max(u - er, ei / 2)),
                    g.push({
                        type: (0, C.bw)(e.type) ? q.h8.VOICE_CHANNEL : q.h8.TEXT_CHANNEL,
                        record: e,
                        score: eg(u, _[e.id]),
                        comparator: (0, c.F6)(e, B.default, k.Z),
                        sortable: r
                    });
            }
        }
        return g.sort(u.Z), null != r && g.length > r && (g.length = r), g;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ed, boosters: a = {} } = e,
            s = '' === t ? '' : t.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(H.Z.escape(s)), 'i'),
                containQuery: RegExp(H.Z.escape(s), 'i'),
                queryLower: s
            },
            c = [];
        for (let e of o()(L.Z.getGuilds()).values().value()) {
            if (!r(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = ey(t, l, i);
            n > 0 &&
                c.push({
                    type: q.h8.GUILD,
                    record: e,
                    score: eg(n, a[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ed, boosters: a = {} } = e,
            s = (0, W._I)((0, W.Fv)(t.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(H.Z.escape(s)), 'i'),
                containQuery: RegExp(H.Z.escape(s), 'i'),
                queryLower: s
            },
            d = o()(O.Z.getMutablePrivateChannels()).values().value(),
            f = [];
        for (let e of d) {
            if (!e.isMultiUserDM() || !r(e)) continue;
            let t = (0, c.F6)(e, B.default, k.Z).toLocaleLowerCase(),
                n = (0, W._I)((0, W.Fv)(t)),
                s = ey(n, l, i);
            s > 0 &&
                f.push({
                    type: q.h8.GROUP_DM,
                    record: e,
                    score: eg(s, a[e.id]),
                    comparator: (0, c.F6)(e, B.default, k.Z),
                    sortable: n
                });
        }
        return f.sort(u.Z), f.length > n && (f.length = n), f;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ed } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(H.Z.escape(a)), 'i'),
                containQuery: RegExp(H.Z.escape(a), 'i'),
                queryLower: a
            },
            o = em(),
            l = [];
        for (let { application: e } of o) {
            if (!r(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = ey(t, s, i);
            n > 0 &&
                l.push({
                    type: q.h8.APPLICATION,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                });
        }
        return l.sort(u.Z), l.length > n && (l.length = n), l;
    },
    queryInAppNavigations(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0 } = e,
            r = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(H.Z.escape(r)), 'i'),
                containQuery: RegExp(H.Z.escape(r), 'i'),
                queryLower: r
            },
            s = {
                [l.Ky.SHOP]: [X.intl.string(X.t.pWG4zc)],
                [l.Ky.NITRO_HOME]: [X.intl.string(X.t.Ipxkoq)],
                [l.Ky.QUEST_HOME]: [X.intl.string(X.t.JALI2N)],
                [l.Ky.APPS_HOME]: [X.intl.string(X.t.PHjkRE), X.intl.string(X.t.AKcFUl)]
            },
            o = [];
        for (let e in s) {
            let t = l.Ky[e];
            for (let e of s[t]) {
                let n = e.toLocaleLowerCase(),
                    r = ey(n, a, i);
                r > 0 &&
                    o.push({
                        type: q.h8.IN_APP_NAVIGATION,
                        record: l.FL.fromType(t),
                        score: eg(r),
                        comparator: n,
                        sortable: n
                    });
            }
        }
        return o.sort(u.Z), o.length > n && (o.length = n), o;
    },
    querySKUs(e) {
        let { query: t, limit: n = 10, fuzzy: i = !0, filter: r = ed } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(H.Z.escape(a)), 'i'),
                containQuery: RegExp(H.Z.escape(a), 'i'),
                queryLower: a
            },
            l = o()(Z.Z.getSKUs()).values().value(),
            c = [];
        for (let e of l)
            if (e.type === z.epS.DURABLE_PRIMARY && r(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = ey(t, s, i);
                n > 0 &&
                    c.push({
                        type: q.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    getRecentlyTalked: eD,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: i = !1, canMentionHere: r = !0, canMentionUsers: s = !0, canMentionRoles: l = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: c = !1, checkRecentlyTalkedOnEmptyQuery: d = !0, limit: f = z.rnv, request: _, allowSnowflake: p = !1 } = e,
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
                          status: M.Z.getStatus(t.id)
                      };
                  })
                : [],
            m = h.length,
            g = t.toLowerCase(),
            E = [];
        if (m < f && l) {
            let e = n.getGuildId(),
                t = L.Z.getGuild(e);
            null != t &&
                (o()(L.Z.getRoles(t.id))
                    .filter((t) => {
                        let { mentionable: n, name: r, id: s } = t;
                        return (n || i || c) && (a()(g, r.toLowerCase()) || (p && g === s)) && s !== Y.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(f - m)
                    .forEach((e) => {
                        E.push(e);
                    }),
                (m += E.length));
        }
        let v = [];
        return (
            !n.isPrivate() && i && l && (m < f && a()(g, ep().test) && (v.push(ep()), (m += 1)), r && m < f && a()(g, eh().test) && v.push(eh())),
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
                      status: M.Z.getStatus(e.record.id)
                  }))
                : [],
            c = u.length,
            f = t.toLowerCase(),
            _ = [];
        if (c < z.rnv && s) {
            let e = L.Z.getGuild(n);
            null != e &&
                (o()(L.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: r, id: s } = e;
                        return (t || i || l) && a()(f, r.toLowerCase()) && (0, d.Gy)(n, s);
                    })
                    .take(z.rnv - c)
                    .forEach((e) => {
                        _.push(e);
                    }),
                (c += _.length));
        }
        let p = [];
        return (
            i && s && (c < z.rnv && a()(f, ep().test) && (p.push(ep()), (c += 1)), c < z.rnv && a()(f, eh().test) && p.push(eh())),
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
            s = RegExp('^'.concat(H.Z.escape(a)), 'i'),
            l = RegExp(H.Z.escape(a), 'i'),
            u = o()(n)
                .map((e, t) => {
                    let n = ey(
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
                .filter(F.lm)
                .sortBy((e) => -1 * e.score);
        return null !== i && (u = u.take(i)), u.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            i = t.toLocaleLowerCase(),
            r = {
                exactQuery: RegExp('^'.concat(H.Z.escape(i)), 'i'),
                containQuery: RegExp(H.Z.escape(i), 'i'),
                queryLower: i
            },
            a = (0, m.s)(n.id) && !n.hasFeature(z.oNc.HUB),
            s = n.hasFeature(z.oNc.COMMUNITY),
            o = (0, h.t)(n) && n.hasFeature(z.oNc.COMMUNITY),
            l = [
                {
                    id: Q.HY.SERVER_GUIDE,
                    name: X.intl.string(X.t.VbpLyc)
                },
                {
                    id: Q.HY.CHANNEL_BROWSER,
                    name: X.intl.string(X.t.et6wam)
                },
                {
                    id: Q.HY.CUSTOMIZE_COMMUNITY,
                    name: X.intl.string(X.t.h9mGOD)
                }
            ],
            u = [];
        for (let e of l)
            (e.id !== Q.HY.SERVER_GUIDE || a) &&
                (e.id !== Q.HY.CHANNEL_BROWSER || s) &&
                (e.id !== Q.HY.CUSTOMIZE_COMMUNITY || o) &&
                ey(e.name.toLocaleLowerCase(), r, !1) > 0 &&
                u.push(
                    new C.nl({
                        id: e.id,
                        name: e.name,
                        type: z.d4z.UNKNOWN,
                        guild_id: n.id
                    })
                );
        return u;
    },
    queryChannelResults(e) {
        let { query: t, channel: n, type: i = D.sH, channelTypes: r } = e;
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
        let { query: t, channel: n, channelTypes: i, limit: r = z.rnv, allowSnowflake: a } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == i || i.includes(n.type)) && e.push(n), { channels: e };
        }
        let s = [];
        for (let e of eE)
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
                .sort(f.Z)),
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
        let { query: t, channel: n, intention: i, maxCount: r = z.rnv, matchComparator: a } = e;
        return (
            N.DZ.loadIfNecessary(),
            {
                emojis: p.ZP.searchWithoutFetchingLatest({
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
            [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ed],
            { stickerMetadata: r } = b.Z,
            a = B.default.getCurrentUser(),
            s = new Set(),
            l = [];
        for (let o of (N.DZ.loadIfNecessary(), e)) {
            if ('' === o) continue;
            let e = o.toLocaleLowerCase(),
                u = (0, W._I)(e),
                c = RegExp('^'.concat(H.Z.escape(u)), 'i'),
                d = RegExp(''.concat(H.Z.escape(u)), 'i');
            r.forEach((r, o) => {
                let u = 0,
                    f = null,
                    _ = b.Z.getStickerById(o);
                if (null == _ || !i(_, (0, I.cO)(_, a, n))) return;
                for (let n of r) {
                    let { type: i, value: r } = n,
                        a = eb(i),
                        s = 0;
                    t ? (r === e ? (s = $ * a) : c.test(r) ? (s = ee * a) : (i === S.MO.GUILD_NAME || i === S.MO.PACK_NAME || i === S.MO.STICKER_NAME) && d.test(r) && (s = et * a)) : r === e && ((s = $ * a), (f = r)), s > u && ((u = s), (f = r));
                }
                let p = T.Z.stickerFrecencyWithoutFetchingLatest.getScore(o);
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
                    .value()).length && (l = e_),
            l
        );
    },
    querySoundmoji(e, t) {
        let n = B.default.getCurrentUser();
        v.Z.isFetching() || v.Z.hasFetchedAllSounds() || (0, E.w)(), N.DZ.loadIfNecessary();
        let i = Array.from(v.Z.getSounds().values()).reduce(
            (e, n) => (
                n.forEach((n) => {
                    (0, g.Z)(n, null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id) && e.push(n);
                }),
                e
            ),
            []
        );
        return (0, y.cK)(e, i, n, t);
    },
    matchSentinel: (e, t, n) => !ef.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = L.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? L.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};

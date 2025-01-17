let i;
r.d(n, {
    k1: function () {
        return eS;
    }
});
var a = r(653041);
var s = r(733860);
var o = r(757143);
var l = r(47120);
var u = r(724458);
var c = r(658722),
    d = r.n(c),
    f = r(392711),
    _ = r.n(f),
    h = r(815372),
    p = r(620490),
    m = r(933557),
    g = r(605436),
    E = r(565924),
    v = r(710845),
    I = r(339085),
    T = r(31445),
    b = r(931261),
    y = r(277078),
    S = r(208049),
    A = r(763296),
    N = r(421673),
    C = r(285651),
    R = r(822179),
    O = r(926491),
    D = r(373228),
    L = r(601070),
    x = r(675478),
    w = r(131704),
    P = r(598077),
    M = r(592125),
    k = r(984933),
    U = r(271383),
    B = r(430824),
    G = r(375954),
    Z = r(496675),
    F = r(158776),
    V = r(699516),
    j = r(944486),
    H = r(914010),
    Y = r(594174),
    W = r(55563),
    K = r(823379),
    z = r(892880),
    q = r(700785),
    Q = r(226951),
    X = r(709054),
    J = r(624138),
    $ = r(51144),
    ee = r(981631),
    et = r(727785),
    en = r(176505),
    er = r(388032);
let ei = new v.Z('AutocompleteUtils'),
    ea = 10,
    es = 7,
    eo = 5,
    el = 3,
    eu = 1,
    ec = 1,
    ed = 11,
    ef = 6,
    e_ = 8,
    eh = 1,
    ep = 1000,
    em = 50,
    eg = () => !0,
    eE = /(\t|\s)/,
    ev = [],
    eI = (i = r(786074).Z).MENTION_EVERYONE,
    eT = i.MENTION_HERE,
    eb = i.LAUNCHABLE_APPLICATIONS;
function ey() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments.length > 1 ? arguments[1] : void 0;
    return ep * e * (null != n ? n : 1);
}
let eS = [k.sH, k.Zb, ee.d4z.GUILD_CATEGORY];
function eA(e, n) {
    return e.split(/(?:,| )+/).every((e) => RegExp(Q.Z.escape(e), 'i').test(n));
}
function eN(e, n) {
    let { exactQuery: r, containQuery: i, queryLower: a, isFullMatch: s } = n,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (r.test(e)) {
            if (e.toLocaleLowerCase() === a) return ea;
            if (!1 === s) {
                let n = a.length / e.length;
                return Math.max(eu, es * n);
            }
            return es;
        }
        if (i.test(e)) return eo;
        if (eA(a, e)) return el;
        if (o && d()(a, e)) return eu;
    } catch (e) {
        ei.error(e);
    }
    return 0;
}
function eC(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eR(e) {
    let { query: n, members: r, limit: i, filter: a, allowSnowflake: s } = e,
        o = Y.default.getUsers(),
        l = H.Z.getGuildId(),
        u = n.toLocaleLowerCase(),
        c = (0, J.Fv)(u),
        f = [],
        _ = [],
        h = r.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        var E, v, I, T, b, y, S, A, N;
        let e, i;
        let h = r[m];
        h instanceof P.Z ? ((i = h), (e = null === (v = U.ZP.getNick(l, i.id)) || void 0 === v ? void 0 : v.toLocaleLowerCase())) : ((e = null === (I = h.nick) || void 0 === I ? void 0 : I.toLocaleLowerCase()), (i = o[h.userId]));
        let p = null === (E = $.ZP.getGlobalName(i)) || void 0 === E ? void 0 : E.toLocaleLowerCase();
        if (null != i && (null == a || a(i))) {
            let r = i.username.toLocaleLowerCase(),
                a = (0, J._I)(r),
                o = (0, J.Fv)(a),
                l = null != e ? (0, J._I)(e) : null,
                h = null != l ? (0, J.Fv)(l) : null,
                m = null != p ? (0, J._I)(p) : null,
                E = null != m ? (0, J.Fv)(m) : null;
            (s && n === i.id) || r.substring(0, u.length) === u || a.substring(0, u.length) === u || (null == e ? void 0 : e.substring(0, u.length)) === u || (null == l ? void 0 : l.substring(0, u.length)) === u || (null == p ? void 0 : p.substring(0, u.length)) === u || (null == m ? void 0 : m.substring(0, u.length)) === u
                ? f.push({
                      type: et.h8.USER,
                      record: i,
                      score: ea,
                      comparator: null !== (T = null != p ? p : e) && void 0 !== T ? T : r,
                      sortable: null !== (b = null != m ? m : l) && void 0 !== b ? b : a
                  })
                : o.substring(0, c.length) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == E ? void 0 : E.substring(0, c.length)) === c
                  ? f.push({
                        type: et.h8.USER,
                        record: i,
                        score: eu,
                        comparator: null !== (y = null != p ? p : e) && void 0 !== y ? y : r,
                        sortable: null !== (S = null != m ? m : l) && void 0 !== S ? S : a
                    })
                  : g < em &&
                    (d()(u, a) || d()(c, o) || (null != l && d()(u, l)) || (null != h && d()(c, h)) || (null != m && d()(u, m)) || (null != E && d()(c, E))) &&
                    (_.push({
                        type: et.h8.USER,
                        record: i,
                        score: eu,
                        comparator: null !== (A = null != p ? p : e) && void 0 !== A ? A : r,
                        sortable: null !== (N = null != m ? m : l) && void 0 !== N ? N : a
                    }),
                    (g += 1));
        }
        m += 1;
    }
    return f.sort(p.Z), f.length < i && (_.sort(p.Z), (f = f.concat(_.slice(0, Math.max(0, i - f.length))))), f.length > i && (f.length = i), f;
}
function eO(e) {
    switch (e) {
        case D.MO.STICKER_NAME:
            return ed;
        case D.MO.CORRELATED_EMOJI:
            return ef;
        case D.MO.TAG:
            return eh;
        case D.MO.GUILD_NAME:
        case D.MO.PACK_NAME:
            return e_;
        default:
            return 1;
    }
}
function eD(e, n, r) {
    return e === n || (!!(r || (0, w.Km)(n)) && (e === k.sH ? (0, w.r8)(n) || (0, w.bw)(n) : e === k.Zb && (0, w.bw)(n)));
}
function eL(e, n) {
    return e === k.sH && (0, w.bw)(n);
}
function ex(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .split(' ')
            .filter((e) => '' !== e || n)
            .map((e) => {
                let n = e.toLocaleLowerCase();
                return {
                    queryLower: n,
                    exactQuery: RegExp('^'.concat(Q.Z.escape(n)), 'i'),
                    containQuery: RegExp(Q.Z.escape(n), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let n = e.toLocaleLowerCase();
        r.unshift({
            queryLower: n,
            exactQuery: RegExp('^'.concat(Q.Z.escape(n).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(Q.Z.escape(n).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return r;
}
function ew(e, n, r) {
    let i = 0,
        a = null;
    for (let s of n) {
        let n = eN(e, s, r);
        n > i && ((i = n), (a = s));
    }
    return null != a && (a.isFullMatch ? (n.length = 0) : n.splice(n.indexOf(a), 1)), i;
}
function eP(e, n) {
    if (null == e.guild_id) return;
    let r = n[e.guild_id];
    if (null == r) {
        var i;
        r = n[e.guild_id] = null === (i = B.Z.getGuild(e.guild_id)) || void 0 === i ? void 0 : i.toString().toLocaleLowerCase();
    }
    return r;
}
function eM(e, n) {
    if (null == e.parent_id) return;
    let r = n[e.parent_id];
    if (null == r) {
        var i;
        r = n[e.parent_id] = null === (i = M.Z.getChannel(e.parent_id)) || void 0 === i ? void 0 : i.name.toLocaleLowerCase();
    }
    return r;
}
function ek(e, n) {
    let r = M.Z.getChannel(e);
    return null == e || null == r
        ? []
        : _()(G.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Y.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let n = r.getGuildId();
                  return null == n || eC(U.ZP.getMember(n, e.id));
              })
              .map((e) => {
                  var n;
                  let i = r.getGuildId(),
                      a = null != i ? U.ZP.getMember(i, e.id) : null;
                  return {
                      type: et.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null !== (n = null == a ? void 0 : a.nick) && void 0 !== n ? n : $.ZP.getName(e)
                  };
              })
              .take(n)
              .value();
}
n.ZP = {
    queryFriends(e) {
        let { query: n, limit: r = 10, _fuzzy: i = !0, filter: a } = e;
        return eR({
            query: n,
            members: V.Z.getFriendIDs()
                .map((e) => Y.default.getUser(e))
                .filter(K.lm),
            limit: r,
            filter: a
        });
    },
    queryDMUsers(e) {
        let { query: n, limit: r = 10, filter: i } = e;
        return eR({
            query: n,
            members: M.Z.getDMUserIds()
                .map((e) => Y.default.getUser(e))
                .filter(K.lm),
            limit: r,
            filter: i
        });
    },
    queryChannelUsers(e) {
        let n,
            { channelId: r, query: i, limit: a = 10, request: s = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, allowSnowflake: l = !1 } = e,
            u = M.Z.getChannel(r);
        if (null == u) return [];
        let c = u.isThread() ? M.Z.getChannel(u.parent_id) : null,
            d = null != c ? c : u;
        if (null == d) return [];
        if (d.isPrivate()) {
            n = d.recipients.map((e) => {
                var n;
                return {
                    userId: e,
                    nick: null !== (n = V.Z.getNickname(e)) && void 0 !== n ? n : null
                };
            });
            let e = Y.default.getCurrentUser();
            null != e &&
                n.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === i.length && o) {
                let e = ek(u.id, a);
                if (e.length > 0) return e;
            }
            (n = U.ZP.getMembers(d.guild_id).filter(eC)), s && z.Z.requestMembers(d.guild_id, i, a);
        }
        return eR({
            query: i,
            members: n,
            limit: a,
            filter: (e) =>
                d.isPrivate() ||
                q.BT({
                    permission: ee.Plq.VIEW_CHANNEL,
                    user: e,
                    context: d
                }),
            allowSnowflake: l
        });
    },
    queryGuildUsers(e) {
        let { guildId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: s = !0, filter: o, allowSnowflake: l } = e;
        if (null == B.Z.getGuild(n)) return [];
        if (0 === r.length && s) {
            let e = ek(j.Z.getChannelId(n), i);
            if (e.length > 0) return e;
        }
        let u = U.ZP.getMembers(n).filter(eC);
        return (
            a && r.length > 0 && z.Z.requestMembers(n, r, i),
            eR({
                query: r,
                members: u,
                limit: i,
                filter: o,
                allowSnowflake: l
            })
        );
    },
    queryUsers(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            r = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
            i = arguments.length > 4 ? arguments[4] : void 0;
        return (
            r && e.length > 0 && z.Z.requestMembers(null, e, n),
            eR({
                query: e,
                members: _()(Y.default.getUsers()).values().value(),
                limit: n,
                filter: i
            })
        );
    },
    queryChannels(e) {
        let n,
            { query: r, guildId: i, limit: a = ee.rnv, fuzzy: s = !0, filter: o = eg, type: l = k.sH, allowEmptyQueries: u = !1, requireVocalConnectAccess: c = !0, boosters: d = {}, allowSnowflake: f } = e,
            h = ex(r, u);
        n =
            null != i
                ? _()(k.ZP.getChannels(i)[l])
                      .map((e) => e.channel)
                      .concat(L.Z.computeAllActiveJoinedThreads(i))
                      .value()
                : _()(M.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(L.Z.computeAllActiveJoinedThreads()).value();
        let g = {},
            E = [];
        for (let e of n) {
            if (!eD(l, e.type, null != i) || ((0, w.Km)(e.type) && !Z.Z.can(c ? e.accessPermissions : ee.Plq.VIEW_CHANNEL, e)) || !o(e)) continue;
            let n = [...h],
                a = e.name.toLocaleLowerCase(),
                u = f && r === e.id,
                _ = u ? ea : ew(a, n, s);
            if (0 !== _) {
                if (n.length > 0) {
                    for (let r of [eP(e, g), eM(e, g)]) {
                        if (null == r || '' === r) continue;
                        let e = ew(r, n, !1);
                        0 !== e && (_ += 0.5 * e);
                    }
                    _ = Math.min(es - eu, _);
                }
                if (0 === _ || n.length > 1 || (1 === n.length && !n[0].isFullMatch && !u)) continue;
                eL(l, e.type) && (_ = Math.max(_ - ec, eu / 2)),
                    E.push({
                        type: (0, w.bw)(e.type) ? et.h8.VOICE_CHANNEL : et.h8.TEXT_CHANNEL,
                        record: e,
                        score: ey(_, d[e.id]),
                        comparator: (0, m.F6)(e, Y.default, V.Z),
                        sortable: a
                    });
            }
        }
        return E.sort(p.Z), null != a && E.length > a && (E.length = a), E;
    },
    queryGuilds(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg, boosters: s = {} } = e,
            o = '' === n ? '' : n.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(o)), 'i'),
                containQuery: RegExp(Q.Z.escape(o), 'i'),
                queryLower: o
            },
            u = [];
        for (let e of _()(B.Z.getGuilds()).values().value()) {
            if (!a(e)) continue;
            let n = e.name.toLocaleLowerCase(),
                r = eN(n, l, i);
            r > 0 &&
                u.push({
                    type: et.h8.GUILD,
                    record: e,
                    score: ey(r, s[e.id]),
                    comparator: e.toString(),
                    sortable: n
                });
        }
        return u.sort(p.Z), u.length > r && (u.length = r), u;
    },
    queryGroupDMs(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg, boosters: s = {} } = e,
            o = (0, J._I)((0, J.Fv)(n.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(o)), 'i'),
                containQuery: RegExp(Q.Z.escape(o), 'i'),
                queryLower: o
            },
            u = _()(M.Z.getMutablePrivateChannels()).values().value(),
            c = [];
        for (let e of u) {
            if (!e.isMultiUserDM() || !a(e)) continue;
            let n = (0, m.F6)(e, Y.default, V.Z).toLocaleLowerCase(),
                r = (0, J._I)((0, J.Fv)(n)),
                o = eN(r, l, i);
            o > 0 &&
                c.push({
                    type: et.h8.GROUP_DM,
                    record: e,
                    score: ey(o, s[e.id]),
                    comparator: (0, m.F6)(e, Y.default, V.Z),
                    sortable: r
                });
        }
        return c.sort(p.Z), c.length > r && (c.length = r), c;
    },
    queryApplications(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg } = e,
            s = n.toLocaleLowerCase(),
            o = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(s)), 'i'),
                containQuery: RegExp(Q.Z.escape(s), 'i'),
                queryLower: s
            },
            l = eb(),
            u = [];
        for (let { application: e } of l) {
            if (!a(e)) continue;
            let n = e.name.toLocaleLowerCase(),
                r = eN(n, o, i);
            r > 0 &&
                u.push({
                    type: et.h8.APPLICATION,
                    record: e,
                    score: r,
                    comparator: e.name,
                    sortable: n
                });
        }
        return u.sort(p.Z), u.length > r && (u.length = r), u;
    },
    queryInAppNavigations(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0 } = e,
            a = n.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(a)), 'i'),
                containQuery: RegExp(Q.Z.escape(a), 'i'),
                queryLower: a
            },
            o = {
                [h.Ky.SHOP]: [er.intl.string(er.t.pWG4zc)],
                [h.Ky.NITRO_HOME]: [er.intl.string(er.t.Ipxkoq)],
                [h.Ky.QUEST_HOME]: [er.intl.string(er.t.JALI2N)],
                [h.Ky.APPS_HOME]: [er.intl.string(er.t.PHjkRE), er.intl.string(er.t.AKcFUl)]
            },
            l = [];
        for (let e in o) {
            let n = h.Ky[e];
            for (let e of o[n]) {
                let r = e.toLocaleLowerCase(),
                    a = eN(r, s, i);
                a > 0 &&
                    l.push({
                        type: et.h8.IN_APP_NAVIGATION,
                        record: h.FL.fromType(n),
                        score: ey(a),
                        comparator: r,
                        sortable: r
                    });
            }
        }
        return l.sort(p.Z), l.length > r && (l.length = r), l;
    },
    querySKUs(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg } = e,
            s = n.toLocaleLowerCase(),
            o = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(s)), 'i'),
                containQuery: RegExp(Q.Z.escape(s), 'i'),
                queryLower: s
            },
            l = _()(W.Z.getSKUs()).values().value(),
            u = [];
        for (let e of l)
            if (e.type === ee.epS.DURABLE_PRIMARY && a(e)) {
                let n = e.name.toLocaleLowerCase(),
                    r = eN(n, o, i);
                r > 0 &&
                    u.push({
                        type: et.h8.SKU,
                        record: e,
                        score: r,
                        comparator: e.name,
                        sortable: n
                    });
            }
        return u.sort(p.Z), u.length > r && (u.length = r), u;
    },
    getRecentlyTalked: ek,
    queryMentionResults(e) {
        let { query: n, channel: r, canMentionEveryone: i = !1, canMentionHere: a = !0, canMentionUsers: s = !0, canMentionRoles: o = !0, includeAllGuildUsers: l = !1, includeNonMentionableRoles: u = !1, checkRecentlyTalkedOnEmptyQuery: c = !0, limit: f = ee.rnv, request: h, allowSnowflake: p = !1 } = e,
            m = s
                ? (l && null != r.guild_id
                      ? this.queryGuildUsers({
                            guildId: r.guild_id,
                            query: n,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: c,
                            request: h,
                            allowSnowflake: p
                        })
                      : this.queryChannelUsers({
                            channelId: r.id,
                            query: n,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: c,
                            allowSnowflake: p
                        })
                  ).map((e) => {
                      let { record: n, score: i, comparator: a } = e;
                      return {
                          user: n,
                          score: i,
                          comparator: a,
                          nick: U.ZP.getNick(r.guild_id, n.id),
                          status: F.Z.getStatus(n.id)
                      };
                  })
                : [],
            g = m.length,
            E = n.toLowerCase(),
            v = [];
        if (g < f && o) {
            let e = r.getGuildId(),
                n = B.Z.getGuild(e);
            null != n &&
                (_()(B.Z.getRoles(n.id))
                    .filter((n) => {
                        let { mentionable: r, name: a, id: s } = n;
                        return (r || i || u) && (d()(E, a.toLowerCase()) || (p && E === s)) && s !== X.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(f - g)
                    .forEach((e) => {
                        v.push(e);
                    }),
                (g += v.length));
        }
        let I = [];
        return (
            !r.isPrivate() && i && o && (g < f && d()(E, eI().test) && (I.push(eI()), (g += 1)), a && g < f && d()(E, eT().test) && I.push(eT())),
            {
                users: m,
                globals: I,
                roles: v
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: n, guildId: r, canMentionEveryone: i = !1, canMentionUsers: a = !0, canMentionRoles: s = !0, canMentionNonMentionableRoles: o = !1 } = e,
            l = a
                ? this.queryGuildUsers({
                      guildId: r,
                      query: n
                  }).map((e) => ({
                      ...e,
                      status: F.Z.getStatus(e.record.id)
                  }))
                : [],
            u = l.length,
            c = n.toLowerCase(),
            f = [];
        if (u < ee.rnv && s) {
            let e = B.Z.getGuild(r);
            null != e &&
                (_()(B.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: n, name: a, id: s } = e;
                        return (n || i || o) && d()(c, a.toLowerCase()) && (0, g.Gy)(r, s);
                    })
                    .take(ee.rnv - u)
                    .forEach((e) => {
                        f.push(e);
                    }),
                (u += f.length));
        }
        let h = [];
        return (
            i && s && (u < ee.rnv && d()(c, eI().test) && (h.push(eI()), (u += 1)), u < ee.rnv && d()(c, eT().test) && h.push(eT())),
            {
                users: l,
                globals: h,
                roles: f
            }
        );
    },
    queryChoice(e) {
        let { query: n, choices: r, limit: i = 10, fuzzy: a = !0 } = e,
            s = n.toLocaleLowerCase(),
            o = RegExp('^'.concat(Q.Z.escape(s)), 'i'),
            l = RegExp(Q.Z.escape(s), 'i'),
            u = _()(r)
                .map((e, n) => {
                    let r = eN(
                        e.displayName.toLocaleLowerCase(),
                        {
                            exactQuery: o,
                            containQuery: l,
                            queryLower: s
                        },
                        a
                    );
                    return r > 0
                        ? {
                              choice: e,
                              score: r,
                              originalIndex: n
                          }
                        : null;
                })
                .filter(K.lm)
                .sortBy((e) => -1 * e.score);
        return null !== i && (u = u.take(i)), u.value();
    },
    queryStaticRouteChannels(e) {
        let { query: n, guild: r } = e,
            i = n.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(i)), 'i'),
                containQuery: RegExp(Q.Z.escape(i), 'i'),
                queryLower: i
            },
            s = (0, b.s)(r.id) && !r.hasFeature(ee.oNc.HUB),
            o = r.hasFeature(ee.oNc.COMMUNITY),
            l = (0, T.t)(r) && r.hasFeature(ee.oNc.COMMUNITY),
            u = [
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
        for (let e of u) {
            if ((e.id !== en.HY.SERVER_GUIDE || !!s) && (e.id !== en.HY.CHANNEL_BROWSER || !!o) && (e.id !== en.HY.CUSTOMIZE_COMMUNITY || !!l))
                eN(e.name.toLocaleLowerCase(), a, !1) > 0 &&
                    c.push(
                        new w.nl({
                            id: e.id,
                            name: e.name,
                            type: ee.d4z.UNKNOWN,
                            guild_id: r.id
                        })
                    );
        }
        return c;
    },
    queryChannelResults(e) {
        let { query: n, channel: r, type: i = k.sH, channelTypes: a } = e;
        return {
            channels: this.queryChannels({
                query: n,
                guildId: r.getGuildId(),
                limit: void 0,
                fuzzy: void 0,
                filter: (e) => null == a || a.includes(e.type),
                type: i,
                allowEmptyQueries: !0
            }).map((e) => e.record)
        };
    },
    queryApplicationCommandChannelResults(e) {
        let { query: n, channel: r, channelTypes: i, limit: a = ee.rnv, allowSnowflake: s } = e;
        if (null == r.guild_id) {
            let e = [];
            return (null == i || i.includes(r.type)) && e.push(r), { channels: e };
        }
        let o = [];
        for (let e of eS)
            o = o.concat(
                this.queryChannels({
                    query: n,
                    guildId: r.guild_id,
                    limit: a,
                    fuzzy: !0,
                    filter: (e) => null == i || i.includes(e.type),
                    type: e,
                    allowEmptyQueries: !0,
                    requireVocalConnectAccess: !1,
                    allowSnowflake: s
                })
            );
        return (
            (o = o
                .filter((e) => {
                    let { record: n } = e;
                    return 'null' !== n.id;
                })
                .sort(E.Z)),
            null != a && o.length > a && (o = o.slice(0, a)),
            { channels: o.map((e) => e.record) }
        );
    },
    queryChoiceResults(e) {
        let { query: n, choices: r } = e;
        return {
            choices: this.queryChoice({
                query: n,
                choices: r,
                limit: null
            }).map((e) => e.choice)
        };
    },
    queryEmojiResults(e) {
        let { query: n, channel: r, intention: i, maxCount: a = ee.rnv, matchComparator: s } = e;
        return (
            x.DZ.loadIfNecessary(),
            {
                emojis: I.ZP.searchWithoutFetchingLatest({
                    channel: r,
                    query: n,
                    count: a,
                    intention: i,
                    matchComparator: s
                })
            }
        );
    },
    queryStickers(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eg],
            { stickerMetadata: a } = O.Z,
            s = Y.default.getCurrentUser(),
            o = new Set(),
            l = [];
        for (let u of (x.DZ.loadIfNecessary(), e)) {
            if ('' === u) continue;
            let e = u.toLocaleLowerCase(),
                c = (0, J._I)(e),
                d = RegExp('^'.concat(Q.Z.escape(c)), 'i'),
                f = RegExp(''.concat(Q.Z.escape(c)), 'i');
            a.forEach((a, u) => {
                let c = 0,
                    _ = null,
                    h = O.Z.getStickerById(u);
                if (null == h || !i(h, (0, C.cO)(h, s, r))) return;
                for (let r of a) {
                    let { type: i, value: a } = r,
                        s = eO(i),
                        o = 0;
                    n ? (a === e ? (o = ea * s) : d.test(a) ? (o = es * s) : (i === D.MO.GUILD_NAME || i === D.MO.PACK_NAME || i === D.MO.STICKER_NAME) && f.test(a) && (o = eo * s)) : a === e && ((o = ea * s), (_ = a)), o > c && ((c = o), (_ = a));
                }
                let p = R.Z.stickerFrecencyWithoutFetchingLatest.getScore(u);
                null != p && (c *= p / 100),
                    c > 0 &&
                        null != _ &&
                        !o.has(h.id) &&
                        (o.add(h.id),
                        l.push({
                            sticker: h,
                            comparator: _,
                            score: c
                        }));
            });
        }
        return (
            0 ===
                (l = _()(l)
                    .sortBy((e) => -1 * e.score)
                    .value()).length && (l = ev),
            l
        );
    },
    querySoundmoji(e, n) {
        let r = Y.default.getCurrentUser();
        !A.Z.isFetching() && !A.Z.hasFetchedAllSounds() && (0, S.w)(), x.DZ.loadIfNecessary();
        let i = A.Z.getSounds()
            .values()
            .reduce(
                (e, r) => (
                    r.forEach((r) => {
                        (0, y.Z)(r, null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id) && e.push(r);
                    }),
                    e
                ),
                []
            );
        return (0, N.cK)(e, i, r, n);
    },
    matchSentinel: (e, n, r) => !eE.test(n) && e === r,
    hasSameRoleAsUsername(e, n) {
        if (!n.isPomelo()) return !1;
        let r = B.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != r ? B.Z.getRoles(r.id) : {})) if (n.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};

let i;
r.d(n, {
    k1: function () {
        return eS;
    }
});
var a = r(653041);
var o = r(733860);
var s = r(757143);
var l = r(47120);
var u = r(724458);
var c = r(658722),
    d = r.n(c),
    f = r(392711),
    p = r.n(f),
    h = r(815372),
    _ = r(620490),
    m = r(933557),
    g = r(605436),
    E = r(565924),
    v = r(710845),
    y = r(339085),
    b = r(31445),
    I = r(931261),
    T = r(277078),
    S = r(208049),
    A = r(763296),
    C = r(421673),
    N = r(285651),
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
    eo = 7,
    es = 5,
    el = 3,
    eu = 1,
    ec = 1,
    ed = 11,
    ef = 6,
    ep = 8,
    eh = 1,
    e_ = 1000,
    em = 50,
    eg = () => !0,
    eE = /(\t|\s)/,
    ev = [],
    ey = (i = r(786074).Z).MENTION_EVERYONE,
    eb = i.MENTION_HERE,
    eI = i.LAUNCHABLE_APPLICATIONS;
function eT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments.length > 1 ? arguments[1] : void 0;
    return e_ * e * (null != n ? n : 1);
}
let eS = [k.sH, k.Zb, ee.d4z.GUILD_CATEGORY];
function eA(e, n) {
    return e.split(/(?:,| )+/).every((e) => RegExp(Q.Z.escape(e), 'i').test(n));
}
function eC(e, n) {
    let { exactQuery: r, containQuery: i, queryLower: a, isFullMatch: o } = n,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (r.test(e)) {
            if (e.toLocaleLowerCase() === a) return ea;
            if (!1 === o) {
                let n = a.length / e.length;
                return Math.max(eu, eo * n);
            }
            return eo;
        }
        if (i.test(e)) return es;
        if (eA(a, e)) return el;
        if (s && d()(a, e)) return eu;
    } catch (e) {
        ei.error(e);
    }
    return 0;
}
function eN(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eR(e) {
    let { query: n, members: r, limit: i, filter: a, allowSnowflake: o } = e,
        s = Y.default.getUsers(),
        l = H.Z.getGuildId(),
        u = n.toLocaleLowerCase(),
        c = (0, J.Fv)(u),
        f = [],
        p = [],
        h = r.length,
        m = 0,
        g = 0;
    for (; m < h; ) {
        var E, v, y, b, I, T, S, A, C;
        let e, i;
        let h = r[m];
        h instanceof P.Z ? ((i = h), (e = null === (v = U.ZP.getNick(l, i.id)) || void 0 === v ? void 0 : v.toLocaleLowerCase())) : ((e = null === (y = h.nick) || void 0 === y ? void 0 : y.toLocaleLowerCase()), (i = s[h.userId]));
        let _ = null === (E = $.ZP.getGlobalName(i)) || void 0 === E ? void 0 : E.toLocaleLowerCase();
        if (null != i && (null == a || a(i))) {
            let r = i.username.toLocaleLowerCase(),
                a = (0, J._I)(r),
                s = (0, J.Fv)(a),
                l = null != e ? (0, J._I)(e) : null,
                h = null != l ? (0, J.Fv)(l) : null,
                m = null != _ ? (0, J._I)(_) : null,
                E = null != m ? (0, J.Fv)(m) : null;
            (o && n === i.id) || r.substring(0, u.length) === u || a.substring(0, u.length) === u || (null == e ? void 0 : e.substring(0, u.length)) === u || (null == l ? void 0 : l.substring(0, u.length)) === u || (null == _ ? void 0 : _.substring(0, u.length)) === u || (null == m ? void 0 : m.substring(0, u.length)) === u
                ? f.push({
                      type: et.h8.USER,
                      record: i,
                      score: ea,
                      comparator: null !== (b = null != _ ? _ : e) && void 0 !== b ? b : r,
                      sortable: null !== (I = null != m ? m : l) && void 0 !== I ? I : a
                  })
                : s.substring(0, c.length) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == E ? void 0 : E.substring(0, c.length)) === c
                  ? f.push({
                        type: et.h8.USER,
                        record: i,
                        score: eu,
                        comparator: null !== (T = null != _ ? _ : e) && void 0 !== T ? T : r,
                        sortable: null !== (S = null != m ? m : l) && void 0 !== S ? S : a
                    })
                  : g < em &&
                    (d()(u, a) || d()(c, s) || (null != l && d()(u, l)) || (null != h && d()(c, h)) || (null != m && d()(u, m)) || (null != E && d()(c, E))) &&
                    (p.push({
                        type: et.h8.USER,
                        record: i,
                        score: eu,
                        comparator: null !== (A = null != _ ? _ : e) && void 0 !== A ? A : r,
                        sortable: null !== (C = null != m ? m : l) && void 0 !== C ? C : a
                    }),
                    (g += 1));
        }
        m += 1;
    }
    return f.sort(_.Z), f.length < i && (p.sort(_.Z), (f = f.concat(p.slice(0, Math.max(0, i - f.length))))), f.length > i && (f.length = i), f;
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
            return ep;
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
    for (let o of n) {
        let n = eC(e, o, r);
        n > i && ((i = n), (a = o));
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
        : p()(G.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => Y.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let n = r.getGuildId();
                  return null == n || eN(U.ZP.getMember(n, e.id));
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
            { channelId: r, query: i, limit: a = 10, request: o = !0, checkRecentlyTalkedOnEmptyQuery: s = !0, allowSnowflake: l = !1 } = e,
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
            if (0 === i.length && s) {
                let e = ek(u.id, a);
                if (e.length > 0) return e;
            }
            (n = U.ZP.getMembers(d.guild_id).filter(eN)), o && z.Z.requestMembers(d.guild_id, i, a);
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
        let { guildId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, filter: s, allowSnowflake: l } = e;
        if (null == B.Z.getGuild(n)) return [];
        if (0 === r.length && o) {
            let e = ek(j.Z.getChannelId(n), i);
            if (e.length > 0) return e;
        }
        let u = U.ZP.getMembers(n).filter(eN);
        return (
            a && r.length > 0 && z.Z.requestMembers(n, r, i),
            eR({
                query: r,
                members: u,
                limit: i,
                filter: s,
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
                members: p()(Y.default.getUsers()).values().value(),
                limit: n,
                filter: i
            })
        );
    },
    queryChannels(e) {
        let n,
            { query: r, guildId: i, limit: a = ee.rnv, fuzzy: o = !0, filter: s = eg, type: l = k.sH, allowEmptyQueries: u = !1, requireVocalConnectAccess: c = !0, boosters: d = {}, allowSnowflake: f } = e,
            h = ex(r, u);
        n =
            null != i
                ? p()(k.ZP.getChannels(i)[l])
                      .map((e) => e.channel)
                      .concat(L.Z.computeAllActiveJoinedThreads(i))
                      .value()
                : p()(M.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(L.Z.computeAllActiveJoinedThreads()).value();
        let g = {},
            E = [];
        for (let e of n) {
            if (!eD(l, e.type, null != i) || ((0, w.Km)(e.type) && !Z.Z.can(c ? e.accessPermissions : ee.Plq.VIEW_CHANNEL, e)) || !s(e)) continue;
            let n = [...h],
                a = e.name.toLocaleLowerCase(),
                u = f && r === e.id,
                p = u ? ea : ew(a, n, o);
            if (0 !== p) {
                if (n.length > 0) {
                    for (let r of [eP(e, g), eM(e, g)]) {
                        if (null == r || '' === r) continue;
                        let e = ew(r, n, !1);
                        0 !== e && (p += 0.5 * e);
                    }
                    p = Math.min(eo - eu, p);
                }
                if (0 === p || n.length > 1 || (1 === n.length && !n[0].isFullMatch && !u)) continue;
                eL(l, e.type) && (p = Math.max(p - ec, eu / 2)),
                    E.push({
                        type: (0, w.bw)(e.type) ? et.h8.VOICE_CHANNEL : et.h8.TEXT_CHANNEL,
                        record: e,
                        score: eT(p, d[e.id]),
                        comparator: (0, m.F6)(e, Y.default, V.Z),
                        sortable: a
                    });
            }
        }
        return E.sort(_.Z), null != a && E.length > a && (E.length = a), E;
    },
    queryGuilds(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg, boosters: o = {} } = e,
            s = '' === n ? '' : n.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(s)), 'i'),
                containQuery: RegExp(Q.Z.escape(s), 'i'),
                queryLower: s
            },
            u = [];
        for (let e of p()(B.Z.getGuilds()).values().value()) {
            if (!a(e)) continue;
            let n = e.name.toLocaleLowerCase(),
                r = eC(n, l, i);
            r > 0 &&
                u.push({
                    type: et.h8.GUILD,
                    record: e,
                    score: eT(r, o[e.id]),
                    comparator: e.toString(),
                    sortable: n
                });
        }
        return u.sort(_.Z), u.length > r && (u.length = r), u;
    },
    queryGroupDMs(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg, boosters: o = {} } = e,
            s = (0, J._I)((0, J.Fv)(n.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(s)), 'i'),
                containQuery: RegExp(Q.Z.escape(s), 'i'),
                queryLower: s
            },
            u = p()(M.Z.getMutablePrivateChannels()).values().value(),
            c = [];
        for (let e of u) {
            if (!e.isMultiUserDM() || !a(e)) continue;
            let n = (0, m.F6)(e, Y.default, V.Z).toLocaleLowerCase(),
                r = (0, J._I)((0, J.Fv)(n)),
                s = eC(r, l, i);
            s > 0 &&
                c.push({
                    type: et.h8.GROUP_DM,
                    record: e,
                    score: eT(s, o[e.id]),
                    comparator: (0, m.F6)(e, Y.default, V.Z),
                    sortable: r
                });
        }
        return c.sort(_.Z), c.length > r && (c.length = r), c;
    },
    queryApplications(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg } = e,
            o = n.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(o)), 'i'),
                containQuery: RegExp(Q.Z.escape(o), 'i'),
                queryLower: o
            },
            l = eI(),
            u = [];
        for (let { application: e } of l) {
            if (!a(e)) continue;
            let n = e.name.toLocaleLowerCase(),
                r = eC(n, s, i);
            r > 0 &&
                u.push({
                    type: et.h8.APPLICATION,
                    record: e,
                    score: r,
                    comparator: e.name,
                    sortable: n
                });
        }
        return u.sort(_.Z), u.length > r && (u.length = r), u;
    },
    queryInAppNavigations(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0 } = e,
            a = n.toLocaleLowerCase(),
            o = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(a)), 'i'),
                containQuery: RegExp(Q.Z.escape(a), 'i'),
                queryLower: a
            },
            s = {
                [h.Ky.SHOP]: [er.intl.string(er.t.pWG4zc)],
                [h.Ky.NITRO_HOME]: [er.intl.string(er.t.Ipxkoq)],
                [h.Ky.QUEST_HOME]: [er.intl.string(er.t.JALI2N)],
                [h.Ky.APPS_HOME]: [er.intl.string(er.t.PHjkRE), er.intl.string(er.t.AKcFUl)]
            },
            l = [];
        for (let e in s) {
            let n = h.Ky[e];
            for (let e of s[n]) {
                let r = e.toLocaleLowerCase(),
                    a = eC(r, o, i);
                a > 0 &&
                    l.push({
                        type: et.h8.IN_APP_NAVIGATION,
                        record: h.FL.fromType(n),
                        score: eT(a),
                        comparator: r,
                        sortable: r
                    });
            }
        }
        return l.sort(_.Z), l.length > r && (l.length = r), l;
    },
    querySKUs(e) {
        let { query: n, limit: r = 10, fuzzy: i = !0, filter: a = eg } = e,
            o = n.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Q.Z.escape(o)), 'i'),
                containQuery: RegExp(Q.Z.escape(o), 'i'),
                queryLower: o
            },
            l = p()(W.Z.getSKUs()).values().value(),
            u = [];
        for (let e of l)
            if (e.type === ee.epS.DURABLE_PRIMARY && a(e)) {
                let n = e.name.toLocaleLowerCase(),
                    r = eC(n, s, i);
                r > 0 &&
                    u.push({
                        type: et.h8.SKU,
                        record: e,
                        score: r,
                        comparator: e.name,
                        sortable: n
                    });
            }
        return u.sort(_.Z), u.length > r && (u.length = r), u;
    },
    getRecentlyTalked: ek,
    queryMentionResults(e) {
        let { query: n, channel: r, canMentionEveryone: i = !1, canMentionHere: a = !0, canMentionUsers: o = !0, canMentionRoles: s = !0, includeAllGuildUsers: l = !1, includeNonMentionableRoles: u = !1, checkRecentlyTalkedOnEmptyQuery: c = !0, limit: f = ee.rnv, request: h, allowSnowflake: _ = !1 } = e,
            m = o
                ? (l && null != r.guild_id
                      ? this.queryGuildUsers({
                            guildId: r.guild_id,
                            query: n,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: c,
                            request: h,
                            allowSnowflake: _
                        })
                      : this.queryChannelUsers({
                            channelId: r.id,
                            query: n,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: c,
                            allowSnowflake: _
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
        if (g < f && s) {
            let e = r.getGuildId(),
                n = B.Z.getGuild(e);
            null != n &&
                (p()(B.Z.getRoles(n.id))
                    .filter((n) => {
                        let { mentionable: r, name: a, id: o } = n;
                        return (r || i || u) && (d()(E, a.toLowerCase()) || (_ && E === o)) && o !== X.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(f - g)
                    .forEach((e) => {
                        v.push(e);
                    }),
                (g += v.length));
        }
        let y = [];
        return (
            !r.isPrivate() && i && s && (g < f && d()(E, ey().test) && (y.push(ey()), (g += 1)), a && g < f && d()(E, eb().test) && y.push(eb())),
            {
                users: m,
                globals: y,
                roles: v
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: n, guildId: r, canMentionEveryone: i = !1, canMentionUsers: a = !0, canMentionRoles: o = !0, canMentionNonMentionableRoles: s = !1 } = e,
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
        if (u < ee.rnv && o) {
            let e = B.Z.getGuild(r);
            null != e &&
                (p()(B.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: n, name: a, id: o } = e;
                        return (n || i || s) && d()(c, a.toLowerCase()) && (0, g.Gy)(r, o);
                    })
                    .take(ee.rnv - u)
                    .forEach((e) => {
                        f.push(e);
                    }),
                (u += f.length));
        }
        let h = [];
        return (
            i && o && (u < ee.rnv && d()(c, ey().test) && (h.push(ey()), (u += 1)), u < ee.rnv && d()(c, eb().test) && h.push(eb())),
            {
                users: l,
                globals: h,
                roles: f
            }
        );
    },
    queryChoice(e) {
        let { query: n, choices: r, limit: i = 10, fuzzy: a = !0 } = e,
            o = n.toLocaleLowerCase(),
            s = RegExp('^'.concat(Q.Z.escape(o)), 'i'),
            l = RegExp(Q.Z.escape(o), 'i'),
            u = p()(r)
                .map((e, n) => {
                    let r = eC(
                        e.displayName.toLocaleLowerCase(),
                        {
                            exactQuery: s,
                            containQuery: l,
                            queryLower: o
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
            o = (0, I.s)(r.id) && !r.hasFeature(ee.oNc.HUB),
            s = r.hasFeature(ee.oNc.COMMUNITY),
            l = (0, b.t)(r) && r.hasFeature(ee.oNc.COMMUNITY),
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
            if ((e.id !== en.HY.SERVER_GUIDE || !!o) && (e.id !== en.HY.CHANNEL_BROWSER || !!s) && (e.id !== en.HY.CUSTOMIZE_COMMUNITY || !!l))
                eC(e.name.toLocaleLowerCase(), a, !1) > 0 &&
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
        let { query: n, channel: r, channelTypes: i, limit: a = ee.rnv, allowSnowflake: o } = e;
        if (null == r.guild_id) {
            let e = [];
            return (null == i || i.includes(r.type)) && e.push(r), { channels: e };
        }
        let s = [];
        for (let e of eS)
            s = s.concat(
                this.queryChannels({
                    query: n,
                    guildId: r.guild_id,
                    limit: a,
                    fuzzy: !0,
                    filter: (e) => null == i || i.includes(e.type),
                    type: e,
                    allowEmptyQueries: !0,
                    requireVocalConnectAccess: !1,
                    allowSnowflake: o
                })
            );
        return (
            (s = s
                .filter((e) => {
                    let { record: n } = e;
                    return 'null' !== n.id;
                })
                .sort(E.Z)),
            null != a && s.length > a && (s = s.slice(0, a)),
            { channels: s.map((e) => e.record) }
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
        let { query: n, channel: r, intention: i, maxCount: a = ee.rnv, matchComparator: o } = e;
        return (
            x.DZ.loadIfNecessary(),
            {
                emojis: y.ZP.searchWithoutFetchingLatest({
                    channel: r,
                    query: n,
                    count: a,
                    intention: i,
                    matchComparator: o
                })
            }
        );
    },
    queryStickers(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, eg],
            { stickerMetadata: a } = O.Z,
            o = Y.default.getCurrentUser(),
            s = new Set(),
            l = [];
        for (let u of (x.DZ.loadIfNecessary(), e)) {
            if ('' === u) continue;
            let e = u.toLocaleLowerCase(),
                c = (0, J._I)(e),
                d = RegExp('^'.concat(Q.Z.escape(c)), 'i'),
                f = RegExp(''.concat(Q.Z.escape(c)), 'i');
            a.forEach((a, u) => {
                let c = 0,
                    p = null,
                    h = O.Z.getStickerById(u);
                if (null == h || !i(h, (0, N.cO)(h, o, r))) return;
                for (let r of a) {
                    let { type: i, value: a } = r,
                        o = eO(i),
                        s = 0;
                    n ? (a === e ? (s = ea * o) : d.test(a) ? (s = eo * o) : (i === D.MO.GUILD_NAME || i === D.MO.PACK_NAME || i === D.MO.STICKER_NAME) && f.test(a) && (s = es * o)) : a === e && ((s = ea * o), (p = a)), s > c && ((c = s), (p = a));
                }
                let _ = R.Z.stickerFrecencyWithoutFetchingLatest.getScore(u);
                null != _ && (c *= _ / 100),
                    c > 0 &&
                        null != p &&
                        !s.has(h.id) &&
                        (s.add(h.id),
                        l.push({
                            sticker: h,
                            comparator: p,
                            score: c
                        }));
            });
        }
        return (
            0 ===
                (l = p()(l)
                    .sortBy((e) => -1 * e.score)
                    .value()).length && (l = ev),
            l
        );
    },
    querySoundmoji(e, n) {
        let r = Y.default.getCurrentUser();
        !A.Z.isFetching() && !A.Z.hasFetchedAllSounds() && (0, S.w)(), x.DZ.loadIfNecessary();
        let i = Array.from(A.Z.getSounds().values()).reduce(
            (e, r) => (
                r.forEach((r) => {
                    (0, T.Z)(r, null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id) && e.push(r);
                }),
                e
            ),
            []
        );
        return (0, C.cK)(e, i, r, n);
    },
    matchSentinel: (e, n, r) => !eE.test(n) && e === r,
    hasSameRoleAsUsername(e, n) {
        if (!n.isPomelo()) return !1;
        let r = B.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != r ? B.Z.getRoles(r.id) : {})) if (n.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};

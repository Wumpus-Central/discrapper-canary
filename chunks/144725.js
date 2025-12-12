n.d(t, { Z: () => eP }), n(388685), n(642613), n(539854);
var r,
    i = n(876215),
    l = n(442837),
    a = n(570140),
    s = n(146282),
    o = n(26033),
    c = n(561308),
    u = n(353926),
    d = n(924301),
    p = n(786761),
    f = n(314897),
    g = n(592125),
    h = n(165630),
    m = n(430824),
    _ = n(375954),
    b = n(496675),
    E = n(306680),
    O = n(699516),
    v = n(9156),
    y = n(70956),
    I = n(900849),
    C = n(709054),
    S = n(944596),
    T = n(518929),
    N = n(769917),
    j = n(797394),
    P = n(634773),
    x = n(613928),
    A = n(981631),
    Z = n(206583);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = +y.Z.Millis.DAY,
    M = 3 * y.Z.Millis.DAY,
    k = [],
    U = null,
    G = 0,
    B = [],
    H = [],
    V = {},
    F = {},
    z = {},
    Y = {},
    W = {},
    q = {},
    K = 0,
    Q = !1,
    J = !1,
    X = !1,
    $ = null,
    ee = null,
    et = 0,
    en = [],
    er = [],
    ei = 0,
    el = [],
    ea = 0,
    es = !0,
    eo = !1,
    ec = new Set(),
    eu = !1,
    ed = !1,
    ep = 0,
    ef = 0;
function eg(e, t) {
    if (Date.now() - G > 6 * y.Z.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function eh(e) {
    if (!N.Z.filterStaffContent()) return !0;
    if ((0, x._e)(e)) {
        if (e.data.guild_id === j.KF) return !0;
        let t = m.Z.getGuild(e.data.guild_id);
        if (null == t || t.features.has(A.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function em(e, t, n, r) {
    let i = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * r < i.length ? i.splice((t + 1) * r, 0, e) : i.push(e);
        }),
        i
    );
}
function e_() {
    if (
        ((en = en.filter((e) => e.type !== j.Ni.RECOMMENDED_GUILDS)),
        (er = er.filter((e) => e.type !== j.Ni.RECOMMENDED_GUILDS)),
        0 === el.length)
    )
        return;
    let e = "recommendedGuilds",
        t = m.Z.getGuildsArray().filter((e) => e.features.has(A.GuildFeatures.COMMUNITY)).length >= 5,
        n = P.Z.getReadTimestamp(e);
    if (t && null != n && Date.now() - ea > D && Date.now() - n < M) return;
    let r = {
        id: e,
        type: j.Ni.RECOMMENDED_GUILDS,
        score: 50,
    };
    if (((z[r.id] = r), (F[r.id] = r), 0 === en.length)) er = [r, ...er];
    else if ((!t && en.length < 5) || (t && en.length < 10)) en = [...en, r];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        en.splice(e, 0, r);
    } else en.splice(5, 0, r);
}
function eb() {
    let e = new Set();
    if (
        (B.forEach((t) => {
            e.add(t.id);
        }),
        null != ee)
    )
        if (e.has(ee.id)) {
            let e = ee.id,
                t = ee.type,
                n = B.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((ee = B[n]), (B = B.filter((t) => t.id !== e)), (B = [ee, ...B]));
        } else (B = [ee, ...B]), e.add(ee.id);
    B.forEach((e) => {
        (F[e.id] = e),
            e.type === j.Ni.CUSTOM_STATUS &&
                (O.Z.isBlockedOrIgnored(e.data.user_id) ? (Y[e.id] = !0) : (z[e.id] = (0, x.mV)(e)));
    });
}
function eE(e) {
    if ((B.length > 0 && ((k = B), (B = []), (H = [])), K++, null != e)) (en = e.newUnread), (er = e.newRead);
    else {
        let [e, t] = eO(k);
        (en = e), (er = t);
    }
    if (
        (N.Z.onlyShowRecentGeneratedCandidates() ||
            ((function () {
                let e = m.Z.getGuildIds(),
                    t = [];
                for (let r of e) {
                    if (null != W[r] && W[r] < 0) continue;
                    let e = d.ZP.getGuildScheduledEventsForGuild(r),
                        i = 0;
                    for (let r of e)
                        if (!(0, d.Z2)(r)) {
                            if (null != r.channel_id) {
                                let e = g.Z.getChannel(r.channel_id);
                                if (!b.Z.can(A.Plq.VIEW_CHANNEL, e)) continue;
                            }
                            if ((0, d.BQ)(r, 2 * y.Z.Seconds.DAY) || (0, d.xt)(r)) {
                                var n;
                                if (
                                    (null == z[r.id] &&
                                        (z[r.id] = {
                                            id: r.id,
                                            type: j.Ni.GUILD_EVENT,
                                            score: 10,
                                            event_id: r.id,
                                        }),
                                    t.push({
                                        id: r.id,
                                        type: j.Ni.GUILD_EVENT,
                                        score: 10,
                                        data: {
                                            guild_id: r.guild_id,
                                            event_id: r.id,
                                            channel_id: null != (n = r.channel_id) ? n : void 0,
                                        },
                                    }),
                                    ++i >= 1)
                                )
                                    break;
                            }
                        }
                }
                t.sort((e, t) => {
                    let n = h.Z.getGuildAffinity(e.data.guild_id),
                        r = h.Z.getGuildAffinity(t.data.guild_id);
                    return (null != r ? r.score : 0) - (null != n ? n.score : 0);
                });
                let r = [],
                    i = [];
                t.forEach((e) => {
                    (F[e.id] = e), null != P.Z.getReadTimestamp(e.id) ? i.push(e) : r.push(e);
                }),
                    (en = em(en, r, j.Ni.GUILD_EVENT, 7)),
                    (er = em(er, i, j.Ni.GUILD_EVENT, 7));
            })(),
            (function () {
                var e, t;
                let n = new Set(),
                    r = {},
                    l = [],
                    a = [],
                    u = null != (t = null == (e = s.Z.getFeed(Z.YN.GLOBAL_FEED)) ? void 0 : e.entries) ? t : [];
                u.sort((e, t) => e.rank - t.rank).slice(0, 5),
                    u.forEach((e) => {
                        if (
                            n.has(e.content.id) ||
                            (e.content.content_type !== i.s.PLAYED_GAME &&
                                e.content.content_type !== i.s.CUSTOM_STATUS &&
                                e.content.content_type !== i.s.TOP_GAME) ||
                            (0, c.n2)(e.content)
                        )
                            return;
                        if ((0, o.dX)(e.content)) {
                            if (
                                (null == r[e.content.author_id] && (r[e.content.author_id] = new Set()),
                                r[e.content.author_id].has(e.content.extra.application_id))
                            )
                                return;
                            r[e.content.author_id].add(e.content.extra.application_id);
                        }
                        null == z[e.content.id] &&
                            (z[e.content.id] = {
                                id: e.content.id,
                                type: j.Ni.ACTIVITY,
                                score: 15,
                                activity: e.content,
                            });
                        let t = {
                            id: e.content.id,
                            type: j.Ni.ACTIVITY,
                            score: 15,
                            data: {
                                user_id: e.content.author_id,
                                content_id: e.content.id,
                            },
                        };
                        n.add(e.content.id), (F[t.id] = t), null != P.Z.getReadTimestamp(t.id) ? a.push(t) : l.push(t);
                    }),
                    (en = em(en, l, j.Ni.ACTIVITY, 5)),
                    (er = em(er, a, j.Ni.ACTIVITY, 5));
            })(),
            e_()),
        null != V.load_id && U !== V.load_id)
    ) {
        var t;
        S.m.trackFeedLoaded({
            newTrackingProps: V,
            hasNewContent: J,
            unreadFeedItems: en,
            readFeedItems: er,
            homeSessionId: "gravity",
        }),
            (U = null != (t = V.load_id) ? t : null),
            (V = {});
    }
    (ei = 0), en.length + er.length === 0 && (ed = !0), (0, x.em)([...en, ...er], 0, j.xy), (eo = !1);
}
function eO(e) {
    let t = [],
        n = [],
        r = [];
    return (
        e.forEach((e) => {
            let i = null != P.Z.getReadTimestamp(e.id);
            if (e.type === j.Ni.MESSAGE) {
                var l;
                (null == (l = e.data.message_context) ? void 0 : l.external_content_application_id) == null &&
                    (i = i || !(0, x.$U)(e.data.channel_id, e.data.message_id));
            }
            i ? t.push(e) : e.type === j.Ni.MESSAGE && e.data.has_mention ? r.push(e) : n.push(e);
        }),
        [[...r, ...n], t.sort((e, t) => (0, x.Rm)(e.id, t.id))]
    );
}
function ev(e, t) {
    let n = [],
        r = new Set(k.map((e) => e.id));
    for (let i of e)
        !(i.type === j.Ni.RECOMMENDED_GUILDS || r.has(i.id)) &&
            null == P.Z.getReadTimestamp(i.id) &&
            (i.type !== j.Ni.MESSAGE || ((0, x.$U)(i.data.channel_id, i.data.message_id) && i.data.channel_id !== t)) &&
            n.push(i);
    return n;
}
function ey(e, t) {
    return e.filter((e) => !(0, x._e)(e) || e.data.channel_id !== t);
}
function eI(e, t) {
    (0, x.jv)(t) === x.aL.MUTED && ((k = ey(k, e)), (en = ey(en, e)), (er = ey(er, e)), (B = ey(B, e)), (H = ey(H, e)));
}
function eC(e, t) {
    return e.filter((e) => !(0, x._e)(e) || e.data.guild_id !== t);
}
function eS(e, t) {
    (0, x.jv)(t) === x.aL.MUTED && ((k = eC(k, e)), (en = eC(en, e)), (er = eC(er, e)), (B = eC(B, e)), (H = eC(H, e)));
}
function eT(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: l } = e,
        a = z[n];
    if (null == a || a.type !== j.Ni.MESSAGE) return !1;
    let s = f.default.getId() === r;
    "MESSAGE_REACTION_ADD" === t
        ? (a.message = a.message.addReaction(i, s, e.colors, l))
        : (a.message = a.message.removeReaction(i, s, l));
}
function eN(e) {
    let { channelId: t } = e,
        n = [],
        r = [];
    en.forEach((e, i) => {
        (i > ei || !X) && e.type === j.Ni.MESSAGE && e.data.channel_id === t ? n.push(e) : r.push(e);
    });
    let i = J,
        [l, a] = eO(B);
    if (((H = ev(l, t)), (J = X ? i && H.length >= j.Lb : i && eg(r, B)), 0 === n.length && i === J)) return !1;
    0 !== n.length && ((en = r), (er = [...er, ...n]));
}
class ej extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(f.default, g.Z, s.Z, u.Z, h.Z, d.ZP, m.Z, N.Z, P.Z, _.Z, b.Z, E.ZP, O.Z, v.ZP), null != e)) {
            var t, n, r, i, l, a, o;
            (k = null != (t = e.dehydratedItems) ? t : []).forEach((e) => {
                F[e.id] = e;
            }),
                (W = null != (n = e.customGuildScores) ? n : {}),
                (q = null != (r = e.customChannelScoresByGuild) ? r : {}),
                (et = null != (i = e.numOpens) ? i : 0),
                (G = null != (l = e.lastOpened) ? l : 0),
                (ea = null != (a = e.lastJoinedRecommendedGuild) ? a : 0),
                (ef = null != (o = e.lastTakenICYMISurvey) ? o : 0);
        }
    }
    getVersion() {
        return K;
    }
    getDehydratedItems() {
        return k;
    }
    getNewDehydratedItems() {
        return B;
    }
    getDehydratedItem(e) {
        var t;
        return null != (t = F[e]) ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null != (t = z[e]) ? t : null;
    }
    getMessage(e) {
        let t = z[e];
        return null == t || t.type !== j.Ni.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return z;
    }
    getUnreadDisplayItems() {
        return en;
    }
    getNewUnreadDehydratedItems() {
        return H;
    }
    getReadDisplayItems() {
        return er;
    }
    getNextIndexToHydrate() {
        return ei;
    }
    getMissingItems() {
        return Y;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === x.aL.MUTED || this.getCustomChannelScore(e, t) === x.aL.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == q[e] || null == q[e][t] ? x.aL.UNKNOWN : (0, x.jv)(q[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null != (t = W[e]) ? t : 0;
    }
    getCustomGuildScores() {
        return W;
    }
    hasNewContent() {
        return J;
    }
    getCurrentStatusAttachments(e) {
        return null == $ || $[0] !== e ? [] : $[1];
    }
    getLoadId() {
        return U;
    }
    hasOpenedEnoughTimes() {
        return 5 === et;
    }
    hasOpened() {
        return X;
    }
    getDiscoverableGuilds() {
        return el;
    }
    videosMuted() {
        return es;
    }
    isRefreshing() {
        return eo;
    }
    isHydrating() {
        return ec.size > 0;
    }
    notificationItem() {
        return ee;
    }
    getIsTabFocused() {
        return eu;
    }
    isFirstPageHydrated() {
        return ed;
    }
    lastScrollEvent() {
        return ep;
    }
    lastTakenICYMISurvey() {
        return ef;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...en, ...er].findIndex((e) => e.type === j.Ni.RECOMMENDED_GUILDS)
            : [...en, ...er].filter((e) => null != z[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: k,
            numOpens: et,
            customGuildScores: W,
            customChannelScoresByGuild: q,
            lastOpened: G,
            lastJoinedRecommendedGuild: ea,
            lastTakenICYMISurvey: ef,
        };
    }
}
w(ej, "displayName", "ICYMIStore"), w(ej, "persistKey", "ICYMIStore");
let eP = new ej(a.Z, {
    LOGOUT: function () {
        (k = []),
            (B = []),
            (H = []),
            (F = {}),
            (V = {}),
            (z = {}),
            (Y = {}),
            (U = null),
            (W = {}),
            (q = {}),
            (K = 0),
            (Q = !1),
            (J = !1),
            (X = !1),
            (en = []),
            (er = []),
            (ei = 0),
            (G = 0),
            (ea = 0),
            (es = !0),
            (eo = !1),
            (ec = new Set()),
            (ee = null),
            (eu = !1),
            (ed = !1),
            ($ = null),
            (ep = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (ee = n), null != U && ((B = B.length > 0 ? B : [...k]), eb(), eE()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: j.Ni.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: A.d4z.GUILD_TEXT,
                },
            };
            if (
                ((F[t.message.id] = e),
                (z[t.message.id] = R(L({}, e), { message: (0, p.e5)(t.message) })),
                null == U && null == V)
            ) {
                let [t, n] = eO((k = [e, ...k]));
                (en = t), (er = n);
            } else (B = [e, ...B]), eE();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t, loadId: n, startTime: r, isInitialLoad: i, isReloading: l } = e;
        (B = (function (e) {
            let { contentGenerationEnabled: t } = (0, T.q3)("processRawItems", !1),
                n = N.Z.onlyShowRecentGeneratedCandidates(),
                r = new Set(j.zd);
            n ? (r = new Set([j.Ni.GENERATED_CANDIDATE])) : t && r.add(j.Ni.GENERATED_CANDIDATE);
            let i = e.filter((e) => r.has(e.type)).filter(eh);
            return (
                n && i.sort((e, t) => C.default.extractTimestamp(t.id) - C.default.extractTimestamp(e.id)),
                i.map((e) => {
                    if (e.type === j.Ni.MESSAGE && null != e.data.message_context) {
                        let t = {};
                        null != e.data.message_context.reply_message_id &&
                            0 !== parseInt(e.data.message_context.reply_message_id) &&
                            (t.reply_message_id = e.data.message_context.reply_message_id),
                            null != e.data.message_context.before_message_id &&
                                0 !== parseInt(e.data.message_context.before_message_id) &&
                                (t.before_message_id = e.data.message_context.before_message_id),
                            null != e.data.message_context.after_message_id &&
                                0 !== parseInt(e.data.message_context.after_message_id) &&
                                (t.after_message_id = e.data.message_context.after_message_id),
                            null != e.data.message_context.external_content_application_id &&
                                0 !== parseInt(e.data.message_context.external_content_application_id) &&
                                (t.external_content_application_id =
                                    e.data.message_context.external_content_application_id),
                            null != e.data.message_context.reference_message_id &&
                                0 !== parseInt(e.data.message_context.reference_message_id) &&
                                (t.reference_message_id = e.data.message_context.reference_message_id),
                            (e.data.message_context = t);
                    }
                    return e;
                })
            );
        })(t)),
            eb(),
            (V = {
                load_id: n,
                load_time_millis: Date.now() - r,
                feed_item_ids: B.map((e) => e.id),
            });
        let [a, s] = eO(B);
        if (((H = ev(a)), !X || 0 === K || i))
            (K = 0),
                !eu && eg(a, B) ? ((J = !0), (Q = !0)) : (J = !1),
                eE({
                    newUnread: a,
                    newRead: s,
                });
        else {
            K > 0 && (ee = null);
            let e = H.length > j.Lb;
            l || (J = e), e && ((0, x.em)([...a, ...s], 0, j.xy), a.length + s.length === 0 && (ed = !0));
        }
        S.m.trackFeedLoaded({
            newTrackingProps: V,
            hasNewContent: J,
            unreadFeedItems: a,
            readFeedItems: s,
            homeSessionId: eu ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            generatedCandidateItems: r,
            requestMessageItems: i,
            requestActivityItems: l,
            requestGeneratedCandidateItems: a,
            startingIndex: s,
            endingIndex: o,
        } = e;
        (ed = !0), (z = L({}, z));
        let c = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            u = n.reduce((e, t) => ((e[t.id] = t), e), {}),
            d = r.reduce((e, t) => ((e[t.content_id] = t), e), {});
        i.forEach((e) => {
            let t = c[e.message_id];
            if (null == t) {
                Y[e.message_id] = !0;
                return;
            }
            let n = F[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: j.Ni.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: A.d4z.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let r = _.Z.getMessage(t.channel_id, t.message.id);
            if (null != r) {
                let e = (0, x.IC)(t, n);
                z[t.message.id] = R(L({}, e), { message: r });
            } else z[t.message.id] = (0, x.IC)(t, n);
        }),
            l.forEach((e) => {
                let t = u[e.content_id];
                if (null == t) {
                    Y[e.content_id] = !0;
                    return;
                }
                let n = F[e.content_id];
                if (null == n) {
                    Y[e.content_id] = !0;
                    return;
                }
                z[t.id] = R(L({}, n), { activity: t });
            }),
            a.forEach((e) => {
                let t = d[e.content_id];
                if (null == t) {
                    Y[e.content_id] = !0;
                    return;
                }
                let n = F[e.content_id];
                if (null == n || n.type !== j.Ni.GENERATED_CANDIDATE) {
                    Y[e.content_id] = !0;
                    return;
                }
                z[t.content_id] = R(L({}, n), { candidate: (0, x.NV)(t) });
            }),
            s === ei && (ei = o),
            ec.delete((0, x.y_)(s, o));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((W[e.guild_id] = e.guild_score),
            eS(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == q[e.guild_id] && (q[e.guild_id] = {}),
                    (q[e.guild_id][t] = e.custom_channel_scores[t]),
                    eI(t, e.custom_channel_scores[t]);
        (W = L({}, W)), (q = L({}, q));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (el = t.map((e) => (0, I.PP)(e.guild))), e_();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: r } = e;
        null != r && ((W[n] = r), eS(n, r), (W = L({}, W))),
            null == t ||
                t.forEach((e) => {
                    let { channelId: t, score: r } = e;
                    null == q[n] && (q[n] = {}), (q[n][t] = r), eI(t, r), (q = L({}, q));
                });
    },
    RELOAD_ICYMI: function () {
        if (0 === B.length) return !1;
        eE(), (J = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (X = !0), (G = Date.now()), Q && ((Q = !1), (J = !1)), et < 5 && et++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        et = 6;
    },
    MESSAGE_REACTION_ADD: eT,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            r = z[t];
        if (null == r || r.type !== j.Ni.MESSAGE) return !1;
        let i = f.default.getId();
        r.message = r.message.addReactionBatch(n, i);
    },
    MESSAGE_REACTION_REMOVE: eT,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = z[t];
        if (null == n || n.type !== j.Ni.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            r = z[t];
        if (null == r || r.type !== j.Ni.MESSAGE) return !1;
        r.message = r.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: eN,
    MESSAGE_ACK: eN,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        ea = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        es = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        eo = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        ec.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        ec.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        eu = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            $ = null;
            return;
        }
        $ = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        ep = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        ef = t;
    },
});

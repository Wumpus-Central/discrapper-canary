n.d(t, { Z: () => ex }), n(388685), n(642613), n(539854), n(583741);
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
    f = n(418088),
    h = n(314897),
    g = n(592125),
    m = n(165630),
    _ = n(430824),
    b = n(375954),
    E = n(496675),
    O = n(306680),
    v = n(699516),
    y = n(9156),
    I = n(70956),
    C = n(900849),
    S = n(709054),
    T = n(944596),
    N = n(518929),
    j = n(769917),
    P = n(797394),
    x = n(634773),
    A = n(613928),
    Z = n(981631),
    w = n(206583);
function L(e, t, n) {
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
function R(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
let M = +I.Z.Millis.DAY,
    k = 3 * I.Z.Millis.DAY,
    U = [],
    G = null,
    B = 0,
    H = [],
    V = [],
    F = {},
    z = {},
    Y = {},
    W = {},
    q = {},
    K = {},
    Q = 0,
    J = !1,
    X = !1,
    $ = !1,
    ee = null,
    et = null,
    en = 0,
    er = [],
    ei = [],
    el = 0,
    ea = [],
    es = 0,
    eo = !0,
    ec = !1,
    eu = new Set(),
    ed = !1,
    ep = !1,
    ef = 0,
    eh = 0;
function eg(e, t) {
    if (Date.now() - B > 6 * I.Z.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function em(e) {
    if (!j.Z.filterStaffContent()) return !0;
    if ((0, A._e)(e)) {
        if (e.data.guild_id === P.KF) return !0;
        let t = _.Z.getGuild(e.data.guild_id);
        if (null == t || t.features.has(Z.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function e_(e, t, n, r) {
    let i = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * r < i.length ? i.splice((t + 1) * r, 0, e) : i.push(e);
        }),
        i
    );
}
function eb() {
    if (
        ((er = er.filter((e) => e.type !== P.Ni.RECOMMENDED_GUILDS)),
        (ei = ei.filter((e) => e.type !== P.Ni.RECOMMENDED_GUILDS)),
        0 === ea.length)
    )
        return;
    let e = "recommendedGuilds",
        t = _.Z.getGuildsArray().filter((e) => e.features.has(Z.GuildFeatures.COMMUNITY)).length >= 5,
        n = x.Z.getReadTimestamp(e);
    if (t && null != n && Date.now() - es > M && Date.now() - n < k) return;
    let r = {
        id: e,
        type: P.Ni.RECOMMENDED_GUILDS,
        score: 50,
    };
    if (((Y[r.id] = r), (z[r.id] = r), 0 === er.length)) ei = [r, ...ei];
    else if ((!t && er.length < 5) || (t && er.length < 10)) er = [...er, r];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        er.splice(e, 0, r);
    } else er.splice(5, 0, r);
}
function eE() {
    let e = new Set();
    if (
        (H.forEach((t) => {
            e.add(t.id);
        }),
        null != et)
    )
        if (e.has(et.id)) {
            let e = et.id,
                t = et.type,
                n = H.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((et = H[n]), (H = H.filter((t) => t.id !== e)), (H = [et, ...H]));
        } else (H = [et, ...H]), e.add(et.id);
    H.forEach((e) => {
        (z[e.id] = e),
            e.type === P.Ni.CUSTOM_STATUS &&
                (v.Z.isBlockedOrIgnored(e.data.user_id) ? (W[e.id] = !0) : (Y[e.id] = (0, A.mV)(e)));
    });
}
function eO(e) {
    if ((H.length > 0 && ((U = H), (H = []), (V = [])), Q++, null != e)) (er = e.newUnread), (ei = e.newRead);
    else {
        let [e, t] = ev(U);
        (er = e), (ei = t);
    }
    if (
        (j.Z.onlyShowRecentGeneratedCandidates() ||
            ((function () {
                let e = _.Z.getGuildIds(),
                    t = [];
                for (let r of e) {
                    if (null != q[r] && q[r] < 0) continue;
                    let e = d.ZP.getGuildScheduledEventsForGuild(r),
                        i = 0;
                    for (let r of e)
                        if (!(0, d.Z2)(r)) {
                            if (null != r.channel_id) {
                                let e = g.Z.getChannel(r.channel_id);
                                if (!E.Z.can(Z.Plq.VIEW_CHANNEL, e)) continue;
                            }
                            if ((0, d.BQ)(r, 2 * I.Z.Seconds.DAY) || (0, d.xt)(r)) {
                                var n;
                                if (
                                    (null == Y[r.id] &&
                                        (Y[r.id] = {
                                            id: r.id,
                                            type: P.Ni.GUILD_EVENT,
                                            score: 10,
                                            event_id: r.id,
                                        }),
                                    t.push({
                                        id: r.id,
                                        type: P.Ni.GUILD_EVENT,
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
                    let n = m.Z.getGuildAffinity(e.data.guild_id),
                        r = m.Z.getGuildAffinity(t.data.guild_id);
                    return (null != r ? r.score : 0) - (null != n ? n.score : 0);
                });
                let r = [],
                    i = [];
                t.forEach((e) => {
                    (z[e.id] = e), null != x.Z.getReadTimestamp(e.id) ? i.push(e) : r.push(e);
                }),
                    (er = e_(er, r, P.Ni.GUILD_EVENT, 7)),
                    (ei = e_(ei, i, P.Ni.GUILD_EVENT, 7));
            })(),
            (function () {
                var e, t;
                let n = new Set(),
                    r = {},
                    l = [],
                    a = [],
                    u = null != (t = null == (e = s.Z.getFeed(w.YN.GLOBAL_FEED)) ? void 0 : e.entries) ? t : [];
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
                        null == Y[e.content.id] &&
                            (Y[e.content.id] = {
                                id: e.content.id,
                                type: P.Ni.ACTIVITY,
                                score: 15,
                                activity: e.content,
                            });
                        let t = {
                            id: e.content.id,
                            type: P.Ni.ACTIVITY,
                            score: 15,
                            data: {
                                user_id: e.content.author_id,
                                content_id: e.content.id,
                            },
                        };
                        n.add(e.content.id), (z[t.id] = t), null != x.Z.getReadTimestamp(t.id) ? a.push(t) : l.push(t);
                    }),
                    (er = e_(er, l, P.Ni.ACTIVITY, 5)),
                    (ei = e_(ei, a, P.Ni.ACTIVITY, 5));
            })(),
            eb()),
        null != F.load_id && G !== F.load_id)
    ) {
        var t;
        T.m.trackFeedLoaded({
            newTrackingProps: F,
            hasNewContent: X,
            unreadFeedItems: er,
            readFeedItems: ei,
            homeSessionId: "gravity",
        }),
            (G = null != (t = F.load_id) ? t : null),
            (F = {});
    }
    (el = 0), er.length + ei.length === 0 && (ep = !0), (0, A.em)([...er, ...ei], 0, P.xy), (ec = !1);
}
function ev(e) {
    let t = [],
        n = [],
        r = [];
    return (
        e.forEach((e) => {
            let i = null != x.Z.getReadTimestamp(e.id);
            if (e.type === P.Ni.MESSAGE) {
                var l;
                (null == (l = e.data.message_context) ? void 0 : l.external_content_application_id) == null &&
                    (i = i || !(0, A.$U)(e.data.channel_id, e.data.message_id));
            } else e.type === P.Ni.SUMMARY && (i = i || !(0, A.$U)(e.data.channel_id, e.data.summary_id));
            i ? t.push(e) : e.type === P.Ni.MESSAGE && e.data.has_mention ? r.push(e) : n.push(e);
        }),
        [[...r, ...n], t.sort((e, t) => (0, A.Rm)(e.id, t.id))]
    );
}
function ey(e, t) {
    let n = [],
        r = new Set(U.map((e) => e.id));
    for (let i of e)
        !(i.type === P.Ni.RECOMMENDED_GUILDS || r.has(i.id)) &&
            null == x.Z.getReadTimestamp(i.id) &&
            (i.type !== P.Ni.MESSAGE || ((0, A.$U)(i.data.channel_id, i.data.message_id) && i.data.channel_id !== t)) &&
            (i.type !== P.Ni.SUMMARY || ((0, A.$U)(i.data.channel_id, i.data.summary_id) && i.data.channel_id !== t)) &&
            n.push(i);
    return n;
}
function eI(e, t) {
    return e.filter((e) => !(0, A._e)(e) || e.data.channel_id !== t);
}
function eC(e, t) {
    (0, A.jv)(t) === A.aL.MUTED && ((U = eI(U, e)), (er = eI(er, e)), (ei = eI(ei, e)), (H = eI(H, e)), (V = eI(V, e)));
}
function eS(e, t) {
    return e.filter((e) => !(0, A._e)(e) || e.data.guild_id !== t);
}
function eT(e, t) {
    (0, A.jv)(t) === A.aL.MUTED && ((U = eS(U, e)), (er = eS(er, e)), (ei = eS(ei, e)), (H = eS(H, e)), (V = eS(V, e)));
}
function eN(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: l } = e,
        a = Y[n];
    if (null == a || a.type !== P.Ni.MESSAGE) return !1;
    let s = h.default.getId() === r;
    "MESSAGE_REACTION_ADD" === t
        ? (a.message = a.message.addReaction(i, s, e.colors, l))
        : (a.message = a.message.removeReaction(i, s, l));
}
function ej(e) {
    let { channelId: t } = e,
        n = [],
        r = [];
    er.forEach((e, i) => {
        (i > el || !$) && (e.type === P.Ni.MESSAGE || e.type === P.Ni.SUMMARY) && e.data.channel_id === t
            ? n.push(e)
            : r.push(e);
    });
    let i = X,
        [l, a] = ev(H);
    if (((V = ey(l, t)), (X = $ ? i && V.length >= P.Lb : i && eg(r, H)), 0 === n.length && i === X)) return !1;
    0 !== n.length && ((er = r), (ei = [...ei, ...n]));
}
class eP extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(h.default, g.Z, s.Z, u.Z, m.Z, d.ZP, _.Z, j.Z, x.Z, b.Z, E.Z, O.ZP, v.Z, y.ZP), null != e)) {
            var t, n, r, i, l, a, o;
            (U = null != (t = e.dehydratedItems) ? t : []).forEach((e) => {
                z[e.id] = e;
            }),
                (q = null != (n = e.customGuildScores) ? n : {}),
                (K = null != (r = e.customChannelScoresByGuild) ? r : {}),
                (en = null != (i = e.numOpens) ? i : 0),
                (B = null != (l = e.lastOpened) ? l : 0),
                (es = null != (a = e.lastJoinedRecommendedGuild) ? a : 0),
                (eh = null != (o = e.lastTakenICYMISurvey) ? o : 0);
        }
    }
    getVersion() {
        return Q;
    }
    getDehydratedItems() {
        return U;
    }
    getNewDehydratedItems() {
        return H;
    }
    getDehydratedItem(e) {
        var t;
        return null != (t = z[e]) ? t : null;
    }
    getHydratedItem(e) {
        var t;
        return null != (t = Y[e]) ? t : null;
    }
    getMessage(e) {
        let t = Y[e];
        return null == t || t.type !== P.Ni.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return Y;
    }
    getUnreadDisplayItems() {
        return er;
    }
    getNewUnreadDehydratedItems() {
        return V;
    }
    getReadDisplayItems() {
        return ei;
    }
    getNextIndexToHydrate() {
        return el;
    }
    getMissingItems() {
        return W;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === A.aL.MUTED || this.getCustomChannelScore(e, t) === A.aL.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == K[e] || null == K[e][t] ? A.aL.UNKNOWN : (0, A.jv)(K[e][t]);
    }
    getCustomGuildScore(e) {
        var t;
        return null != (t = q[e]) ? t : 0;
    }
    getCustomGuildScores() {
        return q;
    }
    hasNewContent() {
        return X;
    }
    getCurrentStatusAttachments(e) {
        return null == ee || ee[0] !== e ? [] : ee[1];
    }
    getLoadId() {
        return G;
    }
    hasOpenedEnoughTimes() {
        return 5 === en;
    }
    hasOpened() {
        return $;
    }
    getDiscoverableGuilds() {
        return ea;
    }
    videosMuted() {
        return eo;
    }
    isRefreshing() {
        return ec;
    }
    isHydrating() {
        return eu.size > 0;
    }
    notificationItem() {
        return et;
    }
    getIsTabFocused() {
        return ed;
    }
    isFirstPageHydrated() {
        return ep;
    }
    lastScrollEvent() {
        return ef;
    }
    lastTakenICYMISurvey() {
        return eh;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...er, ...ei].findIndex((e) => e.type === P.Ni.RECOMMENDED_GUILDS)
            : [...er, ...ei].filter((e) => null != Y[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: U,
            numOpens: en,
            customGuildScores: q,
            customChannelScoresByGuild: K,
            lastOpened: B,
            lastJoinedRecommendedGuild: es,
            lastTakenICYMISurvey: eh,
        };
    }
}
L(eP, "displayName", "ICYMIStore"), L(eP, "persistKey", "ICYMIStore");
let ex = new eP(a.Z, {
    LOGOUT: function () {
        (U = []),
            (H = []),
            (V = []),
            (z = {}),
            (F = {}),
            (Y = {}),
            (W = {}),
            (G = null),
            (q = {}),
            (K = {}),
            (Q = 0),
            (J = !1),
            (X = !1),
            ($ = !1),
            (er = []),
            (ei = []),
            (el = 0),
            (B = 0),
            (es = 0),
            (eo = !0),
            (ec = !1),
            (eu = new Set()),
            (et = null),
            (ed = !1),
            (ep = !1),
            (ee = null),
            (ef = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (et = n), null != G && ((H = H.length > 0 ? H : [...U]), eE(), eO()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: P.Ni.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: Z.d4z.GUILD_TEXT,
                },
            };
            if (
                ((z[t.message.id] = e),
                (Y[t.message.id] = D(R({}, e), { message: (0, p.e5)(t.message) })),
                null == G && null == F)
            ) {
                let [t, n] = ev((U = [e, ...U]));
                (er = t), (ei = n);
            } else (H = [e, ...H]), eO();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t, loadId: n, startTime: r, isInitialLoad: i, isReloading: l } = e;
        (H = (function (e) {
            let { contentGenerationEnabled: t } = (0, N.q3)("processRawItems", !1),
                n = j.Z.onlyShowRecentGeneratedCandidates(),
                r = new Set(P.zd);
            n
                ? (r = new Set([P.Ni.GENERATED_CANDIDATE]))
                : t && (r.add(P.Ni.GENERATED_CANDIDATE), r.delete(P.Ni.SUMMARY));
            let i = e.filter((e) => r.has(e.type)).filter(em);
            return (
                n && i.sort((e, t) => S.default.extractTimestamp(t.id) - S.default.extractTimestamp(e.id)),
                i.map((e) => {
                    if (e.type === P.Ni.MESSAGE && null != e.data.message_context) {
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
            eE(),
            (F = {
                load_id: n,
                load_time_millis: Date.now() - r,
                feed_item_ids: H.map((e) => e.id),
            });
        let [a, s] = ev(H);
        if (((V = ey(a)), !$ || 0 === Q || i))
            (Q = 0),
                !ed && eg(a, H) ? ((X = !0), (J = !0)) : (X = !1),
                eO({
                    newUnread: a,
                    newRead: s,
                });
        else {
            Q > 0 && (et = null);
            let e = V.length > P.Lb;
            l || (X = e), e && ((0, A.em)([...a, ...s], 0, P.xy), a.length + s.length === 0 && (ep = !0));
        }
        T.m.trackFeedLoaded({
            newTrackingProps: F,
            hasNewContent: X,
            unreadFeedItems: a,
            readFeedItems: s,
            homeSessionId: ed ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            summaryItems: n,
            activityItems: r,
            generatedCandidateItems: i,
            requestMessageItems: l,
            requestSummaryItems: a,
            requestActivityItems: s,
            requestGeneratedCandidateItems: o,
            startingIndex: c,
            endingIndex: u,
        } = e;
        (ep = !0), (Y = R({}, Y));
        let d = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            p = n.reduce((e, t) => ((e[t.id] = t), e), {}),
            f = r.reduce((e, t) => ((e[t.id] = t), e), {}),
            h = i.reduce((e, t) => ((e[t.content_id] = t), e), {});
        l.forEach((e) => {
            let t = d[e.message_id];
            if (null == t) {
                W[e.message_id] = !0;
                return;
            }
            let n = z[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: P.Ni.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: Z.d4z.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let r = b.Z.getMessage(t.channel_id, t.message.id);
            if (null != r) {
                let e = (0, A.IC)(t, n);
                Y[t.message.id] = D(R({}, e), { message: r });
            } else Y[t.message.id] = (0, A.IC)(t, n);
        }),
            a.forEach((e) => {
                let t = p[e.summary_id];
                if (null == t) {
                    W[e.summary_id] = !0;
                    return;
                }
                let n = z[e.summary_id];
                if (null == n || n.type !== P.Ni.SUMMARY || t.messages.length < 3) {
                    W[e.summary_id] = !0;
                    return;
                }
                Y[t.id] = D(R({}, n), { summary: (0, A.wV)(t, n.data.guild_id) });
            }),
            s.forEach((e) => {
                let t = f[e.content_id];
                if (null == t) {
                    W[e.content_id] = !0;
                    return;
                }
                let n = z[e.content_id];
                if (null == n) {
                    W[e.content_id] = !0;
                    return;
                }
                Y[t.id] = D(R({}, n), { activity: t });
            }),
            o.forEach((e) => {
                let t = h[e.content_id];
                if (null == t) {
                    W[e.content_id] = !0;
                    return;
                }
                let n = z[e.content_id];
                if (null == n || n.type !== P.Ni.GENERATED_CANDIDATE) {
                    W[e.content_id] = !0;
                    return;
                }
                Y[t.content_id] = D(R({}, n), { candidate: (0, A.NV)(t) });
            }),
            c === el && (el = u),
            eu.delete((0, A.y_)(c, u));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((q[e.guild_id] = e.guild_score),
            eT(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == K[e.guild_id] && (K[e.guild_id] = {}),
                    (K[e.guild_id][t] = e.custom_channel_scores[t]),
                    eC(t, e.custom_channel_scores[t]);
        (q = R({}, q)), (K = R({}, K));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (ea = t.map((e) => (0, C.PP)(e.guild))), eb();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: r } = e;
        null != r && ((q[n] = r), eT(n, r), (q = R({}, q))),
            null == t ||
                t.forEach((e) => {
                    let { channelId: t, score: r } = e;
                    null == K[n] && (K[n] = {}), (K[n][t] = r), eC(t, r), (K = R({}, K));
                });
    },
    RELOAD_ICYMI: function () {
        if (0 === H.length) return !1;
        eO(), (X = !1);
    },
    ICYMI_TAB_OPENED: function () {
        ($ = !0), (B = Date.now()), J && ((J = !1), (X = !1)), en < 5 && en++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        en = 6;
    },
    MESSAGE_REACTION_ADD: eN,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            r = Y[t];
        if (null == r || r.type !== P.Ni.MESSAGE) return !1;
        let i = h.default.getId();
        r.message = r.message.addReactionBatch(n, i);
    },
    MESSAGE_REACTION_REMOVE: eN,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = Y[t];
        if (null == n || n.type !== P.Ni.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            r = Y[t];
        if (null == r || r.type !== P.Ni.MESSAGE) return !1;
        r.message = r.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: ej,
    MESSAGE_ACK: ej,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        es = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        eo = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        ec = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        eu.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        eu.delete(t);
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        var t;
        let { channelId: n, messages: r, forICYMI: i } = e;
        if (!i) return !1;
        let l = g.Z.getChannel(n);
        if (null == l || l.type !== Z.d4z.GUILD_TEXT) return !1;
        let a = null == (t = K[l.guild_id]) ? void 0 : t[n];
        if ((null != a && (0, A.jv)(a) === A.aL.MUTED) || y.ZP.isChannelMuted(l.guild_id, n) || 0 === r.length)
            return !1;
        let s = r
            .filter(
                (e) => S.default.age(e.id) < I.Z.Millis.HOUR && (e.type === Z.uaV.DEFAULT || e.type === Z.uaV.REPLY),
            )
            .slice(0, 3)
            .reverse();
        if (
            s.length < 3 ||
            s.filter((e) => {
                var t;
                return null == (t = e.author) ? void 0 : t.bot;
            }).length /
                s.length >
                0.5
        )
            return !1;
        let o = Math.floor(Date.now() / (2 * I.Z.Millis.HOUR)) % 24,
            c = "".concat(l.id, "-").concat(o),
            u = {
                id: c,
                type: P.Ni.SUMMARY,
                score: -10,
                data: {
                    channel_id: n,
                    summary_id: c,
                    guild_id: l.guild_id,
                },
            };
        z[c] = u;
        let d = D(R({}, u), {
            summary: {
                id: c,
                topic: "",
                summShort: "",
                people: s.map((e) => {
                    var t, n;
                    return null != (n = null == (t = e.author) ? void 0 : t.id) ? n : "";
                }),
                startId: s[0].id,
                endId: s[s.length - 1].id,
                count: s.length,
                channelId: n,
                type: f.JU.SOURCE_2,
                source: 0,
                reactions: [],
                messages: s.map((e) => (0, p.e5)(e)),
                messageIds: s.map((e) => e.id),
                guildId: l.guild_id,
                reactionCount: 0,
                numTotalMessages: s.length,
            },
        });
        Y[c] = d;
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        ed = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            ee = null;
            return;
        }
        ee = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        ef = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        eh = t;
    },
});

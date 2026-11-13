let i, r, a, s, l, o, d, c, u, _, E, A, f, h, I, p, m, g, T, S, N, C, O, R, L;
n.d(t, { A: () => ea });
var y = n(435558),
    D = n(412703),
    b = n(440703),
    v = n(855986),
    P = n(73153),
    M = n(107195),
    U = n(856383),
    w = n(178540),
    G = n(506988),
    x = n(405670),
    k = n(851936),
    F = n(977416),
    B = n(247512),
    V = n(221596);
let H = new Map(),
    j = null,
    W = null,
    Y = new Map();
function K() {
    ((i = !1),
        (r = !1),
        (a = !1),
        (s = new Map()),
        (l = new Map()),
        (o = new Map()),
        (d = new Map()),
        (c = 0),
        (u = new Set()),
        (_ = new Set()),
        (E = new Set()),
        (A = new Set()),
        (f = new Set()),
        (h = new Set()),
        (H = new Map()),
        (p = new Map()),
        (m = new Map()),
        (g = new Map()),
        (T = new Map()),
        (S = new Map()),
        (I = new Set()),
        (N = new Map()),
        (C = new Map()),
        et(),
        (O = null),
        (R = null),
        en(),
        (L = new Map()),
        (Y = new Map()));
}
function $(e, t) {
    if (null != t.userStatus)
        for (let n of Object.values(t.userStatus?.progress ?? {}))
            !(0, y.isNil)(n) &&
                D.o.DESKTOP.has(n.eventName) &&
                (n.heartbeat?.lastBeatAt != null ? I.add(e) : n.heartbeat?.lastBeatAt == null && I.delete(e));
}
function X(e, t) {
    let n = (l = new Map(l)).get(e);
    if (null != n) {
        let i = { ...n, ...t };
        if (($(e, t), l.set(e, i), L.has(e))) {
            let n = L.get(e);
            null != n && (L = new Map(L)).set(e, { ...n, ...t });
        }
    }
}
function z(e, t) {
    let n = new Map(p);
    (n.set(e, t), (p = n));
}
function q(e) {
    null != g.get(e) && (g = new Map(g)).delete(e);
}
function Q(e) {
    let t = new Set(u);
    (t.delete(e), (u = t));
}
function J(e) {
    let t = new Set(A);
    (t.delete(e), (A = t));
}
function Z(e) {
    let { adCreativeId: t } = e;
    J(t);
}
function ee() {
    (et(),
        (function e() {
            let t, n;
            ((t = !1),
                (n = new Map(C)),
                l.forEach((e, i) => {
                    !0 !== n.get(i) && ((0, F.Ic)(e) ? (n.set(i, !0), (t = !0)) : n.has(i) || n.set(i, !1));
                }),
                t && ((C = n), er.emitChange()));
            let i = (0, F.v1)(Array.from(l.values()));
            if (null == i) return;
            let r = Math.max(5e3, i - Date.now() + 2e3);
            r > 864e6 ||
                (j = setTimeout(() => {
                    e();
                }, r));
        })());
}
function et() {
    null != j && (clearTimeout(j), (j = null));
}
function en() {
    null != W && (clearTimeout(W), (W = null));
}
K();
class ei extends v.Ay.Store {
    static displayName = "QuestStore";
    get quests() {
        return l;
    }
    get excludedQuests() {
        return o;
    }
    get claimedQuests() {
        return d;
    }
    get isFetchingCurrentQuests() {
        return i;
    }
    get isFetchingClaimedQuests() {
        return r;
    }
    isFetchingQuestPreview(e) {
        return h.has(e);
    }
    get lastFetchedCurrentQuests() {
        return c;
    }
    getQuestPreviewOverride(e) {
        let t = T.get(e);
        return null == t ? void 0 : l.get(t);
    }
    get questEnrollmentBlockedUntil() {
        return O;
    }
    get questAccessSuspendedUntil() {
        return R;
    }
    get isQuestAccessSuspended() {
        return null != R;
    }
    getFetchQuestPreviewError(e) {
        return Y.get(e);
    }
    isEnrolling(e) {
        return u.has(e);
    }
    isClaimingReward(e) {
        return _.has(e);
    }
    isFetchingRewardCode(e) {
        return E.has(e);
    }
    isDismissingContent(e) {
        return A.has(e);
    }
    isAdContentDismissed(e) {
        return f.has(e);
    }
    getRewardCode(e) {
        return p.get(e);
    }
    getRewards(e) {
        return m.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return g.get(e);
    }
    getQuest(e) {
        return l.get(e);
    }
    getQuestConfig(e) {
        return this.getQuest(e)?.config;
    }
    isProgressingOnDesktop(e) {
        return I.has(e);
    }
    selectedTaskPlatform(e) {
        return S.get(e) ?? null;
    }
    getOptimisticProgress(e, t) {
        return H.get(e)?.get(t);
    }
    getExpiredQuestsMap() {
        return C;
    }
    isQuestExpired(e) {
        return C.get(e) ?? !1;
    }
    getQuestLoadedViaPreview(e) {
        return L.get(e);
    }
    get isFetchingEarnedQuestToDeliver() {
        return a;
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        return s?.get(e) ?? !1;
    }
    get earnedQuestForPlacement() {
        return N;
    }
}
let er = new ei(P.h, {
        LOGOUT: function () {
            (et(), en(), K(), x.Ay.getState().clearState(), w.A.getState().reset());
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { questWithUserStatus: t } = e;
            if (null == t) return !1;
            let n = l.get(t.id),
                i = (function (e, t) {
                    if (null == e) return t;
                    if (null == t) return e;
                    let n = null == e.completedAt && null != t.completedAt;
                    for (let i of Object.keys(e.progress)) {
                        let r = e.progress[i];
                        if (null == r) continue;
                        let a = t.progress[i];
                        if (null == a || a.value < r.value || (null != r.completedAt && null == a.completedAt))
                            return e;
                        let s = r.heartbeat?.lastBeatAt,
                            l = a.heartbeat?.lastBeatAt;
                        if (
                            a.value === r.value &&
                            !n &&
                            (null != r.completedAt || null == a.completedAt) &&
                            null != s &&
                            (null == l || new Date(l).getTime() < new Date(s).getTime())
                        )
                            return e;
                    }
                    for (let n of ["enrolledAt", "completedAt", "claimedAt"])
                        if (null != e[n] && null == t[n]) return e;
                    return (e.dismissedQuestContent & ~t.dismissedQuestContent) != 0 ? e : t;
                })(n?.userStatus ?? null, t.userStatus),
                r = i === t.userStatus ? t : { ...t, userStatus: i };
            ((l = new Map(l).set(r.id, r)), $(r.id, r), (C = new Map(C).set(r.id, (0, F.Ic)(r))), ee());
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t, excludedQuests: n, questEnrollmentBlockedUntil: r, questAccessSuspendedUntil: a } = e,
                s = [...l.keys()],
                d = t.map((e) => e.id),
                u = s.filter((e) => !d.includes(e));
            (u.length > 0 &&
                U.A.addBreadcrumb({
                    category: "quests.store",
                    message: `handleFetchCurrentQuestsSuccess: ${u.length} quest(s) removed during rebuild`,
                    data: { prevQuestIds: s, nextQuestIds: d, removedIds: u },
                }),
                (c = Date.now()),
                (i = !1),
                (l = new Map()));
            let _ = new Map();
            for (let e of t)
                (l.set(e.id, e),
                    _.set(e.id, (0, F.Ic)(e)),
                    e.targetedContent.includes(G.uF.QUEST_BAR) &&
                        (0, k.L)({ location: V.rE.QUESTS_STORE }).log(
                            `Delivered ${e.config.messages.questName} (${e.id})`,
                        ));
            for (let e of ((o = new Map()), n)) o.set(e.id, e);
            for (let e of L?.values()) l.has(e.id) || (l.set(e.id, e), _.set(e.id, (0, F.Ic)(e)));
            ((C = _),
                ee(),
                (O = null != r ? new Date(r) : null),
                (R = null != a ? new Date(a) : null),
                (function () {
                    if ((en(), null == R)) return;
                    let e = R.getTime() - Date.now();
                    e > 864e6 ||
                        (W = setTimeout(
                            () => {
                                ((W = null), (R = null), er.emitChange());
                            },
                            Math.max(e, 0),
                        ));
                })());
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            ((c = 0), (i = !1));
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            r = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((r = !1), (d = new Map()), t)) d.set(e.id, e);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function () {
            r = !1;
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: function (e) {
            let { content: t } = e;
            ((a = !0), (s = new Map(s)).set(t, !0));
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { serverQuests: t, content: n, fetchedAt: i, responseTtlSeconds: r } = e;
            ((a = !1), (s = new Map(s)).set(n, !1));
            let o = (0, M.Ce)(r),
                d = N.get(n),
                c = new Map(d?.earnedDecisionByQuestId);
            for (let [e, n] of t)
                if ((c.set(e, { fetchedAt: i, ttlMillis: o, shouldDeliver: null != n }), null != n)) {
                    let t = l.get(e),
                        i = (0, B.rO)(n);
                    null != t ? X(e, i) : ((l = new Map(l)).set(e, i), (C = new Map(C)).set(e, (0, F.Ic)(i)));
                }
            N.set(n, { earnedDecisionByQuestId: c });
        },
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { content: t } = e;
            ((a = !1), (s = new Map(s)).set(t, !1));
        },
        QUESTS_FETCH_PREVIEW_BEGIN: function (e) {
            let { questId: t } = e;
            ((h = new Set(h)).add(t), (Y = new Map(Y)).delete(t));
        },
        QUESTS_FETCH_PREVIEW_SUCCESS: function (e) {
            let { questId: t, quest: n } = e;
            ((h = new Set(h)).delete(t),
                (L = new Map(L)).set(t, n),
                (l = new Map(l)).set(t, n),
                (Y = new Map(Y)).delete(t));
        },
        QUESTS_FETCH_PREVIEW_FAILURE: function (e) {
            let { questId: t, error: n } = e;
            ((h = new Set(h)).delete(t), (Y = new Map(Y)).set(t, n));
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: i } = e;
            (I.add(t), X(t, { userStatus: i }), null != n && q(n));
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null != n &&
                null == g.get(n) &&
                (g = new Map(g)).set(n, { questId: t, streamKey: n, firstFailedAt: Date.now() });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            (n.add(t), (u = n));
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            (X(t.questId, { userStatus: t }), Q(t.questId));
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            Q(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(E);
            (n.add(t), (E = n));
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let t,
                n,
                { questId: i, rewardCode: r } = e,
                a = new Set(E);
            (a.delete(i),
                (E = a),
                z(i, r),
                (t = l.get(i)),
                null != (n = t?.userStatus) &&
                    null == n.claimedAt &&
                    X(i, { userStatus: { ...n, claimedAt: r.claimedAt } }));
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(E);
            (n.delete(t), (E = n));
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(_);
            (n.add(t), (_ = n));
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                i = new Set(_);
            (i.delete(t), (_ = i));
            let r = new Map(m);
            (r.set(t, n.items), (m = r));
            let a = l.get(t),
                s = a?.userStatus;
            if (null != s && null == s.claimedAt) {
                let e = (function (e) {
                    let { entitlements: t } = e,
                        n = t.items[0].tenantMetadata?.questRewards.reward;
                    return n?.tag !== b.l.REWARD_CODE ? null : n.rewardCode;
                })({ entitlements: n });
                (null != e && z(t, e),
                    X(t, { userStatus: { ...s, claimedAt: n.claimedAt, claimedTier: e?.tier ?? null } }));
            }
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(_);
            (n.delete(t), (_ = n));
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(A);
            (n.add(t), (A = n));
            let i = new Map(T),
                r = !1;
            for (let [e, n] of i) n === t && (i.delete(e), (r = !0));
            r && (T = i);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            (X(t.questId, { userStatus: t }), J(t.questId));
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            J(t);
        },
        AD_CONTENT_DISMISS_BEGIN: function (e) {
            let { adCreativeId: t } = e,
                n = new Set(A);
            (n.add(t), (A = n));
            let i = new Set(f);
            (i.add(t), (f = i));
        },
        AD_CONTENT_DISMISS_SUCCESS: Z,
        AD_CONTENT_DISMISS_FAILURE: Z,
        ADS_CREATIVE_PREVIEW_DELIVERY_STATE_RESET: function (e) {
            let { adCreativeId: t } = e;
            if (!f.has(t)) return !1;
            let n = new Set(f);
            (n.delete(t), (f = n));
        },
        ADS_PREVIEW_DELIVERY_STATE_LOOKBACK_RESET: function (e) {
            if (0 === f.size) return !1;
            f = new Set();
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, k.L)({ location: V.rE.QUESTS_STORE });
            n.log(`Received user status update for ${t.quest_id}`, t);
            let i = (0, B.tp)(t);
            X(t.quest_id, { userStatus: i });
            let r = l.get(t.quest_id);
            if (null != r) {
                let e = (0, F.Ic)(r);
                C.get(t.quest_id) !== e && (C = new Map(C).set(t.quest_id, e));
            }
            0 === Object.keys(i.progress).length &&
                H.has(i.questId) &&
                (n.log(`Removing optimistic progress for ${i.questId}`), H.delete(i.questId));
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            q(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            q(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            (X(t.questId, { userStatus: t }),
                null == t.claimedAt && (p = new Map(p)).delete(t.questId),
                null == t.enrolledAt && ((S = new Map(S)).delete(t.questId), x.Ay.getState().resetQuest(t.questId)));
            let n = l.get(t.questId);
            if (null != n) {
                let e = (0, F.Ic)(n);
                C.get(t.questId) !== e && (C = new Map(C).set(t.questId, e));
            }
        },
        QUESTS_PREVIEW_OVERRIDE: function (e) {
            let { placement: t, questId: n } = e,
                i = new Map(T);
            (i.get(t) === n ? i.delete(t) : i.set(t, n), (T = i));
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            ((S = new Map(S)), null == n ? S.delete(t) : S.set(t, n));
        },
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t, taskEventName: n, progress: i } = e,
                r = H.get(t) ?? new Map();
            (r.set(n, i), H.set(t, r));
        },
        QUESTS_RESET_OPTIMISTIC_PROGRESS: function (e) {
            let { questId: t } = e;
            (H.has(t) && H.delete(t), x.Ay.getState().resetQuest(t));
        },
        QUESTS_USER_COMPLETION_UPDATE: function (e) {
            let { quest_enrollment_blocked_until: t } = e;
            O = null != t ? new Date(t) : null;
        },
    }),
    ea = er;

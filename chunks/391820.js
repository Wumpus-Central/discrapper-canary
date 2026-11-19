let l, s, a, r;
(n.d(t, { A: () => D }), n(321073));
var i = n(435558),
    o = n.n(i),
    c = n(855986),
    u = n(73153),
    d = n(432371),
    m = n(662090),
    h = n(343446),
    p = n(174768),
    f = n(734057),
    g = n(71393),
    C = n(218461),
    A = n(309010),
    x = n(543465),
    E = n(287809),
    j = n(927813),
    _ = n(661191);
function N(e, t) {
    return {
        id: e.id,
        topic: e.topic,
        summShort: e.summ_short,
        people: Array.from(new Set(e.people)),
        startId: e.start_id,
        endId: e.end_id,
        count: e.count,
        channelId: t,
        source: e.source,
        type: e.type,
    };
}
var v = n(521732);
let I = {},
    y = {},
    S = {},
    b = [],
    M = {},
    T = { status: "ok", lastRequest: null, lastResponse: null },
    L = [],
    w = [];
function R() {
    L = p.A.getProps()
        .results.filter((e) => e.type === m.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class k extends c.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: l };
    }
    initialize(e) {
        ((l = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(f.A, h.A, g.A, p.A, C.Ay, A.Ay, x.Ay, E.default),
            this.syncWith([p.A], R));
    }
    allSummaries() {
        return I;
    }
    topSummaries() {
        return Object.values(I)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    _.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * j.A.Millis.HOUR,
            )
            .sort((e, t) => _.default.extractTimestamp(t.endId) - _.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return I[e] ?? w;
    }
    shouldShowTopicsBar() {
        return l;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != r && r.channelId === e && null != r.summaryId ? this.findSummary(e, r?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : S[e.id];
    }
    isFetching(e, t) {
        return null != t ? y[e]?.summaryId === t : y[e]?.fetching === !0;
    }
    status(e) {
        return y[e];
    }
    shouldFetch(e, t) {
        let n = y[e],
            l = f.A.getChannel(e);
        if (!(0, d.pk)(l)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                l = Date.now() - e;
            return t !== n?.summaryId || l > v.hf;
        }
        let s = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === s;
    }
    channelAffinities() {
        return b;
    }
    channelAffinitiesById() {
        return M;
    }
    channelAffinitiesStatus() {
        return T;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === T.status ||
            (null != T.lastResponse && Date.now() - T.lastResponse < 30 * j.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: l, numChannels: s = 25 } = e,
            a = [];
        return (
            t && (a = a.concat(L)),
            n && (a = a.concat(b.map((e) => e.channel_id))),
            l &&
                (a = a.filter((e) => {
                    let t = f.A.getChannel(e);
                    return null != t && !x.Ay.isChannelMuted(t.guild_id, e) && C.Ay.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = f.A.getChannel(e);
                return (0, d.pk)(t, !1, !1);
            })).slice(0, s)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
let D = new k(u.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        r?.channelId !== t && (r = null);
    },
    TOGGLE_TOPICS_BAR() {
        l = !l;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: l, receivedAt: s } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = N(t, n),
                l = [...(I[n] ?? [])],
                s = l.findIndex((t) => t.id === e?.id);
            (s > -1 ? (l[s] = e) : l.push(e), (I[n] = l));
        }
        let a = { ...(y[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: s, summaryIdError: l };
        y[n] = a;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: l } = e;
        y[t] = { ...(y[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: l };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: l, receivedAt: s } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => N(e, n));
        if (null != r && r.channelId === n && !a.some((e) => e.id === r?.summaryId)) {
            let e = (I[n] ?? []).find((e) => e.id === r?.summaryId);
            null != e && a.push(e);
        }
        I[n] = (0, i.sortBy)(a, (e) => _.default.extractTimestamp(e.startId)).reverse();
        let o = { ...y[n], fetching: !1, error: void 0, lastReceivedAt: s };
        (null != l && (o.error = l), (y[n] = o));
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        y[e.channelId] = { ...(y[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == s && null == e.channelId) || (e.channelId === s?.channelId && e.summaryId === s?.summaryId))
            return !1;
        if (
            null != (s = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            s.channelId === e.channelId &&
            null != s.summaryId
        ) {
            let e = I[s.channelId];
            a = e?.findIndex((e) => e.id === s?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = A.Ay.getChannelId();
        if (null != t)
            if (null != s && s.channelId === t && null != s.summaryId) {
                let e = I[s.channelId];
                a = e?.findIndex((e) => e.id === s?.summaryId);
            } else
                a = I[t]?.findIndex((t) => {
                    var n, l, s, a;
                    return (
                        (n = e.topVisibleMessage),
                        (l = e.bottomVisibleMessage),
                        (s = t.startId),
                        (a = t.endId),
                        !(null == n || n > a) && !(null == l || l < s)
                    );
                });
    },
    SET_SELECTED_SUMMARY(e) {
        let t = e.channelId;
        return null == t
            ? null
            : (t !== r?.channelId || e.summaryId !== r?.summaryId) &&
                  void (r = { channelId: t, summaryId: e.summaryId ?? null });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (S[t.id] = n) : delete S[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        T = { ...T, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            ((b = []), (M = {}), (T = { ...T, status: "error", lastResponse: Date.now() }));
            return;
        }
        ((b = t ?? []),
            (M = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (T = { ...T, status: "ok", lastResponse: Date.now() }));
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            l = t.reduce((e, t) => {
                let l = y[t] ?? {};
                return ((e[t] = { ...l, fetching: !0, lastRequestedAt: n, error: void 0 }), e);
            }, {});
        y = { ...y, ...l };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: l,
                requestArgs: { channelIds: s },
            } = e,
            a = o()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, l] = t,
                        s = o()
                            .chain(l.map((e) => N(e, n)))
                            .sortBy((e) => _.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return ((e[n] = s), e);
                }, {}),
            r = s.reduce(
                (e, t) => {
                    let s = y[t] ?? {},
                        r = a[t];
                    return (
                        null != r && (e.summariesByChannel[t] = r),
                        (e.summaryFetchStatusByChannel[t] = { ...s, fetching: !1, error: l, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        ((I = { ...I, ...r.summariesByChannel }), (y = { ...y, ...r.summaryFetchStatusByChannel }));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: l } = e,
            s = Date.now(),
            a = o()
                .chain(n)
                .sortBy((e) => _.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => N(e, t))
                .reverse()
                .value(),
            r = I[t] ?? [],
            i = o()
                .chain(a)
                .concat(r)
                .sortBy((e) => _.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        ((I[t] = i), (y[t] = { ...y[t], error: void 0, fetching: y[t]?.fetching ?? !1, lastReceivedAt: s }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        ((I = {}), (y = {}));
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (I[t] ?? []).indexOf(e.summary);
        -1 !== n && I[t].splice(n, 1);
    },
});

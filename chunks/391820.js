let l, s, a, i;
(n.d(t, { A: () => D }), n(321073));
var r = n(435558),
    o = n.n(r),
    c = n(855986),
    u = n(73153),
    d = n(432371),
    m = n(662090),
    h = n(343446),
    f = n(174768),
    p = n(734057),
    g = n(71393),
    A = n(218461),
    C = n(309010),
    x = n(543465),
    E = n(287809),
    j = n(927813),
    v = n(661191);
function _(e, t) {
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
var N = n(521732);
let y = {},
    I = {},
    S = {},
    b = [],
    M = {},
    T = { status: "ok", lastRequest: null, lastResponse: null },
    w = [],
    L = [];
function R() {
    w = f.A.getProps()
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
            this.waitFor(p.A, h.A, g.A, f.A, A.Ay, C.Ay, x.Ay, E.default),
            this.syncWith([f.A], R));
    }
    allSummaries() {
        return y;
    }
    topSummaries() {
        return Object.values(y)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    v.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * j.A.Millis.HOUR,
            )
            .sort((e, t) => v.default.extractTimestamp(t.endId) - v.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return y[e] ?? L;
    }
    shouldShowTopicsBar() {
        return l;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != i && i.channelId === e && null != i.summaryId ? this.findSummary(e, i?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : S[e.id];
    }
    isFetching(e, t) {
        return null != t ? I[e]?.summaryId === t : I[e]?.fetching === !0;
    }
    status(e) {
        return I[e];
    }
    shouldFetch(e, t) {
        let n = I[e],
            l = p.A.getChannel(e);
        if (!(0, d.pk)(l)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                l = Date.now() - e;
            return t !== n?.summaryId || l > N.hf;
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
            t && (a = a.concat(w)),
            n && (a = a.concat(b.map((e) => e.channel_id))),
            l &&
                (a = a.filter((e) => {
                    let t = p.A.getChannel(e);
                    return null != t && !x.Ay.isChannelMuted(t.guild_id, e) && A.Ay.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = p.A.getChannel(e);
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
        i?.channelId !== t && (i = null);
    },
    TOGGLE_TOPICS_BAR() {
        l = !l;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: l, receivedAt: s } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = _(t, n),
                l = [...(y[n] ?? [])],
                s = l.findIndex((t) => t.id === e?.id);
            (s > -1 ? (l[s] = e) : l.push(e), (y[n] = l));
        }
        let a = { ...(I[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: s, summaryIdError: l };
        I[n] = a;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: l } = e;
        I[t] = { ...(I[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: l };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: l, receivedAt: s } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => _(e, n));
        if (null != i && i.channelId === n && !a.some((e) => e.id === i?.summaryId)) {
            let e = (y[n] ?? []).find((e) => e.id === i?.summaryId);
            null != e && a.push(e);
        }
        y[n] = (0, r.sortBy)(a, (e) => v.default.extractTimestamp(e.startId)).reverse();
        let o = { ...I[n], fetching: !1, error: void 0, lastReceivedAt: s };
        (null != l && (o.error = l), (I[n] = o));
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        I[e.channelId] = { ...(I[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == s && null == e.channelId) || (e.channelId === s?.channelId && e.summaryId === s?.summaryId))
            return !1;
        if (
            null != (s = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            s.channelId === e.channelId &&
            null != s.summaryId
        ) {
            let e = y[s.channelId];
            a = e?.findIndex((e) => e.id === s?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = C.Ay.getChannelId();
        if (null != t)
            if (null != s && s.channelId === t && null != s.summaryId) {
                let e = y[s.channelId];
                a = e?.findIndex((e) => e.id === s?.summaryId);
            } else
                a = y[t]?.findIndex((t) => {
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
            : (t !== i?.channelId || e.summaryId !== i?.summaryId) &&
                  void (i = { channelId: t, summaryId: e.summaryId ?? null });
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
                let l = I[t] ?? {};
                return ((e[t] = { ...l, fetching: !0, lastRequestedAt: n, error: void 0 }), e);
            }, {});
        I = { ...I, ...l };
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
                            .chain(l.map((e) => _(e, n)))
                            .sortBy((e) => v.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return ((e[n] = s), e);
                }, {}),
            i = s.reduce(
                (e, t) => {
                    let s = I[t] ?? {},
                        i = a[t];
                    return (
                        null != i && (e.summariesByChannel[t] = i),
                        (e.summaryFetchStatusByChannel[t] = { ...s, fetching: !1, error: l, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        ((y = { ...y, ...i.summariesByChannel }), (I = { ...I, ...i.summaryFetchStatusByChannel }));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: l } = e,
            s = Date.now(),
            a = o()
                .chain(n)
                .sortBy((e) => v.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => _(e, t))
                .reverse()
                .value(),
            i = y[t] ?? [],
            r = o()
                .chain(a)
                .concat(i)
                .sortBy((e) => v.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        ((y[t] = r), (I[t] = { ...I[t], error: void 0, fetching: I[t]?.fetching ?? !1, lastReceivedAt: s }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        ((y = {}), (I = {}));
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (y[t] ?? []).indexOf(e.summary);
        -1 !== n && y[t].splice(n, 1);
    },
});

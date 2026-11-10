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
    _ = n(927813),
    N = n(811091);
function j(e, t) {
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
var I = n(521732);
let v = {},
    S = {},
    y = {},
    M = [],
    b = {},
    T = { status: "ok", lastRequest: null, lastResponse: null },
    L = [],
    R = [];
function w() {
    L = f.A.getProps()
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
            this.syncWith([f.A], w));
    }
    allSummaries() {
        return v;
    }
    topSummaries() {
        return Object.values(v)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    N.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * _.A.Millis.HOUR,
            )
            .sort((e, t) => N.default.extractTimestamp(t.endId) - N.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return v[e] ?? R;
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
        return null == e ? null : y[e.id];
    }
    isFetching(e, t) {
        return null != t ? S[e]?.summaryId === t : S[e]?.fetching === !0;
    }
    status(e) {
        return S[e];
    }
    shouldFetch(e, t) {
        let n = S[e],
            l = p.A.getChannel(e);
        if (!(0, d.pk)(l)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                l = Date.now() - e;
            return t !== n?.summaryId || l > I.hf;
        }
        let s = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === s;
    }
    channelAffinities() {
        return M;
    }
    channelAffinitiesById() {
        return b;
    }
    channelAffinitiesStatus() {
        return T;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === T.status ||
            (null != T.lastResponse && Date.now() - T.lastResponse < 30 * _.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: l, numChannels: s = 25 } = e,
            a = [];
        return (
            t && (a = a.concat(L)),
            n && (a = a.concat(M.map((e) => e.channel_id))),
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
            let e = j(t, n),
                l = [...(v[n] ?? [])],
                s = l.findIndex((t) => t.id === e?.id);
            (s > -1 ? (l[s] = e) : l.push(e), (v[n] = l));
        }
        let a = { ...(S[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: s, summaryIdError: l };
        S[n] = a;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: l } = e;
        S[t] = { ...(S[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: l };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: l, receivedAt: s } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => j(e, n));
        if (null != i && i.channelId === n && !a.some((e) => e.id === i?.summaryId)) {
            let e = (v[n] ?? []).find((e) => e.id === i?.summaryId);
            null != e && a.push(e);
        }
        v[n] = (0, r.sortBy)(a, (e) => N.default.extractTimestamp(e.startId)).reverse();
        let o = { ...S[n], fetching: !1, error: void 0, lastReceivedAt: s };
        (null != l && (o.error = l), (S[n] = o));
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        S[e.channelId] = { ...(S[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == s && null == e.channelId) || (e.channelId === s?.channelId && e.summaryId === s?.summaryId))
            return !1;
        if (
            null != (s = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            s.channelId === e.channelId &&
            null != s.summaryId
        ) {
            let e = v[s.channelId];
            a = e?.findIndex((e) => e.id === s?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = C.Ay.getChannelId();
        if (null != t)
            if (null != s && s.channelId === t && null != s.summaryId) {
                let e = v[s.channelId];
                a = e?.findIndex((e) => e.id === s?.summaryId);
            } else
                a = v[t]?.findIndex((t) => {
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
        null != n ? (y[t.id] = n) : delete y[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        T = { ...T, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            ((M = []), (b = {}), (T = { ...T, status: "error", lastResponse: Date.now() }));
            return;
        }
        ((M = t ?? []),
            (b = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (T = { ...T, status: "ok", lastResponse: Date.now() }));
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            l = t.reduce((e, t) => {
                let l = S[t] ?? {};
                return ((e[t] = { ...l, fetching: !0, lastRequestedAt: n, error: void 0 }), e);
            }, {});
        S = { ...S, ...l };
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
                            .chain(l.map((e) => j(e, n)))
                            .sortBy((e) => N.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return ((e[n] = s), e);
                }, {}),
            i = s.reduce(
                (e, t) => {
                    let s = S[t] ?? {},
                        i = a[t];
                    return (
                        null != i && (e.summariesByChannel[t] = i),
                        (e.summaryFetchStatusByChannel[t] = { ...s, fetching: !1, error: l, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        ((v = { ...v, ...i.summariesByChannel }), (S = { ...S, ...i.summaryFetchStatusByChannel }));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: l } = e,
            s = Date.now(),
            a = o()
                .chain(n)
                .sortBy((e) => N.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => j(e, t))
                .reverse()
                .value(),
            i = v[t] ?? [],
            r = o()
                .chain(a)
                .concat(i)
                .sortBy((e) => N.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        ((v[t] = r), (S[t] = { ...S[t], error: void 0, fetching: S[t]?.fetching ?? !1, lastReceivedAt: s }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        ((v = {}), (S = {}));
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (v[t] ?? []).indexOf(e.summary);
        -1 !== n && v[t].splice(n, 1);
    },
});

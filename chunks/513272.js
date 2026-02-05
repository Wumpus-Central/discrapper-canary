"use strict";
let r, i, a, s;
n.d(t, { A: () => G }), n(321073);
var o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(73153),
    d = n(432371),
    _ = n(629357),
    f = n(49463),
    p = n(174768),
    h = n(734057),
    m = n(71393),
    g = n(222823),
    E = n(309010),
    A = n(543465),
    I = n(287809),
    T = n(927813),
    y = n(661191),
    S = n(241843),
    v = n(521732);
let C = {},
    b = {},
    N = {},
    R = [],
    O = {},
    D = { status: "ok", lastRequest: null, lastResponse: null },
    L = [],
    w = [],
    x = 75,
    P = 25;
function M() {
    L = p.A.getProps()
        .results.filter((e) => e.type === _.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class k extends u.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        (r = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(h.A, f.A, m.A, p.A, g.Ay, E.A, A.Ay, I.default),
            this.syncWith([p.A], M);
    }
    allSummaries() {
        return C;
    }
    topSummaries() {
        return Object.values(C)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    y.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * T.A.Millis.HOUR,
            )
            .sort((e, t) => y.default.extractTimestamp(t.endId) - y.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return C[e] ?? w;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != s && s.channelId === e && null != s.summaryId ? this.findSummary(e, s?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : N[e.id];
    }
    isFetching(e, t) {
        return null != t ? b[e]?.summaryId === t : b[e]?.fetching === !0;
    }
    status(e) {
        return b[e];
    }
    shouldFetch(e, t) {
        let n = b[e],
            r = h.A.getChannel(e);
        if (!(0, d.pk)(r)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                r = Date.now() - e;
            return t !== n?.summaryId || r > v.hf;
        }
        let i = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === i;
    }
    channelAffinities() {
        return R;
    }
    channelAffinitiesById() {
        return O;
    }
    channelAffinitiesStatus() {
        return D;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === D.status ||
            (null != D.lastResponse && Date.now() - D.lastResponse < 30 * T.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: r, numChannels: i = P } = e,
            a = [];
        return (
            t && (a = a.concat(L)),
            n && (a = a.concat(R.map((e) => e.channel_id))),
            r &&
                (a = a.filter((e) => {
                    let t = h.A.getChannel(e);
                    return null != t && !A.Ay.isChannelMuted(t.guild_id, e) && g.Ay.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = h.A.getChannel(e);
                return (0, d.pk)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
function U(e, t, n, r) {
    let i = null == t || t < n;
    return !(null == e || e > r) && !i;
}
let G = new k(c.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        s?.channelId !== t && (s = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: r, receivedAt: i } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = (0, S.Ur)(t, n),
                r = [...(C[n] ?? [])],
                i = r.findIndex((t) => t.id === e?.id);
            i > -1 ? (r[i] = e) : r.push(e), (C[n] = r);
        }
        let a = { ...(b[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: i, summaryIdError: r };
        b[n] = a;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: r } = e;
        b[t] = { ...(b[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: r };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, S.Ur)(e, n));
        if (null != s && s.channelId === n && !a.some((e) => e.id === s?.summaryId)) {
            let e = (C[n] ?? []).find((e) => e.id === s?.summaryId);
            null != e && a.push(e);
        }
        C[n] = (0, o.sortBy)(a, (e) => y.default.extractTimestamp(e.startId)).reverse();
        let l = { ...b[n], fetching: !1, error: void 0, lastReceivedAt: i };
        null != r && (l.error = r), (b[n] = l);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        b[e.channelId] = { ...(b[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == i && null == e.channelId) || (e.channelId === i?.channelId && e.summaryId === i?.summaryId))
            return !1;
        if (
            null != (i = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = C[i.channelId];
            a = e?.findIndex((e) => e.id === i?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = E.A.getChannelId();
        if (null != t)
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = C[i.channelId];
                a = e?.findIndex((e) => e.id === i?.summaryId);
            } else a = C[t]?.findIndex((t) => U(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId));
    },
    SET_SELECTED_SUMMARY(e) {
        let t = e.channelId;
        return null == t
            ? null
            : (t !== s?.channelId || e.summaryId !== s?.summaryId) &&
                  void (s = { channelId: t, summaryId: e.summaryId ?? null });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (N[t.id] = n) : delete N[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        D = { ...D, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            (R = []), (O = {}), (D = { ...D, status: "error", lastResponse: Date.now() });
            return;
        }
        (R = t ?? []),
            (O = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (D = { ...D, status: "ok", lastResponse: Date.now() });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                let r = b[t] ?? {};
                return (e[t] = { ...r, fetching: !0, lastRequestedAt: n, error: void 0 }), e;
            }, {});
        b = { ...b, ...r };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: r,
                requestArgs: { channelIds: i },
            } = e,
            a = l()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, r] = t,
                        i = l()
                            .chain(r.map((e) => (0, S.Ur)(e, n)))
                            .sortBy((e) => y.default.extractTimestamp(e.startId))
                            .takeRight(x)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            s = i.reduce(
                (e, t) => {
                    let i = b[t] ?? {},
                        s = a[t];
                    return (
                        null != s && (e.summariesByChannel[t] = s),
                        (e.summaryFetchStatusByChannel[t] = { ...i, fetching: !1, error: r, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        (C = { ...C, ...s.summariesByChannel }), (b = { ...b, ...s.summaryFetchStatusByChannel });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: r } = e,
            i = Date.now(),
            a = l()
                .chain(n)
                .sortBy((e) => y.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, S.Ur)(e, t))
                .reverse()
                .value(),
            s = C[t] ?? [],
            o = l()
                .chain(a)
                .concat(s)
                .sortBy((e) => y.default.extractTimestamp(e.startId))
                .takeRight(x)
                .uniqBy("id")
                .reverse()
                .value();
        (C[t] = o), (b[t] = { ...b[t], error: void 0, fetching: b[t]?.fetching ?? !1, lastReceivedAt: i });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (C = {}), (b = {});
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (C[t] ?? []).indexOf(e.summary);
        -1 !== n && C[t].splice(n, 1);
    },
});

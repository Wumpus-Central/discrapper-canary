"use strict";
let i, l, s, r;
n.d(t, { A: () => O }), n(321073);
var a = n(735438),
    o = n.n(a),
    c = n(311907),
    u = n(73153),
    d = n(432371),
    h = n(629357),
    m = n(49463),
    p = n(174768),
    f = n(734057),
    g = n(71393),
    _ = n(222823),
    x = n(309010),
    A = n(543465),
    C = n(287809),
    E = n(927813),
    I = n(661191),
    v = n(241843),
    y = n(521732);
let S = {},
    b = {},
    N = {},
    T = [],
    j = {},
    R = { status: "ok", lastRequest: null, lastResponse: null },
    w = [],
    L = [];
function M() {
    w = p.A.getProps()
        .results.filter((e) => e.type === h.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class k extends c.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: i };
    }
    initialize(e) {
        (i = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(f.A, m.A, g.A, p.A, _.Ay, x.A, A.Ay, C.default),
            this.syncWith([p.A], M);
    }
    allSummaries() {
        return S;
    }
    topSummaries() {
        return Object.values(S)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    I.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * E.A.Millis.HOUR,
            )
            .sort((e, t) => I.default.extractTimestamp(t.endId) - I.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return S[e] ?? L;
    }
    shouldShowTopicsBar() {
        return i;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != r && r.channelId === e && null != r.summaryId ? this.findSummary(e, r?.summaryId) : null;
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
            i = f.A.getChannel(e);
        if (!(0, d.pk)(i)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                i = Date.now() - e;
            return t !== n?.summaryId || i > y.hf;
        }
        let l = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === l;
    }
    channelAffinities() {
        return T;
    }
    channelAffinitiesById() {
        return j;
    }
    channelAffinitiesStatus() {
        return R;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === R.status ||
            (null != R.lastResponse && Date.now() - R.lastResponse < 30 * E.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: i, numChannels: l = 25 } = e,
            s = [];
        return (
            t && (s = s.concat(w)),
            n && (s = s.concat(T.map((e) => e.channel_id))),
            i &&
                (s = s.filter((e) => {
                    let t = f.A.getChannel(e);
                    return null != t && !A.Ay.isChannelMuted(t.guild_id, e) && _.Ay.hasUnread(e);
                })),
            (s = s.filter((e) => {
                let t = f.A.getChannel(e);
                return (0, d.pk)(t, !1, !1);
            })).slice(0, l)
        );
    }
    visibleSummaryIndex() {
        return s;
    }
}
let O = new k(u.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        r?.channelId !== t && (r = null);
    },
    TOGGLE_TOPICS_BAR() {
        i = !i;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: i, receivedAt: l } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = (0, v.Ur)(t, n),
                i = [...(S[n] ?? [])],
                l = i.findIndex((t) => t.id === e?.id);
            l > -1 ? (i[l] = e) : i.push(e), (S[n] = i);
        }
        let s = { ...(b[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: l, summaryIdError: i };
        b[n] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: i } = e;
        b[t] = { ...(b[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: i };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: i, receivedAt: l } = e,
            s = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, v.Ur)(e, n));
        if (null != r && r.channelId === n && !s.some((e) => e.id === r?.summaryId)) {
            let e = (S[n] ?? []).find((e) => e.id === r?.summaryId);
            null != e && s.push(e);
        }
        S[n] = (0, a.sortBy)(s, (e) => I.default.extractTimestamp(e.startId)).reverse();
        let o = { ...b[n], fetching: !1, error: void 0, lastReceivedAt: l };
        null != i && (o.error = i), (b[n] = o);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        b[e.channelId] = { ...(b[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == l && null == e.channelId) || (e.channelId === l?.channelId && e.summaryId === l?.summaryId))
            return !1;
        if (
            null != (l = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            l.channelId === e.channelId &&
            null != l.summaryId
        ) {
            let e = S[l.channelId];
            s = e?.findIndex((e) => e.id === l?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = x.A.getChannelId();
        if (null != t)
            if (null != l && l.channelId === t && null != l.summaryId) {
                let e = S[l.channelId];
                s = e?.findIndex((e) => e.id === l?.summaryId);
            } else
                s = S[t]?.findIndex((t) => {
                    var n, i, l, s;
                    return (
                        (n = e.topVisibleMessage),
                        (i = e.bottomVisibleMessage),
                        (l = t.startId),
                        (s = t.endId),
                        !(null == n || n > s) && !(null == i || i < l)
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
        null != n ? (N[t.id] = n) : delete N[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        R = { ...R, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            (T = []), (j = {}), (R = { ...R, status: "error", lastResponse: Date.now() });
            return;
        }
        (T = t ?? []),
            (j = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (R = { ...R, status: "ok", lastResponse: Date.now() });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            i = t.reduce((e, t) => {
                let i = b[t] ?? {};
                return (e[t] = { ...i, fetching: !0, lastRequestedAt: n, error: void 0 }), e;
            }, {});
        b = { ...b, ...i };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: i,
                requestArgs: { channelIds: l },
            } = e,
            s = o()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, i] = t,
                        l = o()
                            .chain(i.map((e) => (0, v.Ur)(e, n)))
                            .sortBy((e) => I.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = l), e;
                }, {}),
            r = l.reduce(
                (e, t) => {
                    let l = b[t] ?? {},
                        r = s[t];
                    return (
                        null != r && (e.summariesByChannel[t] = r),
                        (e.summaryFetchStatusByChannel[t] = { ...l, fetching: !1, error: i, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        (S = { ...S, ...r.summariesByChannel }), (b = { ...b, ...r.summaryFetchStatusByChannel });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: i } = e,
            l = Date.now(),
            s = o()
                .chain(n)
                .sortBy((e) => I.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, v.Ur)(e, t))
                .reverse()
                .value(),
            r = S[t] ?? [],
            a = o()
                .chain(s)
                .concat(r)
                .sortBy((e) => I.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        (S[t] = a), (b[t] = { ...b[t], error: void 0, fetching: b[t]?.fetching ?? !1, lastReceivedAt: l });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (S = {}), (b = {});
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (S[t] ?? []).indexOf(e.summary);
        -1 !== n && S[t].splice(n, 1);
    },
});

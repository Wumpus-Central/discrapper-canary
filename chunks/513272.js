"use strict";
let r, i, s, a;
n.d(t, { A: () => x }), n(321073);
var o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(73153),
    d = n(432371),
    _ = n(629357),
    f = n(49463),
    p = n(174768),
    h = n(734057),
    E = n(71393),
    m = n(222823),
    g = n(309010),
    A = n(543465),
    I = n(287809),
    T = n(927813),
    S = n(661191),
    y = n(241843),
    N = n(521732);
let v = {},
    C = {},
    O = {},
    R = [],
    b = {},
    D = { status: "ok", lastRequest: null, lastResponse: null },
    L = [],
    w = [];
function M() {
    L = p.A.getProps()
        .results.filter((e) => e.type === _.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class P extends u.Ay.PersistedStore {
    static persistKey = "SummaryStore";
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        (r = e?.shouldShowTopicsBar ?? !0),
            this.waitFor(h.A, f.A, E.A, p.A, m.Ay, g.A, A.Ay, I.default),
            this.syncWith([p.A], M);
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
                    S.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * T.A.Millis.HOUR,
            )
            .sort((e, t) => S.default.extractTimestamp(t.endId) - S.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        return v[e] ?? w;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        return this.summaries(e).find((e) => e.id === t) ?? null;
    }
    selectedSummary(e) {
        return null != a && a.channelId === e && null != a.summaryId ? this.findSummary(e, a?.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : O[e.id];
    }
    isFetching(e, t) {
        return null != t ? C[e]?.summaryId === t : C[e]?.fetching === !0;
    }
    status(e) {
        return C[e];
    }
    shouldFetch(e, t) {
        let n = C[e],
            r = h.A.getChannel(e);
        if (!(0, d.pk)(r)) return !1;
        if (null != t) {
            let e = n?.summaryIdLastRequestedAt ?? 0,
                r = Date.now() - e;
            return t !== n?.summaryId || r > N.hf;
        }
        let i = n?.lastReceivedAt ?? 0;
        return !n?.fetching && 0 === i;
    }
    channelAffinities() {
        return R;
    }
    channelAffinitiesById() {
        return b;
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
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: r, numChannels: i = 25 } = e,
            s = [];
        return (
            t && (s = s.concat(L)),
            n && (s = s.concat(R.map((e) => e.channel_id))),
            r &&
                (s = s.filter((e) => {
                    let t = h.A.getChannel(e);
                    return null != t && !A.Ay.isChannelMuted(t.guild_id, e) && m.Ay.hasUnread(e);
                })),
            (s = s.filter((e) => {
                let t = h.A.getChannel(e);
                return (0, d.pk)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return s;
    }
}
let x = new P(c.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        a?.channelId !== t && (a = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        let { summary: t, channelId: n, error: r, receivedAt: i } = e;
        if (null != t && Object.keys(t).length > 0) {
            let e = (0, y.Ur)(t, n),
                r = [...(v[n] ?? [])],
                i = r.findIndex((t) => t.id === e?.id);
            i > -1 ? (r[i] = e) : r.push(e), (v[n] = r);
        }
        let s = { ...(C[n] ?? { fetching: !1 }), summaryId: void 0, summaryIdLastReceivedAt: i, summaryIdError: r };
        C[n] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        let { channelId: t, summaryId: n, requestedAt: r } = e;
        C[t] = { ...(C[t] ?? { fetching: !1 }), summaryId: n, summaryIdLastRequestedAt: r };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            s = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, y.Ur)(e, n));
        if (null != a && a.channelId === n && !s.some((e) => e.id === a?.summaryId)) {
            let e = (v[n] ?? []).find((e) => e.id === a?.summaryId);
            null != e && s.push(e);
        }
        v[n] = (0, o.sortBy)(s, (e) => S.default.extractTimestamp(e.startId)).reverse();
        let l = { ...C[n], fetching: !1, error: void 0, lastReceivedAt: i };
        null != r && (l.error = r), (C[n] = l);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        C[e.channelId] = { ...(C[e.channelId] ?? {}), fetching: !0, lastRequestedAt: e.requestedAt };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        if ((null == i && null == e.channelId) || (e.channelId === i?.channelId && e.summaryId === i?.summaryId))
            return !1;
        if (
            null != (i = null != e.channelId ? { channelId: e.channelId, summaryId: e.summaryId ?? null } : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = v[i.channelId];
            s = e?.findIndex((e) => e.id === i?.summaryId);
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = g.A.getChannelId();
        if (null != t)
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = v[i.channelId];
                s = e?.findIndex((e) => e.id === i?.summaryId);
            } else
                s = v[t]?.findIndex((t) => {
                    var n, r, i, s;
                    return (
                        (n = e.topVisibleMessage),
                        (r = e.bottomVisibleMessage),
                        (i = t.startId),
                        (s = t.endId),
                        !(null == n || n > s) && !(null == r || r < i)
                    );
                });
    },
    SET_SELECTED_SUMMARY(e) {
        let t = e.channelId;
        return null == t
            ? null
            : (t !== a?.channelId || e.summaryId !== a?.summaryId) &&
                  void (a = { channelId: t, summaryId: e.summaryId ?? null });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (O[t.id] = n) : delete O[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        D = { ...D, status: "fetching", lastRequest: Date.now() };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        let { affinities: t, error: n } = e;
        if (null != n) {
            (R = []), (b = {}), (D = { ...D, status: "error", lastResponse: Date.now() });
            return;
        }
        (R = t ?? []),
            (b = t?.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}) ?? {}),
            (D = { ...D, status: "ok", lastResponse: Date.now() });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                let r = C[t] ?? {};
                return (e[t] = { ...r, fetching: !0, lastRequestedAt: n, error: void 0 }), e;
            }, {});
        C = { ...C, ...r };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: r,
                requestArgs: { channelIds: i },
            } = e,
            s = l()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, r] = t,
                        i = l()
                            .chain(r.map((e) => (0, y.Ur)(e, n)))
                            .sortBy((e) => S.default.extractTimestamp(e.startId))
                            .takeRight(75)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            a = i.reduce(
                (e, t) => {
                    let i = C[t] ?? {},
                        a = s[t];
                    return (
                        null != a && (e.summariesByChannel[t] = a),
                        (e.summaryFetchStatusByChannel[t] = { ...i, fetching: !1, error: r, lastReceivedAt: n }),
                        e
                    );
                },
                { summariesByChannel: {}, summaryFetchStatusByChannel: {} },
            );
        (v = { ...v, ...a.summariesByChannel }), (C = { ...C, ...a.summaryFetchStatusByChannel });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        let { channel_id: t, summaries: n, guild_id: r } = e,
            i = Date.now(),
            s = l()
                .chain(n)
                .sortBy((e) => S.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, y.Ur)(e, t))
                .reverse()
                .value(),
            a = v[t] ?? [],
            o = l()
                .chain(s)
                .concat(a)
                .sortBy((e) => S.default.extractTimestamp(e.startId))
                .takeRight(75)
                .uniqBy("id")
                .reverse()
                .value();
        (v[t] = o), (C[t] = { ...C[t], error: void 0, fetching: C[t]?.fetching ?? !1, lastReceivedAt: i });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (v = {}), (C = {});
    },
    DELETE_SUMMARY(e) {
        let t = e.summary.channelId,
            n = (v[t] ?? []).indexOf(e.summary);
        -1 !== n && v[t].splice(n, 1);
    },
});

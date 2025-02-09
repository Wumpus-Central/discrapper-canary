let i, r, a, s;
n.d(t, { Z: () => Z }), n(536091), n(47120), n(653041), n(724458);
var o,
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    f = n(902840),
    _ = n(212819),
    p = n(353926),
    h = n(823385),
    m = n(592125),
    g = n(430824),
    E = n(306680),
    v = n(944486),
    y = n(9156),
    I = n(594174),
    T = n(70956),
    b = n(709054),
    S = n(418088),
    A = n(814249);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let C = {},
    R = {},
    O = {},
    D = [],
    L = {},
    x = {
        status: 'ok',
        lastRequest: null,
        lastResponse: null
    },
    w = [],
    P = [],
    M = 75,
    k = 25;
function U() {
    w = h.Z.getProps()
        .results.filter((e) => e.type === _.h8.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class G extends (o = c.ZP.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: i };
    }
    initialize(e) {
        var t;
        (i = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t), this.waitFor(m.Z, I.default, v.Z, g.Z, p.Z), this.syncWith([h.Z], U);
    }
    allSummaries() {
        return C;
    }
    topSummaries() {
        return Object.values(C)
            .flat()
            .filter((e) => e.people.length > 1 && b.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * T.Z.Millis.HOUR)
            .sort((e, t) => b.default.extractTimestamp(t.endId) - b.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : P;
    }
    shouldShowTopicsBar() {
        return i;
    }
    findSummary(e, t) {
        var n;
        return null !== (n = this.summaries(e).find((e) => e.id === t)) && void 0 !== n ? n : null;
    }
    selectedSummary(e) {
        return null != s && s.channelId === e && null != s.summaryId ? this.findSummary(e, null == s ? void 0 : s.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : O[e.id];
    }
    isFetching(e, t) {
        var n, i;
        return null != t ? (null === (i = R[e]) || void 0 === i ? void 0 : i.summaryId) === t : (null === (n = R[e]) || void 0 === n ? void 0 : n.fetching) === !0;
    }
    status(e) {
        return R[e];
    }
    shouldFetch(e, t) {
        var n, i;
        let r = R[e],
            a = m.Z.getChannel(e);
        if (!(0, f.Lp)(a)) return !1;
        if (null != t) {
            let e = null !== (n = null == r ? void 0 : r.summaryIdLastRequestedAt) && void 0 !== n ? n : 0,
                i = Date.now() - e;
            return t !== (null == r ? void 0 : r.summaryId) || i > A.cS;
        }
        let s = null !== (i = null == r ? void 0 : r.lastReceivedAt) && void 0 !== i ? i : 0;
        return !(null == r ? void 0 : r.fetching) && 0 === s;
    }
    channelAffinities() {
        return D;
    }
    channelAffinitiesById() {
        return L;
    }
    channelAffinitiesStatus() {
        return x;
    }
    shouldFetchChannelAffinities() {
        return !('fetching' === x.status || (null != x.lastResponse && Date.now() - x.lastResponse < 30 * T.Z.Millis.SECOND));
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: i, numChannels: r = k } = e,
            a = [];
        return (
            t && (a = a.concat(w)),
            n && (a = a.concat(D.map((e) => e.channel_id))),
            i &&
                (a = a.filter((e) => {
                    let t = m.Z.getChannel(e);
                    return null != t && !y.ZP.isChannelMuted(t.guild_id, e) && E.ZP.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = m.Z.getChannel(e);
                return (0, f.Lp)(t, !1, !1);
            })).slice(0, r)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
function B(e, t, n, i) {
    let r = null == t || t < n;
    return !(null == e || e > i) && !r;
}
N(G, 'persistKey', 'SummaryStore');
let Z = new G(d.Z, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        (null == s ? void 0 : s.channelId) !== t && (s = null);
    },
    TOGGLE_TOPICS_BAR() {
        i = !i;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var t, n;
        let { summary: i, channelId: r, error: a, receivedAt: s } = e;
        if (null != i && Object.keys(i).length > 0) {
            let e = (0, S.b)(i, r),
                n = [...(null !== (t = C[r]) && void 0 !== t ? t : [])],
                a = n.findIndex((t) => t.id === (null == e ? void 0 : e.id));
            a > -1 ? (n[a] = e) : n.push(e), (C[r] = n);
        }
        let o = {
            ...(null !== (n = R[r]) && void 0 !== n ? n : { fetching: !1 }),
            summaryId: void 0,
            summaryIdLastReceivedAt: s,
            summaryIdError: a
        };
        R[r] = o;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var t;
        let { channelId: n, summaryId: i, requestedAt: r } = e;
        R[n] = {
            ...(null !== (t = R[n]) && void 0 !== t ? t : { fetching: !1 }),
            summaryId: i,
            summaryIdLastRequestedAt: r
        };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: i, receivedAt: r } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, S.b)(e, n));
        if (null != s && s.channelId === n && !a.some((e) => e.id === (null == s ? void 0 : s.summaryId))) {
            var o;
            let e = (null !== (o = C[n]) && void 0 !== o ? o : []).find((e) => e.id === (null == s ? void 0 : s.summaryId));
            null != e && a.push(e);
        }
        C[n] = (0, l.sortBy)(a, (e) => b.default.extractTimestamp(e.startId)).reverse();
        let u = {
            ...R[n],
            fetching: !1,
            error: void 0,
            lastReceivedAt: r
        };
        null != i && (u.error = i), (R[n] = u);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var t;
        R[e.channelId] = {
            ...(null !== (t = R[e.channelId]) && void 0 !== t ? t : {}),
            fetching: !0,
            lastRequestedAt: e.requestedAt
        };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        var t;
        if ((null == r && null == e.channelId) || (e.channelId === (null == r ? void 0 : r.channelId) && e.summaryId === (null == r ? void 0 : r.summaryId))) return !1;
        if (
            null !=
                (r =
                    null != e.channelId
                        ? {
                              channelId: e.channelId,
                              summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                          }
                        : null) &&
            r.channelId === e.channelId &&
            null != r.summaryId
        ) {
            let e = C[r.channelId];
            a = null == e ? void 0 : e.findIndex((e) => e.id === (null == r ? void 0 : r.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = v.Z.getChannelId();
        if (null != t) {
            if (null != r && r.channelId === t && null != r.summaryId) {
                let e = C[r.channelId];
                a = null == e ? void 0 : e.findIndex((e) => e.id === (null == r ? void 0 : r.summaryId));
            } else {
                var n;
                a = null === (n = C[t]) || void 0 === n ? void 0 : n.findIndex((t) => B(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId));
            }
        }
    },
    SET_SELECTED_SUMMARY(e) {
        var t;
        let n = e.channelId;
        return null == n
            ? null
            : (n !== (null == s ? void 0 : s.channelId) || e.summaryId !== (null == s ? void 0 : s.summaryId)) &&
                  void (s = {
                      channelId: n,
                      summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (O[t.id] = n) : delete O[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        x = {
            ...x,
            status: 'fetching',
            lastRequest: Date.now()
        };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        var t;
        let { affinities: n, error: i } = e;
        if (null != i) {
            (D = []),
                (L = {}),
                (x = {
                    ...x,
                    status: 'error',
                    lastResponse: Date.now()
                });
            return;
        }
        (D = null != n ? n : []),
            (L = null !== (t = null == n ? void 0 : n.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {})) && void 0 !== t ? t : {}),
            (x = {
                ...x,
                status: 'ok',
                lastResponse: Date.now()
            });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            i = t.reduce((e, t) => {
                var i;
                let r = null !== (i = R[t]) && void 0 !== i ? i : {};
                return (
                    (e[t] = {
                        ...r,
                        fetching: !0,
                        lastRequestedAt: n,
                        error: void 0
                    }),
                    e
                );
            }, {});
        R = {
            ...R,
            ...i
        };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: i,
                requestArgs: { channelIds: r }
            } = e,
            a = u()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, i] = t,
                        r = u()
                            .chain(i.map((e) => (0, S.b)(e, n)))
                            .sortBy((e) => b.default.extractTimestamp(e.startId))
                            .takeRight(M)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = r), e;
                }, {}),
            s = r.reduce(
                (e, t) => {
                    var r;
                    let s = null !== (r = R[t]) && void 0 !== r ? r : {},
                        o = a[t];
                    return (
                        null != o && (e.summariesByChannel[t] = o),
                        (e.summaryFetchStatusByChannel[t] = {
                            ...s,
                            fetching: !1,
                            error: i,
                            lastReceivedAt: n
                        }),
                        e
                    );
                },
                {
                    summariesByChannel: {},
                    summaryFetchStatusByChannel: {}
                }
            );
        (C = {
            ...C,
            ...s.summariesByChannel
        }),
            (R = {
                ...R,
                ...s.summaryFetchStatusByChannel
            });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var t, n, i;
        let { channel_id: r, summaries: a, guild_id: s } = e,
            o = Date.now(),
            l = u()
                .chain(a)
                .sortBy((e) => b.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, S.b)(e, r))
                .reverse()
                .value(),
            c = null !== (n = C[r]) && void 0 !== n ? n : [],
            d = u()
                .chain(l)
                .concat(c)
                .sortBy((e) => b.default.extractTimestamp(e.startId))
                .takeRight(M)
                .uniqBy('id')
                .reverse()
                .value();
        (C[r] = d),
            (R[r] = {
                ...R[r],
                error: void 0,
                fetching: null !== (i = null === (t = R[r]) || void 0 === t ? void 0 : t.fetching) && void 0 !== i && i,
                lastReceivedAt: o
            });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (C = {}), (R = {});
    },
    DELETE_SUMMARY(e) {
        var t;
        let n = e.summary.channelId,
            i = (null !== (t = C[n]) && void 0 !== t ? t : []).indexOf(e.summary);
        -1 !== i && C[n].splice(i, 1);
    }
});

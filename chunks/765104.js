let i, a, s, o;
var l,
    u,
    c = r(536091);
var d = r(47120);
var f = r(653041);
var _ = r(724458);
var h = r(392711),
    p = r.n(h),
    m = r(442837),
    g = r(570140),
    E = r(902840),
    v = r(212819),
    I = r(353926),
    T = r(823385),
    b = r(592125),
    y = r(430824),
    S = r(306680),
    A = r(944486),
    N = r(9156),
    C = r(594174),
    R = r(70956),
    O = r(709054),
    D = r(418088),
    L = r(814249);
function x(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.FETCHING = 'fetching'), (e.OK = 'ok'), (e.ERROR = 'error');
})(l || (l = {}));
let w = {},
    P = {},
    M = {},
    k = [],
    U = {},
    B = {
        status: 'ok',
        lastRequest: null,
        lastResponse: null
    },
    G = [],
    Z = [],
    F = 75,
    V = 25;
function j() {
    G = T.Z.getProps()
        .results.filter((e) => e.type === v.h8.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class H extends (u = m.ZP.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: i };
    }
    initialize(e) {
        var n;
        (i = null === (n = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === n || n), this.waitFor(b.Z, C.default, A.Z, y.Z, I.Z), this.syncWith([T.Z], j);
    }
    allSummaries() {
        return w;
    }
    topSummaries() {
        return Object.values(w)
            .flat()
            .filter((e) => e.people.length > 1 && O.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * R.Z.Millis.HOUR)
            .sort((e, n) => O.default.extractTimestamp(n.endId) - O.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var n;
        return null !== (n = w[e]) && void 0 !== n ? n : Z;
    }
    shouldShowTopicsBar() {
        return i;
    }
    findSummary(e, n) {
        var r;
        return null !== (r = this.summaries(e).find((e) => e.id === n)) && void 0 !== r ? r : null;
    }
    selectedSummary(e) {
        return null != o && o.channelId === e && null != o.summaryId ? this.findSummary(e, null == o ? void 0 : o.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : M[e.id];
    }
    isFetching(e, n) {
        var r, i;
        return null != n ? (null === (i = P[e]) || void 0 === i ? void 0 : i.summaryId) === n : (null === (r = P[e]) || void 0 === r ? void 0 : r.fetching) === !0;
    }
    status(e) {
        return P[e];
    }
    shouldFetch(e, n) {
        var r, i;
        let a = P[e],
            s = b.Z.getChannel(e);
        if (!(0, E.Lp)(s)) return !1;
        if (null != n) {
            let e = null !== (r = null == a ? void 0 : a.summaryIdLastRequestedAt) && void 0 !== r ? r : 0,
                i = Date.now() - e;
            return n !== (null == a ? void 0 : a.summaryId) || i > L.cS;
        }
        let o = null !== (i = null == a ? void 0 : a.lastReceivedAt) && void 0 !== i ? i : 0;
        return !(null == a ? void 0 : a.fetching) && 0 === o;
    }
    channelAffinities() {
        return k;
    }
    channelAffinitiesById() {
        return U;
    }
    channelAffinitiesStatus() {
        return B;
    }
    shouldFetchChannelAffinities() {
        return !('fetching' === B.status || (null != B.lastResponse && Date.now() - B.lastResponse < 30 * R.Z.Millis.SECOND)) && !0;
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: n, withChannelAffinities: r, withUnreads: i, numChannels: a = V } = e,
            s = [];
        return (
            n && (s = s.concat(G)),
            r && (s = s.concat(k.map((e) => e.channel_id))),
            i &&
                (s = s.filter((e) => {
                    let n = b.Z.getChannel(e);
                    return null != n && !N.ZP.isChannelMuted(n.guild_id, e) && S.ZP.hasUnread(e);
                })),
            (s = s.filter((e) => {
                let n = b.Z.getChannel(e);
                return (0, E.Lp)(n, !1, !1);
            })).slice(0, a)
        );
    }
    visibleSummaryIndex() {
        return s;
    }
}
function Y(e, n, r, i) {
    let a = null == n || n < r;
    return !(null == e || e > i) && !a;
}
x(H, 'persistKey', 'SummaryStore');
let W = new H(g.Z, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: n } = e;
        (null == o ? void 0 : o.channelId) !== n && (o = null);
    },
    TOGGLE_TOPICS_BAR() {
        i = !i;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var n, r;
        let { summary: i, channelId: a, error: s, receivedAt: o } = e;
        if (null != i && Object.keys(i).length > 0) {
            let e = (0, D.b)(i, a),
                r = [...(null !== (n = w[a]) && void 0 !== n ? n : [])],
                s = r.findIndex((n) => n.id === (null == e ? void 0 : e.id));
            s > -1 ? (r[s] = e) : r.push(e), (w[a] = r);
        }
        let l = {
            ...(null !== (r = P[a]) && void 0 !== r ? r : { fetching: !1 }),
            summaryId: void 0,
            summaryIdLastReceivedAt: o,
            summaryIdError: s
        };
        P[a] = l;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var n;
        let { channelId: r, summaryId: i, requestedAt: a } = e;
        P[r] = {
            ...(null !== (n = P[r]) && void 0 !== n ? n : { fetching: !1 }),
            summaryId: i,
            summaryIdLastRequestedAt: a
        };
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: n, channelId: r, error: i, receivedAt: a } = e,
            s = n.filter((e) => Object.keys(e).length > 0).map((e) => (0, D.b)(e, r));
        if (null != o && o.channelId === r && !s.some((e) => e.id === (null == o ? void 0 : o.summaryId))) {
            var l;
            let e = (null !== (l = w[r]) && void 0 !== l ? l : []).find((e) => e.id === (null == o ? void 0 : o.summaryId));
            null != e && s.push(e);
        }
        w[r] = (0, h.sortBy)(s, (e) => O.default.extractTimestamp(e.startId)).reverse();
        let u = {
            ...P[r],
            fetching: !1,
            error: void 0,
            lastReceivedAt: a
        };
        null != i && (u.error = i), (P[r] = u);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var n;
        P[e.channelId] = {
            ...(null !== (n = P[e.channelId]) && void 0 !== n ? n : {}),
            fetching: !0,
            lastRequestedAt: e.requestedAt
        };
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        var n;
        if ((null == a && null == e.channelId) || (e.channelId === (null == a ? void 0 : a.channelId) && e.summaryId === (null == a ? void 0 : a.summaryId))) return !1;
        if (
            null !=
                (a =
                    null != e.channelId
                        ? {
                              channelId: e.channelId,
                              summaryId: null !== (n = e.summaryId) && void 0 !== n ? n : null
                          }
                        : null) &&
            a.channelId === e.channelId &&
            null != a.summaryId
        ) {
            let e = w[a.channelId];
            s = null == e ? void 0 : e.findIndex((e) => e.id === (null == a ? void 0 : a.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let n = A.Z.getChannelId();
        if (null != n) {
            if (null != a && a.channelId === n && null != a.summaryId) {
                let e = w[a.channelId];
                s = null == e ? void 0 : e.findIndex((e) => e.id === (null == a ? void 0 : a.summaryId));
            } else {
                var r;
                s = null === (r = w[n]) || void 0 === r ? void 0 : r.findIndex((n) => Y(e.topVisibleMessage, e.bottomVisibleMessage, n.startId, n.endId));
            }
        }
    },
    SET_SELECTED_SUMMARY(e) {
        var n;
        let r = e.channelId;
        return null == r
            ? null
            : (r !== (null == o ? void 0 : o.channelId) || e.summaryId !== (null == o ? void 0 : o.summaryId)) &&
                  void (o = {
                      channelId: r,
                      summaryId: null !== (n = e.summaryId) && void 0 !== n ? n : null
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: n, rating: r } = e;
        null != r ? (M[n.id] = r) : delete M[n.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        B = {
            ...B,
            status: 'fetching',
            lastRequest: Date.now()
        };
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        var n;
        let { affinities: r, error: i } = e;
        if (null != i) {
            (k = []),
                (U = {}),
                (B = {
                    ...B,
                    status: 'error',
                    lastResponse: Date.now()
                });
            return;
        }
        (k = null != r ? r : []),
            (U = null !== (n = null == r ? void 0 : r.reduce((e, n) => ((e[n.channel_id] = n.affinity), e), {})) && void 0 !== n ? n : {}),
            (B = {
                ...B,
                status: 'ok',
                lastResponse: Date.now()
            });
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: n, requestedAt: r } = e,
            i = n.reduce((e, n) => {
                var i;
                let a = null !== (i = P[n]) && void 0 !== i ? i : {};
                return (
                    (e[n] = {
                        ...a,
                        fetching: !0,
                        lastRequestedAt: r,
                        error: void 0
                    }),
                    e
                );
            }, {});
        P = {
            ...P,
            ...i
        };
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: n,
                receivedAt: r,
                error: i,
                requestArgs: { channelIds: a }
            } = e,
            s = p()
                .toPairs(n)
                .reduce((e, n) => {
                    let [r, i] = n,
                        a = p()
                            .chain(i.map((e) => (0, D.b)(e, r)))
                            .sortBy((e) => O.default.extractTimestamp(e.startId))
                            .takeRight(F)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[r] = a), e;
                }, {}),
            o = a.reduce(
                (e, n) => {
                    var a;
                    let o = null !== (a = P[n]) && void 0 !== a ? a : {},
                        l = s[n];
                    return (
                        null != l && (e.summariesByChannel[n] = l),
                        (e.summaryFetchStatusByChannel[n] = {
                            ...o,
                            fetching: !1,
                            error: i,
                            lastReceivedAt: r
                        }),
                        e
                    );
                },
                {
                    summariesByChannel: {},
                    summaryFetchStatusByChannel: {}
                }
            );
        (w = {
            ...w,
            ...o.summariesByChannel
        }),
            (P = {
                ...P,
                ...o.summaryFetchStatusByChannel
            });
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var n, r, i;
        let { channel_id: a, summaries: s, guild_id: o } = e,
            l = Date.now(),
            u = p()
                .chain(s)
                .sortBy((e) => O.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, D.b)(e, a))
                .reverse()
                .value(),
            c = null !== (r = w[a]) && void 0 !== r ? r : [],
            d = p()
                .chain(u)
                .concat(c)
                .sortBy((e) => O.default.extractTimestamp(e.startId))
                .takeRight(F)
                .uniqBy('id')
                .reverse()
                .value();
        (w[a] = d),
            (P[a] = {
                ...P[a],
                error: void 0,
                fetching: null !== (i = null === (n = P[a]) || void 0 === n ? void 0 : n.fetching) && void 0 !== i && i,
                lastReceivedAt: l
            });
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (w = {}), (P = {});
    },
    DELETE_SUMMARY(e) {
        var n;
        let r = e.summary.channelId,
            i = (null !== (n = w[r]) && void 0 !== n ? n : []).indexOf(e.summary);
        -1 !== i && w[r].splice(i, 1);
    }
});
n.Z = W;

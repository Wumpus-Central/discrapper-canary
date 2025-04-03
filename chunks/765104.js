let r, i, o, a;
n.d(t, { Z: () => Z }), n(86693), n(536091), n(230036), n(47120), n(653041), n(978209);
var s,
    l = n(392711),
    c = n.n(l),
    u = n(442837),
    d = n(570140),
    f = n(902840),
    _ = n(212819),
    p = n(353926),
    h = n(823385),
    m = n(592125),
    g = n(430824),
    E = n(306680),
    b = n(944486),
    y = n(9156),
    v = n(594174),
    O = n(70956),
    I = n(709054),
    S = n(418088),
    T = n(814249);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = {},
    w = {},
    D = {},
    L = [],
    x = {},
    M = {
        status: 'ok',
        lastRequest: null,
        lastResponse: null
    },
    k = [],
    j = [],
    U = 75,
    G = 25;
function B() {
    k = h.Z.getProps()
        .results.filter((e) => e.type === _.h8.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class F extends (s = u.ZP.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        var t;
        (r = null == (t = null == e ? void 0 : e.shouldShowTopicsBar) || t), this.waitFor(m.Z, v.default, b.Z, g.Z, p.Z), this.syncWith([h.Z], B);
    }
    allSummaries() {
        return P;
    }
    topSummaries() {
        return Object.values(P)
            .flat()
            .filter((e) => e.people.length > 1 && I.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * O.Z.Millis.HOUR)
            .sort((e, t) => I.default.extractTimestamp(t.endId) - I.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var t;
        return null != (t = P[e]) ? t : j;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        var n;
        return null != (n = this.summaries(e).find((e) => e.id === t)) ? n : null;
    }
    selectedSummary(e) {
        return null != a && a.channelId === e && null != a.summaryId ? this.findSummary(e, null == a ? void 0 : a.summaryId) : null;
    }
    summaryFeedback(e) {
        return null == e ? null : D[e.id];
    }
    isFetching(e, t) {
        var n, r;
        return null != t ? (null == (r = w[e]) ? void 0 : r.summaryId) === t : (null == (n = w[e]) ? void 0 : n.fetching) === !0;
    }
    status(e) {
        return w[e];
    }
    shouldFetch(e, t) {
        var n, r;
        let i = w[e],
            o = m.Z.getChannel(e);
        if (!(0, f.Lp)(o)) return !1;
        if (null != t) {
            let e = null != (n = null == i ? void 0 : i.summaryIdLastRequestedAt) ? n : 0,
                r = Date.now() - e;
            return t !== (null == i ? void 0 : i.summaryId) || r > T.cS;
        }
        let a = null != (r = null == i ? void 0 : i.lastReceivedAt) ? r : 0;
        return !(null == i ? void 0 : i.fetching) && 0 === a;
    }
    channelAffinities() {
        return L;
    }
    channelAffinitiesById() {
        return x;
    }
    channelAffinitiesStatus() {
        return M;
    }
    shouldFetchChannelAffinities() {
        return !('fetching' === M.status || (null != M.lastResponse && Date.now() - M.lastResponse < 30 * O.Z.Millis.SECOND));
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: r, numChannels: i = G } = e,
            o = [];
        return (
            t && (o = o.concat(k)),
            n && (o = o.concat(L.map((e) => e.channel_id))),
            r &&
                (o = o.filter((e) => {
                    let t = m.Z.getChannel(e);
                    return null != t && !y.ZP.isChannelMuted(t.guild_id, e) && E.ZP.hasUnread(e);
                })),
            (o = o.filter((e) => {
                let t = m.Z.getChannel(e);
                return (0, f.Lp)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return o;
    }
}
function V(e, t, n, r) {
    let i = null == t || t < n;
    return !(null == e || e > r) && !i;
}
N(F, 'persistKey', 'SummaryStore');
let Z = new F(d.Z, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        (null == a ? void 0 : a.channelId) !== t && (a = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var t, n;
        let { summary: r, channelId: i, error: o, receivedAt: a } = e;
        if (null != r && Object.keys(r).length > 0) {
            let e = (0, S.b)(r, i),
                n = [...(null != (t = P[i]) ? t : [])],
                o = n.findIndex((t) => t.id === (null == e ? void 0 : e.id));
            o > -1 ? (n[o] = e) : n.push(e), (P[i] = n);
        }
        let s = R(A({}, null != (n = w[i]) ? n : { fetching: !1 }), {
            summaryId: void 0,
            summaryIdLastReceivedAt: a,
            summaryIdError: o
        });
        w[i] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var t;
        let { channelId: n, summaryId: r, requestedAt: i } = e;
        w[n] = R(A({}, null != (t = w[n]) ? t : { fetching: !1 }), {
            summaryId: r,
            summaryIdLastRequestedAt: i
        });
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            o = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, S.b)(e, n));
        if (null != a && a.channelId === n && !o.some((e) => e.id === (null == a ? void 0 : a.summaryId))) {
            var s;
            let e = (null != (s = P[n]) ? s : []).find((e) => e.id === (null == a ? void 0 : a.summaryId));
            null != e && o.push(e);
        }
        P[n] = (0, l.sortBy)(o, (e) => I.default.extractTimestamp(e.startId)).reverse();
        let c = R(A({}, w[n]), {
            fetching: !1,
            error: void 0,
            lastReceivedAt: i
        });
        null != r && (c.error = r), (w[n] = c);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var t;
        w[e.channelId] = R(A({}, null != (t = w[e.channelId]) ? t : {}), {
            fetching: !0,
            lastRequestedAt: e.requestedAt
        });
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        var t;
        if ((null == i && null == e.channelId) || (e.channelId === (null == i ? void 0 : i.channelId) && e.summaryId === (null == i ? void 0 : i.summaryId))) return !1;
        if (
            null !=
                (i =
                    null != e.channelId
                        ? {
                              channelId: e.channelId,
                              summaryId: null != (t = e.summaryId) ? t : null
                          }
                        : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = P[i.channelId];
            o = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = b.Z.getChannelId();
        if (null != t)
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = P[i.channelId];
                o = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
            } else {
                var n;
                o = null == (n = P[t]) ? void 0 : n.findIndex((t) => V(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId));
            }
    },
    SET_SELECTED_SUMMARY(e) {
        var t;
        let n = e.channelId;
        return null == n
            ? null
            : (n !== (null == a ? void 0 : a.channelId) || e.summaryId !== (null == a ? void 0 : a.summaryId)) &&
                  void (a = {
                      channelId: n,
                      summaryId: null != (t = e.summaryId) ? t : null
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (D[t.id] = n) : delete D[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        M = R(A({}, M), {
            status: 'fetching',
            lastRequest: Date.now()
        });
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        var t;
        let { affinities: n, error: r } = e;
        if (null != r) {
            (L = []),
                (x = {}),
                (M = R(A({}, M), {
                    status: 'error',
                    lastResponse: Date.now()
                }));
            return;
        }
        (L = null != n ? n : []),
            (x = null != (t = null == n ? void 0 : n.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {})) ? t : {}),
            (M = R(A({}, M), {
                status: 'ok',
                lastResponse: Date.now()
            }));
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                var r;
                let i = null != (r = w[t]) ? r : {};
                return (
                    (e[t] = R(A({}, i), {
                        fetching: !0,
                        lastRequestedAt: n,
                        error: void 0
                    })),
                    e
                );
            }, {});
        w = A({}, w, r);
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: r,
                requestArgs: { channelIds: i }
            } = e,
            o = c()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, r] = t,
                        i = c()
                            .chain(r.map((e) => (0, S.b)(e, n)))
                            .sortBy((e) => I.default.extractTimestamp(e.startId))
                            .takeRight(U)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            a = i.reduce(
                (e, t) => {
                    var i;
                    let a = null != (i = w[t]) ? i : {},
                        s = o[t];
                    return (
                        null != s && (e.summariesByChannel[t] = s),
                        (e.summaryFetchStatusByChannel[t] = R(A({}, a), {
                            fetching: !1,
                            error: r,
                            lastReceivedAt: n
                        })),
                        e
                    );
                },
                {
                    summariesByChannel: {},
                    summaryFetchStatusByChannel: {}
                }
            );
        (P = A({}, P, a.summariesByChannel)), (w = A({}, w, a.summaryFetchStatusByChannel));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var t, n, r;
        let { channel_id: i, summaries: o, guild_id: a } = e,
            s = Date.now(),
            l = c()
                .chain(o)
                .sortBy((e) => I.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, S.b)(e, i))
                .reverse()
                .value(),
            u = null != (n = P[i]) ? n : [],
            d = c()
                .chain(l)
                .concat(u)
                .sortBy((e) => I.default.extractTimestamp(e.startId))
                .takeRight(U)
                .uniqBy('id')
                .reverse()
                .value();
        (P[i] = d),
            (w[i] = R(A({}, w[i]), {
                error: void 0,
                fetching: null != (r = null == (t = w[i]) ? void 0 : t.fetching) && r,
                lastReceivedAt: s
            }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (P = {}), (w = {});
    },
    DELETE_SUMMARY(e) {
        var t;
        let n = e.summary.channelId,
            r = (null != (t = P[n]) ? t : []).indexOf(e.summary);
        -1 !== r && P[n].splice(r, 1);
    }
});

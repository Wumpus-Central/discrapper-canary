let r, i, a, s;
n.d(t, { A: () => H }), n(864466), n(443073), n(638769), n(896048), n(321073), n(264879);
var o,
    l = n(735438),
    c = n.n(l),
    u = n(311907),
    d = n(73153),
    f = n(432371),
    p = n(629357),
    _ = n(49463),
    h = n(174768),
    m = n(734057),
    g = n(71393),
    E = n(222823),
    b = n(309010),
    y = n(543465),
    O = n(287809),
    A = n(927813),
    v = n(661191),
    S = n(241843),
    I = n(521732);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = {},
    P = {},
    D = {},
    x = [],
    L = {},
    j = {
        status: "ok",
        lastRequest: null,
        lastResponse: null,
    },
    M = [],
    k = [],
    U = 75,
    G = 25;
function V() {
    M = h.A.getProps()
        .results.filter((e) => e.type === p.rD.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class F extends (o = u.Ay.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        var t;
        (r = null == (t = null == e ? void 0 : e.shouldShowTopicsBar) || t),
            this.waitFor(m.A, _.A, g.A, h.A, E.Ay, b.A, y.Ay, O.default),
            this.syncWith([h.A], V);
    }
    allSummaries() {
        return w;
    }
    topSummaries() {
        return Object.values(w)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    v.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * A.A.Millis.HOUR,
            )
            .sort((e, t) => v.default.extractTimestamp(t.endId) - v.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var t;
        return null != (t = w[e]) ? t : k;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        var n;
        return null != (n = this.summaries(e).find((e) => e.id === t)) ? n : null;
    }
    selectedSummary(e) {
        return null != s && s.channelId === e && null != s.summaryId
            ? this.findSummary(e, null == s ? void 0 : s.summaryId)
            : null;
    }
    summaryFeedback(e) {
        return null == e ? null : D[e.id];
    }
    isFetching(e, t) {
        var n, r;
        return null != t
            ? (null == (r = P[e]) ? void 0 : r.summaryId) === t
            : (null == (n = P[e]) ? void 0 : n.fetching) === !0;
    }
    status(e) {
        return P[e];
    }
    shouldFetch(e, t) {
        var n, r;
        let i = P[e],
            a = m.A.getChannel(e);
        if (!(0, f.pk)(a)) return !1;
        if (null != t) {
            let e = null != (r = null == i ? void 0 : i.summaryIdLastRequestedAt) ? r : 0,
                n = Date.now() - e;
            return t !== (null == i ? void 0 : i.summaryId) || n > I.hf;
        }
        let s = null != (n = null == i ? void 0 : i.lastReceivedAt) ? n : 0;
        return !(null == i ? void 0 : i.fetching) && 0 === s;
    }
    channelAffinities() {
        return x;
    }
    channelAffinitiesById() {
        return L;
    }
    channelAffinitiesStatus() {
        return j;
    }
    shouldFetchChannelAffinities() {
        return !(
            "fetching" === j.status ||
            (null != j.lastResponse && Date.now() - j.lastResponse < 30 * A.A.Millis.SECOND)
        );
    }
    defaultChannelIds(e) {
        let { withQuickSwitcher: t, withChannelAffinities: n, withUnreads: r, numChannels: i = G } = e,
            a = [];
        return (
            t && (a = a.concat(M)),
            n && (a = a.concat(x.map((e) => e.channel_id))),
            r &&
                (a = a.filter((e) => {
                    let t = m.A.getChannel(e);
                    return null != t && !y.Ay.isChannelMuted(t.guild_id, e) && E.Ay.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = m.A.getChannel(e);
                return (0, f.pk)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
function B(e, t, n, r) {
    let i = null == t || t < n;
    return !(null == e || e > r) && !i;
}
T(F, "persistKey", "SummaryStore");
let H = new F(d.h, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        (null == s ? void 0 : s.channelId) !== t && (s = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var t, n;
        let { summary: r, channelId: i, error: a, receivedAt: s } = e;
        if (null != r && Object.keys(r).length > 0) {
            let e = (0, S.Ur)(r, i),
                t = [...(null != (n = w[i]) ? n : [])],
                a = t.findIndex((t) => t.id === (null == e ? void 0 : e.id));
            a > -1 ? (t[a] = e) : t.push(e), (w[i] = t);
        }
        let o = R(C({}, null != (t = P[i]) ? t : { fetching: !1 }), {
            summaryId: void 0,
            summaryIdLastReceivedAt: s,
            summaryIdError: a,
        });
        P[i] = o;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var t;
        let { channelId: n, summaryId: r, requestedAt: i } = e;
        P[n] = R(C({}, null != (t = P[n]) ? t : { fetching: !1 }), {
            summaryId: r,
            summaryIdLastRequestedAt: i,
        });
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, S.Ur)(e, n));
        if (null != s && s.channelId === n && !a.some((e) => e.id === (null == s ? void 0 : s.summaryId))) {
            var o;
            let e = (null != (o = w[n]) ? o : []).find((e) => e.id === (null == s ? void 0 : s.summaryId));
            null != e && a.push(e);
        }
        w[n] = (0, l.sortBy)(a, (e) => v.default.extractTimestamp(e.startId)).reverse();
        let c = R(C({}, P[n]), {
            fetching: !1,
            error: void 0,
            lastReceivedAt: i,
        });
        null != r && (c.error = r), (P[n] = c);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var t;
        P[e.channelId] = R(C({}, null != (t = P[e.channelId]) ? t : {}), {
            fetching: !0,
            lastRequestedAt: e.requestedAt,
        });
    },
    SET_HIGHLIGHTED_SUMMARY(e) {
        var t;
        if (
            (null == i && null == e.channelId) ||
            (e.channelId === (null == i ? void 0 : i.channelId) && e.summaryId === (null == i ? void 0 : i.summaryId))
        )
            return !1;
        if (
            null !=
                (i =
                    null != e.channelId
                        ? {
                              channelId: e.channelId,
                              summaryId: null != (t = e.summaryId) ? t : null,
                          }
                        : null) &&
            i.channelId === e.channelId &&
            null != i.summaryId
        ) {
            let e = w[i.channelId];
            a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = b.A.getChannelId();
        if (null != t)
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = w[i.channelId];
                a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
            } else {
                var n;
                a =
                    null == (n = w[t])
                        ? void 0
                        : n.findIndex((t) => B(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId));
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
                      summaryId: null != (t = e.summaryId) ? t : null,
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (D[t.id] = n) : delete D[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        j = R(C({}, j), {
            status: "fetching",
            lastRequest: Date.now(),
        });
    },
    RECEIVE_CHANNEL_AFFINITIES(e) {
        var t;
        let { affinities: n, error: r } = e;
        if (null != r) {
            (x = []),
                (L = {}),
                (j = R(C({}, j), {
                    status: "error",
                    lastResponse: Date.now(),
                }));
            return;
        }
        (x = null != n ? n : []),
            (L =
                null != (t = null == n ? void 0 : n.reduce((e, t) => ((e[t.channel_id] = t.affinity), e), {}))
                    ? t
                    : {}),
            (j = R(C({}, j), {
                status: "ok",
                lastResponse: Date.now(),
            }));
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                var r;
                let i = null != (r = P[t]) ? r : {};
                return (
                    (e[t] = R(C({}, i), {
                        fetching: !0,
                        lastRequestedAt: n,
                        error: void 0,
                    })),
                    e
                );
            }, {});
        P = C({}, P, r);
    },
    RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
        let {
                summaries: t,
                receivedAt: n,
                error: r,
                requestArgs: { channelIds: i },
            } = e,
            a = c()
                .toPairs(t)
                .reduce((e, t) => {
                    let [n, r] = t,
                        i = c()
                            .chain(r.map((e) => (0, S.Ur)(e, n)))
                            .sortBy((e) => v.default.extractTimestamp(e.startId))
                            .takeRight(U)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            s = i.reduce(
                (e, t) => {
                    var i;
                    let s = null != (i = P[t]) ? i : {},
                        o = a[t];
                    return (
                        null != o && (e.summariesByChannel[t] = o),
                        (e.summaryFetchStatusByChannel[t] = R(C({}, s), {
                            fetching: !1,
                            error: r,
                            lastReceivedAt: n,
                        })),
                        e
                    );
                },
                {
                    summariesByChannel: {},
                    summaryFetchStatusByChannel: {},
                },
            );
        (w = C({}, w, s.summariesByChannel)), (P = C({}, P, s.summaryFetchStatusByChannel));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var t, n, r;
        let { channel_id: i, summaries: a, guild_id: s } = e,
            o = Date.now(),
            l = c()
                .chain(a)
                .sortBy((e) => v.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, S.Ur)(e, i))
                .reverse()
                .value(),
            u = null != (t = w[i]) ? t : [],
            d = c()
                .chain(l)
                .concat(u)
                .sortBy((e) => v.default.extractTimestamp(e.startId))
                .takeRight(U)
                .uniqBy("id")
                .reverse()
                .value();
        (w[i] = d),
            (P[i] = R(C({}, P[i]), {
                error: void 0,
                fetching: null != (n = null == (r = P[i]) ? void 0 : r.fetching) && n,
                lastReceivedAt: o,
            }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (w = {}), (P = {});
    },
    DELETE_SUMMARY(e) {
        var t;
        let n = e.summary.channelId,
            r = (null != (t = w[n]) ? t : []).indexOf(e.summary);
        -1 !== r && w[n].splice(r, 1);
    },
});

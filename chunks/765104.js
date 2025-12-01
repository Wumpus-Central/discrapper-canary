let r, i, a, o;
n.d(t, { Z: () => V }), n(472816), n(794429), n(642613), n(388685), n(539854), n(583741);
var s,
    l = n(392711),
    c = n.n(l),
    u = n(442837),
    d = n(570140),
    f = n(902840),
    p = n(212819),
    _ = n(353926),
    m = n(823385),
    h = n(592125),
    g = n(430824),
    E = n(306680),
    b = n(944486),
    y = n(9156),
    O = n(594174),
    v = n(70956),
    S = n(709054),
    I = n(418088),
    T = n(814249);
function A(e, t, n) {
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
                A(e, t, n[t]);
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
function P(e, t) {
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
let R = {},
    w = {},
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
function Z() {
    M = m.Z.getProps()
        .results.filter((e) => e.type === p.h8.TEXT_CHANNEL && 0 === e.record.type)
        .map((e) => e.record.id);
}
class B extends (s = u.ZP.PersistedStore) {
    getState() {
        return { shouldShowTopicsBar: r };
    }
    initialize(e) {
        var t;
        (r = null == (t = null == e ? void 0 : e.shouldShowTopicsBar) || t),
            this.waitFor(h.Z, _.Z, g.Z, m.Z, E.ZP, b.Z, y.ZP, O.default),
            this.syncWith([m.Z], Z);
    }
    allSummaries() {
        return R;
    }
    topSummaries() {
        return Object.values(R)
            .flat()
            .filter(
                (e) =>
                    e.people.length > 1 &&
                    S.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * v.Z.Millis.HOUR,
            )
            .sort((e, t) => S.default.extractTimestamp(t.endId) - S.default.extractTimestamp(e.endId));
    }
    summaries(e) {
        var t;
        return null != (t = R[e]) ? t : k;
    }
    shouldShowTopicsBar() {
        return r;
    }
    findSummary(e, t) {
        var n;
        return null != (n = this.summaries(e).find((e) => e.id === t)) ? n : null;
    }
    selectedSummary(e) {
        return null != o && o.channelId === e && null != o.summaryId
            ? this.findSummary(e, null == o ? void 0 : o.summaryId)
            : null;
    }
    summaryFeedback(e) {
        return null == e ? null : D[e.id];
    }
    isFetching(e, t) {
        var n, r;
        return null != t
            ? (null == (r = w[e]) ? void 0 : r.summaryId) === t
            : (null == (n = w[e]) ? void 0 : n.fetching) === !0;
    }
    status(e) {
        return w[e];
    }
    shouldFetch(e, t) {
        var n, r;
        let i = w[e],
            a = h.Z.getChannel(e);
        if (!(0, f.Lp)(a)) return !1;
        if (null != t) {
            let e = null != (n = null == i ? void 0 : i.summaryIdLastRequestedAt) ? n : 0,
                r = Date.now() - e;
            return t !== (null == i ? void 0 : i.summaryId) || r > T.cS;
        }
        let o = null != (r = null == i ? void 0 : i.lastReceivedAt) ? r : 0;
        return !(null == i ? void 0 : i.fetching) && 0 === o;
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
            (null != j.lastResponse && Date.now() - j.lastResponse < 30 * v.Z.Millis.SECOND)
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
                    let t = h.Z.getChannel(e);
                    return null != t && !y.ZP.isChannelMuted(t.guild_id, e) && E.ZP.hasUnread(e);
                })),
            (a = a.filter((e) => {
                let t = h.Z.getChannel(e);
                return (0, f.Lp)(t, !1, !1);
            })).slice(0, i)
        );
    }
    visibleSummaryIndex() {
        return a;
    }
}
function F(e, t, n, r) {
    let i = null == t || t < n;
    return !(null == e || e > r) && !i;
}
A(B, "persistKey", "SummaryStore");
let V = new B(d.Z, {
    CONNECTION_OPEN: () => !1,
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        (null == o ? void 0 : o.channelId) !== t && (o = null);
    },
    TOGGLE_TOPICS_BAR() {
        r = !r;
    },
    RECEIVE_CHANNEL_SUMMARY(e) {
        var t, n;
        let { summary: r, channelId: i, error: a, receivedAt: o } = e;
        if (null != r && Object.keys(r).length > 0) {
            let e = (0, I.b)(r, i),
                n = [...(null != (t = R[i]) ? t : [])],
                a = n.findIndex((t) => t.id === (null == e ? void 0 : e.id));
            a > -1 ? (n[a] = e) : n.push(e), (R[i] = n);
        }
        let s = P(C({}, null != (n = w[i]) ? n : { fetching: !1 }), {
            summaryId: void 0,
            summaryIdLastReceivedAt: o,
            summaryIdError: a,
        });
        w[i] = s;
    },
    REQUEST_CHANNEL_SUMMARY(e) {
        var t;
        let { channelId: n, summaryId: r, requestedAt: i } = e;
        w[n] = P(C({}, null != (t = w[n]) ? t : { fetching: !1 }), {
            summaryId: r,
            summaryIdLastRequestedAt: i,
        });
    },
    RECEIVE_CHANNEL_SUMMARIES(e) {
        let { summaries: t, channelId: n, error: r, receivedAt: i } = e,
            a = t.filter((e) => Object.keys(e).length > 0).map((e) => (0, I.b)(e, n));
        if (null != o && o.channelId === n && !a.some((e) => e.id === (null == o ? void 0 : o.summaryId))) {
            var s;
            let e = (null != (s = R[n]) ? s : []).find((e) => e.id === (null == o ? void 0 : o.summaryId));
            null != e && a.push(e);
        }
        R[n] = (0, l.sortBy)(a, (e) => S.default.extractTimestamp(e.startId)).reverse();
        let c = P(C({}, w[n]), {
            fetching: !1,
            error: void 0,
            lastReceivedAt: i,
        });
        null != r && (c.error = r), (w[n] = c);
    },
    REQUEST_CHANNEL_SUMMARIES(e) {
        var t;
        w[e.channelId] = P(C({}, null != (t = w[e.channelId]) ? t : {}), {
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
            let e = R[i.channelId];
            a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
        }
    },
    UPDATE_VISIBLE_MESSAGES(e) {
        let t = b.Z.getChannelId();
        if (null != t)
            if (null != i && i.channelId === t && null != i.summaryId) {
                let e = R[i.channelId];
                a = null == e ? void 0 : e.findIndex((e) => e.id === (null == i ? void 0 : i.summaryId));
            } else {
                var n;
                a =
                    null == (n = R[t])
                        ? void 0
                        : n.findIndex((t) => F(e.topVisibleMessage, e.bottomVisibleMessage, t.startId, t.endId));
            }
    },
    SET_SELECTED_SUMMARY(e) {
        var t;
        let n = e.channelId;
        return null == n
            ? null
            : (n !== (null == o ? void 0 : o.channelId) || e.summaryId !== (null == o ? void 0 : o.summaryId)) &&
                  void (o = {
                      channelId: n,
                      summaryId: null != (t = e.summaryId) ? t : null,
                  });
    },
    SET_SUMMARY_FEEDBACK(e) {
        let { summary: t, rating: n } = e;
        null != n ? (D[t.id] = n) : delete D[t.id];
    },
    REQUEST_CHANNEL_AFFINITIES() {
        j = P(C({}, j), {
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
                (j = P(C({}, j), {
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
            (j = P(C({}, j), {
                status: "ok",
                lastResponse: Date.now(),
            }));
    },
    REQUEST_CHANNEL_SUMMARIES_BULK(e) {
        let { channelIds: t, requestedAt: n } = e,
            r = t.reduce((e, t) => {
                var r;
                let i = null != (r = w[t]) ? r : {};
                return (
                    (e[t] = P(C({}, i), {
                        fetching: !0,
                        lastRequestedAt: n,
                        error: void 0,
                    })),
                    e
                );
            }, {});
        w = C({}, w, r);
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
                            .chain(r.map((e) => (0, I.b)(e, n)))
                            .sortBy((e) => S.default.extractTimestamp(e.startId))
                            .takeRight(U)
                            .reverse()
                            .filter((e) => Object.keys(e).length > 0)
                            .value();
                    return (e[n] = i), e;
                }, {}),
            o = i.reduce(
                (e, t) => {
                    var i;
                    let o = null != (i = w[t]) ? i : {},
                        s = a[t];
                    return (
                        null != s && (e.summariesByChannel[t] = s),
                        (e.summaryFetchStatusByChannel[t] = P(C({}, o), {
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
        (R = C({}, R, o.summariesByChannel)), (w = C({}, w, o.summaryFetchStatusByChannel));
    },
    CONVERSATION_SUMMARY_UPDATE(e) {
        var t, n, r;
        let { channel_id: i, summaries: a, guild_id: o } = e,
            s = Date.now(),
            l = c()
                .chain(a)
                .sortBy((e) => S.default.extractTimestamp(e.start_id))
                .filter((e) => Object.keys(e).length > 0)
                .map((e) => (0, I.b)(e, i))
                .reverse()
                .value(),
            u = null != (n = R[i]) ? n : [],
            d = c()
                .chain(l)
                .concat(u)
                .sortBy((e) => S.default.extractTimestamp(e.startId))
                .takeRight(U)
                .uniqBy("id")
                .reverse()
                .value();
        (R[i] = d),
            (w[i] = P(C({}, w[i]), {
                error: void 0,
                fetching: null != (r = null == (t = w[i]) ? void 0 : t.fetching) && r,
                lastReceivedAt: s,
            }));
    },
    CLEAR_CONVERSATION_SUMMARIES() {
        (R = {}), (w = {});
    },
    DELETE_SUMMARY(e) {
        var t;
        let n = e.summary.channelId,
            r = (null != (t = R[n]) ? t : []).indexOf(e.summary);
        -1 !== r && R[n].splice(r, 1);
    },
});

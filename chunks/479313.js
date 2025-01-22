r.d(n, {
    $l: function () {
        return P;
    },
    G1: function () {
        return T;
    },
    JR: function () {
        return R;
    },
    U$: function () {
        return D;
    },
    e7: function () {
        return A;
    },
    wv: function () {
        return C;
    },
    yK: function () {
        return S;
    }
});
var i = r(192379),
    a = r(392711),
    o = r.n(a),
    s = r(399606),
    l = r(544891),
    u = r(570140),
    c = r(881052),
    d = r(902840),
    f = r(38618),
    p = r(592125),
    h = r(70956),
    _ = r(765104),
    m = r(981631);
let g = 75,
    E = 50,
    v = 30 * h.Z.Millis.SECOND,
    y = null,
    b = null;
async function I(e, n) {
    let r, i;
    if (!_.Z.shouldFetch(e, n)) return;
    let a = Date.now();
    u.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARY',
        channelId: e,
        summaryId: n,
        requestedAt: a
    });
    try {
        let r = await l.tn.get({
            url: m.Z5c.CHANNEL_SUMMARY(e, n),
            rejectWithError: !1
        });
        i = null == r ? void 0 : r.body;
    } catch (e) {
        r = new c.Hx(e);
    }
    u.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARY',
        channelId: e,
        summary: i,
        error: r,
        requestedAt: a,
        receivedAt: Date.now()
    });
}
async function T(e) {
    var n, r;
    let i, a;
    if (!_.Z.shouldFetch(e)) return;
    let s = Date.now();
    u.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARIES',
        channelId: e,
        requestedAt: s
    });
    try {
        a = await l.tn.get({
            url: m.Z5c.CHANNEL_SUMMARIES(e),
            rejectWithError: !1
        });
    } catch (e) {
        i = new c.Hx(e);
    }
    let d = (null == a ? void 0 : null === (n = a.body) || void 0 === n ? void 0 : n.summaries) instanceof Array ? a.body.summaries : null !== (r = null == a ? void 0 : a.body) && void 0 !== r ? r : [];
    (d = o().takeRight(d, g)),
        u.Z.dispatch({
            type: 'RECEIVE_CHANNEL_SUMMARIES',
            channelId: e,
            summaries: d,
            error: null != i ? i : void 0,
            requestedAt: s,
            receivedAt: Date.now()
        });
}
function S(e, n) {
    u.Z.dispatch({
        type: 'SET_HIGHLIGHTED_SUMMARY',
        channelId: e,
        summaryId: null != n ? n : null
    });
}
function A() {
    u.Z.dispatch({ type: 'TOGGLE_TOPICS_BAR' });
}
function C(e, n) {
    null != e && null != n && I(e, n),
        u.Z.dispatch({
            type: 'SET_SELECTED_SUMMARY',
            channelId: e,
            summaryId: null != n ? n : null
        });
}
function N(e, n) {
    u.Z.dispatch({
        type: 'SET_GRAVITY_SELECTED_SUMMARY',
        channelId: e,
        summaryId: null != n ? n : null
    });
}
function R(e, n) {
    u.Z.dispatch({
        type: 'UPDATE_VISIBLE_MESSAGES',
        topVisibleMessage: null != e ? e : null,
        bottomVisibleMessage: null != n ? n : null
    });
}
function O(e, n) {
    return null == y[e] && (y[e] = 0), null === n ? (y[e] = 0) : (y[e] += n), y[e];
}
function D(e, n) {
    u.Z.dispatch({
        type: 'SET_SUMMARY_FEEDBACK',
        summary: e,
        rating: n
    });
}
async function L() {
    var e;
    let n, r;
    if (!_.Z.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let i = Date.now();
    u.Z.dispatch({
        type: 'REQUEST_CHANNEL_AFFINITIES',
        requestedAt: i
    });
    try {
        r = await l.tn.get({
            url: '/users/@me/affinities/channels',
            rejectWithError: !1
        });
    } catch (e) {
        n = new c.Hx(e);
    }
    let a = null == r ? void 0 : null === (e = r.body) || void 0 === e ? void 0 : e.channel_affinities;
    u.Z.dispatch({
        type: 'RECEIVE_CHANNEL_AFFINITIES',
        affinities: a,
        error: null != n ? n : void 0,
        requestedAt: i,
        receivedAt: Date.now()
    });
}
async function x(e) {
    let n,
        r,
        { useQuickSwitcher: i = !0, useChannelAffinities: a = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = null != e ? e : [];
    let o = Date.now();
    if (
        0 ===
        (e = e
            .concat(
                _.Z.defaultChannelIds({
                    withQuickSwitcher: i,
                    withChannelAffinities: a
                })
            )
            .filter((e) => {
                let n = p.Z.getChannel(e);
                return (0, d.Lp)(n, !1, !0);
            })
            .filter((e) => {
                let n = Date.now(),
                    r = _.Z.status(e);
                if (null == r ? void 0 : r.fetching) return !1;
                let i = null == r ? void 0 : r.lastReceivedAt;
                return null == i || n - i > v;
            })
            .slice(0, E)).length
    )
        return Promise.resolve(null);
    u.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARIES_BULK',
        channelIds: e,
        requestedAt: o
    });
    try {
        r = await l.tn.post({
            url: m.Z5c.USER_SUMMARIES,
            body: { channel_ids: e },
            rejectWithError: !1
        });
    } catch (e) {
        n = new c.Hx(e);
    }
    let s = null == r ? void 0 : r.body.summaries;
    u.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARIES_BULK',
        requestedAt: o,
        receivedAt: Date.now(),
        summaries: s,
        requestArgs: { channelIds: e },
        error: n
    });
}
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = (0, s.e7)([f.Z], () => f.Z.isConnected()),
        r = i.useMemo(() => e.join(','), [e]);
    i.useEffect(() => {
        n && e();
        async function e() {
            try {
                await L();
            } catch (e) {}
            await x(r.split(','));
        }
    }, [r, n]);
}
async function P(e) {
    try {
        await l.tn.del({
            url: m.Z5c.CHANNEL_SUMMARY(e.channelId, e.id),
            rejectWithError: !1
        }),
            u.Z.dispatch({
                type: 'DELETE_SUMMARY',
                summary: e
            });
    } catch (e) {
        throw new c.Hx(e);
    }
}
let M = {
    setSummaryFeedback: D,
    updateVisibleMessages: R,
    setSelectedSummary: C,
    setGravitySelectedSummary: N,
    setHighlightedSummary: S,
    fetchSummaries: T,
    fetchSummariesBulk: x,
    useChannelSummaries: function e(e) {
        let { channelIds: n = [] } = e;
        return w(n), (0, s.Wu)([_.Z], () => _.Z.topSummaries(), []);
    },
    deleteSummary: P
};
n.ZP = M;

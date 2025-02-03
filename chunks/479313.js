n.d(t, {
    $l: () => x,
    G1: () => I,
    JR: () => N,
    U$: () => C,
    ZP: () => L,
    e7: () => T,
    wv: () => S,
    yK: () => b
});
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(399606),
    o = n(544891),
    l = n(570140),
    u = n(881052),
    c = n(902840),
    d = n(38618),
    f = n(592125),
    _ = n(70956),
    p = n(765104),
    h = n(981631);
let m = 75,
    g = 50,
    E = 30 * _.Z.Millis.SECOND,
    v = null;
async function y(e, t) {
    let n, i;
    if (!p.Z.shouldFetch(e, t)) return;
    let r = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARY',
        channelId: e,
        summaryId: t,
        requestedAt: r
    });
    try {
        let n = await o.tn.get({
            url: h.Z5c.CHANNEL_SUMMARY(e, t),
            rejectWithError: !1
        });
        i = null == n ? void 0 : n.body;
    } catch (e) {
        n = new u.Hx(e);
    }
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARY',
        channelId: e,
        summary: i,
        error: n,
        requestedAt: r,
        receivedAt: Date.now()
    });
}
async function I(e) {
    var t, n;
    let i, r;
    if (!p.Z.shouldFetch(e)) return;
    let s = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARIES',
        channelId: e,
        requestedAt: s
    });
    try {
        r = await o.tn.get({
            url: h.Z5c.CHANNEL_SUMMARIES(e),
            rejectWithError: !1
        });
    } catch (e) {
        i = new u.Hx(e);
    }
    let c = (null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? r.body.summaries : null !== (n = null == r ? void 0 : r.body) && void 0 !== n ? n : [];
    (c = a().takeRight(c, m)),
        l.Z.dispatch({
            type: 'RECEIVE_CHANNEL_SUMMARIES',
            channelId: e,
            summaries: c,
            error: null != i ? i : void 0,
            requestedAt: s,
            receivedAt: Date.now()
        });
}
function b(e, t) {
    l.Z.dispatch({
        type: 'SET_HIGHLIGHTED_SUMMARY',
        channelId: e,
        summaryId: null != t ? t : null
    });
}
function T() {
    l.Z.dispatch({ type: 'TOGGLE_TOPICS_BAR' });
}
function S(e, t) {
    null != e && null != t && y(e, t),
        l.Z.dispatch({
            type: 'SET_SELECTED_SUMMARY',
            channelId: e,
            summaryId: null != t ? t : null
        });
}
function A(e, t) {
    l.Z.dispatch({
        type: 'SET_GRAVITY_SELECTED_SUMMARY',
        channelId: e,
        summaryId: null != t ? t : null
    });
}
function N(e, t) {
    l.Z.dispatch({
        type: 'UPDATE_VISIBLE_MESSAGES',
        topVisibleMessage: null != e ? e : null,
        bottomVisibleMessage: null != t ? t : null
    });
}
function C(e, t) {
    l.Z.dispatch({
        type: 'SET_SUMMARY_FEEDBACK',
        summary: e,
        rating: t
    });
}
async function R() {
    var e;
    let t, n;
    if (!p.Z.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let i = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_AFFINITIES',
        requestedAt: i
    });
    try {
        n = await o.tn.get({
            url: '/users/@me/affinities/channels',
            rejectWithError: !1
        });
    } catch (e) {
        t = new u.Hx(e);
    }
    let r = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_AFFINITIES',
        affinities: r,
        error: null != t ? t : void 0,
        requestedAt: i,
        receivedAt: Date.now()
    });
}
async function O(e) {
    let t,
        n,
        { useQuickSwitcher: i = !0, useChannelAffinities: r = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = null != e ? e : [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(
                p.Z.defaultChannelIds({
                    withQuickSwitcher: i,
                    withChannelAffinities: r
                })
            )
            .filter((e) => {
                let t = f.Z.getChannel(e);
                return (0, c.Lp)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = p.Z.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let i = null == n ? void 0 : n.lastReceivedAt;
                return null == i || t - i > E;
            })
            .slice(0, g)).length
    )
        return Promise.resolve(null);
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARIES_BULK',
        channelIds: e,
        requestedAt: a
    });
    try {
        n = await o.tn.post({
            url: h.Z5c.USER_SUMMARIES,
            body: { channel_ids: e },
            rejectWithError: !1
        });
    } catch (e) {
        t = new u.Hx(e);
    }
    let s = null == n ? void 0 : n.body.summaries;
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARIES_BULK',
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: s,
        requestArgs: { channelIds: e },
        error: t
    });
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = (0, s.e7)([d.Z], () => d.Z.isConnected()),
        n = i.useMemo(() => e.join(','), [e]);
    i.useEffect(() => {
        t && e();
        async function e() {
            try {
                await R();
            } catch (e) {}
            await O(n.split(','));
        }
    }, [n, t]);
}
async function x(e) {
    try {
        await o.tn.del({
            url: h.Z5c.CHANNEL_SUMMARY(e.channelId, e.id),
            rejectWithError: !1
        }),
            l.Z.dispatch({
                type: 'DELETE_SUMMARY',
                summary: e
            });
    } catch (e) {
        throw new u.Hx(e);
    }
}
let L = {
    setSummaryFeedback: C,
    updateVisibleMessages: N,
    setSelectedSummary: S,
    setGravitySelectedSummary: A,
    setHighlightedSummary: b,
    fetchSummaries: I,
    fetchSummariesBulk: O,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return D(t), (0, s.Wu)([p.Z], () => p.Z.topSummaries(), []);
    },
    deleteSummary: x
};

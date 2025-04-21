n.d(t, {
    $l: () => w,
    G1: () => v,
    JR: () => A,
    U$: () => N,
    ZP: () => D,
    e7: () => I,
    wv: () => S,
    yK: () => O
}),
    n(35282);
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    o = n(399606),
    s = n(544891),
    l = n(570140),
    c = n(881052),
    u = n(902840),
    d = n(38618),
    f = n(592125),
    _ = n(70956),
    p = n(765104),
    h = n(981631);
let m = 75,
    g = 50,
    E = 30 * _.Z.Millis.SECOND,
    b = null;
async function y(e, t) {
    let n, r;
    if (!p.Z.shouldFetch(e, t)) return;
    let i = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARY',
        channelId: e,
        summaryId: t,
        requestedAt: i
    });
    try {
        let n = await s.tn.get({
            url: h.Z5c.CHANNEL_SUMMARY(e, t),
            rejectWithError: !1
        });
        r = null == n ? void 0 : n.body;
    } catch (e) {
        n = new c.Hx(e);
    }
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARY',
        channelId: e,
        summary: r,
        error: n,
        requestedAt: i,
        receivedAt: Date.now()
    });
}
async function v(e) {
    var t, n;
    let r, i;
    if (!p.Z.shouldFetch(e)) return;
    let o = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_SUMMARIES',
        channelId: e,
        requestedAt: o
    });
    try {
        i = await s.tn.get({
            url: h.Z5c.CHANNEL_SUMMARIES(e),
            rejectWithError: !1
        });
    } catch (e) {
        r = new c.Hx(e);
    }
    let u = (null == i || null == (t = i.body) ? void 0 : t.summaries) instanceof Array ? i.body.summaries : null != (n = null == i ? void 0 : i.body) ? n : [];
    (u = a().takeRight(u, m)),
        l.Z.dispatch({
            type: 'RECEIVE_CHANNEL_SUMMARIES',
            channelId: e,
            summaries: u,
            error: null != r ? r : void 0,
            requestedAt: o,
            receivedAt: Date.now()
        });
}
function O(e, t) {
    l.Z.dispatch({
        type: 'SET_HIGHLIGHTED_SUMMARY',
        channelId: e,
        summaryId: null != t ? t : null
    });
}
function I() {
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
function T(e, t) {
    l.Z.dispatch({
        type: 'SET_GRAVITY_SELECTED_SUMMARY',
        channelId: e,
        summaryId: null != t ? t : null
    });
}
function A(e, t) {
    l.Z.dispatch({
        type: 'UPDATE_VISIBLE_MESSAGES',
        topVisibleMessage: null != e ? e : null,
        bottomVisibleMessage: null != t ? t : null
    });
}
function N(e, t) {
    l.Z.dispatch({
        type: 'SET_SUMMARY_FEEDBACK',
        summary: e,
        rating: t
    });
}
async function C() {
    var e;
    let t, n;
    if (!p.Z.shouldFetchChannelAffinities()) return Promise.resolve(null);
    let r = Date.now();
    l.Z.dispatch({
        type: 'REQUEST_CHANNEL_AFFINITIES',
        requestedAt: r
    });
    try {
        n = await s.tn.get({
            url: '/users/@me/affinities/channels',
            rejectWithError: !1
        });
    } catch (e) {
        t = new c.Hx(e);
    }
    let i = null == n || null == (e = n.body) ? void 0 : e.channel_affinities;
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_AFFINITIES',
        affinities: i,
        error: null != t ? t : void 0,
        requestedAt: r,
        receivedAt: Date.now()
    });
}
async function R(e) {
    let t,
        n,
        { useQuickSwitcher: r = !0, useChannelAffinities: i = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    e = null != e ? e : [];
    let a = Date.now();
    if (
        0 ===
        (e = e
            .concat(
                p.Z.defaultChannelIds({
                    withQuickSwitcher: r,
                    withChannelAffinities: i
                })
            )
            .filter((e) => {
                let t = f.Z.getChannel(e);
                return (0, u.Lp)(t, !1, !0);
            })
            .filter((e) => {
                let t = Date.now(),
                    n = p.Z.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let r = null == n ? void 0 : n.lastReceivedAt;
                return null == r || t - r > E;
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
        n = await s.tn.post({
            url: h.Z5c.USER_SUMMARIES,
            body: { channel_ids: e },
            rejectWithError: !1
        });
    } catch (e) {
        t = new c.Hx(e);
    }
    let o = null == n ? void 0 : n.body.summaries;
    l.Z.dispatch({
        type: 'RECEIVE_CHANNEL_SUMMARIES_BULK',
        requestedAt: a,
        receivedAt: Date.now(),
        summaries: o,
        requestArgs: { channelIds: e },
        error: t
    });
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = (0, o.e7)([d.Z], () => d.Z.isConnected()),
        n = r.useMemo(() => e.join(','), [e]);
    r.useEffect(() => {
        t && e();
        async function e() {
            try {
                await C();
            } catch (e) {}
            await R(n.split(','));
        }
    }, [n, t]);
}
async function w(e) {
    try {
        await s.tn.del({
            url: h.Z5c.CHANNEL_SUMMARY(e.channelId, e.id),
            rejectWithError: !1
        }),
            l.Z.dispatch({
                type: 'DELETE_SUMMARY',
                summary: e
            });
    } catch (e) {
        throw new c.Hx(e);
    }
}
let D = {
    setSummaryFeedback: N,
    updateVisibleMessages: A,
    setSelectedSummary: S,
    setGravitySelectedSummary: T,
    setHighlightedSummary: O,
    fetchSummaries: v,
    fetchSummariesBulk: R,
    useChannelSummaries: function (e) {
        let { channelIds: t = [] } = e;
        return P(t), (0, o.Wu)([p.Z], () => p.Z.topSummaries(), []);
    },
    deleteSummary: w
};

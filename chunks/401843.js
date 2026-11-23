var i = n(284009),
    r = n.n(i),
    a = n(613412),
    s = n(620632),
    l = n(73153),
    o = n(643501),
    d = n(652896),
    c = n(346846),
    u = n(303227),
    _ = n(293432),
    E = n(384200),
    A = n(929921),
    f = n(616356),
    h = n(46653),
    I = n(734057),
    p = n(71393),
    m = n(309010),
    g = n(977997),
    T = n(147036),
    S = n(927813),
    N = n(650338),
    C = n(499785);
(n(387755), n(308528));
var O = n(367513);
n(597798);
var R = n(652215),
    L = n(55010);
function y(e, t) {
    let n = I.A.getChannel(t);
    return (r()(null != n, "Cannot join a null voice channel"), !g.A.isInChannel(t) && (0, T.Pd)(n, g.A, p.A));
}
function D(e, t) {
    if (null != o.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && y(n, i)) return;
    let r = (0, d._z)(e),
        a =
            t?.forceMultiple ||
            f.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== h.default.getId();
            }).length >= 2;
    (l.h.dispatch({ type: "STREAM_WATCH", streamKey: r, allowMultiple: a, analyticsLocations: t?.analyticsLocations }),
        null != n && (0, u.c6)(!0, n, i),
        (t?.forceFocus !== !0 && (a || t?.noFocus)) || O.A.selectParticipant(e.channelId, r));
}
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    (n && v(e, t),
        l.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? R.BRT.OVERLAY : R.BRT.APP }));
}
function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
n.d(
    t,
    {},
    {
        A9: D,
        Ho: function (e, t) {
            l.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
        },
        Nl: function (e, t) {
            let { guildId: n, channelId: i } = e;
            if (null != n && y(n, i)) return;
            D(e, t);
            let r = _.A.getWindowOpen(R.MLl.CHANNEL_CALL_POPOUT),
                a = m.Ay.getVoiceChannelId();
            (r && a === i) || (0, c.A)(e);
        },
        TZ: function (e, t) {
            let n = (0, d._z)(e);
            l.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
        },
        Tp: async function (e, t, n) {
            if (!E.A.shouldFetchPreview(e, t, n)) return;
            let i = (0, d._z)({ streamType: null != e ? L.U4.GUILD : L.U4.CALL, guildId: e, channelId: t, ownerId: n });
            l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: i });
            try {
                let e = await s.Bo.get({
                    url: R.Rsh.STREAM_PREVIEW(i),
                    query: { version: Date.now() },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
                l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: i, previewURL: e.body.url });
            } catch (t) {
                let e;
                (429 === t.status && (e = t.body.retry_after * S.A.Millis.SECOND),
                    l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e }));
            }
        },
        XI: function (e, t, n) {
            l.h.dispatch({
                type: "STREAM_START",
                streamType: null != e ? L.U4.GUILD : L.U4.CALL,
                guildId: e,
                channelId: t,
                appContext: __OVERLAY__ ? R.BRT.OVERLAY : R.BRT.APP,
                ...n,
            });
        },
        Xd: function (e) {
            if (!0 !== e.noTrack) {
                let t = A.A.getState();
                (0, N.K2)(
                    e.preset ?? t.preset,
                    e.resolution ?? t.resolution,
                    e.frameRate ?? t.fps,
                    e.soundshareEnabled ?? t.soundshareEnabled,
                    e.streamDrawingEnabled ?? t.streamDrawingEnabled,
                );
            }
            l.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
        },
        Xi: v,
        a8: async function (e) {
            try {
                await C.A.post({
                    url: R.Rsh.STREAM_NOTIFY(e),
                    oldFormErrors: !0,
                    trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY },
                    rejectWithError: !0,
                });
            } catch (e) {}
        },
        dA: function (e, t) {
            s.Bo.patch({ url: R.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
        },
        nO: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = f.A.getCurrentUserActiveStream();
            null != t && b((0, d._z)(t), e);
        },
        vN: b,
    },
);

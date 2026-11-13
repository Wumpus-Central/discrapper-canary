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
    A = n(616356),
    f = n(46653),
    h = n(734057),
    I = n(71393),
    p = n(309010),
    m = n(977997),
    T = n(147036),
    g = n(927813),
    S = n(650338),
    N = n(499785);
(n(387755), n(308528));
var C = n(367513);
n(597798);
var O = n(652215),
    R = n(55010);
function L(e, t) {
    let n = h.A.getChannel(t);
    return (r()(null != n, "Cannot join a null voice channel"), !m.A.isInChannel(t) && (0, T.Pd)(n, m.A, I.A));
}
function y(e, t) {
    if (null != o.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && L(n, i)) return;
    let r = (0, d._z)(e),
        a =
            t?.forceMultiple ||
            A.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== f.default.getId();
            }).length >= 2;
    (l.h.dispatch({ type: "STREAM_WATCH", streamKey: r, allowMultiple: a, analyticsLocations: t?.analyticsLocations }),
        null != n && (0, u.c6)(!0, n, i),
        (t?.forceFocus !== !0 && (a || t?.noFocus)) || C.A.selectParticipant(e.channelId, r));
}
function D(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    (n && b(e, t),
        l.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? O.BRT.OVERLAY : O.BRT.APP }));
}
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
n.d(
    t,
    {},
    {
        A9: y,
        Ho: function (e, t) {
            l.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
        },
        Nl: function (e, t) {
            let { guildId: n, channelId: i } = e;
            if (null != n && L(n, i)) return;
            y(e, t);
            let r = _.A.getWindowOpen(O.MLl.CHANNEL_CALL_POPOUT),
                a = p.Ay.getVoiceChannelId();
            (r && a === i) || (0, c.A)(e);
        },
        TZ: function (e, t) {
            let n = (0, d._z)(e);
            l.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
        },
        Tp: async function (e, t, n) {
            if (!E.A.shouldFetchPreview(e, t, n)) return;
            let i = (0, d._z)({ streamType: null != e ? R.U4.GUILD : R.U4.CALL, guildId: e, channelId: t, ownerId: n });
            l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: i });
            try {
                let e = await s.Bo.get({
                    url: O.Rsh.STREAM_PREVIEW(i),
                    query: { version: Date.now() },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
                l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: i, previewURL: e.body.url });
            } catch (t) {
                let e;
                (429 === t.status && (e = t.body.retry_after * g.A.Millis.SECOND),
                    l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e }));
            }
        },
        XI: function (e, t, n) {
            l.h.dispatch({
                type: "STREAM_START",
                streamType: null != e ? R.U4.GUILD : R.U4.CALL,
                guildId: e,
                channelId: t,
                appContext: __OVERLAY__ ? O.BRT.OVERLAY : O.BRT.APP,
                ...n,
            });
        },
        Xd: function (e) {
            (!0 !== e.noTrack && (0, S.K2)(e.preset, e.resolution, e.frameRate, e.soundshareEnabled),
                l.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e }));
        },
        Xi: b,
        a8: async function (e) {
            try {
                await N.A.post({
                    url: O.Rsh.STREAM_NOTIFY(e),
                    oldFormErrors: !0,
                    trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY },
                    rejectWithError: !0,
                });
            } catch (e) {}
        },
        dA: function (e, t) {
            s.Bo.patch({ url: O.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
        },
        nO: function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = A.A.getCurrentUserActiveStream();
            null != t && D((0, d._z)(t), e);
        },
        vN: D,
    },
);

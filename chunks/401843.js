n.d(t, {
    A9: () => b,
    Ho: () => U,
    Nl: () => P,
    TZ: () => h,
    Tp: () => y,
    XI: () => m,
    Xd: () => B,
    Xi: () => G,
    a8: () => v,
    dA: () => w,
    nO: () => F,
    vN: () => M,
});
var i = n(284009),
    a = n.n(i),
    r = n(110259),
    _ = n(636537),
    s = n(228366),
    l = n(643501),
    o = n(652896),
    E = n(346846),
    d = n(567249),
    c = n(384200),
    u = n(616356),
    I = n(495544),
    T = n(734057),
    A = n(71393),
    S = n(309010),
    N = n(977997),
    O = n(147036),
    R = n(927813),
    f = n(650338),
    C = n(499785);
n(387755), n(308528);
var p = n(367513);
n(956793);
var D = n(652215),
    L = n(325278);
function m(e, t, n) {
    s.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? L.U4.GUILD : L.U4.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? D.BRT.OVERLAY : D.BRT.APP,
        ...n,
    });
}
function h(e, t) {
    let n = (0, o._z)(e);
    s.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
}
function g(e, t) {
    let n = T.A.getChannel(t);
    return a()(null != n, "Cannot join a null voice channel"), !N.A.isInChannel(t) && (0, O.Pd)(n, N.A, A.A);
}
function b(e, t) {
    if (null != l.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && g(n, i)) return;
    let a = (0, o._z)(e),
        r =
            t?.forceMultiple ||
            u.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== I.default.getId();
            }).length >= 2;
    s.h.dispatch({ type: "STREAM_WATCH", streamKey: a, allowMultiple: r }),
        (t?.forceFocus !== !0 && (r || t?.noFocus)) || p.A.selectParticipant(e.channelId, a);
}
function U(e, t) {
    s.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function P(e, t) {
    let { guildId: n, channelId: i } = e;
    if (null != n && g(n, i)) return;
    b(e, t);
    let a = d.A.getWindowOpen(D.MLl.CHANNEL_CALL_POPOUT),
        r = S.A.getVoiceChannelId();
    (a && r === i) || (0, E.A)(e);
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && G(e, t),
        s.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? D.BRT.OVERLAY : D.BRT.APP });
}
function G(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    s.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function y(e, t, n) {
    if (!c.A.shouldFetchPreview(e, t, n)) return;
    let i = (0, o._z)({ streamType: null != e ? L.U4.GUILD : L.U4.CALL, guildId: e, channelId: t, ownerId: n });
    s.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: i });
    try {
        let e = await _.Bo.get({
            url: D.Rsh.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        s.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: i, previewURL: e.body.url });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * R.A.Millis.SECOND),
            s.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e });
    }
}
async function v(e) {
    try {
        await C.A.post({
            url: D.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: r.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function B(e) {
    !0 !== e.noTrack && (0, f.K2)(e.preset, e.resolution, e.frameRate, e.soundshareEnabled),
        s.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function w(e, t) {
    _.Bo.patch({ url: D.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function F() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.A.getCurrentUserActiveStream();
    null != t && M((0, o._z)(t), e);
}

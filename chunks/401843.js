n.d(t, {
    A9: () => b,
    Ho: () => U,
    Nl: () => P,
    TZ: () => h,
    Tp: () => G,
    XI: () => D,
    Xd: () => B,
    Xi: () => y,
    a8: () => v,
    dA: () => w,
    nO: () => F,
    vN: () => M,
});
var i = n(284009),
    r = n.n(i),
    a = n(110259),
    s = n(636537),
    _ = n(228366),
    l = n(643501),
    o = n(652896),
    E = n(346846),
    d = n(567249),
    c = n(384200),
    u = n(616356),
    I = n(495544),
    A = n(734057),
    T = n(71393),
    S = n(309010),
    N = n(977997),
    O = n(147036),
    R = n(927813),
    f = n(650338),
    C = n(499785);
n(387755), n(308528);
var p = n(367513);
n(956793);
var m = n(652215),
    L = n(325278);
function D(e, t, n) {
    _.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? L.U4.GUILD : L.U4.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? m.BRT.OVERLAY : m.BRT.APP,
        ...n,
    });
}
function h(e, t) {
    let n = (0, o._z)(e);
    _.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
}
function g(e, t) {
    let n = A.A.getChannel(t);
    return r()(null != n, "Cannot join a null voice channel"), !N.A.isInChannel(t) && (0, O.Pd)(n, N.A, T.A);
}
function b(e, t) {
    if (null != l.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && g(n, i)) return;
    let r = (0, o._z)(e),
        a =
            t?.forceMultiple ||
            u.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== I.default.getId();
            }).length >= 2;
    _.h.dispatch({ type: "STREAM_WATCH", streamKey: r, allowMultiple: a }),
        (t?.forceFocus !== !0 && (a || t?.noFocus)) || p.A.selectParticipant(e.channelId, r);
}
function U(e, t) {
    _.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function P(e, t) {
    let { guildId: n, channelId: i } = e;
    if (null != n && g(n, i)) return;
    b(e, t);
    let r = d.A.getWindowOpen(m.MLl.CHANNEL_CALL_POPOUT),
        a = S.A.getVoiceChannelId();
    (r && a === i) || (0, E.A)(e);
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && y(e, t),
        _.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? m.BRT.OVERLAY : m.BRT.APP });
}
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    _.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function G(e, t, n) {
    if (!c.A.shouldFetchPreview(e, t, n)) return;
    let i = (0, o._z)({ streamType: null != e ? L.U4.GUILD : L.U4.CALL, guildId: e, channelId: t, ownerId: n });
    _.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: i });
    try {
        let e = await s.Bo.get({
            url: m.Rsh.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        _.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: i, previewURL: e.body.url });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * R.A.Millis.SECOND),
            _.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e });
    }
}
async function v(e) {
    try {
        await C.A.post({
            url: m.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function B(e) {
    !0 !== e.noTrack && (0, f.K2)(e.preset, e.resolution, e.frameRate),
        _.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function w(e, t) {
    s.Bo.patch({ url: m.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function F() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.A.getCurrentUserActiveStream();
    null != t && M((0, o._z)(t), e);
}

n.d(t, {
    A9: () => v,
    Ho: () => b,
    Nl: () => M,
    TZ: () => y,
    Tp: () => w,
    XI: () => L,
    Xd: () => x,
    Xi: () => U,
    a8: () => G,
    dA: () => k,
    nO: () => F,
    vN: () => P,
});
var i = n(284009),
    r = n.n(i),
    a = n(562708),
    s = n(636537),
    l = n(228366),
    o = n(643501),
    d = n(652896),
    c = n(346846),
    u = n(446243),
    _ = n(567249),
    E = n(384200),
    A = n(616356),
    h = n(280450),
    I = n(734057),
    f = n(71393),
    p = n(309010),
    T = n(977997),
    m = n(147036),
    g = n(927813),
    S = n(650338),
    N = n(499785);
n(387755), n(308528);
var C = n(367513);
n(730852);
var O = n(652215),
    R = n(325278);
function L(e, t, n) {
    l.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? R.U4.GUILD : R.U4.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? O.BRT.OVERLAY : O.BRT.APP,
        ...n,
    });
}
function y(e, t) {
    let n = (0, d._z)(e);
    l.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
}
function D(e, t) {
    let n = I.A.getChannel(t);
    return r()(null != n, "Cannot join a null voice channel"), !T.A.isInChannel(t) && (0, m.Pd)(n, T.A, f.A);
}
function v(e, t) {
    if (null != o.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && D(n, i)) return;
    let r = (0, d._z)(e),
        a =
            t?.forceMultiple ||
            A.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== h.default.getId();
            }).length >= 2;
    l.h.dispatch({ type: "STREAM_WATCH", streamKey: r, allowMultiple: a }),
        null != n && (0, u.c6)(!0, n, i),
        (t?.forceFocus !== !0 && (a || t?.noFocus)) || C.A.selectParticipant(e.channelId, r);
}
function b(e, t) {
    l.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function M(e, t) {
    let { guildId: n, channelId: i } = e;
    if (null != n && D(n, i)) return;
    v(e, t);
    let r = _.A.getWindowOpen(O.MLl.CHANNEL_CALL_POPOUT),
        a = p.Ay.getVoiceChannelId();
    (r && a === i) || (0, c.A)(e);
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && U(e, t),
        l.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? O.BRT.OVERLAY : O.BRT.APP });
}
function U(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function w(e, t, n) {
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
        429 === t.status && (e = t.body.retry_after * g.A.Millis.SECOND),
            l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e });
    }
}
async function G(e) {
    try {
        await N.A.post({
            url: O.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function x(e) {
    !0 !== e.noTrack && (0, S.K2)(e.preset, e.resolution, e.frameRate, e.soundshareEnabled),
        l.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function k(e, t) {
    s.Bo.patch({ url: O.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function F() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = A.A.getCurrentUserActiveStream();
    null != t && P((0, d._z)(t), e);
}

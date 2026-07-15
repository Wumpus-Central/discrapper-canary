"use strict";
n.d(t, {
    A9: () => y,
    Ho: () => v,
    Nl: () => b,
    TZ: () => L,
    Tp: () => U,
    XI: () => R,
    Xd: () => G,
    Xi: () => P,
    a8: () => w,
    dA: () => x,
    nO: () => k,
    vN: () => M,
});
var i = n(284009),
    r = n.n(i),
    a = n(562708),
    s = n(636537),
    l = n(228366),
    o = n(643501),
    d = n(652896),
    c = n(346846),
    u = n(567249),
    _ = n(384200),
    E = n(616356),
    A = n(280450),
    h = n(734057),
    I = n(71393),
    f = n(309010),
    p = n(977997),
    T = n(871237),
    m = n(927813),
    g = n(650338),
    S = n(499785);
n(387755), n(308528);
var N = n(367513);
n(730852);
var C = n(652215),
    O = n(325278);
function R(e, t, n) {
    l.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? O.U4.GUILD : O.U4.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP,
        ...n,
    });
}
function L(e, t) {
    let n = (0, d._z)(e);
    l.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
}
function D(e, t) {
    let n = h.A.getChannel(t);
    return r()(null != n, "Cannot join a null voice channel"), !p.A.isInChannel(t) && (0, T.Pd)(n, p.A, I.A);
}
function y(e, t) {
    if (null != o.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && D(n, i)) return;
    let r = (0, d._z)(e),
        a =
            t?.forceMultiple ||
            E.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== A.default.getId();
            }).length >= 2;
    l.h.dispatch({ type: "STREAM_WATCH", streamKey: r, allowMultiple: a }),
        (t?.forceFocus !== !0 && (a || t?.noFocus)) || N.A.selectParticipant(e.channelId, r);
}
function v(e, t) {
    l.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function b(e, t) {
    let { guildId: n, channelId: i } = e;
    if (null != n && D(n, i)) return;
    y(e, t);
    let r = u.A.getWindowOpen(C.MLl.CHANNEL_CALL_POPOUT),
        a = f.A.getVoiceChannelId();
    (r && a === i) || (0, c.A)(e);
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && P(e, t),
        l.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP });
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function U(e, t, n) {
    if (!_.A.shouldFetchPreview(e, t, n)) return;
    let i = (0, d._z)({ streamType: null != e ? O.U4.GUILD : O.U4.CALL, guildId: e, channelId: t, ownerId: n });
    l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: i });
    try {
        let e = await s.Bo.get({
            url: C.Rsh.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: (0, s.fT)(),
        });
        l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: i, previewURL: e.body.url });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * m.A.Millis.SECOND),
            l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e });
    }
}
async function w(e) {
    try {
        await S.A.post({
            url: C.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function G(e) {
    !0 !== e.noTrack && (0, g.K2)(e.preset, e.resolution, e.frameRate, e.soundshareEnabled),
        l.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function x(e, t) {
    s.Bo.patch({ url: C.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function k() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = E.A.getCurrentUserActiveStream();
    null != t && M((0, d._z)(t), e);
}

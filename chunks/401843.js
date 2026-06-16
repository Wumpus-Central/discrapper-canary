"use strict";
n.d(t, {
    A9: () => b,
    Ho: () => D,
    Nl: () => L,
    TZ: () => R,
    Tp: () => P,
    XI: () => v,
    Xd: () => k,
    Xi: () => M,
    a8: () => x,
    dA: () => U,
    nO: () => G,
    vN: () => w,
});
var i = n(284009),
    r = n.n(i),
    s = n(562708),
    a = n(636537),
    o = n(228366),
    l = n(643501),
    u = n(652896),
    c = n(346846),
    d = n(567249),
    _ = n(384200),
    h = n(616356),
    f = n(495544),
    p = n(734057),
    E = n(71393),
    m = n(309010),
    g = n(977997),
    A = n(871237),
    I = n(927813),
    T = n(650338),
    S = n(499785);
n(387755), n(308528);
var y = n(367513);
n(730852);
var C = n(652215),
    N = n(325278);
function v(e, t, n) {
    o.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? N.U4.GUILD : N.U4.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP,
        ...n,
    });
}
function R(e, t) {
    let n = (0, u._z)(e);
    o.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
}
function O(e, t) {
    let n = p.A.getChannel(t);
    return r()(null != n, "Cannot join a null voice channel"), !g.A.isInChannel(t) && (0, A.Pd)(n, g.A, E.A);
}
function b(e, t) {
    if (null != l.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && O(n, i)) return;
    let r = (0, u._z)(e),
        s =
            t?.forceMultiple ||
            h.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== f.default.getId();
            }).length >= 2;
    o.h.dispatch({ type: "STREAM_WATCH", streamKey: r, allowMultiple: s }),
        (t?.forceFocus !== !0 && (s || t?.noFocus)) || y.A.selectParticipant(e.channelId, r);
}
function D(e, t) {
    o.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function L(e, t) {
    let { guildId: n, channelId: i } = e;
    if (null != n && O(n, i)) return;
    b(e, t);
    let r = d.A.getWindowOpen(C.MLl.CHANNEL_CALL_POPOUT),
        s = m.A.getVoiceChannelId();
    (r && s === i) || (0, c.A)(e);
}
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && M(e, t),
        o.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP });
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    o.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function P(e, t, n) {
    if (!_.A.shouldFetchPreview(e, t, n)) return;
    let i = (0, u._z)({ streamType: null != e ? N.U4.GUILD : N.U4.CALL, guildId: e, channelId: t, ownerId: n });
    o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: i });
    try {
        let e = await a.Bo.get({
            url: C.Rsh.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: i, previewURL: e.body.url });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * I.A.Millis.SECOND),
            o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e });
    }
}
async function x(e) {
    try {
        await S.A.post({
            url: C.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function k(e) {
    !0 !== e.noTrack && (0, T.K2)(e.preset, e.resolution, e.frameRate, e.soundshareEnabled),
        o.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function U(e, t) {
    a.Bo.patch({ url: C.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function G() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = h.A.getCurrentUserActiveStream();
    null != t && w((0, u._z)(t), e);
}

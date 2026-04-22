"use strict";
n.d(t, {
    A9: () => b,
    Ho: () => D,
    Nl: () => L,
    TZ: () => v,
    Tp: () => P,
    XI: () => R,
    Xd: () => k,
    Xi: () => M,
    a8: () => U,
    dA: () => x,
    nO: () => G,
    vN: () => w,
});
var r = n(284009),
    i = n.n(r),
    s = n(110259),
    a = n(562465),
    o = n(73153),
    l = n(643501),
    u = n(652896),
    d = n(346846),
    c = n(87001),
    _ = n(384200),
    f = n(616356),
    E = n(961350),
    h = n(734057),
    p = n(71393),
    m = n(309010),
    g = n(977997),
    A = n(147036),
    I = n(927813),
    T = n(650338),
    S = n(499785);
n(387755), n(308528);
var y = n(367513);
n(956793);
var N = n(652215),
    O = n(502075);
function R(e, t, n) {
    o.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? O.U4.GUILD : O.U4.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? N.BRT.OVERLAY : N.BRT.APP,
        ...n,
    });
}
function v(e, t) {
    let n = (0, u._z)(e);
    o.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
}
function C(e, t) {
    let n = h.A.getChannel(t);
    return i()(null != n, "Cannot join a null voice channel"), !g.A.isInChannel(t) && (0, A.Pd)(n, g.A, p.A);
}
function b(e, t) {
    if (null != l.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: r } = e;
    if (null != n && C(n, r)) return;
    let i = (0, u._z)(e),
        s =
            t?.forceMultiple ||
            f.A.getAllActiveStreamsForChannel(r).filter((e) => {
                let { ownerId: t } = e;
                return t !== E.default.getId();
            }).length >= 2;
    o.h.dispatch({ type: "STREAM_WATCH", streamKey: i, allowMultiple: s }),
        (t?.forceFocus !== !0 && (s || t?.noFocus)) || y.A.selectParticipant(e.channelId, i);
}
function D(e, t) {
    o.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function L(e, t) {
    let { guildId: n, channelId: r } = e;
    if (null != n && C(n, r)) return;
    b(e, t);
    let i = c.A.getWindowOpen(N.MLl.CHANNEL_CALL_POPOUT),
        s = m.A.getVoiceChannelId();
    (i && s === r) || (0, d.A)(e);
}
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && M(e, t),
        o.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? N.BRT.OVERLAY : N.BRT.APP });
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    o.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function P(e, t, n) {
    if (!_.A.shouldFetchPreview(e, t, n)) return;
    let r = (0, u._z)({ streamType: null != e ? O.U4.GUILD : O.U4.CALL, guildId: e, channelId: t, ownerId: n });
    o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: r });
    try {
        let e = await a.Bo.get({
            url: N.Rsh.STREAM_PREVIEW(r),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: r, previewURL: e.body.url });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * I.A.Millis.SECOND),
            o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: r, retryAfter: e });
    }
}
async function U(e) {
    try {
        await S.A.post({
            url: N.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function k(e) {
    !0 !== e.noTrack && (0, T.K2)(e.preset, e.resolution, e.frameRate),
        o.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function x(e, t) {
    a.Bo.patch({ url: N.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function G() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = f.A.getCurrentUserActiveStream();
    null != t && w((0, u._z)(t), e);
}

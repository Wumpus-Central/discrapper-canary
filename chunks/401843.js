"use strict";
n.d(t, {
    A9: () => L,
    Ho: () => w,
    Nl: () => x,
    TZ: () => O,
    Tp: () => k,
    XI: () => R,
    Xd: () => G,
    Xi: () => M,
    a8: () => U,
    dA: () => V,
    nO: () => F,
    vN: () => P,
});
var r = n(284009),
    i = n.n(r),
    a = n(110259),
    s = n(562465),
    o = n(73153),
    l = n(643501),
    u = n(315606),
    c = n(652896),
    d = n(346846),
    _ = n(87001),
    f = n(384200),
    p = n(616356),
    h = n(961350),
    m = n(734057),
    g = n(71393),
    E = n(309010),
    A = n(977997),
    I = n(147036),
    T = n(927813),
    y = n(650338),
    S = n(499785);
n(387755), n(308528);
var v = n(367513);
n(956793);
var C = n(652215),
    b = n(502075);
let N = 2;
function R(e, t, n) {
    o.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? b.U4.GUILD : b.U4.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP,
        ...n,
    });
}
function O(e, t) {
    let n = (0, c._z)(e);
    o.h.dispatch({ type: "STREAM_SET_PAUSED", streamKey: n, paused: t });
}
function D(e, t) {
    let n = m.A.getChannel(t);
    return i()(null != n, "Cannot join a null voice channel"), !A.A.isInChannel(t) && (0, I.Pd)(n, A.A, g.A);
}
function L(e, t) {
    let { defaultWatchMultipleStreams: n } = (0, u.d)({ location: "StreamActionCreators.watchStream" });
    if (null != l.default.getRemoteSessionId()) return;
    let { guildId: r, channelId: i } = e;
    if (null != r && D(r, i)) return;
    let a = (0, c._z)(e),
        s =
            t?.forceMultiple ||
            p.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== h.default.getId();
            }).length >= N;
    o.h.dispatch({ type: "STREAM_WATCH", streamKey: a, allowMultiple: s || n }),
        (t?.forceFocus !== !0 && (s || t?.noFocus)) || v.A.selectParticipant(e.channelId, a);
}
function w(e, t) {
    o.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function x(e, t) {
    let { guildId: n, channelId: r } = e;
    if (null != n && D(n, r)) return;
    L(e, t);
    let i = _.A.getWindowOpen(C.MLl.CHANNEL_CALL_POPOUT),
        a = E.A.getVoiceChannelId();
    (i && a === r) || (0, d.A)(e);
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && M(e, t),
        o.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP });
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    o.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function k(e, t, n) {
    if (!f.A.shouldFetchPreview(e, t, n)) return;
    let r = (0, c._z)({ streamType: null != e ? b.U4.GUILD : b.U4.CALL, guildId: e, channelId: t, ownerId: n });
    o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: r });
    try {
        let e = await s.Bo.get({
            url: C.Rsh.STREAM_PREVIEW(r),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: r, previewURL: e.body.url });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * T.A.Millis.SECOND),
            o.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: r, retryAfter: e });
    }
}
async function U(e) {
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
    !0 !== e.noTrack && (0, y.K2)(e.preset, e.resolution, e.frameRate),
        o.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function V(e, t) {
    s.Bo.patch({ url: C.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function F() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.A.getCurrentUserActiveStream();
    null != t && P((0, c._z)(t), e);
}

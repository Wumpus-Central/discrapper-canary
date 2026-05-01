n.d(t, {
    A9: () => b,
    Ho: () => M,
    Nl: () => P,
    TZ: () => L,
    Tp: () => y,
    XI: () => g,
    Xd: () => w,
    Xi: () => v,
    a8: () => G,
    dA: () => x,
    nO: () => V,
    vN: () => U,
});
var i = n(284009),
    a = n.n(i),
    r = n(110259),
    s = n(636537),
    l = n(228366),
    o = n(643501),
    d = n(652896),
    c = n(346846),
    _ = n(567249),
    E = n(384200),
    u = n(616356),
    A = n(495544),
    I = n(734057),
    T = n(71393),
    h = n(309010),
    S = n(977997),
    N = n(147036),
    f = n(927813),
    p = n(650338),
    m = n(499785);
n(387755), n(308528);
var O = n(367513);
n(956793);
var C = n(652215),
    R = n(325278);
function g(e, t, n) {
    l.h.dispatch({
        type: "STREAM_START",
        streamType: null != e ? R.U4.GUILD : R.U4.CALL,
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
    let n = I.A.getChannel(t);
    return a()(null != n, "Cannot join a null voice channel"), !S.A.isInChannel(t) && (0, N.Pd)(n, S.A, T.A);
}
function b(e, t) {
    if (null != o.default.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && D(n, i)) return;
    let a = (0, d._z)(e),
        r =
            t?.forceMultiple ||
            u.A.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== A.default.getId();
            }).length >= 2;
    l.h.dispatch({ type: "STREAM_WATCH", streamKey: a, allowMultiple: r }),
        (t?.forceFocus !== !0 && (r || t?.noFocus)) || O.A.selectParticipant(e.channelId, a);
}
function M(e, t) {
    l.h.dispatch({ type: "STREAM_UPDATE_SELF_HIDDEN", channelId: e, selfStreamHidden: t });
}
function P(e, t) {
    let { guildId: n, channelId: i } = e;
    if (null != n && D(n, i)) return;
    b(e, t);
    let a = _.A.getWindowOpen(C.MLl.CHANNEL_CALL_POPOUT),
        r = h.A.getVoiceChannelId();
    (a && r === i) || (0, c.A)(e);
}
function U(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && v(e, t),
        l.h.dispatch({ type: "STREAM_STOP", streamKey: e, appContext: __OVERLAY__ ? C.BRT.OVERLAY : C.BRT.APP });
}
function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.h.dispatch({ type: "STREAM_CLOSE", streamKey: e, canShowFeedback: t });
}
async function y(e, t, n) {
    if (!E.A.shouldFetchPreview(e, t, n)) return;
    let i = (0, d._z)({ streamType: null != e ? R.U4.GUILD : R.U4.CALL, guildId: e, channelId: t, ownerId: n });
    l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_START", streamKey: i });
    try {
        let e = await s.Bo.get({
            url: C.Rsh.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: i, previewURL: e.body.url });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * f.A.Millis.SECOND),
            l.h.dispatch({ type: "STREAM_PREVIEW_FETCH_FAIL", streamKey: i, retryAfter: e });
    }
}
async function G(e) {
    try {
        await m.A.post({
            url: C.Rsh.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: r.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function w(e) {
    !0 !== e.noTrack && (0, p.K2)(e.preset, e.resolution, e.frameRate, e.soundshareEnabled),
        l.h.dispatch({ type: "STREAM_UPDATE_SETTINGS", ...e });
}
function x(e, t) {
    s.Bo.patch({ url: C.Rsh.STREAM(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
}
function V() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = u.A.getCurrentUserActiveStream();
    null != t && U((0, d._z)(t), e);
}

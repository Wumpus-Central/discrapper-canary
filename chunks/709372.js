n.d(t, {
    AL: () => m,
    CH: () => s,
    Mk: () => i,
    Rz: () => p,
    nf: () => h,
    o2: () => f,
    om: () => r,
    tH: () => u,
    tO: () => g,
    wX: () => x,
    yC: () => c,
    z5: () => o,
    zh: () => d,
});
let l = (0, n(839214).D)(() => ({ byChannel: {}, retainedDraftChannelId: null, finalizingByChannel: {} }));
function i(e) {
    return l.getState().byChannel[e];
}
function r(e) {
    return l.useState((t) => t.byChannel[e]);
}
function s() {
    let { byChannel: e } = l.getState();
    for (let t of Object.keys(e)) {
        let n = e[t]?.phase;
        if ("requesting" === n || "recording" === n) return t;
    }
    return null;
}
function a(e, t) {
    let n = { ...l.getState().byChannel };
    (null == t ? delete n[e] : (n[e] = t), l.setState({ byChannel: n }));
}
function o(e, t, n) {
    let i = l.getState().byChannel[e];
    a(e, { ...i, phase: t, startTimeMillis: n ?? i?.startTimeMillis });
}
function u(e, t) {
    let n = l.getState(),
        i = { ...n.byChannel };
    (null != n.retainedDraftChannelId && n.retainedDraftChannelId !== e && delete i[n.retainedDraftChannelId],
        (i[e] = { ...i[e], phase: "recorded", recordedDurationSecs: t, recordedPlayback: void 0 }),
        l.setState({ byChannel: i, retainedDraftChannelId: e }));
}
function c() {
    return l.getState().retainedDraftChannelId;
}
function d(e) {
    let t = l.getState(),
        n = { ...t.byChannel };
    (delete n[e],
        l.setState({
            byChannel: n,
            retainedDraftChannelId: t.retainedDraftChannelId === e ? null : t.retainedDraftChannelId,
        }));
}
function h() {
    l.setState({ byChannel: {}, retainedDraftChannelId: null, finalizingByChannel: {} });
}
function m(e, t) {
    let n = l.getState().byChannel[e];
    n?.phase === "recorded" && a(e, { ...n, recordedDurationSecs: t });
}
function f(e, t) {
    let n = l.getState().byChannel[e];
    n?.phase === "recorded" && a(e, { ...n, recordedPlayback: t });
}
function p(e, t) {
    let n = { ...l.getState().finalizingByChannel };
    (t ? (n[e] = !0) : delete n[e], l.setState({ finalizingByChannel: n }));
}
function g() {
    return Object.keys(l.getState().finalizingByChannel).length > 0;
}
function x() {
    return l.useState((e) => Object.keys(e.finalizingByChannel).length > 0);
}

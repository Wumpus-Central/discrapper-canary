n.d(t, {
    MH: () => h,
    Nm: () => p,
    Ol: () => g,
    RB: () => m,
    Rl: () => A,
    W9: () => u,
    ZW: () => c,
    bI: () => f,
    d4: () => d,
    dk: () => o,
});
var i = n(158390),
    l = n(562465),
    a = n(73153),
    s = n(134753),
    r = n(652215);
function o(e, t, n, i, l) {
    a.h.dispatch({
        type: "SHARED_CANVAS_DRAW_LINE_POINT",
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: i,
        point: l,
    });
}
function c(e, t, n, i) {
    return l.Bo.post({ url: r.Rsh.SHARED_CANVAS_LINES(e, n), body: { line_id: t, points: i }, rejectWithError: !1 });
}
function d(e, t, n, i) {
    a.h.dispatch({ type: "SHARED_CANVAS_UPDATE_LINE_POINTS", userId: t, lineId: e, newPoints: i, streamerId: n });
}
function u(e, t, n) {
    return l.Bo.post({ url: r.Rsh.SHARED_CANVAS_EMOJI_HOSES(e, t), body: { emoji_hose: n }, rejectWithError: !1 });
}
function h(e, t, n) {
    l.Bo.del({ url: r.Rsh.SHARED_CANVAS_EMOJI_HOSE(e, t, n), backoff: new i.A(), rejectWithError: !0 });
}
function m(e, t) {
    (t.state = s.B.STOP),
        a.h.dispatch({ type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE", emojiHose: t, userId: t.userId, streamerId: e });
}
function A(e, t, n) {
    a.h.dispatch({ type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE", emojiHose: e, userId: t, streamerId: n });
}
function p(e, t) {
    a.h.dispatch({ type: "SHARED_CANVAS_CLEAR_DRAWABLES", drawables: e, streamerId: t });
}
function g(e) {
    a.h.dispatch({ type: "SHARED_CANVAS_SET_DRAW_MODE", drawMode: e });
}
function f() {
    a.h.dispatch({ type: "TOGGLE_OVERLAY_CANVAS" });
}

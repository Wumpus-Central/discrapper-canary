n.d(t, {
    AX: () => c,
    BR: () => d,
    Bo: () => g,
    Df: () => p,
    LT: () => b,
    ZZ: () => f,
    cV: () => u,
    fW: () => m,
    gr: () => h,
    oW: () => s,
});
var r = n(261470),
    i = n(544891),
    l = n(570140),
    a = n(984063),
    o = n(981631);
function s(e, t, n, r, i) {
    l.Z.dispatch({
        type: "SHARED_CANVAS_DRAW_LINE_POINT",
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: r,
        point: i,
    });
}
function c(e, t, n, r) {
    return i.tn.post({
        url: o.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: r,
        },
        rejectWithError: !1,
    });
}
function u(e, t, n, r) {
    l.Z.dispatch({
        type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
        userId: t,
        lineId: e,
        newPoints: r,
        streamerId: n,
    });
}
function d(e, t, n) {
    return i.tn.post({
        url: o.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: { emoji_hose: n },
        rejectWithError: !1,
    });
}
function p(e, t, n) {
    i.tn.del({
        url: o.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new r.Z(),
        rejectWithError: !0,
    });
}
function f(e, t) {
    (t.state = a.f.STOP),
        l.Z.dispatch({
            type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
            emojiHose: t,
            userId: t.userId,
            streamerId: e,
        });
}
function h(e, t, n) {
    l.Z.dispatch({
        type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
        emojiHose: e,
        userId: t,
        streamerId: n,
    });
}
function m(e, t) {
    l.Z.dispatch({
        type: "SHARED_CANVAS_CLEAR_DRAWABLES",
        drawables: e,
        streamerId: t,
    });
}
function g(e) {
    l.Z.dispatch({
        type: "SHARED_CANVAS_SET_DRAW_MODE",
        drawMode: e,
    });
}
function b() {
    l.Z.dispatch({ type: "TOGGLE_OVERLAY_CANVAS" });
}

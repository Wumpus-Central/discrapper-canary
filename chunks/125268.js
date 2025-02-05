n.d(t, {
    AX: () => u,
    BR: () => d,
    Bo: () => v,
    Df: () => m,
    LT: () => g,
    ZZ: () => f,
    cV: () => c,
    fW: () => p,
    gr: () => h,
    oW: () => o
});
var l = n(261470),
    i = n(544891),
    r = n(570140),
    a = n(984063),
    s = n(981631);
function o(e, t, n, l, i) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_DRAW_LINE_POINT',
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: l,
        point: i
    });
}
function u(e, t, n, l) {
    return i.tn.post({
        url: s.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: l
        },
        rejectWithError: !1
    });
}
function c(e, t, n, l) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_LINE_POINTS',
        userId: t,
        lineId: e,
        newPoints: l,
        streamerId: n
    });
}
function d(e, t, n) {
    return i.tn.post({
        url: s.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: { emoji_hose: n },
        rejectWithError: !1
    });
}
function m(e, t, n) {
    i.tn.del({
        url: s.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new l.Z(),
        rejectWithError: !0
    });
}
function f(e, t) {
    (t.state = a.f.STOP),
        r.Z.dispatch({
            type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
            emojiHose: t,
            userId: t.userId,
            streamerId: e
        });
}
function h(e, t, n) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: e,
        userId: t,
        streamerId: n
    });
}
function p(e, t) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_CLEAR_DRAWABLES',
        drawables: e,
        streamerId: t
    });
}
function v(e) {
    r.Z.dispatch({
        type: 'SHARED_CANVAS_SET_DRAW_MODE',
        drawMode: e
    });
}
function g() {
    r.Z.dispatch({ type: 'TOGGLE_OVERLAY_CANVAS' });
}

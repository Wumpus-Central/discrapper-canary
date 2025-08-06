n.d(t, {
    AX: () => c,
    BR: () => d,
    Bo: () => m,
    Df: () => f,
    LT: () => g,
    ZZ: () => _,
    cV: () => u,
    fW: () => h,
    gr: () => p,
    oW: () => l
});
var r = n(261470),
    i = n(544891),
    o = n(570140),
    a = n(984063),
    s = n(981631);
function l(e, t, n, r, i) {
    o.Z.dispatch({
        type: 'SHARED_CANVAS_DRAW_LINE_POINT',
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: r,
        point: i
    });
}
function c(e, t, n, r) {
    return i.tn.post({
        url: s.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: r
        },
        rejectWithError: !1
    });
}
function u(e, t, n, r) {
    o.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_LINE_POINTS',
        userId: t,
        lineId: e,
        newPoints: r,
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
function f(e, t, n) {
    i.tn.del({
        url: s.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new r.Z(),
        rejectWithError: !0
    });
}
function _(e, t) {
    ((t.state = a.f.STOP),
        o.Z.dispatch({
            type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
            emojiHose: t,
            userId: t.userId,
            streamerId: e
        }));
}
function p(e, t, n) {
    o.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: e,
        userId: t,
        streamerId: n
    });
}
function h(e, t) {
    o.Z.dispatch({
        type: 'SHARED_CANVAS_CLEAR_DRAWABLES',
        drawables: e,
        streamerId: t
    });
}
function m(e) {
    o.Z.dispatch({
        type: 'SHARED_CANVAS_SET_DRAW_MODE',
        drawMode: e
    });
}
function g() {
    o.Z.dispatch({ type: 'TOGGLE_OVERLAY_CANVAS' });
}

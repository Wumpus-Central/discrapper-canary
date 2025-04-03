n.d(t, {
    AX: () => u,
    BR: () => d,
    Bo: () => E,
    Df: () => f,
    LT: () => h,
    ZZ: () => m,
    cV: () => c,
    fW: () => g,
    gr: () => p,
    oW: () => s
});
var r = n(261470),
    l = n(544891),
    i = n(570140),
    a = n(984063),
    o = n(981631);
function s(e, t, n, r, l) {
    i.Z.dispatch({
        type: 'SHARED_CANVAS_DRAW_LINE_POINT',
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: r,
        point: l
    });
}
function u(e, t, n, r) {
    return l.tn.post({
        url: o.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: r
        },
        rejectWithError: !1
    });
}
function c(e, t, n, r) {
    i.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_LINE_POINTS',
        userId: t,
        lineId: e,
        newPoints: r,
        streamerId: n
    });
}
function d(e, t, n) {
    return l.tn.post({
        url: o.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: { emoji_hose: n },
        rejectWithError: !1
    });
}
function f(e, t, n) {
    l.tn.del({
        url: o.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new r.Z(),
        rejectWithError: !0
    });
}
function m(e, t) {
    (t.state = a.f.STOP),
        i.Z.dispatch({
            type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
            emojiHose: t,
            userId: t.userId,
            streamerId: e
        });
}
function p(e, t, n) {
    i.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: e,
        userId: t,
        streamerId: n
    });
}
function g(e, t) {
    i.Z.dispatch({
        type: 'SHARED_CANVAS_CLEAR_DRAWABLES',
        drawables: e,
        streamerId: t
    });
}
function E(e) {
    i.Z.dispatch({
        type: 'SHARED_CANVAS_SET_DRAW_MODE',
        drawMode: e
    });
}
function h() {
    i.Z.dispatch({ type: 'TOGGLE_OVERLAY_CANVAS' });
}

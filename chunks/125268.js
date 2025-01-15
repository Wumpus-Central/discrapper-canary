n.d(t, {
    AX: function () {
        return c;
    },
    BR: function () {
        return d;
    },
    Bo: function () {
        return g;
    },
    Df: function () {
        return m;
    },
    LT: function () {
        return v;
    },
    ZZ: function () {
        return f;
    },
    cV: function () {
        return u;
    },
    fW: function () {
        return h;
    },
    gr: function () {
        return p;
    },
    oW: function () {
        return o;
    }
});
var i = n(261470),
    l = n(544891),
    a = n(570140),
    r = n(984063),
    s = n(981631);
function o(e, t, n, i, l) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_DRAW_LINE_POINT',
        channelId: e,
        userId: n,
        lineId: t,
        streamerId: i,
        point: l
    });
}
function c(e, t, n, i) {
    return l.tn.post({
        url: s.ANM.SHARED_CANVAS_LINES(e, n),
        body: {
            line_id: t,
            points: i
        },
        rejectWithError: !1
    });
}
function u(e, t, n, i) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_LINE_POINTS',
        userId: t,
        lineId: e,
        newPoints: i,
        streamerId: n
    });
}
function d(e, t, n) {
    return l.tn.post({
        url: s.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
        body: { emoji_hose: n },
        rejectWithError: !1
    });
}
function m(e, t, n) {
    l.tn.del({
        url: s.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
        backoff: new i.Z(),
        rejectWithError: !0
    });
}
function f(e, t) {
    (t.state = r.f.STOP),
        a.Z.dispatch({
            type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
            emojiHose: t,
            userId: t.userId,
            streamerId: e
        });
}
function p(e, t, n) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_UPDATE_EMOJI_HOSE',
        emojiHose: e,
        userId: t,
        streamerId: n
    });
}
function h(e, t) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_CLEAR_DRAWABLES',
        drawables: e,
        streamerId: t
    });
}
function g(e) {
    a.Z.dispatch({
        type: 'SHARED_CANVAS_SET_DRAW_MODE',
        drawMode: e
    });
}
function v() {
    a.Z.dispatch({ type: 'TOGGLE_OVERLAY_CANVAS' });
}

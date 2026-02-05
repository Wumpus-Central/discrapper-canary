"use strict";
n.r(t),
    n.d(t, {
        assign: () => p,
        batchedUpdates: () => _,
        colorNames: () => u,
        createStringInterpolator: () => r,
        frameLoop: () => o,
        now: () => l,
        requestAnimationFrame: () => d,
        skipAnimation: () => c,
        to: () => i,
        willAdvance: () => f,
    });
var r,
    i,
    a = n(360276),
    s = n(233710),
    o = new a.c(),
    l = function () {
        return performance.now();
    },
    u = null,
    c = !1,
    d =
        "u" > typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    _ = function (e) {
        return e();
    },
    f = s.lQ,
    p = function (e) {
        var t;
        return (
            (i = (t = Object.assign(
                {
                    to: i,
                    now: l,
                    frameLoop: o,
                    colorNames: u,
                    skipAnimation: c,
                    createStringInterpolator: r,
                    requestAnimationFrame: d,
                    batchedUpdates: _,
                    willAdvance: f,
                },
                h(e),
            )).to),
            (l = t.now),
            (o = t.frameLoop),
            (u = t.colorNames),
            (c = t.skipAnimation),
            (r = t.createStringInterpolator),
            (d = t.requestAnimationFrame),
            (_ = t.batchedUpdates),
            (f = t.willAdvance),
            t
        );
    };
function h(e) {
    var t = {};
    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
    return t;
}

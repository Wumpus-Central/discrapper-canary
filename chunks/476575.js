"use strict";
n.r(t),
    n.d(t, {
        assign: () => E,
        batchedUpdates: () => _,
        colorNames: () => u,
        createStringInterpolator: () => r,
        frameLoop: () => o,
        now: () => l,
        requestAnimationFrame: () => c,
        skipAnimation: () => d,
        to: () => i,
        willAdvance: () => f,
    });
var r,
    i,
    s = n(360276),
    a = n(233710),
    o = new s.c(),
    l = function () {
        return performance.now();
    },
    u = null,
    d = !1,
    c =
        "u" > typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    _ = function (e) {
        return e();
    },
    f = a.lQ,
    E = function (e) {
        var t;
        return (
            (i = (t = Object.assign(
                {
                    to: i,
                    now: l,
                    frameLoop: o,
                    colorNames: u,
                    skipAnimation: d,
                    createStringInterpolator: r,
                    requestAnimationFrame: c,
                    batchedUpdates: _,
                    willAdvance: f,
                },
                (function (e) {
                    var t = {};
                    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                    return t;
                })(e),
            )).to),
            (l = t.now),
            (o = t.frameLoop),
            (u = t.colorNames),
            (d = t.skipAnimation),
            (r = t.createStringInterpolator),
            (c = t.requestAnimationFrame),
            (_ = t.batchedUpdates),
            (f = t.willAdvance),
            t
        );
    };

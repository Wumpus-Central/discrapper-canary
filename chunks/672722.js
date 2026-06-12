"use strict";
n.r(t),
    n.d(t, {
        assign: () => f,
        batchedUpdates: () => _,
        colorNames: () => u,
        createStringInterpolator: () => i,
        frameLoop: () => o,
        now: () => l,
        requestAnimationFrame: () => d,
        skipAnimation: () => c,
        to: () => r,
        willAdvance: () => h,
    });
var i,
    r,
    s = n(572377),
    a = n(132803),
    o = new s.c(),
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
    h = a.lQ,
    f = function (e) {
        var t;
        return (
            (r = (t = Object.assign(
                {
                    to: r,
                    now: l,
                    frameLoop: o,
                    colorNames: u,
                    skipAnimation: c,
                    createStringInterpolator: i,
                    requestAnimationFrame: d,
                    batchedUpdates: _,
                    willAdvance: h,
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
            (c = t.skipAnimation),
            (i = t.createStringInterpolator),
            (d = t.requestAnimationFrame),
            (_ = t.batchedUpdates),
            (h = t.willAdvance),
            t
        );
    };

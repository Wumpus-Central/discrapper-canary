"use strict";
r.r(t),
    r.d(t, {
        assign: () => h,
        batchedUpdates: () => f,
        colorNames: () => c,
        createStringInterpolator: () => n,
        frameLoop: () => i,
        now: () => u,
        requestAnimationFrame: () => d,
        skipAnimation: () => l,
        to: () => s,
        willAdvance: () => p,
    });
var n,
    s,
    a = r(572377),
    o = r(132803),
    i = new a.c(),
    u = function () {
        return performance.now();
    },
    c = null,
    l = !1,
    d =
        "u" > typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    f = function (e) {
        return e();
    },
    p = o.lQ,
    h = function (e) {
        var t;
        return (
            (s = (t = Object.assign(
                {
                    to: s,
                    now: u,
                    frameLoop: i,
                    colorNames: c,
                    skipAnimation: l,
                    createStringInterpolator: n,
                    requestAnimationFrame: d,
                    batchedUpdates: f,
                    willAdvance: p,
                },
                (function (e) {
                    var t = {};
                    for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
                    return t;
                })(e),
            )).to),
            (u = t.now),
            (i = t.frameLoop),
            (c = t.colorNames),
            (l = t.skipAnimation),
            (n = t.createStringInterpolator),
            (d = t.requestAnimationFrame),
            (f = t.batchedUpdates),
            (p = t.willAdvance),
            t
        );
    };

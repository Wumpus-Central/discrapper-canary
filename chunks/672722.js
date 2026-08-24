"use strict";
r.r(t),
    r.d(t, {
        assign: () => h,
        batchedUpdates: () => d,
        colorNames: () => u,
        createStringInterpolator: () => n,
        frameLoop: () => s,
        now: () => l,
        requestAnimationFrame: () => f,
        skipAnimation: () => c,
        to: () => i,
        willAdvance: () => p,
    });
var n,
    i,
    o = r(572377),
    a = r(132803),
    s = new o.c(),
    l = function () {
        return performance.now();
    },
    u = null,
    c = !1,
    f =
        "u" > typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    d = function (e) {
        return e();
    },
    p = a.lQ,
    h = function (e) {
        var t;
        return (
            (i = (t = Object.assign(
                {
                    to: i,
                    now: l,
                    frameLoop: s,
                    colorNames: u,
                    skipAnimation: c,
                    createStringInterpolator: n,
                    requestAnimationFrame: f,
                    batchedUpdates: d,
                    willAdvance: p,
                },
                (function (e) {
                    var t = {};
                    for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
                    return t;
                })(e),
            )).to),
            (l = t.now),
            (s = t.frameLoop),
            (u = t.colorNames),
            (c = t.skipAnimation),
            (n = t.createStringInterpolator),
            (f = t.requestAnimationFrame),
            (d = t.batchedUpdates),
            (p = t.willAdvance),
            t
        );
    };

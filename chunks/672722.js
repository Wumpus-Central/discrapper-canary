"use strict";
r.r(t),
    r.d(t, {
        assign: () => h,
        batchedUpdates: () => p,
        colorNames: () => u,
        createStringInterpolator: () => n,
        frameLoop: () => s,
        now: () => l,
        requestAnimationFrame: () => f,
        skipAnimation: () => c,
        to: () => o,
        willAdvance: () => d,
    });
var n,
    o,
    i = r(572377),
    a = r(132803),
    s = new i.c(),
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
    p = function (e) {
        return e();
    },
    d = a.lQ,
    h = function (e) {
        var t;
        return (
            (o = (t = Object.assign(
                {
                    to: o,
                    now: l,
                    frameLoop: s,
                    colorNames: u,
                    skipAnimation: c,
                    createStringInterpolator: n,
                    requestAnimationFrame: f,
                    batchedUpdates: p,
                    willAdvance: d,
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
            (p = t.batchedUpdates),
            (d = t.willAdvance),
            t
        );
    };

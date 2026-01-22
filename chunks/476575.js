n.r(t),
    n.d(t, {
        assign: () => _,
        batchedUpdates: () => f,
        colorNames: () => c,
        createStringInterpolator: () => r,
        frameLoop: () => o,
        now: () => l,
        requestAnimationFrame: () => d,
        skipAnimation: () => u,
        to: () => i,
        willAdvance: () => p,
    });
var r,
    i,
    a = n(360276),
    s = n(233710),
    o = new a.c(),
    l = function () {
        return performance.now();
    },
    c = null,
    u = !1,
    d =
        "u" > typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    f = function (e) {
        return e();
    },
    p = s.lQ,
    _ = function (e) {
        var t;
        return (
            (i = (t = Object.assign(
                {
                    to: i,
                    now: l,
                    frameLoop: o,
                    colorNames: c,
                    skipAnimation: u,
                    createStringInterpolator: r,
                    requestAnimationFrame: d,
                    batchedUpdates: f,
                    willAdvance: p,
                },
                h(e),
            )).to),
            (l = t.now),
            (o = t.frameLoop),
            (c = t.colorNames),
            (u = t.skipAnimation),
            (r = t.createStringInterpolator),
            (d = t.requestAnimationFrame),
            (f = t.batchedUpdates),
            (p = t.willAdvance),
            t
        );
    };
function h(e) {
    var t = {};
    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
    return t;
}

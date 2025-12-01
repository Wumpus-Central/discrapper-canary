n.r(t),
    n.d(t, {
        assign: () => _,
        batchedUpdates: () => f,
        colorNames: () => c,
        createStringInterpolator: () => r,
        frameLoop: () => s,
        now: () => l,
        requestAnimationFrame: () => d,
        skipAnimation: () => u,
        to: () => i,
        willAdvance: () => p,
    });
var r,
    i,
    a = n(19784),
    o = n(217348),
    s = new a.V(),
    l = function () {
        return performance.now();
    },
    c = null,
    u = !1,
    d =
        "undefined" != typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    f = function (e) {
        return e();
    },
    p = o.ZT,
    _ = function (e) {
        var t;
        return (
            (i = (t = Object.assign(
                {
                    to: i,
                    now: l,
                    frameLoop: s,
                    colorNames: c,
                    skipAnimation: u,
                    createStringInterpolator: r,
                    requestAnimationFrame: d,
                    batchedUpdates: f,
                    willAdvance: p,
                },
                m(e),
            )).to),
            (l = t.now),
            (s = t.frameLoop),
            (c = t.colorNames),
            (u = t.skipAnimation),
            (r = t.createStringInterpolator),
            (d = t.requestAnimationFrame),
            (f = t.batchedUpdates),
            (p = t.willAdvance),
            t
        );
    };
function m(e) {
    var t = {};
    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
    return t;
}

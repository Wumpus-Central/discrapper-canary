n.r(t),
    n.d(t, {
        assign: () => p,
        batchedUpdates: () => f,
        colorNames: () => u,
        createStringInterpolator: () => i,
        frameLoop: () => o,
        now: () => l,
        requestAnimationFrame: () => d,
        skipAnimation: () => c,
        to: () => r,
        willAdvance: () => _
    });
var i,
    r,
    a = n(19784),
    s = n(217348),
    o = new a.V(),
    l = function () {
        return performance.now();
    },
    u = null,
    c = !1,
    d =
        'undefined' != typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    f = function (e) {
        return e();
    },
    _ = s.ZT,
    p = function (e) {
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
                    batchedUpdates: f,
                    willAdvance: _
                },
                h(e)
            )).to),
            (l = t.now),
            (o = t.frameLoop),
            (u = t.colorNames),
            (c = t.skipAnimation),
            (i = t.createStringInterpolator),
            (d = t.requestAnimationFrame),
            (f = t.batchedUpdates),
            (_ = t.willAdvance),
            t
        );
    };
function h(e) {
    var t = {};
    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
    return t;
}

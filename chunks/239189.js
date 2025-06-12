n.r(t),
    n.d(t, {
        assign: () => p,
        batchedUpdates: () => _,
        colorNames: () => c,
        createStringInterpolator: () => r,
        frameLoop: () => s,
        now: () => l,
        requestAnimationFrame: () => d,
        skipAnimation: () => u,
        to: () => i,
        willAdvance: () => f
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
        'undefined' != typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    _ = function (e) {
        return e();
    },
    f = o.ZT,
    p = function (e) {
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
                    batchedUpdates: _,
                    willAdvance: f
                },
                h(e)
            )).to),
            (l = t.now),
            (s = t.frameLoop),
            (c = t.colorNames),
            (u = t.skipAnimation),
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

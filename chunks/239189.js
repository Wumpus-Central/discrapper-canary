n.r(t),
    n.d(t, {
        assign: () => p,
        batchedUpdates: () => f,
        colorNames: () => c,
        createStringInterpolator: () => r,
        frameLoop: () => s,
        now: () => l,
        requestAnimationFrame: () => d,
        skipAnimation: () => u,
        to: () => i,
        willAdvance: () => _
    });
var r,
    i,
    o = n(19784),
    a = n(217348),
    s = new o.V(),
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
    f = function (e) {
        return e();
    },
    _ = a.ZT,
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
                    batchedUpdates: f,
                    willAdvance: _
                },
                h(e)
            )).to),
            (l = t.now),
            (s = t.frameLoop),
            (c = t.colorNames),
            (u = t.skipAnimation),
            (r = t.createStringInterpolator),
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

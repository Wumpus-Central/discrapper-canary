r.r(n),
    r.d(n, {
        assign: function () {
            return _;
        },
        batchedUpdates: function () {
            return p;
        },
        colorNames: function () {
            return c;
        },
        createStringInterpolator: function () {
            return i;
        },
        frameLoop: function () {
            return l;
        },
        now: function () {
            return u;
        },
        requestAnimationFrame: function () {
            return f;
        },
        skipAnimation: function () {
            return d;
        },
        to: function () {
            return a;
        },
        willAdvance: function () {
            return h;
        }
    });
var i,
    a,
    o = r(19784),
    s = r(217348),
    l = new o.V(),
    u = function () {
        return performance.now();
    },
    c = null,
    d = !1,
    f =
        'undefined' != typeof window
            ? window.requestAnimationFrame
            : function () {
                  return -1;
              },
    p = function (e) {
        return e();
    },
    h = s.ZT,
    _ = function (e) {
        var n;
        return (
            (a = (n = Object.assign(
                {
                    to: a,
                    now: u,
                    frameLoop: l,
                    colorNames: c,
                    skipAnimation: d,
                    createStringInterpolator: i,
                    requestAnimationFrame: f,
                    batchedUpdates: p,
                    willAdvance: h
                },
                m(e)
            )).to),
            (u = n.now),
            (l = n.frameLoop),
            (c = n.colorNames),
            (d = n.skipAnimation),
            (i = n.createStringInterpolator),
            (f = n.requestAnimationFrame),
            (p = n.batchedUpdates),
            (h = n.willAdvance),
            n
        );
    };
function m(e) {
    var n = {};
    for (var r in e) void 0 !== e[r] && (n[r] = e[r]);
    return n;
}

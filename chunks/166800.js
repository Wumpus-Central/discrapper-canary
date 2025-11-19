_.d(e, { q: () => n });
var a = _(226377),
    r = _(91647);
let n = {
    increment: function (t, e = 1, _) {
        a.q.increment(r.P, t, e, _);
    },
    distribution: function (t, e, _) {
        a.q.distribution(r.P, t, e, _);
    },
    set: function (t, e, _) {
        a.q.set(r.P, t, e, _);
    },
    gauge: function (t, e, _) {
        a.q.gauge(r.P, t, e, _);
    },
    timing: function (t, e, _ = "second", n) {
        return a.q.timing(r.P, t, e, _, n);
    },
};

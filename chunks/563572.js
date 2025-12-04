r.d(t, { q: () => i });
var n = r(331446),
    a = r(821619);
let i = {
    increment: function (e, t = 1, r) {
        n.q.increment(a.P, e, t, r);
    },
    distribution: function (e, t, r) {
        n.q.distribution(a.P, e, t, r);
    },
    set: function (e, t, r) {
        n.q.set(a.P, e, t, r);
    },
    gauge: function (e, t, r) {
        n.q.gauge(a.P, e, t, r);
    },
    timing: function (e, t, r = "second", i) {
        return n.q.timing(a.P, e, t, r, i);
    },
};

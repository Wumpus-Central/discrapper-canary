a.d(e, { q: () => o });
var r = a(226377),
    n = a(91647);
let o = {
    increment: function (t, e = 1, a) {
        r.q.increment(n.P, t, e, a);
    },
    distribution: function (t, e, a) {
        r.q.distribution(n.P, t, e, a);
    },
    set: function (t, e, a) {
        r.q.set(n.P, t, e, a);
    },
    gauge: function (t, e, a) {
        r.q.gauge(n.P, t, e, a);
    },
    timing: function (t, e, a = 'second', o) {
        return r.q.timing(n.P, t, e, a, o);
    }
};

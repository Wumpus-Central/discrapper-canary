"use strict";
n.d(t, { V: () => s });
var r = n(551253),
    i = n(297130),
    a = n(222367);
function s(e, t, n, s, o, l) {
    var u = {},
        c = e.accept;
    function d(e, t) {
        n.forEach(function (n) {
            n.between(e, t, !0).forEach(function (e) {
                u[Number(e)] = !0;
            });
        });
    }
    o.forEach(function (e) {
        u[Number(new r.x(e, l).rezonedDate())] = !0;
    }),
        (e.accept = function (e) {
            var t = Number(e);
            return isNaN(t)
                ? c.call(this, e)
                : !!u[t] || (d(new Date(t - 1), new Date(t + 1)), !!u[t]) || ((u[t] = !0), c.call(this, e));
        }),
        "between" === e.method &&
            (d(e.args.after, e.args.before),
            (e.accept = function (e) {
                var t = Number(e);
                return !!u[t] || ((u[t] = !0), c.call(this, e));
            }));
    for (var _ = 0; _ < s.length; _++) {
        var f = new r.x(s[_], l).rezonedDate();
        if (!e.accept(new Date(f.getTime()))) break;
    }
    t.forEach(function (t) {
        (0, i.t)(e, t.options);
    });
    var p = e._result;
    switch (((0, a.di)(p), e.method)) {
        case "all":
        case "between":
            return p;
        case "before":
            return (p.length && p[p.length - 1]) || null;
        default:
            return (p.length && p[0]) || null;
    }
}

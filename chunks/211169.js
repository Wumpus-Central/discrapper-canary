n.d(t, { V: () => s });
var r = n(551253),
    i = n(297130),
    a = n(222367);
function s(e, t, n, s, o, l) {
    var c = {},
        u = e.accept;
    function d(e, t) {
        n.forEach(function (n) {
            n.between(e, t, !0).forEach(function (e) {
                c[Number(e)] = !0;
            });
        });
    }
    o.forEach(function (e) {
        c[Number(new r.x(e, l).rezonedDate())] = !0;
    }),
        (e.accept = function (e) {
            var t = Number(e);
            return isNaN(t)
                ? u.call(this, e)
                : !!c[t] || (d(new Date(t - 1), new Date(t + 1)), !!c[t]) || ((c[t] = !0), u.call(this, e));
        }),
        "between" === e.method &&
            (d(e.args.after, e.args.before),
            (e.accept = function (e) {
                var t = Number(e);
                return !!c[t] || ((c[t] = !0), u.call(this, e));
            }));
    for (var f = 0; f < s.length; f++) {
        var p = new r.x(s[f], l).rezonedDate();
        if (!e.accept(new Date(p.getTime()))) break;
    }
    t.forEach(function (t) {
        (0, i.t)(e, t.options);
    });
    var _ = e._result;
    switch (((0, a.di)(_), e.method)) {
        case "all":
        case "between":
            return _;
        case "before":
            return (_.length && _[_.length - 1]) || null;
        default:
            return (_.length && _[0]) || null;
    }
}

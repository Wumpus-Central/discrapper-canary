"use strict";
n.d(t, { F: () => l });
var r = n(90727),
    i = n(391898),
    a = n(734481),
    s = n(222367),
    o = n(551253);
function l(e) {
    for (var t = [], n = "", o = Object.keys(e), l = Object.keys(r.lp), c = 0; c < o.length; c++)
        if ("tzid" !== o[c] && (0, i.mK)(l, o[c])) {
            var d = o[c].toUpperCase(),
                _ = e[o[c]],
                f = "";
            if (!(!(0, i.Wo)(_) || ((0, i.cy)(_) && !_.length))) {
                switch (d) {
                    case "FREQ":
                        f = r.p3.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        f = (0, i.Et)(_) ? new a.B(_).toString() : _.toString();
                        break;
                    case "BYWEEKDAY":
                        (d = "BYDAY"),
                            (f = (0, i.$r)(_)
                                .map(function (e) {
                                    return e instanceof a.B ? e : (0, i.cy)(e) ? new a.B(e[0], e[1]) : new a.B(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        n = u(_, e.tzid);
                        break;
                    case "UNTIL":
                        f = (0, s.w)(_, !e.tzid);
                        break;
                    default:
                        if ((0, i.cy)(_)) {
                            for (var p = [], h = 0; h < _.length; h++) p[h] = String(_[h]);
                            f = p.toString();
                        } else f = String(_);
                }
                f && t.push([d, f]);
            }
        }
    var m = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return "".concat(t, "=").concat(n.toString());
            })
            .join(";"),
        g = "";
    return (
        "" !== m && (g = "RRULE:".concat(m)),
        [n, g]
            .filter(function (e) {
                return !!e;
            })
            .join("\n")
    );
}
function u(e, t) {
    return e ? "DTSTART" + new o.x(new Date(e), t).toString() : "";
}

"use strict";
n.d(t, { F: () => l });
var r = n(90727),
    i = n(391898),
    s = n(734481),
    a = n(222367),
    o = n(551253);
function l(e) {
    for (var t = [], n = "", l = Object.keys(e), u = Object.keys(r.lp), c = 0; c < l.length; c++)
        if ("tzid" !== l[c] && (0, i.mK)(u, l[c])) {
            var d,
                _,
                f = l[c].toUpperCase(),
                p = e[l[c]],
                h = "";
            if (!(!(0, i.Wo)(p) || ((0, i.cy)(p) && !p.length))) {
                switch (f) {
                    case "FREQ":
                        h = r.p3.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        h = (0, i.Et)(p) ? new s.B(p).toString() : p.toString();
                        break;
                    case "BYWEEKDAY":
                        (f = "BYDAY"),
                            (h = (0, i.$r)(p)
                                .map(function (e) {
                                    return e instanceof s.B ? e : (0, i.cy)(e) ? new s.B(e[0], e[1]) : new s.B(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        (d = p), (_ = e.tzid), (n = d ? "DTSTART" + new o.x(new Date(d), _).toString() : "");
                        break;
                    case "UNTIL":
                        h = (0, a.w)(p, !e.tzid);
                        break;
                    default:
                        if ((0, i.cy)(p)) {
                            for (var E = [], m = 0; m < p.length; m++) E[m] = String(p[m]);
                            h = E.toString();
                        } else h = String(p);
                }
                h && t.push([f, h]);
            }
        }
    var g = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return "".concat(t, "=").concat(n.toString());
            })
            .join(";"),
        A = "";
    return (
        "" !== g && (A = "RRULE:".concat(g)),
        [n, A]
            .filter(function (e) {
                return !!e;
            })
            .join("\n")
    );
}

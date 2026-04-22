"use strict";
n.d(t, { F: () => l });
var r = n(90727),
    i = n(391898),
    s = n(734481),
    a = n(222367),
    o = n(551253);
function l(e) {
    for (var t = [], n = "", l = Object.keys(e), u = Object.keys(r.lp), d = 0; d < l.length; d++)
        if ("tzid" !== l[d] && (0, i.mK)(u, l[d])) {
            var c,
                _,
                f = l[d].toUpperCase(),
                E = e[l[d]],
                h = "";
            if (!(!(0, i.Wo)(E) || ((0, i.cy)(E) && !E.length))) {
                switch (f) {
                    case "FREQ":
                        h = r.p3.FREQUENCIES[e.freq];
                        break;
                    case "WKST":
                        h = (0, i.Et)(E) ? new s.B(E).toString() : E.toString();
                        break;
                    case "BYWEEKDAY":
                        (f = "BYDAY"),
                            (h = (0, i.$r)(E)
                                .map(function (e) {
                                    return e instanceof s.B ? e : (0, i.cy)(e) ? new s.B(e[0], e[1]) : new s.B(e);
                                })
                                .toString());
                        break;
                    case "DTSTART":
                        (c = E), (_ = e.tzid), (n = c ? "DTSTART" + new o.x(new Date(c), _).toString() : "");
                        break;
                    case "UNTIL":
                        h = (0, a.w)(E, !e.tzid);
                        break;
                    default:
                        if ((0, i.cy)(E)) {
                            for (var p = [], m = 0; m < E.length; m++) p[m] = String(E[m]);
                            h = p.toString();
                        } else h = String(E);
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

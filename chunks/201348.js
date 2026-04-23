"use strict";
n.d(t, { Y: () => c });
var r = n(56636),
    i = n(90727),
    s = n(480367),
    a = n(222367),
    o = n(391898),
    l = n(528813),
    u = { dtstart: null, cache: !1, unfold: !1, forceset: !1, compatible: !1, tzid: null };
function c(e, t) {
    return (
        void 0 === t && (t = {}),
        (function (e, t) {
            var n,
                r,
                a,
                u,
                c,
                f,
                p,
                h =
                    ((n = []),
                    (r = []),
                    (a = []),
                    (u = []),
                    (f = (c = (0, l.m)(e)).dtstart),
                    (p = c.tzid),
                    (function (e, t) {
                        if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error("Invalid empty string");
                        if (!t) return e.split(/\s/);
                        for (var n = e.split("\n"), r = 0; r < n.length; ) {
                            var i = (n[r] = n[r].replace(/\s+$/g, ""));
                            i
                                ? r > 0 && " " === i[0]
                                    ? ((n[r - 1] += i.slice(1)), n.splice(r, 1))
                                    : (r += 1)
                                : n.splice(r, 1);
                        }
                        return n;
                    })(e, t.unfold).forEach(function (e) {
                        if (e) {
                            var t,
                                i = (function (e) {
                                    var t = (function (e) {
                                            if (-1 === e.indexOf(":")) return { name: "RRULE", value: e };
                                            var t = (0, o.lD)(e, ":", 1);
                                            return { name: t[0], value: t[1] };
                                        })(e),
                                        n = t.name,
                                        r = t.value,
                                        i = n.split(";");
                                    if (!i) throw Error("empty property name");
                                    return { name: i[0].toUpperCase(), parms: i.slice(1), value: r };
                                })(e),
                                s = i.name,
                                c = i.parms,
                                d = i.value;
                            switch (s.toUpperCase()) {
                                case "RRULE":
                                    if (c.length) throw Error("unsupported RRULE parm: ".concat(c.join(",")));
                                    n.push((0, l.$)(e));
                                    break;
                                case "RDATE":
                                    var f = (null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [])[1];
                                    f && !p && (p = f), (r = r.concat(_(d, c)));
                                    break;
                                case "EXRULE":
                                    if (c.length) throw Error("unsupported EXRULE parm: ".concat(c.join(",")));
                                    a.push((0, l.$)(d));
                                    break;
                                case "EXDATE":
                                    u = u.concat(_(d, c));
                                    break;
                                case "DTSTART":
                                    break;
                                default:
                                    throw Error("unsupported property: " + s);
                            }
                        }
                    }),
                    { dtstart: f, tzid: p, rrulevals: n, rdatevals: r, exrulevals: a, exdatevals: u }),
                E = h.rrulevals,
                m = h.rdatevals,
                g = h.exrulevals,
                A = h.exdatevals,
                I = h.dtstart,
                T = h.tzid,
                S = !1 === t.cache;
            if (
                (t.compatible && ((t.forceset = !0), (t.unfold = !0)),
                t.forceset || E.length > 1 || m.length || g.length || A.length)
            ) {
                var y = new s.D(S);
                return (
                    y.dtstart(I),
                    y.tzid(T || void 0),
                    E.forEach(function (e) {
                        y.rrule(new i.p3(d(e, I, T), S));
                    }),
                    m.forEach(function (e) {
                        y.rdate(e);
                    }),
                    g.forEach(function (e) {
                        y.exrule(new i.p3(d(e, I, T), S));
                    }),
                    A.forEach(function (e) {
                        y.exdate(e);
                    }),
                    t.compatible && t.dtstart && y.rdate(I),
                    y
                );
            }
            var N = E[0] || {};
            return new i.p3(d(N, N.dtstart || t.dtstart || I, N.tzid || t.tzid || T), S);
        })(
            e,
            (function (e) {
                var t = [],
                    n = Object.keys(e),
                    i = Object.keys(u);
                if (
                    (n.forEach(function (e) {
                        (0, o.mK)(i, e) || t.push(e);
                    }),
                    t.length)
                )
                    throw Error("Invalid options: " + t.join(", "));
                return (0, r.Cl)((0, r.Cl)({}, u), e);
            })(t),
        )
    );
}
function d(e, t, n) {
    return (0, r.Cl)((0, r.Cl)({}, e), { dtstart: t, tzid: n });
}
function _(e, t) {
    return (
        t.forEach(function (e) {
            if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
        }),
        e.split(",").map(function (e) {
            return (0, a.lP)(e);
        })
    );
}

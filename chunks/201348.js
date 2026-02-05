"use strict";
n.d(t, { Y: () => _ });
var r = n(56636),
    i = n(90727),
    a = n(480367),
    s = n(222367),
    o = n(391898),
    l = n(528813),
    u = { dtstart: null, cache: !1, unfold: !1, forceset: !1, compatible: !1, tzid: null };
function c(e, t) {
    var n = [],
        r = [],
        i = [],
        a = [],
        s = (0, l.m)(e),
        o = s.dtstart,
        u = s.tzid;
    return (
        g(e, t.unfold).forEach(function (e) {
            if (e) {
                var t,
                    s = m(e),
                    o = s.name,
                    c = s.parms,
                    d = s.value;
                switch (o.toUpperCase()) {
                    case "RRULE":
                        if (c.length) throw Error("unsupported RRULE parm: ".concat(c.join(",")));
                        n.push((0, l.$)(e));
                        break;
                    case "RDATE":
                        var _ = null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [],
                            f = _[1];
                        f && !u && (u = f), (r = r.concat(A(d, c)));
                        break;
                    case "EXRULE":
                        if (c.length) throw Error("unsupported EXRULE parm: ".concat(c.join(",")));
                        i.push((0, l.$)(d));
                        break;
                    case "EXDATE":
                        a = a.concat(A(d, c));
                        break;
                    case "DTSTART":
                        break;
                    default:
                        throw Error("unsupported property: " + o);
                }
            }
        }),
        { dtstart: o, tzid: u, rrulevals: n, rdatevals: r, exrulevals: i, exdatevals: a }
    );
}
function d(e, t) {
    var n = c(e, t),
        r = n.rrulevals,
        s = n.rdatevals,
        o = n.exrulevals,
        l = n.exdatevals,
        u = n.dtstart,
        d = n.tzid,
        _ = !1 === t.cache;
    if (
        (t.compatible && ((t.forceset = !0), (t.unfold = !0)),
        t.forceset || r.length > 1 || s.length || o.length || l.length)
    ) {
        var p = new a.D(_);
        return (
            p.dtstart(u),
            p.tzid(d || void 0),
            r.forEach(function (e) {
                p.rrule(new i.p3(f(e, u, d), _));
            }),
            s.forEach(function (e) {
                p.rdate(e);
            }),
            o.forEach(function (e) {
                p.exrule(new i.p3(f(e, u, d), _));
            }),
            l.forEach(function (e) {
                p.exdate(e);
            }),
            t.compatible && t.dtstart && p.rdate(u),
            p
        );
    }
    var h = r[0] || {};
    return new i.p3(f(h, h.dtstart || t.dtstart || u, h.tzid || t.tzid || d), _);
}
function _(e, t) {
    return void 0 === t && (t = {}), d(e, p(t));
}
function f(e, t, n) {
    return (0, r.Cl)((0, r.Cl)({}, e), { dtstart: t, tzid: n });
}
function p(e) {
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
}
function h(e) {
    if (-1 === e.indexOf(":")) return { name: "RRULE", value: e };
    var t = (0, o.lD)(e, ":", 1);
    return { name: t[0], value: t[1] };
}
function m(e) {
    var t = h(e),
        n = t.name,
        r = t.value,
        i = n.split(";");
    if (!i) throw Error("empty property name");
    return { name: i[0].toUpperCase(), parms: i.slice(1), value: r };
}
function g(e, t) {
    if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error("Invalid empty string");
    if (!t) return e.split(/\s/);
    for (var n = e.split("\n"), r = 0; r < n.length; ) {
        var i = (n[r] = n[r].replace(/\s+$/g, ""));
        i ? (r > 0 && " " === i[0] ? ((n[r - 1] += i.slice(1)), n.splice(r, 1)) : (r += 1)) : n.splice(r, 1);
    }
    return n;
}
function E(e) {
    e.forEach(function (e) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
    });
}
function A(e, t) {
    return (
        E(t),
        e.split(",").map(function (e) {
            return (0, s.lP)(e);
        })
    );
}

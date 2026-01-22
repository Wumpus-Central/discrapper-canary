n.d(t, { Y: () => f });
var r = n(56636),
    i = n(90727),
    a = n(480367),
    s = n(222367),
    o = n(391898),
    l = n(528813),
    c = {
        dtstart: null,
        cache: !1,
        unfold: !1,
        forceset: !1,
        compatible: !1,
        tzid: null,
    };
function u(e, t) {
    var n = [],
        r = [],
        i = [],
        a = [],
        s = (0, l.m)(e),
        o = s.dtstart,
        c = s.tzid;
    return (
        g(e, t.unfold).forEach(function (e) {
            if (e) {
                var t,
                    s = m(e),
                    o = s.name,
                    u = s.parms,
                    d = s.value;
                switch (o.toUpperCase()) {
                    case "RRULE":
                        if (u.length) throw Error("unsupported RRULE parm: ".concat(u.join(",")));
                        n.push((0, l.$)(e));
                        break;
                    case "RDATE":
                        var f = null != (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) ? t : [],
                            p = f[1];
                        p && !c && (c = p), (r = r.concat(b(d, u)));
                        break;
                    case "EXRULE":
                        if (u.length) throw Error("unsupported EXRULE parm: ".concat(u.join(",")));
                        i.push((0, l.$)(d));
                        break;
                    case "EXDATE":
                        a = a.concat(b(d, u));
                        break;
                    case "DTSTART":
                        break;
                    default:
                        throw Error("unsupported property: " + o);
                }
            }
        }),
        {
            dtstart: o,
            tzid: c,
            rrulevals: n,
            rdatevals: r,
            exrulevals: i,
            exdatevals: a,
        }
    );
}
function d(e, t) {
    var n = u(e, t),
        r = n.rrulevals,
        s = n.rdatevals,
        o = n.exrulevals,
        l = n.exdatevals,
        c = n.dtstart,
        d = n.tzid,
        f = !1 === t.cache;
    if (
        (t.compatible && ((t.forceset = !0), (t.unfold = !0)),
        t.forceset || r.length > 1 || s.length || o.length || l.length)
    ) {
        var _ = new a.D(f);
        return (
            _.dtstart(c),
            _.tzid(d || void 0),
            r.forEach(function (e) {
                _.rrule(new i.p3(p(e, c, d), f));
            }),
            s.forEach(function (e) {
                _.rdate(e);
            }),
            o.forEach(function (e) {
                _.exrule(new i.p3(p(e, c, d), f));
            }),
            l.forEach(function (e) {
                _.exdate(e);
            }),
            t.compatible && t.dtstart && _.rdate(c),
            _
        );
    }
    var h = r[0] || {};
    return new i.p3(p(h, h.dtstart || t.dtstart || c, h.tzid || t.tzid || d), f);
}
function f(e, t) {
    return void 0 === t && (t = {}), d(e, _(t));
}
function p(e, t, n) {
    return (0, r.Cl)((0, r.Cl)({}, e), {
        dtstart: t,
        tzid: n,
    });
}
function _(e) {
    var t = [],
        n = Object.keys(e),
        i = Object.keys(c);
    if (
        (n.forEach(function (e) {
            (0, o.mK)(i, e) || t.push(e);
        }),
        t.length)
    )
        throw Error("Invalid options: " + t.join(", "));
    return (0, r.Cl)((0, r.Cl)({}, c), e);
}
function h(e) {
    if (-1 === e.indexOf(":"))
        return {
            name: "RRULE",
            value: e,
        };
    var t = (0, o.lD)(e, ":", 1);
    return {
        name: t[0],
        value: t[1],
    };
}
function m(e) {
    var t = h(e),
        n = t.name,
        r = t.value,
        i = n.split(";");
    if (!i) throw Error("empty property name");
    return {
        name: i[0].toUpperCase(),
        parms: i.slice(1),
        value: r,
    };
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
function b(e, t) {
    return (
        E(t),
        e.split(",").map(function (e) {
            return (0, s.lP)(e);
        })
    );
}

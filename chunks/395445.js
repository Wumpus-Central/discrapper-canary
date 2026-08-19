var r = n(271434);
(t.exports = function t(e, n, o) {
    if ((r(n) || ((o = n || o), (n = [])), (o = o || {}), e instanceof RegExp)) {
        var a,
            u,
            c = n,
            p = e.source.match(/\((?!\?)/g);
        if (p)
            for (var f = 0; f < p.length; f++)
                c.push({
                    name: f,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                });
        return (e.keys = c), e;
    }
    if (r(e)) {
        for (var v, h = n, d = o, m = [], y = 0; y < e.length; y++) m.push(t(e[y], h, d).source);
        return ((v = RegExp("(?:" + m.join("|") + ")", s(d))).keys = h), v;
    }
    return (a = n), l(i(e, (u = o)), a, u);
}),
    (t.exports.parse = i),
    (t.exports.compile = function (t, e) {
        return u(i(t, e), e);
    }),
    (t.exports.tokensToFunction = u),
    (t.exports.tokensToRegExp = l);
var o = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function i(t, e) {
    for (var n, r = [], i = 0, a = 0, u = "", s = (e && e.delimiter) || "/"; null != (n = o.exec(t)); ) {
        var l,
            p,
            f = n[0],
            v = n[1],
            h = n.index;
        if (((u += t.slice(a, h)), (a = h + f.length), v)) {
            u += v[1];
            continue;
        }
        var d = t[a],
            m = n[2],
            y = n[3],
            g = n[4],
            x = n[5],
            C = n[6],
            _ = n[7];
        u && (r.push(u), (u = ""));
        var R = null != m && null != d && d !== m,
            b = "+" === C || "*" === C,
            E = "?" === C || "*" === C,
            A = m || s,
            w = g || x,
            k = m || ("string" == typeof r[r.length - 1] ? r[r.length - 1] : "");
        r.push({
            name: y || i++,
            prefix: m || "",
            delimiter: A,
            optional: E,
            repeat: b,
            partial: R,
            asterisk: !!_,
            pattern: w
                ? w.replace(/([=!:$\/()])/g, "\\$1")
                : _
                  ? ".*"
                  : ((l = A),
                    !(p = k) || p.indexOf(l) > -1
                        ? "[^" + c(l) + "]+?"
                        : c(p) + "|(?:(?!" + c(p) + ")[^" + c(l) + "])+?"),
        });
    }
    return a < t.length && (u += t.substr(a)), u && r.push(u), r;
}
function a(t) {
    return encodeURI(t).replace(/[\/?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
}
function u(t, e) {
    for (var n = Array(t.length), o = 0; o < t.length; o++)
        "object" == typeof t[o] && (n[o] = RegExp("^(?:" + t[o].pattern + ")$", s(e)));
    return function (e, o) {
        for (var i = "", u = e || {}, c = (o || {}).pretty ? a : encodeURIComponent, s = 0; s < t.length; s++) {
            var l,
                p = t[s];
            if ("string" == typeof p) {
                i += p;
                continue;
            }
            var f = u[p.name];
            if (null == f)
                if (p.optional) {
                    p.partial && (i += p.prefix);
                    continue;
                } else throw TypeError('Expected "' + p.name + '" to be defined');
            if (r(f)) {
                if (!p.repeat)
                    throw TypeError(
                        'Expected "' + p.name + '" to not repeat, but received `' + JSON.stringify(f) + "`",
                    );
                if (0 === f.length)
                    if (p.optional) continue;
                    else throw TypeError('Expected "' + p.name + '" to not be empty');
                for (var v = 0; v < f.length; v++) {
                    if (((l = c(f[v])), !n[s].test(l)))
                        throw TypeError(
                            'Expected all "' +
                                p.name +
                                '" to match "' +
                                p.pattern +
                                '", but received `' +
                                JSON.stringify(l) +
                                "`",
                        );
                    i += (0 === v ? p.prefix : p.delimiter) + l;
                }
                continue;
            }
            if (
                ((l = p.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (t) {
                          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : c(f)),
                !n[s].test(l))
            )
                throw TypeError('Expected "' + p.name + '" to match "' + p.pattern + '", but received "' + l + '"');
            i += p.prefix + l;
        }
        return i;
    };
}
function c(t) {
    return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function s(t) {
    return t && t.sensitive ? "" : "i";
}
function l(t, e, n) {
    r(e) || ((n = e || n), (e = []));
    for (var o, i = (n = n || {}).strict, a = !1 !== n.end, u = "", l = 0; l < t.length; l++) {
        var p = t[l];
        if ("string" == typeof p) u += c(p);
        else {
            var f = c(p.prefix),
                v = "(?:" + p.pattern + ")";
            e.push(p),
                p.repeat && (v += "(?:" + f + v + ")*"),
                (u += v =
                    p.optional ? (p.partial ? f + "(" + v + ")?" : "(?:" + f + "(" + v + "))?") : f + "(" + v + ")");
        }
    }
    var h = c(n.delimiter || "/"),
        d = u.slice(-h.length) === h;
    return (
        i || (u = (d ? u.slice(0, -h.length) : u) + "(?:" + h + "(?=$))?"),
        a ? (u += "$") : (u += i && d ? "" : "(?=" + h + "|$)"),
        ((o = RegExp("^" + u, s(n))).keys = e),
        o
    );
}

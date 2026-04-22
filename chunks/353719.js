var r = n(271434);
(e.exports = function e(t, n, i) {
    if ((r(n) || ((i = n || i), (n = [])), (i = i || {}), t instanceof RegExp)) {
        var a,
            o,
            l = n,
            c = t.source.match(/\((?!\?)/g);
        if (c)
            for (var _ = 0; _ < c.length; _++)
                l.push({
                    name: _,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                });
        return (t.keys = l), t;
    }
    if (r(t)) {
        for (var f, E = n, h = i, p = [], m = 0; m < t.length; m++) p.push(e(t[m], E, h).source);
        return ((f = RegExp("(?:" + p.join("|") + ")", u(h))).keys = E), f;
    }
    return (a = n), d(s(t, (o = i)), a, o);
}),
    (e.exports.parse = s),
    (e.exports.compile = function (e, t) {
        return o(s(e, t));
    }),
    (e.exports.tokensToFunction = o),
    (e.exports.tokensToRegExp = d);
var i = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function s(e, t) {
    for (var n, r = [], s = 0, a = 0, o = "", u = (t && t.delimiter) || "/"; null != (n = i.exec(e)); ) {
        var d = n[0],
            c = n[1],
            _ = n.index;
        if (((o += e.slice(a, _)), (a = _ + d.length), c)) {
            o += c[1];
            continue;
        }
        var f = e[a],
            E = n[2],
            h = n[3],
            p = n[4],
            m = n[5],
            g = n[6],
            A = n[7];
        o && (r.push(o), (o = ""));
        var I = null != E && null != f && f !== E,
            T = "+" === g || "*" === g,
            S = "?" === g || "*" === g,
            y = n[2] || u,
            N = p || m;
        r.push({
            name: h || s++,
            prefix: E || "",
            delimiter: y,
            optional: S,
            repeat: T,
            partial: I,
            asterisk: !!A,
            pattern: N ? N.replace(/([=!:$\/()])/g, "\\$1") : A ? ".*" : "[^" + l(y) + "]+?",
        });
    }
    return a < e.length && (o += e.substr(a)), o && r.push(o), r;
}
function a(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function o(e) {
    for (var t = Array(e.length), n = 0; n < e.length; n++)
        "object" == typeof e[n] && (t[n] = RegExp("^(?:" + e[n].pattern + ")$"));
    return function (n, i) {
        for (var s = "", o = n || {}, l = (i || {}).pretty ? a : encodeURIComponent, u = 0; u < e.length; u++) {
            var d,
                c = e[u];
            if ("string" == typeof c) {
                s += c;
                continue;
            }
            var _ = o[c.name];
            if (null == _)
                if (c.optional) {
                    c.partial && (s += c.prefix);
                    continue;
                } else throw TypeError('Expected "' + c.name + '" to be defined');
            if (r(_)) {
                if (!c.repeat)
                    throw TypeError(
                        'Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(_) + "`",
                    );
                if (0 === _.length)
                    if (c.optional) continue;
                    else throw TypeError('Expected "' + c.name + '" to not be empty');
                for (var f = 0; f < _.length; f++) {
                    if (((d = l(_[f])), !t[u].test(d)))
                        throw TypeError(
                            'Expected all "' +
                                c.name +
                                '" to match "' +
                                c.pattern +
                                '", but received `' +
                                JSON.stringify(d) +
                                "`",
                        );
                    s += (0 === f ? c.prefix : c.delimiter) + d;
                }
                continue;
            }
            if (
                ((d = c.asterisk
                    ? encodeURI(_).replace(/[?#]/g, function (e) {
                          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : l(_)),
                !t[u].test(d))
            )
                throw TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + d + '"');
            s += c.prefix + d;
        }
        return s;
    };
}
function l(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function u(e) {
    return e.sensitive ? "" : "i";
}
function d(e, t, n) {
    r(t) || ((n = t || n), (t = []));
    for (var i, s = (n = n || {}).strict, a = !1 !== n.end, o = "", d = 0; d < e.length; d++) {
        var c = e[d];
        if ("string" == typeof c) o += l(c);
        else {
            var _ = l(c.prefix),
                f = "(?:" + c.pattern + ")";
            t.push(c),
                c.repeat && (f += "(?:" + _ + f + ")*"),
                (o += f =
                    c.optional ? (c.partial ? _ + "(" + f + ")?" : "(?:" + _ + "(" + f + "))?") : _ + "(" + f + ")");
        }
    }
    var E = l(n.delimiter || "/"),
        h = o.slice(-E.length) === E;
    return (
        s || (o = (h ? o.slice(0, -E.length) : o) + "(?:" + E + "(?=$))?"),
        a ? (o += "$") : (o += s && h ? "" : "(?=" + E + "|$)"),
        ((i = RegExp("^" + o, u(n))).keys = t),
        i
    );
}

var r = n(271434);
(e.exports = E),
    (e.exports.parse = a),
    (e.exports.compile = s),
    (e.exports.tokensToFunction = c),
    (e.exports.tokensToRegExp = g);
var i = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);

function a(e, t) {
    for (var n, r = [], a = 0, s = 0, o = "", l = (t && t.delimiter) || "/"; null != (n = i.exec(e)); ) {
        var c = n[0],
            f = n[1],
            p = n.index;
        if (((o += e.slice(s, p)), (s = p + c.length), f)) {
            o += f[1];
            continue;
        }
        var _ = e[s],
            h = n[2],
            m = n[3],
            g = n[4],
            E = n[5],
            b = n[6],
            y = n[7];
        o && (r.push(o), (o = ""));
        var O = null != h && null != _ && _ !== h,
            A = "+" === b || "*" === b,
            v = "?" === b || "*" === b,
            S = n[2] || l,
            I = g || E;
        r.push({
            name: m || a++,
            prefix: h || "",
            delimiter: S,
            optional: v,
            repeat: A,
            partial: O,
            asterisk: !!y,
            pattern: I ? d(I) : y ? ".*" : "[^" + u(S) + "]+?",
        });
    }
    return s < e.length && (o += e.substr(s)), o && r.push(o), r;
}

function s(e, t) {
    return c(a(e, t));
}

function o(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
}

function l(e) {
    return encodeURI(e).replace(/[?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
}

function c(e) {
    for (var t = Array(e.length), n = 0; n < e.length; n++)
        "object" == typeof e[n] && (t[n] = RegExp("^(?:" + e[n].pattern + ")$"));
    return function (n, i) {
        for (var a = "", s = n || {}, c = (i || {}).pretty ? o : encodeURIComponent, u = 0; u < e.length; u++) {
            var d,
                f = e[u];
            if ("string" == typeof f) {
                a += f;
                continue;
            }
            var p = s[f.name];
            if (null == p)
                if (f.optional) {
                    f.partial && (a += f.prefix);
                    continue;
                } else throw TypeError('Expected "' + f.name + '" to be defined');
            if (r(p)) {
                if (!f.repeat)
                    throw TypeError(
                        'Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(p) + "`",
                    );
                if (0 === p.length)
                    if (f.optional) continue;
                    else throw TypeError('Expected "' + f.name + '" to not be empty');
                for (var _ = 0; _ < p.length; _++) {
                    if (((d = c(p[_])), !t[u].test(d)))
                        throw TypeError(
                            'Expected all "' +
                                f.name +
                                '" to match "' +
                                f.pattern +
                                '", but received `' +
                                JSON.stringify(d) +
                                "`",
                        );
                    a += (0 === _ ? f.prefix : f.delimiter) + d;
                }
                continue;
            }
            if (((d = f.asterisk ? l(p) : c(p)), !t[u].test(d)))
                throw TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + d + '"');
            a += f.prefix + d;
        }
        return a;
    };
}

function u(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}

function d(e) {
    return e.replace(/([=!:$\/()])/g, "\\$1");
}

function f(e, t) {
    return (e.keys = t), e;
}

function p(e) {
    return e.sensitive ? "" : "i";
}

function _(e, t) {
    var n = e.source.match(/\((?!\?)/g);
    if (n)
        for (var r = 0; r < n.length; r++)
            t.push({
                name: r,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null,
            });
    return f(e, t);
}

function h(e, t, n) {
    for (var r = [], i = 0; i < e.length; i++) r.push(E(e[i], t, n).source);
    return f(RegExp("(?:" + r.join("|") + ")", p(n)), t);
}

function m(e, t, n) {
    return g(a(e, n), t, n);
}

function g(e, t, n) {
    r(t) || ((n = t || n), (t = []));
    for (var i = (n = n || {}).strict, a = !1 !== n.end, s = "", o = 0; o < e.length; o++) {
        var l = e[o];
        if ("string" == typeof l) s += u(l);
        else {
            var c = u(l.prefix),
                d = "(?:" + l.pattern + ")";
            t.push(l),
                l.repeat && (d += "(?:" + c + d + ")*"),
                (s += d =
                    l.optional ? (l.partial ? c + "(" + d + ")?" : "(?:" + c + "(" + d + "))?") : c + "(" + d + ")");
        }
    }
    var _ = u(n.delimiter || "/"),
        h = s.slice(-_.length) === _;
    return (
        i || (s = (h ? s.slice(0, -_.length) : s) + "(?:" + _ + "(?=$))?"),
        a ? (s += "$") : (s += i && h ? "" : "(?=" + _ + "|$)"),
        f(RegExp("^" + s, p(n)), t)
    );
}

function E(e, t, n) {
    return (r(t) || ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp)
        ? _(e, t)
        : r(e)
          ? h(e, t, n)
          : m(e, t, n);
}

var r = n(271434);
(e.exports = E),
    (e.exports.parse = a),
    (e.exports.compile = s),
    (e.exports.tokensToFunction = u),
    (e.exports.tokensToRegExp = g);
var i = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function a(e, t) {
    for (var n, r = [], a = 0, s = 0, o = "", l = (t && t.delimiter) || "/"; null != (n = i.exec(e)); ) {
        var u = n[0],
            _ = n[1],
            f = n.index;
        if (((o += e.slice(s, f)), (s = f + u.length), _)) {
            o += _[1];
            continue;
        }
        var p = e[s],
            h = n[2],
            m = n[3],
            g = n[4],
            E = n[5],
            A = n[6],
            I = n[7];
        o && (r.push(o), (o = ""));
        var T = null != h && null != p && p !== h,
            y = "+" === A || "*" === A,
            S = "?" === A || "*" === A,
            v = n[2] || l,
            C = g || E;
        r.push({
            name: m || a++,
            prefix: h || "",
            delimiter: v,
            optional: S,
            repeat: y,
            partial: T,
            asterisk: !!I,
            pattern: C ? d(C) : I ? ".*" : "[^" + c(v) + "]+?",
        });
    }
    return s < e.length && (o += e.substr(s)), o && r.push(o), r;
}
function s(e, t) {
    return u(a(e, t));
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
function u(e) {
    for (var t = Array(e.length), n = 0; n < e.length; n++)
        "object" == typeof e[n] && (t[n] = RegExp("^(?:" + e[n].pattern + ")$"));
    return function (n, i) {
        for (var a = "", s = n || {}, u = (i || {}).pretty ? o : encodeURIComponent, c = 0; c < e.length; c++) {
            var d,
                _ = e[c];
            if ("string" == typeof _) {
                a += _;
                continue;
            }
            var f = s[_.name];
            if (null == f)
                if (_.optional) {
                    _.partial && (a += _.prefix);
                    continue;
                } else throw TypeError('Expected "' + _.name + '" to be defined');
            if (r(f)) {
                if (!_.repeat)
                    throw TypeError(
                        'Expected "' + _.name + '" to not repeat, but received `' + JSON.stringify(f) + "`",
                    );
                if (0 === f.length)
                    if (_.optional) continue;
                    else throw TypeError('Expected "' + _.name + '" to not be empty');
                for (var p = 0; p < f.length; p++) {
                    if (((d = u(f[p])), !t[c].test(d)))
                        throw TypeError(
                            'Expected all "' +
                                _.name +
                                '" to match "' +
                                _.pattern +
                                '", but received `' +
                                JSON.stringify(d) +
                                "`",
                        );
                    a += (0 === p ? _.prefix : _.delimiter) + d;
                }
                continue;
            }
            if (((d = _.asterisk ? l(f) : u(f)), !t[c].test(d)))
                throw TypeError('Expected "' + _.name + '" to match "' + _.pattern + '", but received "' + d + '"');
            a += _.prefix + d;
        }
        return a;
    };
}
function c(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function d(e) {
    return e.replace(/([=!:$\/()])/g, "\\$1");
}
function _(e, t) {
    return (e.keys = t), e;
}
function f(e) {
    return e.sensitive ? "" : "i";
}
function p(e, t) {
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
    return _(e, t);
}
function h(e, t, n) {
    for (var r = [], i = 0; i < e.length; i++) r.push(E(e[i], t, n).source);
    return _(RegExp("(?:" + r.join("|") + ")", f(n)), t);
}
function m(e, t, n) {
    return g(a(e, n), t, n);
}
function g(e, t, n) {
    r(t) || ((n = t || n), (t = []));
    for (var i = (n = n || {}).strict, a = !1 !== n.end, s = "", o = 0; o < e.length; o++) {
        var l = e[o];
        if ("string" == typeof l) s += c(l);
        else {
            var u = c(l.prefix),
                d = "(?:" + l.pattern + ")";
            t.push(l),
                l.repeat && (d += "(?:" + u + d + ")*"),
                (s += d =
                    l.optional ? (l.partial ? u + "(" + d + ")?" : "(?:" + u + "(" + d + "))?") : u + "(" + d + ")");
        }
    }
    var p = c(n.delimiter || "/"),
        h = s.slice(-p.length) === p;
    return (
        i || (s = (h ? s.slice(0, -p.length) : s) + "(?:" + p + "(?=$))?"),
        a ? (s += "$") : (s += i && h ? "" : "(?=" + p + "|$)"),
        _(RegExp("^" + s, f(n)), t)
    );
}
function E(e, t, n) {
    return (r(t) || ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp)
        ? p(e, t)
        : r(e)
          ? h(e, t, n)
          : m(e, t, n);
}

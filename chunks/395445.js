var i = n(271434);
(e.exports = function e(t, n, r) {
    if ((i(n) || ((r = n || r), (n = [])), (r = r || {}), t instanceof RegExp)) {
        var a,
            o,
            l = n,
            d = t.source.match(/\((?!\?)/g);
        if (d)
            for (var _ = 0; _ < d.length; _++)
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
    if (i(t)) {
        for (var h, f = n, p = r, E = [], m = 0; m < t.length; m++) E.push(e(t[m], f, p).source);
        return ((h = RegExp("(?:" + E.join("|") + ")", u(p))).keys = f), h;
    }
    return (a = n), c(s(t, (o = r)), a, o);
}),
    (e.exports.parse = s),
    (e.exports.compile = function (e, t) {
        return o(s(e, t), t);
    }),
    (e.exports.tokensToFunction = o),
    (e.exports.tokensToRegExp = c);
var r = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function s(e, t) {
    for (var n, i = [], s = 0, a = 0, o = "", u = (t && t.delimiter) || "/"; null != (n = r.exec(e)); ) {
        var c,
            d,
            _ = n[0],
            h = n[1],
            f = n.index;
        if (((o += e.slice(a, f)), (a = f + _.length), h)) {
            o += h[1];
            continue;
        }
        var p = e[a],
            E = n[2],
            m = n[3],
            g = n[4],
            A = n[5],
            I = n[6],
            T = n[7];
        o && (i.push(o), (o = ""));
        var S = null != E && null != p && p !== E,
            y = "+" === I || "*" === I,
            C = "?" === I || "*" === I,
            N = E || u,
            v = g || A,
            R = E || ("string" == typeof i[i.length - 1] ? i[i.length - 1] : "");
        i.push({
            name: m || s++,
            prefix: E || "",
            delimiter: N,
            optional: C,
            repeat: y,
            partial: S,
            asterisk: !!T,
            pattern: v
                ? v.replace(/([=!:$\/()])/g, "\\$1")
                : T
                  ? ".*"
                  : ((c = N),
                    !(d = R) || d.indexOf(c) > -1
                        ? "[^" + l(c) + "]+?"
                        : l(d) + "|(?:(?!" + l(d) + ")[^" + l(c) + "])+?"),
        });
    }
    return a < e.length && (o += e.substr(a)), o && i.push(o), i;
}
function a(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function o(e, t) {
    for (var n = Array(e.length), r = 0; r < e.length; r++)
        "object" == typeof e[r] && (n[r] = RegExp("^(?:" + e[r].pattern + ")$", u(t)));
    return function (t, r) {
        for (var s = "", o = t || {}, l = (r || {}).pretty ? a : encodeURIComponent, u = 0; u < e.length; u++) {
            var c,
                d = e[u];
            if ("string" == typeof d) {
                s += d;
                continue;
            }
            var _ = o[d.name];
            if (null == _)
                if (d.optional) {
                    d.partial && (s += d.prefix);
                    continue;
                } else throw TypeError('Expected "' + d.name + '" to be defined');
            if (i(_)) {
                if (!d.repeat)
                    throw TypeError(
                        'Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(_) + "`",
                    );
                if (0 === _.length)
                    if (d.optional) continue;
                    else throw TypeError('Expected "' + d.name + '" to not be empty');
                for (var h = 0; h < _.length; h++) {
                    if (((c = l(_[h])), !n[u].test(c)))
                        throw TypeError(
                            'Expected all "' +
                                d.name +
                                '" to match "' +
                                d.pattern +
                                '", but received `' +
                                JSON.stringify(c) +
                                "`",
                        );
                    s += (0 === h ? d.prefix : d.delimiter) + c;
                }
                continue;
            }
            if (
                ((c = d.asterisk
                    ? encodeURI(_).replace(/[?#]/g, function (e) {
                          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : l(_)),
                !n[u].test(c))
            )
                throw TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + c + '"');
            s += d.prefix + c;
        }
        return s;
    };
}
function l(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function u(e) {
    return e && e.sensitive ? "" : "i";
}
function c(e, t, n) {
    i(t) || ((n = t || n), (t = []));
    for (var r, s = (n = n || {}).strict, a = !1 !== n.end, o = "", c = 0; c < e.length; c++) {
        var d = e[c];
        if ("string" == typeof d) o += l(d);
        else {
            var _ = l(d.prefix),
                h = "(?:" + d.pattern + ")";
            t.push(d),
                d.repeat && (h += "(?:" + _ + h + ")*"),
                (o += h =
                    d.optional ? (d.partial ? _ + "(" + h + ")?" : "(?:" + _ + "(" + h + "))?") : _ + "(" + h + ")");
        }
    }
    var f = l(n.delimiter || "/"),
        p = o.slice(-f.length) === f;
    return (
        s || (o = (p ? o.slice(0, -f.length) : o) + "(?:" + f + "(?=$))?"),
        a ? (o += "$") : (o += s && p ? "" : "(?=" + f + "|$)"),
        ((r = RegExp("^" + o, u(n))).keys = t),
        r
    );
}

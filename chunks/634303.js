var o,
    a,
    n =
        (this && this.__importDefault) ||
        function (r) {
            return r && r.__esModule ? r : { default: r };
        };
Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = void 0);
var c = u(n(t(300115)).default),
    i = p(c);
e.encodeXML = m(c);
var s = u(n(t(164565)).default),
    l = p(s);
function u(r) {
    return Object.keys(r)
        .sort()
        .reduce(function (e, t) {
            return (e[r[t]] = "&" + t + ";"), e;
        }, {});
}
function p(r) {
    for (var e = [], t = [], o = 0, a = Object.keys(r); o < a.length; o++) {
        var n = a[o];
        1 === n.length ? e.push("\\" + n) : t.push(n);
    }
    e.sort();
    for (var c = 0; c < e.length - 1; c++) {
        for (var i = c; i < e.length - 1 && e[i].charCodeAt(1) + 1 === e[i + 1].charCodeAt(1); ) i += 1;
        var s = 1 + i - c;
        s < 3 || e.splice(c, s, e[c] + "-" + e[i]);
    }
    return t.unshift("[" + e.join("") + "]"), RegExp(t.join("|"), "g");
}
(o = s),
    (a = l),
    (e.encodeHTML = function (r) {
        return r
            .replace(a, function (r) {
                return o[r];
            })
            .replace(d, g);
    }),
    (e.encodeNonAsciiHTML = m(s));
var d =
        /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    f =
        null != String.prototype.codePointAt
            ? function (r) {
                  return r.codePointAt(0);
              }
            : function (r) {
                  return (r.charCodeAt(0) - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536;
              };
function g(r) {
    return "&#x" + (r.length > 1 ? f(r) : r.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
var b = RegExp(i.source + "|" + d.source, "g");
function m(r) {
    return function (e) {
        return e.replace(b, function (e) {
            return r[e] || g(e);
        });
    };
}
(e.escape = function (r) {
    return r.replace(b, g);
}),
    (e.escapeUTF8 = function (r) {
        return r.replace(i, g);
    });

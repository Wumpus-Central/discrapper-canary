(t.parse = s), (t.serialize = o);
var n = decodeURIComponent,
    r = encodeURIComponent,
    i = /; */,
    a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function s(e, t) {
    if ("string" != typeof e) throw TypeError("argument str must be a string");
    var r = {},
        a = t || {},
        s = e.split(i),
        o = a.decode || n;
    return (
        s.forEach(function (e) {
            var t = e.indexOf("=");
            if (!(t < 0)) {
                var n = e.substr(0, t).trim(),
                    i = e.substr(++t, e.length).trim();
                '"' == i[0] && (i = i.slice(1, -1)), void 0 == r[n] && (r[n] = l(i, o));
            }
        }),
        r
    );
}
function o(e, t, n) {
    var i = n || {},
        s = i.encode || r;
    if (!a.test(e)) throw TypeError("argument name is invalid");
    var o = s(t);
    if (o && !a.test(o)) throw TypeError("argument val is invalid");
    var l = [e + "=" + o];
    if (null != i.maxAge) {
        var u = i.maxAge - 0;
        if (isNaN(u)) throw Error("maxAge should be a Number");
        l.push("Max-Age=" + Math.floor(u));
    }
    if (i.domain) {
        if (!a.test(i.domain)) throw TypeError("option domain is invalid");
        l.push("Domain=" + i.domain);
    }
    if (i.path) {
        if (!a.test(i.path)) throw TypeError("option path is invalid");
        l.push("Path=" + i.path);
    }
    return (
        i.expires && l.push("Expires=" + i.expires.toUTCString()),
        i.httpOnly && l.push("HttpOnly"),
        i.secure && l.push("Secure"),
        i.firstPartyOnly && l.push("First-Party-Only"),
        l.join("; ")
    );
}
function l(e, t) {
    try {
        return t(e);
    } catch (t) {
        return e;
    }
}

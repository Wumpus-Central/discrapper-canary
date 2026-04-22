(t.parse = function (e, t) {
    if ("string" != typeof e) throw TypeError("argument str must be a string");
    var r = {},
        s = e.split(i),
        a = (t || {}).decode || n;
    return (
        s.forEach(function (e) {
            var t = e.indexOf("=");
            if (!(t < 0)) {
                var n = e.substr(0, t).trim(),
                    i = e.substr(++t, e.length).trim();
                '"' == i[0] && (i = i.slice(1, -1)),
                    void 0 == r[n] &&
                        (r[n] = (function (e, t) {
                            try {
                                return t(e);
                            } catch (t) {
                                return e;
                            }
                        })(i, a));
            }
        }),
        r
    );
}),
    (t.serialize = function (e, t, n) {
        var i = n || {},
            a = i.encode || r;
        if (!s.test(e)) throw TypeError("argument name is invalid");
        var o = a(t);
        if (o && !s.test(o)) throw TypeError("argument val is invalid");
        var l = [e + "=" + o];
        if (null != i.maxAge) {
            var u = i.maxAge - 0;
            if (isNaN(u)) throw Error("maxAge should be a Number");
            l.push("Max-Age=" + Math.floor(u));
        }
        if (i.domain) {
            if (!s.test(i.domain)) throw TypeError("option domain is invalid");
            l.push("Domain=" + i.domain);
        }
        if (i.path) {
            if (!s.test(i.path)) throw TypeError("option path is invalid");
            l.push("Path=" + i.path);
        }
        return (
            i.expires && l.push("Expires=" + i.expires.toUTCString()),
            i.httpOnly && l.push("HttpOnly"),
            i.secure && l.push("Secure"),
            i.firstPartyOnly && l.push("First-Party-Only"),
            l.join("; ")
        );
    });
var n = decodeURIComponent,
    r = encodeURIComponent,
    i = /; */,
    s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

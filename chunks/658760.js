n(321073);
var i = n(998218);
n.d(
    t,
    {},
    {
        K: function (e, t) {
            var n, r;
            let a,
                s,
                l,
                o,
                d,
                c,
                u = i.A.toURLSafe(e);
            return null == u
                ? ((n = e),
                  (r = t),
                  (s = -1 === (a = n.indexOf("#")) ? "" : n.slice(a)),
                  (d = -1 === (o = (l = -1 === a ? n : n.slice(0, a)).indexOf("?")) ? l : l.slice(0, o)),
                  (c = (-1 === o ? "" : l.slice(o + 1))
                      .split("&")
                      .filter((e) => "" !== e && "format" !== e.split("=")[0])).push(`format=${r}`),
                  `${d}?${c.join("&")}${s}`)
                : (u.searchParams.set("format", t), u.toString());
        },
    },
);

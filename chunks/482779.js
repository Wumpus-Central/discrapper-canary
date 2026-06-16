"use strict";
var i,
    r = n(101968),
    s = n(252268),
    a = n(143320),
    o = n(239586),
    l = n(469520),
    u = n(447280),
    c = n(583178),
    d = "prototype",
    _ = "script",
    h = c("IE_PROTO"),
    f = function () {},
    p = function (e) {
        return "<" + _ + ">" + e + "</" + _ + ">";
    },
    E = function (e) {
        e.write(p("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    m = function () {
        var e,
            t = u("iframe");
        return (
            (t.style.display = "none"),
            l.appendChild(t),
            (t.src = String("java" + _ + ":")),
            (e = t.contentWindow.document).open(),
            e.write(p("document.F=Object")),
            e.close(),
            e.F
        );
    },
    g = function () {
        try {
            i = new ActiveXObject("htmlfile");
        } catch (e) {}
        g = "u" > typeof document ? (document.domain && i ? E(i) : m()) : E(i);
        for (var e = a.length; e--; ) delete g[d][a[e]];
        return g();
    };
(o[h] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return (
                null !== e ? ((f[d] = r(e)), (n = new f()), (f[d] = null), (n[h] = e)) : (n = g()),
                void 0 === t ? n : s.f(n, t)
            );
        });

"use strict";
var r,
    i = n(101968),
    s = n(252268),
    a = n(143320),
    o = n(239586),
    l = n(469520),
    u = n(447280),
    d = n(583178),
    c = "prototype",
    _ = "script",
    f = d("IE_PROTO"),
    E = function () {},
    h = function (e) {
        return "<" + _ + ">" + e + "</" + _ + ">";
    },
    p = function (e) {
        e.write(h("")), e.close();
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
            e.write(h("document.F=Object")),
            e.close(),
            e.F
        );
    },
    g = function () {
        try {
            r = new ActiveXObject("htmlfile");
        } catch (e) {}
        g = "u" > typeof document ? (document.domain && r ? p(r) : m()) : p(r);
        for (var e = a.length; e--; ) delete g[c][a[e]];
        return g();
    };
(o[f] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return (
                null !== e ? ((E[c] = i(e)), (n = new E()), (E[c] = null), (n[f] = e)) : (n = g()),
                void 0 === t ? n : s.f(n, t)
            );
        });

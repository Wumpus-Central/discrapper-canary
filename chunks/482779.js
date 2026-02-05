"use strict";
var r,
    i = n(101968),
    a = n(252268),
    s = n(143320),
    o = n(239586),
    l = n(469520),
    u = n(447280),
    c = n(583178),
    d = ">",
    _ = "<",
    f = "prototype",
    p = "script",
    h = c("IE_PROTO"),
    m = function () {},
    g = function (e) {
        return _ + p + d + e + _ + "/" + p + d;
    },
    E = function (e) {
        e.write(g("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    A = function () {
        var e,
            t = u("iframe"),
            n = "java" + p + ":";
        return (
            (t.style.display = "none"),
            l.appendChild(t),
            (t.src = String(n)),
            (e = t.contentWindow.document).open(),
            e.write(g("document.F=Object")),
            e.close(),
            e.F
        );
    },
    I = function () {
        try {
            r = new ActiveXObject("htmlfile");
        } catch (e) {}
        I = "u" > typeof document ? (document.domain && r ? E(r) : A()) : E(r);
        for (var e = s.length; e--; ) delete I[f][s[e]];
        return I();
    };
(o[h] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return (
                null !== e ? ((m[f] = i(e)), (n = new m()), (m[f] = null), (n[h] = e)) : (n = I()),
                void 0 === t ? n : a.f(n, t)
            );
        });

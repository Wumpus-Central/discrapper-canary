var r,
    i = n(101968),
    a = n(252268),
    s = n(143320),
    o = n(239586),
    l = n(469520),
    c = n(447280),
    u = n(583178),
    d = ">",
    f = "<",
    p = "prototype",
    _ = "script",
    h = u("IE_PROTO"),
    m = function () {},
    g = function (e) {
        return f + _ + d + e + f + "/" + _ + d;
    },
    E = function (e) {
        e.write(g("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    b = function () {
        var e,
            t = c("iframe"),
            n = "java" + _ + ":";
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
    y = function () {
        try {
            r = new ActiveXObject("htmlfile");
        } catch (e) {}
        y = "u" > typeof document ? (document.domain && r ? E(r) : b()) : E(r);
        for (var e = s.length; e--; ) delete y[p][s[e]];
        return y();
    };
(o[h] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return (
                null !== e ? ((m[p] = i(e)), (n = new m()), (m[p] = null), (n[h] = e)) : (n = y()),
                void 0 === t ? n : a.f(n, t)
            );
        });

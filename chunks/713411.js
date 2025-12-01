var r,
    i = n(179122),
    a = n(465034),
    o = n(344894),
    s = n(485073),
    l = n(620394),
    c = n(809290),
    u = n(661314),
    d = ">",
    f = "<",
    p = "prototype",
    _ = "script",
    m = u("IE_PROTO"),
    h = function () {},
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
        y = "undefined" != typeof document ? (document.domain && r ? E(r) : b()) : E(r);
        for (var e = o.length; e--; ) delete y[p][o[e]];
        return y();
    };
(s[m] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return (
                null !== e ? ((h[p] = i(e)), (n = new h()), (h[p] = null), (n[m] = e)) : (n = y()),
                void 0 === t ? n : a.f(n, t)
            );
        });

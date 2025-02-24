var e,
    o = n(28886),
    i = n(930134),
    u = n(459535),
    s = n(511364),
    c = n(439230),
    f = n(535538),
    a = n(964653),
    p = 'prototype',
    v = 'script',
    l = a('IE_PROTO'),
    y = function () {},
    h = function (t) {
        return '<' + v + '>' + t + '</' + v + '>';
    },
    x = function (t) {
        t.write(h('')), t.close();
        var r = t.parentWindow.Object;
        return (t = null), r;
    },
    d = function () {
        var t,
            r = f('iframe');
        return (r.style.display = 'none'), c.appendChild(r), (r.src = String('java' + v + ':')), (t = r.contentWindow.document).open(), t.write(h('document.F=Object')), t.close(), t.F;
    },
    g = function () {
        try {
            e = new ActiveXObject('htmlfile');
        } catch (t) {}
        g = 'undefined' != typeof document ? (document.domain && e ? x(e) : d()) : x(e);
        for (var t = u.length; t--; ) delete g[p][u[t]];
        return g();
    };
(s[l] = !0),
    (t.exports =
        Object.create ||
        function (t, r) {
            var n;
            return null !== t ? ((y[p] = o(t)), (n = new y()), (y[p] = null), (n[l] = t)) : (n = g()), void 0 === r ? n : i.f(n, r);
        });

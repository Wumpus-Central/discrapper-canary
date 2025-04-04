var e,
    o = n(921413),
    i = n(410339),
    u = n(22590),
    s = n(270498),
    c = n(604417),
    f = n(442119),
    a = n(459079),
    p = 'prototype',
    l = 'script',
    v = a('IE_PROTO'),
    y = function () {},
    h = function (t) {
        return '<' + l + '>' + t + '</' + l + '>';
    },
    x = function (t) {
        t.write(h('')), t.close();
        var r = t.parentWindow.Object;
        return (t = null), r;
    },
    d = function () {
        var t,
            r = f('iframe');
        return (r.style.display = 'none'), c.appendChild(r), (r.src = String('java' + l + ':')), (t = r.contentWindow.document).open(), t.write(h('document.F=Object')), t.close(), t.F;
    },
    g = function () {
        try {
            e = new ActiveXObject('htmlfile');
        } catch (t) {}
        g = 'undefined' != typeof document ? (document.domain && e ? x(e) : d()) : x(e);
        for (var t = u.length; t--; ) delete g[p][u[t]];
        return g();
    };
(s[v] = !0),
    (t.exports =
        Object.create ||
        function (t, r) {
            var n;
            return null !== t ? ((y[p] = o(t)), (n = new y()), (y[p] = null), (n[v] = t)) : (n = g()), void 0 === r ? n : i.f(n, r);
        });

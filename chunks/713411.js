var e,
    o = r(179122),
    i = r(465034),
    u = r(344894),
    c = r(485073),
    a = r(620394),
    f = r(809290),
    s = r(661314),
    l = 'prototype',
    p = 'script',
    d = s('IE_PROTO'),
    _ = function () {},
    h = function (t) {
        return '<' + p + '>' + t + '</' + p + '>';
    },
    y = function (t) {
        t.write(h('')), t.close();
        var n = t.parentWindow.Object;
        return (t = null), n;
    },
    b = function () {
        var t,
            n = f('iframe');
        return (n.style.display = 'none'), a.appendChild(n), (n.src = String('java' + p + ':')), (t = n.contentWindow.document).open(), t.write(h('document.F=Object')), t.close(), t.F;
    },
    g = function () {
        try {
            e = new ActiveXObject('htmlfile');
        } catch (t) {}
        g = 'undefined' != typeof document ? (document.domain && e ? y(e) : b()) : y(e);
        for (var t = u.length; t--; ) delete g[l][u[t]];
        return g();
    };
(c[d] = !0),
    (t.exports =
        Object.create ||
        function (t, n) {
            var r;
            return null !== t ? ((_[l] = o(t)), (r = new _()), (_[l] = null), (r[d] = t)) : (r = g()), void 0 === n ? r : i.f(r, n);
        });

var r,
    i = n(179122),
    o = n(465034),
    a = n(344894),
    s = n(485073),
    l = n(620394),
    c = n(809290),
    u = n(661314),
    d = '>',
    f = '<',
    _ = 'prototype',
    p = 'script',
    h = u('IE_PROTO'),
    m = function () {},
    g = function (e) {
        return f + p + d + e + f + '/' + p + d;
    },
    E = function (e) {
        e.write(g('')), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    b = function () {
        var e,
            t = c('iframe'),
            n = 'java' + p + ':';
        return (t.style.display = 'none'), l.appendChild(t), (t.src = String(n)), (e = t.contentWindow.document).open(), e.write(g('document.F=Object')), e.close(), e.F;
    },
    y = function () {
        try {
            r = new ActiveXObject('htmlfile');
        } catch (e) {}
        y = 'undefined' != typeof document ? (document.domain && r ? E(r) : b()) : E(r);
        for (var e = a.length; e--; ) delete y[_][a[e]];
        return y();
    };
(s[h] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return null !== e ? ((m[_] = i(e)), (n = new m()), (m[_] = null), (n[h] = e)) : (n = y()), void 0 === t ? n : o.f(n, t);
        });

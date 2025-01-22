var i,
    a = r(28886),
    o = r(930134),
    s = r(459535),
    l = r(511364),
    u = r(439230),
    c = r(535538),
    d = r(964653),
    f = '>',
    p = '<',
    h = 'prototype',
    _ = 'script',
    m = d('IE_PROTO'),
    g = function () {},
    E = function (e) {
        return p + _ + f + e + p + '/' + _ + f;
    },
    v = function (e) {
        e.write(E('')), e.close();
        var n = e.parentWindow.Object;
        return (e = null), n;
    },
    y = function () {
        var e,
            n = c('iframe'),
            r = 'java' + _ + ':';
        return (n.style.display = 'none'), u.appendChild(n), (n.src = String(r)), (e = n.contentWindow.document).open(), e.write(E('document.F=Object')), e.close(), e.F;
    },
    b = function () {
        try {
            i = new ActiveXObject('htmlfile');
        } catch (e) {}
        b = 'undefined' != typeof document ? (document.domain && i ? v(i) : y()) : v(i);
        for (var e = s.length; e--; ) delete b[h][s[e]];
        return b();
    };
(l[m] = !0),
    (e.exports =
        Object.create ||
        function (e, n) {
            var r;
            return null !== e ? ((g[h] = a(e)), (r = new g()), (g[h] = null), (r[m] = e)) : (r = b()), void 0 === n ? r : o.f(r, n);
        });

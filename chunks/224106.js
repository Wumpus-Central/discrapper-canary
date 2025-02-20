var r,
    i = n(28886),
    o = n(930134),
    a = n(459535),
    s = n(511364),
    l = n(439230),
    c = n(535538),
    u = n(964653),
    d = '>',
    f = '<',
    p = 'prototype',
    _ = 'script',
    h = u('IE_PROTO'),
    m = function () {},
    g = function (e) {
        return f + _ + d + e + f + '/' + _ + d;
    },
    E = function (e) {
        e.write(g('')), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    v = function () {
        var e,
            t = c('iframe'),
            n = 'java' + _ + ':';
        return (t.style.display = 'none'), l.appendChild(t), (t.src = String(n)), (e = t.contentWindow.document).open(), e.write(g('document.F=Object')), e.close(), e.F;
    },
    b = function () {
        try {
            r = new ActiveXObject('htmlfile');
        } catch (e) {}
        b = 'undefined' != typeof document ? (document.domain && r ? E(r) : v()) : E(r);
        for (var e = a.length; e--; ) delete b[p][a[e]];
        return b();
    };
(s[h] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return null !== e ? ((m[p] = i(e)), (n = new m()), (m[p] = null), (n[h] = e)) : (n = b()), void 0 === t ? n : o.f(n, t);
        });

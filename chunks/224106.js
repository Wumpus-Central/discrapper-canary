var i,
    r = n(28886),
    a = n(930134),
    s = n(459535),
    o = n(511364),
    l = n(439230),
    u = n(535538),
    c = n(964653),
    d = '>',
    f = '<',
    _ = 'prototype',
    p = 'script',
    h = c('IE_PROTO'),
    m = function () {},
    g = function (e) {
        return f + p + d + e + f + '/' + p + d;
    },
    E = function (e) {
        e.write(g('')), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
    },
    v = function () {
        var e,
            t = u('iframe'),
            n = 'java' + p + ':';
        return (t.style.display = 'none'), l.appendChild(t), (t.src = String(n)), (e = t.contentWindow.document).open(), e.write(g('document.F=Object')), e.close(), e.F;
    },
    y = function () {
        try {
            i = new ActiveXObject('htmlfile');
        } catch (e) {}
        y = 'undefined' != typeof document ? (document.domain && i ? E(i) : v()) : E(i);
        for (var e = s.length; e--; ) delete y[_][s[e]];
        return y();
    };
(o[h] = !0),
    (e.exports =
        Object.create ||
        function (e, t) {
            var n;
            return null !== e ? ((m[_] = r(e)), (n = new m()), (m[_] = null), (n[h] = e)) : (n = y()), void 0 === t ? n : a.f(n, t);
        });

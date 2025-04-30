var r,
    n = a(179122),
    _ = a(465034),
    o = a(344894),
    i = a(485073),
    c = a(620394),
    s = a(809290),
    E = a(661314),
    l = 'prototype',
    u = 'script',
    I = E('IE_PROTO'),
    R = function () {},
    d = function (t) {
        return '<' + u + '>' + t + '</' + u + '>';
    },
    A = function (t) {
        t.write(d('')), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
    },
    f = function () {
        var t,
            e = s('iframe');
        return (e.style.display = 'none'), c.appendChild(e), (e.src = String('java' + u + ':')), (t = e.contentWindow.document).open(), t.write(d('document.F=Object')), t.close(), t.F;
    },
    p = function () {
        try {
            r = new ActiveXObject('htmlfile');
        } catch (t) {}
        p = 'undefined' != typeof document ? (document.domain && r ? A(r) : f()) : A(r);
        for (var t = o.length; t--; ) delete p[l][o[t]];
        return p();
    };
(i[I] = !0),
    (t.exports =
        Object.create ||
        function (t, e) {
            var a;
            return null !== t ? ((R[l] = n(t)), (a = new R()), (R[l] = null), (a[I] = t)) : (a = p()), void 0 === e ? a : _.f(a, e);
        });

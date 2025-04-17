n.d(t, { O: () => v });
var o,
    r = n(613791),
    i = n(604098),
    a = n(139934),
    s = /[A-Z]|^ms/g,
    u = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    l = function (e) {
        return 45 === e.charCodeAt(1);
    },
    c = function (e) {
        return null != e && 'boolean' != typeof e;
    },
    d = (0, a.Z)(function (e) {
        return l(e) ? e : e.replace(s, '-$&').toLowerCase();
    }),
    p = function (e, t) {
        switch (e) {
            case 'animation':
            case 'animationName':
                if ('string' == typeof t)
                    return t.replace(u, function (e, t, n) {
                        return (
                            (o = {
                                name: t,
                                styles: n,
                                next: o
                            }),
                            t
                        );
                    });
        }
        return 1 === i.Z[e] || l(e) || 'number' != typeof t || 0 === t ? t : t + 'px';
    };
function f(e, t, n) {
    if (null == n) return '';
    if (void 0 !== n.__emotion_styles) return n;
    switch (typeof n) {
        case 'boolean':
            return '';
        case 'object':
            if (1 === n.anim)
                return (
                    (o = {
                        name: n.name,
                        styles: n.styles,
                        next: o
                    }),
                    n.name
                );
            if (void 0 !== n.styles) {
                var r = n.next;
                if (void 0 !== r)
                    for (; void 0 !== r; )
                        (o = {
                            name: r.name,
                            styles: r.styles,
                            next: o
                        }),
                            (r = r.next);
                return n.styles + ';';
            }
            return (function (e, t, n) {
                var o = '';
                if (Array.isArray(n)) for (var r = 0; r < n.length; r++) o += f(e, t, n[r]) + ';';
                else
                    for (var i in n) {
                        var a = n[i];
                        if ('object' != typeof a) null != t && void 0 !== t[a] ? (o += i + '{' + t[a] + '}') : c(a) && (o += d(i) + ':' + p(i, a) + ';');
                        else if (Array.isArray(a) && 'string' == typeof a[0] && (null == t || void 0 === t[a[0]])) for (var s = 0; s < a.length; s++) c(a[s]) && (o += d(i) + ':' + p(i, a[s]) + ';');
                        else {
                            var u = f(e, t, a);
                            switch (i) {
                                case 'animation':
                                case 'animationName':
                                    o += d(i) + ':' + u + ';';
                                    break;
                                default:
                                    o += i + '{' + u + '}';
                            }
                        }
                    }
                return o;
            })(e, t, n);
        case 'function':
            if (void 0 !== e) {
                var i = o,
                    a = n(e);
                return (o = i), f(e, t, a);
            }
    }
    if (null == t) return n;
    var s = t[n];
    return void 0 !== s ? s : n;
}
var h = /label:\s*([^\s;{]+)\s*(;|$)/g;
function v(e, t, n) {
    if (1 === e.length && 'object' == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
    var i,
        a = !0,
        s = '';
    o = void 0;
    var u = e[0];
    null == u || void 0 === u.raw ? ((a = !1), (s += f(n, t, u))) : (s += u[0]);
    for (var l = 1; l < e.length; l++) (s += f(n, t, e[l])), a && (s += u[l]);
    h.lastIndex = 0;
    for (var c = ''; null !== (i = h.exec(s)); ) c += '-' + i[1];
    return {
        name: (0, r.Z)(s) + c,
        styles: s,
        next: o
    };
}

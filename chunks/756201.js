n.d(t, {
    Kg: () => o,
    Rp: () => l,
    n: () => r
});
var i = n(192379);
function r(e, t) {
    var n = function (e) {
            return t && (0, i.isValidElement)(e) ? t(e) : e;
        },
        r = Object.create(null);
    return (
        e &&
            i.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                r[e.key] = n(e);
            }),
        r
    );
}
function a(e, t) {
    function n(n) {
        return n in t ? t[n] : e[n];
    }
    (e = e || {}), (t = t || {});
    var i,
        r = Object.create(null),
        a = [];
    for (var s in e) s in t ? a.length && ((r[s] = a), (a = [])) : a.push(s);
    var o = {};
    for (var l in t) {
        if (r[l])
            for (i = 0; i < r[l].length; i++) {
                var u = r[l][i];
                o[r[l][i]] = n(u);
            }
        o[l] = n(l);
    }
    for (i = 0; i < a.length; i++) o[a[i]] = n(a[i]);
    return o;
}
function s(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}
function o(e, t) {
    return r(e.children, function (n) {
        return (0, i.cloneElement)(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: s(n, 'appear', e),
            enter: s(n, 'enter', e),
            exit: s(n, 'exit', e)
        });
    });
}
function l(e, t, n) {
    var o = r(e.children),
        l = a(t, o);
    return (
        Object.keys(l).forEach(function (r) {
            var a = l[r];
            if ((0, i.isValidElement)(a)) {
                var u = r in t,
                    c = r in o,
                    d = t[r],
                    f = (0, i.isValidElement)(d) && !d.props.in;
                c && (!u || f)
                    ? (l[r] = (0, i.cloneElement)(a, {
                          onExited: n.bind(null, a),
                          in: !0,
                          exit: s(a, 'exit', e),
                          enter: s(a, 'enter', e)
                      }))
                    : c || !u || f
                      ? c &&
                        u &&
                        (0, i.isValidElement)(d) &&
                        (l[r] = (0, i.cloneElement)(a, {
                            onExited: n.bind(null, a),
                            in: d.props.in,
                            exit: s(a, 'exit', e),
                            enter: s(a, 'enter', e)
                        }))
                      : (l[r] = (0, i.cloneElement)(a, { in: !1 }));
            }
        }),
        l
    );
}

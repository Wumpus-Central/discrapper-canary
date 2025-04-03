(t.__esModule = !0),
    (t.getChildMapping = r),
    (t.mergeChildMappings = i),
    (t.getInitialChildMapping = function (e, t) {
        return r(e.children, function (n) {
            return (0, o.cloneElement)(n, {
                onExited: t.bind(null, n),
                in: !0,
                appear: a(n, 'appear', e),
                enter: a(n, 'enter', e),
                exit: a(n, 'exit', e)
            });
        });
    }),
    (t.getNextChildMapping = function (e, t, n) {
        var u = r(e.children),
            s = i(t, u);
        return (
            Object.keys(s).forEach(function (r) {
                var i = s[r];
                if ((0, o.isValidElement)(i)) {
                    var l = r in t,
                        c = r in u,
                        p = t[r],
                        d = (0, o.isValidElement)(p) && !p.props.in;
                    c && (!l || d)
                        ? (s[r] = (0, o.cloneElement)(i, {
                              onExited: n.bind(null, i),
                              in: !0,
                              exit: a(i, 'exit', e),
                              enter: a(i, 'enter', e)
                          }))
                        : c || !l || d
                          ? c &&
                            l &&
                            (0, o.isValidElement)(p) &&
                            (s[r] = (0, o.cloneElement)(i, {
                                onExited: n.bind(null, i),
                                in: p.props.in,
                                exit: a(i, 'exit', e),
                                enter: a(i, 'enter', e)
                            }))
                          : (s[r] = (0, o.cloneElement)(i, { in: !1 }));
                }
            }),
            s
        );
    });
var o = n(192379);
function r(e, t) {
    var n = Object.create(null);
    return (
        e &&
            o.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                n[e.key] = t && (0, o.isValidElement)(e) ? t(e) : e;
            }),
        n
    );
}
function i(e, t) {
    function n(n) {
        return n in t ? t[n] : e[n];
    }
    (e = e || {}), (t = t || {});
    var o,
        r = Object.create(null),
        i = [];
    for (var a in e) a in t ? i.length && ((r[a] = i), (i = [])) : i.push(a);
    var u = {};
    for (var s in t) {
        if (r[s])
            for (o = 0; o < r[s].length; o++) {
                var l = r[s][o];
                u[r[s][o]] = n(l);
            }
        u[s] = n(s);
    }
    for (o = 0; o < i.length; o++) u[i[o]] = n(i[o]);
    return u;
}
function a(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}

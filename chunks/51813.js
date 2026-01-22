n.d(t, {
    dw: () => o,
    p7: () => i,
    qX: () => l,
});
var r = n(64700);
function i(e, t) {
    var n = function (e) {
            return t && (0, r.isValidElement)(e) ? t(e) : e;
        },
        i = Object.create(null);
    return (
        e &&
            r.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                i[e.key] = n(e);
            }),
        i
    );
}
function a(e, t) {
    function n(n) {
        return n in t ? t[n] : e[n];
    }
    (e = e || {}), (t = t || {});
    var r,
        i = Object.create(null),
        a = [];
    for (var s in e) s in t ? a.length && ((i[s] = a), (a = [])) : a.push(s);
    var o = {};
    for (var l in t) {
        if (i[l])
            for (r = 0; r < i[l].length; r++) {
                var c = i[l][r];
                o[i[l][r]] = n(c);
            }
        o[l] = n(l);
    }
    for (r = 0; r < a.length; r++) o[a[r]] = n(a[r]);
    return o;
}
function s(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}
function o(e, t) {
    return i(e.children, function (n) {
        return (0, r.cloneElement)(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: s(n, "appear", e),
            enter: s(n, "enter", e),
            exit: s(n, "exit", e),
        });
    });
}
function l(e, t, n) {
    var o = i(e.children),
        l = a(t, o);
    return (
        Object.keys(l).forEach(function (i) {
            var a = l[i];
            if ((0, r.isValidElement)(a)) {
                var c = i in t,
                    u = i in o,
                    d = t[i],
                    f = (0, r.isValidElement)(d) && !d.props.in;
                u && (!c || f)
                    ? (l[i] = (0, r.cloneElement)(a, {
                          onExited: n.bind(null, a),
                          in: !0,
                          exit: s(a, "exit", e),
                          enter: s(a, "enter", e),
                      }))
                    : u || !c || f
                      ? u &&
                        c &&
                        (0, r.isValidElement)(d) &&
                        (l[i] = (0, r.cloneElement)(a, {
                            onExited: n.bind(null, a),
                            in: d.props.in,
                            exit: s(a, "exit", e),
                            enter: s(a, "enter", e),
                        }))
                      : (l[i] = (0, r.cloneElement)(a, { in: !1 }));
            }
        }),
        l
    );
}

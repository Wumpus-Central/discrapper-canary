r.d(n, {
    Kg: function () {
        return l;
    },
    Rp: function () {
        return u;
    },
    n: function () {
        return a;
    }
});
var i = r(192379);
function a(e, n) {
    var r = function (e) {
            return n && (0, i.isValidElement)(e) ? n(e) : e;
        },
        a = Object.create(null);
    return (
        e &&
            i.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                a[e.key] = r(e);
            }),
        a
    );
}
function o(e, n) {
    function r(r) {
        return r in n ? n[r] : e[r];
    }
    (e = e || {}), (n = n || {});
    var i,
        a = Object.create(null),
        o = [];
    for (var s in e) s in n ? o.length && ((a[s] = o), (o = [])) : o.push(s);
    var l = {};
    for (var u in n) {
        if (a[u])
            for (i = 0; i < a[u].length; i++) {
                var c = a[u][i];
                l[a[u][i]] = r(c);
            }
        l[u] = r(u);
    }
    for (i = 0; i < o.length; i++) l[o[i]] = r(o[i]);
    return l;
}
function s(e, n, r) {
    return null != r[n] ? r[n] : e.props[n];
}
function l(e, n) {
    return a(e.children, function (r) {
        return (0, i.cloneElement)(r, {
            onExited: n.bind(null, r),
            in: !0,
            appear: s(r, 'appear', e),
            enter: s(r, 'enter', e),
            exit: s(r, 'exit', e)
        });
    });
}
function u(e, n, r) {
    var l = a(e.children),
        u = o(n, l);
    return (
        Object.keys(u).forEach(function (a) {
            var o = u[a];
            if ((0, i.isValidElement)(o)) {
                var c = a in n,
                    d = a in l,
                    f = n[a],
                    p = (0, i.isValidElement)(f) && !f.props.in;
                d && (!c || p)
                    ? (u[a] = (0, i.cloneElement)(o, {
                          onExited: r.bind(null, o),
                          in: !0,
                          exit: s(o, 'exit', e),
                          enter: s(o, 'enter', e)
                      }))
                    : d || !c || p
                      ? d &&
                        c &&
                        (0, i.isValidElement)(f) &&
                        (u[a] = (0, i.cloneElement)(o, {
                            onExited: r.bind(null, o),
                            in: f.props.in,
                            exit: s(o, 'exit', e),
                            enter: s(o, 'enter', e)
                        }))
                      : (u[a] = (0, i.cloneElement)(o, { in: !1 }));
            }
        }),
        u
    );
}

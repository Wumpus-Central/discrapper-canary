n.d(t, {
    Kg: () => s,
    Rp: () => l,
    n: () => i
});
var r = n(192379);
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
function o(e, t) {
    function n(n) {
        return n in t ? t[n] : e[n];
    }
    (e = e || {}), (t = t || {});
    var r,
        i = Object.create(null),
        o = [];
    for (var a in e) a in t ? o.length && ((i[a] = o), (o = [])) : o.push(a);
    var s = {};
    for (var l in t) {
        if (i[l])
            for (r = 0; r < i[l].length; r++) {
                var c = i[l][r];
                s[i[l][r]] = n(c);
            }
        s[l] = n(l);
    }
    for (r = 0; r < o.length; r++) s[o[r]] = n(o[r]);
    return s;
}
function a(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}
function s(e, t) {
    return i(e.children, function (n) {
        return (0, r.cloneElement)(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: a(n, 'appear', e),
            enter: a(n, 'enter', e),
            exit: a(n, 'exit', e)
        });
    });
}
function l(e, t, n) {
    var s = i(e.children),
        l = o(t, s);
    return (
        Object.keys(l).forEach(function (i) {
            var o = l[i];
            if ((0, r.isValidElement)(o)) {
                var c = i in t,
                    u = i in s,
                    d = t[i],
                    f = (0, r.isValidElement)(d) && !d.props.in;
                u && (!c || f)
                    ? (l[i] = (0, r.cloneElement)(o, {
                          onExited: n.bind(null, o),
                          in: !0,
                          exit: a(o, 'exit', e),
                          enter: a(o, 'enter', e)
                      }))
                    : u || !c || f
                      ? u &&
                        c &&
                        (0, r.isValidElement)(d) &&
                        (l[i] = (0, r.cloneElement)(o, {
                            onExited: n.bind(null, o),
                            in: d.props.in,
                            exit: a(o, 'exit', e),
                            enter: a(o, 'enter', e)
                        }))
                      : (l[i] = (0, r.cloneElement)(o, { in: !1 }));
            }
        }),
        l
    );
}

"use strict";
n.d(t, { dw: () => a, p7: () => i, qX: () => o });
var r = n(64700);
function i(e, t) {
    var n = Object.create(null);
    return (
        e &&
            r.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                n[e.key] = t && (0, r.isValidElement)(e) ? t(e) : e;
            }),
        n
    );
}
function s(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}
function a(e, t) {
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
function o(e, t, n) {
    var a = i(e.children),
        o = (function (e, t) {
            function n(n) {
                return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
                i = Object.create(null),
                s = [];
            for (var a in e) a in t ? s.length && ((i[a] = s), (s = [])) : s.push(a);
            var o = {};
            for (var l in t) {
                if (i[l])
                    for (r = 0; r < i[l].length; r++) {
                        var u = i[l][r];
                        o[i[l][r]] = n(u);
                    }
                o[l] = n(l);
            }
            for (r = 0; r < s.length; r++) o[s[r]] = n(s[r]);
            return o;
        })(t, a);
    return (
        Object.keys(o).forEach(function (i) {
            var l = o[i];
            if ((0, r.isValidElement)(l)) {
                var u = i in t,
                    d = i in a,
                    c = t[i],
                    _ = (0, r.isValidElement)(c) && !c.props.in;
                d && (!u || _)
                    ? (o[i] = (0, r.cloneElement)(l, {
                          onExited: n.bind(null, l),
                          in: !0,
                          exit: s(l, "exit", e),
                          enter: s(l, "enter", e),
                      }))
                    : d || !u || _
                      ? d &&
                        u &&
                        (0, r.isValidElement)(c) &&
                        (o[i] = (0, r.cloneElement)(l, {
                            onExited: n.bind(null, l),
                            in: c.props.in,
                            exit: s(l, "exit", e),
                            enter: s(l, "enter", e),
                        }))
                      : (o[i] = (0, r.cloneElement)(l, { in: !1 }));
            }
        }),
        o
    );
}

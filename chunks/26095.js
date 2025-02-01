var i = n(165566),
    r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    a = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    s = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    o = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    l = {};
function u(e) {
    return i.isMemo(e) ? o : l[e.$$typeof] || r;
}
(l[i.ForwardRef] = s), (l[i.Memo] = o);
var c = Object.defineProperty,
    d = Object.getOwnPropertyNames,
    f = Object.getOwnPropertySymbols,
    _ = Object.getOwnPropertyDescriptor,
    p = Object.getPrototypeOf,
    h = Object.prototype;
function m(e, t, n) {
    if ('string' != typeof t) {
        if (h) {
            var i = p(t);
            i && i !== h && m(e, i, n);
        }
        var r = d(t);
        f && (r = r.concat(f(t)));
        for (var s = u(e), o = u(t), l = 0; l < r.length; ++l) {
            var g = r[l];
            if (!a[g] && !(n && n[g]) && !(o && o[g]) && !(s && s[g])) {
                var E = _(t, g);
                try {
                    c(e, g, E);
                } catch (e) {}
            }
        }
    }
    return e;
}
e.exports = m;

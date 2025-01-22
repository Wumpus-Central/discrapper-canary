var i = r(165566),
    a = {
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
    o = {
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
    l = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    u = {};
function c(e) {
    return i.isMemo(e) ? l : u[e.$$typeof] || a;
}
(u[i.ForwardRef] = s), (u[i.Memo] = l);
var d = Object.defineProperty,
    f = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    h = Object.getOwnPropertyDescriptor,
    _ = Object.getPrototypeOf,
    m = Object.prototype;
function g(e, n, r) {
    if ('string' != typeof n) {
        if (m) {
            var i = _(n);
            i && i !== m && g(e, i, r);
        }
        var a = f(n);
        p && (a = a.concat(p(n)));
        for (var s = c(e), l = c(n), u = 0; u < a.length; ++u) {
            var E = a[u];
            if (!o[E] && !(r && r[E]) && !(l && l[E]) && !(s && s[E])) {
                var v = h(n, E);
                try {
                    d(e, E, v);
                } catch (e) {}
            }
        }
    }
    return e;
}
e.exports = g;

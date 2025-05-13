var t = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    n = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        arguments: !0,
        arity: !0
    },
    r = 'function' == typeof Object.getOwnPropertySymbols;
e.exports = function (e, i, a) {
    if ('string' != typeof i) {
        var o = Object.getOwnPropertyNames(i);
        r && (o = o.concat(Object.getOwnPropertySymbols(i)));
        for (var s = 0; s < o.length; ++s)
            if (!t[o[s]] && !n[o[s]] && (!a || !a[o[s]]))
                try {
                    e[o[s]] = i[o[s]];
                } catch (e) {}
    }
    return e;
};

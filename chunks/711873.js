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
e.exports = function (e, i, o) {
    if ('string' != typeof i) {
        var a = Object.getOwnPropertyNames(i);
        r && (a = a.concat(Object.getOwnPropertySymbols(i)));
        for (var s = 0; s < a.length; ++s)
            if (!t[a[s]] && !n[a[s]] && (!o || !o[a[s]]))
                try {
                    e[a[s]] = i[a[s]];
                } catch (e) {}
    }
    return e;
};

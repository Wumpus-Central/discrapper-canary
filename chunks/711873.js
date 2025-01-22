var n = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    r = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        arguments: !0,
        arity: !0
    },
    i = 'function' == typeof Object.getOwnPropertySymbols;
e.exports = function (e, a, o) {
    if ('string' != typeof a) {
        var s = Object.getOwnPropertyNames(a);
        i && (s = s.concat(Object.getOwnPropertySymbols(a)));
        for (var l = 0; l < s.length; ++l)
            if (!n[s[l]] && !r[s[l]] && (!o || !o[s[l]]))
                try {
                    e[s[l]] = a[s[l]];
                } catch (e) {}
    }
    return e;
};

var t = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
    },
    n = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        arguments: !0,
        arity: !0,
    },
    r = "function" == typeof Object.getOwnPropertySymbols;
e.exports = function (e, i, a) {
    if ("string" != typeof i) {
        var s = Object.getOwnPropertyNames(i);
        r && (s = s.concat(Object.getOwnPropertySymbols(i)));
        for (var o = 0; o < s.length; ++o)
            if (!t[s[o]] && !n[s[o]] && (!a || !a[s[o]]))
                try {
                    e[s[o]] = i[s[o]];
                } catch (e) {}
    }
    return e;
};

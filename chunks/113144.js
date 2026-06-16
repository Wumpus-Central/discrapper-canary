"use strict";
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
    n = { name: !0, length: !0, prototype: !0, caller: !0, arguments: !0, arity: !0 },
    i = "function" == typeof Object.getOwnPropertySymbols;
e.exports = function (e, r, s) {
    if ("string" != typeof r) {
        var a = Object.getOwnPropertyNames(r);
        i && (a = a.concat(Object.getOwnPropertySymbols(r)));
        for (var o = 0; o < a.length; ++o)
            if (!t[a[o]] && !n[a[o]] && (!s || !s[a[o]]))
                try {
                    e[a[o]] = r[a[o]];
                } catch (e) {}
    }
    return e;
};

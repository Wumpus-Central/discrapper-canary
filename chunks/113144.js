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
    r = { name: !0, length: !0, prototype: !0, caller: !0, arguments: !0, arity: !0 },
    n = "function" == typeof Object.getOwnPropertySymbols;
e.exports = function (e, o, i) {
    if ("string" != typeof o) {
        var a = Object.getOwnPropertyNames(o);
        n && (a = a.concat(Object.getOwnPropertySymbols(o)));
        for (var s = 0; s < a.length; ++s)
            if (!t[a[s]] && !r[a[s]] && (!i || !i[a[s]]))
                try {
                    e[a[s]] = o[a[s]];
                } catch (e) {}
    }
    return e;
};

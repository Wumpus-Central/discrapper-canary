"use strict";
var n = r(3528),
    i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
    o = Object.prototype.toString,
    a = Array.prototype.concat,
    s = r(207001),
    l = r(473560)(),
    u = function (e, t, r, n) {
        if (t in e) {
            if (!0 === n) {
                if (e[t] === r) return;
            } else if ("function" != typeof n || "[object Function]" !== o.call(n) || !n()) return;
        }
        l ? s(e, t, r, !0) : s(e, t, r);
    },
    c = function (e, t) {
        var r = arguments.length > 2 ? arguments[2] : {},
            o = n(t);
        i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
        for (var s = 0; s < o.length; s += 1) u(e, o[s], t[o[s]], r[o[s]]);
    };
(c.supportsDescriptors = !!l), (e.exports = c);

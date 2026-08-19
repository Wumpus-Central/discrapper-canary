"use strict";
var n = r(3528),
    o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
    i = Object.prototype.toString,
    a = Array.prototype.concat,
    s = r(207001),
    l = r(473560)(),
    u = function (e, t, r, n) {
        if (t in e) {
            if (!0 === n) {
                if (e[t] === r) return;
            } else if ("function" != typeof n || "[object Function]" !== i.call(n) || !n()) return;
        }
        l ? s(e, t, r, !0) : s(e, t, r);
    },
    c = function (e, t) {
        var r = arguments.length > 2 ? arguments[2] : {},
            i = n(t);
        o && (i = a.call(i, Object.getOwnPropertySymbols(t)));
        for (var s = 0; s < i.length; s += 1) u(e, i[s], t[i[s]], r[i[s]]);
    };
(c.supportsDescriptors = !!l), (e.exports = c);

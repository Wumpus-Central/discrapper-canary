"use strict";
var r = n(3528),
    i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
    s = Object.prototype.toString,
    a = Array.prototype.concat,
    o = n(207001),
    l = n(473560)(),
    u = function (e, t, n, r) {
        if (t in e) {
            if (!0 === r) {
                if (e[t] === n) return;
            } else if ("function" != typeof r || "[object Function]" !== s.call(r) || !r()) return;
        }
        l ? o(e, t, n, !0) : o(e, t, n);
    },
    d = function (e, t) {
        var n = arguments.length > 2 ? arguments[2] : {},
            s = r(t);
        i && (s = a.call(s, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < s.length; o += 1) u(e, s[o], t[s[o]], n[s[o]]);
    };
(d.supportsDescriptors = !!l), (e.exports = d);

"use strict";
var i = n(3528),
    r = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
    s = Object.prototype.toString,
    a = Array.prototype.concat,
    o = n(207001),
    l = n(473560)(),
    u = function (e, t, n, i) {
        if (t in e) {
            if (!0 === i) {
                if (e[t] === n) return;
            } else if ("function" != typeof i || "[object Function]" !== s.call(i) || !i()) return;
        }
        l ? o(e, t, n, !0) : o(e, t, n);
    },
    c = function (e, t) {
        var n = arguments.length > 2 ? arguments[2] : {},
            s = i(t);
        r && (s = a.call(s, Object.getOwnPropertySymbols(t)));
        for (var o = 0; o < s.length; o += 1) u(e, s[o], t[s[o]], n[s[o]]);
    };
(c.supportsDescriptors = !!l), (e.exports = c);

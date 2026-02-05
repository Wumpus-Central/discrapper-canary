"use strict";
var r = n(221015),
    i = n(93714),
    a = n(250594),
    s = n(503199),
    o = function (e) {
        var t = 1 === e;
        return function (n, o, l) {
            for (var u, c = a(n), d = i(c), _ = s(d), f = r(o, l); _-- > 0; )
                if (f((u = d[_]), _, c))
                    switch (e) {
                        case 0:
                            return u;
                        case 1:
                            return _;
                    }
            return t ? -1 : void 0;
        };
    };
e.exports = { findLast: o(0), findLastIndex: o(1) };

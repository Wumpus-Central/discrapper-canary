"use strict";
var i = n(221015),
    r = n(93714),
    s = n(250594),
    a = n(503199),
    o = function (e) {
        var t = 1 === e;
        return function (n, o, l) {
            for (var u, c = s(n), d = r(c), _ = a(d), f = i(o, l); _-- > 0; )
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

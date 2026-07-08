var n = e(221015),
    o = e(93714),
    i = e(250594),
    a = e(503199),
    u = function (r) {
        var t = 1 === r;
        return function (e, u, c) {
            for (var f, p = i(e), s = o(p), y = a(s), v = n(u, c); y-- > 0; )
                if (v((f = s[y]), y, p))
                    switch (r) {
                        case 0:
                            return f;
                        case 1:
                            return y;
                    }
            return t ? -1 : void 0;
        };
    };
r.exports = { findLast: u(0), findLastIndex: u(1) };

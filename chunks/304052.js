var n = e(221015),
    o = e(93714),
    a = e(250594),
    i = e(503199),
    p = function (r) {
        var t = 1 === r;
        return function (e, p, f) {
            for (var u, y = a(e), c = o(y), s = i(c), d = n(p, f); s-- > 0; )
                if (d((u = c[s]), s, y))
                    switch (r) {
                        case 0:
                            return u;
                        case 1:
                            return s;
                    }
            return t ? -1 : void 0;
        };
    };
r.exports = { findLast: p(0), findLastIndex: p(1) };

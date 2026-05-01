var n = e(221015),
    o = e(93714),
    a = e(250594),
    i = e(503199),
    p = function (r) {
        var t = 1 === r;
        return function (e, p, u) {
            for (var y, f = a(e), c = o(f), s = i(c), d = n(p, u); s-- > 0; )
                if (d((y = c[s]), s, f))
                    switch (r) {
                        case 0:
                            return y;
                        case 1:
                            return s;
                    }
            return t ? -1 : void 0;
        };
    };
r.exports = { findLast: p(0), findLastIndex: p(1) };

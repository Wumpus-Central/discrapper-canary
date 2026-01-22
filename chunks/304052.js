var r = n(221015),
    i = n(93714),
    a = n(250594),
    s = n(503199),
    o = function (e) {
        var t = 1 === e;
        return function (n, o, l) {
            for (var c, u = a(n), d = i(u), f = s(d), p = r(o, l); f-- > 0; )
                if (p((c = d[f]), f, u))
                    switch (e) {
                        case 0:
                            return c;
                        case 1:
                            return f;
                    }
            return t ? -1 : void 0;
        };
    };
e.exports = {
    findLast: o(0),
    findLastIndex: o(1),
};

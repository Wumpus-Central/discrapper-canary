var r = n(48657),
    i = n(79275),
    o = n(527160),
    a = n(914331),
    s = function (e) {
        var t = 1 === e;
        return function (n, s, l) {
            for (var c, u = o(n), d = i(u), f = a(d), _ = r(s, l); f-- > 0; )
                if (_((c = d[f]), f, u))
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
    findLast: s(0),
    findLastIndex: s(1)
};

var r = n(48657),
    i = n(79275),
    a = n(527160),
    o = n(914331),
    s = function (e) {
        var t = 1 === e;
        return function (n, s, l) {
            for (var c, u = a(n), d = i(u), _ = o(d), f = r(s, l); _-- > 0; )
                if (f((c = d[_]), _, u))
                    switch (e) {
                        case 0:
                            return c;
                        case 1:
                            return _;
                    }
            return t ? -1 : void 0;
        };
    };
e.exports = {
    findLast: s(0),
    findLastIndex: s(1)
};

var r = n(221015),
    i = n(410323),
    a = n(93714),
    s = n(250594),
    o = n(503199),
    l = n(250184),
    c = i([].push),
    u = function (e) {
        var t = 1 === e,
            n = 2 === e,
            i = 3 === e,
            u = 4 === e,
            d = 6 === e,
            f = 7 === e,
            p = 5 === e || d;
        return function (_, h, m, g) {
            for (
                var E,
                    b,
                    y = s(_),
                    O = a(y),
                    A = o(O),
                    v = r(h, m),
                    S = 0,
                    I = g || l,
                    T = t ? I(_, A) : n || f ? I(_, 0) : void 0;
                A > S;
                S++
            )
                if ((p || S in O) && ((b = v((E = O[S]), S, y)), e))
                    if (t) T[S] = b;
                    else if (b)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return E;
                            case 6:
                                return S;
                            case 2:
                                c(T, E);
                        }
                    else
                        switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                c(T, E);
                        }
            return d ? -1 : i || u ? u : T;
        };
    };
e.exports = {
    forEach: u(0),
    map: u(1),
    filter: u(2),
    some: u(3),
    every: u(4),
    find: u(5),
    findIndex: u(6),
    filterReject: u(7),
};

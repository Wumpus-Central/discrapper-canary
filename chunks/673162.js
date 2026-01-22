var n = e(241091),
    o = e(675879),
    s = e(556598),
    i = e(529030),
    u = e(794779),
    c = e(107532),
    a = o([].push),
    f = function (t) {
        var r = 1 === t,
            e = 2 === t,
            o = 3 === t,
            f = 4 === t,
            p = 6 === t,
            l = 7 === t,
            v = 5 === t || p;
        return function (y, h, x, d) {
            for (
                var g,
                    b,
                    m = i(y),
                    S = s(m),
                    w = u(S),
                    O = n(h, x),
                    j = 0,
                    A = d || c,
                    E = r ? A(y, w) : e || l ? A(y, 0) : void 0;
                w > j;
                j++
            )
                if ((v || j in S) && ((b = O((g = S[j]), j, m)), t))
                    if (r) E[j] = b;
                    else if (b)
                        switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return g;
                            case 6:
                                return j;
                            case 2:
                                a(E, g);
                        }
                    else
                        switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                a(E, g);
                        }
            return p ? -1 : o || f ? f : E;
        };
    };
t.exports = {
    forEach: f(0),
    map: f(1),
    filter: f(2),
    some: f(3),
    every: f(4),
    find: f(5),
    findIndex: f(6),
    filterReject: f(7),
};

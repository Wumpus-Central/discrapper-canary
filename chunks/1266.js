var e = r(48657),
    o = r(79275),
    i = r(527160),
    u = r(914331),
    c = function (t) {
        var n = 1 === t;
        return function (r, c, a) {
            for (var f, s = i(r), l = o(s), p = u(l), d = e(c, a); p-- > 0; )
                if (d((f = l[p]), p, s))
                    switch (t) {
                        case 0:
                            return f;
                        case 1:
                            return p;
                    }
            return n ? -1 : void 0;
        };
    };
t.exports = {
    findLast: c(0),
    findLastIndex: c(1)
};

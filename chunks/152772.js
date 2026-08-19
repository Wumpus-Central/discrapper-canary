"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (e, t, r) {
        let n = 0,
            o = e.length;
        for (; o > 0; ) {
            let i = (o / 2) | 0,
                a = n + i;
            0 >= r(e[a], t) ? ((n = ++a), (o -= i + 1)) : (o = i);
        }
        return n;
    });

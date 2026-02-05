"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (e, t, n) {
        let r = 0,
            i = e.length;
        for (; i > 0; ) {
            let a = (i / 2) | 0,
                s = r + a;
            0 >= n(e[s], t) ? ((r = ++s), (i -= a + 1)) : (i = a);
        }
        return r;
    });

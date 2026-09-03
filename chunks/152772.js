Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (e, t, r) {
        let n = 0,
            i = e.length;
        for (; i > 0; ) {
            let o = (i / 2) | 0,
                a = n + o;
            0 >= r(e[a], t) ? ((n = ++a), (i -= o + 1)) : (i = o);
        }
        return n;
    });

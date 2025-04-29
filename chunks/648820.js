n.d(t, { M: () => i });
let r = (e) => {
        let t,
            n = new Set(),
            r = (e, r) => {
                let i = 'function' == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    (t = (null != r ? r : 'object' != typeof i || null === i) ? i : Object.assign({}, t, i)), n.forEach((n) => n(t, e));
                }
            },
            i = () => t,
            a = {
                setState: r,
                getState: i,
                getInitialState: () => o,
                subscribe: (e) => (n.add(e), () => n.delete(e))
            },
            o = (t = e(r, i, a));
        return a;
    },
    i = (e) => (e ? r(e) : r);

n.d(t, { M: () => r });
let i = (e) => {
        let t;
        let n = new Set(),
            i = (e, i) => {
                let r = 'function' == typeof e ? e(t) : e;
                if (!Object.is(r, t)) {
                    let e = t;
                    (t = (null != i ? i : 'object' != typeof r || null === r) ? r : Object.assign({}, t, r)), n.forEach((n) => n(t, e));
                }
            },
            r = () => t,
            a = {
                setState: i,
                getState: r,
                getInitialState: () => s,
                subscribe: (e) => (n.add(e), () => n.delete(e))
            },
            s = (t = e(i, r, a));
        return a;
    },
    r = (e) => (e ? i(e) : i);

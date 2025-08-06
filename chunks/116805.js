n.d(t, { s: () => o });
let r = (e, t) => ({
        x: e.x - t.x,
        y: e.y - t.y
    }),
    i = (e) => {
        let t = e.getInitialClientOffset(),
            n = e.getInitialSourceClientOffset();
        return null === t || null === n
            ? {
                  x: 0,
                  y: 0
              }
            : r(t, n);
    },
    o = (e, t) => {
        let n = e.getClientOffset();
        if (null === n) return null;
        if (!t.current || !t.current.getBoundingClientRect) return r(n, i(e));
        let o = t.current.getBoundingClientRect();
        return r(n, {
            x: o.width / 2,
            y: o.height / 2
        });
    };

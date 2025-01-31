n.d(t, { s: () => a });
let i = (e, t) => ({
        x: e.x - t.x,
        y: e.y - t.y
    }),
    r = (e) => {
        let t = e.getInitialClientOffset(),
            n = e.getInitialSourceClientOffset();
        return null === t || null === n
            ? {
                  x: 0,
                  y: 0
              }
            : i(t, n);
    },
    a = (e, t) => {
        let n = e.getClientOffset();
        if (null === n) return null;
        if (!t.current || !t.current.getBoundingClientRect) return i(n, r(e));
        let a = t.current.getBoundingClientRect();
        return i(n, {
            x: a.width / 2,
            y: a.height / 2
        });
    };

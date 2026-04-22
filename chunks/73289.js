"use strict";
n.d(t, { D: () => i });
let r = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
    i = (e, t) => {
        let n = e.getClientOffset();
        if (null === n) return null;
        if (!t.current || !t.current.getBoundingClientRect) {
            let t, i;
            return r(
                n,
                ((t = e.getInitialClientOffset()),
                (i = e.getInitialSourceClientOffset()),
                null === t || null === i ? { x: 0, y: 0 } : r(t, i)),
            );
        }
        let i = t.current.getBoundingClientRect();
        return r(n, { x: i.width / 2, y: i.height / 2 });
    };

let i = new Map();
n.d(
    t,
    {},
    {
        T: function (e, t, n) {
            let r = i.get(e);
            if (null != r) for (let e of r) e(t, n);
        },
        e: function (e, t) {
            let n = i.get(e);
            return (null == n && ((n = new Set()), i.set(e, n)), n.add(t), () => n?.delete(t));
        },
    },
);

let t = new Set();
l.d(
    s,
    {},
    {
        Y: function (e) {
            return (
                t.add(e),
                () => {
                    t.delete(e);
                }
            );
        },
        v: function (e) {
            if (0 !== t.size) for (let s of t) s(e);
        },
    },
);

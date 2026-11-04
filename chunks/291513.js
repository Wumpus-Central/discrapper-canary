let n = new WeakMap();
r.d(
    t,
    {},
    {
        S: n,
        h: function (e, t) {
            let r = n.get(e);
            if (!r) throw Error("Unknown slider state");
            return `${r.id}-${t}`;
        },
    },
);

let i = new WeakMap(),
    r = new Map();
n.d(
    t,
    {},
    {
        $9: function (e) {
            r.delete(e);
        },
        M7: function (e, t) {
            r.set(e, t);
        },
        Yt: function (e, t) {
            i.set(e, t);
        },
        fl: function (e) {
            return r.get(e) ?? null;
        },
        lw: function (e) {
            return i.get(e) ?? null;
        },
    },
);

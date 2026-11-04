var i = d(768611),
    e = {},
    c = new Set();
function a(l) {
    return (
        c.add(l),
        () => {
            c.delete(l);
        }
    );
}
function s() {
    return e;
}
d.d(
    t,
    {},
    {
        n: function () {
            return (0, i.i)(a, s);
        },
        t: function (l) {
            for (let t of ((e = l), c)) t();
        },
    },
);

n.d(t, {
    A: () => l,
    M: () => s,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(266341);
let s = 6,
    l = (e) => {
        let { columns: t = 3, children: n } = e,
            i = Math.max(1, Math.min(s, Math.floor(t)));
        return (0, r.jsx)("div", {
            className: a()(o.grid, o["columns".concat(i)]),
            children: n,
        });
    };

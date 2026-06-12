a.d(s, { A: () => L, V: () => l });
var c,
    t = a(627968);
a(64700);
var n = a(503698),
    p = a.n(n),
    d = a(486020),
    e = a(371794),
    r = a(512038),
    l = (((c = {})[(c.SMALL = 40)] = "SMALL"), (c[(c.MEDIUM = 66)] = "MEDIUM"), (c[(c.LARGE = 128)] = "LARGE"), c);
let A = { 40: r.EX, 66: r.Y, 128: r.as },
    L = (i) => {
        let s,
            { application: a, size: c, asset: n, className: l } = i;
        return (
            (s = null != n ? (0, e.YE)(a.id, n, c) : d.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: c })),
            (0, t.jsx)("img", { alt: "", src: s, className: p()(r.Kk, A[c], l) })
        );
    };

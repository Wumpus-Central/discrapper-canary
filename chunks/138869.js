i.d(a, { A: () => A, V: () => p });
var e,
    t = i(627968);
i(64700);
var l = i(503698),
    c = i.n(l),
    n = i(486020),
    r = i(371794),
    d = i(512038),
    p = (((e = {})[(e.SMALL = 40)] = "SMALL"), (e[(e.MEDIUM = 66)] = "MEDIUM"), (e[(e.LARGE = 128)] = "LARGE"), e);
let o = { 40: d.EX, 66: d.Y, 128: d.as },
    A = (s) => {
        let a,
            { application: i, size: e, asset: l, className: p } = s;
        return (
            (a = null != l ? (0, r.YE)(i.id, l, e) : n.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: e })),
            (0, t.jsx)("img", { alt: "", src: a, className: c()(d.Kk, o[e], p) })
        );
    };

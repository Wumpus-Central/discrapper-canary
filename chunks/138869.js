s.d(c, { A: () => u, V: () => l });
var a,
    n = s(627968);
s(64700);
var t = s(503698),
    p = s.n(t),
    d = s(486020),
    e = s(371794),
    r = s(512038),
    l = (((a = {})[(a.SMALL = 40)] = "SMALL"), (a[(a.MEDIUM = 66)] = "MEDIUM"), (a[(a.LARGE = 128)] = "LARGE"), a);
let o = { 40: r.EX, 66: r.Y, 128: r.as },
    u = function (i) {
        let c,
            { application: s, size: a, asset: t, className: l } = i;
        return (
            (c = null != t ? (0, e.YE)(s.id, t, a) : d.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: a })),
            (0, n.jsx)("img", { alt: "", src: c, className: p()(r.Kk, o[a], l) })
        );
    };

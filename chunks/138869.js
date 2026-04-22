n.d(t, { A: () => p, V: () => c });
var l,
    i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(486020),
    o = n(371794),
    u = n(512038),
    c = (((l = {})[(l.SMALL = 40)] = "SMALL"), (l[(l.MEDIUM = 66)] = "MEDIUM"), (l[(l.LARGE = 128)] = "LARGE"), l);
let d = { 40: u.EX, 66: u.Y, 128: u.as },
    p = (e) => {
        let t,
            { application: n, size: l, asset: a, className: c } = e;
        return (
            (t = null != a ? (0, o.YE)(n.id, a, l) : s.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: l })),
            (0, i.jsx)("img", { alt: "", src: t, className: r()(u.Kk, d[l], c) })
        );
    };

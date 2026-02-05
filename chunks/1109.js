n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(652215),
    s = n(252153);
let o = "1",
    d = "2",
    c = "3",
    u = "4",
    A = "5",
    h = "6",
    _ = "1",
    m = "2",
    p = "3",
    g = "4",
    E = "5",
    f = {
        [l.eMA.ESRB]: { [o]: s._, [d]: s.Zp, [c]: s.N8, [u]: s.L3, [A]: s.Pu, [h]: s.Jd },
        [l.eMA.PEGI]: { [_]: s.k8, [m]: s.Do, [p]: s.$w, [g]: s.yx, [E]: s.pr },
    },
    I = (e) => {
        let { agency: t, rating: n, className: r } = e,
            l = f[t][n];
        return null == l ? null : (0, i.jsx)("div", { className: a()(s.ZL, l, r) });
    };

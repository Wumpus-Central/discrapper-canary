n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(652215),
    s = n(252153);
let o = "1",
    c = "2",
    u = "3",
    d = "4",
    p = "5",
    f = "6",
    h = "1",
    A = "2",
    g = "3",
    m = "4",
    b = "5",
    _ = {
        [a.eMA.ESRB]: {
            [o]: s._,
            [c]: s.Zp,
            [u]: s.N8,
            [d]: s.L3,
            [p]: s.Pu,
            [f]: s.Jd,
        },
        [a.eMA.PEGI]: {
            [h]: s.k8,
            [A]: s.Do,
            [g]: s.$w,
            [m]: s.yx,
            [b]: s.pr,
        },
    },
    E = (e) => {
        let { agency: t, rating: n, className: i } = e,
            a = _[t][n];
        return null == a ? null : (0, r.jsx)("div", { className: l()(s.ZL, a, i) });
    };

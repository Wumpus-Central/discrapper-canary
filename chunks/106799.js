n.d(t, {
    A: () => f,
    B: () => d,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(582754),
    o = n(736653),
    l = n(148259);
let c = n(243884),
    u = n(79825),
    d = (e) => {
        let { customSize: t, shouldUseThemeColor: n = !1, loading: i, className: d } = e,
            f = (0, o.Ay)(),
            p = n && (0, s.qB)(f) ? u : c,
            _ =
                void 0 !== t
                    ? {
                          height: t,
                      }
                    : void 0;
        return (0, r.jsx)("img", {
            className: a()(l.H8, d, {
                [l.Lq]: i,
            }),
            src: p,
            alt: "",
            style: _,
        });
    },
    f = d;

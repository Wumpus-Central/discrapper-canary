"use strict";
a.d(t, { A: () => h, B: () => u });
var r = a(627968),
    l = a(503698),
    n = a.n(l),
    i = a(462887),
    s = a(736653),
    o = a(26680);
let d = a(243884),
    c = a(79825),
    u = (e) => {
        let { customSize: t, shouldUseThemeColor: a = !1, loading: l, className: u } = e,
            h = (0, s.Ay)(),
            p = a && (0, i.q)(h) ? c : d;
        return (0, r.jsx)("img", {
            className: n()(o.H8, u, { [o.Lq]: l }),
            src: p,
            alt: "",
            style: void 0 !== t ? { height: t } : void 0,
        });
    },
    h = u;

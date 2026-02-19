"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(962125),
    o = n(591329);
let c = 16 / 9;
function d(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function u(e, t, n) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            s = Math.floor(i / 2);
        n((t += s)) ? ((e = t + 1), (i -= s + 1)) : (i = s);
    }
    return e;
}
function h(e) {
    let { className: t, children: n, keyExtractor: l, paddingTop: h = 0, paddingBottom: A = 0 } = e,
        [p, g] = s.useState({ width: 0, height: 0 }),
        { width: m, height: _ } = p,
        f = n?.length ?? 0,
        x = m - 16,
        C = _ - (h + A),
        {
            tileStyle: E,
            tileWidth: I,
            rows: b,
            columns: N,
        } = s.useMemo(
            () =>
                (function (e, t, n) {
                    var i, s, l;
                    let r,
                        a,
                        o,
                        h,
                        {
                            rows: A,
                            columns: p,
                            tileWidth: g,
                        } = ((i = e),
                        (s = t),
                        (l = n),
                        (a = Math.floor(s / 25)),
                        (r =
                            i > 25
                                ? u(a, s, (e) => {
                                      let t;
                                      return d(e, s) * (Math.ceil((l - (t = e / c)) / (8 + t)) + 1) > 25;
                                  })
                                : u(a, s, (e) => {
                                      let t;
                                      return d(e, s) * (Math.floor((l - (t = e / c)) / (8 + t)) + 1) >= i;
                                  }) - 1),
                        (h = Math.ceil(i / (o = d(r, s)))),
                        { tileWidth: r, columns: Math.max(1, o), rows: h });
                    return { tileStyle: { width: g }, tileWidth: g, rows: A, columns: p };
                })(f, x, C),
            [f, x, C],
        ),
        S = N + 1,
        T = S * I + (S - 1) * 8 <= m,
        v = Math.floor(I / c) + 8,
        y = Math.max(0, C - v * b) / 2;
    return (0, i.jsx)(a.A, {
        fade: !0,
        className: t,
        listPadding: [h + y, 0, A + y - 8, 8],
        renderRow: function (e) {
            let t = e * N;
            return (0, i.jsx)(
                "div",
                {
                    className: o.nM,
                    children: n?.slice(t, t + N)?.map((e, n) => {
                        let s = t + n;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: E,
                                className: r()(o.Vs, {
                                    [o.E3]: T,
                                    [o.k4]: s >= (b - 1) * N,
                                    [o.Kk]: (s + 1) % N == 0 || s === f - 1,
                                }),
                                children: (0, i.jsx)("div", { className: o.eP, children: e(I) }),
                            },
                            l?.(s) ?? s,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: b,
        rowCountBySection: [b],
        rowHeight: v,
        onResize: g,
    });
}

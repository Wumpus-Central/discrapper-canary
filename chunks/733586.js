n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(962125),
    o = n(455072);
let c = 16 / 9;
function d(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function u(e, t, n) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            a = Math.floor(i / 2);
        n((t += a)) ? ((e = t + 1), (i -= a + 1)) : (i = a);
    }
    return e;
}
function p(e) {
    let { className: t, children: n, keyExtractor: l, paddingTop: p = 0, paddingBottom: h = 0 } = e,
        [_, m] = a.useState({ width: 0, height: 0 }),
        { width: A, height: x } = _,
        f = n?.length ?? 0,
        g = A - 16,
        C = x - (p + h),
        {
            tileStyle: y,
            tileWidth: v,
            rows: E,
            columns: N,
        } = a.useMemo(
            () =>
                (function (e, t, n) {
                    var i, a, l;
                    let s,
                        r,
                        o,
                        p,
                        {
                            rows: h,
                            columns: _,
                            tileWidth: m,
                        } = ((i = e),
                        (a = t),
                        (l = n),
                        (r = Math.floor(a / 25)),
                        (s =
                            i > 25
                                ? u(r, a, (e) => {
                                      let t;
                                      return d(e, a) * (Math.ceil((l - (t = e / c)) / (8 + t)) + 1) > 25;
                                  })
                                : u(r, a, (e) => {
                                      let t;
                                      return d(e, a) * (Math.floor((l - (t = e / c)) / (8 + t)) + 1) >= i;
                                  }) - 1),
                        (p = Math.ceil(i / (o = d(s, a)))),
                        { tileWidth: s, columns: Math.max(1, o), rows: p });
                    return { tileStyle: { width: m }, tileWidth: m, rows: h, columns: _ };
                })(f, g, C),
            [f, g, C],
        ),
        I = N + 1,
        j = I * v + (I - 1) * 8 <= A,
        T = Math.floor(v / c) + 8,
        b = Math.max(0, C - T * E) / 2;
    return (0, i.jsx)(r.A, {
        fade: !0,
        className: t,
        listPadding: [p + b, 0, h + b - 8, 8],
        renderRow: function (e) {
            let t = e * N;
            return (0, i.jsx)(
                "div",
                {
                    className: o.nM,
                    children: n?.slice(t, t + N)?.map((e, n) => {
                        let a = t + n;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: y,
                                className: s()(o.Vs, {
                                    [o.E3]: j,
                                    [o.k4]: a >= (E - 1) * N,
                                    [o.Kk]: (a + 1) % N == 0 || a === f - 1,
                                }),
                                children: (0, i.jsx)("div", { className: o.eP, children: e(v) }),
                            },
                            l?.(a) ?? a,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: E,
        rowCountBySection: [E],
        rowHeight: T,
        onResize: m,
    });
}

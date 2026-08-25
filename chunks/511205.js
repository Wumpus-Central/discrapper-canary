n.d(t, { A: () => h });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(962125),
    o = n(265287);
let c = 16 / 9;
function d(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function u(e, t, n) {
    let i = t - e;
    for (; i > 0; ) {
        let t = e,
            l = Math.floor(i / 2);
        n((t += l)) ? ((e = t + 1), (i -= l + 1)) : (i = l);
    }
    return e;
}
function h(e) {
    let { className: t, children: n, keyExtractor: a, paddingTop: h = 0, paddingBottom: p = 0 } = e,
        [m, A] = l.useState({ width: 0, height: 0 }),
        { width: f, height: x } = m,
        g = n?.length ?? 0,
        C = f - 16,
        y = x - (h + p),
        {
            tileStyle: j,
            tileWidth: I,
            rows: E,
            columns: N,
        } = l.useMemo(
            () =>
                (function (e, t, n) {
                    var i, l, a;
                    let s,
                        r,
                        o,
                        h,
                        {
                            rows: p,
                            columns: m,
                            tileWidth: A,
                        } = ((i = e),
                        (l = t),
                        (a = n),
                        (r = Math.floor(l / 25)),
                        (s =
                            i > 25
                                ? u(r, l, (e) => {
                                      let t;
                                      return d(e, l) * (Math.ceil((a - (t = e / c)) / (8 + t)) + 1) > 25;
                                  })
                                : u(r, l, (e) => {
                                      let t;
                                      return d(e, l) * (Math.floor((a - (t = e / c)) / (8 + t)) + 1) >= i;
                                  }) - 1),
                        (h = Math.ceil(i / (o = d(s, l)))),
                        { tileWidth: s, columns: Math.max(1, o), rows: h });
                    return { tileStyle: { width: A }, tileWidth: A, rows: p, columns: m };
                })(g, C, y),
            [g, C, y],
        ),
        v = N + 1,
        b = v * I + (v - 1) * 8 <= f,
        T = Math.floor(I / c) + 8,
        _ = Math.max(0, y - T * E) / 2;
    return (0, i.jsx)(r.A, {
        fade: !0,
        className: t,
        listPadding: [h + _, 0, p + _ - 8, 8],
        renderRow: function (e) {
            let t = e * N;
            return (0, i.jsx)(
                "div",
                {
                    className: o.nM,
                    children: n?.slice(t, t + N)?.map((e, n) => {
                        let l = t + n;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: j,
                                className: s()(o.Vs, {
                                    [o.E3]: b,
                                    [o.k4]: l >= (E - 1) * N,
                                    [o.Kk]: (l + 1) % N == 0 || l === g - 1,
                                }),
                                children: (0, i.jsx)("div", { className: o.eP, children: e(I) }),
                            },
                            a?.(l) ?? l,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: E,
        rowCountBySection: [E],
        rowHeight: T,
        onResize: A,
    });
}

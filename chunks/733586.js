n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(962125),
    o = n(591329);
let d = 16 / 9;
function c(e, t) {
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
    let { className: t, children: n, keyExtractor: s, paddingTop: h = 0, paddingBottom: A = 0 } = e,
        [g, m] = l.useState({ width: 0, height: 0 }),
        { width: p, height: _ } = g,
        x = n?.length ?? 0,
        f = p - 16,
        E = _ - (h + A),
        {
            tileStyle: C,
            tileWidth: I,
            rows: S,
            columns: b,
        } = l.useMemo(
            () =>
                (function (e, t, n) {
                    var i, l, s;
                    let a,
                        r,
                        o,
                        h,
                        {
                            rows: A,
                            columns: g,
                            tileWidth: m,
                        } = ((i = e),
                        (l = t),
                        (s = n),
                        (r = Math.floor(l / 25)),
                        (a =
                            i > 25
                                ? u(r, l, (e) => {
                                      let t;
                                      return c(e, l) * (Math.ceil((s - (t = e / d)) / (8 + t)) + 1) > 25;
                                  })
                                : u(r, l, (e) => {
                                      let t;
                                      return c(e, l) * (Math.floor((s - (t = e / d)) / (8 + t)) + 1) >= i;
                                  }) - 1),
                        (h = Math.ceil(i / (o = c(a, l)))),
                        { tileWidth: a, columns: Math.max(1, o), rows: h });
                    return { tileStyle: { width: m }, tileWidth: m, rows: A, columns: g };
                })(x, f, E),
            [x, f, E],
        ),
        N = b + 1,
        T = N * I + (N - 1) * 8 <= p,
        j = Math.floor(I / d) + 8,
        v = Math.max(0, E - j * S) / 2;
    return (0, i.jsx)(r.A, {
        fade: !0,
        className: t,
        listPadding: [h + v, 0, A + v - 8, 8],
        renderRow: function (e) {
            let t = e * b;
            return (0, i.jsx)(
                "div",
                {
                    className: o.nM,
                    children: n?.slice(t, t + b)?.map((e, n) => {
                        let l = t + n;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: C,
                                className: a()(o.Vs, {
                                    [o.E3]: T,
                                    [o.k4]: l >= (S - 1) * b,
                                    [o.Kk]: (l + 1) % b == 0 || l === x - 1,
                                }),
                                children: (0, i.jsx)("div", { className: o.eP, children: e(I) }),
                            },
                            s?.(l) ?? l,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: S,
        rowCountBySection: [S],
        rowHeight: j,
        onResize: m,
    });
}

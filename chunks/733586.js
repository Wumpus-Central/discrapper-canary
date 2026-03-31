n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(962125),
    o = n(602096);
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
    let { className: t, children: n, keyExtractor: s, paddingTop: h = 0, paddingBottom: A = 0 } = e,
        [_, m] = l.useState({ width: 0, height: 0 }),
        { width: g, height: p } = _,
        f = n?.length ?? 0,
        x = g - 16,
        E = p - (h + A),
        {
            tileStyle: I,
            tileWidth: C,
            rows: N,
            columns: T,
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
                            columns: _,
                            tileWidth: m,
                        } = ((i = e),
                        (l = t),
                        (s = n),
                        (r = Math.floor(l / 25)),
                        (a =
                            i > 25
                                ? u(r, l, (e) => {
                                      let t;
                                      return d(e, l) * (Math.ceil((s - (t = e / c)) / (8 + t)) + 1) > 25;
                                  })
                                : u(r, l, (e) => {
                                      let t;
                                      return d(e, l) * (Math.floor((s - (t = e / c)) / (8 + t)) + 1) >= i;
                                  }) - 1),
                        (h = Math.ceil(i / (o = d(a, l)))),
                        { tileWidth: a, columns: Math.max(1, o), rows: h });
                    return { tileStyle: { width: m }, tileWidth: m, rows: A, columns: _ };
                })(f, x, E),
            [f, x, E],
        ),
        S = T + 1,
        b = S * C + (S - 1) * 8 <= g,
        y = Math.floor(C / c) + 8,
        v = Math.max(0, E - y * N) / 2;
    return (0, i.jsx)(r.A, {
        fade: !0,
        className: t,
        listPadding: [h + v, 0, A + v - 8, 8],
        renderRow: function (e) {
            let t = e * T;
            return (0, i.jsx)(
                "div",
                {
                    className: o.nM,
                    children: n?.slice(t, t + T)?.map((e, n) => {
                        let l = t + n;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: I,
                                className: a()(o.Vs, {
                                    [o.E3]: b,
                                    [o.k4]: l >= (N - 1) * T,
                                    [o.Kk]: (l + 1) % T == 0 || l === f - 1,
                                }),
                                children: (0, i.jsx)("div", { className: o.eP, children: e(C) }),
                            },
                            s?.(l) ?? l,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: N,
        rowCountBySection: [N],
        rowHeight: y,
        onResize: m,
    });
}

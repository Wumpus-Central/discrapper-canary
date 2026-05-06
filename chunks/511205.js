n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
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
            l = Math.floor(i / 2);
        n((t += l)) ? ((e = t + 1), (i -= l + 1)) : (i = l);
    }
    return e;
}
function h(e) {
    let { className: t, children: n, keyExtractor: a, paddingTop: h = 0, paddingBottom: p = 0 } = e,
        [m, A] = l.useState({ width: 0, height: 0 }),
        { width: x, height: g } = m,
        C = n?.length ?? 0,
        f = x - 16,
        E = g - (h + p),
        {
            tileStyle: y,
            tileWidth: N,
            rows: j,
            columns: v,
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
                })(C, f, E),
            [C, f, E],
        ),
        I = v + 1,
        T = I * N + (I - 1) * 8 <= x,
        _ = Math.floor(N / c) + 8,
        R = Math.max(0, E - _ * j) / 2;
    return (0, i.jsx)(r.A, {
        fade: !0,
        className: t,
        listPadding: [h + R, 0, p + R - 8, 8],
        renderRow: function (e) {
            let t = e * v;
            return (0, i.jsx)(
                "div",
                {
                    className: o.nM,
                    children: n?.slice(t, t + v)?.map((e, n) => {
                        let l = t + n;
                        return (0, i.jsx)(
                            "div",
                            {
                                style: y,
                                className: s()(o.Vs, {
                                    [o.E3]: T,
                                    [o.k4]: l >= (j - 1) * v,
                                    [o.Kk]: (l + 1) % v == 0 || l === C - 1,
                                }),
                                children: (0, i.jsx)("div", { className: o.eP, children: e(N) }),
                            },
                            a?.(l) ?? l,
                        );
                    }),
                },
                e,
            );
        },
        rowCount: j,
        rowCountBySection: [j],
        rowHeight: _,
        onResize: A,
    });
}

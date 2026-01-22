n.d(t, { A: () => f }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(962125),
    o = n(591329);
let c = 16 / 9;
function u(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function d(e, t, n) {
    let r = t - e;
    for (; r > 0; ) {
        let t = e,
            l = Math.floor(r / 2);
        n((t += l)) ? ((e = t + 1), (r -= l + 1)) : (r = l);
    }
    return e;
}
function f(e) {
    var t;
    let { className: n, children: i, keyExtractor: f, paddingTop: p = 0, paddingBottom: h = 0 } = e,
        [b, g] = l.useState({
            width: 0,
            height: 0,
        }),
        { width: m, height: A } = b,
        y = null != (t = null == i ? void 0 : i.length) ? t : 0,
        O = m - 16,
        j = A - (p + h),
        {
            tileStyle: v,
            tileWidth: x,
            rows: E,
            columns: _,
        } = l.useMemo(
            () =>
                (function (e, t, n) {
                    var r, l, i;
                    let a,
                        s,
                        o,
                        f,
                        {
                            rows: p,
                            columns: h,
                            tileWidth: b,
                        } = ((r = e),
                        (l = t),
                        (i = n),
                        (s = Math.floor(l / 25)),
                        (a =
                            r > 25
                                ? d(s, l, (e) => {
                                      let t;
                                      return u(e, l) * (Math.ceil((i - (t = e / c)) / (8 + t)) + 1) > 25;
                                  })
                                : d(s, l, (e) => {
                                      let t;
                                      return u(e, l) * (Math.floor((i - (t = e / c)) / (8 + t)) + 1) >= r;
                                  }) - 1),
                        (f = Math.ceil(r / (o = u(a, l)))),
                        {
                            tileWidth: a,
                            columns: Math.max(1, o),
                            rows: f,
                        });
                    return {
                        tileStyle: { width: b },
                        tileWidth: b,
                        rows: p,
                        columns: h,
                    };
                })(y, O, j),
            [y, O, j],
        ),
        C = _ + 1,
        S = C * x + (C - 1) * 8 <= m,
        I = Math.floor(x / c) + 8,
        N = Math.max(0, j - I * E) / 2;
    return (0, r.jsx)(s.A, {
        fade: !0,
        className: n,
        listPadding: [p + N, 0, h + N - 8, 8],
        renderRow: function (e) {
            var t;
            let n = e * _;
            return (0, r.jsx)(
                "div",
                {
                    className: o.nM,
                    children:
                        null == i || null == (t = i.slice(n, n + _))
                            ? void 0
                            : t.map((e, t) => {
                                  var l;
                                  let i = n + t;
                                  return (0, r.jsx)(
                                      "div",
                                      {
                                          style: v,
                                          className: a()(o.Vs, {
                                              [o.E3]: S,
                                              [o.k4]: i >= (E - 1) * _,
                                              [o.Kk]: (i + 1) % _ == 0 || i === y - 1,
                                          }),
                                          children: (0, r.jsx)("div", {
                                              className: o.eP,
                                              children: e(x),
                                          }),
                                      },
                                      null != (l = null == f ? void 0 : f(i)) ? l : i,
                                  );
                              }),
                },
                e,
            );
        },
        rowCount: E,
        rowCountBySection: [E],
        rowHeight: I,
        onResize: g,
    });
}

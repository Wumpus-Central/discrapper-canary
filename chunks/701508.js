n.d(t, {
    A: () => h,
}),
    n(228524);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(582754),
    c = n(397927),
    o = n(736653),
    d = n(611371),
    u = n(262834);

function p(e) {
    let { title: t, betaTag: n, color: a = "text-strong" } = e;
    return (0, l.jsxs)(c.Heading, {
        className: i()(u.DD, u.Zv),
        variant: "display-lg",
        color: a,
        children: [
            t,
            n &&
                (0, l.jsx)(d.A, {
                    className: u.TN,
                }),
        ],
    });
}

function h(e) {
    let { title: t, titleColor: n, description: r, button: d, className: h, children: m, betaTag: b = !1 } = e,
        f = (0, o.Ay)(),
        g = (0, s.Mw)(f),
        x = a.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) =>
                          (0, l.jsx)(
                              p,
                              {
                                  title: e,
                                  betaTag: b,
                                  color: n,
                              },
                              t,
                          ),
                      )
                    : (0, l.jsx)(p, {
                          title: t,
                          betaTag: b,
                          color: n,
                      }),
            [t, b, n],
        );
    return (0, l.jsxs)("div", {
        className: i()(u.kL, h),
        children: [
            (0, l.jsx)("div", {
                className: u.Qs,
                children: (0, l.jsxs)("div", {
                    className: u.FS,
                    children: [
                        x,
                        null != r &&
                            (0, l.jsx)(c.Text, {
                                className: u.h_,
                                variant: "text-md/medium",
                                color: g ? "text-muted" : "text-strong",
                                children: r,
                            }),
                        null != d &&
                            (0, l.jsx)("div", {
                                className: u.UD,
                                children: d,
                            }),
                    ],
                }),
            }),
            m,
        ],
    });
}

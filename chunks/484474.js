n.d(t, { Z: () => m }), n(953529);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(688465),
    u = n(196073);
function p(e) {
    let { title: t, betaTag: n, color: a = "header-primary" } = e;
    return (0, r.jsxs)(o.Heading, {
        className: l()(u.title, u.uppercase),
        variant: "display-lg",
        color: a,
        children: [t, n && (0, r.jsx)(d.Z, { className: u.betaTag })],
    });
}
function m(e) {
    let { title: t, titleColor: n, description: i, button: d, className: m, children: h, betaTag: g = !1 } = e,
        f = (0, c.ZP)(),
        _ = (0, s.wj)(f),
        b = a.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) =>
                          (0, r.jsx)(
                              p,
                              {
                                  title: e,
                                  betaTag: g,
                                  color: n,
                              },
                              t,
                          ),
                      )
                    : (0, r.jsx)(p, {
                          title: t,
                          betaTag: g,
                          color: n,
                      }),
            [t, g, n],
        );
    return (0, r.jsxs)("div", {
        className: l()(u.container, m),
        children: [
            (0, r.jsx)("div", {
                className: u.content,
                children: (0, r.jsxs)("div", {
                    className: u.textContainer,
                    children: [
                        b,
                        null != i &&
                            (0, r.jsx)(o.Text, {
                                className: u.description,
                                variant: "text-md/medium",
                                color: _ ? "text-muted" : "header-primary",
                                children: i,
                            }),
                        null != d &&
                            (0, r.jsx)("div", {
                                className: u.buttonContainer,
                                children: d,
                            }),
                    ],
                }),
            }),
            h,
        ],
    });
}

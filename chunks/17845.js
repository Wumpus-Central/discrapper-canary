n.d(t, { Z: () => m }), n(953529);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(688465),
    u = n(670837);
function p(e) {
    let { title: t, betaTag: n, color: r = "text-strong" } = e;
    return (0, a.jsxs)(o.Heading, {
        className: l()(u.title, u.uppercase),
        variant: "display-lg",
        color: r,
        children: [t, n && (0, a.jsx)(d.Z, { className: u.betaTag })],
    });
}
function m(e) {
    let { title: t, titleColor: n, description: i, button: d, className: m, children: h, betaTag: f = !1 } = e,
        g = (0, c.ZP)(),
        b = (0, s.wj)(g),
        x = r.useMemo(
            () =>
                Array.isArray(t)
                    ? t.map((e, t) =>
                          (0, a.jsx)(
                              p,
                              {
                                  title: e,
                                  betaTag: f,
                                  color: n,
                              },
                              t,
                          ),
                      )
                    : (0, a.jsx)(p, {
                          title: t,
                          betaTag: f,
                          color: n,
                      }),
            [t, f, n],
        );
    return (0, a.jsxs)("div", {
        className: l()(u.container, m),
        children: [
            (0, a.jsx)("div", {
                className: u.content,
                children: (0, a.jsxs)("div", {
                    className: u.textContainer,
                    children: [
                        x,
                        null != i &&
                            (0, a.jsx)(o.Text, {
                                className: u.description,
                                variant: "text-md/medium",
                                color: b ? "text-muted" : "text-strong",
                                children: i,
                            }),
                        null != d &&
                            (0, a.jsx)("div", {
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

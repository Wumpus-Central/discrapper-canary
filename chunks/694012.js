n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(933832),
    a = n(22231),
    o = n(834730),
    d = n(821609),
    c = n(985018),
    u = n(847777);
function m(e) {
    let {
        className: t,
        enabled: n,
        previewCTA: l,
        onPreview: m,
        onToggle: g,
        animateStatus: h,
        firstLine: x,
        secondLine: _,
        disabled: p,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(t, u.TV),
        children: [
            n
                ? (0, i.jsx)(r.A, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: s()(u.nu, { [u.i0]: h }),
                  })
                : (0, i.jsx)(a.R, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: s()(u.Vi, { [u.i0]: h }),
                  }),
            (0, i.jsxs)("div", {
                className: u.A5,
                children: [
                    (0, i.jsx)(o.E, { variant: "text-sm/normal", children: x }),
                    (0, i.jsx)(o.E, { variant: "text-sm/normal", children: _ }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: u.UD,
                children: [
                    null == m
                        ? null
                        : (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: u.jc,
                              children: (0, i.jsx)(d.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: l ?? c.intl.string(c.t["5U0kL8"]),
                                  onClick: m,
                                  disabled: p,
                              }),
                          }),
                    (0, i.jsx)(d.$, {
                        variant: n ? "critical-primary" : "primary",
                        size: "sm",
                        disabled: null == g || !n || p,
                        text: n ? c.intl.string(c.t.R9GHya) : c.intl.string(c.t.JFfins),
                        onClick: g,
                    }),
                ],
            }),
        ],
    });
}

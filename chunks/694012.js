n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(985018),
    c = n(257554);
function o(e) {
    let {
        className: t,
        enabled: n,
        previewCTA: i,
        onPreview: o,
        onToggle: d,
        animateStatus: u,
        firstLine: f,
        secondLine: g,
        disabled: b,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(t, c.TV),
        children: [
            n
                ? (0, r.jsx)(s.A9s, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: l()(c.nu, { [c.i0]: u }),
                  })
                : (0, r.jsx)(s.R2l, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: l()(c.Vi, { [c.i0]: u }),
                  }),
            (0, r.jsxs)("div", {
                className: c.A5,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: f,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: g,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: c.UD,
                children: [
                    null == o
                        ? null
                        : (0, r.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: c.jc,
                              children: (0, r.jsx)(s.Button, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? i : a.intl.string(a.t["5U0kL8"]),
                                  onClick: o,
                                  disabled: b,
                              }),
                          }),
                    (0, r.jsx)(s.Button, {
                        variant: n ? "critical-primary" : "primary",
                        size: "sm",
                        disabled: null == d || !n || b,
                        text: n ? a.intl.string(a.t.R9GHya) : a.intl.string(a.t.JFfins),
                        onClick: d,
                    }),
                ],
            }),
        ],
    });
}

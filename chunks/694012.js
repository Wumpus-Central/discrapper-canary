"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(985018),
    o = n(257554);
function d(e) {
    let {
        className: t,
        enabled: n,
        previewCTA: s,
        onPreview: d,
        onToggle: c,
        animateStatus: u,
        firstLine: m,
        secondLine: g,
        disabled: x,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(t, o.TV),
        children: [
            n
                ? (0, i.jsx)(r.A9s, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: l()(o.nu, { [o.i0]: u }),
                  })
                : (0, i.jsx)(r.R2l, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: l()(o.Vi, { [o.i0]: u }),
                  }),
            (0, i.jsxs)("div", {
                className: o.A5,
                children: [
                    (0, i.jsx)(r.Text, { variant: "text-sm/normal", children: m }),
                    (0, i.jsx)(r.Text, { variant: "text-sm/normal", children: g }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: o.UD,
                children: [
                    null == d
                        ? null
                        : (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: o.jc,
                              children: (0, i.jsx)(r.Button, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: s ?? a.intl.string(a.t["5U0kL8"]),
                                  onClick: d,
                                  disabled: x,
                              }),
                          }),
                    (0, i.jsx)(r.Button, {
                        variant: n ? "critical-primary" : "primary",
                        size: "sm",
                        disabled: null == c || !n || x,
                        text: n ? a.intl.string(a.t.R9GHya) : a.intl.string(a.t.JFfins),
                        onClick: c,
                    }),
                ],
            }),
        ],
    });
}

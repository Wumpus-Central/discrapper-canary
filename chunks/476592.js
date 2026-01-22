n.d(t, { Z: () => c }), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(492917),
    a = n(397927),
    s = n(985018),
    o = n(916874);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: u, dismissible: d = !0 } = e,
        f = l.useCallback(() => {
            null == c || c();
        }, [c]);
    return (0, r.jsxs)("div", {
        className: o.HZ,
        children: [
            (0, r.jsxs)("div", {
                className: o.Be,
                children: [
                    (0, r.jsx)(i.k_4, {
                        alt: "",
                        size: 32,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: t,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-strong",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o.Uo,
                children:
                    null == u
                        ? void 0
                        : u.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  a.Button,
                                  {
                                      text: e.text,
                                      variant: null != (n = e.variant) ? n : "secondary",
                                      onClick: e.onClick,
                                      size: "sm",
                                  },
                                  t,
                              );
                          }),
            }),
            d
                ? (0, r.jsx)(a.DUT, {
                      className: o.b,
                      onClick: f,
                      role: "button",
                      "aria-label": s.intl.string(s.t.WAI6xu),
                      children: (0, r.jsx)(a.PGe, {
                          size: "md",
                          color: "currentColor",
                          className: o.b,
                      }),
                  })
                : null,
        ],
    });
}

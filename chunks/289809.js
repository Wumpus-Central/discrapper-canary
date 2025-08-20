n.d(t, { Z: () => s });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(454585),
    o = n(196209);
function s(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: s },
            },
        } = e,
        c = i.useRef(a.Z.reactParserFor(a.Z.defaultRules));
    return s && (null != t || null != n)
        ? (0, r.jsxs)("div", {
              className: o.container,
              children: [
                  null != t &&
                      (0, r.jsx)(l.X6q, {
                          variant: "heading-sm/semibold",
                          color: "header-secondary",
                          className: o.header,
                          children: t,
                      }),
                  null != n &&
                      (0, r.jsx)(l.Text, {
                          variant: "text-sm/normal",
                          className: o.bodyText,
                          children: c.current(n),
                      }),
              ],
          })
        : null;
}

n.d(t, { Z: () => o });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(454585),
    s = n(196209);
function o(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: o },
            },
        } = e,
        c = i.useRef(a.Z.reactParserFor(a.Z.defaultRules));
    return o && (null != t || null != n)
        ? (0, r.jsxs)("div", {
              className: s.container,
              children: [
                  null != t &&
                      (0, r.jsx)(l.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-secondary",
                          className: s.header,
                          children: t,
                      }),
                  null != n &&
                      (0, r.jsx)(l.Text, {
                          variant: "text-sm/normal",
                          className: s.bodyText,
                          children: c.current(n),
                      }),
              ],
          })
        : null;
}

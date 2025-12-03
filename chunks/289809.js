n.d(t, { Z: () => o });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    a = n(454585),
    s = n(196209);
function o(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: o },
            },
        } = e,
        d = l.useRef(a.Z.reactParserFor(a.Z.defaultRules));
    return o && (null != t || null != n)
        ? (0, r.jsxs)("div", {
              className: s.container,
              children: [
                  null != t &&
                      (0, r.jsx)(i.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: s.header,
                          children: t,
                      }),
                  null != n &&
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          className: s.bodyText,
                          children: d.current(n),
                      }),
              ],
          })
        : null;
}

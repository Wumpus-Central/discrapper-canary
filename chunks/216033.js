n.d(t, { A: () => o });
var l = n(627968),
    a = n(64700),
    r = n(397927),
    i = n(46054),
    s = n(861662),
    d = n(52239);
function o(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: o },
            },
        } = e,
        c = a.useMemo(() => i.A.reactParserFor({ ...i.A.defaultRules, link: s.B }), []);
    return o && (null != t || null != n)
        ? (0, l.jsxs)("div", {
              children: [
                  null != t &&
                      (0, l.jsx)(r.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: d.w,
                          children: t,
                      }),
                  null != n && (0, l.jsx)(r.Text, { variant: "text-sm/normal", className: d.r, children: c(n) }),
              ],
          })
        : null;
}

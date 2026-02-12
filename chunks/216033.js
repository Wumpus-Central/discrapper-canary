n.d(t, { A: () => o });
var l = n(627968),
    i = n(64700),
    a = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(232409);
function o(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: o },
            },
        } = e,
        u = i.useMemo(() => r.A.reactParserFor({ ...r.A.defaultRules, link: s.B }), []);
    return o && (null != t || null != n)
        ? (0, l.jsxs)("div", {
              children: [
                  null != t &&
                      (0, l.jsx)(a.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: d.w,
                          children: t,
                      }),
                  null != n && (0, l.jsx)(a.Text, { variant: "text-sm/normal", className: d.r, children: u(n) }),
              ],
          })
        : null;
}

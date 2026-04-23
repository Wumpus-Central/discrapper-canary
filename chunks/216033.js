n.d(t, { A: () => c });
var l = n(627968),
    a = n(64700),
    i = n(534514),
    r = n(834730),
    s = n(46054),
    d = n(861662),
    o = n(704786);
function c(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: c },
            },
        } = e,
        u = a.useMemo(() => s.A.reactParserFor({ ...s.A.defaultRules, link: d.B }), []);
    return c && (null != t || null != n)
        ? (0, l.jsxs)("div", {
              children: [
                  null != t &&
                      (0, l.jsx)(i.D, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: o.w,
                          children: t,
                      }),
                  null != n &&
                      (0, l.jsx)(r.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: o.r,
                          children: u(n),
                      }),
              ],
          })
        : null;
}

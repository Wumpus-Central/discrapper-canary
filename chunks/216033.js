"use strict";
n.d(t, { A: () => c });
var a = n(627968),
    i = n(64700),
    r = n(534514),
    l = n(834730),
    s = n(46054),
    d = n(861662),
    o = n(704786);
function c(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: c },
            },
        } = e,
        u = i.useMemo(() => s.A.reactParserFor({ ...s.A.defaultRules, link: d.B }), []);
    return c && (null != t || null != n)
        ? (0, a.jsxs)("div", {
              children: [
                  null != t &&
                      (0, a.jsx)(r.D, {
                          variant: "heading-sm/semibold",
                          color: "text-default",
                          className: o.w,
                          children: t,
                      }),
                  null != n &&
                      (0, a.jsx)(l.E, {
                          variant: "text-md/normal",
                          color: "text-subtle",
                          className: o.r,
                          children: u(n),
                      }),
              ],
          })
        : null;
}

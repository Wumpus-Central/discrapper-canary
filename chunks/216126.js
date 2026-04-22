"use strict";
n.d(t, { r: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(885621),
    o = n(359823);
function l(e) {
    let { contents: t, label: n, className: i, color: l = "default" } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              "aria-label": n,
              role: "group",
              className: i,
              children: [
                  null != n
                      ? (0, r.jsx)("div", { className: s()(o.groupLabel, o.hideInteraction, a.jV[l]), children: n })
                      : null,
                  t,
              ],
          });
}

"use strict";
n.d(t, { A: () => s });
var i = n(627968);
let s = n(64700).memo(function (e) {
    let { layout: t, layoutSize: n, className: s, renderWidget: l } = e;
    return null != t
        ? (0, i.jsx)("div", {
              className: s,
              style: { width: n.width, height: n.height },
              children: t.widgets.map((e) => l(e, n)),
          })
        : null;
});

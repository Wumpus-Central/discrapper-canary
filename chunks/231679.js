n.d(t, { A: () => r });
var i = n(627968);
let r = n(64700).memo(function (e) {
    let { layout: t, layoutSize: n, className: r, renderWidget: s } = e;
    return null != t
        ? (0, i.jsx)("div", {
              className: r,
              style: {
                  width: n.width,
                  height: n.height,
              },
              children: t.widgets.map((e) => s(e, n)),
          })
        : null;
});

n.d(t, { Z: () => r });
var i = n(54381);
let r = n(473749).memo(function (e) {
    let { layout: t, layoutSize: n, className: r, renderWidget: o } = e;
    return null != t
        ? (0, i.jsx)("div", {
              className: r,
              style: {
                  width: n.width,
                  height: n.height,
              },
              children: t.widgets.map((e) => o(e, n)),
          })
        : null;
});

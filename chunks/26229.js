n.d(t, { Z: () => s });
var i = n(200651);
let s = n(192379).memo(function (e) {
    let { layout: t, layoutSize: n, className: s, renderWidget: l } = e;
    return null != t
        ? (0, i.jsx)('div', {
              className: s,
              style: {
                  width: n.width,
                  height: n.height
              },
              children: t.widgets.map((e) => l(e, n))
          })
        : null;
});

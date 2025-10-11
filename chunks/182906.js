n.d(t, { Z: () => o }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(558522),
    a = n(568126);
function o(e) {
    let { imageBackground: t, applicationName: n, imageClassName: o, imageNotFoundClassName: s } = e,
        [c, u] = l.useState(!1);
    return "not-found" === t.state || c
        ? (0, i.jsx)("div", {
              className: s,
              children: (0, i.jsx)(r.Z, { className: a.brokenImageIcon }),
          })
        : "loading" === t.state
          ? null
          : (0, i.jsx)("img", {
                alt: n,
                className: o,
                src: t.url,
                onError: () => u(!0),
            });
}

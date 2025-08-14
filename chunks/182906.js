n.d(t, { Z: () => s }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(558522),
    a = n(568126);
function s(e) {
    let { imageBackground: t, applicationName: n, imageClassName: s, imageNotFoundClassName: l } = e,
        [c, u] = i.useState(!1);
    return "not-found" === t.state || c
        ? (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(o.Z, { className: a.brokenImageIcon }),
          })
        : "loading" === t.state
          ? null
          : (0, r.jsx)("img", {
                alt: n,
                className: s,
                src: t.url,
                onError: () => u(!0),
            });
}

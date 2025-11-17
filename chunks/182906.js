n.d(t, { Z: () => s }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(558522),
    o = n(568126);
function s(e) {
    let { imageBackground: t, applicationName: n, imageClassName: s, imageNotFoundClassName: l } = e,
        [c, u] = i.useState(!1);
    return "not-found" === t.state || c
        ? (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(a.Z, { className: o.brokenImageIcon }),
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

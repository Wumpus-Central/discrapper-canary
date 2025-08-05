(n.d(t, { Z: () => s }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(558522),
    o = n(484112);
function s(e) {
    let { imageBackground: t, applicationName: n, imageClassName: s, imageNotFoundClassName: l } = e,
        [c, u] = i.useState(!1);
    return 'not-found' === t.state || c
        ? (0, r.jsx)('div', {
              className: l,
              children: (0, r.jsx)(a.Z, { className: o.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, r.jsx)('img', {
                alt: n,
                className: s,
                src: t.url,
                onError: () => u(!0)
            });
}

n.d(t, { Z: () => o }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(558522),
    a = n(484112);
function o(e) {
    let { imageBackground: t, applicationName: n, imageClassName: o, imageNotFoundClassName: s } = e,
        [c, u] = i.useState(!1);
    return 'not-found' === t.state || c
        ? (0, l.jsx)('div', {
              className: s,
              children: (0, l.jsx)(r.Z, { className: a.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, l.jsx)('img', {
                alt: n,
                className: o,
                src: t.url,
                onError: () => u(!0)
            });
}

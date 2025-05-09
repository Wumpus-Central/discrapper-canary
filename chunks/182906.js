n.d(t, { Z: () => a }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(558522),
    o = n(484112);
function a(e) {
    let { imageBackground: t, applicationName: n, imageClassName: a, imageNotFoundClassName: c } = e,
        [s, u] = r.useState(!1);
    return 'not-found' === t.state || s
        ? (0, i.jsx)('div', {
              className: c,
              children: (0, i.jsx)(l.Z, { className: o.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, i.jsx)('img', {
                alt: n,
                className: a,
                src: t.url,
                onError: () => u(!0)
            });
}

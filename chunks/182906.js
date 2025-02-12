n.d(t, { Z: () => s }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(558522),
    r = n(488062);
function s(e) {
    let { imageBackground: t, applicationName: n, imageClassName: s, imageNotFoundClassName: o } = e,
        [c, d] = l.useState(!1);
    return 'not-found' === t.state || c
        ? (0, i.jsx)('div', {
              className: o,
              children: (0, i.jsx)(a.Z, { className: r.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, i.jsx)('img', {
                alt: n,
                className: s,
                src: t.url,
                onError: () => d(!0)
            });
}

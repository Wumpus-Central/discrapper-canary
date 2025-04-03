n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(558522),
    l = n(484112);
function c(e) {
    let { imageBackground: t, applicationName: n, imageClassName: c, imageNotFoundClassName: a } = e,
        [u, d] = r.useState(!1);
    return 'not-found' === t.state || u
        ? (0, i.jsx)('div', {
              className: a,
              children: (0, i.jsx)(o.Z, { className: l.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, i.jsx)('img', {
                alt: n,
                className: c,
                src: t.url,
                onError: () => d(!0)
            });
}

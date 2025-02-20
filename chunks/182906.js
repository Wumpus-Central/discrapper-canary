t.d(n, { Z: () => i }), t(47120);
var o = t(200651),
    r = t(192379),
    c = t(558522),
    a = t(743521);
function i(e) {
    let { imageBackground: n, applicationName: t, imageClassName: i, imageNotFoundClassName: l } = e,
        [_, d] = r.useState(!1);
    return 'not-found' === n.state || _
        ? (0, o.jsx)('div', {
              className: l,
              children: (0, o.jsx)(c.Z, { className: a.brokenImageIcon })
          })
        : 'loading' === n.state
          ? null
          : (0, o.jsx)('img', {
                alt: t,
                className: i,
                src: n.url,
                onError: () => d(!0)
            });
}

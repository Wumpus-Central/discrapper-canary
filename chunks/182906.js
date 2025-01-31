t.d(e, { Z: () => c }), t(47120);
var o = t(200651),
    a = t(192379),
    r = t(558522),
    i = t(761074);
function c(n) {
    let { imageBackground: e, applicationName: t, imageClassName: c, imageNotFoundClassName: _ } = n,
        [d, l] = a.useState(!1);
    return 'not-found' === e.state || d
        ? (0, o.jsx)('div', {
              className: _,
              children: (0, o.jsx)(r.Z, { className: i.brokenImageIcon })
          })
        : 'loading' === e.state
          ? null
          : (0, o.jsx)('img', {
                alt: t,
                className: c,
                src: e.url,
                onError: () => l(!0)
            });
}

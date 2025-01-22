n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(558522),
    a = n(761074);
function o(e) {
    let { imageBackground: t, applicationName: n, imageClassName: o, imageNotFoundClassName: s } = e,
        [c, u] = r.useState(!1);
    return 'not-found' === t.state || c
        ? (0, i.jsx)('div', {
              className: s,
              children: (0, i.jsx)(l.Z, { className: a.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, i.jsx)('img', {
                alt: n,
                className: o,
                src: t.url,
                onError: () => u(!0)
            });
}

n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    s = n(496008);
function o(e) {
    let { loading: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            t
                ? (0, i.jsx)('div', {
                      className: s.spinnerContainer,
                      children: (0, i.jsx)(l.$jN, {
                          className: s.spinner,
                          type: l.$jN.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, i.jsx)('div', {
                className: r()({ [s.loading]: t }),
                children: n
            })
        ]
    });
}

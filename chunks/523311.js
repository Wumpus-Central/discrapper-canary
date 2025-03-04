n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(816639);
function s(e) {
    let { loading: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            t
                ? (0, r.jsx)('div', {
                      className: o.spinnerContainer,
                      children: (0, r.jsx)(l.$jN, {
                          className: o.spinner,
                          type: l.$jN.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: a()({ [o.loading]: t }),
                children: n
            })
        ]
    });
}

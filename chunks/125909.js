n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    r = n(481060),
    c = n(496008);
function o(e) {
    let { loading: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            t
                ? (0, i.jsx)('div', {
                      className: c.spinnerContainer,
                      children: (0, i.jsx)(r.Spinner, {
                          className: c.spinner,
                          type: r.Spinner.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, i.jsx)('div', {
                className: l()({ [c.loading]: t }),
                children: n
            })
        ]
    });
}

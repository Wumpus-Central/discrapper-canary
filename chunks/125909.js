n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(496008);
function s(e) {
    let { loading: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            t
                ? (0, i.jsx)('div', {
                      className: o.spinnerContainer,
                      children: (0, i.jsx)(l.Spinner, {
                          className: o.spinner,
                          type: l.Spinner.Type.SPINNING_CIRCLE
                      })
                  })
                : null,
            (0, i.jsx)('div', {
                className: r()({ [o.loading]: t }),
                children: n
            })
        ]
    });
}

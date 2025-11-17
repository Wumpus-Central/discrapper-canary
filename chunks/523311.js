n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(390082);
function o(e) {
    let { loading: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            t
                ? (0, r.jsx)("div", {
                      className: s.spinnerContainer,
                      children: (0, r.jsx)(l.$jN, {
                          className: s.spinner,
                          type: l.$jN.Type.SPINNING_CIRCLE,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: i()({ [s.loading]: t }),
                children: n,
            }),
        ],
    });
}

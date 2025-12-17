n.d(t, { Z: () => o });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    s = n(813290);
function o(e) {
    let { loading: t, children: n } = e;
    return (0, a.jsxs)("div", {
        className: s.container,
        children: [
            t
                ? (0, a.jsx)("div", {
                      className: s.spinnerContainer,
                      children: (0, a.jsx)(l.$jN, {
                          className: s.spinner,
                          type: l.$jN.Type.SPINNING_CIRCLE,
                      }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: i()({ [s.loading]: t }),
                children: n,
            }),
        ],
    });
}

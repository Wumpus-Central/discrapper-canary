t.d(n, { Z: () => i });
var r = t(54381),
    a = t(8561);
function i(e) {
    let { children: n, actions: t } = e;
    return (0, r.jsx)("div", {
        className: a.card,
        children: (0, r.jsxs)("div", {
            className: a.contentWrapper,
            children: [
                n,
                null != t &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: a.divider }),
                            (0, r.jsx)("div", {
                                className: a.serverActions,
                                children: t,
                            }),
                        ],
                    }),
            ],
        }),
    });
}

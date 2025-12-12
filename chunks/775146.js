t.d(n, { Z: () => i });
var a = t(54381),
    r = t(791894);
function i(e) {
    let { children: n, actions: t } = e;
    return (0, a.jsx)("div", {
        className: r.card,
        children: (0, a.jsxs)("div", {
            className: r.contentWrapper,
            children: [
                n,
                null != t &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { className: r.divider }),
                            (0, a.jsx)("div", {
                                className: r.serverActions,
                                children: t,
                            }),
                        ],
                    }),
            ],
        }),
    });
}

n.d(t, { F: () => c });
var i = n(627968),
    r = n(64700),
    a = n(990078),
    l = n(397927),
    s = n(793322),
    o = n(985018),
    d = n(168221);
function c(e) {
    let { focusSectionProps: t } = e,
        n = r.useCallback((e) => {
            (0, s.L$)("fast-travel");
        }, []);
    return (0, i.jsx)(a.m, {
        "aria-label": o.intl.string(o.t["7P/+qz"]),
        asContainer: !0,
        __unsupportedReactNodeAsText: (0, i.jsxs)(i.Fragment, {
            children: [o.intl.string(o.t["7P/+qz"]), (0, i.jsx)(l.e7I, { shortcut: ["mod", "k"] })],
        }),
        children: (0, i.jsxs)(l.DUT, {
            ...t,
            className: d.F,
            onClick: n,
            children: [
                (0, i.jsx)(l.txs, { size: "xs" }),
                (0, i.jsx)(l.Text, { variant: "text-sm/medium", lineClamp: 1, children: o.intl.string(o.t.ZvKwYa) }),
            ],
        }),
    });
}

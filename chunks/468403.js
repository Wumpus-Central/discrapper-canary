i.d(l, { default: () => h });
var s = i(627968),
    t = i(64700),
    a = i(862482),
    e = i(192308),
    r = i(935462),
    c = i(834730),
    o = i(821609),
    d = i(985018);
function h(n) {
    let { onConfirm: l, ...i } = n,
        h = t.useCallback(() => {
            l(), (0, e.closeAllModals)();
        }, [l]);
    return (0, s.jsxs)(r.EO, {
        size: r.rI.SMALL,
        ...i,
        parentComponent: "DisableLandingPageWarningModal",
        children: [
            (0, s.jsx)(r.$m, {
                children: (0, s.jsx)(c.E, {
                    variant: "text-md/normal",
                    style: { marginTop: 24 },
                    children: d.intl.string(d.t.nmBUv7),
                }),
            }),
            (0, s.jsxs)(r.jl, {
                children: [
                    (0, s.jsx)(o.$, {
                        variant: "secondary",
                        text: d.intl.string(d.t["ETE/oC"]),
                        onClick: e.closeAllModals,
                    }),
                    (0, s.jsx)(a.$n, {
                        color: a.XD.RED,
                        onClick: h,
                        style: { marginRight: 8 },
                        children: d.intl.string(d.t.R9GHya),
                    }),
                ],
            }),
        ],
    });
}

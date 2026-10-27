n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    o = n(43990),
    s = n(834730),
    i = n(291749),
    u = n(557637),
    c = n(963713),
    d = n(652215),
    p = n(14424);
function m() {
    let e = (0, c.o5)(),
        { productIcon: t } = e;
    return (0, l.jsx)(o.N, {
        theme: d.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (n) =>
            (0, l.jsxs)("div", {
                className: a()(n, p.r),
                children: [
                    null != t &&
                        (0, l.jsx)(u._M, {
                            id: "QuestBarBounty_productIcon",
                            children: (e) =>
                                (0, l.jsx)("img", {
                                    ref: e,
                                    src: (0, i.lR)({ assetUrl: t, width: 32, height: 32 }),
                                    alt: "",
                                    width: 32,
                                    height: 32,
                                    className: p.Z,
                                }),
                        }),
                    (0, l.jsx)(s.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        lineClamp: 2,
                        children: e.productName ?? "",
                    }),
                ],
            }),
    });
}

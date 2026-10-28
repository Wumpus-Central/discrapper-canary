n.d(t, { A: () => p });
var l = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    a = n(43990),
    i = n(834730),
    o = n(291749),
    u = n(557637),
    c = n(963713),
    d = n(652215),
    m = n(14424);
function p() {
    let e = (0, c.o5)(),
        { productIcon: t } = e;
    return (0, l.jsx)(a.N, {
        theme: d.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: (n) =>
            (0, l.jsxs)("div", {
                className: s()(n, m.r),
                children: [
                    null != t &&
                        (0, l.jsx)(u._M, {
                            id: "QuestBarBounty_productIcon",
                            children: (e) =>
                                (0, l.jsx)("img", {
                                    ref: e,
                                    src: (0, o.lR)({ assetUrl: t, width: 32, height: 32 }),
                                    alt: "",
                                    width: 32,
                                    height: 32,
                                    className: m.Z,
                                }),
                        }),
                    (0, l.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        lineClamp: 2,
                        children: e.productName ?? "",
                    }),
                ],
            }),
    });
}

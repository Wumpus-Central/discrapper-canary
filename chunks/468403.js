i.d(t, { default: () => c });
var s = i(627968),
    r = i(64700),
    a = i(421380),
    e = i(397927),
    l = i(985018);
function c(n) {
    let { onConfirm: t, ...i } = n,
        c = r.useCallback(() => {
            t(), (0, e.s7G)();
        }, [t]);
    return (0, s.jsxs)(e.EOs, {
        size: e.rIJ.SMALL,
        ...i,
        parentComponent: "DisableLandingPageWarningModal",
        children: [
            (0, s.jsx)(e.$mQ, {
                children: (0, s.jsx)(e.Text, {
                    variant: "text-md/normal",
                    style: { marginTop: 24 },
                    children: l.intl.string(l.t.nmBUv7),
                }),
            }),
            (0, s.jsxs)(e.jlY, {
                children: [
                    (0, s.jsx)(e.Button, { variant: "secondary", text: l.intl.string(l.t["ETE/oC"]), onClick: e.s7G }),
                    (0, s.jsx)(a.$n, {
                        color: a.XD.RED,
                        onClick: c,
                        style: { marginRight: 8 },
                        children: l.intl.string(l.t.R9GHya),
                    }),
                ],
            }),
        ],
    });
}

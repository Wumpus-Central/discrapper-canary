n.d(t, { default: () => c });
var e = n(627968),
    s = n(64700),
    i = n(189213),
    r = n(834730),
    o = n(49999),
    d = n(985018),
    l = n(89946);
function c(a) {
    let { modalConfig: t, markAsDismissed: n, ...c } = a,
        h = s.useCallback(
            (a) => {
                t.onPrimaryClick?.(a), n(o.i.TAKE_ACTION);
            },
            [t, n],
        ),
        m = [t.firstHeader, t.secondHeader].filter(Boolean).join(" "),
        p = [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: c.onClose },
            ...(null != t.primaryButtonText ? [{ variant: "primary", text: t.primaryButtonText, onClick: h }] : []),
        ];
    return (0, e.jsx)(i.Modal, {
        ...c,
        title: m,
        actions: p,
        size: "md",
        children: (0, e.jsx)("div", {
            className: l.kL,
            children: (0, e.jsxs)("div", {
                className: l.hQ,
                children: [
                    (0, e.jsx)(r.E, { tag: "span", className: l.h_, variant: "text-sm/normal", children: t.firstBody }),
                    (0, e.jsx)(r.E, {
                        tag: "span",
                        className: l.h_,
                        variant: "text-sm/normal",
                        children: t.secondBody,
                    }),
                    (0, e.jsx)(r.E, { tag: "span", className: l.h_, variant: "text-sm/normal", children: t.thirdBody }),
                ],
            }),
        }),
    });
}

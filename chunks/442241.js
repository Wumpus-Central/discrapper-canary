e.d(a, { default: () => c });
var n = e(627968),
    s = e(64700),
    i = e(158954),
    r = e(397927),
    o = e(49999),
    d = e(985018),
    l = e(89946);
function c(t) {
    let { modalConfig: a, markAsDismissed: e, ...c } = t,
        h = s.useCallback(
            (t) => {
                a.onPrimaryClick?.(t), e(o.i.TAKE_ACTION);
            },
            [a, e],
        ),
        x = [a.firstHeader, a.secondHeader].filter(Boolean).join(" "),
        m = [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: c.onClose },
            ...(null != a.primaryButtonText ? [{ variant: "primary", text: a.primaryButtonText, onClick: h }] : []),
        ];
    return (0, n.jsx)(i.Modal, {
        ...c,
        title: x,
        actions: m,
        size: "md",
        children: (0, n.jsx)("div", {
            className: l.kL,
            children: (0, n.jsxs)("div", {
                className: l.hQ,
                children: [
                    (0, n.jsx)(r.Text, {
                        tag: "span",
                        className: l.h_,
                        variant: "text-sm/normal",
                        children: a.firstBody,
                    }),
                    (0, n.jsx)(r.Text, {
                        tag: "span",
                        className: l.h_,
                        variant: "text-sm/normal",
                        children: a.secondBody,
                    }),
                    (0, n.jsx)(r.Text, {
                        tag: "span",
                        className: l.h_,
                        variant: "text-sm/normal",
                        children: a.thirdBody,
                    }),
                ],
            }),
        }),
    });
}

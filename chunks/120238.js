n.d(t, { A: () => c });
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(805866),
    r = n(646284),
    o = n(985018),
    d = n(141200);
let c = (e) => {
    let { onSubmit: t, disabled: n } = e,
        c = s.useCallback(async () => {
            await t({ type: l.Ij.Empty }), window.location.reload();
        }, [t]);
    return (0, a.jsxs)("div", {
        className: d.kL,
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-lg/bold",
                className: d.DD,
                children: o.intl.string(r.default.v52itt),
            }),
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: d.h_,
                children: o.intl.string(r.default["5am8D3"]),
            }),
            (0, a.jsx)(i.BJc, {
                direction: "horizontal",
                justify: "end",
                children: (0, a.jsx)(i.Button, {
                    variant: "primary",
                    text: o.intl.string(r.default["GDsHl+"]),
                    onClick: c,
                    disabled: n,
                }),
            }),
        ],
    });
};

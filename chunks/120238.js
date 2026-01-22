n.d(t, {
    A: () => d,
}),
    n(228524);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(805866),
    s = n(646284),
    o = n(985018),
    c = n(141200);
let d = (e) => {
    let { onSubmit: t, disabled: n } = e,
        d = l.useCallback(async () => {
            await t({
                type: r.Ij.Empty,
            }),
                window.location.reload();
        }, [t]);
    return (0, a.jsxs)("div", {
        className: c.kL,
        children: [
            (0, a.jsx)(i.Heading, {
                variant: "heading-lg/bold",
                className: c.DD,
                children: o.intl.string(s.default.v52itt),
            }),
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                className: c.h_,
                children: o.intl.string(s.default["5am8D3"]),
            }),
            (0, a.jsx)(i.BJc, {
                direction: "horizontal",
                justify: "end",
                children: (0, a.jsx)(i.Button, {
                    variant: "primary",
                    text: o.intl.string(s.default["GDsHl+"]),
                    onClick: d,
                    disabled: n,
                }),
            }),
        ],
    });
};

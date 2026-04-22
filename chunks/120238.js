n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(534514),
    a = n(834730),
    r = n(331322),
    o = n(821609),
    d = n(805866),
    c = n(837451),
    u = n(985018),
    p = n(242235);
let h = (e) => {
    let { onSubmit: t, disabled: n } = e,
        h = s.useCallback(async () => {
            await t({ type: d.Ij.Empty }), window.location.reload();
        }, [t]);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)(l.D, { variant: "heading-lg/bold", className: p.DD, children: u.intl.string(c.default.v52itt) }),
            (0, i.jsx)(a.E, {
                variant: "text-md/normal",
                color: "text-muted",
                className: p.h_,
                children: u.intl.string(c.default["5am8D3"]),
            }),
            (0, i.jsx)(r.B, {
                direction: "horizontal",
                justify: "end",
                children: (0, i.jsx)(o.$, {
                    variant: "primary",
                    text: u.intl.string(c.default["GDsHl+"]),
                    onClick: h,
                    disabled: n,
                }),
            }),
        ],
    });
};

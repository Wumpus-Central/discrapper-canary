n.d(t, {
    default: () => l,
}),
    n(228524);
var d = n(627968),
    i = n(64700),
    h = n(397927),
    r = n(638633),
    s = n(842130),
    b = n(985018),
    a = n(143335);

function l(e) {
    let { onClose: t } = e,
        n = (0, r.A)();
    return (
        i.useEffect(() => {
            n || t();
        }, [n, t]),
        (0, d.jsx)("div", {
            className: a.Tp,
            children: (0, d.jsxs)("div", {
                className: a.kL,
                children: [
                    (0, d.jsx)(h.Heading, {
                        variant: "heading-xl/semibold",
                        className: a.DD,
                        children: b.intl.string(s.default.ujnPZZ),
                    }),
                    (0, d.jsx)(h.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: a.h_,
                        children: b.intl.string(s.default.VfqJvY),
                    }),
                ],
            }),
        })
    );
}

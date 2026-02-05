n.d(t, { default: () => l });
var d = n(627968),
    i = n(64700),
    h = n(397927),
    s = n(638633),
    r = n(842130),
    b = n(985018),
    a = n(143335);
function l(e) {
    let { onClose: t } = e,
        n = (0, s.A)();
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
                        children: b.intl.string(r.default.ujnPZZ),
                    }),
                    (0, d.jsx)(h.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: a.h_,
                        children: b.intl.string(r.default.VfqJvY),
                    }),
                ],
            }),
        })
    );
}

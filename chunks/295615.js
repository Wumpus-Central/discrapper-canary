s.d(t, { default: () => u });
var d = s(627968),
    r = s(64700),
    i = s(397927),
    n = s(638633),
    a = s(870236),
    c = s(985018),
    l = s(38577);
function u(e) {
    let { onClose: t } = e,
        s = (0, n.A)();
    return (
        r.useEffect(() => {
            s || t();
        }, [s, t]),
        (0, d.jsx)("div", {
            className: l.Tp,
            children: (0, d.jsxs)("div", {
                className: l.kL,
                children: [
                    (0, d.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        className: l.DD,
                        children: c.intl.string(a.default.ujnPZZ),
                    }),
                    (0, d.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: l.h_,
                        children: c.intl.string(a.default.VfqJvY),
                    }),
                ],
            }),
        })
    );
}

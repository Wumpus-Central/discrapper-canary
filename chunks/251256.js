var l = n(477900),
    r = n(582128),
    s = n(939249),
    a = n(885574),
    i = n(331322),
    o = n(534514),
    u = n(821609),
    c = n(975807),
    d = n(975571),
    m = n(707296);
let g = {
        "eligible-items": {
            headingVariant: "heading-lg/semibold",
            headingColor: void 0,
            buttonVariant: "overlay-primary",
            buttonSize: "sm",
            align: "center",
            fullWidth: !0,
        },
        "sequenced-offer": {
            headingVariant: "heading-lg/medium",
            headingColor: "text-strong",
            buttonVariant: "overlay-secondary",
            buttonSize: "md",
            align: "end",
            fullWidth: !1,
        },
    },
    h = (e) => {
        let { helpArticle: t } = e,
            { id: n, label: i } = t,
            o = r.useCallback(() => {
                (0, c.A)(d.A.getArticleURL(n));
            }, [n]);
        return (0, l.jsx)(s.D, {
            "aria-label": i,
            onClick: o,
            className: m.o,
            children: (0, l.jsx)(a.CircleInformationIcon, { size: "sm", color: "currentColor" }),
        });
    };
n.d(
    t,
    {},
    {
        A: (e) => {
            let {
                    title: t,
                    variant: n = "eligible-items",
                    helpArticle: r,
                    buttonText: s,
                    onButtonClick: a,
                    className: c,
                } = e,
                { headingVariant: d, headingColor: E, buttonVariant: p, buttonSize: f, align: x, fullWidth: A } = g[n];
            return (0, l.jsxs)(i.B, {
                direction: "horizontal",
                justify: "space-between",
                align: x,
                fullWidth: A,
                className: c,
                children: [
                    (0, l.jsxs)("div", {
                        className: m.D,
                        children: [
                            (0, l.jsx)(o.D, { variant: d, color: E, children: t }),
                            null != r && (0, l.jsx)(h, { helpArticle: r }),
                        ],
                    }),
                    null != s && null != a && (0, l.jsx)(u.$, { variant: p, size: f, onClick: a, text: s }),
                ],
            });
        },
    },
);

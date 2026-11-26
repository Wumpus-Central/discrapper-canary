var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(939249),
    o = n(885574),
    u = n(331322),
    c = n(534514),
    d = n(821609),
    m = n(975807),
    h = n(975571),
    g = n(707296);
let E = {
        "eligible-items": {
            headingVariant: "heading-lg/semibold",
            headingColor: void 0,
            titleClassName: void 0,
            buttonVariant: "overlay-primary",
            buttonSize: "sm",
            align: "center",
            fullWidth: !0,
        },
        "sequenced-offer": {
            headingVariant: "heading-lg/medium",
            headingColor: "text-overlay-light",
            titleClassName: g.ns,
            buttonVariant: "overlay-secondary",
            buttonSize: "md",
            align: "end",
            fullWidth: !1,
        },
    },
    f = (e) => {
        let { helpArticle: t } = e,
            { id: n, label: s } = t,
            a = r.useCallback(() => {
                (0, m.A)(h.A.getArticleURL(n));
            }, [n]);
        return (0, l.jsx)(i.D, {
            "aria-label": s,
            onClick: a,
            className: g.oZ,
            children: (0, l.jsx)(o.CircleInformationIcon, { size: "sm", color: "currentColor" }),
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
                    onButtonClick: i,
                    className: o,
                } = e,
                {
                    headingVariant: m,
                    headingColor: h,
                    titleClassName: p,
                    buttonVariant: x,
                    buttonSize: v,
                    align: C,
                    fullWidth: A,
                } = E[n];
            return (0, l.jsxs)(u.B, {
                direction: "horizontal",
                justify: "space-between",
                align: C,
                fullWidth: A,
                className: o,
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(g.DD, p),
                        children: [
                            (0, l.jsx)(c.D, { variant: m, color: h, children: t }),
                            null != r && (0, l.jsx)(f, { helpArticle: r }),
                        ],
                    }),
                    null != s && null != i && (0, l.jsx)(d.$, { variant: x, size: v, onClick: i, text: s }),
                ],
            });
        },
    },
);

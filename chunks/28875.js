var l = n(477900),
    r = n(582128),
    s = n(885574),
    a = n(866665),
    i = n(408278),
    o = n(331322),
    u = n(534514),
    c = n(821609),
    d = n(975807),
    m = n(975571),
    h = n(707296);
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
    E = (e) => {
        let { color: t, className: n, style: r } = e;
        return (0, l.jsx)(s.CircleInformationIcon, { size: "sm", color: t, className: n, style: r });
    },
    p = (e) => {
        let { helpArticle: t } = e,
            { id: n, label: s } = t,
            o = r.useCallback(() => {
                (0, d.A)(m.A.getArticleURL(n));
            }, [n]);
        return (0, l.jsx)("div", {
            className: h.o,
            children: (0, l.jsx)(a.m, {
                text: s,
                ariaHidden: !0,
                children: (0, l.jsx)(i.K, { "aria-label": s, icon: E, variant: "color-mix", size: "sm", onClick: o }),
            }),
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
                    className: i,
                } = e,
                { headingVariant: d, headingColor: m, buttonVariant: E, buttonSize: f, align: x, fullWidth: v } = g[n];
            return (0, l.jsxs)(o.B, {
                direction: "horizontal",
                justify: "space-between",
                align: x,
                fullWidth: v,
                className: i,
                children: [
                    (0, l.jsxs)("div", {
                        className: h.D,
                        children: [
                            (0, l.jsx)(u.D, { variant: d, color: m, children: t }),
                            null != r && (0, l.jsx)(p, { helpArticle: r }),
                        ],
                    }),
                    null != s && null != a && (0, l.jsx)(c.$, { variant: E, size: f, onClick: a, text: s }),
                ],
            });
        },
    },
);

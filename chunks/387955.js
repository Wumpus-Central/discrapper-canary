n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(63063),
    l = n(773446),
    c = n(572264),
    u = n(981631),
    d = n(388032),
    m = n(38579),
    g = n(849399);
function f(e) {
    let { user: t } = e;
    return (0, r.jsxs)("div", {
        className: m.infoContainer,
        children: [
            (0, r.jsx)("img", {
                className: m.infoPicture,
                alt: "",
                src: g,
            }),
            (0, r.jsx)(o.Heading, {
                className: m.title,
                color: "header-primary",
                variant: "heading-xl/bold",
                children: d.intl.format(d.t["au+lPv"], { n: t.tag }),
            }),
            (0, r.jsx)(o.Text, {
                className: m.subtitleInfo,
                color: "header-secondary",
                variant: "text-md/medium",
                children: d.intl.format(d.t["5fwX56"], {}),
            }),
            (0, r.jsx)(o.Text, {
                className: m.prompt,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: d.intl.format(d.t.i2vB8z, { helpdeskArticle: s.Z.getArticleURL(u.BhN.POMELO_FAQ) }),
            }),
            (0, r.jsxs)("div", {
                className: a()([m.infoItem, m.infoItemSpacing]),
                children: [
                    (0, r.jsx)("div", {
                        className: m.infoIcon,
                        children: (0, r.jsx)(o.iFz, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/medium",
                        children: d.intl.format(d.t.SzUaZ1, {}),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()([m.infoItem, m.infoItemSpacing]),
                children: [
                    (0, r.jsx)("div", {
                        className: m.infoIcon,
                        children: (0, r.jsx)(l.Z, {
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/medium",
                        children: d.intl.format(d.t["UwPc+G"], {}),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: m.infoItem,
                children: [
                    (0, r.jsx)("div", {
                        className: m.infoIcon,
                        children: (0, r.jsx)(c.Z, {
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/medium",
                        children: d.intl.format(d.t.okLjju, { username: t.tag }),
                    }),
                ],
            }),
        ],
    });
}

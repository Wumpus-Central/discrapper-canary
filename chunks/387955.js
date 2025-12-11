n.d(t, { Z: () => g });
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
    f = n(991119),
    m = n(849399);
function g(e) {
    let { user: t } = e;
    return (0, r.jsxs)("div", {
        className: f.infoContainer,
        children: [
            (0, r.jsx)("img", {
                className: f.infoPicture,
                alt: "",
                src: m,
            }),
            (0, r.jsx)(o.Heading, {
                className: f.title,
                color: "text-strong",
                variant: "heading-xl/bold",
                children: d.intl.format(d.t["au+lPv"], { n: t.tag }),
            }),
            (0, r.jsx)(o.Text, {
                className: f.subtitleInfo,
                color: "text-default",
                variant: "text-md/medium",
                children: d.intl.format(d.t["5fwX56"], {}),
            }),
            (0, r.jsx)(o.Text, {
                className: f.prompt,
                color: "text-default",
                variant: "text-sm/medium",
                children: d.intl.format(d.t.i2vB8z, { helpdeskArticle: s.Z.getArticleURL(u.BhN.POMELO_FAQ) }),
            }),
            (0, r.jsxs)("div", {
                className: a()([f.infoItem, f.infoItemSpacing]),
                children: [
                    (0, r.jsx)("div", {
                        className: f.infoIcon,
                        children: (0, r.jsx)(o.iFz, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-sm/medium",
                        children: d.intl.format(d.t.SzUaZ1, {}),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()([f.infoItem, f.infoItemSpacing]),
                children: [
                    (0, r.jsx)("div", {
                        className: f.infoIcon,
                        children: (0, r.jsx)(l.Z, {
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-sm/medium",
                        children: d.intl.format(d.t["UwPc+G"], {}),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: f.infoItem,
                children: [
                    (0, r.jsx)("div", {
                        className: f.infoIcon,
                        children: (0, r.jsx)(c.Z, {
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-sm/medium",
                        children: d.intl.format(d.t.okLjju, { username: t.tag }),
                    }),
                ],
            }),
        ],
    });
}

t.d(n, { Z: () => d });
var a = t(54381);
t(473749);
var i = t(120356),
    r = t.n(i),
    l = t(481060),
    o = t(388032),
    c = t(966786);
function d(e) {
    let { guild: n, speakers: t, speakerCount: i, className: d } = e,
        s = t.slice(0, 5),
        u = s.map((e) => {
            var t, i;
            return (0, a.jsxs)(
                "div",
                {
                    className: c.speakerContainer,
                    children: [
                        (0, a.jsx)(l.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: l.EFr.SIZE_20,
                            className: c.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, a.jsx)("div", {
                            className: c.textInGridContainer,
                            children: (0, a.jsx)(l.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick,
                            }),
                        }),
                    ],
                },
                null == e || null == (i = e.user) ? void 0 : i.id,
            );
        }),
        b = i - s.length;
    return (0, a.jsxs)("div", {
        className: r()(c.grid, d),
        children: [
            u,
            b > 0 &&
                (0, a.jsxs)("div", {
                    className: c.speakerContainer,
                    children: [
                        (0, a.jsx)("div", {
                            className: c.iconMicrophone,
                            children: (0, a.jsx)(l.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, a.jsx)(l.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            className: c.textInGrid,
                            children: o.intl.format(o.t["185ggO"], { count: b }),
                        }),
                    ],
                }),
        ],
    });
}

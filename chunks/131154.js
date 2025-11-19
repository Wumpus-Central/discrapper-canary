t.d(n, { Z: () => s });
var a = t(54381);
t(473749);
var i = t(120356),
    r = t.n(i),
    o = t(481060),
    c = t(388032),
    l = t(140764);
function s(e) {
    let { guild: n, speakers: t, speakerCount: i, className: s } = e,
        d = t.slice(0, 5),
        _ = d.map((e) => {
            var t, i;
            return (0, a.jsxs)(
                "div",
                {
                    className: l.speakerContainer,
                    children: [
                        (0, a.jsx)(o.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: o.EFr.SIZE_20,
                            className: l.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, a.jsx)("div", {
                            className: l.textInGridContainer,
                            children: (0, a.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: l.textInGrid,
                                children: null == e ? void 0 : e.userNick,
                            }),
                        }),
                    ],
                },
                null == e || null == (i = e.user) ? void 0 : i.id,
            );
        }),
        u = i - d.length;
    return (0, a.jsxs)("div", {
        className: r()(l.grid, s),
        children: [
            _,
            u > 0 &&
                (0, a.jsxs)("div", {
                    className: l.speakerContainer,
                    children: [
                        (0, a.jsx)("div", {
                            className: l.iconMicrophone,
                            children: (0, a.jsx)(o.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: l.textInGrid,
                            children: c.intl.format(c.t["185ggO"], { count: u }),
                        }),
                    ],
                }),
        ],
    });
}

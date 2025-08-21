t.d(n, { Z: () => s });
var r = t(951288);
t(647438);
var i = t(120356),
    a = t.n(i),
    l = t(481060),
    o = t(388032),
    c = t(140764);
function s(e) {
    let { guild: n, speakers: t, speakerCount: i, className: s } = e,
        d = t.slice(0, 5),
        u = d.map((e) => {
            var t, i;
            return (0, r.jsxs)(
                "div",
                {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)(l.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: l.EFr.SIZE_20,
                            className: c.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, r.jsx)("div", {
                            className: c.textInGridContainer,
                            children: (0, r.jsx)(l.Text, {
                                color: "header-secondary",
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
        _ = i - d.length;
    return (0, r.jsxs)("div", {
        className: a()(c.grid, s),
        children: [
            u,
            _ > 0 &&
                (0, r.jsxs)("div", {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: c.iconMicrophone,
                            children: (0, r.jsx)(l.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: c.textInGrid,
                            children: o.intl.format(o.t["185ggI"], { count: _ }),
                        }),
                    ],
                }),
        ],
    });
}

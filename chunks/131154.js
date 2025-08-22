t.d(n, { Z: () => s });
var r = t(951288);
t(647438);
var i = t(120356),
    l = t.n(i),
    c = t(481060),
    a = t(388032),
    o = t(140764);
function s(e) {
    let { guild: n, speakers: t, speakerCount: i, className: s } = e,
        u = t.slice(0, 5),
        d = u.map((e) => {
            var t, i;
            return (0, r.jsxs)(
                "div",
                {
                    className: o.speakerContainer,
                    children: [
                        (0, r.jsx)(c.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: c.EFr.SIZE_20,
                            className: o.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, r.jsx)("div", {
                            className: o.textInGridContainer,
                            children: (0, r.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o.textInGrid,
                                children: null == e ? void 0 : e.userNick,
                            }),
                        }),
                    ],
                },
                null == e || null == (i = e.user) ? void 0 : i.id,
            );
        }),
        g = i - u.length;
    return (0, r.jsxs)("div", {
        className: l()(o.grid, s),
        children: [
            d,
            g > 0 &&
                (0, r.jsxs)("div", {
                    className: o.speakerContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: o.iconMicrophone,
                            children: (0, r.jsx)(c.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, r.jsx)(c.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: o.textInGrid,
                            children: a.intl.format(a.t["185ggI"], { count: g }),
                        }),
                    ],
                }),
        ],
    });
}

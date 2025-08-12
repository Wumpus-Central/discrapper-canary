t.d(n, { Z: () => o });
var i = t(255367);
t(73800);
var l = t(120356),
    r = t.n(l),
    a = t(481060),
    s = t(388032),
    c = t(841026);
function o(e) {
    let { guild: n, speakers: t, speakerCount: l, className: o } = e,
        u = t.slice(0, 5),
        d = u.map((e) => {
            var t, l;
            return (0, i.jsxs)(
                "div",
                {
                    className: c.speakerContainer,
                    children: [
                        (0, i.jsx)(a.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: a.EFr.SIZE_20,
                            className: c.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, i.jsx)("div", {
                            className: c.textInGridContainer,
                            children: (0, i.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick,
                            }),
                        }),
                    ],
                },
                null == e || null == (l = e.user) ? void 0 : l.id,
            );
        }),
        h = l - u.length;
    return (0, i.jsxs)("div", {
        className: r()(c.grid, o),
        children: [
            d,
            h > 0 &&
                (0, i.jsxs)("div", {
                    className: c.speakerContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: c.iconMicrophone,
                            children: (0, i.jsx)(a.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, i.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: c.textInGrid,
                            children: s.intl.format(s.t["185ggI"], { count: h }),
                        }),
                    ],
                }),
        ],
    });
}

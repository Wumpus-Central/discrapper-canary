t.d(n, { Z: () => o });
var i = t(54381);
t(473749);
var l = t(120356),
    a = t.n(l),
    r = t(481060),
    s = t(388032),
    c = t(140764);
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
                        (0, i.jsx)(r.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: r.EFr.SIZE_20,
                            className: c.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, i.jsx)("div", {
                            className: c.textInGridContainer,
                            children: (0, i.jsx)(r.Text, {
                                color: "text-default",
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
        className: a()(c.grid, o),
        children: [
            d,
            h > 0 &&
                (0, i.jsxs)("div", {
                    className: c.speakerContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: c.iconMicrophone,
                            children: (0, i.jsx)(r.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, i.jsx)(r.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            className: c.textInGrid,
                            children: s.intl.format(s.t["185ggO"], { count: h }),
                        }),
                    ],
                }),
        ],
    });
}

t.d(n, { Z: () => s });
var i = t(54381);
t(473749);
var r = t(120356),
    a = t.n(r),
    l = t(481060),
    o = t(388032),
    c = t(140764);
function s(e) {
    let { guild: n, speakers: t, speakerCount: r, className: s } = e,
        d = t.slice(0, 5),
        u = d.map((e) => {
            var t, r;
            return (0, i.jsxs)(
                "div",
                {
                    className: c.speakerContainer,
                    children: [
                        (0, i.jsx)(l.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: l.EFr.SIZE_20,
                            className: c.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, i.jsx)("div", {
                            className: c.textInGridContainer,
                            children: (0, i.jsx)(l.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick,
                            }),
                        }),
                    ],
                },
                null == e || null == (r = e.user) ? void 0 : r.id,
            );
        }),
        _ = r - d.length;
    return (0, i.jsxs)("div", {
        className: a()(c.grid, s),
        children: [
            u,
            _ > 0 &&
                (0, i.jsxs)("div", {
                    className: c.speakerContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: c.iconMicrophone,
                            children: (0, i.jsx)(l.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, i.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: c.textInGrid,
                            children: o.intl.format(o.t["185ggO"], { count: _ }),
                        }),
                    ],
                }),
        ],
    });
}

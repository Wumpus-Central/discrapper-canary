t.d(n, { Z: () => s });
var i = t(951288);
t(647438);
var a = t(120356),
    r = t.n(a),
    l = t(481060),
    o = t(388032),
    c = t(140764);
function s(e) {
    let { guild: n, speakers: t, speakerCount: a, className: s } = e,
        d = t.slice(0, 5),
        u = d.map((e) => {
            var t, a;
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
                null == e || null == (a = e.user) ? void 0 : a.id,
            );
        }),
        _ = a - d.length;
    return (0, i.jsxs)("div", {
        className: r()(c.grid, s),
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

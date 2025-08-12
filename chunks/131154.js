t.d(n, { Z: () => s });
var r = t(255367);
t(73800);
var o = t(120356),
    i = t.n(o),
    a = t(481060),
    l = t(388032),
    c = t(841026);
function s(e) {
    let { guild: n, speakers: t, speakerCount: o, className: s } = e,
        d = t.slice(0, 5),
        u = d.map((e) => {
            var t, o;
            return (0, r.jsxs)(
                "div",
                {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)(a.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: a.EFr.SIZE_20,
                            className: c.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, r.jsx)("div", {
                            className: c.textInGridContainer,
                            children: (0, r.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick,
                            }),
                        }),
                    ],
                },
                null == e || null == (o = e.user) ? void 0 : o.id,
            );
        }),
        _ = o - d.length;
    return (0, r.jsxs)("div", {
        className: i()(c.grid, s),
        children: [
            u,
            _ > 0 &&
                (0, r.jsxs)("div", {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: c.iconMicrophone,
                            children: (0, r.jsx)(a.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, r.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: c.textInGrid,
                            children: l.intl.format(l.t["185ggI"], { count: _ }),
                        }),
                    ],
                }),
        ],
    });
}

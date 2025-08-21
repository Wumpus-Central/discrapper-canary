t.d(n, { Z: () => d });
var a = t(951288);
t(647438);
var r = t(120356),
    i = t.n(r),
    o = t(481060),
    l = t(388032),
    c = t(140764);
function d(e) {
    let { guild: n, speakers: t, speakerCount: r, className: d } = e,
        _ = t.slice(0, 5),
        s = _.map((e) => {
            var t, r;
            return (0, a.jsxs)(
                "div",
                {
                    className: c.speakerContainer,
                    children: [
                        (0, a.jsx)(o.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: o.EFr.SIZE_20,
                            className: c.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar"),
                        }),
                        (0, a.jsx)("div", {
                            className: c.textInGridContainer,
                            children: (0, a.jsx)(o.Text, {
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
        u = r - _.length;
    return (0, a.jsxs)("div", {
        className: i()(c.grid, d),
        children: [
            s,
            u > 0 &&
                (0, a.jsxs)("div", {
                    className: c.speakerContainer,
                    children: [
                        (0, a.jsx)("div", {
                            className: c.iconMicrophone,
                            children: (0, a.jsx)(o.S6n, {
                                size: "custom",
                                color: "currentColor",
                                height: 12,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: c.textInGrid,
                            children: l.intl.format(l.t["185ggI"], { count: u }),
                        }),
                    ],
                }),
        ],
    });
}

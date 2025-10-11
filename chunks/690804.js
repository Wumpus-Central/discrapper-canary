i.d(n, { FortniteUpsellModal: () => h });
var e = i(951288);
i(647438);
var s = i(990547),
    a = i(793030),
    r = i(481060),
    o = i(782568),
    c = i(213609),
    l = i(728345),
    d = i(626135),
    x = i(768581),
    m = i(981631),
    p = i(388032),
    u = i(625771);
function h(t) {
    let { onClose: n, transitionState: i } = t,
        { data: h } = (0, l.IX)("1402418703554842694"),
        { data: g } = (0, l.IX)("1417968406048673952"),
        j =
            null != h
                ? x.ZP.getApplicationIconURL({
                      id: h.id,
                      icon: h.icon,
                  })
                : null,
        b =
            null != g
                ? x.ZP.getApplicationIconURL({
                      id: g.id,
                      icon: g.icon,
                  })
                : null;
    return (
        (0, c.Z)({
            name: s.ImpressionNames.FORTNITE_GET_GAME_MODAL,
            type: s.ImpressionTypes.MODAL,
        }),
        (0, e.jsxs)(a.IX, {
            size: "lg",
            transitionState: i,
            onClose: n,
            children: [
                (0, e.jsx)(a.xBx, {
                    graphic: void 0,
                    gradientColor: "purple",
                    title: p.intl.string(p.t.xREzoa),
                    titleTextVariant: "heading-xl/semibold",
                    subtitle: p.intl.string(p.t.va4ap6),
                    alignCenter: !0,
                }),
                (0, e.jsx)(a.fef, {
                    children: (0, e.jsxs)("div", {
                        className: u.body,
                        children: [
                            (0, e.jsxs)("div", {
                                className: u.container,
                                children: [
                                    (0, e.jsxs)("div", {
                                        className: u.text,
                                        children: [
                                            (0, e.jsx)("div", {
                                                className: u.iconContainer,
                                                children:
                                                    null != j &&
                                                    (0, e.jsx)("div", {
                                                        className: u.icon,
                                                        style: { backgroundImage: "url(".concat(j, ")") },
                                                    }),
                                            }),
                                            (0, e.jsxs)("div", {
                                                children: [
                                                    (0, e.jsx)(r.Text, {
                                                        color: "text-primary",
                                                        variant: "text-md/semibold",
                                                        children: p.intl.string(p.t["9g594e"]),
                                                    }),
                                                    (0, e.jsx)(r.Text, {
                                                        color: "text-secondary",
                                                        variant: "text-md/normal",
                                                        children: p.intl.string(p.t.Vye3DQ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(r.Button, {
                                        icon: () => (0, e.jsx)(r.Gr1, {}),
                                        iconPosition: "end",
                                        onClick: () => {
                                            d.default.track(m.rMx.FORTNITE_DOWNLOAD_CLICKED),
                                                (0, o.Z)("https://fn.gg/GetGame");
                                        },
                                        text: p.intl.string(p.t.ZDtJ19),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                            (0, e.jsxs)("div", {
                                className: u.container,
                                children: [
                                    (0, e.jsxs)("div", {
                                        className: u.text,
                                        children: [
                                            (0, e.jsx)("div", {
                                                className: u.iconContainer,
                                                children:
                                                    null != b &&
                                                    (0, e.jsx)("div", {
                                                        className: u.icon,
                                                        style: { backgroundImage: "url(".concat(b, ")") },
                                                    }),
                                            }),
                                            (0, e.jsxs)("div", {
                                                children: [
                                                    (0, e.jsx)(r.Text, {
                                                        color: "text-primary",
                                                        variant: "text-md/semibold",
                                                        children: p.intl.string(p.t.kOjtOD),
                                                    }),
                                                    (0, e.jsx)(r.Text, {
                                                        color: "text-secondary",
                                                        variant: "text-md/normal",
                                                        children: p.intl.string(p.t.X3zPLy),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(r.Button, {
                                        icon: () => (0, e.jsx)(r.Gr1, {}),
                                        iconPosition: "end",
                                        onClick: () => {
                                            d.default.track(m.rMx.FORTNITE_GFNJOIN_CLICKED),
                                                (0, o.Z)(
                                                    "https://www.nvidia.com/en-us/geforce-now/discord?ncid=partn-874834",
                                                );
                                        },
                                        text: p.intl.string(p.t.ycbXPz),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}

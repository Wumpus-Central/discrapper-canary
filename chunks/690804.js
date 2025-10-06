i.d(t, { FortniteUpsellModal: () => g });
var e = i(951288);
i(647438);
var s = i(990547),
    a = i(793030),
    r = i(481060),
    c = i(782568),
    o = i(213609),
    l = i(728345),
    d = i(626135),
    x = i(768581),
    m = i(981631),
    p = i(388032),
    h = i(625771);
function g(n) {
    let { onClose: t, transitionState: i } = n,
        { data: g } = (0, l.IX)("1402418703554842694"),
        { data: j } = (0, l.IX)("1417968406048673952"),
        u =
            null != g
                ? x.ZP.getApplicationIconURL({
                      id: g.id,
                      icon: g.icon,
                  })
                : null,
        b =
            null != j
                ? x.ZP.getApplicationIconURL({
                      id: j.id,
                      icon: j.icon,
                  })
                : null;
    return (
        (0, o.Z)({
            name: s.ImpressionNames.FORTNITE_GET_GAME_MODAL,
            type: s.ImpressionTypes.MODAL,
        }),
        (0, e.jsxs)(a.IX, {
            size: "lg",
            transitionState: i,
            onClose: t,
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
                        className: h.body,
                        children: [
                            (0, e.jsxs)("div", {
                                className: h.container,
                                children: [
                                    (0, e.jsxs)("div", {
                                        className: h.text,
                                        children: [
                                            (0, e.jsx)("div", {
                                                className: h.iconContainer,
                                                children:
                                                    null != u &&
                                                    (0, e.jsx)("div", {
                                                        className: h.icon,
                                                        style: { backgroundImage: "url(".concat(u, ")") },
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
                                    (0, e.jsx)(r.zxk, {
                                        icon: () => (0, e.jsx)(r.Gr1, {}),
                                        iconPosition: "end",
                                        onClick: () => {
                                            d.default.track(m.rMx.FORTNITE_DOWNLOAD_CLICKED),
                                                (0, c.Z)("https://fn.gg/GetGame");
                                        },
                                        text: p.intl.string(p.t.ZDtJ19),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                            (0, e.jsxs)("div", {
                                className: h.container,
                                children: [
                                    (0, e.jsxs)("div", {
                                        className: h.text,
                                        children: [
                                            (0, e.jsx)("div", {
                                                className: h.iconContainer,
                                                children:
                                                    null != b &&
                                                    (0, e.jsx)("div", {
                                                        className: h.icon,
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
                                    (0, e.jsx)(r.zxk, {
                                        icon: () => (0, e.jsx)(r.Gr1, {}),
                                        iconPosition: "end",
                                        onClick: () => {
                                            d.default.track(m.rMx.FORTNITE_GFNJOIN_CLICKED),
                                                (0, c.Z)(
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

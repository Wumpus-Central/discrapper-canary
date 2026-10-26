s.d(t, { i: () => v });
var n = s(477900),
    i = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(821609),
    o = s(297264),
    c = s(834730),
    u = s(274670),
    d = s(144779),
    m = s(18437),
    x = s(590202),
    h = s(617986),
    E = s(770178),
    j = s(765548),
    g = s(105292),
    f = s(385872);
function C(e) {
    let { questId: t, questContent: s, fullWidth: i } = e;
    return (0, n.jsx)("div", {
        className: f.UD,
        children: (0, n.jsx)(r.$, {
            fullWidth: i,
            variant: "primary",
            onClick: function () {
                ((0, h.mA)({ fromContent: s }),
                    (0, u.r)({
                        type: d.F.CLICK_INTERNAL,
                        questContentCTA: x.Cy.VIEW_QUESTS,
                        surfaceId: s,
                        sourceQuestContent: s,
                        isTargeted: !1,
                        relatedQuestId: t,
                    }));
            },
            text: g.intl.string(g.t.GURBQl),
        }),
    });
}
function v(e) {
    let { questId: t, fallbackReason: s, bodyText: a, questContent: r } = e,
        { containerRef: u, size: d } = (function () {
            let [e, t] = i.useState("lg"),
                [s, n] = i.useState(void 0),
                a = (0, j.A)((e) => {
                    let s = e.target,
                        i = e.contentRect.width;
                    return (n(s.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs");
                });
            return { containerRef: (0, E.w)(a), size: e, height: s };
        })();
    return (
        (0, m.Ii)(s, t),
        (0, n.jsxs)("div", {
            ref: (e) => {
                u.current = e;
            },
            className: l()(f.kL, { [f.U]: "lg" === d, [f.SP]: "lg" !== d }),
            children: [
                (0, n.jsxs)("div", {
                    className: f.hQ,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "lg" === d ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: g.intl.string(g.t.vnP31W),
                        }),
                        (0, n.jsx)(c.E, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: f.__invalid_mobileWebCopy,
                            children: a,
                        }),
                        (0, n.jsx)(C, { questId: t, questContent: r, fullWidth: "lg" !== d }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: f.Dg,
                    children: (0, n.jsx)("img", { src: "/assets/2431801debe6535e.svg", alt: "", className: f.Wg }),
                }),
            ],
        })
    );
}

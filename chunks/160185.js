s.d(t, { i: () => N });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(835245),
    o = s(821609),
    c = s(534514),
    u = s(834730),
    d = s(174459),
    m = s(18437),
    x = s(590202),
    h = s(617986),
    E = s(770178),
    j = s(765548),
    g = s(652215),
    f = s(375708),
    C = s(651029);
function v(e) {
    let { questId: t, questContent: s, fullWidth: i } = e;
    return (0, n.jsx)("div", {
        className: C.UD,
        children: (0, n.jsx)(o.$, {
            fullWidth: i,
            variant: "primary",
            onClick: () => {
                (0, h.navigateToQuestHome)({ fromContent: s }),
                    d.default.track(g.HAw.QUEST_CONTENT_CLICKED, {
                        quest_id: t,
                        click_id: (0, r.A)(),
                        cta_name: x.Cy.VIEW_QUESTS,
                        is_targeted: !1,
                        ...(0, x.fF)(s),
                    });
            },
            text: f.intl.string(f.t.GURBQl),
        }),
    });
}
function N(e) {
    let { questId: t, fallbackReason: s, bodyText: a, questContent: r } = e,
        { containerRef: o, size: d } = (function () {
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
                o.current = e;
            },
            className: l()(C.kL, { [C.U]: "lg" === d, [C.SP]: "lg" !== d }),
            children: [
                (0, n.jsxs)("div", {
                    className: C.hQ,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "lg" === d ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: f.intl.string(f.t.vnP31W),
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: C.__invalid_mobileWebCopy,
                            children: a,
                        }),
                        (0, n.jsx)(v, { questId: t, questContent: r, fullWidth: "lg" !== d }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: C.Dg,
                    children: (0, n.jsx)("img", { src: "/assets/2431801debe6535e.svg", alt: "", className: C.Wg }),
                }),
            ],
        })
    );
}

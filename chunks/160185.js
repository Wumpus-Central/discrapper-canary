s.d(t, { i: () => C });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(132500),
    r = s(821609),
    c = s(534514),
    d = s(834730),
    u = s(954571),
    m = s(18437),
    x = s(590202),
    h = s(545986),
    j = s(770178),
    g = s(765548),
    v = s(652215),
    f = s(985018),
    E = s(651029);
function N(e) {
    let { questId: t, questContent: s, fullWidth: i } = e;
    return (0, n.jsx)("div", {
        className: E.UD,
        children: (0, n.jsx)(r.$, {
            fullWidth: i,
            variant: "primary",
            onClick: () => {
                (0, h.navigateToQuestHome)({ fromContent: s }),
                    u.default.track(v.HAw.QUEST_CONTENT_CLICKED, {
                        quest_id: t,
                        click_id: (0, o.A)(),
                        cta_name: x.Cy.VIEW_QUESTS,
                        is_targeted: !1,
                        ...(0, x.fF)(s),
                    });
            },
            text: f.intl.string(f.t.GURBQl),
        }),
    });
}
function C(e) {
    let { questId: t, fallbackReason: s, bodyText: a, questContent: o } = e,
        { containerRef: r, size: u } = (function () {
            let [e, t] = i.useState("lg"),
                [s, n] = i.useState(void 0),
                a = (0, g.A)((e) => {
                    let s = e.target,
                        i = e.contentRect.width;
                    return (n(s.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs");
                });
            return { containerRef: (0, j.w)(a), size: e, height: s };
        })();
    return (
        (0, m.Ii)(s, t),
        (0, n.jsxs)("div", {
            ref: (e) => {
                r.current = e;
            },
            className: l()(E.kL, { [E.U]: "lg" === u, [E.SP]: "lg" !== u }),
            children: [
                (0, n.jsxs)("div", {
                    className: E.hQ,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: f.intl.string(f.t.vnP31W),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: E.__invalid_mobileWebCopy,
                            children: a,
                        }),
                        (0, n.jsx)(N, { questId: t, questContent: o, fullWidth: "lg" !== u }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: E.Dg,
                    children: (0, n.jsx)("img", { src: "/assets/2431801debe6535e.svg", alt: "", className: E.Wg }),
                }),
            ],
        })
    );
}

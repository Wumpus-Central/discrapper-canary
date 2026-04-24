s.d(t, { i: () => f });
var n = s(627968);
s(64700);
var i = s(503698),
    a = s.n(i),
    l = s(132500),
    o = s(821609),
    r = s(534514),
    d = s(834730),
    c = s(954571),
    u = s(18437),
    m = s(590202),
    x = s(545986),
    h = s(394900),
    g = s(652215),
    j = s(985018),
    E = s(651029);
function v(e) {
    let { questId: t, questContent: s, fullWidth: i } = e;
    return (0, n.jsx)("div", {
        className: E.UD,
        children: (0, n.jsx)(o.$, {
            fullWidth: i,
            variant: "primary",
            onClick: () => {
                (0, x.navigateToQuestHome)({ fromContent: s }),
                    c.default.track(g.HAw.QUEST_CONTENT_CLICKED, {
                        quest_id: t,
                        click_id: (0, l.A)(),
                        cta_name: m.Cy.VIEW_QUESTS,
                        is_targeted: !1,
                        ...(0, m.fF)(s),
                    });
            },
            text: j.intl.string(j.t.GURBQl),
        }),
    });
}
function f(e) {
    let { questId: t, fallbackReason: s, bodyText: i, questContent: l } = e,
        { containerRef: o, size: c } = (0, h.L)();
    return (
        (0, u.Ii)(s, t),
        (0, n.jsxs)("div", {
            ref: (e) => {
                o.current = e;
            },
            className: a()(E.kL, { [E.U]: "lg" === c, [E.SP]: "lg" !== c }),
            children: [
                (0, n.jsxs)("div", {
                    className: E.hQ,
                    children: [
                        (0, n.jsx)(r.D, {
                            variant: "lg" === c ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: j.intl.string(j.t.vnP31W),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: E.__invalid_mobileWebCopy,
                            children: i,
                        }),
                        (0, n.jsx)(v, { questId: t, questContent: l, fullWidth: "lg" !== c }),
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

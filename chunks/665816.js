n.d(t, { i: () => C });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(835245),
    r = n(821609),
    o = n(534514),
    d = n(834730),
    c = n(954571),
    u = n(18437),
    m = n(590202),
    _ = n(545986),
    h = n(394900),
    p = n(652215),
    g = n(985018),
    A = n(651029),
    f = n(956324);
function x(e) {
    let { questId: t, questContent: n, fullWidth: l } = e;
    return (0, i.jsx)("div", {
        className: A.UD,
        children: (0, i.jsx)(r.$, {
            fullWidth: l,
            variant: "primary",
            onClick: () => {
                (0, _.navigateToQuestHome)({ fromContent: n }),
                    c.default.track(p.HAw.QUEST_CONTENT_CLICKED, {
                        quest_id: t,
                        click_id: (0, s.A)(),
                        cta_name: m.Cy.VIEW_QUESTS,
                        is_targeted: !1,
                        ...(0, m.fF)(n),
                    });
            },
            text: g.intl.string(g.t.GURBQl),
        }),
    });
}
function C(e) {
    let { questId: t, fallbackReason: n, bodyText: l, questContent: s } = e,
        { containerRef: r, size: c } = (0, h.L)();
    return (
        (0, u.Ii)(n, t),
        (0, i.jsxs)("div", {
            ref: (e) => {
                r.current = e;
            },
            className: a()(A.kL, { [A.U]: "lg" === c, [A.SP]: "lg" !== c }),
            children: [
                (0, i.jsxs)("div", {
                    className: A.hQ,
                    children: [
                        (0, i.jsx)(o.D, {
                            variant: "lg" === c ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: g.intl.string(g.t.vnP31W),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: A.__invalid_mobileWebCopy,
                            children: l,
                        }),
                        (0, i.jsx)(x, { questId: t, questContent: s, fullWidth: "lg" !== c }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: A.Dg,
                    children: (0, i.jsx)("img", { src: f, alt: "", className: A.Wg }),
                }),
            ],
        })
    );
}

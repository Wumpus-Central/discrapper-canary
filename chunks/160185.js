s.d(e, { i: () => S });
var n = s(477900),
    i = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(132500),
    o = s(821609),
    c = s(297264),
    u = s(834730),
    d = s(274670),
    m = s(144779),
    x = s(174459),
    h = s(104886),
    E = s(18437),
    C = s(590202),
    f = s(617986),
    g = s(770178),
    j = s(765548),
    N = s(652215),
    v = s(375708),
    A = s(385872);
function _(t) {
    let { questId: e, questContent: s, fullWidth: i } = t;
    return (0, n.jsx)("div", {
        className: A.UD,
        children: (0, n.jsx)(o.$, {
            fullWidth: i,
            variant: "primary",
            onClick: function () {
                ((0, f.mA)({ fromContent: s }),
                    (0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "fallback_quest_embed")
                        ? (0, d.r)({
                              type: m.F.CLICK_INTERNAL,
                              questContentCTA: C.Cy.VIEW_QUESTS,
                              surfaceId: s,
                              sourceQuestContent: s,
                              isTargeted: !1,
                              relatedQuestId: e,
                          })
                        : x.default.track(N.HAw.QUEST_CONTENT_CLICKED, {
                              quest_id: e,
                              click_id: (0, r.A)(),
                              cta_name: C.Cy.VIEW_QUESTS,
                              is_targeted: !1,
                              ...(0, C.fF)(s),
                          }));
            },
            text: v.intl.string(v.t.GURBQl),
        }),
    });
}
function S(t) {
    let { questId: e, fallbackReason: s, bodyText: a, questContent: r } = t,
        { containerRef: o, size: d } = (function () {
            let [t, e] = i.useState("lg"),
                [s, n] = i.useState(void 0),
                a = (0, j.A)((t) => {
                    let s = t.target,
                        i = t.contentRect.width;
                    return (n(s.scrollHeight), null == i || i > 460) ? e("lg") : i > 280 ? e("sm") : e("xs");
                });
            return { containerRef: (0, g.w)(a), size: t, height: s };
        })();
    return (
        (0, E.Ii)(s, e),
        (0, n.jsxs)("div", {
            ref: (t) => {
                o.current = t;
            },
            className: l()(A.kL, { [A.U]: "lg" === d, [A.SP]: "lg" !== d }),
            children: [
                (0, n.jsxs)("div", {
                    className: A.hQ,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "lg" === d ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: v.intl.string(v.t.vnP31W),
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: A.__invalid_mobileWebCopy,
                            children: a,
                        }),
                        (0, n.jsx)(_, { questId: e, questContent: r, fullWidth: "lg" !== d }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: A.Dg,
                    children: (0, n.jsx)("img", { src: "/assets/2431801debe6535e.svg", alt: "", className: A.Wg }),
                }),
            ],
        })
    );
}

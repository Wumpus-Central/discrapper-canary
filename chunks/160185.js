s.d(t, { i: () => S });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(835245),
    o = s(821609),
    c = s(534514),
    d = s(834730),
    u = s(274670),
    m = s(144779),
    x = s(174459),
    h = s(104886),
    E = s(18437),
    C = s(590202),
    j = s(617986),
    g = s(770178),
    f = s(765548),
    N = s(652215),
    v = s(375708),
    _ = s(651029);
function A(e) {
    let { questId: t, questContent: s, fullWidth: i } = e;
    return (0, n.jsx)("div", {
        className: _.UD,
        children: (0, n.jsx)(o.$, {
            fullWidth: i,
            variant: "primary",
            onClick: () => {
                (0, j.navigateToQuestHome)({ fromContent: s }),
                    (0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "fallback_quest_embed")
                        ? (0, u.r)({
                              type: m.F.CLICK_INTERNAL,
                              questContentCTA: C.Cy.VIEW_QUESTS,
                              surfaceId: s,
                              sourceQuestContent: s,
                              isTargeted: !1,
                              relatedQuestId: t,
                          })
                        : x.default.track(N.HAw.QUEST_CONTENT_CLICKED, {
                              quest_id: t,
                              click_id: (0, r.A)(),
                              cta_name: C.Cy.VIEW_QUESTS,
                              is_targeted: !1,
                              ...(0, C.fF)(s),
                          });
            },
            text: v.intl.string(v.t.GURBQl),
        }),
    });
}
function S(e) {
    let { questId: t, fallbackReason: s, bodyText: a, questContent: r } = e,
        { containerRef: o, size: u } = (function () {
            let [e, t] = i.useState("lg"),
                [s, n] = i.useState(void 0),
                a = (0, f.A)((e) => {
                    let s = e.target,
                        i = e.contentRect.width;
                    return (n(s.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs");
                });
            return { containerRef: (0, g.w)(a), size: e, height: s };
        })();
    return (
        (0, E.Ii)(s, t),
        (0, n.jsxs)("div", {
            ref: (e) => {
                o.current = e;
            },
            className: l()(_.kL, { [_.U]: "lg" === u, [_.SP]: "lg" !== u }),
            children: [
                (0, n.jsxs)("div", {
                    className: _.hQ,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: v.intl.string(v.t.vnP31W),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: _.__invalid_mobileWebCopy,
                            children: a,
                        }),
                        (0, n.jsx)(A, { questId: t, questContent: r, fullWidth: "lg" !== u }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: _.Dg,
                    children: (0, n.jsx)("img", { src: "/assets/2431801debe6535e.svg", alt: "", className: _.Wg }),
                }),
            ],
        })
    );
}

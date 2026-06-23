s.d(t, { i: () => S });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(835245),
    o = s(821609),
    c = s(534514),
    u = s(834730),
    d = s(274670),
    m = s(144779),
    x = s(174459),
    h = s(104886),
    E = s(18437),
    C = s(590202),
    j = s(617986),
    f = s(770178),
    g = s(765548),
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
            onClick: function () {
                (0, j.navigateToQuestHome)({ fromContent: s }),
                    (0, h.E5)(h.kI.STEP_2_CLICKED_INTERNAL, "fallback_quest_embed")
                        ? (0, d.r)({
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
        { containerRef: o, size: d } = (function () {
            let [e, t] = i.useState("lg"),
                [s, n] = i.useState(void 0),
                a = (0, g.A)((e) => {
                    let s = e.target,
                        i = e.contentRect.width;
                    return (n(s.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs");
                });
            return { containerRef: (0, f.w)(a), size: e, height: s };
        })();
    return (
        (0, E.Ii)(s, t),
        (0, n.jsxs)("div", {
            ref: (e) => {
                o.current = e;
            },
            className: l()(_.kL, { [_.U]: "lg" === d, [_.SP]: "lg" !== d }),
            children: [
                (0, n.jsxs)("div", {
                    className: _.hQ,
                    children: [
                        (0, n.jsx)(c.D, {
                            variant: "lg" === d ? "heading-xl/bold" : "heading-lg/bold",
                            color: "text-strong",
                            children: v.intl.string(v.t.vnP31W),
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "lg" === d ? "text-sm/medium" : "text-xs/medium",
                            color: "text-default",
                            className: _.__invalid_mobileWebCopy,
                            children: a,
                        }),
                        (0, n.jsx)(A, { questId: t, questContent: r, fullWidth: "lg" !== d }),
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

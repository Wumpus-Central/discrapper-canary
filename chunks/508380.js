s.d(t, { i: () => y });
var n = s(477900),
    i = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(62617);
function o(e) {
    let { alt: t, ariaLabel: s, ariaHidden: a, role: l, width: o, height: c, className: d, style: u } = e,
        m = i.useMemo(
            () => (0, r.H)({ width: o, height: c, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [o, c, u],
        );
    return (0, n.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/004bd47bdc12e7d4a4743686daaf76f4c4e39fc2778f61d52ffdaf12ad86e4e6.svg",
        className: (0, r.Z)(d),
        alt: t,
        "aria-label": s,
        "aria-hidden": a,
        role: l ?? "img",
    });
}
var c = s(821609),
    d = s(534514),
    u = s(834730),
    m = s(438457),
    x = s(144779),
    h = s(18437),
    f = s(590202),
    E = s(321538),
    g = s(770178),
    j = s(765548),
    C = s(792996),
    v = s(385872);
function N(e) {
    let { questId: t, questContent: s, fullWidth: i } = e;
    return (0, n.jsx)("div", {
        className: v.UD,
        children: (0, n.jsx)(c.$, {
            fullWidth: i,
            variant: "primary",
            onClick: function () {
                ((0, E.mA)({ fromContent: s }),
                    (0, m.r)({
                        type: x.F.CLICK_INTERNAL,
                        questContentCTA: f.Cy.VIEW_QUESTS,
                        surfaceId: s,
                        sourceQuestContent: s,
                        isTargeted: !1,
                        relatedQuestId: t,
                    }));
            },
            text: C.intl.string(C.t.GURBQl),
        }),
    });
}
function y(e) {
    let { questId: t, fallbackReason: s, bodyText: a, questContent: r } = e,
        { containerRef: c, size: m } = (function () {
            let [e, t] = i.useState("lg"),
                [s, n] = i.useState(void 0),
                a = (0, j.A)((e) => {
                    let s = e.target,
                        i = e.contentRect.width;
                    return (n(s.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs");
                });
            return { containerRef: (0, g.w)(a), size: e, height: s };
        })();
    return (
        (0, h.Ii)(s, t),
        (0, n.jsxs)("div", {
            ref: (e) => {
                c.current = e;
            },
            className: l()(v.kL, { [v.U]: "lg" === m, [v.SP]: "lg" !== m }),
            children: [
                (0, n.jsxs)("div", {
                    className: v.hQ,
                    children: [
                        (0, n.jsx)(d.D, {
                            variant: "lg" === m ? "heading-xl/semibold" : "heading-lg/semibold",
                            color: "text-strong",
                            children: C.intl.string(C.t.vnP31W),
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "lg" === m ? "body-sm/medium" : "body-xs/medium",
                            color: "text-default",
                            className: v.__invalid_mobileWebCopy,
                            children: a,
                        }),
                        (0, n.jsx)(N, { questId: t, questContent: r, fullWidth: "lg" !== m }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: v.Dg,
                    children: (0, n.jsx)(o, { alt: "", ariaHidden: !0, width: "100%", height: 180, className: v.Wg }),
                }),
            ],
        })
    );
}

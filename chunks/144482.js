s.d(a, { default: () => R });
var i = s(477900),
    t = s(582128),
    n = s(319060),
    r = s(935462),
    l = s(862482),
    c = s(97808),
    d = s(778712),
    o = s(297264),
    A = s(834730),
    I = s(789645),
    N = s(597396),
    h = s(709066),
    m = s(681827),
    x = s(477754),
    u = s(981355),
    _ = s(240248),
    p = s(969508),
    M = s(705751),
    O = s(660183),
    E = s(589478);
let j = (0, _.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    T = (0, _.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    v = (0, _.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    D = (0, _.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function R(e) {
    let { title: a, onClose: s, id: n } = e,
        { applicationIconURL: _, applicationName: R, queryParams: C, iframeUrl: g } = (0, p.aV)(e),
        { width: L, height: f } = (0, u.A)(),
        b = t.useMemo(() => {
            let e = Math.min(((f - D - 2 * v) * 16) / 9, T);
            return Math.max(j, Math.min(L - 2 * v, e));
        }, [L, f]);
    return (0, i.jsx)(r.EO, {
        ...e,
        size: r.rI.DYNAMIC,
        className: E.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, i.jsxs)("div", {
            style: { width: b },
            children: [
                (0, i.jsxs)(r.rQ, {
                    separator: !1,
                    className: E.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)(c.eu, { src: _, size: d._3.SIZE_32, "aria-label": R, className: E.In }),
                        (0, i.jsxs)("div", {
                            className: E.Wh,
                            children: [
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(o.D, { variant: "heading-sm/bold", children: R }),
                                        (0, i.jsx)(A.E, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(h.A, {
                                    type: M.nu.BOT,
                                    className: E.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, i.jsx)(l.$n, {
                            onClick: s,
                            innerClassName: E.b,
                            className: E.cG,
                            look: l.$n.Looks.BLANK,
                            size: l.$n.Sizes.NONE,
                            "aria-label": O.intl.string(O.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, i.jsx)(I.P, { size: "md", color: "currentColor", className: E.ut }),
                        }),
                    ],
                }),
                (0, i.jsx)(m.A, {
                    aspectRatio: 16 / 9,
                    children: (0, i.jsx)(N.o, {
                        url: g,
                        shouldRefocus: !0,
                        className: E.pU,
                        contextSource: { type: x.f.INTERACTION, interactionId: n },
                        queryParams: C,
                    }),
                }),
            ],
        }),
    });
}

s.d(a, { default: () => L });
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
    N = s(20407),
    h = s(709066),
    m = s(503698),
    x = s.n(m),
    u = s(178985);
let _ = function (e) {
    let { aspectRatio: a, style: s, className: t, children: n } = e;
    return (0, i.jsx)("div", {
        className: x()(u.A, t),
        style: { paddingTop: `${(1 / a) * 100}%`, ...s },
        children: (0, i.jsx)("div", { className: u.v, children: n }),
    });
};
var p = s(477754),
    M = s(981355),
    O = s(240248),
    E = s(969508),
    j = s(705751),
    T = s(105292),
    v = s(589478);
let D = (0, O.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    R = (0, O.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    C = (0, O.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    g = (0, O.xI)(n.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function L(e) {
    let { title: a, onClose: s, id: n } = e,
        { applicationIconURL: m, applicationName: x, queryParams: u, iframeUrl: O } = (0, E.aV)(e),
        { width: L, height: f } = (0, M.A)(),
        b = t.useMemo(() => {
            let e = Math.min(((f - g - 2 * C) * 16) / 9, R);
            return Math.max(D, Math.min(L - 2 * C, e));
        }, [L, f]);
    return (0, i.jsx)(r.EO, {
        ...e,
        size: r.rI.DYNAMIC,
        className: v.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, i.jsxs)("div", {
            style: { width: b },
            children: [
                (0, i.jsxs)(r.rQ, {
                    separator: !1,
                    className: v.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)(c.eu, { src: m, size: d._3.SIZE_32, "aria-label": x, className: v.In }),
                        (0, i.jsxs)("div", {
                            className: v.Wh,
                            children: [
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(o.D, { variant: "heading-sm/bold", children: x }),
                                        (0, i.jsx)(A.E, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(h.A, {
                                    type: j.nu.BOT,
                                    className: v.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, i.jsx)(l.$n, {
                            onClick: s,
                            innerClassName: v.b,
                            className: v.cG,
                            look: l.$n.Looks.BLANK,
                            size: l.$n.Sizes.NONE,
                            "aria-label": T.intl.string(T.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, i.jsx)(I.P, { size: "md", color: "currentColor", className: v.ut }),
                        }),
                    ],
                }),
                (0, i.jsx)(_, {
                    aspectRatio: 16 / 9,
                    children: (0, i.jsx)(N.o, {
                        url: O,
                        shouldRefocus: !0,
                        className: v.pU,
                        contextSource: { type: p.f.INTERACTION, interactionId: n },
                        queryParams: u,
                    }),
                }),
            ],
        }),
    });
}

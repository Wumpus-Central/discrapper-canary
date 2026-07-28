s.d(t, { default: () => L });
var a = s(477900),
    n = s(582128),
    r = s(319060),
    i = s(935462),
    l = s(862482),
    o = s(97808),
    c = s(778712),
    u = s(297264),
    d = s(834730),
    A = s(789645),
    m = s(395678),
    E = s(709066),
    f = s(681827),
    N = s(203736),
    j = s(240248),
    _ = s(969508),
    h = s(705751),
    O = s(375708),
    p = s(544101);
let I = (0, j.xI)(r.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    M = (0, j.xI)(r.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    x = (0, j.xI)(r.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    b = (0, j.xI)(r.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function L(e) {
    let { title: t, onClose: s } = e,
        { applicationIconURL: r, applicationName: j, queryParams: L, iframeUrl: v } = (0, _.aV)(e),
        { width: T, height: g } = (0, N.A)(),
        R = n.useMemo(() => {
            let e = Math.min(((g - b - 2 * x) * 16) / 9, M);
            return Math.max(I, Math.min(T - 2 * x, e));
        }, [T, g]);
    return (0, a.jsx)(i.EO, {
        ...e,
        size: i.rI.DYNAMIC,
        className: p.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, a.jsxs)("div", {
            style: { width: R },
            children: [
                (0, a.jsxs)(i.rQ, {
                    separator: !1,
                    className: p.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsx)(o.eu, { src: r, size: c._3.SIZE_32, "aria-label": j, className: p.In }),
                        (0, a.jsxs)("div", {
                            className: p.Wh,
                            children: [
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(u.D, { variant: "heading-sm/bold", children: j }),
                                        (0, a.jsx)(d.E, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: t,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(E.A, {
                                    type: h.nu.BOT,
                                    className: p.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, a.jsx)(l.$n, {
                            onClick: s,
                            innerClassName: p.b,
                            className: p.cG,
                            look: l.$n.Looks.BLANK,
                            size: l.$n.Sizes.NONE,
                            "aria-label": O.intl.string(O.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, a.jsx)(A.P, { size: "md", color: "currentColor", className: p.ut }),
                        }),
                    ],
                }),
                (0, a.jsx)(f.A, {
                    aspectRatio: 16 / 9,
                    children: (0, a.jsx)(m.o, { url: v, shouldRefocus: !0, className: p.pU, queryParams: L }),
                }),
            ],
        }),
    });
}

n.d(t, { default: () => v });
var r = n(477900),
    s = n(582128),
    i = n(319060),
    a = n(935462),
    l = n(862482),
    u = n(97808),
    o = n(778712),
    c = n(297264),
    d = n(834730),
    f = n(789645),
    m = n(835228),
    A = n(709066),
    h = n(681827),
    E = n(981355),
    p = n(240248),
    j = n(969508),
    N = n(705751),
    x = n(375708),
    O = n(589478);
let I = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    _ = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    M = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    b = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function v(e) {
    let { title: t, onClose: n } = e,
        { applicationIconURL: i, applicationName: p, queryParams: v, iframeUrl: L } = (0, j.aV)(e),
        { width: T, height: R } = (0, E.A)(),
        g = s.useMemo(() => {
            let e = Math.min(((R - b - 2 * M) * 16) / 9, _);
            return Math.max(I, Math.min(T - 2 * M, e));
        }, [T, R]);
    return (0, r.jsx)(a.EO, {
        ...e,
        size: a.rI.DYNAMIC,
        className: O.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, r.jsxs)("div", {
            style: { width: g },
            children: [
                (0, r.jsxs)(a.rQ, {
                    separator: !1,
                    className: O.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, r.jsx)(u.eu, { src: i, size: o._3.SIZE_32, "aria-label": p, className: O.In }),
                        (0, r.jsxs)("div", {
                            className: O.Wh,
                            children: [
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(c.D, { variant: "heading-sm/bold", children: p }),
                                        (0, r.jsx)(d.E, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: t,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(A.A, {
                                    type: N.nu.BOT,
                                    className: O.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, r.jsx)(l.$n, {
                            onClick: n,
                            innerClassName: O.b,
                            className: O.cG,
                            look: l.$n.Looks.BLANK,
                            size: l.$n.Sizes.NONE,
                            "aria-label": x.intl.string(x.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, r.jsx)(f.P, { size: "md", color: "currentColor", className: O.ut }),
                        }),
                    ],
                }),
                (0, r.jsx)(h.A, {
                    aspectRatio: 16 / 9,
                    children: (0, r.jsx)(m.o, { url: L, shouldRefocus: !0, className: O.pU, queryParams: v }),
                }),
            ],
        }),
    });
}

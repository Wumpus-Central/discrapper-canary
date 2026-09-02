n.d(t, { default: () => R });
var r = n(477900),
    l = n(582128),
    i = n(319060),
    u = n(935462),
    a = n(862482),
    s = n(97808),
    o = n(778712),
    c = n(297264),
    d = n(834730),
    f = n(789645),
    m = n(162802),
    h = n(709066),
    E = n(681827),
    A = n(981355),
    p = n(240248),
    x = n(969508),
    j = n(705751),
    O = n(375708),
    I = n(589478);
let N = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    M = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    _ = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    v = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function R(e) {
    let { title: t, onClose: n } = e,
        { applicationIconURL: i, applicationName: p, queryParams: R, iframeUrl: b } = (0, x.aV)(e),
        { width: L, height: T } = (0, A.A)(),
        w = l.useMemo(() => {
            let e = Math.min(((T - v - 2 * _) * 16) / 9, M);
            return Math.max(N, Math.min(L - 2 * _, e));
        }, [L, T]);
    return (0, r.jsx)(u.EO, {
        ...e,
        size: u.rI.DYNAMIC,
        className: I.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, r.jsxs)("div", {
            style: { width: w },
            children: [
                (0, r.jsxs)(u.rQ, {
                    separator: !1,
                    className: I.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, r.jsx)(s.eu, { src: i, size: o._3.SIZE_32, "aria-label": p, className: I.In }),
                        (0, r.jsxs)("div", {
                            className: I.Wh,
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
                                (0, r.jsx)(h.A, {
                                    type: j.nu.BOT,
                                    className: I.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, r.jsx)(a.$n, {
                            onClick: n,
                            innerClassName: I.b,
                            className: I.cG,
                            look: a.$n.Looks.BLANK,
                            size: a.$n.Sizes.NONE,
                            "aria-label": O.intl.string(O.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, r.jsx)(f.P, { size: "md", color: "currentColor", className: I.ut }),
                        }),
                    ],
                }),
                (0, r.jsx)(E.A, {
                    aspectRatio: 16 / 9,
                    children: (0, r.jsx)(m.o, { url: b, shouldRefocus: !0, className: I.pU, queryParams: R }),
                }),
            ],
        }),
    });
}

n.d(t, { default: () => T });
var r = n(477900),
    l = n(582128),
    u = n(319060),
    i = n(935462),
    a = n(862482),
    s = n(97808),
    o = n(778712),
    c = n(297264),
    d = n(834730),
    f = n(789645),
    m = n(597396),
    h = n(709066),
    E = n(681827),
    p = n(477754),
    A = n(981355),
    x = n(240248),
    O = n(969508),
    I = n(705751),
    j = n(375708),
    N = n(589478);
let M = (0, x.xI)(u.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    R = (0, x.xI)(u.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    _ = (0, x.xI)(u.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    v = (0, x.xI)(u.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function T(e) {
    let { title: t, onClose: n, id: u } = e,
        { applicationIconURL: x, applicationName: T, queryParams: b, iframeUrl: L } = (0, O.aV)(e),
        { width: w, height: S } = (0, A.A)(),
        g = l.useMemo(() => {
            let e = Math.min(((S - v - 2 * _) * 16) / 9, R);
            return Math.max(M, Math.min(w - 2 * _, e));
        }, [w, S]);
    return (0, r.jsx)(i.EO, {
        ...e,
        size: i.rI.DYNAMIC,
        className: N.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, r.jsxs)("div", {
            style: { width: g },
            children: [
                (0, r.jsxs)(i.rQ, {
                    separator: !1,
                    className: N.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, r.jsx)(s.eu, { src: x, size: o._3.SIZE_32, "aria-label": T, className: N.In }),
                        (0, r.jsxs)("div", {
                            className: N.Wh,
                            children: [
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(c.D, { variant: "heading-sm/bold", children: T }),
                                        (0, r.jsx)(d.E, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: t,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(h.A, {
                                    type: I.nu.BOT,
                                    className: N.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, r.jsx)(a.$n, {
                            onClick: n,
                            innerClassName: N.b,
                            className: N.cG,
                            look: a.$n.Looks.BLANK,
                            size: a.$n.Sizes.NONE,
                            "aria-label": j.intl.string(j.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, r.jsx)(f.P, { size: "md", color: "currentColor", className: N.ut }),
                        }),
                    ],
                }),
                (0, r.jsx)(E.A, {
                    aspectRatio: 16 / 9,
                    children: (0, r.jsx)(m.o, {
                        url: L,
                        shouldRefocus: !0,
                        className: N.pU,
                        contextSource: { type: p.f.INTERACTION, interactionId: u },
                        queryParams: b,
                    }),
                }),
            ],
        }),
    });
}

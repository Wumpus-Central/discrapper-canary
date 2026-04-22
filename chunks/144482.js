n.d(t, { default: () => f });
var a = n(627968),
    l = n(64700),
    i = n(319060),
    o = n(862482),
    u = n(935462),
    c = n(97808),
    r = n(778712),
    s = n(534514),
    d = n(834730),
    I = n(789645),
    p = n(398866),
    A = n(709066),
    m = n(681827),
    _ = n(981355),
    E = n(240248),
    h = n(969508),
    C = n(705751),
    y = n(985018),
    T = n(952829);
let N = (0, E.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    O = (0, E.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    M = (0, E.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    g = (0, E.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function f(e) {
    let { title: t, onClose: n } = e,
        { applicationIconURL: i, applicationName: E, queryParams: f, iframeUrl: R } = (0, h.aV)(e),
        { width: v, height: S } = (0, _.A)(),
        L = l.useMemo(() => {
            let e = Math.min(((S - g - 2 * M) * 16) / 9, O);
            return Math.max(N, Math.min(v - 2 * M, e));
        }, [v, S]);
    return (0, a.jsx)(u.EO, {
        ...e,
        size: u.rI.DYNAMIC,
        className: T.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, a.jsxs)("div", {
            style: { width: L },
            children: [
                (0, a.jsxs)(u.rQ, {
                    separator: !1,
                    className: T.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsx)(c.eu, { src: i, size: r._3.SIZE_32, "aria-label": E, className: T.In }),
                        (0, a.jsxs)("div", {
                            className: T.Wh,
                            children: [
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(s.D, { variant: "heading-sm/bold", children: E }),
                                        (0, a.jsx)(d.E, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: t,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(A.A, {
                                    type: C.nu.BOT,
                                    className: T.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, a.jsx)(o.$n, {
                            onClick: n,
                            innerClassName: T.b,
                            className: T.cG,
                            look: o.$n.Looks.BLANK,
                            size: o.$n.Sizes.NONE,
                            "aria-label": y.intl.string(y.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, a.jsx)(I.P, { size: "md", color: "currentColor", className: T.ut }),
                        }),
                    ],
                }),
                (0, a.jsx)(m.A, {
                    aspectRatio: 16 / 9,
                    children: (0, a.jsx)(p.o, { url: R, shouldRefocus: !0, className: T.pU, queryParams: f }),
                }),
            ],
        }),
    });
}

n.d(t, { default: () => N });
var a = n(627968),
    l = n(64700),
    i = n(319060),
    o = n(421380),
    c = n(397927),
    s = n(398866),
    u = n(709066),
    d = n(681827),
    r = n(203736),
    I = n(240248),
    p = n(969508),
    A = n(705751),
    m = n(985018),
    _ = n(505712);
let E = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    h = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    C = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    T = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function N(e) {
    let { title: t, onClose: n } = e,
        { applicationIconURL: i, applicationName: I, queryParams: N, iframeUrl: y } = (0, p.aV)(e),
        { width: O, height: M } = (0, r.A)(),
        g = l.useMemo(() => {
            let e = Math.min(((M - T - 2 * C) * 16) / 9, h);
            return Math.max(E, Math.min(O - 2 * C, e));
        }, [O, M]);
    return (0, a.jsx)(c.EOs, {
        ...e,
        size: c.rIJ.DYNAMIC,
        className: _.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, a.jsxs)("div", {
            style: { width: g },
            children: [
                (0, a.jsxs)(c.rQ0, {
                    separator: !1,
                    className: _.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsx)(c.euF, { src: i, size: c._3J.SIZE_32, "aria-label": I, className: _.In }),
                        (0, a.jsxs)("div", {
                            className: _.Wh,
                            children: [
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(c.Heading, { variant: "heading-sm/bold", children: I }),
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: t,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(u.A, {
                                    type: A.nu.BOT,
                                    className: _.AO,
                                    verified: e.application.bot?.verified,
                                }),
                            ],
                        }),
                        (0, a.jsx)(o.$n, {
                            onClick: n,
                            innerClassName: _.b,
                            className: _.cG,
                            look: o.$n.Looks.BLANK,
                            size: o.$n.Sizes.NONE,
                            "aria-label": m.intl.string(m.t.WAI6xu),
                            "data-migration-pending": !0,
                            children: (0, a.jsx)(c.PGe, { size: "md", color: "currentColor", className: _.ut }),
                        }),
                    ],
                }),
                (0, a.jsx)(d.A, {
                    aspectRatio: 16 / 9,
                    children: (0, a.jsx)(s.o, { url: y, shouldRefocus: !0, className: _.pU, queryParams: N }),
                }),
            ],
        }),
    });
}

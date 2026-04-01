n.d(t, { default: () => y });
var a = n(627968),
    l = n(64700),
    i = n(319060),
    o = n(421380),
    u = n(397927),
    c = n(398866),
    r = n(709066),
    s = n(681827),
    d = n(981355),
    I = n(240248),
    p = n(969508),
    A = n(705751),
    m = n(985018),
    _ = n(31277);
let E = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    h = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    C = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    T = (0, I.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);
function y(e) {
    let { title: t, onClose: n } = e,
        { applicationIconURL: i, applicationName: I, queryParams: y, iframeUrl: N } = (0, p.aV)(e),
        { width: O, height: g } = (0, d.A)(),
        M = l.useMemo(() => {
            let e = Math.min(((g - T - 2 * C) * 16) / 9, h);
            return Math.max(E, Math.min(O - 2 * C, e));
        }, [O, g]);
    return (0, a.jsx)(u.EOs, {
        ...e,
        size: u.rIJ.DYNAMIC,
        className: _.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, a.jsxs)("div", {
            style: { width: M },
            children: [
                (0, a.jsxs)(u.rQ0, {
                    separator: !1,
                    className: _.Hc,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsx)(u.euF, { src: i, size: u._3J.SIZE_32, "aria-label": I, className: _.In }),
                        (0, a.jsxs)("div", {
                            className: _.Wh,
                            children: [
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(u.Heading, { variant: "heading-sm/bold", children: I }),
                                        (0, a.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "interactive-text-default",
                                            children: t,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(r.A, {
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
                            children: (0, a.jsx)(u.PGe, { size: "md", color: "currentColor", className: _.ut }),
                        }),
                    ],
                }),
                (0, a.jsx)(s.A, {
                    aspectRatio: 16 / 9,
                    children: (0, a.jsx)(c.o, { url: N, shouldRefocus: !0, className: _.pU, queryParams: y }),
                }),
            ],
        }),
    });
}

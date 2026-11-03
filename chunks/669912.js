i.d(e, { A: () => h });
var a = i(477900),
    l = i(582128),
    r = i(503698),
    n = i.n(r),
    t = i(935462),
    c = i(770178),
    d = i(765548),
    o = i(857707),
    x = i(925192),
    m = i(862649);
function h(s) {
    let { transitionState: e, orientation: i, impressionRef: r, ariaLabel: h, video: v, footer: u } = s,
        j = "portrait" === i,
        [N, p] = l.useState(142),
        C = (0, d.A)((s) => {
            p(s.target.offsetHeight);
        }),
        g = (0, c.w)(C),
        f = l.useMemo(() => ({ isPortrait: j, portraitFooterRef: g }), [j, g]);
    return (0, a.jsx)(o.D.Provider, {
        value: f,
        children: (0, a.jsx)("div", {
            style: j ? { "--custom-portrait-footer-height": `${N}px` } : void 0,
            children: (0, a.jsx)(t.EO, {
                "data-migration-pending": !0,
                transitionState: e,
                size: t.rI.DYNAMIC,
                className: n()(m.CR, { [m.VX]: "landscape" === i, [m.Zy]: j }),
                "aria-label": h,
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: (0, a.jsx)("div", {
                    ref: r,
                    className: m.NE,
                    children: (0, a.jsx)("div", {
                        className: n()(m.S3, x.S),
                        children: (0, a.jsxs)("div", { className: m.jE, children: [v, u] }),
                    }),
                }),
            }),
        }),
    });
}

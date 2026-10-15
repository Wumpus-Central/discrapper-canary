i.d(e, { A: () => h });
var a = i(477900),
    l = i(582128),
    r = i(503698),
    n = i.n(r),
    t = i(935462),
    d = i(770178),
    c = i(765548),
    o = i(857707),
    m = i(925192),
    x = i(862649);
function h(s) {
    let { transitionState: e, orientation: i, impressionRef: r, ariaLabel: h, video: v, footer: u } = s,
        j = "portrait" === i,
        [N, p] = l.useState(142),
        C = (0, c.A)((s) => {
            p(s.target.offsetHeight);
        }),
        g = (0, d.w)(C),
        f = l.useMemo(() => ({ isPortrait: j, portraitFooterRef: g }), [j, g]);
    return (0, a.jsx)(o.D.Provider, {
        value: f,
        children: (0, a.jsx)("div", {
            style: j ? { "--custom-portrait-footer-height": `${N}px` } : void 0,
            children: (0, a.jsx)(t.EO, {
                "data-migration-pending": !0,
                transitionState: e,
                size: t.rI.DYNAMIC,
                className: n()(x.CR, { [x.VX]: "landscape" === i, [x.Zy]: j }),
                "aria-label": h,
                fullscreenOnMobile: !1,
                parentComponent: "Modal",
                children: (0, a.jsx)("div", {
                    ref: r,
                    className: x.NE,
                    children: (0, a.jsx)("div", {
                        className: n()(x.S3, m.S),
                        children: (0, a.jsxs)("div", { className: x.jE, children: [v, u] }),
                    }),
                }),
            }),
        }),
    });
}

var a = i(477900),
    l = i(582128),
    r = i(503698),
    n = i.n(r),
    t = i(935462),
    d = i(770178),
    c = i(765548),
    o = i(857707),
    x = i(925192),
    m = i(862649);
i.d(
    e,
    {},
    {
        A: function (s) {
            let { transitionState: e, orientation: i, impressionRef: r, ariaLabel: h, video: v, footer: u } = s,
                j = "portrait" === i,
                [N, p] = l.useState(142),
                C = (0, c.A)((s) => {
                    p(s.target.offsetHeight);
                }),
                f = (0, d.w)(C),
                g = l.useMemo(() => ({ isPortrait: j, portraitFooterRef: f }), [j, f]);
            return (0, a.jsx)(o.D.Provider, {
                value: g,
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
        },
    },
);

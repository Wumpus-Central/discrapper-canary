t.d(n, { b: () => C });
var l = t(627968);
t(64700);
var i = t(503698),
    a = t.n(i),
    s = t(110259),
    r = t(862482),
    o = t(789645),
    c = t(834730),
    u = t(403581),
    d = t(139286),
    A = t(954571),
    h = t(222643),
    p = t(652215),
    m = t(985018),
    g = t(648666);
function f(e) {
    let { hidden: n, onDismiss: t } = e;
    return (
        (0, d.A)({ type: s.ImpressionTypes.VIEW, name: s.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: n }, [
            n,
        ]),
        (0, l.jsxs)("div", {
            className: a()(g.jC, { [g.R]: n }),
            children: [
                (0, l.jsx)("img", {
                    className: g.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, l.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: g.b,
                    "aria-label": m.intl.string(m.t.cpT0Cq),
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.NONE,
                    onClick: () => {
                        t(), A.default.track(p.HAw.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, l.jsx)(o.P, { size: "xs", className: g.ut, color: "white" }),
                }),
                (0, l.jsx)("div", {
                    className: g.Gm,
                    children: (0, l.jsxs)("div", {
                        className: g.op,
                        children: [
                            (0, l.jsx)(c.E, {
                                className: g.aV,
                                variant: "text-sm/medium",
                                children: m.intl.format(m.t.ruvD7i, {}),
                            }),
                            (0, l.jsxs)("div", {
                                className: g.vX,
                                children: [
                                    (0, l.jsx)(u.t, { size: "xs" }),
                                    (0, l.jsx)(c.E, {
                                        className: g.aV,
                                        variant: "text-sm/medium",
                                        children: m.intl.string(m.t["BMw+7I"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function C(e) {
    let { ...n } = e;
    return (0, l.jsx)(h.x, { ...n, renderComponent: (e) => (0, l.jsx)(f, { ...e }) });
}

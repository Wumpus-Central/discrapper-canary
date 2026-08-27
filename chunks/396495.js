t.d(n, { b: () => p });
var l = t(477900);
t(582128);
var i = t(503698),
    a = t.n(i),
    s = t(562708),
    r = t(862482),
    o = t(789645),
    c = t(834730),
    u = t(403581),
    d = t(139286),
    A = t(174459),
    m = t(222643),
    h = t(652215),
    C = t(375708),
    f = t(693517);
function E(e) {
    let { hidden: n, onDismiss: t } = e;
    return (
        (0, d.A)({ type: s.ImpressionTypes.VIEW, name: s.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: n }, [
            n,
        ]),
        (0, l.jsxs)("div", {
            className: a()(f.jC, { [f.R]: n }),
            children: [
                (0, l.jsx)("img", {
                    className: f.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, l.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: f.b,
                    "aria-label": C.intl.string(C.t.cpT0Cq),
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.NONE,
                    onClick: () => {
                        t(), A.default.track(h.HAw.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, l.jsx)(o.P, { size: "xs", className: f.ut, color: "white" }),
                }),
                (0, l.jsx)("div", {
                    className: f.Gm,
                    children: (0, l.jsxs)("div", {
                        className: f.op,
                        children: [
                            (0, l.jsx)(c.E, {
                                className: f.aV,
                                variant: "text-sm/medium",
                                children: C.intl.format(C.t.ruvD7i, {}),
                            }),
                            (0, l.jsxs)("div", {
                                className: f.vX,
                                children: [
                                    (0, l.jsx)(u.t, { size: "xs" }),
                                    (0, l.jsx)(c.E, {
                                        className: f.aV,
                                        variant: "text-sm/medium",
                                        children: C.intl.string(C.t["BMw+7I"]),
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
function p(e) {
    let { ...n } = e;
    return (0, l.jsx)(m.x, { ...n, renderComponent: (e) => (0, l.jsx)(E, { ...e }) });
}

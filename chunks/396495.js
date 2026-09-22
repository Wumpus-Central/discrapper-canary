t.d(n, { b: () => g });
var i = t(477900);
t(582128);
var l = t(503698),
    s = t.n(l),
    a = t(562708),
    o = t(862482),
    r = t(789645),
    c = t(834730),
    u = t(403581),
    d = t(139286),
    A = t(174459),
    m = t(222643),
    h = t(652215),
    C = t(375708),
    p = t(693517);
function x(e) {
    let { hidden: n, onDismiss: t } = e;
    return (
        (0, d.A)({ type: a.ImpressionTypes.VIEW, name: a.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: n }, [
            n,
        ]),
        (0, i.jsxs)("div", {
            className: s()(p.jC, { [p.R]: n }),
            children: [
                (0, i.jsx)("img", {
                    className: p.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, i.jsx)(o.$n, {
                    "data-migration-pending": !0,
                    className: p.b,
                    "aria-label": C.intl.string(C.t.cpT0Cq),
                    look: o.$n.Looks.BLANK,
                    size: o.$n.Sizes.NONE,
                    onClick: () => {
                        (t(), A.default.track(h.HAw.HD_STREAMING_POPOUT_DISMISSED));
                    },
                    children: (0, i.jsx)(r.P, { size: "xs", className: p.ut, color: "white" }),
                }),
                (0, i.jsx)("div", {
                    className: p.Gm,
                    children: (0, i.jsxs)("div", {
                        className: p.op,
                        children: [
                            (0, i.jsx)(c.E, {
                                className: p.aV,
                                variant: "text-sm/medium",
                                children: C.intl.format(C.t.ruvD7i, {}),
                            }),
                            (0, i.jsxs)("div", {
                                className: p.vX,
                                children: [
                                    (0, i.jsx)(u.t, { size: "xs" }),
                                    (0, i.jsx)(c.E, {
                                        className: p.aV,
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
function g(e) {
    let { ...n } = e;
    return (0, i.jsx)(m.x, { ...n, renderComponent: (e) => (0, i.jsx)(x, { ...e }) });
}

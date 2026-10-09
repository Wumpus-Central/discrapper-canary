t.d(n, { b: () => f });
var i = t(477900);
t(582128);
var l = t(503698),
    s = t.n(l),
    a = t(562708),
    r = t(862482),
    o = t(789645),
    c = t(834730),
    u = t(403581),
    d = t(139286),
    A = t(174459),
    h = t(222643),
    m = t(652215),
    g = t(660183),
    x = t(693517);
function C(e) {
    let { hidden: n, onDismiss: t } = e;
    return (
        (0, d.A)({ type: a.ImpressionTypes.VIEW, name: a.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: n }, [
            n,
        ]),
        (0, i.jsxs)("div", {
            className: s()(x.jC, { [x.R]: n }),
            children: [
                (0, i.jsx)("img", {
                    className: x.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, i.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: x.b,
                    "aria-label": g.intl.string(g.t.cpT0Cq),
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.NONE,
                    onClick: () => {
                        (t(), A.default.track(m.HAw.HD_STREAMING_POPOUT_DISMISSED));
                    },
                    children: (0, i.jsx)(o.P, { size: "xs", className: x.ut, color: "white" }),
                }),
                (0, i.jsx)("div", {
                    className: x.Gm,
                    children: (0, i.jsxs)("div", {
                        className: x.op,
                        children: [
                            (0, i.jsx)(c.E, {
                                className: x.aV,
                                variant: "text-sm/medium",
                                children: g.intl.format(g.t.ruvD7i, {}),
                            }),
                            (0, i.jsxs)("div", {
                                className: x.vX,
                                children: [
                                    (0, i.jsx)(u.t, { size: "xs" }),
                                    (0, i.jsx)(c.E, {
                                        className: x.aV,
                                        variant: "text-sm/medium",
                                        children: g.intl.string(g.t["BMw+7I"]),
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
function f(e) {
    let { ...n } = e;
    return (0, i.jsx)(h.x, { ...n, renderComponent: (e) => (0, i.jsx)(C, { ...e }) });
}

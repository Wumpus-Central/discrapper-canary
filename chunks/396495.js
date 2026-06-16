t.d(n, { b: () => g });
var l = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(562708),
    r = t(862482),
    o = t(789645),
    c = t(834730),
    u = t(403581),
    d = t(139286),
    A = t(174459),
    h = t(222643),
    m = t(652215),
    C = t(375708),
    E = t(648666);
function p(e) {
    let { hidden: n, onDismiss: t } = e;
    return (
        (0, d.A)({ type: a.ImpressionTypes.VIEW, name: a.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: n }, [
            n,
        ]),
        (0, l.jsxs)("div", {
            className: s()(E.jC, { [E.R]: n }),
            children: [
                (0, l.jsx)("img", {
                    className: E.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, l.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: E.b,
                    "aria-label": C.intl.string(C.t.cpT0Cq),
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.NONE,
                    onClick: () => {
                        t(), A.default.track(m.HAw.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, l.jsx)(o.P, { size: "xs", className: E.ut, color: "white" }),
                }),
                (0, l.jsx)("div", {
                    className: E.Gm,
                    children: (0, l.jsxs)("div", {
                        className: E.op,
                        children: [
                            (0, l.jsx)(c.E, {
                                className: E.aV,
                                variant: "text-sm/medium",
                                children: C.intl.format(C.t.ruvD7i, {}),
                            }),
                            (0, l.jsxs)("div", {
                                className: E.vX,
                                children: [
                                    (0, l.jsx)(u.t, { size: "xs" }),
                                    (0, l.jsx)(c.E, {
                                        className: E.aV,
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
    return (0, l.jsx)(h.x, { ...n, renderComponent: (e) => (0, l.jsx)(p, { ...e }) });
}

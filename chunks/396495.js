n.d(t, { b: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(110259),
    r = n(421380),
    o = n(397927),
    c = n(139286),
    d = n(954571),
    u = n(222643),
    h = n(652215),
    A = n(985018),
    _ = n(164778);
function m(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, c.A)({ type: a.ImpressionTypes.VIEW, name: a.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: t }, [
            t,
        ]),
        (0, i.jsxs)("div", {
            className: s()(_.jC, { [_.R]: t }),
            children: [
                (0, i.jsx)("img", {
                    className: _.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, i.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: _.b,
                    "aria-label": A.intl.string(A.t.cpT0Cq),
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.NONE,
                    onClick: () => {
                        n(), d.default.track(h.HAw.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, i.jsx)(o.PGe, { size: "xs", className: _.ut, color: "white" }),
                }),
                (0, i.jsx)("div", {
                    className: _.Gm,
                    children: (0, i.jsxs)("div", {
                        className: _.op,
                        children: [
                            (0, i.jsx)(o.Text, {
                                className: _.aV,
                                variant: "text-sm/medium",
                                children: A.intl.format(A.t.ruvD7i, {}),
                            }),
                            (0, i.jsxs)("div", {
                                className: _.vX,
                                children: [
                                    (0, i.jsx)(o.tvc, { size: "xs" }),
                                    (0, i.jsx)(o.Text, {
                                        className: _.aV,
                                        variant: "text-sm/medium",
                                        children: A.intl.string(A.t["BMw+7I"]),
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
    let { ...t } = e;
    return (0, i.jsx)(u.x, { ...t, renderComponent: (e) => (0, i.jsx)(m, { ...e }) });
}

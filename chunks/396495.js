"use strict";
n.d(t, { b: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(110259),
    a = n(421380),
    o = n(397927),
    c = n(139286),
    d = n(954571),
    u = n(222643),
    h = n(652215),
    A = n(985018),
    p = n(792427);
function g(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, c.A)({ type: r.ImpressionTypes.VIEW, name: r.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: t }, [
            t,
        ]),
        (0, i.jsxs)("div", {
            className: l()(p.jC, { [p.R]: t }),
            children: [
                (0, i.jsx)("img", {
                    className: p.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, i.jsx)(a.$n, {
                    "data-migration-pending": !0,
                    className: p.b,
                    "aria-label": A.intl.string(A.t.cpT0Cq),
                    look: a.$n.Looks.BLANK,
                    size: a.$n.Sizes.NONE,
                    onClick: () => {
                        n(), d.default.track(h.HAw.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, i.jsx)(o.PGe, { size: "xs", className: p.ut, color: "white" }),
                }),
                (0, i.jsx)("div", {
                    className: p.Gm,
                    children: (0, i.jsxs)("div", {
                        className: p.op,
                        children: [
                            (0, i.jsx)(o.Text, {
                                className: p.aV,
                                variant: "text-sm/medium",
                                children: A.intl.format(A.t.ruvD7i, {}),
                            }),
                            (0, i.jsxs)("div", {
                                className: p.vX,
                                children: [
                                    (0, i.jsx)(o.tvc, { size: "xs" }),
                                    (0, i.jsx)(o.Text, {
                                        className: p.aV,
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
function m(e) {
    let { ...t } = e;
    return (0, i.jsx)(u.x, { ...t, renderComponent: (e) => (0, i.jsx)(g, { ...e }) });
}

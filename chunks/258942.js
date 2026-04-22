s.d(i, { default: () => E });
var e = s(627968),
    n = s(64700),
    r = s(772707),
    l = s(554146),
    a = s(152367),
    c = s(834730),
    o = s(430392),
    b = s(460905),
    d = s(826673),
    m = s(837057),
    x = s(813516),
    u = s(954571),
    _ = s(310419),
    C = s(652215),
    p = s(49999),
    A = s(488995),
    h = s(985018),
    I = s(568163);
function E(t) {
    let { guildId: i, transitionState: E, onClose: N, analyticsType: j = l.M.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            u.default.track(C.HAw.DISMISSIBLE_CONTENT_SHOWN, { type: l.M[j], guild_id: i });
        }, [i, j]),
        (0, e.jsx)(r.k, {
            title: h.intl.string(h.t["2tv5YG"]),
            subtitle: h.intl.string(h.t.pgwlD7),
            transitionState: E,
            size: "sm",
            graphic: { type: "lottie", lottie: () => s.e("95947").then(s.t.bind(s, 604902, 19)), aspectRatio: "6/4" },
            onClose: N,
            actions: [
                {
                    variant: "secondary",
                    text: h.intl.string(h.t.L5eIZ2),
                    onClick: () => {
                        N(), (0, d.Dr)(j, { forceTrack: !0, dismissAction: p.i.SECONDARY, guildId: i });
                    },
                },
                {
                    variant: "primary",
                    text: h.intl.string(h.t["5e8Mrp"]),
                    onClick: () => {
                        N(),
                            (0, d.Dr)(j, { forceTrack: !0, dismissAction: p.i.PRIMARY, guildId: i }),
                            (0, m.transitionToGlobalDiscovery)({
                                tab: A.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: i,
                                    entrypoint: { name: _.sW.APPLICATION_DIRECTORY_UPSELL_MODAL },
                                },
                            });
                    },
                },
            ],
            children: (0, e.jsxs)("ul", {
                className: I.qI,
                children: [
                    (0, e.jsxs)("li", {
                        className: I.Aw,
                        children: [
                            (0, e.jsx)(a.D, { color: "currentColor", className: I.Kb }),
                            (0, e.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: h.intl.string(h.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, e.jsx)(x.A, { className: I.yF }),
                    (0, e.jsxs)("li", {
                        className: I.Aw,
                        children: [
                            (0, e.jsx)(o.C, { color: "currentColor", className: I.EQ }),
                            (0, e.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: h.intl.string(h.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, e.jsx)(x.A, { className: I.yF }),
                    (0, e.jsxs)("li", {
                        className: I.Aw,
                        children: [
                            (0, e.jsx)(b.n, { color: "currentColor", className: I.Cf }),
                            (0, e.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: h.intl.string(h.t.wQJMPC),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}

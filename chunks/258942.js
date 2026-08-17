i.d(s, { default: () => D });
var e = i(477900),
    n = i(582128),
    r = i(772707),
    a = i(554146),
    l = i(152367),
    c = i(834730),
    o = i(430392),
    d = i(460905),
    m = i(826673),
    u = i(837057),
    x = i(749314),
    p = i(174459),
    A = i(310419),
    C = i(652215),
    h = i(49999),
    N = i(488995),
    f = i(375708),
    j = i(976811);
function D(t) {
    let { guildId: s, transitionState: D, onClose: E, analyticsType: I = a.M.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            p.default.track(C.HAw.DISMISSIBLE_CONTENT_SHOWN, { type: a.M[I], guild_id: s });
        }, [s, I]),
        (0, e.jsx)(r.k, {
            title: f.intl.string(f.t["2tv5YG"]),
            subtitle: f.intl.string(f.t.pgwlD7),
            transitionState: D,
            size: "sm",
            graphic: { type: "lottie", lottie: () => i.e("995947").then(i.t.bind(i, 604902, 19)), aspectRatio: "6/4" },
            onClose: E,
            actions: [
                {
                    variant: "secondary",
                    text: f.intl.string(f.t.L5eIZ2),
                    onClick: function () {
                        E(), (0, m.Dr)(I, { forceTrack: !0, dismissAction: h.i.SECONDARY, guildId: s });
                    },
                },
                {
                    variant: "primary",
                    text: f.intl.string(f.t["5e8Mrp"]),
                    onClick: function () {
                        E(),
                            (0, m.Dr)(I, { forceTrack: !0, dismissAction: h.i.PRIMARY, guildId: s }),
                            (0, u.transitionToGlobalDiscovery)({
                                tab: N.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: s,
                                    entrypoint: { name: A.sW.APPLICATION_DIRECTORY_UPSELL_MODAL },
                                },
                            });
                    },
                },
            ],
            children: (0, e.jsxs)("ul", {
                className: j.qI,
                children: [
                    (0, e.jsxs)("li", {
                        className: j.Aw,
                        children: [
                            (0, e.jsx)(l.D, { color: "currentColor", className: j.Kb }),
                            (0, e.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: f.intl.string(f.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, e.jsx)(x.A, { className: j.yF }),
                    (0, e.jsxs)("li", {
                        className: j.Aw,
                        children: [
                            (0, e.jsx)(o.RobotIcon, { color: "currentColor", className: j.EQ }),
                            (0, e.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: f.intl.string(f.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, e.jsx)(x.A, { className: j.yF }),
                    (0, e.jsxs)("li", {
                        className: j.Aw,
                        children: [
                            (0, e.jsx)(d.n, { color: "currentColor", className: j.Cf }),
                            (0, e.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: f.intl.string(f.t.wQJMPC),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}

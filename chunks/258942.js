s.d(i, { default: () => A });
var e = s(627968),
    n = s(64700),
    r = s(158954),
    l = s(554146),
    a = s(397927),
    o = s(826673),
    c = s(837057),
    b = s(813516),
    d = s(954571),
    m = s(310419),
    x = s(652215),
    u = s(49999),
    _ = s(488995),
    C = s(985018),
    p = s(58483);
function A(t) {
    let { guildId: i, transitionState: A, onClose: h, analyticsType: I = l.M.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            d.default.track(x.HAw.DISMISSIBLE_CONTENT_SHOWN, { type: l.M[I], guild_id: i });
        }, [i, I]),
        (0, e.jsx)(r.ExpressiveModal, {
            title: C.intl.string(C.t["2tv5YG"]),
            subtitle: C.intl.string(C.t.pgwlD7),
            transitionState: A,
            size: "sm",
            graphic: { type: "lottie", lottie: () => s.e("95947").then(s.t.bind(s, 604902, 19)), aspectRatio: "6/4" },
            onClose: h,
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t.L5eIZ2),
                    onClick: () => {
                        h(), (0, o.Dr)(I, { forceTrack: !0, dismissAction: u.i.SECONDARY, guildId: i });
                    },
                },
                {
                    variant: "primary",
                    text: C.intl.string(C.t["5e8Mrp"]),
                    onClick: () => {
                        h(),
                            (0, o.Dr)(I, { forceTrack: !0, dismissAction: u.i.PRIMARY, guildId: i }),
                            (0, c.transitionToGlobalDiscovery)({
                                tab: _.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: i,
                                    entrypoint: { name: m.sW.APPLICATION_DIRECTORY_UPSELL_MODAL },
                                },
                            });
                    },
                },
            ],
            children: (0, e.jsxs)("ul", {
                className: p.qI,
                children: [
                    (0, e.jsxs)("li", {
                        className: p.Aw,
                        children: [
                            (0, e.jsx)(a.Dud, { color: "currentColor", className: p.Kb }),
                            (0, e.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: C.intl.string(C.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, e.jsx)(b.A, { className: p.yF }),
                    (0, e.jsxs)("li", {
                        className: p.Aw,
                        children: [
                            (0, e.jsx)(a.CnV, { color: "currentColor", className: p.EQ }),
                            (0, e.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: C.intl.string(C.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, e.jsx)(b.A, { className: p.yF }),
                    (0, e.jsxs)("li", {
                        className: p.Aw,
                        children: [
                            (0, e.jsx)(a.nm2, { color: "currentColor", className: p.Cf }),
                            (0, e.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: C.intl.string(C.t.wQJMPC),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}

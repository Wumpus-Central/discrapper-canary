e.d(i, { default: () => C });
var s = e(54381),
    n = e(473749),
    a = e(793030),
    o = e(704215),
    r = e(481060),
    l = e(266454),
    c = e(749681),
    b = e(661824),
    d = e(626135),
    m = e(258971),
    x = e(981631),
    u = e(921944),
    I = e(49898),
    f = e(388032),
    p = e(171339);
function C(t) {
    let { guildId: i, transitionState: C, onClose: h, analyticsType: v = o.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            d.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: o.z[v],
                guild_id: i,
            });
        }, [i, v]),
        (0, s.jsx)(a.ExpressiveModal, {
            title: f.intl.string(f.t["2tv5YG"]),
            subtitle: f.intl.string(f.t.pgwlD7),
            transitionState: C,
            size: "sm",
            graphic: {
                type: "lottie",
                lottie: () => e.e("94792").then(e.t.bind(e, 972951, 19)),
                aspectRatio: "6/4",
            },
            onClose: h,
            actions: [
                {
                    variant: "secondary",
                    text: f.intl.string(f.t.L5eIZ2),
                    onClick: () => {
                        h(),
                            (0, l.Q3)(v, {
                                forceTrack: !0,
                                dismissAction: u.L.SECONDARY,
                                guildId: i,
                            });
                    },
                },
                {
                    variant: "primary",
                    text: f.intl.string(f.t["5e8Mrp"]),
                    onClick: () => {
                        h(),
                            (0, l.Q3)(v, {
                                forceTrack: !0,
                                dismissAction: u.L.PRIMARY,
                                guildId: i,
                            }),
                            (0, c.transitionToGlobalDiscovery)({
                                tab: I.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: i,
                                    entrypoint: { name: m.xF.APPLICATION_DIRECTORY_UPSELL_MODAL },
                                },
                            });
                    },
                },
            ],
            children: (0, s.jsxs)("ul", {
                className: p.listContainer,
                children: [
                    (0, s.jsxs)("li", {
                        className: p.listItem,
                        children: [
                            (0, s.jsx)(r.$2U, {
                                color: "currentColor",
                                className: p.wandIcon,
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: f.intl.string(f.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)(b.Z, { className: p.divider }),
                    (0, s.jsxs)("li", {
                        className: p.listItem,
                        children: [
                            (0, s.jsx)(r.wGt, {
                                color: "currentColor",
                                className: p.robotIcon,
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: f.intl.string(f.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, s.jsx)(b.Z, { className: p.divider }),
                    (0, s.jsxs)("li", {
                        className: p.listItem,
                        children: [
                            (0, s.jsx)(r.EO4, {
                                color: "currentColor",
                                className: p.smileIcon,
                            }),
                            (0, s.jsx)(r.Text, {
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

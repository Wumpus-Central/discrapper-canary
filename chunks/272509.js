e.d(i, { default: () => C });
var s = e(54381),
    n = e(473749),
    o = e(793030),
    r = e(704215),
    l = e(481060),
    c = e(266454),
    a = e(749681),
    b = e(661824),
    d = e(626135),
    m = e(258971),
    x = e(981631),
    u = e(921944),
    I = e(49898),
    _ = e(388032),
    p = e(817238);
function C(t) {
    let { guildId: i, transitionState: C, onClose: h, analyticsType: v = r.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            d.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: r.z[v],
                guild_id: i,
            });
        }, [i, v]),
        (0, s.jsx)(o.ExpressiveModal, {
            title: _.intl.string(_.t["2tv5YG"]),
            subtitle: _.intl.string(_.t.pgwlD7),
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
                    text: _.intl.string(_.t.L5eIZ2),
                    onClick: () => {
                        h(),
                            (0, c.Q3)(v, {
                                forceTrack: !0,
                                dismissAction: u.L.SECONDARY,
                                guildId: i,
                            });
                    },
                },
                {
                    variant: "primary",
                    text: _.intl.string(_.t["5e8Mrp"]),
                    onClick: () => {
                        h(),
                            (0, c.Q3)(v, {
                                forceTrack: !0,
                                dismissAction: u.L.PRIMARY,
                                guildId: i,
                            }),
                            (0, a.transitionToGlobalDiscovery)({
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
                            (0, s.jsx)(l.$2U, {
                                color: "currentColor",
                                className: p.wandIcon,
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: _.intl.string(_.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)(b.Z, { className: p.divider }),
                    (0, s.jsxs)("li", {
                        className: p.listItem,
                        children: [
                            (0, s.jsx)(l.wGt, {
                                color: "currentColor",
                                className: p.robotIcon,
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: _.intl.string(_.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, s.jsx)(b.Z, { className: p.divider }),
                    (0, s.jsxs)("li", {
                        className: p.listItem,
                        children: [
                            (0, s.jsx)(l.EO4, {
                                color: "currentColor",
                                className: p.smileIcon,
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: _.intl.string(_.t.wQJMPC),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}

s.d(e, { default: () => _ });
var a = s(627968),
    i = s(64700),
    c = s(158954),
    r = s(554146),
    l = s(397927),
    n = s(826673),
    d = s(837057),
    o = s(813516),
    x = s(954571),
    m = s(310419),
    u = s(652215),
    p = s(49999),
    C = s(488995),
    A = s(985018),
    h = s(449488);
function _(t) {
    let { guildId: e, transitionState: _, onClose: b, analyticsType: f = r.M.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        i.useEffect(() => {
            x.default.track(u.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                type: r.M[f],
                guild_id: e,
            });
        }, [e, f]),
        (0, a.jsx)(c.ExpressiveModal, {
            title: A.intl.string(A.t["2tv5YG"]),
            subtitle: A.intl.string(A.t.pgwlD7),
            transitionState: _,
            size: "sm",
            graphic: {
                type: "lottie",
                lottie: () => s.e("95947").then(s.t.bind(s, 604902, 19)),
                aspectRatio: "6/4",
            },
            onClose: b,
            actions: [
                {
                    variant: "secondary",
                    text: A.intl.string(A.t.L5eIZ2),
                    onClick: () => {
                        b(),
                            (0, n.Dr)(f, {
                                forceTrack: !0,
                                dismissAction: p.i.SECONDARY,
                                guildId: e,
                            });
                    },
                },
                {
                    variant: "primary",
                    text: A.intl.string(A.t["5e8Mrp"]),
                    onClick: () => {
                        b(),
                            (0, n.Dr)(f, {
                                forceTrack: !0,
                                dismissAction: p.i.PRIMARY,
                                guildId: e,
                            }),
                            (0, d.transitionToGlobalDiscovery)({
                                tab: C.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: e,
                                    entrypoint: { name: m.sW.APPLICATION_DIRECTORY_UPSELL_MODAL },
                                },
                            });
                    },
                },
            ],
            children: (0, a.jsxs)("ul", {
                className: h.qI,
                children: [
                    (0, a.jsxs)("li", {
                        className: h.Aw,
                        children: [
                            (0, a.jsx)(l.Dud, {
                                color: "currentColor",
                                className: h.Kb,
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: A.intl.string(A.t["0vKo5F"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(o.A, { className: h.yF }),
                    (0, a.jsxs)("li", {
                        className: h.Aw,
                        children: [
                            (0, a.jsx)(l.CnV, {
                                color: "currentColor",
                                className: h.EQ,
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: A.intl.string(A.t.CprEDO),
                            }),
                        ],
                    }),
                    (0, a.jsx)(o.A, { className: h.yF }),
                    (0, a.jsxs)("li", {
                        className: h.Aw,
                        children: [
                            (0, a.jsx)(l.nm2, {
                                color: "currentColor",
                                className: h.Cf,
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: A.intl.string(A.t.wQJMPC),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}

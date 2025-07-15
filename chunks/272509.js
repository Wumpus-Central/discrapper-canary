n.d(i, { default: () => p });
var s = n(255367),
    e = n(73800),
    o = n(704215),
    a = n(667202),
    r = n(481060),
    l = n(607070),
    c = n(266454),
    b = n(749681),
    d = n(661824),
    m = n(626135),
    x = n(258971),
    u = n(981631),
    I = n(921944),
    _ = n(49898),
    C = n(388032),
    h = n(676305);
function p(t) {
    let { guildId: i, transitionState: p, onClose: N, analyticsType: j = o.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        e.useEffect(() => {
            m.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: o.z[j],
                guild_id: i
            });
        }, [i, j]),
        (0, s.jsx)(a.I, {
            title: C.intl.string(C.t['2tv5YG']),
            subtitle: C.intl.string(C.t.pgwlDw),
            transitionState: p,
            size: 'sm',
            graphic: (0, s.jsx)(r.Fmz, {
                autoplay: !0,
                shouldAnimate: !l.Z.useReducedMotion,
                importData: () => n.e('94792').then(n.t.bind(n, 972951, 19)),
                className: h.animation
            }),
            onClose: N,
            actions: [
                {
                    variant: 'secondary',
                    text: C.intl.string(C.t.L5eIZ2),
                    onClick: () => {
                        (N(),
                            (0, c.Q3)(j, {
                                forceTrack: !0,
                                dismissAction: I.L.SECONDARY,
                                guildId: i
                            }));
                    }
                },
                {
                    variant: 'primary',
                    text: C.intl.string(C.t['5e8Mrq']),
                    onClick: () => {
                        (N(),
                            (0, c.Q3)(j, {
                                forceTrack: !0,
                                dismissAction: I.L.PRIMARY,
                                guildId: i
                            }),
                            (0, b.transitionToGlobalDiscovery)({
                                tab: _.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: i,
                                    entrypoint: { name: x.xF.APPLICATION_DIRECTORY_UPSELL_MODAL }
                                }
                            }));
                    }
                }
            ],
            children: (0, s.jsxs)('ul', {
                className: h.listContainer,
                children: [
                    (0, s.jsxs)('li', {
                        className: h.listItem,
                        children: [
                            (0, s.jsx)(r.$2U, {
                                color: 'currentColor',
                                className: h.wandIcon
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: C.intl.string(C.t['0vKo5O'])
                            })
                        ]
                    }),
                    (0, s.jsx)(d.Z, { className: h.divider }),
                    (0, s.jsxs)('li', {
                        className: h.listItem,
                        children: [
                            (0, s.jsx)(r.wGt, {
                                color: 'currentColor',
                                className: h.robotIcon
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: C.intl.string(C.t.CprEDA)
                            })
                        ]
                    }),
                    (0, s.jsx)(d.Z, { className: h.divider }),
                    (0, s.jsxs)('li', {
                        className: h.listItem,
                        children: [
                            (0, s.jsx)(r.EO4, {
                                color: 'currentColor',
                                className: h.smileIcon
                            }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: C.intl.string(C.t.wQJMPD)
                            })
                        ]
                    })
                ]
            })
        })
    );
}

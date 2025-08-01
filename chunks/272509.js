e.d(i, { default: () => p });
var s = e(255367),
    n = e(73800),
    o = e(704215),
    r = e(667202),
    l = e(481060),
    c = e(266454),
    a = e(749681),
    b = e(661824),
    d = e(626135),
    m = e(258971),
    x = e(981631),
    I = e(921944),
    u = e(49898),
    _ = e(388032),
    C = e(676305);
function p(t) {
    let { guildId: i, transitionState: p, onClose: h, analyticsType: v = o.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            d.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: o.z[v],
                guild_id: i
            });
        }, [i, v]),
        (0, s.jsx)(r.I, {
            title: _.intl.string(_.t['2tv5YG']),
            subtitle: _.intl.string(_.t.pgwlDw),
            transitionState: p,
            size: 'sm',
            graphic: {
                type: 'lottie',
                lottie: () => e.e('94792').then(e.t.bind(e, 972951, 19)),
                aspectRatio: '6/4'
            },
            onClose: h,
            actions: [
                {
                    variant: 'secondary',
                    text: _.intl.string(_.t.L5eIZ2),
                    onClick: () => {
                        (h(),
                            (0, c.Q3)(v, {
                                forceTrack: !0,
                                dismissAction: I.L.SECONDARY,
                                guildId: i
                            }));
                    }
                },
                {
                    variant: 'primary',
                    text: _.intl.string(_.t['5e8Mrq']),
                    onClick: () => {
                        (h(),
                            (0, c.Q3)(v, {
                                forceTrack: !0,
                                dismissAction: I.L.PRIMARY,
                                guildId: i
                            }),
                            (0, a.transitionToGlobalDiscovery)({
                                tab: u.GlobalDiscoveryTab.APPS,
                                newSessionState: {
                                    guildId: i,
                                    entrypoint: { name: m.xF.APPLICATION_DIRECTORY_UPSELL_MODAL }
                                }
                            }));
                    }
                }
            ],
            children: (0, s.jsxs)('ul', {
                className: C.listContainer,
                children: [
                    (0, s.jsxs)('li', {
                        className: C.listItem,
                        children: [
                            (0, s.jsx)(l.$2U, {
                                color: 'currentColor',
                                className: C.wandIcon
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: _.intl.string(_.t['0vKo5O'])
                            })
                        ]
                    }),
                    (0, s.jsx)(b.Z, { className: C.divider }),
                    (0, s.jsxs)('li', {
                        className: C.listItem,
                        children: [
                            (0, s.jsx)(l.wGt, {
                                color: 'currentColor',
                                className: C.robotIcon
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: _.intl.string(_.t.CprEDA)
                            })
                        ]
                    }),
                    (0, s.jsx)(b.Z, { className: C.divider }),
                    (0, s.jsxs)('li', {
                        className: C.listItem,
                        children: [
                            (0, s.jsx)(l.EO4, {
                                color: 'currentColor',
                                className: C.smileIcon
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: _.intl.string(_.t.wQJMPD)
                            })
                        ]
                    })
                ]
            })
        })
    );
}

i.d(e, { default: () => C });
var s = i(255367),
    n = i(73800),
    o = i(704215),
    a = i(481060),
    r = i(607070),
    l = i(266454),
    d = i(749681),
    c = i(661824),
    b = i(626135),
    m = i(258971),
    x = i(981631),
    u = i(921944),
    h = i(49898),
    _ = i(388032),
    I = i(676305);
function C(t) {
    let { guildId: e, transitionState: C, onClose: j, analyticsType: p = o.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            b.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: o.z[p],
                guild_id: e
            });
        }, [e, p]),
        (0, s.jsxs)(a.Y0X, {
            transitionState: C,
            size: a.CgR.DYNAMIC,
            parentComponent: 'AppDirectoryUpsellModal',
            children: [
                (0, s.jsxs)(a.hzk, {
                    className: I.modalContent,
                    children: [
                        (0, s.jsx)(a.Fmz, {
                            autoplay: !0,
                            shouldAnimate: !r.Z.useReducedMotion,
                            importData: () => i.e('94792').then(i.t.bind(i, 972951, 19)),
                            className: I.animation
                        }),
                        (0, s.jsx)(a.X6q, {
                            variant: 'heading-xl/semibold',
                            children: _.intl.string(_.t['2tv5YG'])
                        }),
                        (0, s.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            className: I.subheader,
                            color: 'text-muted',
                            children: _.intl.string(_.t.pgwlDw)
                        }),
                        (0, s.jsxs)('ul', {
                            className: I.listContainer,
                            children: [
                                (0, s.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, s.jsx)(a.$2U, {
                                            color: 'currentColor',
                                            className: I.wandIcon
                                        }),
                                        (0, s.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-default',
                                            children: _.intl.string(_.t['0vKo5O'])
                                        })
                                    ]
                                }),
                                (0, s.jsx)(c.Z, { className: I.divider }),
                                (0, s.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, s.jsx)(a.wGt, {
                                            color: 'currentColor',
                                            className: I.robotIcon
                                        }),
                                        (0, s.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-default',
                                            children: _.intl.string(_.t.CprEDA)
                                        })
                                    ]
                                }),
                                (0, s.jsx)(c.Z, { className: I.divider }),
                                (0, s.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, s.jsx)(a.EO4, {
                                            color: 'currentColor',
                                            className: I.smileIcon
                                        }),
                                        (0, s.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-default',
                                            children: _.intl.string(_.t.wQJMPD)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(a.mzw, {
                    className: I.modalFooter,
                    children: (0, s.jsxs)(a.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, s.jsx)(a.zxk, {
                                variant: 'primary',
                                text: _.intl.string(_.t['5e8Mrq']),
                                onClick: () => {
                                    (j(),
                                        (0, l.Q3)(p, {
                                            forceTrack: !0,
                                            dismissAction: u.L.PRIMARY,
                                            guildId: e
                                        }),
                                        (0, d.transitionToGlobalDiscovery)({
                                            tab: h.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e,
                                                entrypoint: { name: m.xF.APPLICATION_DIRECTORY_UPSELL_MODAL }
                                            }
                                        }));
                                }
                            }),
                            (0, s.jsx)(a.zxk, {
                                variant: 'secondary',
                                text: _.intl.string(_.t.L5eIZ2),
                                onClick: () => {
                                    (j(),
                                        (0, l.Q3)(p, {
                                            forceTrack: !0,
                                            dismissAction: u.L.SECONDARY,
                                            guildId: e
                                        }));
                                }
                            })
                        ]
                    })
                })
            ]
        })
    );
}

i.d(e, { default: () => C });
var s = i(255367),
    n = i(73800),
    o = i(704215),
    l = i(481060),
    a = i(607070),
    r = i(605236),
    c = i(749681),
    d = i(661824),
    b = i(626135),
    m = i(258971),
    x = i(981631),
    u = i(921944),
    h = i(49898),
    I = i(388032),
    _ = i(676305);
function C(t) {
    let { guildId: e, transitionState: C, onClose: j, analyticsType: N = o.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            b.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: o.z[N],
                guild_id: e
            });
        }, [e, N]),
        (0, s.jsxs)(l.Y0X, {
            transitionState: C,
            size: l.CgR.DYNAMIC,
            children: [
                (0, s.jsxs)(l.hzk, {
                    className: _.modalContent,
                    children: [
                        (0, s.jsx)(l.Fmz, {
                            autoplay: !0,
                            shouldAnimate: !a.Z.useReducedMotion,
                            importData: () => i.e('94792').then(i.t.bind(i, 972951, 19)),
                            className: _.animation
                        }),
                        (0, s.jsx)(l.X6q, {
                            variant: 'heading-xl/semibold',
                            children: I.intl.string(I.t['2tv5YG'])
                        }),
                        (0, s.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            className: _.subheader,
                            color: 'text-muted',
                            children: I.intl.string(I.t.pgwlDw)
                        }),
                        (0, s.jsxs)('ul', {
                            className: _.listContainer,
                            children: [
                                (0, s.jsxs)('li', {
                                    className: _.listItem,
                                    children: [
                                        (0, s.jsx)(l.$2U, {
                                            color: 'currentColor',
                                            className: _.wandIcon
                                        }),
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: I.intl.string(I.t['0vKo5O'])
                                        })
                                    ]
                                }),
                                (0, s.jsx)(d.Z, { className: _.divider }),
                                (0, s.jsxs)('li', {
                                    className: _.listItem,
                                    children: [
                                        (0, s.jsx)(l.wGt, {
                                            color: 'currentColor',
                                            className: _.robotIcon
                                        }),
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: I.intl.string(I.t.CprEDA)
                                        })
                                    ]
                                }),
                                (0, s.jsx)(d.Z, { className: _.divider }),
                                (0, s.jsxs)('li', {
                                    className: _.listItem,
                                    children: [
                                        (0, s.jsx)(l.EO4, {
                                            color: 'currentColor',
                                            className: _.smileIcon
                                        }),
                                        (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: I.intl.string(I.t.wQJMPD)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)(l.mzw, {
                    className: _.modalFooter,
                    children: [
                        (0, s.jsx)(l.zxk, {
                            onClick: () => {
                                j(),
                                    (0, r.EW)(N, {
                                        forceTrack: !0,
                                        dismissAction: u.L.PRIMARY,
                                        guildId: e
                                    }),
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: h.GlobalDiscoveryTab.APPS,
                                        newSessionState: {
                                            guildId: e,
                                            entrypoint: { name: m.xF.APPLICATION_DIRECTORY_UPSELL_MODAL }
                                        }
                                    });
                            },
                            children: I.intl.string(I.t['5e8Mrq'])
                        }),
                        (0, s.jsx)(l.zxk, {
                            look: l.zxk.Looks.LINK,
                            onClick: () => {
                                j(),
                                    (0, r.EW)(N, {
                                        forceTrack: !0,
                                        dismissAction: u.L.SECONDARY,
                                        guildId: e
                                    });
                            },
                            color: l.zxk.Colors.PRIMARY,
                            children: I.intl.string(I.t.L5eIZ2)
                        })
                    ]
                })
            ]
        })
    );
}

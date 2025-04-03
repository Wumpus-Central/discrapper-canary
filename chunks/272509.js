s.d(e, { default: () => _ });
var o = s(200651),
    i = s(192379),
    n = s(704215),
    a = s(481060),
    r = s(607070),
    l = s(605236),
    c = s(749681),
    d = s(661824),
    b = s(626135),
    m = s(258971),
    x = s(981631),
    u = s(921944),
    N = s(49898),
    h = s(388032),
    I = s(676305);
function _(t) {
    let { guildId: e, transitionState: _, onClose: C, analyticsType: j = n.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        i.useEffect(() => {
            b.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: n.z[j],
                guild_id: e
            });
        }, [e, j]),
        (0, o.jsxs)(a.Y0X, {
            transitionState: _,
            size: a.CgR.DYNAMIC,
            children: [
                (0, o.jsxs)(a.hzk, {
                    className: I.modalContent,
                    children: [
                        (0, o.jsx)(a.Fmz, {
                            autoplay: !0,
                            shouldAnimate: !r.Z.useReducedMotion,
                            importData: () => s.e('94792').then(s.t.bind(s, 972951, 19)),
                            className: I.animation
                        }),
                        (0, o.jsx)(a.X6q, {
                            variant: 'heading-xl/semibold',
                            children: h.NW.string(h.t['2tv5YG'])
                        }),
                        (0, o.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            className: I.subheader,
                            color: 'text-muted',
                            children: h.NW.string(h.t.pgwlDw)
                        }),
                        (0, o.jsxs)('ul', {
                            className: I.listContainer,
                            children: [
                                (0, o.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, o.jsx)(a.$2U, {
                                            color: 'currentColor',
                                            className: I.wandIcon
                                        }),
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: h.NW.string(h.t['0vKo5O'])
                                        })
                                    ]
                                }),
                                (0, o.jsx)(d.Z, { className: I.divider }),
                                (0, o.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, o.jsx)(a.wGt, {
                                            color: 'currentColor',
                                            className: I.robotIcon
                                        }),
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: h.NW.string(h.t.CprEDA)
                                        })
                                    ]
                                }),
                                (0, o.jsx)(d.Z, { className: I.divider }),
                                (0, o.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, o.jsx)(a.EO4, {
                                            color: 'currentColor',
                                            className: I.smileIcon
                                        }),
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: h.NW.string(h.t.wQJMPD)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, o.jsxs)(a.mzw, {
                    className: I.modalFooter,
                    children: [
                        (0, o.jsx)(a.zxk, {
                            onClick: () => {
                                C(),
                                    (0, l.EW)(j, {
                                        forceTrack: !0,
                                        dismissAction: u.L.PRIMARY,
                                        guildId: e
                                    }),
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: N.GlobalDiscoveryTab.APPS,
                                        newSessionState: {
                                            guildId: e,
                                            entrypoint: { name: m.xF.APPLICATION_DIRECTORY_UPSELL_MODAL }
                                        }
                                    });
                            },
                            children: h.NW.string(h.t['5e8Mrq'])
                        }),
                        (0, o.jsx)(a.zxk, {
                            look: a.zxk.Looks.LINK,
                            onClick: () => {
                                C(),
                                    (0, l.EW)(j, {
                                        forceTrack: !0,
                                        dismissAction: u.L.SECONDARY,
                                        guildId: e
                                    });
                            },
                            color: a.zxk.Colors.PRIMARY,
                            children: h.NW.string(h.t.L5eIZ2)
                        })
                    ]
                })
            ]
        })
    );
}

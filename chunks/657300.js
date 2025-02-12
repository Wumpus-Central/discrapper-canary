i.d(e, { default: () => C });
var s = i(200651),
    n = i(192379),
    a = i(704215),
    o = i(481060),
    l = i(607070),
    r = i(605236),
    d = i(661824),
    c = i(626135),
    m = i(132871),
    x = i(147890),
    u = i(981631),
    h = i(921944),
    I = i(388032),
    _ = i(880557);
function C(t) {
    let { guildId: e, transitionState: C, onClose: j, analyticsType: N = a.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        n.useEffect(() => {
            c.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: a.z[N],
                guild_id: e
            });
        }, [e, N]),
        (0, s.jsxs)(o.Y0X, {
            transitionState: C,
            size: o.CgR.DYNAMIC,
            children: [
                (0, s.jsxs)(o.hzk, {
                    className: _.modalContent,
                    children: [
                        (0, s.jsx)(o.Fmz, {
                            autoplay: !0,
                            shouldAnimate: !l.Z.useReducedMotion,
                            importData: () => i.e('76241').then(i.t.bind(i, 554690, 19)),
                            className: _.animation
                        }),
                        (0, s.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            children: I.intl.string(I.t['2tv5YG'])
                        }),
                        (0, s.jsx)(o.Text, {
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
                                        (0, s.jsx)(o.$2U, {
                                            color: 'currentColor',
                                            className: _.wandIcon
                                        }),
                                        (0, s.jsx)(o.Text, {
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
                                        (0, s.jsx)(o.wGt, {
                                            color: 'currentColor',
                                            className: _.robotIcon
                                        }),
                                        (0, s.jsx)(o.Text, {
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
                                        (0, s.jsx)(o.EO4, {
                                            color: 'currentColor',
                                            className: _.smileIcon
                                        }),
                                        (0, s.jsx)(o.Text, {
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
                (0, s.jsxs)(o.mzw, {
                    className: _.modalFooter,
                    children: [
                        (0, s.jsx)(o.zxk, {
                            onClick: () => {
                                j(),
                                    (0, r.EW)(N, {
                                        forceTrack: !0,
                                        dismissAction: h.L.PRIMARY,
                                        guildId: e
                                    }),
                                    (0, x.dx)({
                                        guildId: e,
                                        entrypoint: { name: m.n3.APPLICATION_DIRECTORY_UPSELL_MODAL }
                                    });
                            },
                            children: I.intl.string(I.t['5e8Mrq'])
                        }),
                        (0, s.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            onClick: () => {
                                j(),
                                    (0, r.EW)(N, {
                                        forceTrack: !0,
                                        dismissAction: h.L.SECONDARY,
                                        guildId: e
                                    });
                            },
                            color: o.zxk.Colors.PRIMARY,
                            children: I.intl.string(I.t.L5eIZ2)
                        })
                    ]
                })
            ]
        })
    );
}

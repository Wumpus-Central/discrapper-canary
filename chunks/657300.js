s.d(e, { default: () => _ });
var i = s(200651),
    a = s(192379),
    o = s(704215),
    n = s(481060),
    r = s(607070),
    l = s(605236),
    d = s(661824),
    c = s(626135),
    m = s(132871),
    x = s(147890),
    u = s(981631),
    N = s(921944),
    h = s(388032),
    I = s(958587);
function _(t) {
    let { guildId: e, transitionState: _, onClose: C, analyticsType: j = o.z.APP_DIRECTORY_UPSELL_MODAL } = t;
    return (
        a.useEffect(() => {
            c.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                type: o.z[j],
                guild_id: e
            });
        }, [e, j]),
        (0, i.jsxs)(n.Y0X, {
            transitionState: _,
            size: n.CgR.DYNAMIC,
            children: [
                (0, i.jsxs)(n.hzk, {
                    className: I.modalContent,
                    children: [
                        (0, i.jsx)(n.Fmz, {
                            autoplay: !0,
                            shouldAnimate: !r.Z.useReducedMotion,
                            importData: () => s.e('76241').then(s.t.bind(s, 554690, 19)),
                            className: I.animation
                        }),
                        (0, i.jsx)(n.X6q, {
                            variant: 'heading-xl/semibold',
                            children: h.NW.string(h.t['2tv5YG'])
                        }),
                        (0, i.jsx)(n.Text, {
                            variant: 'text-md/medium',
                            className: I.subheader,
                            color: 'text-muted',
                            children: h.NW.string(h.t.pgwlDw)
                        }),
                        (0, i.jsxs)('ul', {
                            className: I.listContainer,
                            children: [
                                (0, i.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, i.jsx)(n.$2U, {
                                            color: 'currentColor',
                                            className: I.wandIcon
                                        }),
                                        (0, i.jsx)(n.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: h.NW.string(h.t['0vKo5O'])
                                        })
                                    ]
                                }),
                                (0, i.jsx)(d.Z, { className: I.divider }),
                                (0, i.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, i.jsx)(n.wGt, {
                                            color: 'currentColor',
                                            className: I.robotIcon
                                        }),
                                        (0, i.jsx)(n.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-normal',
                                            children: h.NW.string(h.t.CprEDA)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(d.Z, { className: I.divider }),
                                (0, i.jsxs)('li', {
                                    className: I.listItem,
                                    children: [
                                        (0, i.jsx)(n.EO4, {
                                            color: 'currentColor',
                                            className: I.smileIcon
                                        }),
                                        (0, i.jsx)(n.Text, {
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
                (0, i.jsxs)(n.mzw, {
                    className: I.modalFooter,
                    children: [
                        (0, i.jsx)(n.zxk, {
                            onClick: () => {
                                C(),
                                    (0, l.EW)(j, {
                                        forceTrack: !0,
                                        dismissAction: N.L.PRIMARY,
                                        guildId: e
                                    }),
                                    (0, x.dx)({
                                        guildId: e,
                                        entrypoint: { name: m.n3.APPLICATION_DIRECTORY_UPSELL_MODAL }
                                    });
                            },
                            children: h.NW.string(h.t['5e8Mrq'])
                        }),
                        (0, i.jsx)(n.zxk, {
                            look: n.zxk.Looks.LINK,
                            onClick: () => {
                                C(),
                                    (0, l.EW)(j, {
                                        forceTrack: !0,
                                        dismissAction: N.L.SECONDARY,
                                        guildId: e
                                    });
                            },
                            color: n.zxk.Colors.PRIMARY,
                            children: h.NW.string(h.t.L5eIZ2)
                        })
                    ]
                })
            ]
        })
    );
}

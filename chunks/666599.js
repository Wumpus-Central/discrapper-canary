a.d(r, { default: () => h });
var s = a(200651);
a(192379);
var t = a(642128),
    n = a(692547),
    i = a(481060),
    l = a(118012),
    o = a(313201),
    d = a(388032),
    c = a(388145);
let m = (e) => {
        let { currentNumber: r, thresholdNumber: a, currentLabel: o, isPercent: m = !1 } = e,
            h = null != a ? Math.floor((r / a) * 100) : 0,
            x = d.NW.formatToPlainString(d.t.YMor7u, { count: r }),
            u = null != a ? d.NW.formatToPlainString(d.t.YMor7u, { count: a }) : '--',
            g = (0, i.dQu)(n.Z.unsafe_rawColors.RED_400).hex(),
            p = (0, i.dQu)(n.Z.unsafe_rawColors.YELLOW_300).hex();
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: c.progressWrapper,
                    children: [
                        (0, s.jsx)('div', { className: c.progressBackground }),
                        (0, s.jsx)(i.AMe, {
                            from: { width: 0 },
                            to: { width: h },
                            config: {
                                tension: 200,
                                friction: 20,
                                mass: 50,
                                clamp: !0
                            },
                            shouldAnimate: 'animate-always',
                            children: (e) => {
                                let { width: r } = e;
                                return (0, s.jsx)(t.animated.div, {
                                    className: c.progressBar,
                                    style: {
                                        width: r.interpolate((e) => ''.concat(e, '%')),
                                        backgroundColor: r.interpolate((e) => (e < 33 ? g : p))
                                    }
                                });
                            }
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: c.labelWrapper,
                    children: [
                        (0, s.jsxs)('div', {
                            className: c.__invalid_current,
                            children: [
                                (0, s.jsx)(l.Z, {
                                    color: h < 33 ? l.Z.Colors.ERROR : l.Z.Colors.STATUS_YELLOW,
                                    className: c.bold,
                                    children: m ? ''.concat(x, '%') : x
                                }),
                                (0, s.jsxs)(i.Text, {
                                    'aria-describedby': 'health-score-details-score-explain',
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: [
                                        o,
                                        (0, s.jsx)('sup', {
                                            'aria-hidden': !0,
                                            children: '1'
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: c.requirement,
                            children: [
                                (0, s.jsx)(i.Text, {
                                    className: c.bold,
                                    variant: 'text-sm/semibold',
                                    children: m ? ''.concat(u, '%') : u
                                }),
                                (0, s.jsx)(i.Text, {
                                    'aria-describedby': 'health-score-details-requirement-explain',
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: d.NW.string(d.t['A+mTPj'])
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    h = (e) => {
        let r,
            a,
            t,
            { guildChecklist: n, transitionState: l, onClose: h } = e,
            x = (0, o.Dt)(),
            { retentionHealthy: u, engagementHealthy: g, healthScore: p } = n,
            { avg_nonnew_participators: N, avg_nonnew_communicators: _, perc_ret_w1_intentful: j } = p;
        if (
            (!g &&
                null != N &&
                N < 40 &&
                (a = (0, s.jsxs)('div', {
                    className: c.failingBlock,
                    children: [
                        (0, s.jsx)(i.X6q, {
                            className: c.marginAfter,
                            variant: 'heading-md/semibold',
                            children: d.NW.string(d.t.sEzDIS)
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            children: d.NW.string(d.t.zNp3Ki)
                        }),
                        (0, s.jsx)(m, {
                            currentNumber: N,
                            thresholdNumber: 40,
                            currentLabel: d.NW.string(d.t.BtTX9P)
                        })
                    ]
                })),
            !g &&
                null != _ &&
                _ < 20 &&
                (t = (0, s.jsxs)('div', {
                    className: c.failingBlock,
                    children: [
                        (0, s.jsx)(i.X6q, {
                            className: c.marginAfter,
                            variant: 'heading-md/semibold',
                            children: d.NW.string(d.t.fWQTbm)
                        }),
                        (0, s.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            children: d.NW.string(d.t.Tl8MR0)
                        }),
                        (0, s.jsx)(m, {
                            currentNumber: _,
                            thresholdNumber: 20,
                            currentLabel: d.NW.string(d.t.PFQI7u)
                        })
                    ]
                })),
            !u && null != j)
        ) {
            let e = Math.floor(100 * j);
            r = (0, s.jsxs)('div', {
                className: c.failingBlock,
                children: [
                    (0, s.jsx)(i.X6q, {
                        className: c.marginAfter,
                        variant: 'heading-md/semibold',
                        children: d.NW.string(d.t.YF6x29)
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        children: d.NW.format(d.t.kMBzFh, {})
                    }),
                    (0, s.jsx)(m, {
                        currentNumber: e,
                        thresholdNumber: 10,
                        currentLabel: d.NW.string(d.t.WpwyIi),
                        isPercent: !0
                    })
                ]
            });
        }
        return (0, s.jsxs)(i.Y0X, {
            transitionState: l,
            size: i.CgR.MEDIUM,
            className: c.__invalid_modal,
            'aria-labelledby': x,
            children: [
                (0, s.jsxs)(i.hzk, {
                    className: c.content,
                    children: [
                        (0, s.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            className: c.modalHeader,
                            id: x,
                            children: d.NW.string(d.t['+GHxPz'])
                        }),
                        (0, s.jsx)(i.Text, {
                            className: c.marginAfter,
                            variant: 'text-sm/normal',
                            children: d.NW.string(d.t.QOs3XF)
                        }),
                        (0, s.jsx)('div', { className: c.separator }),
                        a,
                        t,
                        r,
                        (0, s.jsx)('div', { className: c.separator }),
                        (0, s.jsxs)(i.Text, {
                            className: c.marginAfter,
                            color: 'header-secondary',
                            id: 'health-score-details-score-explain',
                            variant: 'text-sm/normal',
                            children: [
                                (0, s.jsx)('sup', {
                                    'aria-hidden': !0,
                                    children: '1 '
                                }),
                                d.NW.string(d.t.tN5kb2)
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(i.olH, {
                    onClick: h,
                    className: c.closeButton
                })
            ]
        });
    };
